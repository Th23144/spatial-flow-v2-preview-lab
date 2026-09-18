# Shop V2 — Mobile review START + frozen feature temporary visual reset

Date: 2026-09-18

## User decision

Begin the non-frozen Shop mobile review.

The future Custom Studio / DIY signature feature remains deferred and frozen, but the current desktop placeholder/legacy Editor's Pick block should temporarily return to the earlier centered adaptive presentation because it is visually cleaner while the feature is frozen.

## Frozen feature temporary visual target

Do not redesign semantics or data ownership.
Do not add Studio/DIY functionality yet.
Only restore the previously accepted centered adaptive right-column composition:
- right copy uses flex column;
- vertical content is centered;
- footer remains in normal flow with a fixed editorial gap;
- no full-height space-between distribution;
- no bottom anchoring;
- preserve current 5fr / 7fr desktop columns and current page width.

Source reference for the earlier centered variant was the 2026-09-17 21:24 CSS state.

## Mobile review — first-pass findings from current runtime screenshot

Protected/healthy:
- mobile Header/Footer remain intact;
- Hero title is now the intended two-line composition;
- product archive correctly uses 2 columns on phone;
- 12 products per page gives 6 mobile rows;
- pagination is functionally present;
- Closing Note is the only bottom contact/conversion block;
- frozen Editor's Pick is intentionally hidden on mobile for the current temporary state.

Open for detailed mobile review:
- filter toolbar is a horizontal-scroll strip and visually reads as clipped/truncated at the right edge; interaction and discoverability need validation;
- sorting row width/density needs strict review at narrow widths;
- product-card vertical rhythm, text density and editorial-note behavior need comparison against the mobile reference;
- pagination density/edge spacing needs mobile-specific review after the desktop logic fix;
- Closing Note typography and spacing should be checked against the mobile reference, while preserving the now-working CTA owner.

## Status

MOBILE SHOP REVIEW STARTED.
FROZEN FEATURE TEMP VISUAL RESET READY.
NO DIY FEATURE IMPLEMENTATION.