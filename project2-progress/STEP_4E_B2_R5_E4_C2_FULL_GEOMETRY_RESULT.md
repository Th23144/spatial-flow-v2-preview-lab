# Step 4E-B2-R5-E4-C2 · Corrected Full Geometry Result

Last updated: 2026-07-17  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E4-B deployed CSS：Active.
R5-E4-C2 principal geometry measurement：Passed.
R5-E4-C2 wrapper computed-value confirmation：Passed.
R5-E4-C2 max-width source locator：Passed.
Current executable phase：R5-E4-B-FIX1 bounded max-width correction.
Cart page status：Not done.
```

Records:

```text
project2-progress/STEP_4E_B2_R5_E4_C2_WIDTH_OWNER_CONFIRMATION.md
project2-progress/STEP_4E_B2_R5_E4_C2_MAX_WIDTH_SOURCE_RESULT.md
project2-progress/STEP_4E_B2_R5_E4_B_FIX1_MAX_WIDTH_CORRECTION.md
```

## Accepted measurement

```text
window_inner_width: 1315
document_client_width: 1300
scrollbar_width: 15

wrapper border/content width: 1200 / 1200
wrapper css_width: 1200px
wrapper max_width: 1200px
wrapper gutters: 50 / 50
wrapper padding: 0 / 0
wrapper border: 0 / 0
parent entry-content width: 1300

form / gap / summary: 653 / 80 / 467
title → count: 88
count → main row: 120
```

## Passed geometry

```text
7fr / 5fr relationship: correct within rounding
rendered column gap: 80px exact
title → count: 88px exact
count → main row: 120px exact
parent inherited padding: removed
wrapper inherited padding: removed
```

## Exact remaining source owner

The browser stylesheet scan shows active Cart-specific inline-style rules with:

```text
max-width: 1200px
priority: no !important
source: inline <style>
condition: all
```

The direct matching selector shown by the scan includes:

```css
.woocommerce-cart .woocommerce {
  max-width: 1200px;
}
```

A second Cart-specific selector group also supplies `max-width: 1200px` and matches the wrapper. The Astra variable-width rule is present but is not the final cap.

Therefore:

```text
strict target: 1204px wrapper, 48px / 48px gutters
current: 1200px wrapper, 50px / 50px gutters
blocking owner: non-important Cart-specific inline max-width: 1200px
```

## Authorized correction

Inside the existing Canonical Cart desktop media block only:

```css
body.woocommerce-cart .entry-content > .woocommerce {
  max-width: var(--sf-cart-max) !important;
}
```

This restores the approved `--sf-cart-max: 1440px` ceiling while retaining the existing `calc(100% - 96px)` width formula.

Follow the exact in-place replacement in:

```text
project2-progress/STEP_4E_B2_R5_E4_B_FIX1_MAX_WIDTH_CORRECTION.md
```

Upload the edited CSS for exact validation before deployment.