# Site Hygiene — Airwallex Current Live Evidence + Theme Source Scan

Date: 2026-09-15
Status: READ-ONLY AUDIT IN PROGRESS

## User evidence received
- Network-wide plugin list screenshot: zero network-active plugins. User confirms this is expected.
- Main e-commerce site plugin list screenshot: 18 active plugins. Airwallex is not present in the current installed plugin list.
- WPCode snippet list screenshot: 12 total snippets, 6 active and 6 inactive. No snippet name visibly identifies Airwallex.
- Local/Adminer database screenshot: current database is `local`; visible tables include `wp_2_*`, including `wp_2_posts`, `wp_2_postmeta`, `wp_2_options`, and `wp_2_actionscheduler_*`. This is strong evidence that the e-commerce site may be blog/site ID 2, but table ownership is NOT yet accepted until Page ID 623 is verified in `wp_2_posts`.
- Current child theme ZIP supplied: `spatial-flow-astra-child-v1.2-main-journal.zip`.

## Current child-theme ZIP identity
- ZIP bytes: 311,779
- SHA256: `571163b4dbe8edf877471613a01c0194b0c0348adc5777ed871d39881370d6ab`
- ZIP entries: 43

## Full current-theme Airwallex string scan
Search terms included:
- `airwallex`
- `airwallex_main`
- `airwallex_payment_method_all`
- `conversion-rate`
- `converted-amount`
- `convert-icon`

Only two current theme files contain Airwallex-specific references.

### 1. `assets/css/checkout-safe5.css`
Current live source contains a runtime CSS block beginning around line 1175:

`/* Hide Airwallex currency switching / "You Pay" row inside SAFE5 order summary. */`

The block targets:
- `.wc-airwallex-currency-switching`
- `.wc-airwallex-currency-switching-container`
- `.wc-airwallex-currency-switching-conversion-rate`
- `.wc-airwallex-currency-switching-convert-icon`
- `.wc-airwallex-currency-switching-converted-amount`

and force-hides those rows/elements.

Current classification: **HIGH-CONFIDENCE OBSOLETE SOURCE CANDIDATE**, because the user has permanently rejected Airwallex and the Airwallex plugin is no longer installed. Do not remove yet until database/plugin/WPCode dependency audit closes.

### 2. `woocommerce/checkout/form-checkout.php`
A comment around line 513 says the native WooCommerce payment block keeps the `Airwallex iframe, wallet buttons, crypto gateways...`.

The executable owner is still generic `woocommerce_checkout_payment();` and is not Airwallex-specific.

Current classification:
- runtime code: **KEEP**
- wording/comment reference to Airwallex: **COMMENT-ONLY CLEANUP CANDIDATE**

## Important negative findings
The current theme ZIP contains no direct occurrence of:
- `airwallex_payment_method_all`
- `airwallex_main`

outside the above identified Airwallex-specific compatibility references.

## Current database safety boundary
No delete/update/drop operation is authorized.
Next database step is to verify the e-commerce site table prefix by querying Page ID 623 in `wp_2_posts`.

Expected anchor: current WooCommerce Checkout page must be Page ID 623.

If `wp_2_posts.ID = 623` resolves to the accepted Checkout page, then subsequent Airwallex residual queries should use:
- `wp_2_posts`
- `wp_2_postmeta`
- `wp_2_options`
- `wp_2_actionscheduler_actions`
- `wp_2_actionscheduler_groups`

If not, stop and identify the correct site table set before proceeding.

## No deletion authorized
This audit is read-only. The six `Payment` pages, options, scheduled actions, source CSS, comments and any other residual artifacts must not be deleted until dependency closure is complete.
