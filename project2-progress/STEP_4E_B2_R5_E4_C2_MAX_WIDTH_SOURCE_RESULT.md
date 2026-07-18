# Step 4E-B2-R5-E4-C2 · Max-Width Source Locator Result

Last updated: 2026-07-17  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E4-C2 principal geometry measurement：Passed.
R5-E4-C2 wrapper computed-value confirmation：Passed.
R5-E4-C2 max-width source locator：Passed.
Current executable phase：R5-E4-B-FIX1 bounded max-width correction.
Cart page status：Not done.
```

## User-supplied source scan

The browser stylesheet scan returned three matching max-width rules for the Cart wrapper.

Relevant blocking rules:

```text
selector family: WooCommerce Cart-specific inline-style rules
max-width: 1200px
priority: no !important
source: inline <style>
condition: all
```

The scan explicitly shows a direct matching selector:

```css
.woocommerce-cart .woocommerce {
  max-width: 1200px;
}
```

A second Cart-specific selector group also supplies `max-width: 1200px` and matches the same wrapper. Both rules are non-important and active under `all` conditions.

The Astra content-width variable rule is also present, but it is not the final winning cap because the computed wrapper result is exactly:

```text
css_width: 1200px
max_width: 1200px
```

## Exact conclusion

The remaining strict-width mismatch is caused by Cart-specific inline stylesheet ownership, not by:

```text
- parent width
- inherited padding
- wrapper padding
- borders
- scrollbar accounting
- 7fr / 5fr tracks
- 80px column gap
```

Current and target:

```text
current wrapper: 1200px
current gutters: 50px / 50px
strict target at 1300px client width: 1204px
strict gutters: 48px / 48px
```

## Correction boundary

The exact owner may be superseded only inside the existing Canonical Cart desktop responsibility.

Authorized correction:

```css
body.woocommerce-cart .entry-content > .woocommerce {
  max-width: var(--sf-cart-max) !important;
}
```

This restores the already-approved `--sf-cart-max: 1440px` ceiling while preserving the existing width formula:

```css
width: min(var(--sf-cart-max), calc(100% - 96px));
```

At the measured 1300px document client width, the rendered result should become:

```text
wrapper: 1204px
gutters: 48px / 48px
form: approximately 656px
summary: approximately 468px
column gap: 80px
title → count: 88px
count → main row: 120px
```

No PHP, JavaScript, Header, template, phone rule, empty-Cart rule or Cart Notice change is authorized in this correction.