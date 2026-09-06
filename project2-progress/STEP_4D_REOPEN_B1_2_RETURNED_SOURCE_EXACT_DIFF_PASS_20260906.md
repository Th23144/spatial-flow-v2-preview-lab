# Step 4D Reopen B1.2 — Returned Source Exact-Diff PASS — 2026-09-06

## Scope
Validate the user's returned B1.2 files after the two bounded changes:
1. Single Product variation selected-state visual feedback.
2. Single Product WooCommerce BlockUI white-wash removal while preserving the native blocking lifecycle.

## Returned files
- `functions.php`
- `assets/css/spatial-flow.css`

## Validation result
PASS.

### functions.php
- Current version: `SPATIAL_FLOW_CHILD_VERSION = 2.7.25`.
- PHP syntax: PASS.
- Reverting only `2.7.25 -> 2.7.24` reproduces the prior accepted B1.1 SHA256 exactly:
  `48485768d9e1cd05e2ae3b22672a7f2707404a11b897da24ffac0859c238cf17`.
- Therefore no unrelated PHP drift is present.

Current SHA256:
`b51a9f9adfdbe6cb19ef3d39f3a6a943c40c6023fd13d52232ff380532305f09`

### spatial-flow.css
- Braces balanced: `3303 / 3303`.
- Comments balanced: `276 / 276`.
- The B1.2 selected-state rule now has `!important` on border/background/color/box-shadow, and image-selected state retains transparent image surface plus explicit outline.
- The B1.2 Single Product BlockUI rule keeps the native overlay node but makes its surface transparent and draws an 18px spinner.
- Reverting only the authorized B1.2 selected-state edits and removing only the authorized B1.2 BlockUI block reproduces the prior accepted B1.1 CSS SHA256 exactly:
  `2b4180b31306fd844d3caa1e297c53724ba7fbebd7b0add7758704ba9a1d243f`.
- Therefore no unrelated CSS drift is present.

Current SHA256:
`bfad8a2462dc22470820e7353b7b1e51a759c5b88523b10d207a37a43a0abcbc`

## Next gate
Runtime validation only:
- Refresh Single Product and confirm the former white BlockUI wash is gone; only the small spinner remains during the native busy state.
- Select Purpose, Five Elements Energy and Zodiac Sign values and confirm the selected text option visibly turns dark with light text.
- Confirm color image variation still shows a clear outline selected state.
- No additional source changes are authorized unless runtime evidence shows a concrete defect.
