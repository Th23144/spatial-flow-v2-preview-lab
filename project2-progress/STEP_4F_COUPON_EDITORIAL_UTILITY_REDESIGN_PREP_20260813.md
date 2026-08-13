# Step 4F · Coupon editorial utility redesign prep · 2026-08-13

Status: PREPARED · NON-REFERENCE FUNCTIONAL EXTENSION

## Context
The checkout Coupon control is intentionally outside the strict 1:1 reference contract because the formal reference page does not contain a coupon entry control. The requirement is therefore not to imitate a nonexistent reference element, but to integrate the live WooCommerce coupon feature into the same visual language with minimal visual weight.

## Runtime visual diagnosis
The previous cleanup removed explicit borders, but the collapsed control still reads as an invisible rectangular band because the toggle remains `width: 100%` with text on the far left and `+` floated to the far right. Those two distant anchors create an implicit full-width frame even without a literal border.

## Design decision
Redesign the collapsed Coupon control as a compact editorial utility action:
- collapsed toggle becomes `inline-flex`, not a full-width hit area;
- `+` / `−` stays adjacent to the label instead of defining the far right edge of a band;
- default color is muted; hover/expanded state gains ink color and a short underline only under the control itself;
- remove inherited button chrome explicitly (`appearance`, `box-shadow`, background image, border radius, outline baseline);
- preserve `focus-visible` accessibility;
- expanded panel stretches to full width and keeps the real input + Apply button boundaries;
- mobile keeps the same compact utility model.

This is a redesign of the existing Coupon owner, not a tail FIX block and not a deletion-only response.

## Exact current CSS baseline
`checkout-safe5.css`
- 136,170 bytes
- 4,453 logical lines
- SHA256 `c6c2926c44956d943dd188343b9e839833234eaf7359375e4ffa6ccfa62244c2`

## Offline target
After the prepared replacements:
- 137,735 bytes
- 4,492 logical lines
- SHA256 `8b18b26053281d21d49ad1cf47fa95df2ed3a737da0848fe507264805631925b`
- braces 530 / 530
- comments 24 / 24
- CSS parser errors 0

No JS, PHP, WooCommerce coupon authority, or backend copy ownership changes are part of this patch.
