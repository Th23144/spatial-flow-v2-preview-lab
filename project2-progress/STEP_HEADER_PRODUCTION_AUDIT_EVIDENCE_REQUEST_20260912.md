# Project 2 · Main-site Header production-quality audit · Evidence request · 2026-09-12

## Current stage

Single Product is closed. Main-site Header is the active reopened global surface.

The user's current goal is not literal static-reference 1:1 duplication. The Header must be reviewed as a production-quality global navigation system with emphasis on width, information architecture, mega-menu maturity, interaction quality and backend editability.

## Fresh-source rule

Historical repository copies of Header-related source are not authoritative for implementation. The current server source copied fresh by the user is the only valid source baseline for edits.

## Historical ownership already known

Repository history confirms the current Header system has historically involved:
- `header.php` for the main shell/markup and primary navigation output;
- WordPress `wp_nav_menu` / the `Spatial Flow Primary Menu` location for desktop navigation ownership;
- `functions.php` for Header-related dynamic ownership, menu registration/fallbacks and/or dynamic Shop mega-menu data/output support;
- `assets/css/spatial-flow.css` for Header width/layout, masthead, primary nav, utility nav, mega-menu, responsive/mobile presentation;
- `assets/js/spatial-flow.js` for Header interactions such as search, mobile drawer and any client-side menu behavior.

Historical functionality to preserve:
- backend-editable WordPress primary menu;
- Search;
- Saved / Wishlist;
- Bag / cart count;
- mobile Menu / drawer;
- blog-subsite branch behavior;
- dynamic Shop hover mega menu;
- editable topbar/header text owners where present.

## Minimum current source batch requested

Request fresh current-server copies of exactly these four files first:

```text
header.php
functions.php
assets/css/spatial-flow.css
assets/js/spatial-flow.js
```

Do not request Footer source yet; Footer is a later independent phase.

## Why these four are sufficient for the first audit

They allow a complete first-pass ownership map of:
- page-width / inner-container constraints;
- masthead and primary Header geometry;
- desktop primary navigation source and editable ownership;
- Search / Saved / Bag utilities;
- Shop mega-menu markup/data source and presentation;
- hover/focus/open/close behavior;
- tablet/mobile breakpoint logic;
- mobile drawer structure and interaction;
- current duplicate/legacy Header CSS and JS risk.

If these files reveal an external template-part, shortcode, menu walker, or separate asset that materially owns part of Header/Mega Menu behavior, request that exact additional file only after this first audit instead of asking the user for a broad theme dump.

## Existing visual evidence

The user has already supplied fresh desktop screenshots showing:
- Header width feels constrained relative to the rest of the site;
- Shop hover mega menu appears as a large rounded floating white panel that does not visually belong to the current Spatial Flow system;
- navigation entry completeness/maturity is uncertain.

These screenshots are sufficient for initial visual diagnosis and do not need to be repeated before source ownership is mapped.

## Current stop point

```text
WAITING FOR FRESH CURRENT-SERVER HEADER SOURCE BATCH
```

## Exact next action

User supplies the four files above.
Then perform a read-only source audit first: ownership map + width diagnosis + IA inventory + mega-menu architecture + desktop/tablet/mobile interaction inventory.
No code edit instructions are authorized before that audit conclusion is recorded.
