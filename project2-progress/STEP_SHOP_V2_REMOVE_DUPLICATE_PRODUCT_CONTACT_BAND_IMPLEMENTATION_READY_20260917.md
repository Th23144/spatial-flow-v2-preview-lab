# Shop V2 — Remove duplicate lower Contact Band IMPLEMENTATION READY

Date: 2026-09-17

## Preconditions

- 12 products per page: runtime PASS.
- Pagination page 1 / middle / last behavior: runtime PASS and CLOSED.
- Custom Studio signature feature remains frozen.

## Current Shop bottom structure

archive-product.php currently renders:

1. sf-shop-v2-closing-note
2. template-parts/product-contact-band
3. Shop footer

The user explicitly decided these two contact/conversion surfaces should not coexist on Shop.

## Decision

Keep:
- sf-shop-v2-closing-note
- Write to the editors CTA

Remove from Shop only:
- get_template_part( 'template-parts/product-contact-band' );

Do NOT delete the shared template-part file and do NOT globally disable it.

## Functional owner

The remaining Closing Note CTA already has a real destination chain:

1. sf_shop_v2_closing_button_url, when configured;
2. sf_product_contact_url, when configured through the existing shared link owner;
3. /contact/ fallback.

Therefore this cleanup requires no new contact form or JS.

## Bounded implementation

Target:
woocommerce/archive-product.php

Delete only:
get_template_part( 'template-parts/product-contact-band' );

Leave the Closing Note block and footer call untouched.

## Expected runtime

After removal:
- Pagination
- one Closing Editorial Note
- Footer

No second newsletter/contact band between Closing Note and Footer.

Next runtime check:
- visual spacing from Closing Note to Footer;
- Write to the editors CTA is clickable and reaches the intended contact destination.

Status:
IMPLEMENTATION READY / ONE-LINE SHOP-ONLY REMOVAL.
