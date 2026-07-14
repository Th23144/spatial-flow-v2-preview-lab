# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-14  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Authoritative Cart read order

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
4. PROJECT2_CSS_MAINTENANCE_POLICY.md
5. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
6. project2-progress/STEP_4E_B_MANUAL_EXECUTION.md
7. project2-progress/STEP_4E_B2_R5_D3_D4_FAILURE_AND_R5_E_REOPEN.md
8. project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
9. project2-progress/STEP_4E_B2_R5_D3_D4_COMBINED_FINAL_CHECKLIST.md
10. project2-progress/STEP_4E_B2_R5_D2_C_RECOMMENDATION_OWNERSHIP_VALIDATION.md
11. project2-progress/STEP_4E_B2_R5_D2_B_PRODUCT_SUBTITLE_EDITABILITY_VALIDATION.md
12. project2-progress/STEP_4E_B2_R5_D2_A_CUSTOMIZER_EDITABILITY_VALIDATION.md
13. project2-progress/STEP_4E_B2_R5_C4_VALIDATION.md
14. project2-progress/STEP_4E_B2_R5_B5_VALIDATION.md
15. project2-progress/STEP_4E_B2_R5_B_CANONICAL_REPLACEMENT.md
16. project2-progress/STEP_4E_B2_R5_A1_AUDIT_COMPLETE.md
17. project2-progress/PROGRESS_LOG.md
```

Current records supersede earlier completion assumptions, the failed deletion-first attempt, the temporary R2/FIX stack and the superseded R5-D3/D4 pass path.

## Page-status rule

Only these two statuses are valid:

```text
Completed 1:1
Not done
```

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
R5-B canonical implementation：Passed as baseline
R5-C1 through R5-C4 historical cleanup：Passed / closed
R5-D1 exact source/ownership：Passed
R5-D2 backend editability/dynamic ownership：Passed / closed
R5-D3 final strict visual acceptance：Failed / reopened
R5-D4 final native Cart regression：Failed / reopened
R5-D5 binary decision：Blocked
Current：R5-E1 exact source/state re-audit
Cart：Not done
```

## Reproduced Cart blockers

```text
1. Header BAG and Your Bag count remain stale until refresh after quantity/remove/restore.
2. Direct fresh empty Cart uses a broken/narrow layout unlike transition-to-empty Cart.
3. Desktop Cart frame is materially narrower than the approved V2 1440px direction.
4. Cart update/remove notice is visually poor and not aligned with the V2 page.
5. User explicitly reports the current page remains a large distance from 1:1.
```

## Last exact code baselines

```text
functions.php
Version: 2.7.8
Size: 550,884 bytes
Logical lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
PHP syntax: Passed
Braces: 1,200 / 1,200

assets/css/spatial-flow.css
Uploaded name: spatial-flow(18).css
Size: 695,346 bytes
Logical lines: 23,305
SHA256: 316874b203f8ce4104a1a98751f9b5fd63034fb50b0cbeb9aa0c4d2d5711020e
Braces: 3,619 / 3,619
Comments: 340 / 340
CSS parser errors: 0
```

Current server copies must be uploaded before new edits.

## Current required file evidence

```text
1. functions.php
2. assets/css/spatial-flow.css
3. assets/js/spatial-flow.js
4. header.php or the actual header template-part that renders BAG count
```

## Remaining sequence

```text
R5-E1 exact source/state re-audit
→ R5-E2 synchronized live counts
→ R5-E3 empty-Cart state parity
→ R5-E4 desktop width + strict V2 visual rebase
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final acceptance rerun
→ binary Cart decision
```
