# Project 2 · Step 4D-REOPEN · Hero Gallery correction returned-source re-audit start · 2026-09-11

## Scope

User returned only the two files requested after the previous source-gate failure:

```text
assets/css/spatial-flow.css
assets/js/spatial-flow.js
```

The already-passed `functions.php` v2.7.45 and `woocommerce/single-product.php` are intentionally not reopened in this re-audit.

## Authorized correction under re-audit

CSS:
- remove the stale mobile four-column grid declaration and keep 10px gap ownership;
- remove stale desktop four-column grid declaration and stale 12px top padding, leaving the new thumb-shell to own vertical spacing.

JS:
- replace legacy `resetVariationGallery()` behavior so variation reset activates/clicks thumbnail 01 and therefore returns both the main image and sliding four-thumbnail viewport to the first position;
- remove obsolete counter-reset behavior because the `1 / N` counter is no longer part of the accepted Gallery target.

## Gate

This re-audit must verify:
- exact bounded diff against the immediately previous returned CSS/JS files;
- CSS structural validity;
- JavaScript syntax validity;
- no unrelated changes;
- no remaining stale rules that materially override the new four-thumbnail viewport behavior.

## Current stop point

```text
RETURNED CSS / JS RE-AUDIT IN PROGRESS
```

No runtime/browser acceptance is authorized until this source gate is recorded PASS.
