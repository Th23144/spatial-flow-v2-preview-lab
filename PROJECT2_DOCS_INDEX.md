# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-20  
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
8. preview/spatial-flow-cart-v1.html
9. project2-progress/STEP_4E_B2_R5_E1_EXACT_SOURCE_AUDIT.md
10. project2-progress/STEP_4E_B2_R5_E2_POST_DEPLOY_VALIDATION.md
11. project2-progress/STEP_4E_B2_R5_E3_FINAL_RUNTIME_VALIDATION.md
12. project2-progress/STEP_4E_B2_R5_E4_A_STRICT_GEOMETRY_AUDIT.md
13. project2-progress/STEP_4E_B2_R5_E4_C3_VISUAL_REVIEW_RESULT.md
14. project2-progress/STEP_4E_B2_R5_E4_D_SOURCE_AUDIT_AND_MANUAL_FIX.md
15. project2-progress/STEP_4E_B2_R5_E4_D_PRE_DEPLOY_VALIDATION.md
16. project2-progress/STEP_4E_B2_R5_E4_C4_RUNTIME_ACCEPTANCE.md
17. project2-progress/STEP_4E_B2_R5_E5_CART_NOTICE_REFINEMENT.md
18. project2-progress/STEP_4E_B2_R5_E5_PRE_DEPLOY_VALIDATION.md
19. project2-progress/STEP_4E_B2_R5_E5_RUNTIME_REJECTION.md
20. project2-progress/STEP_4E_B2_R5_E5_FIX1_LOADING_FRAME_AUDIT_AND_MANUAL_FIX.md
21. project2-progress/STEP_4E_B2_R5_E5_FIX1_PRE_DEPLOY_VALIDATION.md
22. project2-progress/STEP_4E_B2_R5_E5_FIX1_RUNTIME_REJECTION_AND_FIX2.md
23. project2-progress/STEP_4E_B2_R5_E5_FIX2_PRE_DEPLOY_VALIDATION.md
24. project2-progress/STEP_4E_B2_R5_E5_FIX2_RUNTIME_VISUAL_REVIEW_AND_FIX3.md
25. project2-progress/STEP_4E_B2_R5_E5_FIX3_PRE_DEPLOY_VALIDATION.md
26. project2-progress/STEP_4E_B2_R5_E5_FIX3_RUNTIME_REJECTION_AND_FIX4.md
27. project2-progress/STEP_4E_B2_R5_E5_S1_STRICT_SOURCE_DOM_OWNERSHIP_AUDIT.md
28. project2-progress/STEP_4E_B2_R5_E5_S2_REPOSITORY_MD_RECONCILIATION.md
29. project2-progress/STEP_4E_B2_R5_E5_S2_EXACT_FILE_VALIDATION_AND_BOUNDED_PLAN.md
30. project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
31. project2-progress/PROGRESS_LOG.md
```

## Page-status rule

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

## Current Cart status

```text
R5-E1 exact source/state audit：Complete
R5-E2 synchronized live counts：Passed / closed
R5-E3 empty-Cart parity：Passed / closed
R5-E4 strict geometry, canvas, breadcrumb and recommendation rebase：Passed / closed
R5-E5 first notice artifact：Passed technically / failed visually
R5-E5-FIX1 exact CSS validation：Passed
R5-E5-FIX1 runtime frame removal：Failed / warm wash remained
R5-E5-FIX2 static-reference alignment and exact artifact validation：Passed
R5-E5-FIX2 BlockUI surface removal：Passed
R5-E5-FIX2 residual composition acceptance：Failed / implied frame remained
R5-E5-FIX3 exact CSS artifact validation：Passed
R5-E5-FIX3 de-boxed Coupon / Apply / Update controls：Passed
R5-E5-FIX3 implied-frame runtime acceptance：Failed
R5-E5-FIX4 speculative proposal：Cancelled before execution
R5-E5-S1 strict source/DOM ownership audit：Complete
R5-E5-S2 repository Markdown reconciliation：Complete / no theme source change
R5-E5-S2 exact-file identity / syntax / anchor validation：Passed
Current：R5-E5-S2-A bounded PHP Order Summary Coupon renderer
Cart：Not done
```

## Current exact files

```text
functions(17).php / uploaded alias functions(18).php
Size: 555,130 bytes
Logical lines: 10,366
SHA256: ab7c9b1a893b2fdfaf8db7947fcf82974e8c1d71b54c8f0d17fe32029e5f5d86
Version: 2.7.8
PHP syntax: Passed

assets/js/spatial-flow.js / uploaded alias spatial-flow(4).js
Size: 70,828 bytes
Logical lines: 1,995
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
JavaScript syntax: Passed

spatial-flow(34).css / uploaded alias spatial-flow(35).css
Size: 698,076 bytes
Logical lines: 23,406
SHA256: 3e6b0d6fa292681cee1c2936e744314b4347a0bcc82ea3e7cd911d5cac1969ce
Braces: 3,638 / 3,638
Comments: 337 / 337
CSS parser errors: 0
```

## S1 / S2 ownership conclusion

The approved static Cart has a product-only left plane and no Coupon / Apply Coupon / Update Cart footer. WooCommerce 10.4.3 places Coupon, Update Cart, the actions hook and nonce in the final `td.actions` row inside `.woocommerce-cart-form`; native cart.js serializes and replaces the form and totals during updates.

The bounded production translation keeps native controls and nonce inside the form, visually clips the native actions owner, auto-invokes the current hidden native Update Cart control for quantity changes, and exposes one lifecycle-safe visible Coupon control inside Order Summary. No template override is authorized.

Detailed audits:

```text
project2-progress/STEP_4E_B2_R5_E5_S1_STRICT_SOURCE_DOM_OWNERSHIP_AUDIT.md
project2-progress/STEP_4E_B2_R5_E5_S2_REPOSITORY_MD_RECONCILIATION.md
project2-progress/STEP_4E_B2_R5_E5_S2_EXACT_FILE_VALIDATION_AND_BOUNDED_PLAN.md
```

## Current execution gate

Execute S2-A only:

```text
Insert the bounded Cart-only Order Summary Coupon renderer into the validated functions.php baseline.
Do not edit JavaScript or CSS yet.
Do not deploy the PHP file yet.
Upload the edited PHP file for exact artifact validation.
```

Do not execute the cancelled FIX4 and do not create/deploy SHA256:

```text
6377f0686c9b7a992c440e0c855bfa409cdcd45359f33695f896fa048d5f6737
```

## Remaining sequence

```text
R5-E5-S2-A PHP renderer edit + exact artifact validation
→ R5-E5-S2-B delegated JavaScript bridge + exact artifact validation
→ R5-E5-S2-C in-place CSS ownership correction + exact artifact validation
→ combined deployment
→ R5-E5 runtime acceptance
→ R5-E6 final strict acceptance
→ binary Cart decision
```
