# Project 2 · Step03 Adaptive Sticky 2.7.22 Runtime Acceptance Start · 2026-08-30

## Precondition

Returned source validation is PASS and exact planned 2.7.22 fingerprints are confirmed.

## Runtime batch policy

Run the remaining Step03 sticky acceptance as one consolidated batch. No source change before the result unless a concrete defect appears.

## Required proof

Desktop normal Step03:
- fallback class is present for current short-left / tall-right geometry;
- whole `.sf-safe5-summary` is static;
- payment context card is sticky at 136px;
- context card actually locks during scroll;
- Order Summary remains normal-flow and no fake shell min-height exists.

Dynamic lifecycle:
- payment-method change / Woo `updated_checkout` preserves correct adaptive classification;
- Step03 -> Step02 -> Step03 clears and reapplies fallback correctly.

Responsive boundary:
- <=1040px removes fallback and leaves Step03 static/stacked;
- >1040px re-evaluates and restores the correct desktop mode.

Regression:
- Step02 desktop summary still sticks at 136px;
- no large blank-space/fake-runway regression.

A temporary console-only tall-left simulation may be used only to prove that when genuine opposite-column runway exists, the fallback class clears and whole-rail sticky ownership resumes. The test must restore all temporary inline changes automatically.
