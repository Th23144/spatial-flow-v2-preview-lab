# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-21  
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
30. project2-progress/STEP_4E_B2_R5_E5_S2_A_PHP_VALIDATION.md
31. project2-progress/STEP_4E_B2_R5_E5_S2_B_JS_MANUAL_EXECUTION.md
32. project2-progress/STEP_4E_B2_R5_E5_S2_B_JS_VALIDATION.md
33. project2-progress/STEP_4E_B2_R5_E5_S2_C_CSS_MANUAL_EXECUTION.md
34. project2-progress/STEP_4E_B2_R5_E5_S2_C_CSS_VALIDATION_ATTEMPT_1.md
35. project2-progress/STEP_4E_B2_R5_E5_S2_C_CSS_VALIDATION.md
36. project2-progress/STEP_4E_B2_R5_E5_S2_D_COMBINED_DEPLOYMENT.md
37. project2-progress/STEP_4E_B2_R5_E5_S2_D_RUNTIME_REJECTION_AND_S2_E_MOBILE_ITEM_DEBOX.md
38. project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
39. project2-progress/PROGRESS_LOG.md
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
R5-E5-S2-A PHP Order Summary Coupon renderer artifact validation：Passed / deployed
R5-E5-S2-B delegated JavaScript lifecycle bridge artifact validation：Passed / deployed
R5-E5-S2-C exact CSS ownership correction：Passed / deployed
R5-E5-S2-D combined deployment and functional smoke checks：Passed by user report
R5-E5-S2-D mobile strict visual acceptance：Failed / white rounded product-card frame remained
Current：R5-E5-S2-E remove obsolete phone product-row surface declarations
Cart：Not done
```

## Current exact deployed files

```text
functions.php / deployed from functions(19).php
Size: 557,249 bytes
Logical lines: 10,414
SHA256: 5bd9f8b307d1b59eaa92bf31d3640e2d4ba48bca4de7a640b705d5e75f9ef00b
Version: 2.7.8
PHP syntax: Passed
Deployment: Confirmed by runtime
Rollback SHA256: ab7c9b1a893b2fdfaf8db7947fcf82974e8c1d71b54c8f0d17fe32029e5f5d86

assets/js/spatial-flow.js / deployed from spatial-flow(5).js
Size: 78,143 bytes
Logical lines: 2,242
SHA256: 7442ee92167ae383b933c6db0281f14ea56a75733339818c3e4858d77d52651b
JavaScript syntax: Passed
Deployment: Confirmed by runtime
Rollback SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3

assets/css/spatial-flow.css / deployed from spatial-flow(37).css
Size: 700,439 bytes
Logical lines: 23,474
SHA256: d3460695ff0e53e79465ac9d13d723b440c69021413e15ff671705ec28b907aa
Braces: 3,645 / 3,645
Comments: 338 / 338
CSS parser errors: 0
Deployment: Confirmed by runtime
Runtime status: functional, but mobile item-card frame rejected
Rollback SHA256: 3e6b0d6fa292681cee1c2936e744314b4347a0bcc82ea3e7cd911d5cac1969ce
```

## S1 / S2 ownership conclusion

The approved static Cart has a product-only left plane and no Coupon / Apply Coupon / Update Cart footer. WooCommerce 10.4.3 places Coupon, Update Cart, the actions hook and nonce in the final `td.actions` row inside `.woocommerce-cart-form`; native cart.js serializes and replaces the form and totals during updates.

S2-A through S2-D successfully moved the visible Coupon control into Order Summary, preserved native WooCommerce ownership, and removed the native actions row from visible geometry.

The remaining frame is a separate phone product-row presentation owner inside the Canonical Cart media query. It explicitly adds card margin, inset padding, a four-sided border, radius, paper background and shadow. The approved static mobile reference changes only grid geometry and does not add those card surfaces.

Detailed audits:

```text
project2-progress/STEP_4E_B2_R5_E5_S1_STRICT_SOURCE_DOM_OWNERSHIP_AUDIT.md
project2-progress/STEP_4E_B2_R5_E5_S2_REPOSITORY_MD_RECONCILIATION.md
project2-progress/STEP_4E_B2_R5_E5_S2_EXACT_FILE_VALIDATION_AND_BOUNDED_PLAN.md
project2-progress/STEP_4E_B2_R5_E5_S2_A_PHP_VALIDATION.md
project2-progress/STEP_4E_B2_R5_E5_S2_B_JS_MANUAL_EXECUTION.md
project2-progress/STEP_4E_B2_R5_E5_S2_B_JS_VALIDATION.md
project2-progress/STEP_4E_B2_R5_E5_S2_C_CSS_MANUAL_EXECUTION.md
project2-progress/STEP_4E_B2_R5_E5_S2_C_CSS_VALIDATION_ATTEMPT_1.md
project2-progress/STEP_4E_B2_R5_E5_S2_C_CSS_VALIDATION.md
project2-progress/STEP_4E_B2_R5_E5_S2_D_COMBINED_DEPLOYMENT.md
project2-progress/STEP_4E_B2_R5_E5_S2_D_RUNTIME_REJECTION_AND_S2_E_MOBILE_ITEM_DEBOX.md
```

## Current execution gate

Execute S2-E source edit only:

```text
1. Start from deployed source alias spatial-flow(37).css.
2. Inside the Canonical Cart @media (max-width: 767px) product-row rule, delete exactly six obsolete presentation declarations:
   margin, padding, border, border-radius, background and box-shadow.
3. Retain every grid/layout declaration and all following phone placement rules.
4. Do not append a new override.
5. Do not modify PHP or JavaScript.
6. Do not deploy the edited CSS until exact artifact validation passes.
7. Upload the edited CSS for validation.
```

Required S2-E candidate identity:

```text
Size: 700,177 bytes
Logical lines: 23,468
SHA256: 4bce679ee3c2abca6bcc0dfd4733d92d0c8b77e16b7a0bbf7d7832e305cff6b6
Braces: 3,645 / 3,645
Comments: 338 / 338
CSS parser errors: 0
```

Do not execute the cancelled FIX4 and do not create/deploy SHA256:

```text
6377f0686c9b7a992c440e0c855bfa409cdcd45359f33695f896fa048d5f6737
```

## Remaining sequence

```text
R5-E5-S2-E phone product-row debox source edit + exact artifact validation
→ CSS-only deployment
→ mobile and desktop runtime acceptance
→ R5-E6 final strict acceptance
→ binary Cart decision
```
