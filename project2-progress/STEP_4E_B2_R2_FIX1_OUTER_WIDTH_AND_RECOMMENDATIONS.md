# Step 4E-B2-R2-FIX1 · Release Outer Width + Override Legacy Recommendation Specificity

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
B2-R2 file structure：Passed.
B2-R2 desktop visual：Failed / correction required.
Rollback of R2：Not required.
FIX1 instructions：Issued.
User manual insertion：Pending.
Cart page status：Not done.
```

## 1. Purpose

Fix only the two proven desktop ownership gaps:

```text
- release the remaining Astra article/content width chain
- allow the R2 open recommendation design to beat the older high-specificity dark-card rules
```

This step does not delete any historical Cart CSS and does not modify PHP, JavaScript, templates, calculations, product data, shipping, coupon, checkout or payment behavior.

## 2. Current authoritative baseline

```text
File: assets/css/spatial-flow.css
Uploaded name: spatial-flow(7).css
Size: 800,567 bytes
Lines: 26,829
SHA256: fd1a0a43364070b04818e140572ac5447201d0b58476f234b0d329157c687864
Opening braces: 4,063
Closing braces: 4,063
Opening comments: 399
Closing comments: 399
CSS parser errors: 0
```

Do not use the older theoretical B2-R2 hash as the local baseline. The uploaded and parsed `spatial-flow(7).css` is now the exact source of truth.

## 3. Exact snippet

Copy the complete contents of:

```text
project2-progress/snippets/STEP_4E_B2_R2_FIX1_OUTER_WIDTH_AND_RECOMMENDATIONS.css
```

Snippet metrics:

```text
Size: 3,494 bytes
Lines: 96
SHA256: 328bcf2fc4fbe360aecc798ce189959b5d3694ff9c17f1a3142f1487f0de0183
Opening braces: 13
Closing braces: 13
Opening comments: 2
Closing comments: 2
CSS parser errors: 0
```

This is a snippet only, not a complete stylesheet.

## 4. Exact insertion boundary

Inside the existing R2 block, search for:

```css
/* === Step 4E-B2-R2 · Cart V2 Consolidation Layer END === */
```

It must occur exactly once.

Place the cursor before the first `/` of that END marker. Paste the complete FIX1 snippet, followed by one blank line.

The resulting boundary must be:

```css
/* === Step 4E-B2-R2-FIX1 · Outer Width + Recommendation Specificity START ===
...
/* === Step 4E-B2-R2-FIX1 · Outer Width + Recommendation Specificity END === */

/* === Step 4E-B2-R2 · Cart V2 Consolidation Layer END === */
```

Do not paste FIX1 after the Cart Notice block and do not delete or edit the existing R2 rules.

## 5. Expected file result

When the current uploaded baseline and line endings remain exact:

```text
Size: 804,062 bytes
Lines: 26,925
SHA256: e6e053efad50191dfd147ca72b0cf76888eeae194f156f4b634b02e6186edb86
Opening braces: 4,076
Closing braces: 4,076
Opening comments: 401
Closing comments: 401
CSS parser errors: 0
Delta: +3,495 bytes / +96 lines
```

The one extra byte beyond the snippet size is the required separator newline before the existing R2 END marker.

## 6. Expected desktop result

After a hard refresh:

```text
- the main Cart content expands and centers within the available desktop width
- Your Bag and count span the intended wide frame
- product rows have enough horizontal room
- the 7fr / 5fr Cart + Order Summary composition is visible
- the recommendation section becomes an open light section rather than a dark rounded container
- recommendation heading, descriptions, prices and links become readable dark text
- four real products remain in one row on wide screens
```

## 7. Functional boundaries

Confirm that these remain usable:

```text
quantity minus / input / plus
Update Cart
remove product
Coupon apply / error / removal
Shipping / Change address
Proceed to Checkout
Continue Shopping
four recommendation links
```

Header, Footer, Shop, Single Product and SAFE5 Checkout must remain unchanged.

## 8. Independent rollback

Delete only the complete range from:

```css
/* === Step 4E-B2-R2-FIX1 · Outer Width + Recommendation Specificity START ===
```

through:

```css
/* === Step 4E-B2-R2-FIX1 · Outer Width + Recommendation Specificity END === */
```

and the one blank line immediately following it.

Do not remove the main B2-R2 consolidation layer.

## 9. Required evidence

Upload the edited `spatial-flow.css` and provide:

```text
- one desktop Cart screenshot
- one mobile Cart screenshot
- confirmation that native Cart controls work
- confirmation that SAFE5 Checkout is unchanged
```

Do not begin legacy CSS deletion until FIX1 and the complete R2 desktop/mobile validation pass.
