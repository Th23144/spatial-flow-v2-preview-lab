# Project 2 · Step 4D-REOPEN · Hero Gallery correction returned-source re-audit PASS · 2026-09-11

## Returned files

```text
assets/css/spatial-flow.css
bytes: 604,779
logical lines: 21,417
SHA256: bffb315567e4e9ff3a927a721ef888790e9fb021da0a8544d0c2a5cd7090aba3
CSS brace balance: 3361 / 3361
CSS comment balance: 280 / 280
tinycss2 parse errors: 0

assets/js/spatial-flow.js
bytes: 84,769
logical lines: 2,483
SHA256: 173785ea4d92b7bb5310e56d69cb839d62b4cde24b7583abea5ca6ce8f570454
node --check: PASS
```

## Exact diff against immediately previous returned source

### CSS
Only the two authorized legacy-conflict corrections are present:

```diff
.single-product .sf-product-gallery__thumbs {
-  grid-template-columns: repeat(4, minmax(0, 1fr));
-  gap: 8px;
+  gap: 10px;
}
```

and:

```diff
.single-product .sf-product-gallery__thumbs {
-  grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
   gap: 10px !important;
-  padding-top: 12px !important;
+  padding-top: 0 !important;
}
```

No unrelated CSS changes were detected.

The canonical new Gallery rules remain:
- flex thumbnail rail;
- four-thumbnail width formula `calc((100% - 30px) / 4)`;
- 10px internal gaps;
- outer `.sf-product-gallery__thumb-shell` owns the 12px top spacing;
- optional navigation shell for >4 images;
- mobile nav-shell geometry remains bounded separately.

Older unscoped legacy Gallery rules remain elsewhere in the file but are superseded by the later, more-specific `.single-product ...` canonical rules and do not materially override the new implementation. Old counter/arrow CSS also has no live markup owner after the template correction; it is historical dead styling rather than a runtime blocker for this gate.

### JS
Only `resetVariationGallery()` changed.

Authorized behavior now:
- hide any active variation image;
- clear variation-gallery state;
- find thumbnail 01;
- programmatically click thumbnail 01 when present;
- thereby reuse canonical Gallery `show()` logic to restore main image 01, active thumbnail 01, and the sliding thumbnail viewport start position;
- fallback to activating main image 01 only when no thumbnail exists;
- obsolete `1 / N` counter-reset logic is removed.

No unrelated JavaScript changes were detected.

## Source-gate result

```text
CSS bounded diff: PASS
CSS structure/parser: PASS
JS bounded diff: PASS
JS syntax: PASS
Variation-reset / thumbnail-window state ownership: PASS
Unrelated source drift: NONE DETECTED

OVERALL SOURCE GATE: PASS
```

The already-passed `functions.php` v2.7.45 and `woocommerce/single-product.php` remain accepted and were not reopened.

## Runtime gate now authorized

Next runtime checks:

```text
A. Current product with <=4 gallery images
   - no thumbnail navigation arrows
   - up to four thumbnails displayed
   - thumbnail click switches main image
   - 01/02/03/04 numbering and selected outline display correctly
   - no old main-image arrows or 1/N counter

B. Temporary product state with >=5 gallery images
   - thumbnail navigation appears
   - viewport still exposes four thumbnails only
   - next moves the thumbnail window by one image
   - previous reverses by one image
   - clicking an off-start thumbnail keeps the active item visible
   - variation image selection/reset returns Gallery to thumbnail/image 01 and viewport start 0
   - desktop and 390px mobile have no horizontal overflow
```

## Current stop point

```text
HERO GALLERY SOURCE GATE PASS
→ RUNTIME TEST AUTHORIZED
```
