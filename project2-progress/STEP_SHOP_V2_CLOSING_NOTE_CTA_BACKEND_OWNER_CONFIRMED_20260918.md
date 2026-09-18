# Shop V2 — Closing Note CTA backend-owner correction

Date: 2026-09-18

## Diagnosis

Runtime read-only checks showed:
- sf_shop_v2_closing_button_url = empty
- sf_product_contact_url = #
- no WordPress page whose title/slug contains contact

Therefore the Closing Note CTA currently falls through to the stale shared '#' value and stays on the Shop page.

## Preferred fix

Do not patch archive-product.php.

The current theme already exposes a backend-editable URL control:
- Customizer section: Spatial Flow Shop V2
- Control label: Closing Note Button URL
- setting id: sf_shop_v2_closing_button_url

This setting has higher priority than the shared sf_product_contact_url fallback.

Use the Customizer control to point the CTA at a real existing destination when available.

Because there is currently no Contact page in the database, do not set a guessed /contact/ URL.

## Status

BACKEND OWNER CONFIRMED / USER MAY SET REAL DESTINATION IN CUSTOMIZER.