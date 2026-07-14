# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-14  
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
9. project2-progress/STEP_4E_B2_R5_E2_LIVE_COUNT_SYNC.md
10. project2-progress/STEP_4E_B2_R5_D3_D4_FAILURE_AND_R5_E_REOPEN.md
11. project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
12. project2-progress/STEP_4E_B2_R5_D2_C_RECOMMENDATION_OWNERSHIP_VALIDATION.md
13. project2-progress/STEP_4E_B2_R5_D2_B_PRODUCT_SUBTITLE_EDITABILITY_VALIDATION.md
14. project2-progress/STEP_4E_B2_R5_D2_A_CUSTOMIZER_EDITABILITY_VALIDATION.md
15. project2-progress/STEP_4E_B2_R5_C4_VALIDATION.md
16. project2-progress/STEP_4E_B2_R5_B5_VALIDATION.md
17. project2-progress/STEP_4E_B2_R5_B_CANONICAL_REPLACEMENT.md
18. project2-progress/PROGRESS_LOG.md
```

## Page-status rule

Only these two statuses are valid:

```text
Completed 1:1
Not done
```

`Completed 1:1` now explicitly means strict source-level geometric and spatial fidelity, not a general visual resemblance.

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
Current：R5-E2 synchronized live counts
Cart：Not done
```

## Exact R5-E1 findings

```text
1. Header BAG count is PHP-rendered in .sf-v2-bag-link sup.
2. Your Bag count is PHP-rendered in .sf-cart-v2-heading__count.
3. WooCommerce non-empty Cart AJAX replaces only the form and totals; neither custom count currently has a fragment/event owner.
4. Fresh empty Cart uses .wc-empty-cart-message as the actual grid child; current CSS targets only nested .cart-empty.
5. Approved static Cart uses gap: 80px for rows and columns.
6. Current Canonical Cart uses row-gap: 0, which removes the large title/count/product vertical rhythm highlighted by the user.
7. Source declares 1440px/48px/7fr-5fr, but final rendered width still requires same-viewport, 100%-zoom computed verification.
8. Cart Notice has one bounded owner for later in-place replacement.
```

## Exact current server baselines

```text
functions.php
Uploaded name: functions(13).php
Version: 2.7.8
Size: 550,884 bytes
Logical lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
PHP syntax: Passed
Braces: 1,200 / 1,200

assets/css/spatial-flow.css
Uploaded name: spatial-flow(19).css
Size: 695,346 bytes
Logical lines: 23,305
SHA256: 316874b203f8ce4104a1a98751f9b5fd63034fb50b0cbeb9aa0c4d2d5711020e
Braces: 3,619 / 3,619
Comments: 340 / 340

assets/js/spatial-flow.js
Uploaded name: spatial-flow(1).js
Size: 70,828 bytes
Logical lines: 1,995
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
Braces: 378 / 378

header.php
Size: 11,328 bytes
Logical lines: 172
SHA256: 84bd757eb6cdfe779065ad739fd6968a297ae612b49d554feecf9032866f3224
PHP syntax: Passed
```

## Current operation

```text
project2-progress/STEP_4E_B2_R5_E2_LIVE_COUNT_SYNC.md
```

## Remaining sequence

```text
R5-E2 synchronized live counts
→ R5-E3 empty-Cart state parity
→ R5-E4 strict static-source geometry and missing 80px row rhythm
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final strict acceptance rerun
→ binary Cart decision
```
