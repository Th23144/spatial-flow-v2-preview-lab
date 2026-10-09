# Care Guide 07 — Final Reskin Closure Gate (Image Owner Completion)

Date: 2026-10-09
Project: Spatial Flow V2 / 项目二换皮工程

## Scope boundary
The user explicitly separates **1:1 reskin** from future **Content Production**. Do not delay this page's reskin gate for final care copy, product photography, scientific material review, or content editing. These are deferred to a separate phase. Do not reopen protected Header / Footer or completed pages.

## Current visual / functional evidence
- Desktop Care Guide 07 and expanded Jewelry / Crystal Objects / Home Pieces states have been inspected using actual local WordPress screenshots, with mobile captures for all three categories.
- Mobile Hero and category headline balancing was corrected in the user-returned stylesheet `spatial-flow(20261009-080756).css`.
- FAQ mobile hero optimization was accepted separately; do not modify it.
- Baseline for this gate:
  - `functions(20261008-042700).php` — 2.7.104
  - `care-guide(2).php`
  - `spatial-flow(20261009-080756).css` — keep unchanged in this batch.
- Static visual authority: branch `temp-care-guide-07-authority-fix-01`, `temp-preview/Spatial-Flow-Care-Guide-Illustrated-Teaching-07-Mobile-Optimized.html`.

## Outstanding reskin issue
The nine teaching images do not have nine independent backend slots:
- Jewelry steps 1/2/3 share `image_jewelry`;
- Crystal steps 1/2 share `image_crystal` while step 3 currently falls back to Home image;
- Home steps 1/2/3 already use `image_home`, `image_home_context`, and `image_home_surface`.
Five existing image fields must remain unchanged, and the legacy `care_image_*` fallback contract must be preserved.

## Prepared 2.7.105 candidate (NOT APPLIED)
- functions.php: version 2.7.104 -> 2.7.105; add four independent `WP_Customize_Image_Control` fields in the existing Care Guide 07 Customizer section:
  - `sf_care07_image_jewelry_cleaning`
  - `sf_care07_image_jewelry_storage`
  - `sf_care07_image_crystal_cleaning`
  - `sf_care07_image_crystal_placement`
- care-guide.php: route only the four relevant teaching image slots through these new optional values. When unset, fall back to **their current exact image**; Crystal step 3 keeps the former Home image as the initial fallback, but now has its own independent owner.
- Existing nine steps, titles, body copy, layout, dynamic category data, links, CSS and JavaScript must remain unchanged. No new default product images or copy are injected.

## Preflight evidence
- Anchor matching: one functions controls block, one version token, four unique template anchors.
- PHP lint: both candidate files PASS.
- Customizer image fields: 9 distinct slots total, existing image fields retained.
- Rendered template mock: 3 categories * 3 steps; old images remain when new fields unset, four distinct new image URLs rendered when provided.
- Browser simulation on current CSS at 320 / 360 / 390 / 430px: no document-width overflow; Home selection produces one active panel, three steps and correct hash; Change Category restores empty state; no uncaught JavaScript error. This is simulated HTML, NOT actual WordPress runtime validation.
- CSS intentionally unchanged.

## Next gates before Completed 1:1
1. Provide exact manual anchor replacements in chat, no downloadable code; user applies both PHP files together.
2. User returns changed files; source diff + PHP lint + control mapping verification.
3. User checks actual local WordPress, particularly opening the 9 image controls in Customizer, category switching, direct hash reload, mobile 320/360 and desktop no regression.
4. Explicit acceptance from user, then record **Completed 1:1**. At present status remains **Not done**.

Deferred separately to Content Production: replace reused placeholder image assets, verify product-specific material care wording, remove prototype-stage explanatory copy, and select final product media.


## Returned-file Source Gate — 2026-10-09

Files received:
- `functions(20261009-084852).php` — SHA-256 `b03e7097e892b88955ba16807cc9cb7ac87e9646677d21bd13dbceaa405e3568`
- `care-guide(3).php` — SHA-256 `210c7b2da30c785048657dda9a604dc05342adedf1d8dea1dee6b98c3e5f5ae3`

Source gate PASS:
- PHP CLI lint PASS for both complete uploaded files.
- Exact old-to-new diff: `functions.php` only 2 changed hunks (version + image controls); `care-guide.php` only 4 changed hunks (the intended image routing).
- Care Guide Customizer has exactly 9 unique image keys, with all five originals preserved.
- `spatial_flow_care07_setting` converts empty saved values to supplied fallbacks; image control uses `esc_url_raw`; template `esc_url` remains.
- Isolated PHP template-render harness using WP helper stubs: `3 categories × 3 teaching steps` on three scenarios (new fields unset, blank, individually set). In blank/unset scenarios all images retain their former URLs; when all new controls receive different URLs the 9 teaching images are distinct. All render tests PASS, no PHP warnings.
- Render shell after `get_header()` is byte-identical to previous template.
- CSS unchanged, as intended.

**Status: SOURCE PASS, WordPress runtime still pending.** Do not declare Completed 1:1 before actual Customizer and on-page regression checks.

Expected runtime checks:
1. User has deployed these contents under existing theme paths, i.e. `functions.php` and `care-guide.php`, not newly created `(3)` files.
2. Customizer Care Guide 07 section shows nine unique image choices; test an optional new slot with a temporary existing media image, save, confirm only that teaching image changes, then clear it and restore prior fallback.
3. Three category click states and direct hashes `#jewelry`, `#crystal-objects`, `#home-pieces`; `Change category` resets to empty state; support links route appropriately.
4. Desktop and 390px visual regression; optional 360px and 320px narrow-screen overflow check. Existing screenshots have already covered the original visual designs; avoid repeatedly asking for unchanged screenshot states.
5. Record user acceptance and explicitly close Care Guide 07 only after runtime PASS.

Final image assets, scientifically qualified material-care text and prototype copy replacement are intentionally deferred to Content Production, not this reskin closure gate.


## FINAL USER ACCEPTANCE / CLOSED — 2026-10-09

**Official Project 2 status: `Care Guide 07 — Completed 1:1`.**

Evidence:
- User returned corrected `functions.php` and `care-guide.php` for 2.7.105; full source gate passed as recorded above.
- New local WordPress screenshot `image(20261009-085832).png` shows Jewelry / Gentle Cleaning displaying a newly selected standalone test image while Jewelry / Everyday Care and Storage & Impact continue showing their fallback images. This visually corroborates the independent Customizer image slot is functioning in the actual local environment.
- Previously reviewed: Care Guide desktop composition; mobile Jewelry, Crystal Objects, Home Pieces; balanced two-line mobile Hero and category heading; category layouts; help/support and footer consistency.
- The user explicitly replied “通过” (PASS) to the last runtime/visual acceptance step. Accept user confirmation as closing the current 1:1 reskin work; the screenshot alone does not independently prove all remaining interactions or 320px behavior.

Frozen production baseline at closure:
- `SPATIAL_FLOW_CHILD_VERSION = 2.7.105`;
- `functions(20261009-084852).php` applied as theme `functions.php`;
- `care-guide(3).php` applied as existing `care-guide.php`;
- stylesheet `spatial-flow(20261009-080756).css` (unchanged by 2.7.105 image-owner patch).

**Reskin closed. Do not keep the page open for future content production.**
Deferred to separate Content Production: nine final teaching image assets, product-specific care copy and revision of prototype wording. Do not interpret those tasks as missing 1:1 mapping.

Next locked Project 2 page: **About Us** (the earlier deferred About Us design), then local WordPress Home replacement by Shop-light-home, then independent brand/site total homepage, then final cross-page audit. DIY-light-home excluded.
