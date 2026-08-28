# Step 4F · Step04 Final Screenshot Residual Review START · 2026-08-28

## Trigger

The user supplied the four current-version production full-page screenshots requested for the final residual visual review:

- Processing Desktop
- Processing Mobile 390×844
- On-hold Desktop
- On-hold Mobile 390×844

The user also explicitly noted that a previously uploaded unrelated image should be ignored; that unrelated image is excluded from this review.

## Current accepted prerequisite state

- Step04 2.7.20 source validation: PASS EXACT
- Four-production JSON final numeric audit: PASS
- Final three micro residual computed-style classes: ALL PASS
- Final full computed-style scan: PASS
- BACS `Our Bank Details` on On-hold: allowed gateway-owned dynamic output; not a Step04 parity defect

## Review contract

This is the final screenshot-only residual gate after code-first computed parity.

Inspect only unexplained Step04-owned visible defects, including:

- pseudo-elements or browser-rendering artifacts not captured by the JSON selector contract
- visible spacing/border/background/cropping anomalies
- typography rendering/centering issues
- responsive overflow, clipping or unexpected whitespace
- visible composition mismatch outside the approved dynamic Woo/gateway exclusions

Do not fail strict parity for:

- real product/order values
- product count/title/image differences
- shipping/gift-packaging/refund rows
- real addresses
- real status/payment values
- state-appropriate On-hold BACS bank instructions
- copy-length-driven height differences

## Source-change boundary

Do not modify source during the review. If a real visible defect is found, isolate its exact owner before issuing any correction.
