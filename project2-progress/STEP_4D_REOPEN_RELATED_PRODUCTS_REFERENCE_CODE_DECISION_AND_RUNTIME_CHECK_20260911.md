# Project 2 · Step 4D-REOPEN · Related Products Reference Code decision + runtime check · 2026-09-11

## User decision
The user approved separating the public editorial product identifier from WooCommerce SKU.

New ownership decision:
- WooCommerce SKU remains inventory / order / variation operations data.
- A separate backend-editable Spatial Flow Reference / Piece Code will own the public editorial code shown in Related Products.
- Related Products must stop using WooCommerce SKU for the reference-style public line once the new field is implemented.
- No fake values may be generated.

## Runtime screenshot check
The user supplied a fresh desktop screenshot after testing one related product with temporary data.

Confirmed from the screenshot:
- desktop four-column geometry remains aligned with the strict-reference correction;
- heading remains `Pieces of a similar weight.`;
- `View the full edit →` remains present;
- first card successfully renders the temporary code line `SF-OB-001`;
- first card successfully renders price and the temporary Placement note beneath the divider;
- missing Edition correctly does not fabricate an edition value;
- the data-output chain for code/meta + placement is proven functional.

Not yet confirmed:
- hover `View piece →` state was not captured in this screenshot;
- the final public identifier ownership is not yet implemented because the current template still reads WooCommerce SKU.

## Authorized next source delta
Implement a new per-product text meta field for public editorial identity, recommended key:
`_sf_piece_reference`

Required behavior:
1. add an editable Product Data → General field labeled `Reference / Piece Code`;
2. save it through the existing product-meta save flow;
3. Related Products reads `_sf_piece_reference` instead of `$related_product->get_sku()`;
4. WooCommerce SKU remains untouched and is no longer the Related Products editorial identifier;
5. existing Edition and Placement ownership remain unchanged;
6. empty Reference / Piece Code renders nothing; no fallback to SKU and no fake code;
7. no changes to WooCommerce product identity, price, permalink, related-product query, variations, cart, wishlist, checkout, Section 01/02/03, or Related Products geometry.

## Test data note
The currently entered code / Placement content is temporary validation data because final products are not yet defined. It may be removed after the ownership path is proven.

## Status
- Related Products geometry: PASS
- temporary code/placement output path: PASS
- public Reference / Piece Code ownership: IMPLEMENTATION AUTHORIZED / PENDING
- hover state: PENDING
- Related Products overall strict 1:1: NOT CLOSED
