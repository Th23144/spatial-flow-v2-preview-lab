# Shop V2 — Closing Note Typography V4 user accepted

Date: 2026-09-19  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User decision

The user explicitly accepted the external Closing Note Typography V4 visual study with:

`就这样`

This closes the visual-direction selection for the current Closing Note typography refinement.

## Accepted V4 direction

Preserve:
- current open two-column Closing Note structure;
- current overall Shop width exception;
- existing backend-editable Closing Note content owners;
- existing CTA text and URL ownership;
- current mobile Shop closure unless a concrete regression appears;
- no card shell, no background panel, no large CTA redesign.

Accepted visual refinements:
- restore the subtle Closing Note kicker as a small editorial label;
- separate Intro / Emphasis / Body into distinct typographic hierarchy;
- keep Emphasis as the main serif italic visual anchor;
- widen the left emphasis/body measures so sentences do not wrap into unnecessary vertical stacks;
- retain the restrained right-side rule/anchor;
- position the right copy + CTA group close to the outer side but pull it slightly back toward center relative to V3;
- V4 study used an approximately 20px inward correction from the V3 outer-edge position.

## Rejected / superseded directions

Do not return to:
- 7fr / 5fr structural redesign;
- Quiet Center;
- Editorial Arc;
- Private Concierge;
- remove-section direction;
- Micro Bar;
- giant centered CTA;
- continued 80 / 96 / 120px offset tuning;
- narrow left headline measures that create excessive multi-line stacking.

## Production state

V4 is a visual study acceptance only.

No production PHP/CSS was changed by the study.

Before production implementation:
1. obtain/reconfirm the latest current local `woocommerce/archive-product.php`;
2. obtain/reconfirm the latest current local `assets/css/spatial-flow.css`;
3. source-audit exact current Closing Note markup, current desktop right-offset experiment, mobile owners, file size/line/SHA/syntax;
4. issue bounded anchored replacements;
5. validate returned source before runtime review.

`functions.php` is not expected to require a change because the necessary Closing Note Customizer owners already exist, unless the fresh source audit finds otherwise.

## Status

VISUAL DIRECTION: USER ACCEPTED / V4 LOCKED  
PRODUCTION IMPLEMENTATION: NOT YET APPLIED

Exact next action:
fresh current-source audit of `archive-product.php` + `spatial-flow.css`, then prepare the bounded production replacement.
