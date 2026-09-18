# Shop V2 — Pagination real prev/next label fix IMPLEMENTATION READY

Date: 2026-09-17

## Runtime defect

After switching Shop to 12 products per page, runtime screenshots for pages 1, 2 and 8 show:

- real WooCommerce prev/next controls are arrow-only;
- fake CSS pseudo-labels appear on the opposite endpoint states where no control should exist.

Desired behavior:
- page 1: no Previous; real Next page → on the right;
- middle pages: real ← Previous on the left and real Next page → on the right;
- last page: real ← Previous on the left; no Next.

## Verified root cause

Installed WooCommerce version: 10.4.3.

WooCommerce 10.4.3 defines woocommerce_pagination() with no arguments and passes only total/current/base/format to loop/pagination.php.

Therefore the current archive call that supplies prev_text / next_text arguments is misleading: those arguments are not consumed by woocommerce_pagination().

The loop/pagination.php template owns prev_text / next_text through the woocommerce_pagination_args filter.

Current Shop CSS separately creates fake endpoint labels with:
- .is-first-page::before
- .is-last-page::after

These pseudo-labels must be removed.

## Bounded implementation

### functions.php
Add a Shop/product-taxonomy scoped woocommerce_pagination_args filter:
- prev_text = ← Previous
- next_text = Next page →

Keep WooCommerce as the real link / page owner.

### archive-product.php
Simplify the pagination render to:
- static sf-shop-v2-pagination-shell class
- woocommerce_pagination();

Remove the now-unused is-first-page / is-last-page state classes and ignored function arguments.

### spatial-flow.css
Remove all fake pagination pseudo-element content and their mobile responsive rules.
Keep the real prev/next link positioning and styling.

## Candidate validation

Prepared against the user's current files:
- functions.php PHP syntax: PASS
- archive-product.php PHP syntax: PASS
- CSS braces balanced: 3549 / 3549
- CSS comments balanced: 276 / 276
- fake is-first-page::before occurrences: 0
- fake is-last-page::after occurrences: 0
- fake Previous/Next generated-content labels: 0
- loop_shop_per_page remains exactly once
- woocommerce_pagination_args filter appears exactly once
- archive contains one normal woocommerce_pagination(); call

## Status

IMPLEMENTATION READY / USER TO APPLY EXACT REPLACEMENTS / SOURCE VALIDATION REQUIRED BEFORE RUNTIME REFRESH.
