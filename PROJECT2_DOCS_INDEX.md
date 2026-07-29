# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-29  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Authoritative read order

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
4. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
5. PROJECT2_CSS_MAINTENANCE_POLICY.md
6. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
7. project2-progress/STEP_4E_B2_R5_E6_FINAL_CART_1_TO_1_ACCEPTANCE_AND_CLOSURE.md
8. project2-progress/CART_DEFERRED_POLISH_BACKLOG.md
9. preview/spatial-flow-checkout-v1.html
```

Historical Cart execution records remain in `project2-progress/`, but the final closure document supersedes intermediate Cart status statements.

## Page-status rule

```text
Completed 1:1
Not done
```

Historical implementation, accepted static HTML or partial fixes do not count as page completion. The authoritative page-level status is maintained in:

```text
project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
```

## Completed 1:1

```text
- Main-site Header
- Main-site Footer
- Shop archive
- Single Product
- Cart
```

## Cart final status

```text
Cart: Completed 1:1
```

Authoritative closure:

```text
project2-progress/STEP_4E_B2_R5_E6_FINAL_CART_1_TO_1_ACCEPTANCE_AND_CLOSURE.md
```

Accepted Cart scope:

```text
- approved desktop static contract implemented on the live WooCommerce Cart
- final 1366-width complete composition passed
- 390px and 360px mobile acceptance passed
- no horizontal overflow, clipping or overlap
- invisible table-frame defect removed
- quantity, counts, totals, shipping, Coupon, Remove / Undo, empty Cart and checkout navigation passed
- backend editability passed
- WooCommerce template, nonces, AJAX and operational ownership preserved
- message / info / error Notice component coverage passed
```

## Current exact deployed files

```text
functions.php
Size: 557,249 bytes
Logical lines: 10,414
SHA256: 5bd9f8b307d1b59eaa92bf31d3640e2d4ba48bca6de7a640b705d5e75f9ef00b
Version: 2.7.8

assets/js/spatial-flow.js
Size: 78,143 bytes
Logical lines: 2,242
SHA256: 7442ee92167ae383b933c6db0281f14ea56a75733339818c3e4858d77d52651b

assets/css/spatial-flow.css
Deployed from: spatial-flow(43).css
Size: 703,035 bytes
Logical lines: 23,543
SHA256: 79ab7e08308903f0e1693076b4817402515ada52944c575c1e827324cc6161fd
Braces: 3,653 / 3,653
Comments: 338 / 338
CSS parser errors: 0
```

Cancelled FIX4 remains cancelled and must never be executed.

## Deferred Cart polish

The following item is open but non-blocking:

```text
Mobile removed-item Notice
Approved future visible copy: Item removed. Undo?
Status: approved direction / not implemented
```

Authoritative backlog:

```text
project2-progress/CART_DEFERRED_POLISH_BACKLOG.md
```

This item does not change the completed Cart status unless a concrete regression is found.

## Current active page

```text
Checkout: Not done
```

Current next mainline task:

```text
Begin the current Checkout 1:1 source/state audit against:
preview/spatial-flow-checkout-v1.html
```

Earlier SAFE5 functionality and historical Checkout styling remain useful evidence, but they do not count as current 1:1 completion.

## Remaining execution order

```text
Checkout current 1:1 audit, implementation and closure
→ Thank You current 1:1 implementation / closure
→ Home
→ Wishlist / Track Order / Search / 404
→ About / Services / FAQ / Contact / policy pages
→ Blog home / issue / article and blog shell
```

## Hard boundaries

```text
- preserve WordPress and WooCommerce operational ownership
- preserve backend editability
- no fake products, prices, totals, shipping or Coupon data
- no new plugin or Elementor dependency without explicit approval
- use bounded, reversible source operations
- prefer exact in-place replacement over append-only CSS
- do not alter version 2.7.8 without explicit approval
```
