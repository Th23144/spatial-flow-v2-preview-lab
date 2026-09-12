# Project 2 · Step 4D-REOPEN · Remaining Hero / Summary strict back-audit start · 2026-09-12

## Trigger

Hero Gallery has now passed source and runtime acceptance and is closed as a sub-surface.

The Single Product page remains `Not done`, and the historical-PASS back-audit must continue before moving farther down the page or resuming Gift CTA / Closing Editor's Note.

## Scope of this audit

Re-check the remaining Summary-side surfaces against `preview/spatial-flow-product-v1.html` and the fresh live evidence already supplied in the current workstream:

```text
- top editorial metadata / public Reference ownership
- product title
- subtitle
- price
- shipping note
- Placement Suggestion
- short description / excerpt
- visual variation controls
- quantity control
- Add to Cart state and geometry
- Wishlist / Share
- Trust Strip
```

## Protected production rules

```text
- WooCommerce native state remains authoritative.
- A disabled Add to Cart before required variation selection is not a strict-1:1 defect.
- Native WooCommerce SKU remains inventory/operations data and must not be used as the public Hero editorial identifier.
- `_sf_piece_reference` owns the public Hero Reference / Piece Code.
- Empty optional editorial fields remain hidden; no fake values.
- Hero Gallery is closed and must not be reopened without new concrete evidence.
```

## Current stop point

```text
HERO / SUMMARY REMAINING STRICT BACK-AUDIT: ACTIVE
```

No edit is authorized until any concrete mismatch is identified and recorded.
