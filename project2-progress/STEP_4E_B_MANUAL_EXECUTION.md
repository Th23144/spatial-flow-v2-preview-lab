# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-14  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-A audit：Complete.
Step 4E-B0 manual map：Complete.
Step 4E-B1-A through B1-H：Passed.
Step 4E-B2-A1 deletion-first attempt：Rejected / rolled back.
R5-B canonical implementation：Passed as baseline.
R5-C1 through R5-C4 legacy cleanup：Passed / closed.
R5-D1 exact source/ownership：Passed.
R5-D2 backend editability/dynamic ownership：Passed / closed.
R5-D3 final strict visual acceptance：Failed / reopened.
R5-D4 final native Cart regression：Failed / reopened.
R5-D5 binary decision：Blocked.
Current executable phase：R5-E1 exact source/state re-audit.
Cart page status：Not done.
```

## Current authoritative records

```text
PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
PROJECT2_CSS_MAINTENANCE_POLICY.md
project2-progress/STEP_4E_B2_R5_D3_D4_FAILURE_AND_R5_E_REOPEN.md
project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
project2-progress/STEP_4E_B2_R5_D3_D4_COMBINED_FINAL_CHECKLIST.md
project2-progress/STEP_4E_B2_R5_D2_C_RECOMMENDATION_OWNERSHIP_VALIDATION.md
project2-progress/STEP_4E_B2_R5_C4_VALIDATION.md
project2-progress/STEP_4E_B2_R5_B5_VALIDATION.md
```

## Non-negotiable rule

```text
- current server files are the only valid modification baseline
- no ZIP or complete theme-file overwrite
- no blind overwrite of functions.php or spatial-flow.css
- no Cart template override
- no hardcoded Cart/BAG count
- no polling
- no routine append-only Cart visual patch
- no broad Header rewrite
- every correction must be bounded and independently reversible
- do not change Cart to Completed 1:1 before R5-E6 passes
```

## Last exactly validated baselines

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

These are reference baselines only. Re-upload current server copies before editing.

## Closed gates that remain valid

```text
- all scheduled legacy Cart visual blocks removed
- Canonical Cart and Cart Notice each exist once
- Customizer Cart text sources are editable
- product-level Cart subtitle is editable
- recommendations use real WooCommerce products
- fallback selectors 1–4 exist and save
- SAFE5 Checkout source sharing remained structurally normal
```

## Reproduced blockers

```text
1. Header BAG and Your Bag count stay stale after quantity/remove/restore until manual refresh.
2. Direct fresh empty Cart uses a different broken/narrow layout from transition-to-empty Cart.
3. Desktop Cart body remains materially narrower than the approved 1440px V2 frame direction.
4. Cart update/remove notice is functional but visually poor and not V2-aligned.
5. User explicitly rejected final 1:1 acceptance as still a large distance away.
```

## Current executable operation · R5-E1

Required current server files:

```text
1. functions.php
2. assets/css/spatial-flow.css
3. assets/js/spatial-flow.js
4. header.php or the actual current header template-part that renders BAG count
```

R5-E1 must identify:

```text
- Header BAG markup/function owner
- Your Bag count markup/function owner
- WooCommerce update/remove/restore event path
- direct-empty vs transition-empty DOM/state differences
- active desktop width/container selectors
- exact Canonical Cart and Cart Notice replacement boundaries
```

No code change before R5-E1 finishes.

## Remaining sequence

```text
R5-E1 exact source/state re-audit
→ R5-E2 synchronized live counts
→ R5-E3 empty-Cart state parity
→ R5-E4 desktop width + strict V2 visual rebase
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final full acceptance rerun
→ binary Cart status decision
```
