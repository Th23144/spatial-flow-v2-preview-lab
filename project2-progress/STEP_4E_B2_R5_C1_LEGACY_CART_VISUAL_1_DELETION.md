# Step 4E-B2-R5-C1 · Delete Legacy Cart Visual 1 through 1.4.1

Last updated: 2026-07-13  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Complete R5-B canonical gate：Passed.
R5-C1：Active / deletion-only.
R5-C2 through R5-C4：Blocked until R5-C1 passes.
Cart page status：Not done.
```

## Purpose

Remove the first bounded legacy Cart CSS group now superseded by the accepted Canonical Cart block.

This is not a visual redesign and not an append operation.

```text
Delete only：Cart Visual 1 through Cart Visual 1.4.1
Do not modify：Canonical Cart block
Do not modify：Cart Notice Toast
Do not modify：functions.php / JavaScript / WooCommerce templates / version
Do not delete：Cart Visual 2-D or any later Cart block
```

## Exact current CSS baseline

Source of truth:

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(14).css
Size: 812,489 bytes
Logical lines: 27,104
SHA256: 53c2efa74e6975912191f0e522f97ce5ec2a8148fc8f808a8c481492d07e5c59
Braces: 4,075 / 4,075
Comments: 413 / 413
CSS parser errors: 0
```

## Exact deletion range

Search for the START marker:

```css
/* === Cart Visual 1 START ===
```

It must occur exactly once.

Then search for the END marker:

```css
/* === Cart Visual 1.4.1 ACTION BUTTON OVERLAP FIX END === */
```

It must occur exactly once.

Current approximate location:

```text
START：line 3,628
END：line 4,839
```

Select from the first `/` of the START marker through the final `/` of the END marker, inclusive.

Do not select the blank line before START or the blank line after END.

The next retained block must remain:

```css
/* === Cart Visual 2-D PRODUCT META + COUPON ALIGNMENT + PRODUCT-LIKE COMPLETE CARDS START ===
```

## Delete

Delete the selected range once, then save.

Deleted-range metrics:

```text
Size: 35,692 bytes
Logical lines: 1,212
SHA256: 4ca2a01bba053a9e04a509474d27122d2f77d78a50927b932a55520da64253b2
Braces: 154 / 154
Comments: 29 / 29
```

Independent rollback block:

```text
project2-progress/rollback/STEP_4E_B2_R5_C1_CART_VISUAL_1_TO_1_4_1.css
```

Rollback must restore only this bounded block at the original location. Do not restore the complete stylesheet.

## Expected file after deletion

```text
Size: 776,797 bytes
Logical lines: 25,893
SHA256: 73d3cf9a76b9c3f5359254b4612948b735ae2b9157063a359e05f80dc8a9db73
Braces: 3,921 / 3,921
Comments: 384 / 384
CSS parser errors: 0
```

Expected marker counts:

```text
Cart Visual 1 START：0
Cart Visual 1.1 FIX START：0
Cart Visual 1.2 FIX START：0
Cart Visual 1.3 DESKTOP STABILITY FIX START：0
Cart Visual 1.4 FINAL WIDE TWO-COLUMN FIX START：0
Cart Visual 1.4.1 ACTION BUTTON OVERLAP FIX START：0
Cart Visual 2-D START：1
Canonical Cart START / END：1 / 1
Cart Notice START：1
```

## Browser gate

After saving, force-refresh Cart on desktop and phone.

Desktop must retain:

```text
- centered Your Bag heading and live count
- stable left products / right Order Summary frame
- filled product thumbnails
- dedicated desktop Remove line
- quantity controls and subtotals
- Coupon / Apply Coupon / Update Cart row
- Order Summary buttons and trust rows
- four recommendation products
- Header and Footer
```

Phone must retain:

```text
- no horizontal overflow
- one refined SVG × in every 32px remove control
- product card layout and filled thumbnails
- one subtotal per item
- stacked Coupon controls
- integrated Order Summary title
- trust icons aligned with copy
- one-column recommendation list
- Header and Footer
```

Targeted function recheck:

```text
1. Change one quantity and Update Cart.
2. Remove one item and Undo / Restore.
3. Submit INVALID123 as Coupon and confirm the normal error notice.
4. Open Proceed to Checkout, then return to Cart.
```

## Pass / rollback rule

Pass only when:

```text
- the edited file matches the exact expected metrics
- desktop and phone layouts remain stable
- targeted native functions remain normal
```

If any structural regression appears, restore only the bounded rollback block at the original location and upload the restored CSS for exact validation.

Do not begin R5-C2 until R5-C1 is explicitly accepted.