# Step 4E-B2-R2-FIX2 · Desktop 1:1 Detail Pass

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
FIX1 exact file：Passed.
FIX1 desktop structural objective：Passed.
FIX2 instructions：Issued.
User manual insertion：Pending.
Mobile validation：Not part of this operation.
Legacy Cart CSS deletion：Forbidden.
Cart page status：Not done.
```

## 1. Purpose

FIX1 established the correct centered desktop frame and removed the retained dark recommendation shell. FIX2 performs one bounded desktop-only detail pass against the accepted `spatial-flow(8).css` baseline.

FIX2 is limited to:

```text
- title/count vertical rhythm
- product-row columns, image scale, title/meta wrapping, remove placement
- duplicate desktop product-price suppression
- quantity/subtotal alignment
- Coupon / Apply Coupon / Update Cart sizing
- Order Summary heading integration and internal rhythm
- checkout/continue-shopping/trust-row proportions
- recommendation image ratio, card text rhythm, price/CTA alignment
```

FIX2 does not:

```text
- modify PHP
- modify JavaScript
- modify WooCommerce templates
- modify cart calculations, shipping, coupon, checkout URLs or product queries
- modify Header or Footer ownership
- modify mobile rules
- delete any historical Cart CSS
- fabricate a replacement image for a real WooCommerce missing-image placeholder
```

## 2. Exact current baseline

```text
File: assets/css/spatial-flow.css
Uploaded name: spatial-flow(8).css
Size: 804,062 bytes
Newline count: 26,924
Logical lines: 26,925
SHA256: e6e053efad50191dfd147ca72b0cf76888eeae194f156f4b634b02e6186edb86
Opening braces: 4,076
Closing braces: 4,076
Opening comments: 401
Closing comments: 401
CSS parser errors: 0
R2 START / END: 1 / 1
FIX1 START / END: 1 / 1
```

Unchanged PHP baseline:

```text
functions.php
Uploaded name: functions(12).php
Version: 2.7.8
Size: 550,884 bytes
Lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
```

Stop and upload the newest CSS if the local file does not match the exact CSS baseline above.

## 3. Exact snippet

Copy the complete contents of:

```text
project2-progress/snippets/STEP_4E_B2_R2_FIX2_DESKTOP_DETAIL.css
```

Snippet metrics:

```text
Size: 9,328 bytes
Logical lines: 279
SHA256: 359a1012bb1c39a402747a429117068ca9af94b9410ad0e3b61b9cb26d929f6a
Opening braces: 49
Closing braces: 49
Opening comments: 2
Closing comments: 2
CSS parser errors: 0
```

The entire detail pass is inside:

```css
@media (min-width: 1101px) {
  ...
}
```

Therefore this operation does not alter the current mobile rules.

## 4. Exact insertion boundary

Inside the existing R2 range, search for:

```css
/* === Step 4E-B2-R2 · Cart V2 Consolidation Layer END === */
```

It must occur exactly once.

The current boundary immediately above it must contain:

```css
/* === Step 4E-B2-R2-FIX1 · Outer Width + Recommendation Specificity END === */

/* === Step 4E-B2-R2 · Cart V2 Consolidation Layer END === */
```

Place the cursor immediately before the first `/` of the main R2 END marker. Paste the complete FIX2 snippet, followed by one blank line.

The resulting boundary must read:

```css
/* === Step 4E-B2-R2-FIX1 · Outer Width + Recommendation Specificity END === */

/* === Step 4E-B2-R2-FIX2 · Desktop 1:1 Detail Pass START ===
...
/* === Step 4E-B2-R2-FIX2 · Desktop 1:1 Detail Pass END === */

/* === Step 4E-B2-R2 · Cart V2 Consolidation Layer END === */
```

Do not paste FIX2 after the Cart Notice block. Do not edit FIX1, the main R2 range, or any older Cart CSS.

## 5. Expected file result

When the accepted baseline and line endings remain exact:

```text
Size: 813,392 bytes
Newline count: 27,204
Logical lines: 27,205
SHA256: caacee43d3cd938ed19674beae6bb7e570d891963bde410f4f8aa272a397c4b8
Opening braces: 4,125
Closing braces: 4,125
Opening comments: 403
Closing comments: 403
CSS parser errors: 0
Delta: +9,330 bytes / +280 newline characters / +280 logical lines
```

The two bytes/newlines beyond the snippet itself are the required separator before the existing main R2 END marker.

The predicted complete stylesheet was generated from `spatial-flow(8).css` and parsed with zero CSS errors.

## 6. Expected desktop changes

After saving and performing a hard refresh at a desktop viewport wider than 1100px:

```text
- product rows use a wider title/detail column and more controlled image/quantity/subtotal proportions
- the duplicate per-item product-price cell no longer appears under the image
- metadata is constrained to two lines instead of colliding with Remove
- Remove sits below the product copy without a floating oval artifact
- quantity and subtotal align more consistently across rows
- Coupon input, Apply Coupon and Update Cart form one stable single-row operation bar
- Order Summary no longer has a separate white title strip
- summary rows, total, buttons and four trust entries have tighter reference-like rhythm
- recommendation images become square, matching the static reference proportion
- four live WooCommerce recommendations remain in one row
- titles, descriptions, prices and View Piece controls align more consistently
```

The fourth recommendation may continue to show WooCommerce's real missing-image placeholder. That is data, not a CSS defect, and must not be replaced by fabricated imagery.

## 7. Functional boundaries

This CSS-only desktop pass must not alter:

```text
quantity minus / input / plus behavior
Update Cart enable/disable behavior
remove product and Restore / Undo
Coupon apply, error and removal
Shipping and Change address
Proceed to Checkout URL
Continue Shopping URL
recommendation product links
SAFE5 Checkout
Header, Footer, Shop and Single Product
```

Full functional regression is scheduled after desktop and mobile visual passes. During FIX2, immediately stop and report if any native control disappears or becomes unusable.

## 8. Independent rollback

Delete only the complete range from:

```css
/* === Step 4E-B2-R2-FIX2 · Desktop 1:1 Detail Pass START ===
```

through:

```css
/* === Step 4E-B2-R2-FIX2 · Desktop 1:1 Detail Pass END === */
```

and the one blank line immediately following it.

Do not remove FIX1 or the main R2 consolidation range. Do not overwrite the complete CSS file as the default rollback.

## 9. Required evidence

After insertion, upload the edited `spatial-flow.css` and provide one desktop Cart screenshot that includes:

```text
- Your Bag heading and count
- all visible product rows
- Coupon / Apply Coupon / Update Cart
- complete Order Summary
- complete recommendation heading and all four recommendation cards
```

Also confirm in text:

```text
No native Cart control disappeared
Header/Footer remained normal
```

A mobile screenshot is not required for FIX2 because the snippet is desktop-only. Mobile visual work begins only after FIX2 is accepted.

Do not begin legacy Cart CSS deletion after FIX2. Desktop acceptance must be followed by a separate mobile pass and full native functional regression.