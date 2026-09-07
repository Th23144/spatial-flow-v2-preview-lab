# Step 4D Reopen — B4 Context Source and Cart Subtitle Scope Clarification — 2026-09-07

## User finding
During first B4 Section 02 runtime inspection, the third metadata item rendered as `CONTEXT 123`, while the product backend also contained `Cart subtitle / product context = CS4`. User asked where `123` came from and why `CS4` did not appear in Section 02.

## Root cause
Current `single-product.php` deliberately builds the Section 02 metadata rows as:
- Reading -> `_sf_section02_reading`
- Pairing -> `_sf_section02_pairing`
- Context -> `_sf_suitable_space`

Therefore the visible `123` comes from the existing Product Attributes `Suitable Space` field, not from the Section 02 context-line field and not from the cart subtitle field.

## Cart subtitle ownership
`Cart subtitle / product context` is `_sf_cart_item_meta`, owned by the Cart/Checkout item-title presentation path in `functions.php`. It is intentionally separate from Single Product Section 02 and remains available for Cart/Checkout use. It has not been deleted or lost.

## Correction direction
Do not reuse `_sf_cart_item_meta` inside Section 02 because that would couple cart merchandising copy to the product editorial-reading block.

The current label `Context` is misleading when its value source is `_sf_suitable_space`. Preferred correction: keep the source as `_sf_suitable_space` but rename the visible metadata label to `Suitable Space` (or an equivalent approved label). If Section 02 later needs a separate third editorial metadata value, add a dedicated Section 02 field rather than borrowing `_sf_cart_item_meta`.

## Status
B4 remains OPEN. No code change has been applied by this record.
