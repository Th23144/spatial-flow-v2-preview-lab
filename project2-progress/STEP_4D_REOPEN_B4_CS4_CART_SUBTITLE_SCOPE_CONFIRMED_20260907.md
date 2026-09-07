# Step 4D Reopen B4 — CS4 Cart Subtitle Scope Confirmed — 2026-09-07

## User verification
The user confirmed that the product field currently containing `CS4` is used as the shortened / contextual product title shown in the Cart flow.

## Scope lock
- `CS4` belongs to the existing cart subtitle / product context field.
- Do not reuse or repurpose this field for Single Product Section 02.
- Section 02 must remain independently editable.
- The current Section 02 third meta value comes from `_sf_suitable_space`; therefore the front-end label should reflect that source rather than call it `Context`.

## Next correction
Rename the Section 02 third meta label from `Context` to `Suitable Space` while keeping its data source unchanged.
