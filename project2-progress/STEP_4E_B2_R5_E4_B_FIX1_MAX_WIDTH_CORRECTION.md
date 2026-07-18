# Step 4E-B2-R5-E4-B-FIX1 · Cart Max-Width Correction

Last updated: 2026-07-18  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Max-width source locator：Passed.
Manual CSS artifact：Passed exact pre-deploy validation.
Deployment：Authorized for strict runtime measurement.
Cart page status：Not done.
```

Validation record:

```text
project2-progress/STEP_4E_B2_R5_E4_B_FIX1_PRE_DEPLOY_VALIDATION.md
```

## Previous deployed baseline

```text
spatial-flow(23).css
Size: 695,962 bytes
Logical lines: 23,331
SHA256: b55c854e959ab42026f93c786e62b0c7e6b56e1cbf5307027b45991d39d90531
Braces: 3,625 / 3,625
Comments: 340 / 340
```

## Validated deployment artifact

```text
spatial-flow(24).css
Size: 696,069 bytes
Logical lines: 23,335
SHA256: 412d6b20993a101e73b0fae9b7a26abc4941b5e8f6eb032c1c38689dfc823436
Braces: 3,626 / 3,626
Comments: 340 / 340
CSS parser errors: 0
Line endings: LF
Final newline: present
```

## Exact accepted change

Inside the existing R5-E4-B desktop media block, the following bounded owner was added in place:

```css
body.woocommerce-cart .entry-content > .woocommerce {
  max-width: var(--sf-cart-max) !important;
}
```

The full-file diff was validated. Removing exactly this 107-byte / four-line addition restores `spatial-flow(23).css` byte-for-byte, including its accepted SHA256.

## Why this correction is exact

The browser source scan proved active Cart-specific inline-style ownership:

```css
.woocommerce-cart .woocommerce {
  max-width: 1200px;
}
```

That rule has no `!important`. The bounded Canonical Cart rule restores the approved ceiling:

```css
--sf-cart-max: 1440px;
```

while preserving the existing responsive width formula:

```css
width: min(var(--sf-cart-max), calc(100% - 96px));
```

## Runtime gate

Deploy `spatial-flow(24).css`, clear cache, and remeasure the same non-empty desktop Cart at 100% zoom.

Expected at `document_client_width = 1300`:

```text
wrapper: 1204px
left/right gutters: 48px / 48px
form: approximately 656px
summary: approximately 468px
column gap: 80px
title → count: 88px
count → main row: 120px
computed max-width: 1440px
```

Do not start final visual acceptance until these runtime values are confirmed.