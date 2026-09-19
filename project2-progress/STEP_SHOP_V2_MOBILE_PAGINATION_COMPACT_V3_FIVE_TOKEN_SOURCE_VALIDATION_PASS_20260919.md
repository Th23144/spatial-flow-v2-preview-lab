# Shop V2 — Mobile Pagination Compact V3 Five-Token Production CSS Source Validation PASS

Date: 2026-09-19
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Returned source

Validated user-returned file:
- `spatial-flow(20260919-215901).css`

Baseline:
- `spatial-flow(20260919-214904).css`

## File facts

Returned CSS:
- bytes: 654,123
- newline count: 23,138
- SHA256: `c37b78e9ff383e995a1c9621472870d5805ea22ff608e8871c63fa15103f4ef0`
- opening / closing braces: 3,571 / 3,571
- comment openings / closings: 276 / 276
- tinycss2 top-level parse errors: 0
- tinycss2 nested at-rule parse errors: 0
- terminal newline: present

Delta from prior validated CSS:
- +3,632 bytes
- +30 newline-count lines

## Exact diff audit

The only diff against `spatial-flow(20260919-214904).css` is the accepted mobile Shop pagination block inside the existing phone owner.

Changed:
- pagination vertical padding: `40px 0 54px` -> `28px 0 30px`;
- rejected two-row `74px + 44px top padding` box -> compact `30px` single row;
- center token gap: 4px -> 2px;
- center token size: 30px / 17px type -> 26px / 14px type;
- Prev / Next label type: 9px -> 8px;
- added phone-only `:has()` selection rules that hide non-selected numeric tokens and reveal current +/-2 plus edge compensation.

No unrelated CSS changed.

## Structural / ownership checks

- Desktop pagination owners unchanged.
- Existing real WooCommerce Prev / Next link positioning remains unchanged.
- Closing Note Mobile Centered V3 remains intact.
- Closing Note Side Text 330px owner remains exactly once.
- Desktop Closing Note V4 470px right-group owner remains exactly once.
- No PHP / JS / template change is part of this implementation.

## Browser compatibility note

The implementation uses CSS `:has()`.
The active test environment is modern Chromium and supports `:has()`, so runtime validation is appropriate.

## Runtime expectation for current 8-page Shop archive

Based on the current runtime evidence that WooCommerce emits all 1–8 numeric links:
- page 1: 1 2 3 4 5;
- page 2: 1 2 3 4 5;
- page 3: 1 2 3 4 5;
- page 4: 2 3 4 5 6;
- page 5: 3 4 5 6 7;
- page 6: 4 5 6 7 8;
- page 7: 4 5 6 7 8;
- page 8: 4 5 6 7 8.

Prev / Next remain present only where WooCommerce natively outputs them.

## Decision

SOURCE VALIDATION: PASS.

Ready for runtime replacement test.

Test states:
1. page 1;
2. page 2;
3. one middle page (4 or 5);
4. page 7;
5. page 8;
6. one desktop pagination spot-check.

Status:
MOBILE COMPACT V3 FIVE-TOKEN PAGINATION SOURCE PASS / READY FOR RUNTIME TEST.
