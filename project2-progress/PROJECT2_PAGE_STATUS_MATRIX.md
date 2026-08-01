# Project 2 · Page Status Matrix

Last updated: 2026-08-01  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status rule

Only two page statuses are allowed:

```text
Completed 1:1
Not done
```

`Completed 1:1` requires live WordPress/WooCommerce implementation, desktop/mobile validation, functional regression and backend-editability validation.

Accepted static HTML, visual approval or partial functionality do not count as page completion.

## 1. Shared global shell

| Area | Status | Notes |
|---|---|---|
| Main-site Header | Completed 1:1 | Editorial header replacement and dynamic navigation behavior passed. |
| Main-site Footer | Completed 1:1 | Editorial footer replacement and backend-editable content passed. |
| Blog Header/Footer branch | Not done | No independent current 1:1 acceptance. |

## 2. Main commerce pages

| Page | Static reference | Status | Notes |
|---|---|---|---|
| Home | `preview/spatial-flow-v1.html` | Not done | Earlier work does not count as current closure. |
| Shop archive | `preview/spatial-flow-shop-v1.html` | Completed 1:1 | Desktop/mobile, filters, product grid, pagination, regression and backend editability passed. |
| Single Product | `preview/spatial-flow-product-v1.html` | Completed 1:1 | Gallery, summary, options, attributes, related products, regression and backend mappings passed. |
| Cart | `preview/spatial-flow-cart-v1.html` | Completed 1:1 | Strict geometry, mobile review, native regression, backend editability and invisible-frame removal passed. |
| Checkout | Step 01/02/03 and Crypto references under `preview/` | Not done | S5 state family is accepted. S6 verification/recovery states are implemented and awaiting review. Live implementation and final 1:1 closure have not started. |
| Thank You / result system | `preview/spatial-flow-thank-you-v1.html` | Not done | S7 must review/rework Step 04 after S6 acceptance. |

## 3. Account and utility pages

| Page | Status |
|---|---|
| Wishlist | Not done |
| Track Order | Not done |
| Account | Not done |
| Search | Not done |
| 404 | Not done |

## 4. Brand, service and support pages

| Page | Status |
|---|---|
| About Us | Not done |
| Services | Not done |
| FAQ / Help | Not done |
| Contact | Not done |
| Utility / policy pages | Not done |

## 5. Blog / Journal pages

| Page family | Status |
|---|---|
| Blog home | Not done |
| Blog issue | Not done |
| Blog article | Not done |

## 6. Completed page count

```text
Main-site Header
Main-site Footer
Shop archive
Single Product
Cart
```

All other pages and page families remain:

```text
Not done
```

## 7. Checkout static references

```text
preview/spatial-flow-checkout-v1.html
preview/spatial-flow-checkout-shipping-v1.html
preview/spatial-flow-checkout-payment-v1.html
preview/spatial-flow-checkout-crypto-invoice-v1.html
preview/spatial-flow-checkout-crypto-invoice-v1.css
preview/spatial-flow-checkout-crypto-invoice-v1.js
preview/spatial-flow-checkout-crypto-states-v1.css
preview/spatial-flow-checkout-crypto-states-v1.js
preview/spatial-flow-checkout-crypto-select-v1.html
preview/spatial-flow-checkout-crypto-workspace-future-v1.html
preview/spatial-flow-thank-you-v1.html
```

Reference roles:

```text
crypto-select-v1.html:
accepted future asset/network interaction reference

crypto-workspace-future-v1.html:
accepted isolated future multi-asset architecture reference

crypto-states-v1.css/js:
current isolated S6 verification/recovery state layer
```

Future references remain outside the current fixed-USDT/TRON route.

Do not create confirming/expired/failed pages merely because they appeared in an early generic plan. Approved real states are represented inside the existing Step-03 Workspace.

## 8. Approved Checkout semantics

```text
01 Contact / Address
02 Shipping
03 Payment
04 Order Confirmed / Thank You / Receipt
```

Boundaries:

```text
- desktop Checkout uses two columns
- payment methods come from genuine WooCommerce availability
- current confirmed method is Cryptocurrency
- current plugin supports fixed USDT on TRON / TRC20
- Cryptocurrency uses a dedicated Step-03 Workspace
- there is one final Checkout commitment action
- no redundant fixed-route Crypto confirmation page
- Step 04 never asks the customer to pay or confirm again
```

## 9. Accepted Checkout static gates

```text
S3 main Payment surface
Step-03 reusable payment host
S4A future selector reference
S4B capability/integration contract
S5 fixed Waiting / Preparing / bootstrap-failure state family
future multi-asset integrated Workspace reference
```

## 10. Current S6 review gate

Implemented S6 states:

```text
verification_failed
retryable temporary verification error
manual_review
cancelled
paid_confirmed transition boundary
unfinished-payment recovery
```

Deterministic failure reasons:

```text
receiver mismatch
transaction predating the invoice
wrong token / no qualifying USDT transfer
amount too low
duplicate transaction
```

Default S5 remains unchanged unless a static review parameter is supplied.

S6 prohibits:

```text
automatic payment detection
continuous polling
live confirmation counts
operational expiry/replacement invoice behavior
automatic underpayment/overpayment workflows
Step-04 implementation
```

## 11. Current Checkout execution order

```text
S6 review and acceptance
→ S7 Step 04 result
→ S8 full relative-link/session-state audit
→ S9 1366 / 390 / 360 static acceptance
→ live Checkout ownership audit
→ functional reconstruction preserving WooCommerce/plugin authority
→ Sandbox and unfinished-payment recovery testing
→ final Checkout 1:1 closure
```

## 12. Current deployed Cart baseline

```text
functions.php
Version: 2.7.8
SHA256: 5bd9f8b307d1b59eaa92bf31d3640e2d4ba48bca6de7a640b705d5e75f9ef00b

assets/js/spatial-flow.js
SHA256: 7442ee92167ae383b933c6db0281f14ea56a75733339818c3e4858d77d52651b

assets/css/spatial-flow.css
SHA256: 79ab7e08308903f0e1693076b4817402515ada52944c575c1e827324cc6161fd
```

## 13. Hard boundary

```text
- preserve backend editability
- WooCommerce/plugin remain the source of transaction truth
- do not modify live Checkout, CartFlows or gateway behavior during static work
- do not hardcode dynamic commerce data where editable sources exist
- do not begin S7 before S6 acceptance
- do not mark Checkout Completed 1:1 before live implementation, regression and backend-editability closure
```
