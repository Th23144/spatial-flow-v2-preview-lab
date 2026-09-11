# Project 2 · Step 4D-REOPEN · Hero Gallery source correction plan · 2026-09-11

## Governing failure

Supersedes the returned-source candidate only for the two defects recorded in:

`STEP_4D_REOPEN_HERO_GALLERY_RETURNED_SOURCE_AUDIT_FAIL_20260911.md`

The already-correct `functions.php` and `woocommerce/single-product.php` must remain unchanged.

## Authorized files

```text
assets/css/spatial-flow.css
assets/js/spatial-flow.js
```

## Correction A · remove stale thumbnail-grid cascade interference

### Mobile historical rule

A later `@media (max-width: 767px)` block still declares the old grid geometry:

```css
.single-product .sf-product-gallery__thumbs {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
}
```

Replace it with:

```css
.single-product .sf-product-gallery__thumbs {
  gap: 10px;
}
```

Reason:
- the new Gallery is flex, not grid;
- fixed thumb basis is calculated from three 10px gaps;
- preserve exact four-thumb width math on mobile.

### Desktop historical rule

A later `@media (min-width: 1025px)` block still declares:

```css
.single-product .sf-product-gallery__thumbs {
  grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
  gap: 10px !important;
  padding-top: 12px !important;
}
```

Replace it with:

```css
.single-product .sf-product-gallery__thumbs {
  gap: 10px !important;
  padding-top: 0 !important;
}
```

Reason:
- obsolete grid declaration must stop implying ownership;
- new `.sf-product-gallery__thumb-shell` already owns the 12px vertical separation;
- `padding-top: 12px !important` would otherwise double that spacing.

Do not append a new override at the bottom. Correct these stale historical declarations in place.

## Correction B · synchronize variation reset with the new thumbnail-rail closure state

Current `resetVariationGallery(form)` manually marks image/thumb 0 active but cannot update `thumbStart` inside `setupProductGallery()`.

Replace the complete `resetVariationGallery(form)` function with a version that:
1. removes the temporary variation image state;
2. finds thumbnail 0;
3. calls `firstThumb.click()` when present so the existing gallery click handler owns both active state and rail-position synchronization;
4. falls back to manually showing image 0 only when no thumbnail button exists.

Authorized replacement:

```js
  function resetVariationGallery(form) {
    var gallery = getGalleryFromForm(form);
    if (!gallery) return;

    var variationImage = q("[data-sf-variation-image]", gallery);
    if (variationImage) variationImage.classList.remove("is-active");
    gallery.removeAttribute("data-sf-showing-variation");

    var firstThumb = q('[data-sf-gallery-thumb="0"]', gallery);

    if (firstThumb) {
      firstThumb.click();
      return;
    }

    var firstImage = q('[data-sf-gallery-image="0"]', gallery);

    qa("[data-sf-gallery-image]", gallery).forEach(function (img) {
      img.classList.remove("is-active");
    });

    if (firstImage) firstImage.classList.add("is-active");
  }
```

This also removes obsolete counter-reset code because the production Gallery no longer has a visible counter.

## Intentionally NOT changed

- no version bump beyond already-correct `2.7.45`;
- no template changes;
- no new fields;
- no variation selection logic change;
- no cart / checkout / wishlist / share change;
- no runtime test yet.

## Acceptance gate after user edit

Return only:

```text
assets/css/spatial-flow.css
assets/js/spatial-flow.js
```

Then verify:
- CSS parser integrity and exact two bounded stale-rule corrections;
- JS syntax and exact reset integration correction;
- no unrelated deltas.

Only after SOURCE PASS may browser/runtime testing begin.
