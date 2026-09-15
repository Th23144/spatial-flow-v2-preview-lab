# Project2 — Post-Footer Menu Add-Item + Airwallex Payment Duplicate Identification

Date: 2026-09-15

## User question 1 — what happens when selecting a Page and clicking Add to Menu?
In Appearance → Menus, the left-side Pages panel is only a source pool. Selecting one Page and clicking Add to Menu appends one navigation item for that Page into the currently selected menu's Menu Structure on the right. It does not create or duplicate the Page itself. Front-end navigation changes only after the menu is saved.

## User evidence — six Payment pages
The user confirmed all six Payment Pages show the same Quick Edit metadata, including:
- title: Payment
- slug: `airwallex_payment_method_all`
- parent: none
- template: default
- status: published
- same date/author details

## Identification
The slug strongly identifies these as Airwallex WooCommerce payment-form Pages, not the current WooCommerce Checkout Page or Project2 Step 03 owner. Airwallex official WooCommerce documentation confirms that when its Payment Form Template is configured to use WordPress Page Shortcodes, Airwallex checkout/payment Pages are created as official WordPress Pages under Pages for theme compatibility/customization.

Project2's existing Checkout ownership evidence separately confirms current Checkout entry is WooCommerce Page ID 623 at `/checkout-2-2/` using `[woocommerce_checkout]`, and Step 03 Payment belongs to that Checkout lifecycle; CartFlows does not own the live Checkout flow.

## Current classification
- The six `Payment` Pages are not the current canonical Checkout / Step 03 owner.
- Six published Pages with identical title and identical Airwallex-specific slug/metadata are strong evidence of duplicated/generated Airwallex artifacts.
- Do not delete yet until active Airwallex plugin/settings dependency is checked.

## Next evidence required before deletion
1. Plugins → Installed Plugins: confirm whether Airwallex Online Payments / Airwallex gateway is installed and active.
2. WooCommerce → Settings → Payments → Airwallex (if present): inspect Payment form template setting and whether any Airwallex payment methods are enabled.
3. If Airwallex is not in use, the six Payment Pages become high-confidence safe-delete candidates after dependency check/backup.
