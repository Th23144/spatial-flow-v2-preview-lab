# Project 2 · Step 4D-REOPEN · Hero Gallery tablet 1024 blank-area root cause · 2026-09-12

## Trigger
User supplied a fresh iPad Pro 1024 × 1366 DevTools screenshot and clarified that the issue is not outer page width: the Hero Gallery main image itself renders only in the upper portion of the 4:5 gallery frame, leaving a large blank paper-colored area below before the thumbnails.

## Fresh evidence
The current returned `assets/css/spatial-flow.css` contains the normal Gallery baseline:

```css
.single-product .sf-product-gallery__main {
  position: relative;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background: #ede7df;
}

.single-product .sf-product-gallery__main img {
  width: 100%;
  height: 100%;
  min-height: 0;
  max-height: none;
  object-fit: cover;
  object-position: center center;
}
```

But a later tablet breakpoint overrides the image height only:

```css
@media (max-width: 1024px) {
  .single-product .sf-product-detail-grid {
    grid-template-columns: 1fr;
  }

  .single-product .sf-product-gallery {
    position: static;
  }

  .single-product .sf-product-gallery__main img {
    height: min(76vw, 640px);
    min-height: 460px;
  }

  .single-product .sf-product-summary {
    padding-top: 0;
  }
}
```

At the exact 1024px tablet breakpoint, `min(76vw, 640px)` resolves to 640px while the parent `.sf-product-gallery__main` still owns a 4:5 aspect-ratio and can be substantially taller than 640px. Therefore the image stops at 640px while the parent continues downward, exposing the parent background as a large blank area.

At <=767px a later mobile rule restores `width:100% !important; height:100% !important; min-height:0;`, so the defect is primarily the 768–1024 tablet range.

## Classification
This is a real Hero Gallery responsive regression, not a DevTools `Fit to window` visual-scale artifact.

The prior assistant interpretation that the screenshot only showed DevTools scaling is superseded by this record.

## Required correction direction
The 768–1024 tablet breakpoint must preserve the accepted 4:5 Gallery contract and make the active image fill the entire `.sf-product-gallery__main` frame.

Do not change the accepted outer Single Product width solely because of this screenshot.
Do not change Gallery navigation behavior.
Do not fabricate image dimensions.

The expected bounded correction is to remove/neutralize the legacy tablet-only `height: min(76vw, 640px); min-height: 460px;` image sizing and restore the same `width:100%; height:100%; min-height:0; max-height:none; object-fit:cover;` contract used by the accepted Gallery baseline.

## Coordination with currently pending Product Attributes correction
The user has not yet applied the Product Attributes mobile 1×4 → 2×2 correction. Therefore the next manual edit batch should combine:
1. Product Attributes mobile strict-reference correction;
2. Hero Gallery 768–1024 image-fill correction;
3. one child-version bump only.

This avoids unnecessary multiple manual edit rounds.

## Current status

```text
Hero Gallery desktop: accepted baseline remains protected
Hero Gallery <=767 mobile: accepted baseline remains protected
Hero Gallery 768–1024 tablet image fill: FAIL / REOPENED
Product Attributes 390px 1×4 presentation: FAIL / correction pending
No code has been edited for either pending correction yet
```

## Exact next action
Freeze one combined CSS delta + one child-version bump, then issue a single bounded manual-edit batch. After returned-source PASS, runtime-test at desktop, 1024px tablet, and 390px mobile before reclosing Hero Gallery / Product Attributes.
