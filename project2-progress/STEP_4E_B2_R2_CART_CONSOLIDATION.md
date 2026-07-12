# Step 4E-B2-R2 · Insert Complete Scoped Cart V2 Consolidation Layer

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
B2-A1 deletion-first plan：Rejected and rolled back exactly.
B2-R1 dependency re-audit：Complete.
B2-R2 static generation/validation：Complete.
User manual insertion：Pending.
Legacy Cart CSS deletion in this step：Forbidden.
Cart page status：Not done.
```

## 1. Purpose

Insert one authoritative Cart-only CSS layer after all historical Cart/page layers and before the separate Cart notice block.

This layer explicitly owns:

```text
- native page-title suppression only when the dynamic Cart heading exists
- Your Bag heading and live count
- desktop 7fr / 5fr Cart + Order Summary composition
- product-row image/name/meta/quantity/subtotal/remove layout
- Coupon / Apply Coupon / Update Cart operation row
- dynamic native totals, shipping, calculator and checkout controls
- Continue Shopping
- four summary trust entries and payment note
- four real recommendation cards and responsive breakpoints
- tablet stacking
- mobile product-row cards and controls
- empty-cart presentation
```

It does not change PHP, JavaScript, WooCommerce templates, calculations, URLs, product data, shipping, payment or order behavior.

## 2. Authoritative baseline

```text
File: assets/css/spatial-flow.css
Uploaded name: spatial-flow(6).css
Size: 767,120 bytes
Lines: 25,744
SHA256: 675ecd3acea94f263ab9ec9b5b02c413ea19f831a0eb18a0ba7e0523d0aab76a
Opening braces: 3,918
Closing braces: 3,918
Opening comments: 397
Closing comments: 397
CSS parser errors: 0
```

Unchanged PHP baseline:

```text
functions.php
Version: 2.7.8
Size: 550,884 bytes
Lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
```

## 3. Exact snippet source

Copy the complete contents of:

```text
project2-progress/snippets/STEP_4E_B2_R2_CART_CONSOLIDATION.css
```

Snippet validation:

```text
Size: 33,457 bytes
Lines: 1,083
SHA256: 42e3135527c5569836841330ae69be7dfe6362c5a55203bdc560864a1634e1b9
Opening braces: 145
Closing braces: 145
Opening comments: 2
Closing comments: 2
Qualified rules: 142
Media queries: 3
Every selector scope: body.woocommerce-cart
CSS parser errors: 0
```

The snippet is an insertion range only. It is not a complete replacement stylesheet.

## 4. Exact insertion boundary

Search the local `spatial-flow.css` for:

```css
/* === Step 4E Cart Notice Toast START ===
```

It must occur exactly once.

Immediately before it, the accepted baseline contains:

```css
/* === Spatial Flow Step 5Q-B · Blog Single Mobile Article Layout V4 END === */
/* === Step 4E Cart Notice Toast START ===
```

Place the cursor before the first `/` of the Cart Notice marker and paste the complete snippet, followed by one blank line.

After insertion, the boundary must be:

```css
/* === Spatial Flow Step 5Q-B · Blog Single Mobile Article Layout V4 END === */
/* === Step 4E-B2-R2 · Cart V2 Consolidation Layer START ===
...
/* === Step 4E-B2-R2 · Cart V2 Consolidation Layer END === */

/* === Step 4E Cart Notice Toast START ===
```

Do not move, delete or edit the Cart Notice block.

## 5. Expected file result

When the baseline and line endings remain exact:

```text
Size: 800,578 bytes
Lines: 26,828
SHA256: 4c66fe5b092ced93b198fafe22af6d70e89ffc6064b6cb52b2d7ead8c30f6328
Opening braces: 4,063
Closing braces: 4,063
Opening comments: 399
Closing comments: 399
CSS parser errors: 0
Delta: +33,458 bytes / +1,084 lines
```

The extra one byte/line beyond the snippet itself is the required separator newline before the Cart Notice marker.

## 6. Why this does not repeat the failed deletion

```text
- no existing Cart CSS is removed
- the accepted restored baseline remains underneath
- the new layer is later in source order
- every rule is scoped to body.woocommerce-cart
- critical ownership declarations use !important to override the 15 legacy layers during validation
- rollback deletes only one clearly marked block
```

This is a temporary authoritative layer, not an indefinite append-only patch. Legacy cleanup begins only after this layer passes browser and file validation.

## 7. Expected desktop result

At widths above 1100px:

```text
- native Cart page title disappears
- Your Bag and live count span the page
- products occupy the left 7fr column
- Order Summary occupies the right 5fr column and is sticky
- product rows become open editorial rows without the old white card shell
- unit Price column is visually suppressed; native dynamic Subtotal remains visible
- quantity and remove controls remain native and usable
- Coupon, Apply Coupon and Update Cart remain usable
- Proceed to Checkout and Continue Shopping are full-width stacked controls
- all four trust entries remain visible
- four real recommendation products display in one row on wide screens
```

## 8. Expected tablet/mobile result

```text
1100px and below:
- Cart and summary stack into one column
- summary loses sticky positioning
- recommendations use three columns

767px and below:
- product rows use compact two-column mobile structure
- remove control remains circular and tappable
- quantity and subtotal labels remain visible
- Coupon, Apply Coupon and Update Cart become full-width controls
- summary follows product rows
- all four trust entries remain present
- recommendations use one column
- no horizontal overflow
```

## 9. Required browser validation

Desktop and mobile screenshots are required because this is a major visual ownership change.

Confirm:

```text
1. Only one Your Bag heading is present.
2. Live count is correct and below the heading.
3. No collapsed or overlapping product columns.
4. Product image, name, real meta, quantity, subtotal and remove action are usable.
5. Quantity update changes count/totals correctly.
6. Coupon success/error/removal works.
7. Shipping rows/calculator remain accessible.
8. Proceed to Checkout enters SAFE5 Checkout.
9. Continue Shopping returns to the real Shop URL.
10. All four trust entries remain visible.
11. Four real recommendation products and links work.
12. Mobile has no horizontal overflow.
13. Header, Footer, Shop, Single Product and SAFE5 Checkout are unchanged.
14. No PHP warning, fatal error or console-blocking UI failure.
```

## 10. Independent rollback

Delete only the complete range from:

```css
/* === Step 4E-B2-R2 · Cart V2 Consolidation Layer START ===
```

through:

```css
/* === Step 4E-B2-R2 · Cart V2 Consolidation Layer END === */
```

and delete the one blank separator line after it.

The file must then return exactly to:

```text
Size: 767,120 bytes
Lines: 25,744
SHA256: 675ecd3acea94f263ab9ec9b5b02c413ea19f831a0eb18a0ba7e0523d0aab76a
```

Do not overwrite the complete CSS file as the default rollback.

## 11. Gate after insertion

Upload the edited `spatial-flow.css` plus desktop and mobile Cart screenshots.

Do not remove any historical Cart CSS until B2-R2 passes exact file validation, desktop/mobile visual validation and native functional regression.