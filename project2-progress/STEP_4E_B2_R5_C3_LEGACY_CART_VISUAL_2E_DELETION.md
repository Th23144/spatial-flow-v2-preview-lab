# Step 4E-B2-R5-C3 · Delete Legacy Cart Visual 2-E

Last updated: 2026-07-13  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-C1：Passed.
R5-C2：Passed.
R5-C3：Active / deletion-only.
R5-C4：Blocked until R5-C3 passes.
Cart page status：Not done.
```

## Purpose

Remove the bounded mobile-only legacy Cart Visual 2-E block now superseded by the accepted Canonical Cart presentation.

```text
Delete only：Cart Visual 2-E
Do not modify：Cart Visual 3
Do not modify：Canonical Cart block
Do not modify：Cart Notice Toast
Do not modify：functions.php / JavaScript / WooCommerce templates / version
Do not append：any replacement CSS
```

## Exact current CSS baseline

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(16).css
Size: 709,035 bytes
Logical lines: 23,761
SHA256: 56513693e37f98021fca4fd71b389e7f83e2f797a9d0746047ebbe915870618a
Braces: 3,689 / 3,689
Comments: 351 / 351
CSS parser errors: 0
```

The three-byte difference from the earlier theoretical R5-C2 hash is only the removal of three empty newline characters at the deletion boundary. Do not add them back.

## Create the bounded rollback copy first

Before deleting:

```text
1. Select the exact range described below.
2. Copy it.
3. Paste it into a separate local text file.
4. Save that file as R5-C3-rollback.css.
5. Do not use a full-stylesheet overwrite as the normal rollback.
```

Expected rollback-range identity:

```text
Size: 11,603 bytes
Logical lines: 394
SHA256: e6eb3dcca65703598f78b238820e82ff6646fb9ec1c0e9a75e2f82d1cd7bd8ec
Braces: 60 / 60
Comments: 9 / 9
```

## Exact deletion range

Search for this START marker:

```css
/* === Cart Visual 2-E MOBILE COMPACT RHYTHM REFINEMENT START ===
```

It must occur exactly once.

Search for this END marker:

```css
/* === Cart Visual 2-E MOBILE COMPACT RHYTHM REFINEMENT END === */
```

It must occur exactly once.

Current approximate lines:

```text
START：3,628
END：4,021
```

Select from the first `/` in the START marker through the final `/` in the END marker, inclusive.

Do not select the blank lines before START or after END.

After deletion, this must be the next retained Cart marker:

```css
/* === Cart Visual 3 REAL WOOCOMMERCE RECOMMENDATIONS START ===
```

## Delete and save

Delete the selected range once and save `spatial-flow.css`.

Do not insert any replacement text.

## Expected file after exact deletion

Calculated directly from the accepted uploaded `spatial-flow(16).css` baseline:

```text
Size: 697,432 bytes
Logical lines: 23,368
SHA256: a929032b92f4ea5b2e29f3d8e9ec9716eee42124a766164c34da3a2b903ed38b
Braces: 3,629 / 3,629
Comments: 342 / 342
CSS parser errors: 0
```

Expected marker counts:

```text
Cart Visual 2-E START / END：0 / 0
Cart Visual 3 START / END：1 / 1
Canonical Cart START / END：1 / 1
Cart Notice START：1
```

## Browser gate

Force-refresh desktop and phone Cart after saving.

Desktop must retain:

```text
- Your Bag heading and live count
- left product list / right Order Summary structure
- filled product thumbnails
- desktop Remove line below product metadata
- quantity controls and item subtotals
- Coupon / Apply Coupon / Update Cart operation row
- Order Summary totals, buttons and trust rows
- four recommendation products and View all
- Header and Footer
```

Phone must retain:

```text
- no horizontal overflow
- one refined SVG remove icon per item
- stable product cards and filled thumbnails
- one displayed subtotal per item
- stacked Coupon controls
- integrated Order Summary title
- aligned trust icons and copy
- one-column recommendation list
- Header and Footer
```

Targeted native-function recheck:

```text
1. Change one quantity and click Update Cart.
2. Remove one product and use Undo / Restore.
3. Submit INVALID123 and confirm the standard Coupon error notice.
4. Click Proceed to Checkout and return to Cart.
```

## Pass / rollback rule

Pass only when:

```text
- uploaded CSS matches the exact expected post-deletion structure
- desktop and phone remain stable
- all four targeted native functions remain normal
```

If a regression appears:

```text
1. Undo immediately when possible; or
2. paste only R5-C3-rollback.css back at the original position,
   immediately before Cart Visual 3 START.
```

Do not restore the entire stylesheet unless the bounded rollback cannot be performed.

Do not begin R5-C4 until R5-C3 is explicitly accepted.