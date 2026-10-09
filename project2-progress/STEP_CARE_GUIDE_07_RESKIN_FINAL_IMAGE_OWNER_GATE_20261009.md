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
