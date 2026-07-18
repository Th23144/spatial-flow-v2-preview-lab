# Step 4E-B2-R5-E4-B-FIX1 · Pre-Deploy CSS Validation

Last updated: 2026-07-18  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
spatial-flow(24).css：Passed / exact expected FIX1 artifact.
Deployment：Authorized for strict runtime measurement.
Cart page status：Not done.
```

## Exact artifact result

```text
Uploaded name: spatial-flow(24).css
Size: 696,069 bytes
Logical lines / LF count: 23,335
SHA256: 412d6b20993a101e73b0fae9b7a26abc4941b5e8f6eb032c1c38689dfc823436
Braces: 3,626 / 3,626
Comments: 340 / 340
CSS parser errors: 0
Line endings: LF
Final newline: present
```

## Exact accepted diff

Compared with the accepted `spatial-flow(23).css` baseline, only this 107-byte / four-line in-place block was added inside the existing `@media (min-width: 1101px)` geometry owner:

```css
  body.woocommerce-cart .entry-content > .woocommerce {
    max-width: var(--sf-cart-max) !important;
  }

```

Occurrences:

```text
max-width: var(--sf-cart-max) !important; → 1
R5-E4 desktop media block → 1
--sf-cart-max: 1440px → 1
```

## Full-file integrity proof

Removing exactly the accepted four-line block restores the prior artifact byte-for-byte:

```text
Recovered size: 695,962 bytes
Recovered logical lines: 23,331
Recovered SHA256: b55c854e959ab42026f93c786e62b0c7e6b56e1cbf5307027b45991d39d90531
Recovered braces: 3,625 / 3,625
Recovered comments: 340 / 340
```

Therefore no unrelated CSS was changed, deleted, moved or reformatted.

## Deployment decision

Use `spatial-flow(24).css` as:

```text
assets/css/spatial-flow.css
```

Then clear cache, hard-refresh the same non-empty desktop Cart at 100% zoom, and rerun the geometry measurement.

Expected at `document_client_width = 1300`:

```text
wrapper border/content width: 1204 / 1204
left/right gutters: 48 / 48
form width: approximately 656
summary width: approximately 468
rendered column gap: 80
title_to_count: 88
count_to_main_row: 120
computed max_width: 1440px
```

Phone rules, empty-Cart behavior, Cart Notice, PHP, JavaScript, Header and WooCommerce templates remain outside this correction.