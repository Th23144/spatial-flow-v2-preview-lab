# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-16  
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
R5-E3 empty-Cart parity：Passed / closed.
Current executable phase：R5-E4-A strict geometry measurement audit.
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
project2-progress/STEP_4E_B2_R5_E3_FINAL_RUNTIME_VALIDATION.md
project2-progress/STEP_4E_B2_R5_E3_FIX2_FLEX_CENTERING.md
project2-progress/STEP_4E_B2_R5_E4_A_STRICT_GEOMETRY_AUDIT.md
project2-progress/STEP_4E_B2_R5_D3_D4_FAILURE_AND_R5_E_REOPEN.md
project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
```

## Non-negotiable rule

```text
- strict 1:1 means source-level geometry and spacing, not general resemblance
- current server files are the only valid modification baseline
- no ZIP or blind complete-file overwrite outside an explicitly validated artifact
- no Cart template override
- no hardcoded Cart/BAG count
- no polling
- no duplicate fragments request
- no routine append-only Cart visual patch
- every correction must be bounded and independently reversible
- do not change Cart to Completed 1:1 before R5-E6 passes
```

## Accepted current code baselines

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

assets/css/spatial-flow.css
Deployed artifact: spatial-flow(22).css
Size: 695,622 bytes
Logical lines: 23,316
SHA256: 7186d10195843ba30448c898abf04d55b842b57a157ef0a0e2672897ede9b8ed
Braces: 3,621 / 3,621
Comments: 340 / 340
CSS parser errors: 0
```

## Closed R5-E2 result

```text
- Header BAG and Your Bag update immediately
- remove and Undo update both counts
- final-item removal changes BAG to (0)
- Shop, Single Product and SAFE5 Checkout regressions passed
- one get_refreshed_fragments request per Cart update
```

## Closed R5-E3 result

```text
- desktop transition/direct empty parity passed
- phone transition/direct empty parity passed
- fake right column removed
- phone empty message centered
- Return to Shop passed
- native Undo passed
- BAG (0) passed
- restored non-empty Cart passed
```

## Current exact operation · R5-E4-A

No code change in this substep.

On a non-empty desktop Cart:

```text
- set browser zoom to 100%
- use a viewport at least 1366 CSS pixels wide
- run the exact DevTools measurement snippet in STEP_4E_B2_R5_E4_A_STRICT_GEOMETRY_AUDIT.md
- report the console table values
```

The source audit already confirms:

```text
- current max-width declaration is 1440px
- current desktop side-gutter formula is 48px
- current main columns are 7fr / 5fr
- current wide-desktop column gap is 80px
- current parent row-gap is incorrectly 0
- current combined heading owner cannot reproduce the static title/count/main-row rhythm
```

Do not widen the frame until rendered measurements prove the width declaration is not winning.

## Remaining sequence

```text
R5-E4-A rendered geometry measurement
→ R5-E4-B in-place strict geometry correction
→ R5-E4-C desktop + phone visual validation
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final strict full acceptance
→ binary Cart status decision
```