# Project 2 · Resume Index

Last updated: 2026-09-03
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Read these first

For a new Project-2 window, read in this order:

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_ACTIVE_STOP_POINT_20260816.md
3. PROJECT2_STEP_RECORDING_POLICY.md
4. PROJECT2_RUNTIME_TEST_BATCHING_POLICY.md
5. PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
6. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
7. PROJECT2_CSS_MAINTENANCE_POLICY.md
8. PROJECT2_MANUAL_REPLACEMENT_AND_FILE_SIZE_AUDIT_POLICY.md
9. PROJECT2_VERIFIED_FULL_FILE_REPLACEMENT_POLICY.md
10. PROJECT2_CROSS_WINDOW_OWNERSHIP_HANDOFF_POLICY.md
11. project2-progress/STEP_4F_FULL_REPOSITORY_DOCUMENT_INHERITANCE_COMPLETE_20260816.md
12. project2-progress/STEP_4F_CHECKOUT_FINAL_CLOSURE_COMPLETED_1_TO_1_20260903.md
```

The historical corpus remains in `project2-progress/`; do not delete or rewrite history merely to shorten the index.

## Historical precedence

```text
later explicit correction/rejection/rollback
> later formal runtime/source/user acceptance
> later standing policy
> older policy/plan/candidate/snapshot
```

This is critical because many older Checkout documents correctly said `Not done` at their historical stop point. They do not override the 2026-09-03 final closure.

## Mandatory execution rule

```text
meaningful Project-2 action
→ record start/state/result in GitHub
→ only then advance
```

For one coherent runtime acceptance batch, give the user the entire safe checklist at once. Do not surprise the user with avoidable extra screenshot/test rounds after they finish a batch.

## Current binary page status

```text
Header: Completed 1:1
Footer: Completed 1:1
Shop archive: Completed 1:1
Single Product: Completed 1:1
Cart: Completed 1:1
Checkout: Completed 1:1
```

Checkout authoritative closure:

```text
project2-progress/STEP_4F_CHECKOUT_FINAL_CLOSURE_COMPLETED_1_TO_1_20260903.md
```

Current authoritative stop point:

```text
PROJECT2_ACTIVE_STOP_POINT_20260816.md
```

The filename is historical; its content is updated and authoritative.

## Locked Checkout progression

```text
01 Contact / Address
→ 02 Shipping
→ 03 Payment
→ 04 server-authoritative WooCommerce Order Result / Thank You / Receipt
```

No Review/fifth input step.

## Final accepted Checkout contracts

```text
Step01 Address: PASS / CLOSED
Step02 Shipping: PASS / CLOSED
Product Packaging: FINAL ACCEPTED / CLOSED
Step03 Payment: PASS / CLOSED
Order Summary / Coupon / Trust: PASS / CLOSED
normal non-Crypto order flow: PASS
Crypto V0.3.0 Workspace presentation: PASS / CLOSED
Step04 full result/status family: FINAL PASS / CLOSED
final desktop regression sweep: PASS
final current 390px mobile regression sweep: PASS
Checkout transient/error states: PASS
```

Step03 architecture remains:

```text
Woo eligible gateways
→ native selected gateway/payment_box/provider controls
→ native Terms/privacy
→ exactly one native Place Order
```

Theme remains gateway-agnostic. Do not reintroduce the rejected duplicate `Selected Payment` theme panel.

WooCommerce remains authoritative for:
- customer fields;
- shipping;
- totals/coupons;
- gateways/provider controls/nonces;
- validation;
- order creation/status;
- stock/emails where environment supports them;
- Step04 server status truth.

## Final Checkout correction chain

The final closure included later fixes beyond the older happy-path acceptance:

```text
Step03 WPCode 1706 legacy gateway-card override -> CLOSED
Step01 native-field refresh FOUC -> CLOSED
Order Summary AJAX white wash -> CLOSED
Step03 Payment AJAX white wash -> CLOSED
Crypto transfer-button typography -> CLOSED
Step03 Terms/validation notice legacy visual -> CLOSED
Processing Payment transient visual mismatch -> CLOSED
direct mini-cart -> Checkout carried success-notice flash -> CLOSED
Crypto Refresh Status invisible acknowledgement -> CLOSED
```

Do not reopen these without new concrete runtime evidence.

## WPCode 1706 boundary

Snippet:

```text
1706 — 收款页
```

Required current state:

```text
DISABLED
DO NOT DELETE as part of Checkout closure
```

Its legacy Checkout CSS was proven to override the accepted Step03 gateway-host presentation when enabled.

## Crypto V0.3.0 accepted state

Functional/security baseline remains accepted.

Transfer-button final runtime typography:

```text
JetBrains Mono
9px
letter-spacing 1.53px (.17em)
uppercase
54px button height preserved
```

Refresh Status final manual feedback:

```text
REFRESH STATUS
→ REFRESHING…
→ UP TO DATE
→ REFRESH STATUS
```

Focus-triggered recovery refresh remains silent.

Feature-flag exposure (Workspace ON/OFF) is a rollout/deployment decision, not a Project-2 1:1 visual-status decision. Do not change payment/security behavior merely to alter visual exposure.

## Step04 final state

Step04 full-state visual/runtime regression is closed.

Server-status truth remains authoritative for:

```text
processing / confirmed
completed
pending
on-hold
failed
cancelled
refunded
custom/unknown fallback
```

The user explicitly deferred one Step04 status-icon micro visual polish item. That item is non-blocking and does not reopen Step04 or Checkout.

## Mobile acceptance rule

Follow `PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md`.

Final review must inspect common phone widths around 390–430 CSS px. A narrower ~360 CSS px fallback is required when relevant to a concrete risk or when a batch specifically owns width-sensitive behavior; do not invent repetitive viewport rounds without evidence.

Historical 360 Checkout acceptance remains available. The final 2026-09-03 bounded corrections produced no concrete new 360-specific blocker.

## Backend editability

Backend editability remains a hard boundary.

SAFE5 normal-state Step01 / Step02 / Step03 presentation copy was accepted as backend-editable. Dynamic WooCommerce commerce truth must remain native rather than hardcoded into editable presentation fields.

Do not remove existing `theme_mod`, option, menu, shortcode, template-part or WooCommerce dynamic sources merely for visual simplification.

## Explicit non-blocking / future items

Do not confuse these with an incomplete Checkout reskin:

```text
- Step04 status-icon micro visual polish: deferred by user
- Step02 no-method / true multi-rate runtime cases: later regression only when such configuration exists
- Crypto production evolution: real-time fiat->USDT quote/rate lock, QR, countdown/expiry, automatic monitoring, WalletConnect, multi-asset/network selection
- Crypto Workspace rollout flag choice
```

These are future configuration/product/payment tasks, not blockers to `Checkout: Completed 1:1`.

## Deployment method precedence

Verified complete-file replacement is allowed only when `PROJECT2_VERIFIED_FULL_FILE_REPLACEMENT_POLICY.md` passes every gate.

Otherwise use manual anchored replacement.

This changes deployment mechanics only; strict 1:1 and backend editability remain mandatory.

## Current next action

Checkout is closed. Do not automatically continue into another Checkout subtask.

Before selecting the next Project-2 implementation task:

```text
1. reconcile the current page/task inventory against newest closure records;
2. identify pages/tasks whose binary status is still Not done;
3. preserve explicitly deferred work as deferred unless the user chooses to reopen it;
4. present the next recommended task to the user before modifying source.
```

Do not reopen Header/Footer/Shop/Single Product/Cart/Checkout merely because an older progress document predates their final acceptance.
