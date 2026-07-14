# Step 4E-B2-R5-C4 · Delete Legacy Cart Visual 3

Last updated: 2026-07-13  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-C1：Passed.
R5-C2：Passed.
R5-C3：Passed.
R5-C4：Active / deletion-only.
R5-D：Blocked until R5-C4 passes.
Cart page status：Not done.
```

## Purpose

Remove the final bounded legacy Cart Visual 3 block. Its real WooCommerce recommendation data remains owned by PHP, while presentation is already owned by the accepted Canonical Cart block.

```text
Delete only：Cart Visual 3
Do not modify：Canonical Cart block
Do not modify：Cart Notice Toast
Do not modify：functions.php / JavaScript / WooCommerce templates / version
Do not append：any replacement CSS
```

## Exact current CSS baseline

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(17).css
Size: 697,430 bytes
Logical lines: 23,366
SHA256: bd28dc82f300f905103f5388740c82dc07249a581a9030a6d6ccd465f9427341
Braces: 3,629 / 3,629
Comments: 342 / 342
CSS parser errors: 0
```

The two-byte difference from the earlier theoretical R5-C3 hash is only the removal of two empty newline characters immediately before Cart Visual 3. Do not add them back.

## Create the bounded rollback copy first

Before deleting:

```text
1. Select the exact range described below.
2. Copy it.
3. Paste it into a separate local text file.
4. Save that file as R5-C4-rollback.css.
5. Do not use a full-stylesheet overwrite as the normal rollback.
```

Expected rollback-range identity:

```text
Size: 2,082 bytes
Logical lines: 60
SHA256: 117063b63334fbb9ec72cce6ec87a360a49209673bfd3473c931f33c7775c147
Braces: 10 / 10
Comments: 2 / 2
```

## Exact deletion range

Search for this START marker:

```css
/* === Cart Visual 3 REAL WOOCOMMERCE RECOMMENDATIONS START ===
```

It must occur exactly once.

Search for this END marker:

```css
/* === Cart Visual 3 REAL WOOCOMMERCE RECOMMENDATIONS END === */
```

It must occur exactly once.

Current approximate lines:

```text
START：3,628
END：3,687
```

Select from the first `/` in the START marker through the final `/` in the END marker, inclusive.

Do not select the blank lines before START or after END.

After deletion, the next retained content is the Checkout CSS section. The Canonical Cart block remains later in the file and must not be touched.

## Delete and save

Delete the selected range once and save `spatial-flow.css`.

Do not insert any replacement text.

## Expected file after exact deletion

Calculated directly from the accepted uploaded `spatial-flow(17).css` baseline:

```text
Size: 695,348 bytes
Logical lines: 23,307
SHA256: 923837d0f271930d164f074e9c30e15a6097436e11fb83daa3c1ac71a437d3d5
Braces: 3,619 / 3,619
Comments: 340 / 340
CSS parser errors: 0
```

Expected marker counts:

```text
Cart Visual 3 START / END：0 / 0
Canonical Cart START / END：1 / 1
Cart Notice START / END：1 / 1
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
- four real recommendation products and View all
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
- one-column real recommendation list
- Header and Footer
```

Targeted native-function recheck:

```text
1. Change one quantity and click Update Cart.
2. Remove one product and use Undo / Restore.
3. Submit INVALID123 and confirm the standard Coupon error notice.
4. Click Proceed to Checkout and return to Cart.
5. Open at least one recommendation product and return to Cart.
```

## Pass / rollback rule

Pass only when:

```text
- uploaded CSS matches the exact expected post-deletion structure
- desktop and phone remain stable
- all five targeted native functions remain normal
```

If a regression appears:

```text
1. Undo immediately when possible; or
2. paste only R5-C4-rollback.css back at the original position,
   immediately before Checkout Visual Final START.
```

Do not restore the entire stylesheet unless the bounded rollback cannot be performed.

Do not begin R5-D until R5-C4 is explicitly accepted.
