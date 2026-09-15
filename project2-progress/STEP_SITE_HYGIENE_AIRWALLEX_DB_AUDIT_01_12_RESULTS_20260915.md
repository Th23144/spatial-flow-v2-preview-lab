# Site Hygiene — Airwallex DB Audit 01–12 Results

Date: 2026-09-15
Status: READ-ONLY AUDIT, no deletion authorized

## Confirmed table ownership
- `wp_*` = `spatialflow.local` main commerce site.
- `wp_2_*` = `blog.spatialflow.local` journal site.

## Current database evidence from Adminer queries 01–12
- Main-site Checkout Page ID 623 exists in `wp_posts` and is a published page.
- Six published WordPress pages titled `Payment` are returned by the Payment/Airwallex page query.
- Their `post_name` values are not one literally identical slug; they are separate Airwallex payment-method page records. They should therefore be treated as a generated Airwallex page family, not as six byte-for-byte duplicate copies solely because the visible title is the same.
- Searching `wp_posts.post_content` for Airwallex returns the same Airwallex Payment page family; no unrelated content evidence has been established from this query.
- The page-family postmeta is minimal/ordinary editing metadata in the returned result.
- Global `wp_postmeta` search for Airwallex returned no rows.
- At least one nav-menu-item reference to one of the Airwallex Payment pages is present and must be identified before page deletion.
- Custom menu URL search for Airwallex returned no rows.
- `wp_options` contains many Airwallex-string matches (27 rows visible in the result set). These require classification before deletion because the set may mix real plugin options, WooCommerce gateway settings, transients/caches and other serialized values.
- `wp_sitemeta` contains one Airwallex-string match; exact key/classification should be confirmed before deletion.
- No Airwallex-named custom database table was returned.
- WordPress cron search returned no Airwallex match.
- Main-site Action Scheduler tables exist, so the conditional Airwallex Action Scheduler query is now required.

## Current theme-source evidence
Full live child-theme ZIP scan found Airwallex-specific source residue in exactly two locations:
1. `assets/css/checkout-safe5.css`: a dedicated block hiding `.wc-airwallex-currency-switching*` rows/containers, including conversion-rate / convert-icon / converted-amount selectors.
2. `woocommerce/checkout/form-checkout.php`: a comment in the native WooCommerce payment mount says the block keeps an "Airwallex iframe". The executable call is generic `woocommerce_checkout_payment()` and remains required; only the provider-specific wording is a cleanup candidate.

No other live child-theme matches were found for `airwallex_main`, `airwallex_payment_method_all`, `wc-airwallex`, `conversion-rate`, `converted-amount`, or `convert-icon` outside the CSS block noted above.

## Interpretation
- Airwallex is no longer installed, but residual data and source compatibility code remain.
- The six Payment pages are plugin-generated Airwallex method pages, not current Checkout Step 03 owners.
- Do not delete pages/options/menu items/source yet.
- Next read-only step: run the Airwallex Action Scheduler query, and run a compact identity/menu/options-key query to capture exact IDs/keys without exposing option values.

## Safety
Until dependency closure is complete, no `DELETE`, `UPDATE`, `DROP`, `TRUNCATE`, or `ALTER` operation is authorized.
