# STEP_FOOTER_V2_IA_LOCK_HTML_PREVIEW_AND_FUTURE_ADMIN_CLEANUP_SCOPE_20260914

Date: 2026-09-14
Project: Spatial Flow V2 / 项目二换皮工程
Subsystem: Main-site Footer V2 + future admin/site hygiene

## User authorization
User authorized proceeding directly from the completed backend inventory audit into Footer V2 IA lock and standalone HTML visual preview.

## New explicit future cleanup requirement
After Main-site Footer V2 is fully repaired and user-accepted, add a separate backend explanation / hygiene stage. This stage must cover more than a generic WordPress tutorial.

Required scope:
1. Explain `Appearance -> Menus -> Edit Menus` using the user's real current configuration.
2. Explain menu objects vs menu locations, custom links vs pages, Manage Locations, and the meaning of the location checkboxes.
3. Reconcile confusing current menu naming/location semantics without breaking registered location ownership.
4. Audit duplicate / suspicious WordPress pages such as the multiple pages all titled `Payment` visible in the current Pages inventory and menu selector.
5. Determine whether each duplicate page is live, referenced, plugin-created, shortcode-owned, CartFlows/payment-related, obsolete, or safe to remove.
6. Audit installed plugins and identify unused / superseded plugins, but do not delete plugins before dependency review and rollback/backup planning.
7. Aim for a clean production WordPress installation with minimal obsolete pages, stale menus, unused plugins, legacy builders/snippets, and redundant assets, while preserving all live WooCommerce/payment/order functionality.

## Safety boundary for cleanup
Duplicate-looking pages are NOT automatically safe to delete. Current evidence includes several identically titled `Payment` pages, but their IDs/templates/shortcodes/references are not yet established. No deletion is authorized during Footer V2 work.

Plugin removal is similarly deferred until ownership/dependency analysis is complete. Visual cleanup must not break WooCommerce, CartFlows/payment history, Crypto integration, order endpoints, menus, forms, or rollback paths.

## Footer V2 IA direction from current audit
Keep the dark editorial footer direction, but redesign composition rather than merely widening the old layout.

Desktop target:
- near-full-width composition aligned with accepted Header V2;
- brand/editorial opening integrated with navigation instead of isolated centered logo with excess dead space;
- clear IA using the existing independent WordPress Footer menu owners;
- add a real Services landing entry to the service/support column;
- keep Shop and Journal concise and intentional;
- keep About + policy destinations deliberate rather than mirroring every existing page;
- convert the current large rounded trust card into an integrated trust band / structured footer layer;
- mature final legal / region / social closing row.

Proposed information architecture:
- SHOP: Shop All, Bracelets, Consult & Customize, Decorative Piece, Necklace
- JOURNAL: Journal Home, Buying Guides, Space & Energy, Secrets of Crystals
- SERVICES & SUPPORT: Services Overview, FAQ, Track Order, Care Guide, Contact Us
- ABOUT & POLICIES: About Us, Shipping Policy, Returns & Refunds
- LEGAL BOTTOM: Privacy Policy, Terms & Conditions

Deliberately not exposed as permanent Footer links merely because pages exist:
- Cart
- Checkout
- Search
- 404
- current unbound My Account
- duplicate Payment pages

Wishlist/Saved remains optional because Header already exposes Saved.

## Current WordPress evidence
- Woo Cart mapped to Cart ID 622.
- Woo Checkout mapped to Checkout ID 623.
- Woo My Account page is currently unassigned.
- Terms & Conditions is mapped to ID 3251.
- Five main Footer menu locations are actively assigned.
- Current location/menu naming is semantically confusing: `About & Services` currently contains support links, while `Customer Care` currently contains About + policies.

## Exact next action
Create a standalone non-repository Footer V2 HTML visual prototype with desktop and mobile views. Do not modify live WordPress/PHP/CSS/JS until user reviews and approves the visual direction.
