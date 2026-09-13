# Project 2 · Header V2 implementation specification START · 2026-09-13

## Trigger
The user accepted the current Header V2 visual / IA direction, including the deeper mobile navigation prototype, and explicitly instructed the project to begin implementation work.

## Scope of this step
This step does not yet claim live-site implementation or acceptance.
It converts the accepted prototype direction into a bounded production implementation specification against the user's latest server-source files:

- `header.php`
- `functions.php` (`SPATIAL_FLOW_CHILD_VERSION` 2.7.46)
- `assets/css/spatial-flow.css`
- `assets/js/spatial-flow.js`

## Accepted direction to preserve
- Header uses its own near-full-width / viewport-aware shell rather than inheriting the ordinary page-content width model.
- Desktop keeps a restrained top-level IA: Shop / Journal / Services / About Us; utility actions remain Search / Saved / Bag.
- Desktop Shop becomes an editorial navigation layer attached to the Header rather than a floating rounded modal card.
- WooCommerce taxonomy remains the data authority for dynamic Shop discovery; no fake terms or hardcoded commerce truth.
- Tablet exits the full desktop navigation earlier and uses a Menu-centered responsive state rather than forcing hover-driven mega navigation into narrow/touch widths.
- Mobile drawer uses grouped IA rather than equal-weight white cards.
- Mobile Shop supports deeper progressive disclosure for product discovery, including purpose / five elements / color / zodiac branches.
- Checkout is not a permanent global navigation destination.
- Existing Search, Wishlist/Saved, Bag, WordPress menu ownership, WooCommerce data authority and existing working interactions must be preserved.
- Header editorial copy that is currently hardcoded should gain backend-editable ownership where appropriate.

## Hard boundaries
- Do not reopen Single Product / Cart / Checkout / Thank You body work.
- Do not hardcode dynamic WooCommerce product/category/filter data.
- Do not remove or destroy current menu registrations merely because the WordPress menu admin is visually cluttered; backend page/menu hygiene is a separate later audit.
- Do not treat this source/spec step as runtime acceptance.

## Immediate task
Audit the exact current Header-related ownership blocks in the four fresh server files, then write the production implementation specification and intended source deltas before any live/manual edit is prescribed.
