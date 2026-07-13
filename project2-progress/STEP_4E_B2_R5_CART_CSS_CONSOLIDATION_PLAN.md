# Step 4E-B2-R5 · Cart Canonical Replacement and Legacy Cleanup Plan

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Desktop structural gate：Passed.
Mobile structural gate：Passed.
FIX3 duplicate-price correction：Passed exactly.
Native Cart functional regression：Passed.
Final strict 1:1 visual acceptance：Reopened / not passed.
Append-only Cart refinement：Frozen.
R5-A1 visual-gap and ownership audit：Complete.
Current executable step：R5-B canonical in-place replacement.
Cart page status：Not done.
```

The bounded structure/function gates are not final strict-1:1 approval. Focused desktop and mobile evidence confirmed several blocking defects. R5-A1 has now mapped those defects, the selector ownership conflicts, the canonical replacement boundary and the later safe deletion batches.

Authoritative completed audit:

```text
project2-progress/STEP_4E_B2_R5_A1_AUDIT_COMPLETE.md
```

Original focused defect record:

```text
project2-progress/STEP_4E_B2_R5_A1_FINAL_VISUAL_GAP_AND_OWNERSHIP_AUDIT.md
```

## Why this phase exists

The current Cart result depends on two layers:

```text
1. a historical Cart stack accumulated before Step 4E
2. the temporary R2 consolidation layer plus FIX1, FIX2 and FIX3
```

R2/FIX1/FIX2/FIX3 were inserted without deleting the old stack because the first deletion-only attempt caused severe layout collapse. That was a temporary replacement-validation strategy, not permission for indefinite append-only CSS.

The temporary stack is frozen. No routine FIX4 is allowed.

## Exact baseline

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(10).css
Size: 813,887 bytes
Logical lines: 27,215
SHA256: 7f55a49bfd82f3c2e9fc5db9b5a37b209ac4bad9f6c0b4f99dcabe23a73643ae
Braces: 4,127 / 4,127
Comments: 405 / 405
CSS parser errors: 0
```

Unchanged PHP:

```text
functions.php
Version: 2.7.8
Size: 550,884 bytes
Lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
```

## Current CSS inventory

### Historical Cart stack

```text
Range：Cart Visual 1 START through Cart Visual 3 END
Current lines：3,628–7,425
Blocks：15
Size：117,141 bytes
Logical lines：3,798
SHA256：a30b706fbeec9701b8fedd33471875e89384eeb61e1843a6798f69446880d403
Braces：456 / 456
Comments：73 / 73
```

### Temporary R2/FIX stack

```text
Range：Step 4E-B2-R2 START through Step 4E-B2-R2 END
Current lines：25,350–26,819
Includes：R2 + FIX1 + FIX2 + FIX3
Size：46,765 bytes
Logical lines：1,470
SHA256：de89193566e99219e74f34f1c5e3ede018c7c0e81ca1bc35e166fc334fa80414
Braces：209 / 209
Comments：8 / 8
```

## Confirmed visual blockers

```text
1. desktop/mobile Order Summary trust-icon shells overflow their columns and intrude into text
2. mobile remove controls show two × glyphs
3. desktop/mobile product thumbnails do not visually fill their allocated frame
4. desktop textual Remove action collides with dynamic metadata
5. wider strict-1:1 spacing, proportions and typography remain incomplete
```

These are blocking visual defects, not cleanup-only observations.

## Hard freeze

Until R5-B canonical validation passes:

```text
- do not append another Cart visual patch
- do not add FIX4 for spacing, typography, icons or thumbnail treatment
- do not delete the complete historical Cart range
- do not alter PHP, JavaScript or WooCommerce templates for CSS cleanup
- do not change the separate Cart Notice Toast block
- do not affect Checkout, Thank You, Header, Footer, Shop or Single Product
- do not claim final desktop/mobile visual acceptance
```

A new bounded append is allowed only for a newly reproduced functional or accessibility emergency that cannot wait for canonical replacement.

## R5-A1 · Audit result

Completed output:

```text
- desktop/mobile discrepancy matrix
- selector/declaration ownership matrix
- root cause for each confirmed blocker
- declarations still inherited from historical CSS
- declarations already superseded in purpose
- exact canonical replacement boundary
- independent rollback boundary
- exact later deletion batches with size/line/hash metrics
```

Source:

```text
project2-progress/STEP_4E_B2_R5_A1_AUDIT_COMPLETE.md
```

## R5-B · Canonical Cart block replacement

Replace the complete current `R2 + FIX1 + FIX2 + FIX3` range in place with one canonical Step 4E Cart block.

Exact current replacement boundary:

```text
START:
/* === Step 4E-B2-R2 · Cart V2 Consolidation Layer START ===

END:
/* === Step 4E-B2-R2 · Cart V2 Consolidation Layer END === */
```

The canonical block must remain at the same location immediately before:

```text
/* === Step 4E Cart Notice Toast START ===
```

This is a replacement operation, not an addition.

Canonical block requirements:

```text
- resolve every confirmed visual blocker
- own the complete final desktop and mobile presentation
- converge toward the V2 reference without copying weak mobile decisions blindly
- preserve real WooCommerce data and native behavior
- use one desktop textual Remove action on a dedicated row below metadata
- use one mobile circular × control with exactly one visible glyph
- separate trust icon shell and SVG ownership
- give thumbnail td/anchor/img one explicit slot size per breakpoint
- integrate the Order Summary title into the panel on all breakpoints
- keep four real recommendation products and real missing-image states
- do not append the canonical block elsewhere
```

Independent rollback:

```text
Before replacement, save the complete current 46,765-byte R2/FIX range.
If R5-B fails, restore only that saved range at the same START/END location.
Do not overwrite the complete stylesheet as the default rollback.
```

### R5-B validation gate

```text
- exact file size, lines, SHA256, brace balance, comment balance and parser pass
- strict desktop visual comparison
- production-quality mobile visual comparison
- all confirmed blockers resolved
- quantity/remove/Coupon/shipping/checkout/recommendation behavior rechecked
- Header/Footer/Shop/Single Product/SAFE5 Checkout unchanged
```

Historical cleanup cannot begin before this gate passes.

## R5-C · Historical cleanup in small batches

Only after canonical visual acceptance:

```text
R5-C1：Cart Visual 1 through 1.4.1
R5-C2：Cart Visual 2-D through 2-D.8
R5-C3：Cart Visual 2-E mobile refinement
R5-C4：Cart Visual 3 recommendation layer
```

Exact batch metrics are recorded in `STEP_4E_B2_R5_A1_AUDIT_COMPLETE.md`.

Each batch must be:

```text
- deletion-only
- independently reversible
- file-validated before browser testing
- desktop and mobile checked
- native Cart functions rechecked where the removed group controls interaction layout
```

Do not begin the next batch until the previous batch passes.

## R5-D · Final acceptance

After cleanup:

```text
- backend-editability validation
- final strict desktop visual review
- final mobile quality review
- final native Cart functional regression
- exact PHP/CSS baseline record
- binary page-status decision
```

Only then may Cart change from `Not done` to `Completed 1:1`.

## Decision record

```text
R5-A1 audit complete
→ R5-B one canonical in-place replacement
→ strict visual/functional validation
→ R5-C staged historical deletion
→ R5-D backend editability and final acceptance
```
