# Step 4G-A — Home current-live strict audit START

Date: 2026-09-19
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

Shop ordinary/non-frozen scope is closed. The user instructed Project 2 to begin the next mainline task: Home whole-page strict 1:1 re-audit.

## Canonical reference

`preview/spatial-flow-v1.html`

Reference body sections identified:
1. Table-of-contents strip
2. Section 01 · Cover Story / Hero
3. Section 02 · In This Issue / Journal cards
4. Section 03 · Manifesto spread
5. Section 04 · The Index / featured products
6. Section 05 · Where They Live / room placements
7. The Dispatch / newsletter
8. shared Footer (already separately closed; do not reopen without concrete regression)

Shared main Header/Footer remain protected closed surfaces during the Home body audit.

## Existing production ownership evidence found

File Library contains current/later `functions.php` revisions with the existing:
- `spatial_flow_home_mod()` theme-mod owner;
- `spatial_flow_home_featured_products()` dynamic WooCommerce product owner;
- `spatial_flow_home_trust_items()`;
- Main Homepage Editable Controls block using `sf_home_*` Customizer fields.

Therefore Home must not be rebuilt as hardcoded static copy. Existing backend ownership must be mapped and preserved.

## Current evidence required

For visual current-vs-reference audit:
- one fresh full-page desktop Home screenshot;
- one fresh full-page phone Home screenshot around 390px width.

For source/ownership audit:
- identify and inspect the current template actually owning `/`;
- inspect current latest Home-related CSS;
- inspect current latest Home-related functions/Customizer owners;
- inspect any Home JS/template-part/shortcode owner if present.

Do not edit production source before this ownership audit is complete.

## Status

HOME STEP 4G-A STARTED / AWAITING FRESH LIVE SCREENSHOTS + CURRENT TEMPLATE OWNER CONFIRMATION.
