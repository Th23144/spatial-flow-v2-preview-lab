# Project 2 · Resume Index

Last updated: 2026-07-30  
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
11. project2-progress/STEP_4F_CHECKOUT_V2_REFERENCE_SYSTEM_EXECUTION_PLAN.md
12. preview/checkout-v2/index.html
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

Cart closure includes:

```text
- strict desktop composition passed
- 390px and 360px mobile acceptance passed
- complete native Cart functional regression passed
- backend editability passed
- generic message / info / error Notice component coverage passed
- invisible table-frame defect resolved
- native WooCommerce template and lifecycle ownership preserved
```

## Deferred Cart polish

One non-blocking mobile Notice polish item remains open:

```text
Approved future visible copy: Item removed. Undo?
Status: approved direction / not implemented
Record: project2-progress/CART_DEFERRED_POLISH_BACKLOG.md
```

Do not represent this as current runtime behavior. It does not reopen Cart unless a concrete functional or production-blocking regression is found.

## Current active page

```text
Page: Checkout
Status: Not done
Current phase: build and approve the interactive Checkout V2 HTML reference system
Current executable group: Phase V2-1 shared shell and interactive reference hub
Reference entry: preview/checkout-v2/index.html
Historical reference only: preview/spatial-flow-checkout-v1.html
Live Checkout audit: paused until the V2 reference system is approved
```

Architecture already approved:

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
- Cryptocurrency uses a dedicated Step-03 workspace, not a long inline accordion.
```

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
→ live Checkout ownership audit and functional reconstruction
```

## Current execution order

```text
Complete and approve Checkout V2 reference system
→ Checkout live audit, implementation and closure
→ Thank You current 1:1 implementation / closure as part of the approved result system
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
- no Cart or Checkout template override without a proven necessity and explicit approval
- use small bounded and independently reversible operations
- prefer exact in-place replacement over append-only CSS
- do not execute cancelled FIX4
- version remains 2.7.8 until explicitly changed
- only ask the user to choose at genuine visual, operational or business decision points
- do not modify the real Checkout while the V2 reference system is still incomplete
- do not replace or delete historical V1 preview files
```
