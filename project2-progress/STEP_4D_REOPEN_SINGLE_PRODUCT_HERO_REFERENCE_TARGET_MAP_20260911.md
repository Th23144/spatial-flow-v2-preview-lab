# Project 2 · Step 4D-REOPEN · Single Product Hero / Summary reference target map · 2026-09-11

## Basis
Reference: `preview/spatial-flow-product-v1.html`
Current historical/live owners already present in returned source lineage:
- `woocommerce/single-product.php`
- `assets/css/spatial-flow.css`
- `functions.php`

No edit is authorized by this record. This is the fresh comparison checklist for the top-of-page re-audit.

## Static reference desktop target
Main product block:
- max width 1440px;
- desktop horizontal gutter 56px;
- top/bottom padding 56px / 96px;
- 2-column grid `1.15fr 1fr`;
- 80px column gap;
- bottom divider.

Gallery:
- main image 4:5;
- 4 thumbnails in one row;
- 10px thumbnail gap;
- 12px gap above thumbs;
- active thumb outline behavior;
- reference has small image badge and zoom hint; live implementation must be compared rather than assumed accepted.

Summary hierarchy:
- mono editorial meta line above title;
- large serif product title, light weight;
- italic serif subtitle below title when truthful data exists;
- serif price treatment;
- shipping note below price when truthful data exists;
- Placement Suggestion: open grey/editorial block with left bluestone rule;
- short description below Placement Suggestion;
- product variations rendered as flat editorial choices, not a white card;
- quantity + Add to Cart in one horizontal row on desktop;
- Wishlist / Share appear in the static reference as secondary controls, but current project remediation plan treats them as later candidate controls rather than automatically accepted requirements;
- trust strip is a three-column open information strip.

Reference product-option geometry:
- variation choice border: thin paper-line treatment, square corners;
- quantity: 3 × 48px cells, 56px tall;
- Add to Cart: 56px tall, square corners, dark ink background.

## Current known source intent
The current CSS lineage already contains desktop 1:1-targeted rules for:
- `sf-product-detail-grid` => `1.15fr 1fr`, 80px gap;
- gallery main => 4:5;
- thumbnails => 4 columns, 10px gap, 12px top spacing;
- summary top padding 8px;
- title => `clamp(48px, 5vw, 76px)`, line-height 1;
- price => 36px;
- Placement Suggestion spacing;
- excerpt 15px / 1.78;
- flat variation choices;
- quantity 144px total width and 56px height;
- Add to Cart 56px minimum height.

This does not count as visual acceptance. Fresh desktop and 390px screenshots are still required because earlier historical PASS cannot substitute for current-live evidence.

## Fresh evidence required from user
Desktop screenshot(s), preferably 1920px browser width, must show continuously:
1. breadcrumb/top of product content;
2. full main gallery including thumbnails;
3. entire summary from editorial meta/title through trust strip;
4. Product Attributes top edge if visible immediately below.

390px mobile screenshot(s) must show the same Hero / Summary region from the first gallery image through the end of trust strip / start of Product Attributes.

For variable products, the screenshot should show the normal initial/usable variation state and not an artificial browser inspector state.

## Acceptance rule
Fresh screenshots will be compared against the reference for:
- container geometry;
- gallery proportions and thumbnail behavior;
- title/subtitle/price hierarchy;
- placement and short-description rhythm;
- option controls and cart row;
- absence of unwanted white-card / picture-frame surfaces;
- trust-strip structure;
- mobile stacking, spacing, clipping/overflow and control usability.

If a mismatch is found, record FAIL before giving any source edit.

## Stop point
HERO / SUMMARY TARGET MAP COMPLETE — FRESH DESKTOP + 390PX LIVE SCREENSHOTS PENDING
