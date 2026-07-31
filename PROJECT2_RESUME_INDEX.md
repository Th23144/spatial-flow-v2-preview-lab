# Project 2 · Resume Index

Last updated: 2026-07-31  
Repository: `Th23144/spatial-flow-v2-preview-lab`

Use this as the top-level entry point when resuming Project 2 from a new ChatGPT window.

## Read these first

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
18. project2-progress/STEP_4F_S4A_FINAL_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_ACCEPTANCE.md
19. preview/spatial-flow-checkout-v1.html
20. preview/spatial-flow-checkout-shipping-v1.html
21. preview/spatial-flow-checkout-payment-v1.html
22. preview/spatial-flow-checkout-crypto-select-v1.html
23. preview/spatial-flow-checkout-mobile-commerce-v1.css
24. preview/spatial-flow-checkout-crypto-v1.css
25. preview/spatial-flow-checkout-crypto-v1.js
```

## Binary page-status rule

Only these statuses are valid:

```text
Completed 1:1
Not done
```

A page cannot become `Completed 1:1` until implementation, backend editability, strict desktop review, production-quality mobile review, functional regression and required cleanup all pass.

## Current completed pages

```text
Main-site Header: Completed 1:1
Main-site Footer: Completed 1:1
Shop archive: Completed 1:1
Single Product: Completed 1:1
Cart: Completed 1:1
```

## Cart closure

Authoritative closure document:

```text
project2-progress/STEP_4E_B2_R5_E6_FINAL_CART_1_TO_1_ACCEPTANCE_AND_CLOSURE.md
```

Final deployed Cart artifacts:

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

## Deferred Cart polish

```text
Approved future visible copy: Item removed. Undo?
Status: approved direction / not implemented
Record: project2-progress/CART_DEFERRED_POLISH_BACKLOG.md
```

This does not reopen Cart unless a concrete functional or production-blocking regression is found.

## Current active page

```text
Page: Checkout
Status: Not done
Current phase: complete and approve the linked Checkout static page sequence
Phase S3 status: accepted and closed
Phase S4A status: accepted and closed
Current exact step: wait for the separate payment-plugin capability handoff
Phase S4B: next required phase / blocked until plugin decision exists
Phase S5: not authorized
Live Checkout audit: paused until the complete linked static flow is approved
```

Terminology lock:

```text
V2 = the repository / Project 2 program:
Th23144/spatial-flow-v2-preview-lab

V2 does not mean a separate checkout-v2 directory or a new Checkout product version.
```

The mistaken `preview/checkout-v2/` experiment was removed.

## Approved linked Checkout sequence

```text
preview/spatial-flow-cart-v1.html
→ preview/spatial-flow-checkout-v1.html
→ preview/spatial-flow-checkout-shipping-v1.html
→ preview/spatial-flow-checkout-payment-v1.html
→ preview/spatial-flow-checkout-crypto-select-v1.html
→ gateway-dependent invoice / waiting / confirmation flow
→ preview/spatial-flow-thank-you-v1.html
```

Business semantics:

```text
01 Contact / Address
02 Shipping
03 Payment
04 Order Confirmed / Thank You / Receipt
```

Payment-method rule:

```text
- Cryptocurrency is the only confirmed active method at this planning point.
- Future gateways remain dynamic and must not be hardcoded as current production methods.
- Main Step 03 desktop uses two columns only.
- Cryptocurrency uses dedicated Step-03 pages, not a long inline accordion.
```

## Approved context-panel architecture

```text
Step 02 Before it leaves.:
- Deliver to
- Contact
- no Shipping Method yet

Step 03 Before it leaves.:
- left: Deliver to
- right upper: Contact
- right lower: confirmed Shipping Method

Mobile Step 03 retains the same internal two-column information grid.
Order Summary remains below the context card.
```

## Structure-locked Mobile Commerce Surface

```text
Authoritative stylesheet:
preview/spatial-flow-checkout-mobile-commerce-v1.css

Desktop change:
Step 01 field icons only

Mobile changes:
warm layered commerce surfaces
paper-like inputs and options
stone-green selected states and primary CTAs
stronger Order Summary commerce hierarchy
subtle context-card linework

Forbidden:
DOM changes
field reordering
section reordering
new payment methods
decorative vertical accent strips
```

GitHub structure audit:

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

## Phase S4A implementation and acceptance

Authoritative implementation record:

```text
project2-progress/STEP_4F_S4A_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_IMPLEMENTATION.md
```

Authoritative final acceptance:

```text
project2-progress/STEP_4F_S4A_FINAL_PLUGIN_AGNOSTIC_CRYPTO_SELECTION_ACCEPTANCE.md
```

Authoritative page:

```text
preview/spatial-flow-checkout-crypto-select-v1.html
```

Accepted interaction contract:

```text
no asset selected
→ network unavailable
→ Continue disabled

asset selected
→ example networks displayed
→ previous network cleared when asset changes

asset + network selected
→ Continue enabled
→ selection retained in static session state
```

Final review:

```text
S4A visual review: passed
S4A interaction review: passed
S4A example-data disclosure: understood and accepted
S4A: accepted and closed
```

Every displayed asset and network remains a static example and is not confirmed as gateway capability.

S4A deliberately does not create:

```text
real order
quote
wallet address
QR code
network fee
Crypto invoice
blockchain transaction
webhook
payment confirmation
```

## Phase S4B capability-handoff gate

The next required work is not page styling. It is alignment with the selected payment plugin or gateway.

Required handoff from the separate plugin-selection work:

```text
selected plugin / gateway and version
custom UI vs embedded component vs hosted redirect
asset/network selection ownership
asset and network data source
quote / invoice creation fields
invoice / waiting-screen ownership
wallet-address and QR ownership
rate-lock and quote-expiry behavior
webhook / callback behavior
WooCommerce order-status mapping
underpayment / overpayment / expiry / failure behavior
return URL and order-received behavior
sandbox / test-mode capability
```

S5 must not begin until S4B determines whether a custom Invoice / Waiting page is technically valid or whether the gateway owns that interface.

## Current static-flow build order

```text
Phase S1 — correct existing Step 01 page: implemented
→ Phase S2 — add Shipping page and link 01 ↔ 02: implemented
→ Phase S3 — add Payment page and link 02 ↔ 03: implemented
→ Phase S3 Mobile Commerce Surface: implemented / accepted / closed
→ Phase S4A — plugin-agnostic Crypto selection page: implemented / accepted / closed
→ Phase S4B — align with selected plugin capability: next / blocked pending plugin decision
→ Phase S5 — Crypto invoice / waiting: not authorized until S4B
→ Phase S6 — confirming and recovery pages
→ Phase S7 — rework existing Thank You page as Step 04
→ Phase S8 — full link audit from Cart through confirmed result
→ Phase S9 — 1366 / 390 / 360 static-flow acceptance
→ live Checkout audit and functional reconstruction
```

## Current execution order

```text
Obtain the payment-plugin capability handoff
→ complete S4B capability alignment
→ decide whether S5 is custom, embedded, hosted or unnecessary
→ continue remaining Crypto static flow
→ Checkout live audit, implementation and closure
→ Thank You / result-system implementation and closure
→ Home
→ Wishlist / Track Order / Search / 404
→ About / Services / FAQ / Contact / policy pages
→ Blog home / issue / article and blog shell
```

## Project rules that remain active

```text
- preserve native WooCommerce behavior, data, payment, orders, emails, URLs and database ownership
- preserve backend editability
- no new plugin unless explicitly approved
- no Elementor dependency
- no Cart or Checkout template override without proven necessity and explicit approval
- use small bounded and independently reversible operations
- prefer exact in-place replacement over append-only CSS
- do not execute cancelled FIX4
- version remains 2.7.8 until explicitly changed
- only ask the user to choose at genuine visual, operational or business decision points
- do not modify the real Checkout while the linked static flow is incomplete
- do not begin S5 before S4B resolves the selected plugin's actual ownership and capability
- do not delete the existing Checkout and Thank You reference files; rework them as Step 01 and Step 04
```
