# Project 2 · Step04 Tall-Family Sticky FINAL PASS + Formal Close · 2026-08-30

## Trigger

The user ran the final representative desktop sticky diagnostics on the two materially taller Step04 sidebar families:

1. Failed — BACS + recovery CTA tall summary
2. Refunded — refund-ledger tall summary

The user also independently confirmed both pages visibly stick during real scrolling.

## Failed runtime result — PASS

Viewport: 1920×991, DPR1, scale1.

Sticky environment:
- body overflow: `clip visible`
- `.result-side`: `position: sticky`
- top: `132px`
- side height: `1105.125px`
- usable viewport below top: `859px`

Middle-scroll lock:
- scrollY 559 -> sideTop 132 -> locked true
- scrollY 907 -> sideTop 132 -> locked true
- scrollY 1308 -> sideTop 132 -> locked true

Containing-shell boundary:
- every sampled point reports `insideShell: true`
- near/end samples release from the 132px lock as the shell bottom approaches, without crossing outside the containing shell

Classification: PASS.

## Refunded runtime result — PASS

Viewport: 1920×991, DPR1, scale1.

Sticky environment:
- body overflow: `clip visible`
- `.result-side`: `position: sticky`
- top: `132px`
- side height: `978.125px`
- usable viewport below top: `859px`

Middle-scroll lock:
- scrollY 559 -> sideTop 132 -> locked true
- scrollY 915 -> sideTop 132 -> locked true
- scrollY 1302 -> sideTop 132 -> locked true

Containing-shell boundary:
- every sampled point reports `insideShell: true`
- near/end samples release from the 132px lock as the containing shell bottom approaches, without crossing outside the shell

Classification: PASS.

## Architecture clarification

Failed and Refunded are not independent Step04 page implementations. They are state variants rendered through the same production Step04 / WooCommerce `order-received` result architecture.

Shared contract across Step04 states:
- same result-page template family
- same `.sf-order-result-v3` scope
- same `.result-shell`
- same `.result-side` sticky owner
- same 2.7.21 body-level Sticky Ancestor Unlock

What changes by order state is the server-authoritative content/state model: title, status card, payment/order facts, timeline copy, recovery actions, refund rows, gateway-owned output, and therefore total sidebar height.

This is why a normal/short Step04 sticky PASS did not by itself prove the taller Failed/Refunded variants. The mechanism is the same, but dynamic content height changes the sticky geometry and containing-boundary behavior. The final representative tests prove the shared mechanism remains correct for the taller families as well.

## Final Step04 full-state closure

Retained accepted evidence:
- production audit: PASS
- computed-style strict parity: PASS
- final screenshot residual review: PASS
- clean Pending-payment same-order recovery sanity: PASS
- 2.7.21 body-only Sticky Ancestor Unlock: PASS
- seven-state desktop/mobile screenshot sweep: PASS
- seven-state semantic sweep: PASS
- normal-family Step04 sticky runtime: PASS
- Failed tall-family sticky runtime: PASS
- Refunded tall-family sticky runtime: PASS

Therefore:

```text
Step04 full-state visual/runtime regression: FINAL PASS
Step04 strict 1:1: CLOSED
Step04 overall: CLOSED
```

The deferred status-icon micro visual polish remains a non-blocking later optimization and does not reopen Step04 strict 1:1.

## Next mainline action

Proceed to the previously deferred Step03 sidebar sticky issue. Diagnose Step03 independently; do not assume its root cause is identical to Step04.
