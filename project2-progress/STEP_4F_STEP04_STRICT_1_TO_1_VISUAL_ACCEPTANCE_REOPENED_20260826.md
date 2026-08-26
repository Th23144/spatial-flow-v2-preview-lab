# Project 2 · Step04 Strict 1:1 Visual Acceptance Reopened · 2026-08-26

## Trigger

After reviewing the live Step04 screenshots again, the user explicitly stated that these pages have **not** reached strict 1:1 parity.

That correction is accepted. The prior runtime notes that labeled Confirmed/Pending desktop+mobile and the five additional state captures as visual PASS were too permissive: they established structural/responsive coherence and state-family correctness, not strict 1:1 parity.

## Corrected classification

```text
Step04 state semantics/runtime behavior: mostly accepted
Step04 duplicate rendering: PASS
Step04 gateway Thank You hook preservation: PASS
Step04 strict 1:1 visual acceptance: REOPENED / NOT PASSED
Checkout: Not done
```

## Why the prior visual PASS is withdrawn

Project 2 strict 1:1 policy requires the approved static Step04 reference to control geometry, spacing, typography, proportions, borders, breakpoints and hierarchy. "Looks coherent" or "responsive structure is correct" is insufficient.

The supplied live screenshots already expose at least one obvious parity defect: a substantial blank white band exists between the accepted live header and the Step04 result surface, while the static Step04 reference places the breadcrumb/result surface directly after the reference header with only the specified breadcrumb/result padding. This alone blocks strict 1:1 closure.

Other visual properties must now be measured against the approved static source rather than visually accepted by impression.

## Mandatory next action

Before the remaining clean-order recovery sanity check and before the Crypto V0.3.0 transfer-button typography fix, perform a dedicated Step04 strict 1:1 delta audit using:

- `preview/spatial-flow-thank-you-v1.html`
- `preview/spatial-flow-thank-you-v1.css`
- shared `preview/spatial-flow-checkout-flow-v1.css`
- the user's live Confirmed/Pending desktop and 390px mobile screenshots

Audit and classify exact differences for at least:

```text
page transition below header / unexpected blank band
breadcrumb placement
result intro top/bottom spacing
max-width and horizontal gutters
intro grid ratio and gap
title scale, line-height, italic treatment
lede/authority-note sizing and spacing
4-step progress geometry
result-shell grid ratio/gap
status box dimensions/padding
five-item overview geometry
main receipt/panel spacing and borders
right receipt-summary width/padding/sticky behavior
mobile collapse points/gutters/title scale
mobile overview/facts grids
mobile summary placement
```

Do not edit source until the delta audit identifies the actual owning selectors and exact target values.

## Priority correction

The next implementation task is **Step04 visual parity correction**, not the clean-order recovery check. The clean-order recovery check remains required later for runtime closure, but it does not make sense to call Step04 complete while strict 1:1 is visibly open.

## Boundaries

- do not alter WooCommerce order truth/status logic
- do not touch Crypto business logic
- do not revive rejected selected-payment UI
- use manual anchored replacements only for any eventual source edits
- CSS changes must replace/adjust the existing Step5F owner block in place; no append-only patch layer
- keep backend editability intact
