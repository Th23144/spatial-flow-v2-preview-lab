# Shop V2 — Pagination runtime defect diagnosed after 12-per-page

Date: 2026-09-17

## Runtime evidence

The 12-products-per-page change is working:
- Shop now renders 3 desktop rows;
- total pages are 8.

User supplied screenshots for pagination states on page 1, page 2 and page 8.

Observed defect:

### Page 1
Current:
- left shows decorative “← Previous” even though no previous page exists;
- right shows only a bare “→” instead of “Next page →”.

Expected:
- left empty;
- right real clickable “Next page →”.

### Middle page (example page 2)
Current:
- left real previous control renders only “←”;
- right real next control renders only “→”.

Expected:
- left real clickable “← Previous”;
- right real clickable “Next page →”.

### Last page (page 8)
Current:
- left real previous control renders only “←”;
- right shows decorative “Next page →” even though no next page exists.

Expected:
- left real clickable “← Previous”;
- right empty.

## Root cause

Two independent layers are conflicting:

1. WooCommerce's pagination template owns the real prev/next links and currently outputs arrow-only labels.
2. Shop CSS adds fake pseudo-element labels on missing endpoint controls:
   - .is-first-page::before => “← Previous”
   - .is-last-page::after => “Next page →”

This makes the full labels appear only where the controls should NOT exist, while the actual clickable controls remain arrow-only.

The archive call currently passes prev_text / next_text into woocommerce_pagination(), but WooCommerce's pagination template does not use those passed values as the final visible labels; the correct extension point is the woocommerce_pagination_args filter.

## Correct fix direction

- preserve WooCommerce as pagination/query owner;
- use a Shop-scoped woocommerce_pagination_args filter to set:
  - prev_text = ← Previous
  - next_text = Next page →
- remove/disable the fake first/last pseudo-element labels from Shop CSS;
- keep the existing absolute left/right placement of the real prev/next list items;
- first page: no previous control;
- middle pages: both controls;
- last page: no next control.

No custom pagination engine is needed.

Status:
DIAGNOSED / FIX READY TO PREPARE.
