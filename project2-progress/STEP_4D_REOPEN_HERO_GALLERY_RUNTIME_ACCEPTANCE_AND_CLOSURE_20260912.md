# Project 2 · Step 4D-REOPEN · Hero Gallery runtime acceptance and closure · 2026-09-12

## User confirmation

The user completed the bounded runtime test batch requested after the corrected source gate passed and reported the tested behavior as normal.

## Accepted runtime behavior

The accepted Hero Gallery behavior is now:

```text
4-image product
- no large-image previous/next round buttons
- no `1 / N` counter
- `CLICK THUMB TO VIEW` hint present
- exactly four thumbnails visible
- thumbnail numbering 01 / 02 / 03 / 04
- active thumbnail outline present
- clicking thumbnails switches the main image
- no thumbnail-window navigation controls are required when image count <= 4

5+-image product
- thumbnail viewport remains limited to four visible thumbnails
- subtle previous/next controls appear at the thumbnail viewport
- navigation advances the viewport one thumbnail at a time
- expected sequence is 01 02 03 04 -> 02 03 04 05, not page-group jumps
- clicking thumbnail 05 switches the main image to image 05

Variable product reset
- after the thumbnail viewport has advanced and a variation image has been selected, WooCommerce variation reset returns the gallery to image 01
- thumbnail 01 becomes active again
- thumbnail viewport returns to 01 02 03 04

Responsive behavior
- desktop behavior accepted
- 390px mobile behavior accepted
- no reported horizontal overflow in the tested states
```

## Product decision retained

The user explicitly approved the intentional enhancement over the static reference:

```text
large-image navigation buttons removed
+
fixed four-thumbnail viewport
+
subtle thumbnail-window prev/next controls only when product has more than four images
```

This is an approved production functionality enhancement, not a strict-1:1 defect.

## Source baseline behind this acceptance

Current accepted source work includes:

```text
functions.php child version: 2.7.45
Hero public editorial identifier: _sf_piece_reference
WooCommerce SKU: not used as Hero public editorial reference
large-image 1 / N counter: removed from template
large-image prev/next round controls: removed from template
thumbnail numbers: added
thumbnail viewport: four visible items
>4 image navigation: sliding one item at a time
variation reset: synchronizes main image, active thumbnail, and thumbnail viewport back to image 01
```

Latest corrected returned files previously passed the source gate:

```text
spatial-flow.css
SHA256: bffb315567e4e9ff3a927a721ef888790e9fb021da0a8544d0c2a5cd7090aba3
brace balance: 3361 / 3361
comment balance: 280 / 280
CSS parser errors: 0

spatial-flow.js
SHA256: 173785ea4d92b7bb5310e56d69cb839d62b4cde24b7583abea5ca6ce8f570454
node --check: PASS
```

## Closure

```text
Hero Gallery source gate: PASS
Hero Gallery desktop runtime: PASS
Hero Gallery 390px mobile runtime: PASS
Hero Gallery >4 image viewport navigation: PASS
Hero Gallery image 05 selection: PASS
Hero Gallery variation reset synchronization: PASS
Hero Gallery: USER / RUNTIME ACCEPTED / CLOSED
```

This closes the Gallery sub-surface only. It does NOT mark the whole Hero / Summary or Single Product page Completed 1:1.

## Next action

Continue the fresh Hero / Summary back-audit with the remaining Summary-side historically-passed surfaces before moving farther down the Single Product page.

Gift CTA / Closing Editor's Note remains paused.
