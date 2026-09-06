# Step 4D Reopen B2 — Extra Separator Returned Source Exact-Diff PASS — 2026-09-06

## Scope
Verify the user's returned manual patch for the B2 extra-separator cleanup only.

Authorized changes:
1. `functions.php`: `SPATIAL_FLOW_CHILD_VERSION` from `2.7.26` to `2.7.27`.
2. `assets/css/spatial-flow.css`: in the canonical `.single-product .sf-product-v2-piece` block only, change `border-top: 1px solid rgba(31,25,22,.1);` to `border-top: 0;`.

## Returned files
- `functions(20260906-172447).php`
- `spatial-flow(20260906-172459).css`

## Verification
### functions.php
- Size: 612,013 bytes
- Lines: 11,689
- SHA256: `041fddeee182cefc3f88ad0c278f241c72bdfe2c996700c49920694f902ecb52`
- `php -l`: PASS
- Current version: `2.7.27`
- Reverse only the version line to `2.7.26` -> SHA256 exactly restores prior B2 baseline:
  `e4db4c651005103051985793050f6adfb880608b6003943da3685ce9252fb944`

### spatial-flow.css
- Size: 593,224 bytes
- Lines: 20,839
- SHA256: `dcb745f187543072b4bf07d3006bed3086f3b7be9b270108bd733d40561c552f`
- Braces: 3298 / 3298
- Comments: 276 / 276
- Canonical target now contains `border-top: 0;`
- Reverse only that target declaration to the prior `1px solid rgba(31,25,22,.1)` value -> SHA256 exactly restores prior B2 baseline:
  `2ead91eed039f6b4b3a7ba18df2d3e697cd571c7b02631b8f4d12489ef05a946`

## Verdict
**SOURCE EXACT-DIFF PASS.** No unrelated drift detected. The duplicate full-width separator cleanup is correctly applied while the Section 01 local aside editorial line remains intact.

## Next gate
Perform the already-planned B2 visual confirmation on desktop and 390px mobile. Do not reopen unrelated Single Product areas during this gate.
