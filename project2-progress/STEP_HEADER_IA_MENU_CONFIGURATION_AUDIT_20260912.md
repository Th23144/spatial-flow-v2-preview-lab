# Project 2 · Main-site Header IA / menu configuration audit · 2026-09-12

## Stage

Main-site Header reopened production-quality / IA / interaction refinement.

## Evidence reviewed

- fresh current server source previously supplied: `header.php`, `functions.php`, `assets/css/spatial-flow.css`, `assets/js/spatial-flow.js`;
- fresh current desktop Header screenshots;
- fresh WordPress menu-admin screenshots for `Main Header Menu (Spatial Flow Primary Menu)` and `Main Mobile Menu (Spatial Flow Mobile Menu)`;
- fresh mobile drawer screenshot.

## Current menu ownership

Desktop primary navigation is owned by the WordPress menu location `sf_primary`.
Current desktop menu contains four top-level items only:

```text
Shop
Journal
Services
About Us
```

Mobile navigation is owned independently by `sf_mobile`.
Current mobile menu contains ten top-level items:

```text
Shop
Wishlist
Cart
Checkout
Track Order
Services
FAQ
About Us
Contact Us
Journal
```

The current mobile menu is therefore not merely a responsive rendering of the desktop IA; it is a separate manually maintained navigation set.

## WordPress menu-admin clutter clarification

The large selector list in Appearance → Menus does not mean all entries are duplicate or active Header menus.
The registered locations include separate owners for:

```text
Main Header
Main Mobile
Footer V2 Shop column
Footer V2 Journal column
Footer V2 About & Services column
Footer V2 Customer Care column
Footer V2 Legal links
Blog Footer Sections
Blog Footer Explore
Blog Footer Journal
Blog Footer Legal
```

Most of these locations are legitimate independent owners for Footer or Blog surfaces and should not be deleted merely to make the admin selector shorter.
The Header refinement should instead make Header IA clearer while preserving separate global/menu ownership.

## Fresh IA findings

### Desktop

The current four-item desktop primary menu is clean but incomplete as a full navigation system only if judged in isolation. It is intentionally supported by utility actions (`Search`, `Saved`, `Bag`) and the Shop mega menu.
The next design must determine which destinations belong in:
- primary navigation;
- utility navigation;
- Shop mega navigation;
- Footer only.

Do not simply mirror every available page into the desktop top bar.

### Mobile

The mobile drawer is materially under-refined.
Problems visible in current evidence:

1. ten destinations are presented as ten equal large white rounded cards;
2. no hierarchy distinguishes commerce, account/order, service/support, brand/editorial destinations;
3. Checkout is exposed as a permanent top-level navigation destination even when there may be no active checkout context;
4. Wishlist and Cart are mixed into the same hierarchy as Services / FAQ / About / Contact / Journal;
5. the resulting drawer reads as a raw page directory rather than a deliberate mobile navigation system;
6. visual treatment (large white pill/cards with wide vertical repetition) does not match the restrained editorial desktop masthead.

## Direction locked for next design phase

The current Header will NOT be treated as a strict static-reference 1:1 problem.
The next phase must produce a production-quality navigation architecture with:

```text
Desktop:
- near-full-width / viewport-aware masthead rather than the current constrained-feeling inner width;
- preserve centered Spatial Flow wordmark and utility actions;
- retain WordPress menu ownership;
- redesign Shop mega menu as an integrated navigation layer rather than a floating white modal card;
- preserve real WooCommerce taxonomy ownership while improving hierarchy.

Tablet:
- explicitly design a middle state instead of forcing the full desktop three-part header until 767px;
- avoid hover-dependent mega navigation as the only tablet interaction.

Mobile:
- use grouped hierarchy rather than ten equal cards;
- primary destinations should remain prominent;
- commerce utilities and support/order destinations should be separated from primary brand navigation;
- Checkout should not be treated as a permanent primary destination by default;
- preserve `sf_mobile` backend editability and existing accordion capability where useful.
```

## Current stop point

No source changes are authorized yet.

## Exact next action

Create and present the proposed final Header IA + geometry + desktop mega-menu + tablet + mobile drawer structure for user review before issuing any code changes.
