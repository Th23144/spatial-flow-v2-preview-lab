# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-15  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-A audit：Complete.
Step 4E-B0 manual map：Complete.
Step 4E-B1-A through B1-H：Passed.
Step 4E-B2-A1 deletion-first attempt：Rejected / rolled back.
R5-B canonical implementation：Passed as a cleaned implementation baseline, not final 1:1 acceptance.
R5-C1 through R5-C4 legacy cleanup：Passed / closed.
R5-D1 exact source/ownership：Passed.
R5-D2 backend editability/dynamic ownership：Passed / closed.
R5-D3 final strict visual acceptance：Failed / reopened.
R5-D4 final native Cart regression：Failed / reopened.
R5-D5 binary decision：Blocked.
R5-E1 exact source/state audit：Complete.
R5-E2 synchronized live counts：Passed / closed.
R5-E3 desktop and wrapper parity：Passed.
Current executable phase：R5-E3-FIX1 mobile empty-Cart centering.
Cart page status：Not done.
```

## Current authoritative records

```text
PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
PROJECT2_CSS_MAINTENANCE_POLICY.md
project2-progress/STEP_4E_B2_R5_E1_EXACT_SOURCE_AUDIT.md
project2-progress/STEP_4E_B2_R5_E2_POST_DEPLOY_VALIDATION.md
project2-progress/STEP_4E_B2_R5_E3_EMPTY_CART_PARITY.md
project2-progress/STEP_4E_B2_R5_E3_PRE_DEPLOY_VALIDATION.md
project2-progress/STEP_4E_B2_R5_E3_FIX1_MOBILE_EMPTY_CENTERING.md
project2-progress/STEP_4E_B2_R5_D3_D4_FAILURE_AND_R5_E_REOPEN.md
project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
```

## Non-negotiable rule

```text
- strict 1:1 means source-level geometry and spacing, not general resemblance
- current server files are the only valid modification baseline
- no ZIP or complete theme-file overwrite
- no blind overwrite of functions.php or spatial-flow.css
- no Cart template override
- no hardcoded Cart/BAG count
- no polling
- no duplicate fragments request
- no routine append-only Cart visual patch
- every correction must be bounded and independently reversible
- do not change Cart to Completed 1:1 before R5-E6 passes
```

## Accepted R5-E2 result

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
Decision: unchanged accepted baseline; no custom Cart fragment listener
Size: 70,828 bytes
Logical lines: 1,995
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
Braces: 378 / 378
```

R5-E2 runtime validation passed:

```text
- Header BAG and Your Bag update immediately
- remove and Undo update both counts
- final-item removal changes BAG to (0)
- Shop, Single Product and SAFE5 Checkout regressions passed
- one get_refreshed_fragments request per Cart update
```

## Current CSS baseline

```text
assets/css/spatial-flow.css
Uploaded/server artifact: spatial-flow(20).css
Size: 695,392 bytes
Logical lines: 23,306
SHA256: 19701ba3ee9944784939bef50dc94d81ccefba46e4df6be279edabc3c03c22e8
Braces: 3,619 / 3,619
Comments: 340 / 340
CSS parser errors: 0
```

## R5-E3 runtime result

Passed:

```text
- desktop transition-to-empty
- desktop direct-empty
- full-width wrapper parity on phone
- fake right column removed
- Return to Shop
- Undo
- BAG (0)
- non-empty Cart smoke check
```

Remaining failure:

```text
Phone empty-Cart message remains left-aligned in both transition and direct states.
```

## Current exact operation · R5-E3-FIX1

Inside the existing Canonical Cart phone media query, immediately after `.sf-cart-v2-heading__count`, add:

```css
  body.woocommerce-cart .cart-empty,
  body.woocommerce-cart .return-to-shop {
    text-align: center !important;
  }
```

No other change is authorized.

Expected result:

```text
Size: 695,511 bytes
Logical lines: 23,311
SHA256: d36326b8efac681ad6b9e3d31af63fe60221527fac26dee344803b3cd5fa6aee
Braces: 3,620 / 3,620
Comments: 340 / 340
CSS parser errors: 0
```

## Remaining sequence

```text
R5-E3-FIX1 mobile centering
→ R5-E4 strict static-source geometry, including missing 80px row rhythm and rendered-width verification
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final strict full acceptance
→ binary Cart status decision
```
