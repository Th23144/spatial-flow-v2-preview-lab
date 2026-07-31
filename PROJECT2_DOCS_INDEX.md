# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-31  
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
11. project2-progress/STEP_4F_CHECKOUT_STATIC_FLOW_COMPLETION_PLAN.md
12. project2-progress/STEP_4F_CHECKOUT_CONTEXT_PANEL_ARCHITECTURE_APPROVAL_AND_STATIC_IMPLEMENTATION.md
13. project2-progress/STEP_4F_S3_CONTEXT_PANEL_AND_PAYMENT_PAGE_IMPLEMENTATION.md
14. project2-progress/STEP_4F_S3_MOBILE_COMMERCE_SURFACE_VISUAL_ENHANCEMENT_PROPOSAL.md
15. project2-progress/STEP_4F_S3_MOBILE_COMMERCE_SURFACE_STRUCTURE_LOCKED_IMPLEMENTATION.md
16. project2-progress/STEP_4F_S3_FINAL_STATIC_CHECKOUT_AND_MOBILE_COMMERCE_SURFACE_ACCEPTANCE.md
17. project2-progress/STEP_4F_S4A_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_IMPLEMENTATION.md
18. preview/spatial-flow-checkout-v1.html
19. preview/spatial-flow-checkout-shipping-v1.html
20. preview/spatial-flow-checkout-payment-v1.html
21. preview/spatial-flow-checkout-crypto-select-v1.html
22. preview/spatial-flow-checkout-mobile-commerce-v1.css
23. preview/spatial-flow-checkout-crypto-v1.css
24. preview/spatial-flow-checkout-crypto-v1.js
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

Deferred non-blocking Cart polish remains in:

```text
project2-progress/CART_DEFERRED_POLISH_BACKLOG.md
```

## Current exact deployed files

```text
functions.php
SHA256: 5bd9f8b307d1b59eaa92bf31d3640e2d4ba48bca6de7a640b705d5e75f9ef00b
Version: 2.7.8

assets/js/spatial-flow.js
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

## Checkout terminology correction

```text
V2 = Project 2 / repository name:
Th23144/spatial-flow-v2-preview-lab
```

It does not mean a new `checkout-v2` product version or directory.

The incorrectly created `preview/checkout-v2/` experiment and its plan were removed.

## Current active page

```text
Checkout: Not done
Phase S3: accepted and closed
Phase S4A: implemented / awaiting visual and interaction review
Current artifact: preview/spatial-flow-checkout-crypto-select-v1.html
Phase S4B: blocked pending payment-plugin capability decision
Phase S5: not started
```

Current mainline work:

```text
Complete and link the Checkout static page family inside the existing preview/ directory before any live Checkout reconstruction.
```

Authoritative plan:

```text
project2-progress/STEP_4F_CHECKOUT_STATIC_FLOW_COMPLETION_PLAN.md
```

S4A implementation record:

```text
project2-progress/STEP_4F_S4A_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_IMPLEMENTATION.md
```

## Approved linked static flow

```text
preview/spatial-flow-cart-v1.html
→ preview/spatial-flow-checkout-v1.html
→ preview/spatial-flow-checkout-shipping-v1.html
→ preview/spatial-flow-checkout-payment-v1.html
→ preview/spatial-flow-checkout-crypto-select-v1.html
→ preview/spatial-flow-checkout-crypto-invoice-v1.html
→ preview/spatial-flow-checkout-crypto-confirming-v1.html
→ preview/spatial-flow-thank-you-v1.html
```

Recovery pages planned:

```text
preview/spatial-flow-checkout-crypto-expired-v1.html
preview/spatial-flow-checkout-crypto-failed-v1.html
```

## Approved business semantics

```text
01 Contact / Address
02 Shipping
03 Payment
04 Order Confirmed / Thank You / Receipt
```

Step 04 is not a pre-payment Review page.

## Approved payment architecture

```text
- one WooCommerce commerce core
- dynamic payment-method framework
- Cryptocurrency is the only confirmed active method at this planning point
- future methods are not hardcoded as current production behavior
- Step 03 desktop uses two columns only
- Crypto uses dedicated Step-03 pages rather than a long inline accordion
- one canonical WooCommerce-owned result flow
```

## Approved context-panel architecture

```text
Step 02:
Before it leaves. = Deliver to + Contact only
Shipping cost in Order Summary is a live selection preview

Step 03:
Before it leaves. = Deliver to + Contact + confirmed Shipping Method

Desktop and mobile:
left = Deliver to
right upper = Contact
right lower = Shipping Method on Step 03 only
```

## Structure-locked Mobile Commerce Surface

Authoritative implementation record:

```text
project2-progress/STEP_4F_S3_MOBILE_COMMERCE_SURFACE_STRUCTURE_LOCKED_IMPLEMENTATION.md
```

Authoritative visual stylesheet:

```text
preview/spatial-flow-checkout-mobile-commerce-v1.css
```

Approved scope:

```text
Step 01 CSS field icons on desktop and mobile
mobile layered warm surfaces
paper-like form controls and choices
stone-green selected states and primary CTA
stronger Order Summary visual hierarchy
subtle context-card linework
```

Structural audit:

```text
Step 01 HTML: +1 stylesheet link only
Step 02 HTML: +1 stylesheet link only
Step 03 HTML: +1 stylesheet link only
body changes: 0
field changes: 0
copy changes: 0
script changes: 0
```

Final review:

```text
Desktop Step 01 icons: passed
390px Steps 01 / 02 / 03: passed
360px Steps 01 / 02 / 03: passed
Phase S3: accepted and closed
```

Forbidden transfers:

```text
new DOM wrappers in accepted 01 / 02 / 03 pages
field or section reordering
new payment methods
changed transaction semantics
decorative vertical accent strips
```

## Phase S4A status

Authoritative page:

```text
preview/spatial-flow-checkout-crypto-select-v1.html
```

Supporting assets:

```text
preview/spatial-flow-checkout-crypto-v1.css
preview/spatial-flow-checkout-crypto-v1.js
```

Implemented interaction sequence:

```text
no asset selected
→ network area unavailable
→ Continue disabled

choose static example asset
→ example networks become available
→ selected asset shown in Payment details

choose static example network
→ selected network shown in Payment details
→ Continue enabled

change asset
→ previous network cleared
```

All assets and networks are explicitly marked as unconfirmed static examples.

The enabled S4A button stops before S5 and creates no real:

```text
WooCommerce order
quote
wallet address
QR code
Crypto invoice
blockchain transaction
payment confirmation
```

## Phase S4B dependency

S4B must wait for the separate plugin-selection work to determine:

```text
whether custom asset/network selection is supported
whether the gateway supplies an API or embedded component
whether it forces a hosted redirect
which fields are returned
whether it owns the invoice/waiting screen
```

S4A may be visually reviewed now, but it cannot be treated as the final gateway-specific implementation until S4B is complete.

## Corrected static-flow build order

```text
Phase S1 — correct spatial-flow-checkout-v1.html into true Step 01: implemented
→ Phase S2 — create Shipping page and link 01 ↔ 02: implemented
→ Phase S3 — create Payment page and link 02 ↔ 03: implemented
→ Phase S3 Mobile Commerce Surface: implemented / accepted / closed
→ Phase S4A — plugin-agnostic Crypto selection page: implemented / awaiting review
→ Phase S4B — plugin-capability alignment: blocked pending plugin decision
→ Phase S5 — create Crypto invoice / waiting page: not started
→ Phase S6 — create confirming and recovery pages
→ Phase S7 — rework spatial-flow-thank-you-v1.html as Step 04
→ Phase S8 — full link audit from Cart through result
→ Phase S9 — 1366 / 390 / 360 static-flow closure
```

The Cart's existing `Go to checkout` link already points to `spatial-flow-checkout-v1.html`; it does not need to be redirected to another directory.

## Remaining execution order

```text
Review and approve S4A
→ obtain the payment-plugin capability decision
→ complete S4B
→ continue remaining Crypto static flow
→ Checkout live ownership audit, implementation and closure
→ Thank You / result-system implementation and closure
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
- do not begin live Checkout PHP, JavaScript, CartFlows, gateway or broad CSS work until the linked static flow is approved
- do not begin S5 as a presumed gateway-specific invoice page before S4B resolves actual plugin capability
- do not delete the existing spatial-flow-checkout-v1.html or spatial-flow-thank-you-v1.html; rework them as Step 01 and Step 04
```
