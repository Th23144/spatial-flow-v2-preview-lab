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
R5-E2 PHP edit：Passed pre-deploy review.
R5-E2 initial JS edit：Rejected before deployment because it duplicates WooCommerce native fragment refresh.
Current executable phase：remove the two JS additions and exact-validate the restored JS baseline.
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
project2-progress/STEP_4E_B2_R5_D3_D4_FAILURE_AND_R5_E_REOPEN.md
project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
project2-progress/STEP_4E_B2_R5_D2_C_RECOMMENDATION_OWNERSHIP_VALIDATION.md
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

## Last accepted server baselines before R5-E2

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
Braces: 13 / 13
```

## R5-E2 pre-deploy review

### Accepted PHP file

```text
functions(14).php
Size: 552,215 bytes
Logical lines: 10,292
SHA256: 7f4d1f3722e86ba5b03bcbb05ac9119cf1cdd6c74ddc54ba49c1454a291ed070
Braces: 1,208 / 1,208
PHP syntax: Passed
Version: 2.7.8
```

No unrelated PHP change was found.

### Rejected JavaScript file

```text
spatial-flow(2).js
Size: 71,299 bytes
Logical lines: 2,009
SHA256: 13706257345cb5d03a7759bc3abe7285632953103074e53f029e70fa7b80ed96
Braces: 381 / 381
JavaScript syntax: Passed
```

Syntax is valid, but the added listener is logically redundant and would duplicate the fragment request.

WooCommerce 10.4.3 already listens to:

```text
wc_fragment_refresh updated_wc_div
```

The PHP dependency is sufficient to activate that native owner. Therefore custom `setupCartLiveCountRefresh()` must not be deployed.

## Current exact operation

From `spatial-flow(2).js`, remove only:

```text
1. complete setupCartLiveCountRefresh() function
2. setupCartLiveCountRefresh(); initializer call
```

Do not modify `functions(14).php`.

Expected corrected JS:

```text
Size: 70,828 bytes
Logical lines: 1,995
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
Braces: 378 / 378
JavaScript syntax: Passed
```

Upload the corrected JS for exact validation before applying either file to the server.

## Remaining sequence

```text
R5-E2 corrected JS exact validation
→ apply accepted PHP + unchanged JS
→ R5-E2 browser/network validation
→ R5-E3 empty-Cart wrapper/state parity
→ R5-E4 strict static-source geometry, including missing 80px row rhythm
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final strict full acceptance
→ binary Cart status decision
```
