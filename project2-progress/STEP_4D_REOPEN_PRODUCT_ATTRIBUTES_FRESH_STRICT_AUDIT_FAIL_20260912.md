# Project 2 · Step 4D-REOPEN · Product Attributes fresh strict audit FAIL · 2026-09-12

## Scope

Fresh back-audit of Product Attributes before continuing to Section 01 / Section 02 closure.

## Evidence

Compared:
- current server-returned `assets/css/spatial-flow.css` from 2026-09-11 21:22;
- current Single Product template/data ownership;
- `preview/spatial-flow-product-v1.html`;
- prior B2 acceptance record, treated as historical evidence rather than immunity from a fresh strict audit.

## Fresh finding

The historical B2 mobile treatment is not strict-reference aligned.

### Reference

The static reference keeps Product Attributes as:
- four columns on desktop;
- two columns at `<=1100px`;
- still two columns at `<=720px`, with `24px` gap;
- no conversion to a one-column mobile list in the `<=480px` rule;
- no per-item mobile separator-line treatment.

### Current CSS

Current implementation changes Product Attributes at `<=767px` to:

```css
grid-template-columns: 1fr;
gap: 0;
```

and gives each attribute card vertical padding plus a top separator border.

This produces a one-column stacked mobile list that differs from the reference's persistent two-column information band.

## Classification

```text
Desktop Product Attributes structure: no fresh defect found in this audit stage
390px Product Attributes column geometry: FAIL
390px per-item separator treatment: FAIL
Product Attributes overall fresh strict back-audit: REOPENED / NOT CLOSED
```

The prior B2 `FINAL PASS / CLOSED` is superseded only for this newly proven mobile strict-reference drift.

## Protected ownership

Do not change:
- real backend-editable fields `_sf_material`, `_sf_suitable_space`, `_sf_care`, `_sf_gift_service`;
- empty-item hiding behavior;
- flat/no-card editorial presentation;
- Section 01 / Section 02 data ownership;
- accepted Hero Gallery / Related Products / Section 03 behavior.

## Current stop point

Record a bounded CSS-only Product Attributes mobile correction plus asset-version bump before issuing manual edit instructions.
