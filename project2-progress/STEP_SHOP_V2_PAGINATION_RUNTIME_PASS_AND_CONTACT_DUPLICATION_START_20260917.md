# Shop V2 — Pagination runtime PASS / contact duplication cleanup START

Date: 2026-09-17

## Pagination runtime result

User confirmed the corrected WooCommerce pagination now behaves normally.

Accepted states:
- first page: no Previous control; real Next page → on the right;
- middle pages: real ← Previous and real Next page →;
- last page: real ← Previous; no Next control.

The 12-products-per-page archive query remains accepted.

Pagination strict review is CLOSED.

## Next Shop issue

Proceed to the duplicate contact/conversion area at the bottom of Shop.

Current archive renders:
1. sf-shop-v2-closing-note
2. template-parts/product-contact-band immediately after it

User decision:
- keep the reference-style closing editorial note;
- remove the lower shared product-contact-band from Shop only;
- do not delete or globally disable the shared component because it is reused elsewhere.

## Closing Note function

Current archive already gives the upper CTA a real URL owner:
- sf_shop_v2_closing_button_url when configured;
- fallback to sf_product_contact_url;
- final fallback /contact/.

Therefore this step does not add an inline contact form.
The intended Shop interaction remains:
Closing Note -> Write to the editors -> Contact destination.

Status:
PAGINATION CLOSED / SHOP CONTACT DUPLICATION CLEANUP STARTED.
