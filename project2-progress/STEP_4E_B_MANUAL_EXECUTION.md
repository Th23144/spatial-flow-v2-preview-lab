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
Current executable phase：R5-E3 empty-Cart wrapper/state parity.
Cart page status：Not done.
```

## Current authoritative records

```text
PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
PROJECT2_CSS_MAINTENANCE_POLICY.md
project2-progress/STEP_4E_B2_R5_E1_EXACT_SOURCE_AUDIT.md
project2-progress/STEP_4E_B2_R5_E2_PRE_DEPLOY_CODE_REVIEW.md
project2-progress/STEP_4E_B2_R5_E2_LIVE_COUNT_SYNC.md
project2-progress/STEP_4E_B2_R5_E2_POST_DEPLOY_VALIDATION.md
project2-progress/STEP_4E_B2_R5_E3_EMPTY_CART_PARITY.md
project2-progress/STEP_4E_B2_R5_D3_D4_FAILURE_AND_R5_E_REOPEN.md
project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
project2-progress/STEP_4E_B2_R5_C4_VALIDATION.md
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
- no broad Header rewrite
- every correction must be bounded and independently reversible
- do not change Cart to Completed 1:1 before R5-E6 passes
```

## Accepted R5-E2 server result

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
Expected size: 70,828 bytes
Expected logical lines: 1,995
Expected SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
Braces: 378 / 378
```

R5-E2 runtime validation passed:

```text
- Header BAG and Your Bag count update immediately after quantity changes
- remove and Undo update both counts immediately
- final-item removal changes BAG to (0)
- Shop, Single Product and SAFE5 Checkout regressions passed
- one get_refreshed_fragments request per Cart update
- no console error or refresh loop reported
```

## Current CSS baseline for R5-E3

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(19).css
Size: 695,346 bytes
Logical lines: 23,305
SHA256: 316874b203f8ce4104a1a98751f9b5fd63034fb50b0cbeb9aa0c4d2d5711020e
Braces: 3,619 / 3,619
Comments: 340 / 340
```

## Current exact operation · R5-E3

Modify only the existing full-grid ownership selector list inside the Canonical Cart block.

Add:

```css
body.woocommerce-cart .wc-empty-cart-message,
```

immediately before the existing:

```css
body.woocommerce-cart .cart-empty,
```

No other CSS change is authorized in R5-E3.

Expected result:

```text
Size: 695,392 bytes
Logical lines: 23,306
SHA256: 19701ba3ee9944784939bef50dc94d81ccefba46e4df6be279edabc3c03c22e8
Braces: 3,619 / 3,619
Comments: 340 / 340
```

## Remaining sequence

```text
R5-E3 empty-Cart wrapper/state parity
→ R5-E4 strict static-source geometry, including missing 80px row rhythm and rendered-width verification
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final strict full acceptance
→ binary Cart status decision
```
