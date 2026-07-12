# Step 4E-B2-R5 · Cart CSS Consolidation and Legacy Cleanup Plan

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Desktop visual validation：Passed.
Mobile visual validation after FIX3：Passed.
Native Cart functional regression：Passed.
Append-only Cart refinement：Frozen.
Current executable step：R5-A audit only / no code changes.
Cart page status：Not done.
```

## Why this phase exists

The validated Cart result currently depends on two layers:

```text
1. a historical Cart stack accumulated before Step 4E
2. the newer R2 consolidation layer plus FIX1, FIX2 and FIX3
```

R2/FIX1/FIX2/FIX3 were deliberately inserted without deleting the old stack because the earlier deletion-first attempt caused a severe layout collapse. Keeping the old stack during replacement validation was therefore a temporary safety measure.

That temporary measure is now complete. Continuing to append more Cart fragments would violate the project maintenance rule.

## Current exact baseline

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

## Current Cart CSS inventory

### Historical Cart visual stack

```text
Range：Cart Visual 1 START through Cart Visual 3 END
Approximate current lines：3,628–7,425
Blocks：15
Size：117,141 bytes
Lines：3,798
Rule/media-query brace pairs：456
Comment starts：73
```

Included historical blocks:

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

### New validated R2 stack

```text
Range：Step 4E-B2-R2 START through Step 4E-B2-R2 END
Approximate current lines：25,350–26,819
Includes：R2 + FIX1 + FIX2 + FIX3
Size：46,765 bytes
Lines：1,470
Rule/media-query brace pairs：209
Comment starts：8
```

The existence of the R2 layer does not by itself prove every historical declaration is redundant. The failed deletion-first attempt proved that ownership must be demonstrated before removal.

## Hard freeze

Until R5 is complete:

```text
- do not append another Cart visual patch
- do not add a FIX4 merely to tune spacing or typography
- do not delete the full historical range in one operation
- do not alter PHP, JavaScript or WooCommerce templates for CSS cleanup
- do not change the separate Cart Notice Toast block
- do not affect Checkout, Thank You, Header, Footer, Shop or Single Product
```

A new bounded correction is allowed only for a newly reproduced functional or accessibility defect.

## R5-A · Ownership and dependency audit

Mode:

```text
No code changes.
```

Required output:

```text
- selector responsibility matrix for desktop frame, item rows, quantity, remove, Coupon, summary, trust rows, recommendations and mobile
- list of declarations still inherited from the historical stack
- list of historical declarations fully superseded by R2
- exact safe deletion batches
- predicted metrics and independent rollback for each batch
```

R5-A must use the uploaded `spatial-flow(10).css` as the only source of truth.

## R5-B · Canonical R2 replacement

After R5-A proves ownership:

```text
- replace the complete current R2 + FIX1 + FIX2 + FIX3 range in place
- produce one canonical Step 4E Cart block
- preserve the accepted browser result
- do not append the canonical block elsewhere
- validate exact file metrics and desktop/mobile behavior
```

This is a replacement operation, not an addition.

## R5-C · Historical cleanup in small batches

Only after canonical R2 validation:

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
- native Cart functions rechecked where the removed group controls visible interaction layout
```

Do not begin the next batch until the previous batch passes.

## R5-D · Final acceptance

After cleanup:

```text
- backend-editability validation
- final desktop and mobile visual check
- final native Cart functional regression
- exact PHP/CSS baseline record
- page status decision
```

Only then may Cart change from `Not done` to `Completed 1:1`.

## Decision record

The project is not choosing indefinite append-only CSS. The validated temporary stack is now frozen, and the next phase is controlled replacement plus staged deletion.