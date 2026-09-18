# Shop V2 — Remove duplicate lower Contact Band SOURCE VALIDATION PASS

Date: 2026-09-18

## File validated

User-supplied current:
- woocommerce/archive-product.php

## Validation result

PASS.

Checks:
- PHP syntax: PASS.
- shared Shop call to template-parts/product-contact-band is absent.
- sf-shop-v2-closing-note remains intact.
- Write to the editors CTA remains intact.
- closing-button URL fallback chain remains intact:
  1. sf_shop_v2_closing_button_url
  2. sf_product_contact_url
  3. /contact/
- closing section ends cleanly before </main>.
- get_footer( 'shop' ) remains intact.
- no duplicate bottom contact markup introduced.

## Expected runtime

Shop bottom should now render:
- Pagination
- one Closing Editorial Note
- Footer

The previous lower newsletter/contact band should be gone.

## Next runtime check

1. visually confirm the lower duplicate contact band is gone;
2. confirm Closing Note spacing into Footer is acceptable;
3. click Write to the editors and verify it reaches the intended Contact destination.

If these pass, close the Shop contact-duplication issue and continue with the non-frozen mobile Shop review.

Status:
SOURCE VALIDATION PASS / AWAITING RUNTIME CHECK.
