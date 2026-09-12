# Project 2 · Header / Footer product-quality reframe · 2026-09-12

## User correction

Before starting the Main-site Header re-audit, the user clarified that Header / Footer are **not blocked because strict literal 1:1 is unfinished**.

The remaining work is primarily product-quality / maturity work:

- the Header width / horizontal composition still feels constrained in the same way the user dislikes on some other pages;
- the Shop hover mega-menu is visually disconnected from the site and reads as a large generic white floating panel rather than a mature Spatial Flow navigation surface;
- navigation / entry-point coverage may still be incomplete or immature;
- Footer has the same general issue class: not necessarily a literal 1:1 miss, but remaining details, information architecture, entry coverage and finish are not yet satisfactory.

## Acceptance rule for this phase

Do **not** force Header / Footer back into literal static-reference duplication by default.

Audit them as production global-shell components with these priorities:

1. mature full-width / site-wide composition appropriate to the current design system;
2. clear relationship between masthead strip, primary header, brand, navigation and utilities;
3. high-quality mega-menu / hover / open states that visually belong to Spatial Flow;
4. complete and coherent navigation entry architecture;
5. desktop / tablet / mobile behavior that feels intentional rather than patched;
6. preserve backend editability, WordPress menu ownership, WooCommerce bag/account/search/wishlist authority and existing working interactions;
7. visual reference files remain useful evidence, but they are not a literal hard contract where a better current production solution is explicitly chosen.

## Fresh screenshot evidence supplied by user

Current desktop screenshots show:

- large horizontal empty/header shell feeling created by the current constrained inner layout;
- centered `SPATIAL FLOW` wordmark with left nav and right utilities, but the overall line does not use the viewport confidently;
- Shop hover opens a very large rounded white mega-menu card over page content;
- mega-menu columns are structurally useful but the surface, scale, radius, spacing and floating/modal-like treatment do not visually integrate with the editorial site language;
- Shop hover trigger uses a boxed active/hover treatment that also needs review;
- current mega-menu categories include Classification, Color, Five Elements Energy, Purpose and Zodiac Sign, but navigation completeness / IA maturity must be audited rather than assumed.

## Status

```text
Main-site Header: Not done
Main-site Footer: Not done
Reason: product-quality / maturity / IA / interaction refinement, not simply unfinished literal 1:1 duplication
```

## Next action

Perform a fresh Header audit before editing:

- source ownership map;
- current desktop/tablet/mobile geometry;
- masthead + header width model;
- primary navigation IA / missing entry points;
- mega-menu information architecture and interaction states;
- search / saved / bag behavior and ownership;
- mobile menu behavior;
- identify what should be preserved vs redesigned.

Record findings before issuing code changes.
