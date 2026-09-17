# Site Hygiene temporary plugin cleanup — final review and mainline resume · 2026-09-17

## Scope correction
This cleanup phase is intentionally limited to removing clearly unused / globally inactive plugins and obvious plugin-owned residue so the working WordPress environment is temporarily cleaner before returning to Project 2 page-build mainline work.

This is NOT the final plugin-to-source reduction phase. A later final deep-clean phase, after all page/function work is stable, will separately evaluate active plugins for KEEP / REPLACE WITH SOURCE / MERGE INTO EXISTING CODE / REMOVE.

## Final cross-site plugin review
Final WP-CLI inventories were supplied by the user after cleanup.

### Main site
The remaining inactive plugins are all active on the blog site:
- astra-widgets
- easy-table-of-contents
- fluentform
- seo-by-rank-math
- relevanssi
- ultimate-addons-for-gutenberg
- kadence-starter-templates
- sureforms
- wordpress-importer
- wpforms-lite

Therefore they are shared multisite plugin files and must NOT be removed in this temporary cleanup.

### Blog site
The remaining inactive plugins are all active on the main site:
- cartflows
- contact-form-7
- display-posts-shortcode
- woo-orders-tracking
- product-import-export-for-woo
- spatial-flow-crypto-pay
- spatial-flow-diy-cart-bridge
- print-invoices-packing-slip-labels-for-woocommerce
- wonderplugin-slider-lite
- woocommerce
- woocommerce-payments
- yet-another-related-posts-plugin
- yith-woocommerce-wishlist

Therefore they are shared multisite plugin files and must NOT be removed in this temporary cleanup.

### Network state
- Active-network plugins: none.
- No remaining plugin is inactive on both sites.
- Physical plugin directory matches the expected shared-plugin inventory.

## Quarantine inventory
The quarantine directory currently contains:
- akismet
- hello.php
- polylang
- sidebar-manager
- smart-slider-3
- spatialflow-site-refinement
- suretriggers
- variation-swatches-woo
- woo-advanced-shipment-tracking
- woo-cart-abandonment-recovery
- woo-poly-integration
- woocommerce-gateway-stripe

These remain preserved in quarantine. Do not permanently delete quarantine or cleanup backups yet.

## Closure conclusion
Temporary plugin cleanup: PASS / CLOSED.

No globally inactive plugin remains in the live plugin directory.
No currently active main-site or blog-site plugin was removed.
No further active-plugin audit should be performed in this phase.

## Mainline resume
Project 2 now returns to the page-build mainline.

Current next target: Shop strict 1:1 re-audit / remaining Shop adjustments.
Repository evidence confirms:
- Shop was explicitly reopened by the user.
- The per-product Editorial Place Note remains unimplemented because it must have a real backend-editable per-product data owner; fabricated hardcoded text is not acceptable.
- Additional Shop adjustments remain to be reconciled against the static reference and the user's later feedback.

After Shop stabilizes, continue Home, remaining utility/brand/support pages, Blog family, then the later final deep cleanup / plugin-to-source replacement / CSS-JS-PHP consolidation / DB-cron residue cleanup / final regression and release.

## Stop point
`TEMPORARY PLUGIN CLEANUP CLOSED → RETURN TO SHOP MAINLINE`
