# Project 2 — Header V2 Complete Multi-File Implementation START — 2026-09-13

## Status
START — one complete Header V2 production implementation step. No runtime or visual PASS is claimed by this record.

## Execution granularity
This is one meaningful feature step, not one-file-per-step. The authorized Header V2 delta may touch all required files together; the returned modified files will be audited together before browser/runtime acceptance.

## Authoritative current-server baseline
The implementation candidate must be derived from the fresh current-server files already supplied by the user. Repository theme copies are not allowed to override these baselines.

- `header.php` — 11,328 bytes — SHA256 `84bd757eb6cdfe779065ad739fd6968a297ae612b49d554feecf9032866f3224`
- `functions.php` — 623,228 bytes — SHA256 `b317642c4e0b6219295398186c3397fe8c4e93567c4355a2ef370d06670259b4` — contains the already verified H1 Header Customizer fields — child version still `2.7.46`
- `assets/css/spatial-flow.css` — 604,681 bytes — SHA256 `03826efb91e476d8093077e6d6477e71e4a82175bca2bd261dcf9ea45b58c9b0`
- `assets/js/spatial-flow.js` — 84,769 bytes — SHA256 `173785ea4d92b7bb5310e56d69cb839d62b4cde24b7583abea5ca6ce8f570454`

## Locked product direction
Main-site Header only:

1. Keep desktop primary IA as `Shop / Journal / Services / About Us`, owned by `sf_primary`.
2. Preserve the independent `sf_mobile` WordPress menu location as the mobile content owner. Do **not** replace it with `sf_primary`.
3. Omit Checkout from permanent mobile navigation.
4. Desktop header gets a viewport-aware near-full-width shell and mathematically centered wordmark.
5. Existing WooCommerce-driven Shop taxonomy authority remains dynamic; the presentation changes from the oversized floating rounded card into a restrained header-attached editorial layer.
6. Tablet gets an explicit non-hover navigation state around the current 1100px transition instead of retaining desktop hover behavior down to 767px.
7. Mobile becomes progressive navigation: root hierarchy → Shop → taxonomy layer, with clear back navigation and Primary / Shopping / Support grouping.
8. Search, YITH Wishlist/Saved, WooCommerce Bag/cart count, real taxonomy links, and existing backend editability must remain authoritative.
9. The already added Header Customizer ownership for issue line, editorial line, and logo subtitle remains; this step may add the Shop-mega editorial line owner if needed.
10. Journal/blog header behavior is outside this redesign and must remain materially unchanged.

## Authorized source regions
### `functions.php`
- child theme version bump for this complete Header step;
- Header Customizer field list only as required;
- current `spatial_flow_shop_mega_menu_html()` / directly related Header Shop helper logic;
- a bounded helper for reading/grouping the assigned `sf_mobile` menu without deleting or re-registering the location.

### `header.php`
- main-site masthead text ownership hookup;
- main-site Header shell / responsive Menu trigger structure;
- main-site progressive mobile drawer structure;
- journal branch preserved.

### `assets/css/spatial-flow.css`
- replace/consolidate the existing bounded mobile-header containment owner into a canonical main-site Header V2 responsive block;
- replace/consolidate current Step 5H SAFE1 + SAFE2 Shop mega presentation into the canonical Header V2 mega presentation;
- no unrelated closed-page CSS changes.

### `assets/js/spatial-flow.js`
- mobile drawer open/close/reset logic and progressive navigation branch only;
- preserve legacy/journal submenu branch and existing search behavior.

## Explicit exclusions
- No Footer work in this step.
- No Shop archive page redesign in this step.
- No Cart / Checkout / Thank You / Single Product changes.
- No deletion of WordPress menus or Pages for admin cleanup.
- No hardcoded product prices, totals, taxonomy data, or fabricated content.
- No ZIP/full-theme deployment shortcut.

## Verification gate after user applies the batch
The user should return every modified file from this step together. Source verification must cover:

- exact bounded diffs against the four baselines above;
- PHP syntax for `functions.php` and `header.php`;
- JS syntax;
- CSS structural sanity;
- expected version / source identity;
- preservation of `sf_primary`, `sf_mobile`, Woo taxonomy URLs, Wishlist, Bag/cart count and Search ownership.

Only after source PASS do we proceed to desktop/tablet/mobile browser testing. Runtime/visual/user acceptance remain separate gates.

## Current stop point
Produce and statically validate the complete bounded multi-file Header V2 candidate, then issue the whole manual replacement batch together. Wait for the user to return all modified files before runtime testing.
