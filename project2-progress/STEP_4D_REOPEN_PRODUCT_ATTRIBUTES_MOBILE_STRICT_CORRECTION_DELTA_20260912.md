# Project 2 · Step 4D-REOPEN · Product Attributes mobile strict correction delta · 2026-09-12

## Trigger

Fresh strict audit proved that current `<=767px` Product Attributes styling uses a one-column list with separators, while the static reference keeps the information band in two columns through mobile.

## Bounded files

```text
assets/css/spatial-flow.css
functions.php (asset-version bump only)
```

No template or JavaScript edit is authorized.

## Exact intended CSS delta

Inside the existing `@media (max-width: 767px)` Product Attributes block:

- retain the current section margin/padding unless live follow-up proves spacing drift;
- change `.sf-product-v2-attributes__grid` from one column / zero gap to two equal columns / 24px gap;
- remove the mobile per-card top separator borders;
- remove mobile per-card 18px vertical list padding;
- keep label/body typography and all real data ownership unchanged.

Target mobile geometry:

```css
.single-product .sf-product-v2-attributes__grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.single-product .sf-product-v2-attribute-card {
  padding: 0;
  border-top: 0;
}
```

The obsolete `:first-child` / `:last-child` padding-reset rules become unnecessary and should be removed from this same bounded media block rather than overridden later.

## Asset version

Current accepted child version is `2.7.45`.

Bump only:

```text
2.7.45 -> 2.7.46
```

## Explicit non-goals

- no Product Attributes field changes;
- no Section 01 changes in this correction;
- no Section 02 changes in this correction;
- no desktop Product Attributes redesign;
- no append-only CSS patch at file end.

## Verification gate

After manual edit, return complete:

```text
functions.php
assets/css/spatial-flow.css
```

Perform exact diff + PHP syntax + CSS structural audit before live testing.

Live test after SOURCE PASS:
- desktop 4-column Product Attributes remains unchanged;
- 390px Product Attributes renders 2 x 2 rather than one-column list;
- no per-item mobile separator lines;
- no horizontal overflow or text collision;
- transition into Section 01 remains visually coherent.
