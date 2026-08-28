# Project 2 · Step 04 · 2.7.19 production-only four-capture numeric re-audit START · 2026-08-28

## Trigger

User returned the four production-only JSON diagnostics after the accepted 2.7.19 source correction. The unchanged reference captures from the prior accepted diagnostic batch will be reused as the fixed baseline.

## Production captures received

- Processing Desktop
- Processing Mobile 390×844 DPR3
- On-hold Desktop (Pending-family visual comparison only)
- On-hold Mobile 390×844 DPR3

All use `STEP04_STRICT_PARITY_V2_20260827` diagnostic schema.

## Audit method

1. Verify production viewport/DPR/visualViewport conditions still match the locked reference-capture environment.
2. Pair Processing production with Confirmed reference.
3. Pair On-hold production with Pending reference only for shared visual/CSS contract; exclude state-copy and gateway-output differences.
4. First verify whether the eight deterministic deltas targeted by 2.7.19 have converged.
5. Then enumerate remaining deterministic computed/geometric deltas, excluding real Woo data/content-driven differences.
6. Do not issue further source edits until the remaining owner(s) are isolated.

Checkout binary status remains `Not done` until strict parity closes.