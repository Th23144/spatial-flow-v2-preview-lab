# Step 4D Reopen B4 — Reads Link + Section 02 Authoring Correction (2026-09-07)

## Trigger
During B4 runtime review, the user confirmed `_sf_cart_item_meta` / Cart subtitle is a cart-only short title and should not be reused by Single Product Section 02. The user also pointed out that the third metadata item in the reference Section 02 is a real `Reads` link (`Studio visit →`), not a plain context value.

## Correction
Do not merely rename the current third `Context` item to `Suitable Space`; that would still duplicate Product Attributes data and remain structurally off-reference.

B4 Section 02 metadata should instead be:
1. Reading — product-editable short interpretation.
2. Pairing — product-editable short pairing/styling note.
3. Reads — optional product-editable link text + URL, matching the reference's linked editorial-read role.

`Suitable Space` remains owned by Product Attributes and should not be duplicated into Section 02.

## Authoring owner
Section 02 main article content is edited in the existing WooCommerce product General fields:
- Heading lead
- Heading emphasis
- Heading second line
- Lead
- Context line
- Narrative (main multi-paragraph article body; plain text, blank line = paragraph)
- Reading
- Pairing
- Reads link text
- Reads link URL

No HTML should be required for normal Section 02 authoring.

## Implementation boundary
- Add two new product meta fields: Reads link text and Reads link URL.
- Sanitize URL with `esc_url_raw` on save.
- Remove Suitable Space from Section 02 meta rows.
- Render optional `Reads` anchor in the third meta column when URL exists.
- Keep cart subtitle `_sf_cart_item_meta` untouched.
- Increment child theme version from 2.7.31 to 2.7.32.

## Status
Patch definition ready. Awaiting manual file replacement and source audit before runtime acceptance.
