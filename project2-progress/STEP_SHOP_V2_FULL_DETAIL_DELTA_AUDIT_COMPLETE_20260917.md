# STEP_SHOP_V2_FULL_DETAIL_DELTA_AUDIT_COMPLETE_20260917

Date: 2026-09-17
Project: Spatial Flow V2 / 项目二换皮工程
Surface: Main-site Shop archive
Status: FULL DETAIL AUDIT COMPLETE / IMPLEMENTATION STILL FROZEN

## User-approved controlled divergences

These are NOT defects and must not be reverted during strict calibration:

1. Keep the current production Shop overall width, even though it is wider than the static reference.
2. Keep ordinary mobile product grid at two columns.
3. Keep Editor's Pick hidden on ordinary mobile so products appear earlier.
4. Keep live WooCommerce taxonomy/filter/sort/pagination ownership.
5. Keep YITH Wishlist functional ownership.
6. Header and Footer remain CLOSED and are not reopened.
7. Product/contact band remains a production extension unless separately revised; do not delete it merely because the static Shop file does not contain it.

## Audit authority

Static reference:

`preview/spatial-flow-shop-v1.html`

Current implementation owners:

- `woocommerce/archive-product.php`
- `woocommerce/content-product.php`
- `assets/css/spatial-flow.css`
- `functions.php`
- live WooCommerce / YITH data

## Core finding

The Shop mismatch is not one bug. The current implementation has the correct broad skeleton but is still materially different from the static reference because:

- the Shop page canvas is rendered white instead of the warm beige reference system;
- inherited Astra/global typography leaks into Shop body copy because some Shop selectors set size/color but omit family/weight;
- the root Shop Hero is structurally bound to the Woo archive title (`Shop`), so it cannot reproduce the editorial reference Hero title and breadcrumb hierarchy;
- the Editor's Pick implementation repeats one generic kicker and uses generic global copy rather than the reference's product-specific editorial hierarchy;
- some microtype still uses JetBrains Mono although the reference uses Inter for sans microtype;
- old/global card styles remain earlier in the stylesheet, requiring final-property ownership verification rather than assuming the controlled rebase wins every property;
- product data gaps (images, material/reference/placement metadata) visually expose fallback states that are distinct from template defects;
- approved production extensions/divergences must be separated from real strict-1:1 defects.

## A. Canvas / page-surface system — BLOCKER

Reference palette:

- paper: `#f6f1eb`
- paper deep: `#ede7df`
- line: `#d9d1c4`
- ink: `#1f1916`
- soft ink: `#4a423d`
- muted ink: `#8a807a`
- terracotta: `#a8745c`
- bluestone: `#4a5d5a`

Current controlled Shop CSS declares the correct variables, but it does not assign the warm paper background to the effective full Shop surface. Runtime screenshots are therefore dominated by white.

Required ownership outcome:

- Shop `<main class="sf-site sf-shop-v2">` / effective content surface must own the warm paper canvas.
- Hero, controls, Editor's Pick, products, pagination and closing note remain transparent on that warm canvas.
- Do not alter closed Header/Footer internals.

## B. Global Shop typography inheritance — BLOCKER

Reference body establishes:

- Inter / sans as default;
- font-weight 300;
- line-height 1.6.

Current `.sf-shop-v2` does not establish a complete local typography baseline. Multiple descendants specify color/size but omit family or weight, so Astra/global rules can leak in.

Confirmed examples:

1. Hero normal body paragraph currently specifies max-width, margin, color, size and line-height, but not `font-family` or `font-weight`.
2. Editor's Pick normal body paragraph currently specifies max-width, margin, color, size and line-height, but not `font-family` or `font-weight`.
3. Closing-note right paragraph similarly lacks full family/weight ownership.

Visible symptom: these paragraphs render substantially heavier than the static reference.

Required ownership outcome:

- establish local Shop sans baseline at `.sf-shop-v2`;
- explicitly own critical text runs where needed;
- do not rely on Astra inheritance for strict-reference typography.

## C. Breadcrumb / Hero content architecture — BLOCKER

Static reference root Shop hierarchy:

- breadcrumb: `Home / Shop / Objects for the Quiet Room`
- kicker: `Spring Edit · Vol. 04`
- Hero title: `Objects for / the Quiet Room.` with editorial italic/bluestone emphasis on `Quiet`
- Pieces / Makers / Origin editorial metadata
- right-side editorial lede/body/signoff

Current root Shop:

- breadcrumb now resolves to `Home / Shop`;
- H1 is hard-bound to `$sf_shop_archive_title`, therefore renders `Shop` on the root Shop;
- Shop Customizer does not own a separate root Hero title;
- current default kicker/body/meta copy is materially different from the static reference.

This is not merely a text-content variance: binding the visible Hero H1 directly to the Woo archive title prevents the root Shop from reproducing the static reference geometry and editorial emphasis while preserving taxonomy archive semantics.

Required architecture:

- root Shop gets a backend-editable editorial Hero title separate from Woo archive identity;
- taxonomy/archive contexts may continue to use real archive titles;
- breadcrumb root Shop can safely use `Home / Shop / [editorial Hero identity]` if this hierarchy is retained;
- title markup needs a safe way to express approved `<em>` emphasis instead of escaping the entire title as plain text.

## D. Hero visual detail

After the content architecture issue is corrected, calibrate:

- kicker margin and weight;
- H1 optical size, line breaks, line-height and italic/bluestone emphasis;
- meta rule, label weight and serif italic values;
- right-column vertical alignment;
- lede/body/signoff family, weight and color;
- exact spacing between lede/body/signoff;
- divider color against the warm paper canvas.

The broad grid (`1.1fr / 1fr`, 96px gap) is already close and should not be needlessly rebuilt.

## E. Toolbar / controls

Functional ownership is correct and must stay dynamic, but visual strictness remains incomplete.

Keep:

- current real taxonomy groups;
- filter popup behavior;
- selected-filter removal behavior;
- WooCommerce sorting.

Calibrate:

- warm paper background continuity;
- Inter microtype ownership;
- 300/400 weight hierarchy;
- muted/ink/terracotta states;
- filter baseline and plus spacing;
- active underline weight/position;
- sort label and native select visual balance;
- reference-like `All · count` concept may be implemented dynamically if it does not damage real filtering ownership.

Real taxonomy labels differ from the static art direction and are a functional/content divergence, not a reason to fabricate fake categories.

## F. Editor's Pick — MAJOR BLOCKER

The current implementation reproduces the broad 5fr/7fr geometry but not the reference editorial hierarchy.

Static reference hierarchy:

1. image stamp: `Editor's Pick`
2. right-column editorial label: `No. 014 · Hand-thrown · One of one`
3. product title with optional editorial emphasis
4. product-specific material/maker subtitle
5. product-specific editorial body
6. product-specific placement note
7. footer rule
8. price
9. View Piece button
10. Read the Studio Note ghost button

Current implementation:

- image stamp and right-column label both reuse `editor_pick_kicker`, producing duplicated `Editor's Pick` semantics;
- subtitle defaults to generic `Selected piece for this edit`;
- body defaults to generic recommendation copy;
- placement defaults to generic placement copy;
- these values are global Shop Customizer fields, not inherently tied to the selected product;
- ghost Studio Note button appears only if a URL has been populated, and is absent in the current runtime screenshot;
- normal body paragraph lacks full sans family/weight ownership and renders too heavy;
- subtitle, body, placement and footer rhythm still need visual calibration;
- price small label still has residual mono ownership in older/current rules and must be aligned to reference Inter microtype.

Recommended owner direction:

- preserve selected product identity/image/price/URL from WooCommerce;
- reuse existing product editorial fields (`_sf_material`, `_sf_piece_reference`, `_sf_placement`) where they semantically fit;
- retain Shop-level fallback controls only as fallbacks, not as fake product-specific biography;
- do not fabricate maker/story data when absent.

## G. Product section heading

Current structural cleanup removed the extra front-end kicker, which is correct.

Still calibrate:

- H2 optical baseline;
- right-side count family/weight/tracking;
- top/bottom rhythm;
- warm canvas and divider relationship.

## H. Product card system — MAJOR

Current template now supports:

- image;
- YITH Wishlist;
- `View piece →` hover overlay;
- title;
- editorial meta from `_sf_material + _sf_piece_reference` with taxonomy fallback;
- live price;
- placement note from `_sf_placement`.

Remaining strict-detail work:

- verify final cascade removes old white-card/radius/shadow visual ownership;
- card hover should match the static reference's restrained lift/overlay behavior;
- image well must use warm deep-paper treatment where the image itself does not fill it;
- Wishlist is an approved functional extension and must remain visually quiet because it is absent from the static card contract;
- title/subtitle/price/place-note vertical rhythm must match reference;
- price typography and sale-price hierarchy must match reference;
- card row height must not be artificially equalized in a way that breaks editorial flow;
- missing product metadata must collapse cleanly without synthetic text;
- Woo placeholder-image coloration is content/asset state, not solved by card background alone.

## I. Product-data completeness — SEPARATE FROM TEMPLATE

Many products currently lack one or more of:

- real product image;
- `_sf_material`;
- `_sf_piece_reference`;
- `_sf_placement`.

These omissions cause visible differences even when the template is correct.

Rule:

- do not fabricate data for strict screenshot similarity;
- template must degrade cleanly;
- final Shop acceptance must distinguish `template visual PASS` from `catalog content completeness`.

## J. Pagination

Current production now uses a three-part Woo-owned pagination presentation.

Still calibrate:

- left/right action prominence;
- disabled first/last-page treatment;
- center-number rhythm;
- current-page circle size and serif styling;
- line color;
- vertical padding.

Do not replace native Woo URLs/state.

## K. Closing note

Broad two-column geometry is close.

Remaining:

- enforce Inter/300 on right-side body;
- confirm left serif line breaks and emphasis after warm canvas correction;
- verify 80px desktop gap and optical alignment;
- button typography/color/hover;
- distance to the following production contact band.

## L. Product Contact Band — APPROVED PRODUCTION EXTENSION TO REVIEW, NOT DELETE

The static Shop file ends its main editorial composition differently; the current production page additionally renders `template-parts/product-contact-band`.

This block must not be silently deleted for 1:1.

Review requirement:

- decide only its transition/color/rhythm relative to the corrected Shop canvas;
- preserve its functionality/editability;
- Footer remains closed.

## M. Mobile audit

Approved divergence:

- two-column ordinary mobile product grid;
- Editor's Pick hidden on ordinary mobile.

Remaining mobile strict-detail review:

- warm canvas ownership;
- breadcrumb microtype;
- Hero title/lede/body/signoff hierarchy;
- filter strip density and horizontal behavior;
- sort row hierarchy;
- product image/title/meta/price/place-note density in two columns;
- Wishlist size/offset;
- pagination legibility;
- closing-note line lengths and spacing;
- contact-band transition.

## N. Cascade / ownership audit — REQUIRED BEFORE PATCHING

Earlier global rules still exist for:

- `.sf-product-card`
- `.sf-product-card__body`
- `.sf-product-card__bottom`
- `.woocommerce ul.products li.product`
- mobile Woo product-card overrides
- shared global typography/cards

The controlled Shop block is later and more specific in many places, but not every visual property is explicitly reset.

Implementation must therefore patch at the Shop owner level with complete property groups, not another set of small isolated overrides.

## O. Implementation order after this audit

1. Shop root canvas + local typography baseline.
2. Root Hero editorial identity/breadcrumb owner.
3. Hero microtypography and right-column body inheritance.
4. Toolbar microtype/visual states.
5. Editor's Pick full editorial hierarchy/data ownership.
6. Product heading + cards.
7. Pagination.
8. Closing note + contact-band transition.
9. Mobile-only pass.
10. Fresh desktop/mobile screenshot comparison.

Do not alter the user-approved wider production width.

## Acceptance rule

Shop remains `Not done` until a fresh screenshot-based review confirms the corrected visual system. Source-code similarity alone is not acceptance.
