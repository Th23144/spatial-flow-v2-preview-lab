# Project 2 · Step04 Full-State 1:1 Regression Required After Sticky · 2026-08-29

## User clarification

The user clarified that by “full 1:1 test” they meant the multiple Step04 order-result status variants, not a final Checkout 01–04 sweep.

## Corrected decision

Step04 uses one result architecture/template family but renders multiple materially different WooCommerce order-status states. Because the 2.7.21 sticky correction is shared across the Step04 result family, Step04 should not be considered fully closed until a consolidated full-state presentation regression is run across the relevant result states.

This does **not** mean repeating the historical deep 17-test functional/security matrix. The required regression is a compact visual/runtime family sweep focused on shared 1:1 presentation and sticky behavior after the shared CSS change.

## Required state family

At minimum validate:

- Processing
- Completed
- Pending payment
- On-hold
- Failed
- Cancelled
- Refunded
- safe unknown/custom fallback if a reproducible fixture is already available

Semantic distinctions already locked remain in force:

- Pending payment = recovery/payable state; recovery CTA may be present according to `needs_payment()`.
- On-hold = awaiting confirmation / hold state; no recovery CTA expected merely because it is on-hold.
- Refunded = real refund ledger truth; do not use a refunded order as a clean payable fixture.

## Regression scope

For each practical state fixture, inspect:

- desktop Step04 1:1 frame, spacing, typography, borders/backgrounds, result hierarchy;
- right result-side layout and native sticky sanity where page height permits meaningful scrolling;
- no clipping/overflow/white-band regression;
- correct status-specific CTA/instruction presence or absence;
- no duplicate Woo order-details output;
- mobile stacked/static result-side behavior remains intact;
- no new visual regression caused by the body-level Sticky Ancestor Unlock.

Do not repeat blockchain, payment settlement, tamper, gateway, or deep Woo state-transition tests unless a new visual/runtime symptom suggests a business-logic regression.

## Execution policy

Deliver the Step04 state-family tests as **one consolidated batch**. Do not drip-feed one state at a time unless a state depends on a destructive fixture mutation that cannot safely coexist with another test.

## Updated stop point

```text
Step04 sticky fix itself: PASS / user accepted
Step04 full-state 1:1 regression after shared sticky correction: REQUIRED / ACTIVE NEXT
Step04 overall final closure: PENDING this consolidated state-family sweep
Step03 sticky investigation: DEFERRED until Step04 full-state sweep passes
Crypto typography: remains open after Step03
Checkout binary status: Not done
```
