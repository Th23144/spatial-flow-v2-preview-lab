# Project 2 — Site Hygiene Plugin Cross-Site Matrix — 2026-09-16

## Scope
Read-only plugin inventory across the Local WordPress Multisite before any plugin deletion.

## Site mapping confirmed
- blog_id 1: `spatialflow.local` — main ecommerce site
- blog_id 2: `blog.spatialflow.local` — blog/journal site
- Network Active plugins: none
- MU plugins: none
- Drop-ins: none

## Main-site active plugins
`cartflows`, `contact-form-7`, `display-posts-shortcode`, `elementor`, `woo-orders-tracking`, `product-import-export-for-woo`, `spatial-flow-crypto-pay`, `spatial-flow-diy-cart-bridge`, `astra-sites`, `header-footer-elementor`, `print-invoices-packing-slip-labels-for-woocommerce`, `wonderplugin-slider-lite`, `woocommerce`, `woocommerce-payments`, `insert-headers-and-footers`, `wp-show-posts`, `yet-another-related-posts-plugin`, `yith-woocommerce-wishlist`.

## Blog-site active plugins
`astra-widgets`, `easy-table-of-contents`, `elementor`, `fluentform`, `seo-by-rank-math`, `relevanssi`, `ultimate-addons-for-gutenberg`, `astra-sites`, `kadence-starter-templates`, `sureforms`, `header-footer-elementor`, `wordpress-importer`, `insert-headers-and-footers`, `wpforms-lite`, `wp-show-posts`.

## Globally inactive candidates
The following plugins are inactive on both sites and are candidates for dependency/residue audit before any deletion:
- `woo-advanced-shipment-tracking`
- `akismet`
- `woo-cart-abandonment-recovery`
- `hello`
- `woo-poly-integration`
- `suretriggers`
- `polylang`
- `sidebar-manager`
- `smart-slider-3`
- `spatialflow-site-refinement`
- `variation-swatches-woo`
- `woocommerce-gateway-stripe`

## Important constraint
A plugin that is inactive on the main site must not be deleted merely from the main-site view because plugin files are shared across the Multisite. The blog-site state is now part of the deletion gate.

## Current decision
No plugin deletion has been authorized yet. Next step is read-only dependency/residue audit for the 12 globally inactive candidates.
