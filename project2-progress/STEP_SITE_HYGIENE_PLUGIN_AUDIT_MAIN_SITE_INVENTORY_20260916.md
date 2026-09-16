# Site Hygiene — Plugin Audit Main-Site Inventory

Date: 2026-09-16

## Scope
Read-only WP-CLI plugin inventory for `spatialflow.local` before any plugin deactivation or deletion.

## Main-site findings
- Total installed plugins reported: 40
- Active on main site: 18
- Inactive on main site: 22
- Network-active: 0
- Must-use: 0
- Drop-ins: 0

## Active on `spatialflow.local`
- cartflows 2.1.19
- contact-form-7 6.1.4
- display-posts-shortcode 3.0.3
- elementor 3.34.1
- woo-orders-tracking 1.2.17
- product-import-export-for-woo 2.6.0
- spatial-flow-crypto-pay 0.3.0
- spatial-flow-diy-cart-bridge 1.2.0
- astra-sites 4.4.46
- header-footer-elementor 2.8.1
- print-invoices-packing-slip-labels-for-woocommerce 4.9.0
- wonderplugin-slider-lite 14.5
- woocommerce 10.4.3
- woocommerce-payments 10.4.0
- insert-headers-and-footers 2.3.3
- wp-show-posts 1.1.6
- yet-another-related-posts-plugin 5.30.11
- yith-woocommerce-wishlist 4.14.0

## Inactive on `spatialflow.local`
- woo-advanced-shipment-tracking 3.8.9
- akismet 5.6
- astra-widgets 1.2.17
- woo-cart-abandonment-recovery 2.0.5
- easy-table-of-contents 2.0.81
- fluentform 6.1.19
- hello 1.7.2
- woo-poly-integration 1.5.0
- suretriggers 1.1.18
- polylang 3.7.7
- seo-by-rank-math 1.0.261
- relevanssi 4.26.0
- sidebar-manager 2.0.0
- smart-slider-3 3.5.1.32
- spatialflow-site-refinement 0.2.0
- ultimate-addons-for-gutenberg 2.19.26
- kadence-starter-templates 2.2.14
- sureforms 2.5.1
- variation-swatches-woo 1.0.13
- woocommerce-gateway-stripe 10.2.1
- wordpress-importer 0.9.5
- wpforms-lite 1.9.9.3

## Safety interpretation
This inventory is not a deletion list. Because the installation is Multisite and the blog subsite can have site-specific plugin activation, a plugin inactive on the main site may still be active on `blog.spatialflow.local`.

Therefore the next gate is a read-only subsite plugin inventory before any plugin file deletion or uninstall action.

## Next gate
1. Confirm site list and blog URL.
2. Run full plugin inventory for `blog.spatialflow.local`.
3. Build combined network usage matrix.
4. Only then classify plugins into protected, candidate cleanup, historical residue, and unknown.

No plugin state changes are authorized at this checkpoint.
