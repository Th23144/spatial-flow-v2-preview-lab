# Project 2 · Main-site Header V2 visual prototype direction accepted · 2026-09-13

## Current project stage
Main-site Header production-quality / IA / interaction refinement.

## Trigger
The user reviewed the first interactive Header V2 visual prototype and the deeper mobile-menu prototype, including the nested mobile path:

```text
MENU → SHOP → BY PURPOSE / FIVE ELEMENTS / COLOR / ZODIAC → BACK
```

The user response was: `可以，还不错`.

## Acceptance scope
This is a design-direction acceptance only.

Accepted direction includes:
- Header uses its own near-full-width / viewport-aware shell rather than the old constrained page-container feeling;
- Desktop keeps a restrained top-level IA with Shop / Journal / Services / About Us plus Search / Saved / Bag utilities;
- Shop uses a full-width editorial navigation layer rather than the current oversized floating white rounded modal;
- taxonomy-driven discovery remains available but is hierarchically organized rather than fully dumped at the first level;
- tablet exits the full desktop navigation earlier and uses a Menu-based state;
- mobile drawer uses grouped information architecture instead of ten equal-weight white cards;
- mobile Shop can drill into deeper levels such as Purpose / Five Elements / Color / Zodiac and provide Back navigation;
- Checkout is not treated as a permanent global-navigation destination.

## Status boundary
This does NOT mean:
- the live WordPress Header has been changed;
- the prototype HTML is production code;
- source validation has occurred;
- runtime validation has occurred;
- Main-site Header is complete.

Current status remains:

```text
Main-site Header: Not done
```

## Protected decisions
Preserve:
- WordPress menu ownership where appropriate;
- WooCommerce taxonomy/data authority for shop discovery;
- Woo cart/wishlist/search authority;
- backend editability;
- the already completed Single Product / Cart / Checkout / Order Result systems.

## Separate later step
The WordPress admin `Appearance → Menus → Add menu items → Pages` page inventory is also visibly cluttered. This is a separate future step:

```text
WordPress Page Inventory + Menu Admin Hygiene Audit
```

Do not delete pages merely because the admin page list is visually noisy. Audit dependencies and current ownership first.

## Current stop point
Header V2 visual / interaction direction is accepted enough to move from prototype exploration to a bounded production implementation specification.

## Exact next action
Create the final Header V2 implementation spec before editing live source. The spec must define:
- desktop / tablet / mobile breakpoints;
- exact shell width and gutters;
- desktop grid and centered-logo behavior;
- topbar ownership/editability;
- Shop mega-menu IA and dynamic taxonomy mapping;
- search state;
- mobile drawer hierarchy and drill-down behavior;
- which current menu items stay, move or are removed;
- source ownership map for `header.php`, `functions.php`, `spatial-flow.css`, and `spatial-flow.js`;
- bounded edit delta and rollback boundary.

Only after that spec is recorded should source editing begin.
