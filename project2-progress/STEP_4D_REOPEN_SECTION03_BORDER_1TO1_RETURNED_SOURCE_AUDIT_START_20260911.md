# Project 2 · Step 4D REOPEN · Section 03 border 1:1 returned-source audit START · 2026-09-11

## Current stage
Step 4D-REOPEN · Single Product remediation · Section 03 visual-refinement follow-up.

## Trigger
The user returned the manually edited files after the reference-source audit identified extra borders that were not present in the intended static reference treatment:
- `functions.php`
- `assets/css/spatial-flow.css`

## Intended bounded delta being audited
Only the following changes are authorized relative to the immediately preceding accepted Option C source baseline:
1. `functions.php`: bump `SPATIAL_FLOW_CHILD_VERSION` from `2.7.40` to `2.7.41`.
2. `spatial-flow.css`: remove the top border from `.single-product .sf-product-v2-care`, while preserving its bottom border.
3. `spatial-flow.css`: remove the mobile/intermediate separator border from `.sf-product-v2-care__unit + .sf-product-v2-care__unit`, while preserving the existing margin/padding spacing.
4. `spatial-flow.css`: remove the extra top border from `.single-product .sf-related-products`.

## Protected scope
Do not alter:
- Section 03 backend fields or save logic
- Option C removal of `i. / ii. / iii.` visual numbering
- Section 03 title/body content logic
- desktop three-column layout
- mobile one-column stack
- hide-when-all-three-bodies-empty behavior
- WooCommerce commerce logic
- `single-product.php` in this border-correction sub-step

## Audit gate
Before runtime testing, verify:
- exact returned-file identity
- PHP syntax for `functions.php`
- CSS brace/comment balance
- requested deltas only versus the immediately previous returned baseline
- no reintroduction of `.sf-product-v2-care__number`

## Current status
RETURNED SOURCE AUDIT: IN PROGRESS
RUNTIME STATUS: NOT YET RECHECKED
USER ACCEPTANCE: PENDING

## Exact next action
Complete the bounded source diff and syntax/structure audit, record PASS/FAIL, then only if PASS proceed to desktop + 390px runtime visual confirmation.
