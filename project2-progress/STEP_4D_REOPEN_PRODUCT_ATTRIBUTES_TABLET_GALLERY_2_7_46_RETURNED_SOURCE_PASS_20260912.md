# Step 4D-REOPEN · Product Attributes + Tablet Gallery · 2.7.46 returned-source PASS · 2026-09-12

## Scope

Merged bounded correction from the accepted 2.7.45 source baseline:

1. restore Product Attributes mobile presentation from historical 1×4 list to strict-reference 2×2 editorial grid;
2. remove the 768–1024px Gallery image height cap that caused the active image to occupy only the upper part of the 4:5 Gallery frame;
3. bump the child version once from 2.7.45 to 2.7.46.

No template or JavaScript change belongs to this batch.

## Returned files

### functions.php

```text
bytes: 622,810
logical lines: 11,896
SHA256: 42c46cb5dd6090cef4bed911dfc628eb8aeebe976e8d9dbeb153a1bc5b9f4ec7
child version: 2.7.46
PHP syntax: PASS
```

Exact reverse-diff verification:
- replacing only `2.7.46` back to `2.7.45` reproduces the recorded accepted 2.7.45 SHA256 exactly:
  `e7f404a2d9c06576d3b9a6e4889e2351bc488e831df57f33471d0c7b9cc4e8f8`.
- therefore `functions.php` differs from the accepted 2.7.45 baseline only by the authorized version bump.

### assets/css/spatial-flow.css

```text
bytes: 604,681
logical lines: 21,411
SHA256: 03826efb91e476d8093077e6d6477e71e4a82175bca2bd261dcf9ea45b58c9b0
brace balance: 3359 / 3359
comment balance: 280 / 280
tinycss2 parse errors: 0
```

Exact reverse-diff verification:
- restoring only the two authorized old blocks reproduces the recorded accepted 2.7.45 CSS SHA256 exactly:
  `bffb315567e4e9ff3a927a721ef888790e9fb021da0a8544d0c2a5cd7090aba3`.
- baseline bytes restore from 604,681 to 604,779 exactly.
- therefore the returned CSS differs from the accepted baseline only by the two authorized bounded replacements.

## Verified Product Attributes correction

At `<=767px`:

```css
grid-template-columns: repeat(2, minmax(0, 1fr));
gap: 24px;
```

Historical list separators / per-card padding were removed from this mobile block.

Expected runtime target:
- 390px shows a clean 2×2 editorial information grid;
- no old 1×4 list treatment;
- no horizontal overflow.

## Verified Tablet Gallery correction

At `<=1024px` the active Gallery image now uses:

```css
width: 100% !important;
height: 100% !important;
min-height: 0;
max-height: none;
object-fit: cover;
object-position: center center;
```

The historical rules are absent from the returned file:

```text
height: min(76vw, 640px) = 0 occurrences
min-height: 460px = 0 occurrences
```

The 4:5 Gallery frame remains owned by the existing `.sf-product-gallery__main` rule; this correction restores the image to fill that frame instead of being capped at 640px.

## Source result

```text
SOURCE GATE: PASS
RUNTIME TESTING: AUTHORIZED
```

## Required runtime verification

1. 1024px / iPad-Pro-class viewport: active Gallery image fills the full 4:5 main-image frame with no large empty area below it.
2. Confirm thumbnail rail and current accepted Gallery controls remain normal after the tablet correction.
3. 390px viewport: Product Attributes render 2×2, remain readable, and do not overflow horizontally.
4. Confirm no regression to the already accepted 390px Hero Gallery behavior.

Do not close Product Attributes or the tablet Gallery correction until runtime evidence passes.
