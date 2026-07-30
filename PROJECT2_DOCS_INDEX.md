# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-30  
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
9. project2-progress/STEP_4F_CHECKOUT_PAYMENT_ARCHITECTURE_DECISION_PROPOSAL.md
10. project2-progress/STEP_4F_PAYMENT_STEP_03_LAYOUT_AND_CRYPTO_SUBFLOW_CORRECTION.md
11. project2-progress/STEP_4F_CHECKOUT_V2_REFERENCE_SYSTEM_EXECUTION_PLAN.md
12. preview/checkout-v2/index.html
```

Historical Cart execution records remain in `project2-progress/`, but the final closure document supersedes intermediate Cart status statements.

The historical files below remain available for comparison but are not the authoritative future Checkout flow:

```text
preview/spatial-flow-checkout-v1.html
preview/spatial-flow-thank-you-v1.html
```

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

Current mainline work:

```text
Build and approve the interactive Checkout V2 HTML reference system before any live Checkout reconstruction.
```

Authoritative plan:

```text
project2-progress/STEP_4F_CHECKOUT_V2_REFERENCE_SYSTEM_EXECUTION_PLAN.md
```

Current reference entry:

```text
preview/checkout-v2/index.html
```

Current approved Checkout semantics:

```text
01 Contact / Address
02 Shipping
03 Payment
04 Order Confirmed / Thank You / Receipt
```

Current payment architecture:

```text
- one WooCommerce commerce core
- main-store Checkout and DIY-owned Checkout entry experiences
- dynamic payment-method framework
- Cryptocurrency as the only confirmed active method at this planning point
- two-column desktop Step 03
- dedicated Step-03 Crypto workspace
- one canonical WooCommerce-owned result flow
```

## Checkout V2 reference package

Current files:

```text
preview/checkout-v2/index.html
preview/checkout-v2/assets/checkout-v2.css
preview/checkout-v2/assets/checkout-v2.js
```

Planned state files:

```text
step-01-contact-address.html
step-02-shipping.html
step-03-payment.html
step-03-crypto-select.html
step-03-crypto-invoice.html
step-03-crypto-confirming.html
step-03-crypto-expired.html
step-03-crypto-failed.html
step-04-order-confirmed.html
step-04-payment-pending.html
```

The final package must link to the existing V2 Cart, Shop, Product and Home references and provide a complete clickable simulation without broken routes.

Do not update the existing Cart `Go to checkout` link until the new main Step 01–04 path exists and has no dead links.

## Current Checkout V2 build order

```text
Phase V2-1 shared shell and interactive hub
→ Phase V2-2 Contact / Address
→ Phase V2-3 Shipping
→ Phase V2-4 Payment-method shell
→ Phase V2-5 Crypto asset/network selection
→ Phase V2-6 Crypto invoice / waiting
→ Phase V2-7 confirming and recovery states
→ Phase V2-8 confirmed / pending result states
→ Phase V2-9 cross-page link audit
→ Phase V2-10 desktop/mobile static-flow closure
```

## Remaining execution order

```text
Complete and approve Checkout V2 reference system
→ Checkout live ownership audit, implementation and closure
→ Thank You current 1:1 implementation / closure as part of the approved result system
→ Home
→ Wishlist / Track Order / Search / 404
→ About / Services / FAQ / Contact / policy pages
→ Blog home / issue / article and blog shell
```

## Hard boundaries

```text
- preserve WordPress and WooCommerce operational ownership
- preserve backend editability
- no fake products, prices, totals, shipping or Coupon data in the live implementation
- no new plugin or Elementor dependency without explicit approval
- use bounded, reversible source operations
- prefer exact in-place replacement over append-only CSS
- do not alter version 2.7.8 without explicit approval
- do not begin live Checkout PHP, JavaScript, CartFlows, gateway or broad CSS work until the V2 reference system is approved
- do not overwrite or delete the historical V1 Checkout and Thank You references
```
