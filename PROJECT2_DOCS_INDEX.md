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
11. project2-progress/STEP_4E_B2_R5_E3_FINAL_RUNTIME_VALIDATION.md
12. project2-progress/STEP_4E_B2_R5_E4_A_STRICT_GEOMETRY_AUDIT.md
13. project2-progress/STEP_4E_B2_R5_E4_A1_MEASUREMENT_RESULT.md
14. project2-progress/STEP_4E_B2_R5_D3_D4_FAILURE_AND_R5_E_REOPEN.md
15. project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
16. project2-progress/STEP_4E_B2_R5_D2_C_RECOMMENDATION_OWNERSHIP_VALIDATION.md
17. project2-progress/STEP_4E_B2_R5_C4_VALIDATION.md
18. project2-progress/STEP_4E_B2_R5_B_CANONICAL_REPLACEMENT.md
19. project2-progress/PROGRESS_LOG.md
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
R5-E3 empty-Cart parity：Passed / closed
R5-E4-A1 first rendered measurement：Complete
Current：R5-E4-A2 winning ancestor/container trace
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
Deployed artifact: spatial-flow(22).css
Size: 695,622 bytes
Logical lines: 23,316
SHA256: 7186d10195843ba30448c898abf04d55b842b57a157ef0a0e2672897ede9b8ed
Braces: 3,621 / 3,621
Comments: 340 / 340
CSS parser errors: 0
```

## Closed R5-E2 and R5-E3 results

```text
- live BAG and Your Bag counts passed
- one fragment request per update passed
- desktop/phone transition/direct empty parity passed
- phone empty message centered
- Return to Shop, Undo, BAG (0), restored non-empty Cart passed
```

## R5-E4-A1 result

Measured:

```text
viewport: 1315
wrapper: 1164
left/right gutters: 68 / 83
form / summary: 609 / 435
column gap: 80
title → count: 8
count → main row: 93
```

Decision:

```text
- 80px column gap matches the static source
- wrapper is narrower than the expected 1219px result
- title → count is short by approximately 80px
- count → main row is short by approximately 27px
- identify the ancestor inset owner before changing width
```

## Current operation

```text
project2-progress/STEP_4E_B2_R5_E4_A_STRICT_GEOMETRY_AUDIT.md
project2-progress/STEP_4E_B2_R5_E4_A1_MEASUREMENT_RESULT.md
```

## Remaining sequence

```text
R5-E4-A2 winning ancestor trace
→ R5-E4-B in-place strict geometry correction
→ R5-E4-C desktop + phone visual validation
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final strict acceptance rerun
→ binary Cart decision
```