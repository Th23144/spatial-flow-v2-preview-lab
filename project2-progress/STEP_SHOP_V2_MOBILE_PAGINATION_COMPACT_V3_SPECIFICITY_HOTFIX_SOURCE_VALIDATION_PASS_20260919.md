# Shop V2 — Mobile Pagination Compact V3 Specificity Hotfix Source Validation PASS

Date: 2026-09-19
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Returned source

Validated user-returned file:
- `spatial-flow(20260919-220643).css`

Baseline:
- `spatial-flow(20260919-215901).css`

## File facts

Returned CSS:
- bytes: 654,127
- newline count: 23,138
- SHA256: `249c59f1db90921c59b631ba08726196f8103f2c9cd85f0a23697e950e7239f5`
- opening / closing braces: 3,571 / 3,571
- comment openings / closings: 276 / 276
- tinycss2 top-level parse errors: 0
- tinycss2 nested at-rule parse errors: 0
- terminal newline: present

Delta from prior Compact V3 source:
- +4 bytes
- 0 line-count change

## Exact diff audit

Exactly one selector changed.

Removed:
`ul.page-numbers > li:not(:has(> a.prev.page-numbers)):not(:has(> a.next.page-numbers))`

Added:
`ul.page-numbers > li:not(:where(:has(> a.prev.page-numbers), :has(> a.next.page-numbers)))`

The declaration remains:
`display: none !important;`

No other CSS changed.

## Specificity validation

The previous hide selector accumulated specificity from both `:has()` arguments and could defeat later `display:block !important` reveal rules.

The new `:where(...)` wrapper contributes zero specificity for the Prev/Next exclusion test.

Therefore later current-page / +/-2 / edge-compensation reveal selectors now have greater specificity and can override the blanket numeric hide rule while Previous and Next remain natively visible.

## Ownership checks

Unchanged:
- WooCommerce pagination markup and links;
- real Previous / Next ownership;
- Compact V3 single-row sizing and spacing;
- desktop pagination;
- Mobile Closing Note Centered V3;
- Desktop Closing Note V4;
- PHP / JS / templates.

## Decision

SOURCE VALIDATION: PASS.

Ready for runtime test.

Priority test:
1. page 2 first, because it previously exposed the stray single `5`;
2. page 1;
3. page 4 or 5;
4. page 7;
5. page 8.

Expected center cluster:
- page 1: 1 2 3 4 5
- page 2: 1 2 3 4 5
- page 4: 2 3 4 5 6
- page 5: 3 4 5 6 7
- page 7: 4 5 6 7 8
- page 8: 4 5 6 7 8

Status:
COMPACT V3 SPECIFICITY HOTFIX SOURCE PASS / READY FOR RUNTIME TEST.
