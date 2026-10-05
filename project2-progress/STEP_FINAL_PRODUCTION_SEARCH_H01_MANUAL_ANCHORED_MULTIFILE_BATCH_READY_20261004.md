# Final Production Search — H01 Manual Anchored Multi-file Batch Ready

Date: 2026-10-04
Project: Spatial Flow V2 / Project 2

## Governing delivery method

Per:
- `PROJECT2_MANUAL_REPLACEMENT_AND_FILE_SIZE_AUDIT_POLICY.md`
- `PROJECT2_MULTIFILE_EXECUTION_POLICY_USER_CORRECTION_20260913.md`

Search H01 is issued as one coherent three-file feature batch, but every live edit is bounded and manually anchored.

The previously generated full-file candidates remain internal audit artifacts only and are not a deployment method.

## Baselines

### page-templates/global-search.php
- 13,038 bytes
- 220 logical lines
- SHA256 `303feaf8afa7efdbec45f8b91ccebc2a93514da11bb79896dc329115c0b663a7`
- PHP syntax PASS
- trailing newline YES

### functions.php
- 641,971 bytes
- 12,307 logical lines
- SHA256 `c65af1fc79fe8407477e109b35fe6e3ac16e2e095371cce881af30939010ed91`
- version 2.7.55
- PHP syntax PASS
- trailing newline NO

### assets/css/spatial-flow.css
- 610,831 bytes
- 21,721 logical lines
- SHA256 `776760cf5f96c1f27b693063d7d90f787edaa4709e72add9670a22dc222e56e0`
- braces 3413 / 3413
- comments 241 / 241
- trailing newline YES

## Manual edit manifest

### A — global-search.php body-owner replacement

Replace one exact bounded tail region:
- START anchor begins at the PHP close directly before the current `<main class="sf-global-search-page...`
- END anchor is the unique final:
  `</main>\n\n<?php\nget_footer();`

Old selected region:
- 10,690 bytes
- 152 logical lines
- SHA256 `03f098a929caa6544022f9363aae8b77253d0d5345d3abfba47ddfb64fe18eeb`

Replacement region (includes the single leading LF required to preserve the blank line before `$product_count`):
- 15,043 bytes
- 219 logical lines
- SHA256 `67c9768d687dda94e8d5a8301421bb622d09b0785d7e87246de7cfde089f7ae3`

Delta:
- +4,353 bytes
- +67 lines

Expected whole file:
- 17,391 bytes
- 287 logical lines
- SHA256 `df3f752f39e59e501b3ee19c53949a7692b59330f15a6ba4ae8939e910f7d54e`
- PHP syntax PASS

### B — functions.php

B1 version:
- 2.7.55 -> 2.7.56
- 1 match
- byte delta 0
- line delta 0

B2 Search default hero/control block:
- exact old block from global `eyebrow` through `journal_placeholder`
- 1 match
- +1,105 bytes
- +16 lines

B3 product naming block:
- `View product` -> `View object`
- Product fallback -> Object
- exact seven-line block
- 1 match
- -2 bytes
- 0 lines

B4 Search Customizer label block:
- exact block from `$labels = array(` through `journal_placeholder`
- 1 match within `spatial_flow_global_search_customizer()`
- +1,132 bytes
- +16 lines

Total functions delta:
- +2,235 bytes
- +32 lines

Expected whole file:
- 644,206 bytes
- 12,339 logical lines
- SHA256 `ed1ba9d79c9020a8ba6069267bf80a160cb2a1f388c281d841ca4e1f7b2c6db9`
- version 2.7.56
- PHP syntax PASS

### C — spatial-flow.css canonical owner replacement

Replace inclusive from:
`/* === Spatial Flow Step 5C-B-C · Global Search Native Page V1 START ===`

through:
`/* === Spatial Flow Step 5C-B-E1 · Global Search Mobile Pages Card Fix END === */`

Both anchors must each match exactly once.

Old selected region:
- 12,562 bytes
- 565 logical lines
- SHA256 `1a0878ea57cd3afe8045574225254a5c58c0c572407728840bc5de56c0a8c6e3`

Replacement region:
- 13,427 bytes
- 637 logical lines
- SHA256 `73179caf542701bf358e13fb9412383a954024856255ea363db110dade0983dd`

Delta:
- +865 bytes
- +72 lines

Expected whole file:
- 611,696 bytes
- 21,793 logical lines
- SHA256 `6bd0ba12f4a5eeb67296408d2cb191281d01d0d7eed0d9d0d5a124df4b59f846`
- braces 3438 / 3438
- comments 239 / 239
- top-level CSS parse errors 0

## Execution rule

Apply A + B1-B4 + C as one coherent Search H01 feature batch.

If any stated anchor or exact old block does not match the expected count, stop before saving that file.

After all three files are edited, return all three modified files together.

Do not runtime-test Search before the combined returned-file Source Gate passes.

Status: MANUAL ANCHORED H01 MULTI-FILE BATCH READY.


## Execution simplification correction

For the user-facing manual batch, the functions.php edits are consolidated into three bounded operations while preserving the same final candidate identity:

1. version constant 2.7.55 -> 2.7.56;
2. replace the entire unique `spatial_flow_global_search_defaults()` owner block, from its `if ( ! function_exists... )` line up to but not including `spatial_flow_global_search_mod()`;
3. within the unique `spatial_flow_global_search_customizer()` owner, replace its `$labels = array(...);` block up to but not including the following `foreach ( $labels as $key => $label )`.

Exact region metrics:
- defaults old: 7,229 bytes / SHA256 `fc71aa01ddd2cef0b6da61a0ba6c32131abc617db696a66372e5707d4a32f3e0`
- defaults new: 8,332 bytes / SHA256 `77e4201f41b04d2843dbd9f0b40dd0240355dafe5be4194b1b9358db67776a24`
- defaults delta: +1,103 bytes / +16 lines
- labels old: 5,796 bytes / SHA256 `5d8509e925cabd75f172467cd7b0a9eb1bf832aa29021d9513309b37fb617683`
- labels new: 6,928 bytes / SHA256 `75a0dea8252ade74b34938b1cebcaf4936021e0b3d09cc9015fd6b18f14ff06c`
- labels delta: +1,132 bytes / +16 lines

This simplification is byte-equivalent to the previously verified H01 functions candidate and retains expected whole-file SHA256:
`ed1ba9d79c9020a8ba6069267bf80a160cb2a1f388c281d841ca4e1f7b2c6db9`.


## A-region off-by-one correction

A prior internal extraction omitted the single LF immediately before `$product_count`, which would have produced a functionally similar but SHA-different file.

Correct exact manual replacement:
- old region begins at the unique `?>` immediately before the current Search `<main>` and ends at `get_footer();`;
- new region begins with **one leading blank line**, then `$product_count = ...`;
- exact new region: 15,043 bytes / SHA256 `67c9768d687dda94e8d5a8301421bb622d09b0785d7e87246de7cfde089f7ae3`;
- expected whole-file target remains 17,391 bytes / 287 logical lines / SHA256 `df3f752f39e59e501b3ee19c53949a7692b59330f15a6ba4ae8939e910f7d54e`.

This correction is mandatory for byte-identical H01 output.
