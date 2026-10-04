# Final Production Wishlist — H03 Six-Item Screenshot Differential Audit

Date: 2026-10-04
Project: Spatial Flow V2 / Project 2

## Evidence

User supplied two full-page screenshots with six items each:
- Local production Wishlist H03
- static Wishlist Harmonized authority

## Verdict

The user is correct: there are still visible non-trivial fine differences.

However, the remaining differences are no longer primarily the item spread geometry.

### A. Wishlist item geometry — close / essentially aligned
- six-item sequence and left/right alternation align;
- first-item large editorial spread aligns structurally;
- subsequent media/copy alternating spreads align;
- separator cadence after the first item is visually close;
- item image boxes / copy columns / action rows are in the correct ownership model.

### B. Remaining Wishlist-body differences
1. First-fold vertical position is still too low in Local.
   - Local hero/toolbar/index block consumes visibly more vertical space before the first image.
   - This is independent of product photography.
   - Current H03 resets `.ast-container`, `#primary`, `.content-area`, and entry-content margin, but does not explicitly neutralize Wishlist `.site-main` / `article.ast-article-single` frame padding/margins.
   - Astra frame ownership is therefore a likely remaining source of the top offset and must be handled as a runtime wrapper issue, not by changing item geometry.

2. Palette remains intentionally different.
   - static authority uses the deeper Edition III/Harmonized paper/clay/rule palette;
   - production still uses the lighter current shared palette;
   - user explicitly deferred palette harmonization until broader mapping is complete.

3. Real product photography/content materially changes perceived rhythm.
   - six bracelet products are visually more repetitive and use mixed ecommerce photography;
   - static authority uses six category-diverse, visually coordinated editorial assets.

### C. Full-page differences that are NOT Wishlist-body defects
- production Header/Footer are the previously accepted/protected global shell;
- the static authority file contains its own mock/reference Header/Footer;
- therefore full-page 1:1 comparison must distinguish:
  - Wishlist body authority = static Wishlist body;
  - global shell authority = accepted production Header/Footer.
- Do not reopen Header/Footer merely to mimic the static Wishlist file.

## Correct next action

Do one bounded Wishlist runtime frame correction:
- neutralize Wishlist `.site-main` / `article.ast-article-single` wrapper spacing;
- preserve H03 item geometry;
- preserve Header/Footer;
- preserve deferred palette.

Then compare the first fold and body again against the static authority.

Status:
H03 ITEM SYSTEM = STRUCTURALLY ALIGNED.
FIRST-FOLD FRAME = REOPENED.
PALETTE = DEFERRED.
GLOBAL HEADER/FOOTER = PROTECTED.