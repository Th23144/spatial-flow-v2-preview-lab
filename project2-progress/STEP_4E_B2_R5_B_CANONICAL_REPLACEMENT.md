# Step 4E-B2-R5-B · Canonical Cart CSS In-Place Replacement

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-A1 visual-gap / ownership audit：Complete.
R5-B canonical CSS generation：Complete.
User manual in-place replacement：Applied exactly.
Exact uploaded-file validation：Passed.
Desktop structure：Stable.
Mobile structure：Stable.
Mobile remove control：one glyph only, but contrast insufficient.
R5-B final visual acceptance：Not passed.
Current correction：R5-B1 bounded in-place declaration replacement.
Historical Cart CSS deletion：Forbidden.
Cart page status：Not done.
```

Current correction record:

```text
project2-progress/STEP_4E_B2_R5_B1_MOBILE_REMOVE_CONTRAST.md
```

## Purpose and execution mode

The complete temporary `R2 + FIX1 + FIX2 + FIX3` range was replaced **in place** with one canonical Cart presentation block.

This was not an append-only patch and not a whole-file replacement.

The canonical layer is intended to:

```text
- preserve the desktop 7fr / 5fr frame
- preserve the one-column phone flow
- separate trust icons from their text columns
- show one controlled phone remove glyph
- own thumbnail td / anchor / img sizing
- give desktop Remove a dedicated row below metadata
- integrate the Order Summary heading into the panel
- normalize Coupon, totals, buttons and recommendations
- preserve real WooCommerce data and native behavior
```

## Source baseline before replacement

```text
File: assets/css/spatial-flow.css
Uploaded baseline: spatial-flow(10).css
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

## Replaced range

Original temporary range:

```text
START:
/* === Step 4E-B2-R2 · Cart V2 Consolidation Layer START ===

END:
/* === Step 4E-B2-R2 · Cart V2 Consolidation Layer END === */

Size: 46,765 bytes
Logical lines: 1,470
SHA256: de89193566e99219e74f34f1c5e3ede018c7c0e81ca1bc35e166fc334fa80414
Braces: 209 / 209
Comments: 8 / 8
```

The protected next marker remained:

```css
/* === Step 4E Cart Notice Toast START ===
```

Independent rollback artifact:

```text
R5-B-rollback-current-R2-FIX-stack.css
```

Rollback remains bounded to this one range; complete stylesheet overwrite is not the default rollback.

## Applied canonical block

```text
START:
/* === Step 4E-B2-R5-B · Canonical Cart Presentation START ===

END:
/* === Step 4E-B2-R5-B · Canonical Cart Presentation END === */

Size: 44,703 bytes
Logical lines: 1,343
SHA256: 4ea330724a30edfd5801ff7e22d4756ba06955210fe7bc7f325ce9dcec79111b
Braces: 156 / 156
Comments: 16 / 16
CSS parser errors: 0
```

Required boundary is present:

```css
/* === Step 4E-B2-R5-B · Canonical Cart Presentation END === */

/* === Step 4E Cart Notice Toast START ===
```

## Uploaded result validation

Uploaded file:

```text
Name: spatial-flow(11).css
Size: 811,826 bytes
Logical lines: 27,089
SHA256: 11e4c7b25cdf4c8beaf420dc4b5da1b0801a611679d4f85019bb1228d17d0b1e
Braces: 4,074 / 4,074
Comments: 413 / 413
CSS parser errors: 0
Canonical START / END: 1 / 1
Old R2 START / END: 0 / 0
FIX1 / FIX2 / FIX3 markers: 0
Cart Notice START: 1
```

The uploaded canonical range is byte-identical to the supplied canonical artifact. The complete-file one-byte difference from the prior prediction is final-newline state, not code drift.

## Visual result

Confirmed improvements visible in the supplied screenshots:

```text
- trust icons no longer use the oversized white shells that intruded into copy
- desktop Remove is separated below metadata
- thumbnails fill their allocated visual slots more consistently
- mobile Order Summary heading is integrated into the beige panel
- desktop and phone structures remain stable
- four real recommendation products remain present
- no horizontal phone overflow is visible
```

New blocker:

```text
The phone remove control now contains only one controlled ×, but its transparent shell, weak border and light glyph weight merge visually into the light product-card background.
```

This is a contrast/affordance defect, not a return of the former duplicate-× defect.

## Active correction

Use only:

```text
project2-progress/STEP_4E_B2_R5_B1_MOBILE_REMOVE_CONTRAST.md
```

R5-B1 replaces the existing phone remove-control declarations inside the canonical block. It does not append a new Cart layer and does not alter desktop CSS.

## Gate before historical cleanup

R5-C remains blocked until:

```text
- R5-B1 exact CSS validation passes
- one dark, legible phone × is visible in each 32px control
- remove and Undo / Restore work
- strict desktop review passes
- production-quality phone review passes
- quantity / Coupon / shipping / checkout / recommendation behavior remains normal
- Header / Footer / Shop / Single Product / SAFE5 Checkout remain unchanged
```

Only after the complete R5-B gate passes may staged historical Cart CSS deletion begin.