# Project 2 · Step 4F · Step04 Final Residual Screenshot Review Plan · 2026-08-28

## Trigger

User asked for the exact next step after Step04 computed-style strict parity passed.

## Current state

- Step04 2.7.20 returned-source validation: PASS EXACT.
- Four production computed captures: FINAL NUMERIC AUDIT PASS.
- Final three micro residual classes: ALL PASS.
- Final full computed-style scan: PASS; no unexplained Step04-owned computed-style delta remains in captured contract.
- Step04 strict 1:1 is not yet formally closed because the final screenshot residual review remains pending.
- Source must not be modified before that visual review.

## Next action — final residual screenshot review

This is not a repeat of the 17-step runtime matrix and does not require new reference captures.

Use current live production version 2.7.20 and compare against the unchanged S7 reference pages:

- Confirmed reference: `preview/spatial-flow-thank-you-v1.html`
- Pending reference: same file with `?prototype_result=pending`

Capture current production only at the same review viewports:

1. Processing / confirmed-family — Desktop 1920×991, browser zoom 100%.
2. Processing / confirmed-family — Mobile 390×844, DPR3, visualViewport scale 1.
3. On-hold / pending-family — Desktop 1920×991, browser zoom 100%.
4. On-hold / pending-family — Mobile 390×844, DPR3, visualViewport scale 1.

For each production state, capture enough vertical screenshots to inspect the whole Step04 content, not only the first viewport. Full-page browser capture is preferred; otherwise overlapping viewport screenshots are acceptable.

## Visual review scope

Review only unexplained Step04-owned visible residuals, including:

- breadcrumb and page-frame continuity
- intro typography, line breaks and spacing
- progress step geometry
- result-status block
- overview row
- receipt panel/table typography and rules
- payment record/facts
- timeline
- billing/shipping addresses
- right receipt summary panel and action controls
- mobile stacking, gutters and overflow
- pseudo-elements, borders, thin rules, shadows, clipping, text vertical alignment and other browser-rendered details that may not have been captured by the numeric property contract

## Explicit allowed differences

Do not fail strict parity for:

- actual Woo product count, product names, images, metadata or wrapping driven by real data
- actual totals rows, gift packaging, shipping, fees or refund-ledger rows
- actual addresses, payment values and status text
- copy-length-driven heights/Y positions
- BACS `Our Bank Details` gateway-owned output on On-hold
- global production header/footer shell already accepted outside Step04 static scoring

## Pass/fail rule

- PASS only if no unexplained Step04-owned visible residual remains.
- If a visible mismatch remains, do not patch by eye. First isolate the exact selector/property/runtime owner, then issue one bounded manual anchored correction batch.

## After screenshot PASS

1. Formally close Step04 strict 1:1.
2. Run one clean-order recovery sanity check on a fresh order that was never Refunded. Do not use order #3621.
3. Then fix/revalidate Crypto V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch on desktop/mobile.
4. Only after those items can Checkout be marked `Completed 1:1`.
