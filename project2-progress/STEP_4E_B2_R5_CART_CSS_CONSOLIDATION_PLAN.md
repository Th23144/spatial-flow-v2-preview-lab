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
Current executable step：R5-A1 visual-gap and ownership audit / no code changes.
Cart page status：Not done.
```

The earlier desktop/mobile pass labels referred to bounded structure and regression gates, not final strict-1:1 acceptance. Focused screenshots supplied after FIX3 reveal remaining blocking defects. Those defects must be closed inside the canonical replacement before legacy deletion begins.

Authoritative defect record:

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

The temporary stack is now frozen. No routine FIX4 is allowed.

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
Approximate current lines：3,628–7,425
Blocks：15
Size：117,141 bytes
Lines：3,798
Rule/media-query brace pairs：456
Comment starts：73
```

Included blocks:

```text
Cart Visual 1
Cart Visual 1.1
Cart Visual 1.2
Cart Visual 1.3
Cart Visual 1.4
Cart Visual 1.4.1
Cart Visual 2-D
Cart Visual 2-D.1
Cart Visual 2-D.2
Cart Visual 2-D.4
Cart Visual 2-D.5
Cart Visual 2-D.6
Cart Visual 2-D.8
Cart Visual 2-E
Cart Visual 3
```

### Temporary R2/FIX stack

```text
Range：Step 4E-B2-R2 START through Step 4E-B2-R2 END
Approximate current lines：25,350–26,819
Includes：R2 + FIX1 + FIX2 + FIX3
Size：46,765 bytes
Lines：1,470
Rule/media-query brace pairs：209
Comment starts：8
```

## Confirmed visual blockers

```text
1. desktop/mobile Order Summary trust-icon shells overflow their columns and intrude into text
2. mobile remove controls show two × glyphs
3. desktop/mobile product thumbnails do not visually fill the allocated frame
4. desktop textual Remove action collides with dynamic metadata
5. broader strict-1:1 spacing, proportions and typography remain insufficiently audited
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

## R5-A1 · Final visual-gap and ownership audit

Mode:

```text
No code changes.
```

Required output:

```text
- side-by-side desktop/mobile discrepancy matrix against the Cart V2 reference
- selector responsibility matrix for frame, item rows, thumbnails, metadata, remove, quantity, Coupon, summary, trust rows, recommendations and mobile
- declaration-level explanation of every confirmed blocker
- list of declarations still inherited from the historical stack
- list of historical declarations fully superseded by R2
- exact canonical replacement boundary
- predicted canonical metrics and independent rollback
- exact safe historical deletion batches for the later cleanup phase
```

R5-A1 must use `spatial-flow(10).css` as the only source of truth.

## R5-B · Canonical Cart block replacement

After R5-A1 proves ownership:

```text
- replace the complete current R2 + FIX1 + FIX2 + FIX3 range in place
- produce one canonical Step 4E Cart block
- resolve every confirmed visual blocker
- close the wider strict-1:1 discrepancy matrix
- preserve native WooCommerce behavior and real dynamic data
- do not append the canonical block elsewhere
```

This is a replacement operation, not an addition.

### Canonical design decisions

```text
Desktop remove action：one restrained text action on a dedicated reserved line below metadata.
Mobile remove action：one circular top-right × control.
Trust icons：separate parent-shell and inner-SVG ownership; no shell/text overlap.
Thumbnails：one slot size per breakpoint; anchor and image fill the slot; no fabricated imagery.
Mobile static reference：guidance only where it remains production-quality.
```

### R5-B validation gate

```text
- exact file metrics, brace/comment balance and parser pass
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

The project is not choosing indefinite append-only CSS, and it is not deleting CSS debt before the final design is actually complete. The sequence is now:

```text
visual-gap + ownership audit
→ one canonical in-place replacement
→ strict visual/functional validation
→ staged historical deletion
→ backend-editability and final acceptance
```