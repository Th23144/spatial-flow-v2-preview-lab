# Project 2 · CSS Maintenance Policy

Last updated: 2026-07-11
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Core rule

Project 2 is a V2 visual re-skin / 换皮工程, not an append-only patch pile.

From this point forward, CSS work must follow this priority order:

1. Replace the existing selector block in place.
2. Merge overlapping or duplicate patch blocks when the target area is clear.
3. Delete obsolete or invalid old blocks only when the affected scope is understood and verified.
4. Append a new block only when the component is genuinely new, or when temporary append-only validation is explicitly chosen.

Append-only CSS is no longer the default.

## 2. Why this policy exists

The project already contains many historical CSS additions from earlier phases. Some were useful temporary fixes, but continuing to append every new adjustment will make the stylesheet harder to audit, harder to debug, and more likely to create specificity conflicts.

The user explicitly prefers maintainable CSS over endless bottom-of-file patches.

## 3. Current handling rule for old appended blocks

Do not immediately clean all historical appended blocks during normal feature work.

The existing appended blocks are allowed to remain temporarily because many of them are already tested and may still be stabilizing live visual behavior.

Instead, choose a dedicated cleanup phase to consolidate them.

Completed cleanup milestone:

```text
Step 4D-CLEAN1 · Single Product CSS consolidation
```

Broader future cleanup milestone:

```text
Project2-CLEAN-CSS · Global CSS consolidation pass
```

These cleanup passes should be done only after the relevant page/section is visually accepted, except when a page-specific historical stack must be removed before a controlled rebase. In that case, deletion and insertion must be separate verified operations.

## 4. Required workflow for future CSS changes

Before giving CSS changes, the assistant must:

1. Ask for or use the latest uploaded `assets/css/spatial-flow.css` as the only current source of truth.
2. Record file size, line count, hash, brace balance, comment balance, and parser result.
3. Locate the existing relevant selector block and exact START/END anchors.
4. Prefer a precise replacement instruction:
   - find this selector/block;
   - replace only this block;
   - do not append a duplicate selector at the bottom.
5. Only append when no safe existing block exists.
6. If appending is necessary, label the block as temporary or controlled, and record that it should be merged later.
7. State the expected size/line delta before the user edits.
8. Re-read or revalidate the edited file before moving to the next operation.

## 5. Output format expected for CSS tasks

For CSS tasks, use this format:

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

Do not append the replacement as a new bottom block unless explicitly approved as a temporary test.

If the file is too large or the exact old block is uncertain, first inspect/search the uploaded CSS and then provide precise replacement steps.

## 6. Whole-file delivery prohibition

For large theme files such as `assets/css/spatial-flow.css` and `functions.php`:

```text
- Do not make a downloadable whole-file replacement package the default implementation method.
- Do not ask the user to overwrite a large current file blindly.
- Do not combine a broad deletion and a broad insertion into one unreviewed operation.
- A generated full-file candidate may exist only as an internal comparison artifact and must be clearly marked “Do not apply” unless the user explicitly approves whole-file replacement.
```

Required safe sequence for large CSS rebases:

```text
1. Provide exact deletion-only instructions.
2. User performs the deletion manually.
3. Validate intermediate size, lines, braces, comments, and parser result.
4. Provide exact insertion instructions at one fixed marker.
5. User performs the insertion manually.
6. Validate again before browser refinement.
```

Each operation must have an independent rollback path. “Restore the entire file” must not be the default rollback plan.

## 7. Current page-specific reminder

Current Project 2 stage:

```text
Step 4E · Cart / 购物车 1:1 换皮
```

Current execution rule:

```text
Step 4E-A：Complete
Whole-file Step 4E-B candidate：Withdrawn / Do not apply
Next：Step 4E-B0 manual exact-range execution map
```

For Cart:

```text
- Do not use the generated ZIP/full-file candidate.
- Do not replace the full 767 KB stylesheet blindly.
- Split PHP and CSS work into small named substeps.
- Split Cart CSS deletion and insertion into separate verified operations.
- Preserve the separate WooCommerce notice block.
- Preserve Header, Footer, Shop, Single Product, and SAFE5 Checkout.
```

Authoritative Cart manual protocol:

```text
project2-progress/STEP_4E_B_MANUAL_EXECUTION.md
```

## 8. Hard boundary

Do not sacrifice backend editability for visual cleanliness.

Project 2 must preserve WordPress / WooCommerce / Customizer / product meta / menu / shortcode / option-driven content wherever it already exists.

CSS cleanup must not hide backend-editable content just to make a screenshot look cleaner.