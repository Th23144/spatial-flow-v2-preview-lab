# Project 2 · Header V2 production implementation specification · 2026-09-13

## Status
Specification complete. No live-site acceptance is claimed by this record.

## Current-source findings
The latest server source confirms the current Main-site Header is owned by four files:
- `header.php`: topbar, desktop primary menu, centered logo, Search / Saved / Bag, search panel, mobile drawer markup.
- `functions.php` 2.7.46: menu locations, multisite URL helpers, topbar copy, mobile-menu copy controls, Shop menu-item detection, dynamic WooCommerce mega-menu rendering, taxonomy/filter URL helpers.
- `assets/css/spatial-flow.css`: current V2 masthead geometry, 1440px-limited Header shell, search popover, current floating Shop mega card, current 767px-only mobile transition, existing mobile submenu accordion visuals.
- `assets/js/spatial-flow.js`: current mobile drawer open/close, nested menu accordion, Search open/close, and old `.sf-mega-menu` cleanup.

## Production architecture

### 1. Main-site scope only
The production redesign is scoped to `.sf-v2-header--main` and the Main-site mobile drawer. The Journal / blog Header remains a separate later surface and must not be silently redesigned in this pass.

### 2. Desktop > 1100px
Main masthead uses a dedicated near-full-width shell rather than the ordinary `.sf-container` content width.
Target geometry:
- horizontal gutter: ~40px at ordinary desktop widths, slightly larger only on very wide screens;
- 3-column grid: `1fr auto 1fr`;
- left: WordPress `sf_primary` menu;
- center: true centered Spatial Flow wordmark;
- right: Search / Saved / Bag.

The logo must remain geometrically centered regardless of left/right content width.

### 3. Tablet 768–1100px
Do not squeeze the full desktop navigation into tablet.
Layout becomes:
- left: Menu;
- center: true centered logo;
- right: Search + Bag;
- Saved moves into the drawer;
- desktop Shop mega is disabled because hover is not a reliable tablet interaction.

### 4. Mobile <= 767px
Layout becomes:
- left: Menu;
- center: logo;
- right: Bag;
- Search is not shown in the compact masthead;
- logo subtitle is hidden at the narrowest width.

### 5. Desktop Shop discovery layer
The current floating 1360px white rounded modal card is replaced by a Header-attached editorial navigation layer.

Required properties:
- attached directly below the sticky main Header;
- near/full viewport width matching Header gutters;
- no large floating-card radius;
- no heavy modal shadow;
- paper-tone background and fine border;
- preserve WooCommerce taxonomy/data authority;
- preserve real product/category/filter URLs.

Information hierarchy:
1. `Shop the collection`
   - `Shop all`
   - real `product_cat` terms
2. `Browse by purpose`
   - real `pa_purpose` terms
3. `By element`
   - real `pa_five-elements-energy` terms
4. `Discover`
   - compact disclosure for real `pa_color` terms
   - compact disclosure for real `pa_zodiac-sign` terms
   - no fabricated product categories, collections, or fake editorial destinations
5. bottom editorial line + `View the full shop` using the real Shop URL.

### 6. Mobile drawer IA
The current equal-weight white-card list is replaced by grouped navigation.

Main-site root:
- `PRIMARY`
  - uses the real `sf_primary` WordPress menu as the editable source for Shop / Journal / Services / About Us;
- `SHOPPING`
  - Saved (real YITH wishlist page URL)
  - Bag + live cart count (real Woo cart URL/count)
- `SUPPORT`
  - reuse real matching entries from the assigned `sf_mobile` menu for Track Order / FAQ / Contact Us when available;
  - Checkout is intentionally excluded from permanent global navigation.

The existing `sf_mobile` menu is not deleted. Its cleanup is deferred to the separate WordPress page/menu hygiene phase.

### 7. Mobile Shop progressive disclosure
Selecting Shop in the mobile drawer enters a dedicated Shop explorer rather than immediately dumping every term.

Level 2:
- Shop all + real product categories;
- By purpose;
- By five elements;
- By color;
- By zodiac.

Level 3:
- each branch renders the real non-empty WooCommerce terms for that taxonomy;
- Back returns one level at a time;
- Close exits the drawer and resets it to the root level.

### 8. Search
Preserve the existing real `/search/` action and current search validation behavior.
Desktop/tablet Search remains available; compact mobile Header hides the Search action to preserve the accepted visual hierarchy.

### 9. Backend-editable Header copy
Add backend ownership for currently hardcoded Main-site masthead text while preserving current visible defaults:
- left issue line: `Volume I · Issue 03 · Spring 2026`;
- center editorial line: `A Journal of Rooms, Rituals & Quiet Objects`;
- logo subtitle: `Est. 2026 · Est. in quiet rooms`.

Existing shipping/topbar right text remains owned by `sf_header_topbar_text`.
These controls belong in the existing `Spatial Flow 页眉页尾设置` Customizer section; no new plugin or external settings system.

### 10. JS behavior
Replace the current mobile accordion-only interaction for the Main-site drawer with progressive panel navigation while preserving Journal behavior separately.
Required controls:
- open / close;
- backdrop close;
- Escape close;
- Back one level;
- Shop branch navigation;
- reset to root on close;
- body scroll lock while main mobile drawer is open.

Search behavior remains independent.

### 11. Source-change boundary
Expected modified files:
- `header.php`
- `functions.php`
- `assets/css/spatial-flow.css`
- `assets/js/spatial-flow.js`

Expected version bump:
- `SPATIAL_FLOW_CHILD_VERSION` 2.7.46 → 2.7.47

No WooCommerce template, Checkout SAFE5 file, Cart template, Single Product template, database record, URL, payment, order or plugin authority is changed by this Header pass.

## Validation gates after user applies the files
1. source identity + PHP/JS syntax;
2. desktop Header width / true-center logo;
3. desktop Shop open/hover/focus stability and real taxonomy links;
4. tablet 768 / 834 / 1024 state;
5. mobile 390 root drawer + Shop level 2 + taxonomy level 3 + Back + Close;
6. Search / Saved / Bag regression;
7. cart-count truth;
8. no horizontal overflow;
9. Journal Header regression check (must remain materially unchanged);
10. user visual acceptance.

Only after those gates pass can Main-site Header be considered closed.
