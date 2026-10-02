# Final Production Reskin — Batch 1 Wishlist Mapping Start

Date: 2026-10-02
Project: Spatial Flow V2 / Project 2

## Source baseline

Fresh uploaded child theme:
- version: 2.7.50
- ZIP SHA256: `73c73de87723a64a1845807f54a30a7afdb0e83668066384ffded3d0a20e3ece`

## Accepted visual authority

`main/preview/spatial-flow-wishlist-harmonized-v1.html`

Locked characteristics:
- 1480 body / 1720 global shell;
- editorial intro + right-side quiet note;
- compact toolbar;
- Collection Index;
- dominant first saved-object spread;
- alternating later saved-object spreads;
- large negative space;
- Cormorant / Inter / restrained JetBrains Mono roles;
- sage editorial emphasis;
- real YITH / Woo data and actions in production.

## Production owner

- YITH Wishlist remains state owner.
- WooCommerce remains product / price / stock / cart owner.
- `functions.php` Step 5M remains shell owner.
- `assets/css/spatial-flow.css` Wishlist region remains presentation owner.
- `assets/js/spatial-flow.js` may add only index / progressive enhancement behavior.

## Mapping strategy

Replace the accumulated older Wishlist visual stack canonically rather than append another patch layer.

Production mapping will:
- simplify Step 5M shell toward accepted intro / toolbar / Collection Index / editorial list;
- keep original live YITH output intact inside the shell;
- transform live YITH rows into editorial spreads through scoped CSS;
- build Collection Index progressively from the live rendered row titles;
- preserve remove / product / stock / add-to-cart actions;
- preserve empty state;
- preserve Customizer editability for visible page copy.

## Status

WISHLIST PRODUCTION MAPPING = ACTIVE.
NO USER RUNTIME ACCEPTANCE YET.
