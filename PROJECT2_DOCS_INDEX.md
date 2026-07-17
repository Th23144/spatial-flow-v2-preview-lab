# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Authoritative Cart read order

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
4. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
5. PROJECT2_CSS_MAINTENANCE_POLICY.md
6. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
7. project2-progress/STEP_4E_B_MANUAL_EXECUTION.md
8. project2-progress/STEP_4E_B2_R5_E1_EXACT_SOURCE_AUDIT.md
9. project2-progress/STEP_4E_B2_R5_E2_POST_DEPLOY_VALIDATION.md
10. project2-progress/STEP_4E_B2_R5_E3_EMPTY_CART_PARITY.md
11. project2-progress/STEP_4E_B2_R5_E3_PRE_DEPLOY_VALIDATION.md
12. project2-progress/STEP_4E_B2_R5_E3_FIX1_MOBILE_EMPTY_CENTERING.md
13. project2-progress/STEP_4E_B2_R5_E3_FIX1_PRE_DEPLOY_VALIDATION.md
14. project2-progress/STEP_4E_B2_R5_E3_FIX2_FLEX_CENTERING.md
15. project2-progress/STEP_4E_B2_R5_E3_FIX2_PRE_DEPLOY_VALIDATION.md
16. project2-progress/STEP_4E_B2_R5_D3_D4_FAILURE_AND_R5_E_REOPEN.md
17. project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
18. project2-progress/STEP_4E_B2_R5_D2_C_RECOMMENDATION_OWNERSHIP_VALIDATION.md
19. project2-progress/STEP_4E_B2_R5_C4_VALIDATION.md
20. project2-progress/STEP_4E_B2_R5_B_CANONICAL_REPLACEMENT.md
21. project2-progress/PROGRESS_LOG.md
```

## Page-status rule

Only these two statuses are valid:

```text
Completed 1:1
Not done
```

`Completed 1:1` means strict source-level geometric and spatial fidelity, not general resemblance.

## Completed 1:1

```text
- Main-site Header
- Main-site Footer
- Shop archive
- Single Product
```

## Not done

```text
- Blog Header/Footer branch
- Home
- Cart
- Checkout
- Thank You
- Wishlist
- Track Order
- Account
- Search
- 404
- About Us
- Services
- FAQ / Help
- Contact
- Utility / policy pages
- Blog home
- Blog issue
- Blog article
```

## Current Cart status

```text
R5-B canonical implementation：Passed as cleaned baseline only
R5-C1 through R5-C4 historical cleanup：Passed / closed
R5-D1 exact source/ownership：Passed
R5-D2 backend editability/dynamic ownership：Passed / closed
R5-D3 final strict visual acceptance：Failed / reopened
R5-D4 final native Cart regression：Failed / reopened
R5-D5 binary decision：Blocked
R5-E1 exact source/state audit：Complete
R5-E2 synchronized live counts：Passed / closed
R5-E3 desktop and wrapper parity：Passed
R5-E3-FIX1 text-align-only correction：Failed at runtime
R5-E3-FIX2 CSS artifact：Passed exact pre-deploy validation
Current：Deploy spatial-flow(22).css and run phone runtime validation
Cart：Not done
```

## Accepted current server/code baselines

```text
functions.php
Source artifact: functions(14).php
Version: 2.7.8
Size: 552,215 bytes
Logical lines: 10,292
SHA256: 7f4d1f3722e86ba5b03bcbb05ac9119cf1cdd6c74ddc54ba49c1454a291ed070
PHP syntax: Passed
Braces: 1,208 / 1,208

assets/js/spatial-flow.js
Decision: unchanged accepted baseline
Size: 70,828 bytes
Logical lines: 1,995
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
Braces: 378 / 378

assets/css/spatial-flow.css
Current deployed artifact before FIX2: spatial-flow(21).css
Validated deployment artifact: spatial-flow(22).css
Size: 695,622 bytes
Logical lines: 23,316
SHA256: 7186d10195843ba30448c898abf04d55b842b57a157ef0a0e2672897ede9b8ed
Braces: 3,621 / 3,621
Comments: 340 / 340
CSS parser errors: 0

header.php
Size: 11,328 bytes
Logical lines: 172
SHA256: 84bd757eb6cdfe779065ad739fd6968a297ae612b49d554feecf9032866f3224
PHP syntax: Passed
Braces: 13 / 13
```

## R5-E2 accepted result

```text
- Header BAG and Your Bag update immediately after quantity changes
- remove and Undo update both counts
- final-item removal changes BAG to (0)
- Shop, Single Product and SAFE5 Checkout regressions passed
- one get_refreshed_fragments request per Cart update
```

## R5-E3 current result

Passed:

```text
- desktop transition-to-empty
- desktop direct-empty
- phone full-width wrapper parity
- fake right column removed
- Return to Shop
- Undo
- non-empty Cart smoke regression
```

Failed:

```text
- FIX1 text-align-only phone rule did not move the real empty-message content to the center
```

Current pending runtime check:

```text
Use validated spatial-flow(22).css and confirm phone empty-Cart text is centered in both transition and direct states.
```

## Current operation

```text
project2-progress/STEP_4E_B2_R5_E3_FIX2_FLEX_CENTERING.md
project2-progress/STEP_4E_B2_R5_E3_FIX2_PRE_DEPLOY_VALIDATION.md
```

## Remaining sequence

```text
R5-E3-FIX2 phone runtime validation
→ R5-E4 strict static-source geometry and missing 80px row rhythm
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final strict acceptance rerun
→ binary Cart decision
```