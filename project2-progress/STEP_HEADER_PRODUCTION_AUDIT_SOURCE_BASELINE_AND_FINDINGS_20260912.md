# Project 2 · Main-site Header production-quality audit · source baseline and first findings · 2026-09-12

## Stage
Main-site Header reopened / `Not done`.

This phase follows the user-approved reframing: Header is not being judged as a literal static-reference 1:1 copy. The acceptance target is production quality: width, information architecture, interaction maturity, responsive behavior, visual integration, and backend editability.

## Fresh current-server source baseline supplied by user

```text
header.php
bytes: 11,328
lines: 172
SHA256: 84bd757eb6cdfe779065ad739fd6968a297ae612b49d554feecf9032866f3224
PHP syntax: PASS

functions.php
bytes: 622,810
lines: 11,895
SHA256: 42c46cb5dd6090cef4bed911dfc628eb8aeebe976e8d9dbeb153a1bc5b9f4ec7
child version: 2.7.46
PHP syntax: PASS

assets/css/spatial-flow.css
bytes: 604,681
lines: 21,411
SHA256: 03826efb91e476d8093077e6d6477e71e4a82175bca2bd261dcf9ea45b58c9b0

assets/js/spatial-flow.js
bytes: 84,769
lines: 2,482
SHA256: 173785ea4d92b7bb5310e56d69cb839d62b4cde24b7583abea5ca6ce8f570454
node --check: PASS
```

No source edit is authorized in this record.

## Confirmed source ownership

### Desktop primary navigation
- `header.php` uses `wp_nav_menu()` with `sf_primary` as the normal main-site menu source.
- Desktop render is intentionally depth 1.
- If no menu exists, a static fallback is used.
- `sf_primary` is registered in `functions.php` as `Spatial Flow Primary Menu`.

### Utility actions
- Search is rendered directly in `header.php` and controlled by `setupHeaderSearch()` in `spatial-flow.js`.
- Saved resolves the YITH Wishlist page dynamically when available.
- Bag resolves the WooCommerce cart URL and live cart contents count.
- These are utility actions rather than WordPress menu items.

### Mobile navigation
- `header.php` prefers the separate `sf_mobile` menu; if unavailable it falls back to `sf_primary`; final fallback is static.
- Mobile menu renders up to depth 3.
- `spatial-flow.js` adds accordion submenu toggles and accessible expand/collapse labels.
- Mobile drawer UI copy has dedicated Customizer ownership through `sf_mobile_menu_*` settings.

### Topbar / masthead copy
- Right-side topbar text is editable through `sf_header_topbar_text` (with legacy fallback).
- Main-site left topbar (`Volume I · Issue 03 · Spring 2026`), center topbar (`A Journal of Rooms, Rituals & Quiet Objects`), main logo text, and main logo subtitle (`Est. 2026 · Est. in quiet rooms`) are currently hard-coded in `header.php`.
- Therefore Header backend editability is only partial, not complete.

### Shop dynamic mega menu
- Shop detection is attached to the `sf_primary` top-level menu item using title/URL detection (`shop` or `/shop`).
- `walker_nav_menu_start_el` injects `spatial_flow_shop_mega_menu_html()` after that menu link.
- Menu terms are real WooCommerce taxonomy data, not fabricated static links.
- Terms use `hide_empty => true` and alphabetical order.
- Five group definitions are fixed in source: Classification / Color / Five Elements Energy / Purpose / Zodiac Sign.
- Group schema/order/titles are code-owned; individual terms are Woo taxonomy-owned.

## First production-quality findings

### F1 · Header width model confirms the user's complaint
Current desktop V2 Header inner width is:

```css
.sf-v2-header .sf-container {
  width: min(1440px, calc(100% - 112px));
}
```

Therefore:
- desktop side gutters begin at 56px each;
- once the viewport exceeds 1552px, the Header stops growing at 1440px;
- empty space grows outside the masthead while the topbar itself remains viewport-oriented.

This creates the constrained-inner-container look the user explicitly dislikes. This is a confirmed source-level issue, not just a screenshot impression.

Status: **REQUIRES REDESIGN**.

### F2 · Mega Menu visual language confirms the user's complaint
Current dynamic mega menu is designed as a detached floating card:

```text
position: fixed
max/target width: 1360px
5-column grid
min-height: 340px
26px corner radius
near-white opaque card
large 30px × 90px shadow
large internal padding
blurred glass treatment
```

This explains the visible "white modal / floating popup" feeling in the user's screenshot. Functionally the menu is real and dynamic, but the presentation is not visually integrated with the editorial masthead.

Status: **FUNCTIONAL BUT VISUALLY REJECTED / REQUIRES REDESIGN**.

### F3 · Mega Menu IA is data-driven but reads like a taxonomy browser rather than a mature curated navigation layer
The existing five columns map directly to database classification/filter dimensions. This is useful for filtering, but it gives the dropdown the character of a WooCommerce taxonomy dump rather than a deliberate brand navigation system.

Production redesign should preserve real Woo taxonomy authority while deciding whether the top layer should also expose curated navigation such as all-shop / major product families / guidance or service entry points instead of only filter dimensions.

Status: **IA REVIEW REQUIRED; do not delete dynamic taxonomy authority**.

### F4 · Desktop top-level IA is backend-editable, but source alone cannot prove the current configured menu hierarchy
The source proves `sf_primary` and `sf_mobile` menu locations and their rendering rules. It does not contain the actual current database-configured menu items/hierarchy.

To audit whether entry points are incomplete or immature, obtain current Appearance → Menus evidence for:
- `Spatial Flow Primary Menu`;
- `Spatial Flow Mobile Menu`;
with hierarchy expanded/visible.

Status: **CURRENT DB MENU EVIDENCE REQUIRED BEFORE FINAL IA DECISION**.

### F5 · Responsive breakpoint architecture needs a tablet runtime audit
The main desktop 3-column masthead remains active above 767px. Between 768px and 1100px only fonts/gaps/gutters are reduced; the primary nav, centered logo, and utility group remain a 3-column desktop system.

Potential risk:
- crowded 768–1024px tablet state;
- hover-driven Shop mega behavior remains active on touch-capable tablets above 767px;
- the mega itself changes to 3 columns below 1180px but is not replaced by the mobile drawer until 767px.

This is source-level risk, not yet a declared runtime failure. It needs explicit 768/1024 evidence.

Status: **TABLET RUNTIME REVIEW REQUIRED**.

### F6 · Mobile architecture is stronger than the current desktop mega architecture, but utility completeness depends on the configured `sf_mobile` menu
The mobile drawer supports a dedicated menu, nested levels, and accordion controls. However, when `sf_mobile` exists, Wishlist/Cart/Help/Track Order/etc. are not automatically injected into the drawer; they appear only if the configured menu includes them. Therefore utility completeness cannot be judged from PHP fallback alone.

Status: **MENU CONFIGURATION REVIEW REQUIRED**.

### F7 · Header editability is incomplete
The user requires backend-editable production surfaces. Current right-side topbar text and mobile drawer copy are editable, but several visible masthead texts remain hard-coded in `header.php`.

Status: **BACKEND OWNERSHIP GAP; should be resolved during Header refinement unless intentionally fixed brand constants are explicitly approved**.

## Existing behavior that should be protected unless later rejected
- WordPress menu ownership for primary/mobile navigation.
- WooCommerce authoritative Bag URL/count.
- YITH Wishlist/Saved URL resolution.
- Search panel functionality and existing dedicated search page path.
- Main-site / Journal multisite branching.
- Real Woo taxonomy ownership for Shop navigation/filter destinations.
- Mobile nested-menu accordion behavior and accessible labels.

## What is intentionally NOT changed yet
- no CSS edit;
- no `header.php` edit;
- no `functions.php` edit;
- no JS edit;
- no navigation items added/removed;
- no Mega Menu structure replaced yet;
- no Header width target hard-coded yet.

## Current stop point
Source ownership and the first defect map are established.

## Exact next action
Collect only the missing current-runtime/database evidence needed to finalize the redesign plan:
1. current `Spatial Flow Primary Menu` structure in Appearance → Menus;
2. current `Spatial Flow Mobile Menu` structure in Appearance → Menus;
3. later, a bounded tablet runtime sweep around 1024px and ~768–820px before final responsive implementation acceptance.

After the menu structures are known, produce one coherent Header redesign specification covering:
- near-full-width masthead geometry;
- final top-level IA;
- redesigned Shop navigation layer;
- desktop/tablet/mobile behavior;
- backend ownership gaps;
- implementation boundaries.

No implementation should begin before that specification is recorded and approved.