# Step 4E-B2-R5-C2 · Delete Legacy Cart Visual 2-D through 2-D.8

Last updated: 2026-07-13  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-C1：Passed.
R5-C2：Active / deletion-only.
R5-C3 and R5-C4：Blocked until R5-C2 passes.
Cart page status：Not done.
```

## Purpose

Remove the second bounded legacy Cart CSS group now superseded by the accepted Canonical Cart block.

```text
Delete only：Cart Visual 2-D through Cart Visual 2-D.8
Do not modify：Cart Visual 2-E
Do not modify：Cart Visual 3
Do not modify：Canonical Cart block
Do not modify：Cart Notice Toast
Do not modify：functions.php / JavaScript / WooCommerce templates / version
Do not append：any replacement CSS
```

## Exact current CSS baseline

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(15).css
Size: 776,795 bytes
Logical lines: 25,891
SHA256: 60cc0237ac69d45dd290bf86584f4a69a0ff672541540e8ba49a18b3c3b270bf
Braces: 3,921 / 3,921
Comments: 384 / 384
CSS parser errors: 0
```

## Create the bounded rollback copy first

Before deleting:

```text
1. Select the exact range described below.
2. Copy it.
3. Paste it into a separate local text file.
4. Save that file as R5-C2-rollback.css.
5. Do not use a full-stylesheet overwrite as the normal rollback.
```

Expected rollback-range identity:

```text
Size: 67,757 bytes
Logical lines: 2,128
SHA256: 0dbddf8801c08d5b73193d5dc2acd3de5d423aaac3dc05f2e9d5ad8df04d7f7c
Braces: 232 / 232
Comments: 33 / 33
```

## Exact deletion range

Search for this START marker:

```css
/* === Cart Visual 2-D PRODUCT META + COUPON ALIGNMENT + PRODUCT-LIKE COMPLETE CARDS START ===
```

It must occur exactly once.

Search for this END marker:

```css
/* === Cart Visual 2-D.8 STABLE COUPON ROLLBACK + OVAL SUPPRESS END === */
```

It must occur exactly once.

Current approximate lines:

```text
START：3,628
END：5,755
```

Select from the first `/` in the START marker through the final `/` in the END marker, inclusive.

Do not select the blank lines before START or after END.

After deletion, this must be the next retained legacy marker:

```css
/* === Cart Visual 2-E MOBILE COMPACT RHYTHM REFINEMENT START ===
```

## Delete and save

Delete the selected range once and save `spatial-flow.css`.

Do not insert any replacement text.

## Expected file after exact deletion

Calculated directly from the uploaded `spatial-flow(15).css` baseline:

```text
Size: 709,038 bytes
Logical lines: 23,764
SHA256: 8246c99795fb778ad87e310f63d66d48665fbb7009ba2c2a88f0856de2be79f2
Braces: 3,689 / 3,689
Comments: 351 / 351
CSS parser errors: 0
```

Expected marker counts:

```text
Cart Visual 2-D START：0
Cart Visual 2-D.1 START：0
Cart Visual 2-D.2 START：0
Cart Visual 2-D.4 START：0
Cart Visual 2-D.5 START：0
Cart Visual 2-D.6 START：0
Cart Visual 2-D.8 START：0
Cart Visual 2-E START：1
Cart Visual 3 START：1
Canonical Cart START / END：1 / 1
Cart Notice START：1
```

## Browser gate

Force-refresh desktop and phone Cart after saving.

Desktop must retain:

```text
- Your Bag heading and live count
- left product list / right Order Summary structure
- product thumbnails filling their slots
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
2. paste only R5-C2-rollback.css back at the original position,
   immediately before Cart Visual 2-E START.
```

Do not restore the entire stylesheet unless the bounded rollback cannot be performed.

Do not begin R5-C3 until R5-C2 is explicitly accepted.