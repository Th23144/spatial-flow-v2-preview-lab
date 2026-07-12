# Project 2 · CSS Maintenance Policy

Last updated: 2026-07-12
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Core rule

Project 2 is a V2 visual re-skin / 换皮工程, not an append-only patch pile.

CSS work must follow this priority order:

1. Replace the existing selector block in place.
2. Merge overlapping or duplicate patch blocks when the target area is clear.
3. Delete obsolete or invalid old blocks only when the affected scope is understood and verified.
4. Append a new block only when the component is genuinely new, or when temporary append-only validation is explicitly chosen.

Append-only CSS is not the default.

## 2. Why this policy exists

The project contains historical CSS additions from earlier phases. Some were useful temporary fixes, but continuing to append every adjustment makes the stylesheet harder to audit, harder to debug and more likely to create specificity conflicts.

The user explicitly requires maintainable CSS rather than endless bottom-of-file patches.

## 3. Temporary appended blocks

Existing appended blocks may remain temporarily only while they are stabilizing live behavior or proving replacement ownership.

The temporary exception must have:

```text
- a named validation phase
- a rollback boundary
- a documented cleanup trigger
- a later replacement/merge/deletion phase
```

Completed cleanup milestone:

```text
Step 4D-CLEAN1 · Single Product CSS consolidation
```

Current page-specific cleanup milestone:

```text
Step 4E-B2-R5 · Cart CSS consolidation and legacy cleanup
```

Broader future cleanup milestone:

```text
Project2-CLEAN-CSS · Global CSS consolidation pass
```

## 4. Required workflow for CSS changes

Before issuing CSS changes:

1. Use the latest uploaded `assets/css/spatial-flow.css` as the only current source of truth.
2. Record size, line count, SHA256, brace balance, comment balance and parser result.
3. Locate the existing relevant selector block and exact START/END anchors.
4. Prefer precise replacement of the existing block.
5. Append only when no safe existing block exists and temporary validation is explicitly necessary.
6. Label every temporary append and record the cleanup trigger.
7. State the expected size/line delta before editing.
8. Re-read or revalidate the edited file before moving on.

## 5. Required output format

```text
Step name:
Purpose:
File: assets/css/spatial-flow.css
Current baseline size / lines / hash:

Find START anchor:
...

Find END anchor:
...

Delete or replace exactly:
...

Insert exactly:
...

Expected size / line delta:
...

Validation:
- brace balance
- comment balance
- CSS parser
- affected-page browser check

Rollback:
...
```

Do not append a replacement as a new bottom block unless it is an explicitly approved temporary test.

## 6. Whole-file delivery prohibition

For large theme files such as `assets/css/spatial-flow.css` and `functions.php`:

```text
- do not make a downloadable whole-file replacement package the default implementation method
- do not ask the user to overwrite a large current file blindly
- do not combine a broad deletion and broad insertion into one unreviewed operation
- a generated full-file candidate may exist only as an internal comparison artifact and must be marked Do not apply unless the user explicitly approves it
```

Each operation must have an independent rollback path. Restoring or overwriting the complete file must not be the default rollback.

## 7. Cart-specific current rule

Current Project 2 stage:

```text
Step 4E · Cart / 购物车 1:1 换皮
```

Current exact baseline:

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(10).css
Size: 813,887 bytes
Logical lines: 27,215
SHA256: 7f55a49bfd82f3c2e9fc5db9b5a37b209ac4bad9f6c0b4f99dcabe23a73643ae
```

Current execution state:

```text
Desktop：Passed
Mobile after FIX3：Passed
Native Cart functions：Passed
Append-only Cart refinement：Frozen
Next：Step 4E-B2-R5-A ownership and cleanup audit
```

For Cart:

```text
- do not add a routine FIX4 visual snippet
- do not delete the full historical Cart stack in one operation
- first map which legacy declarations are still inherited
- replace R2 + FIX1 + FIX2 + FIX3 with one canonical in-place block
- then delete historical Cart groups in small independently reversible batches
- preserve the separate WooCommerce Cart Notice block
- preserve Header, Footer, Shop, Single Product and SAFE5 Checkout
```

Authoritative plan:

```text
project2-progress/STEP_4E_B2_R5_CART_CSS_CONSOLIDATION_PLAN.md
```

## 8. Mobile quality boundary

Mobile static references are guidance, not authority when literal copying creates weak usability or composition.

Mobile review must prioritize:

```text
- native behavior
- real dynamic data
- readable text
- usable touch targets
- no clipping, overlap or horizontal overflow
- established Spatial Flow design language
- professional visual judgment
```

## 9. Hard boundary

Do not sacrifice backend editability for visual cleanliness.

Project 2 must preserve WordPress / WooCommerce / Customizer / product meta / menu / shortcode / option-driven content wherever it already exists.

CSS cleanup must not hide backend-editable content merely to make a screenshot look cleaner.