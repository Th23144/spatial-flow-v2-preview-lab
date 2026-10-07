# Services Accepted + FAQ / Help Wishlist-led Visual Study 01

Date: 2026-09-24
Project: Spatial Flow V2 / 项目二换皮工程

## Services user decision

The user stated that the Services page is broadly fine.

Treat:
SERVICES WISHLIST-LED 01 = USER VISUALLY ACCEPTED FOR THIS DESIGN BATCH.

No production WordPress mapping has been performed.

## FAQ / Help temporary artifact

Branch:
`temp-faq-wishlist-led-01`

Artifact:
`temp-preview/Spatial-Flow-FAQ-Wishlist-Led-01.html`

## Existing functional structure retained

The old Project-2 FAQ page was read only to preserve its real support roles:
- Orders
- Shipping
- Returns
- Products
- Services
- Contact support route
- Track Order route

The old visual styling was not inherited.

## Design system applied

- Header / Footer = 1720px shell
- page body = 1480px + internal padding
- Cormorant Garamond = editorial headings
- Inter = body / functional copy
- JetBrains Mono = restrained metadata
- sage italic emphasis = #4A5D5A
- FAQ answers use native `details / summary` accordions rather than heavy cards
- left category index retains a quiet editorial structure
- dark editorial footer + trust rail
- responsive rules at 1040px / 600px

## Static verification

PASS:
- HTML structure balanced
- CSS braces balanced
- JavaScript syntax valid
- all internal category anchors resolve
- 1480 / 1720 hierarchy retained
- 5 FAQ categories
- 15 FAQ items
- native accordion semantics
- green editorial emphasis present
- footer trust rail present
- no fixed page-level widths or min-widths above 390px found

## Current gate

SERVICES = USER VISUALLY ACCEPTED.
FAQ / HELP WISHLIST-LED 01 = READY FOR USER VISUAL REVIEW.


## Production Services source audit + one-shot mapping batch — 2026-10-07

Fresh audit against the current returned production files and the accepted `temp-services-wishlist-led-01` authority found:
- `/services/` is already a native theme-owned route (`spatial_flow_services_native_template()` at template_redirect priority 21), not an Elementor-dependent presentation;
- visible Services copy is Customizer/theme-mod owned through `sf_services_*` and must remain backend-editable;
- the current production Step 5G presentation is an older rounded/card-heavy design and does not match the user-accepted Wishlist-led 01 static authority;
- the accepted authority uses the locked 1480px editorial body, Cormorant/Inter/JetBrains type system, row-based service index, four-step method list, editorial request form, and text-column service boundaries;
- no booking engine, payment flow, quote system, subscription or hidden commerce may be introduced.

Functional-owner decision:
- keep the native `/services/` route and Customizer ownership;
- keep the existing native Product Guidance request backend (`spatial_flow_product_guidance_submit`, private `sf_product_guidance` entries) as the form owner;
- the Services request form may visually expose Name / Email / Service / Context, but Name + Service + Context are composed into the existing `interest` payload and `capture_type=services`; no new storage schema or service system is created.

Prepared one-shot candidate:
- version 2.7.95 -> 2.7.96;
- replace the complete self-contained Step 5G Services PHP block only;
- replace the complete self-contained Step 5G Services CSS block only;
- current real global Header/Footer remain untouched;
- preserved existing stored `sf_services_*` theme mods where keys still apply; no settings are deleted/reset.

Candidate preflight:
- full `functions.php` PHP lint PASS;
- Services request inline JS `node --check` PASS;
- CSS braces 3575/3575;
- CSS comments 258/258;
- tinycss2 top-level parse errors 0;
- diff outside Step 5G = only version bump; no unrelated PHP/CSS drift.

Status:
**SERVICES WISHLIST-LED 01 PRODUCTION MAPPING 2.7.96 READY / USER MANUAL APPLY + RETURNED-FILE SOURCE GATE PENDING**


## Services 2.7.96 returned-file Source Gate — 2026-10-07

Returned files:
- functions(20261007-093714).php — version 2.7.96, 722,724 bytes / 15,143 file lines, SHA256 556b1e606edc90fef0e04954f2b8d1764e88487eddc676f0a630c14aa2f963c8;
- spatial-flow(20261007-093714).css — 637,804 bytes / 23,855 file lines, SHA256 3f206057f30bd4d2a3b09f046b697a28102d41609178341ba0624fb2dc284df5.

Validation:
- php -l PASS;
- child version 2.7.96 and enqueue cache version aligned;
- Step 5G PHP START/END markers exactly 1/1;
- Step 5G CSS START/END markers exactly 1/1;
- new Services renderer outputs .sf-services-native.sf-services-v2 and all v2 structural classes;
- old Services render selectors (.sf-services-hero / .sf-services-card / .sf-services-visual) are absent from current PHP and CSS;
- Services Customizer now owns toolbar, service rows/meta/CTA, method, request form copy, boundary copy, labels/placeholders and URLs through sf_services_* theme mods;
- request form reuses existing spatial_flow_product_guidance_submit owner, posts capture_type=services and composes Name / Service / Context into existing interest payload;
- existing Product Guidance handler accepts sanitized capture_type without restricting services and stores it in _sf_product_guidance_capture_type;
- Services inline JS node --check PASS;
- CSS braces 3575/3575, comments 258/258, tinycss2 errors 0;
- CSS is byte-identical to the already accepted 09:27:46 Services CSS;
- diff against 09:27:46 PHP outside version bump + Step 5G is byte-identical after normalization: no unrelated PHP drift.

Verdict:
**SERVICES 2.7.96 SOURCE GATE PASS / BACKEND EDITABILITY OWNER PASS / FRONTEND RUNTIME VISUAL GATE READY**


## Services first frontend runtime audit + 2.7.97 correction batch — 2026-10-07

User supplied desktop + mobile screenshots after 2.7.96 source pass.

Visual audit verdict: FAIL (small-scope correction only; no redesign).
Confirmed defects:
1. submit CTA has unstable text visibility on the dark button (text can appear hidden until hover/state change);
2. trailing arrow glyphs saved in CTA labels render as blue emoji-style icons on some platforms;
3. the preserved legacy hero title `Find The Crystal That Fits Your Story.` is visually too tall on desktop and especially mobile under the new editorial shell;
4. mobile toolbar wraps awkwardly, splitting the two actions into an uneven vertical arrangement;
5. mobile service-row meta + action alignment is loose.

Non-blocking areas accepted in this audit:
- overall 1480px desktop shell;
- service index structure;
- four-step method section;
- request form field hierarchy;
- service-boundary section;
- footer transition.

Prepared 2.7.97 correction batch:
- version 2.7.96 -> 2.7.97;
- add a Services-only action-label normalizer that strips trailing Unicode/emoji arrow glyphs at render time while leaving saved Customizer values intact;
- route service-row CTA and submit-button labels through that helper;
- harden the submit button with scoped, high-specificity text/background/font rules so Astra/global button rules cannot hide its label;
- reduce desktop hero title footprint and widen its readable measure;
- mobile hero title reduced to 36–40px with a wider measure;
- mobile toolbar normalized into label row + two balanced actions;
- mobile row meta/action alignment tightened;
- desktop form action row changed to a deterministic two-column grid; mobile returns to one-column/full-width CTA.

Backend editability remains intact:
- no theme-mod is overwritten or deleted;
- hero title remains the same backend-editable value; only its presentation footprint changes;
- CTA arrow cleanup is presentation normalization only.

Candidate preflight:
- PHP lint PASS;
- CSS braces 3578/3578;
- CSS comments 258/258;
- tinycss2 errors 0.

Status:
**SERVICES 2.7.97 TARGETED VISUAL CORRECTION READY / MANUAL APPLY + RETURNED-FILE SOURCE GATE PENDING**


## Services 2.7.97 returned-file Source Gate — 2026-10-07

Returned files:
- `functions(20261007-095631).php` — version 2.7.97, 723,138 bytes / 15,154 file lines, SHA256 `07da652cda813342e6d4bbf700368b71fba691312c5f58d9690af65839a6dff6`;
- `spatial-flow(20261007-095631).css` — 639,182 bytes / 23,927 file lines, SHA256 `ffad45c0d1378c7e5d8b76f04cb7fa45c04a12f2cfc77bb899a3e33100b99013`.

Validation:
- `php -l` PASS;
- version / enqueue cache chain correctly moved to 2.7.97;
- diff vs accepted 2.7.96 is exactly the planned targeted Services correction set:
  - version bump;
  - new `spatial_flow_services_action_text()` presentation helper;
  - service-row CTA and request-submit labels routed through the helper;
  - desktop hero title footprint reduced/widened;
  - submit CTA hardened against global/Astra button cascade;
  - mobile hero title reduced/widened;
  - mobile toolbar normalized to one label row + two action columns;
  - mobile service-row meta/action alignment tightened;
  - form action layout made deterministic desktop/mobile;
- no unrelated PHP/CSS drift;
- CSS braces 3578/3578;
- CSS comments 258/258;
- tinycss2 errors 0;
- backend editability preserved: saved `sf_services_*` theme mods are untouched; CTA arrow stripping occurs only at render time.

Verdict:
**SERVICES 2.7.97 SOURCE GATE PASS / BACKEND OWNER PASS / FRONTEND RE-VERIFICATION READY**

Next runtime gate:
- desktop full-page Services capture;
- mobile full-page Services capture;
- focus on submit text visibility, removal of blue emoji arrows, hero title footprint, mobile toolbar, and row-action alignment.


## Services 2.7.97 desktop + mobile runtime visual gate — 2026-10-07

User supplied final desktop and mobile full-page captures after the targeted 2.7.97 correction.

Confirmed fixed:
- submit CTA label is stably visible on the dark button;
- blue emoji-style trailing arrows are gone from service-row CTAs and submit CTA;
- desktop hero title footprint is reduced and now reads as a controlled two-line editorial title;
- mobile hero title is reduced/widened and no longer dominates the first screen;
- mobile toolbar now resolves into a clear label row plus balanced Browse Services / Send a Brief actions;
- mobile service-row metadata/action alignment is materially cleaner;
- desktop/mobile form action layout is stable;
- no regression is visible in service index, method, request form, boundaries, header or footer.

One non-code/content-owner observation:
- the process eyebrow currently renders as a tiny dot because a previously saved `sf_services_process_eyebrow` theme-mod value is being preserved; the accepted static authority used `Method`. This is not a layout/runtime failure and can be corrected through the existing Services Customizer without code or owner migration.

Verdict:
**SERVICES 2.7.97 DESKTOP VISUAL PASS**
**SERVICES 2.7.97 MOBILE VISUAL PASS**
**SERVICES BACKEND OWNER / EDITABILITY PASS**

Status:
**SERVICES FINAL PRODUCTION MAPPING COMPLETE**

Next locked page:
**FAQ / Help**


## FAQ / Help production source audit + H04 mapping batch — 2026-10-07

Fresh audit used:
- current returned `functions(20261007-095631).php` / `spatial-flow(20261007-095631).css` (2.7.97);
- accepted branch `temp-faq-wishlist-led-01`;
- accepted artifact `temp-preview/Spatial-Flow-FAQ-Wishlist-Led-01.html` (Wishlist-led 04 / typography-corrected authority).

Owner audit:
- `/faq/` is already a native theme-owned route through `spatial_flow_faq_help_native_template()` at template_redirect priority 24;
- current visible FAQ copy is Customizer/theme-mod owned through `sf_faq_*` and must remain backend-editable;
- current production Step 5K visual owner is the older rounded/card-heavy implementation with Quick Paths, dark sticky card, prep cards and dark CTA panel;
- current CSS also contains three accumulated FAQ SAFE patches (sticky/gap/prep-card fixes), which are superseded by a canonical H04 mapping and should not remain as active FAQ presentation owners;
- SAFE 2 also contains a Refund top-gap guard; that Refund portion is preserved unchanged in the prepared replacement.

Accepted FAQ authority:
- 1480px body + internal clamp padding;
- editorial intro + restrained toolbar;
- 230px category index + 900px reading column;
- five FAQ sections / fifteen FAQ items using native details/summary;
- Cormorant / Inter / JetBrains Mono hierarchy;
- sage last-word emphasis;
- final two-route help strip;
- responsive collapse at 1040px and mobile treatment at 600px;
- current real Header/Footer remain authoritative and are not replaced by the static artifact header/footer.

Prepared 2.7.98 one-shot batch:
- version 2.7.97 -> 2.7.98;
- replace complete Step 5K PHP block with H04 native renderer while retaining /faq/ route ownership and sf_faq_* theme-mod ownership;
- all visible H04 copy / FAQ questions / answers / route links remain editable through the existing FAQ Customizer section;
- existing saved sf_faq_* theme mods are not deleted or overwritten; obsolete old visual-only settings simply cease to render;
- add missing third FAQ defaults so the accepted five-category / fifteen-item authority is complete when no saved override exists;
- strip trailing emoji/Unicode arrows at render time for help-route CTAs and draw a monochrome text-presentation arrow in CSS;
- replace the contiguous old Step 5K CSS + FAQ SAFE2/SAFE3/SAFE4 region with one canonical H04 CSS owner;
- preserve the existing Refund / Returns top-gap guard from SAFE2 unchanged as a separate Refund-only guard;
- no WooCommerce/YITH/Policy/Services/Header/Footer owner changes.

Candidate preflight:
- PHP lint PASS;
- CSS braces 3564/3564;
- CSS comments 246/246;
- tinycss2 errors 0;
- PHP outside version bump + Step 5K is byte-identical after normalization;
- CSS outside the Step5K-through-SAFE4 replacement range is byte-identical after normalization.

Status:
**FAQ / HELP H04 PRODUCTION MAPPING 2.7.98 READY / USER MANUAL APPLY + RETURNED-FILE SOURCE GATE PENDING**


## FAQ / Help 2.7.98 returned-file Source Gate — HOLD for one compatibility correction — 2026-10-07

Returned files:
- `functions(20261007-102010).php` — version 2.7.98, 727,577 bytes / 15,705 file lines, SHA256 `ed01860f0e13565d53c9c75c7f21c8e03d851399e36af0782f595292c36e9311`;
- `spatial-flow(20261007-102010).css` — 634,637 bytes / 24,154 physical lines (24,153 Files line index), SHA256 `bfae7d1a7ed004a52e437682b247161d19e759c2609df6c5340fa387d1f22ad5`.

Passed checks:
- PHP lint PASS;
- version 2.7.98 correctly applied;
- Step 5K PHP START/END exactly 1/1;
- H04 FAQ renderer / Customizer / route hooks present once and at intended priorities;
- 15 FAQ default question slots present;
- old card-era FAQ render classes are gone from PHP;
- old FAQ SAFE2 / SAFE3 / SAFE4 blocks removed from the replaced CSS region;
- Refund top-gap guard preserved byte-semantically from the old SAFE2 block;
- CSS braces 3564/3564, comments 246/246, tinycss2 errors 0;
- PHP outside version bump + Step 5K replacement is byte-identical after normalization;
- CSS outside the intended Step5K-through-SAFE4 replacement region is byte-identical after normalization;
- backend ownership remains sf_faq_* theme-mod / Customizer; no saved theme-mod deletion/reset is introduced.

Blocking source-level compatibility finding before runtime:
- a later global `Step 5O-B Side Navigation Sticky System` still targets the retired selector `.sf-faq-native-toc` and its ancestor-unlock `:has(.sf-faq-native-toc)` chain;
- H04 now renders `.sf-faq-h04-index`, so the historical WordPress/Astra sticky ancestor unlock no longer recognizes the FAQ index;
- because FAQ previously required explicit ancestor-unlock work to make sticky reliable, entering runtime with the new index unregistered would knowingly reintroduce a likely sticky regression;
- do not re-enable the old global sticky selector wholesale, because H04 intentionally becomes non-sticky at <=1040px; use an H04-specific ancestor unlock at >=1041px and let H04 own the actual sticky breakpoint/position.

Verdict:
**FAQ / HELP 2.7.98 CORE SOURCE PASS, FINAL SOURCE GATE HOLD**

Required mini-correction:
- bump 2.7.98 -> 2.7.99 for cache invalidation;
- add H04-specific desktop ancestor overflow unlock (>=1041px) inside the canonical H04 CSS owner;
- no PHP FAQ logic change, no visual redesign, no Refund/Services/Policy change.
