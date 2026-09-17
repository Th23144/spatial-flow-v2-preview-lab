# STEP_SHOP_V2_COMPLETE_STRICT_DELTA_MATRIX_20260917

Date: 2026-09-17
Project: Spatial Flow V2 / 项目二换皮工程
Surface: Main-site Shop archive

## Status

COMPLETE STRICT DELTA AUDIT FINISHED / NO PRODUCTION CODE CHANGES

Binary page status remains:

```text
Shop archive: Not done
```

This record supersedes any narrow interpretation that only a few local Shop bugs remain. The Shop shell is functionally stable, but strict visual acceptance still requires a full-page micro-detail calibration.

## Authoritative visual contract

```text
preview/spatial-flow-shop-v1.html
```

Strict acceptance policy:

```text
PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
```

## Explicit approved deviations

These are not defects and must not be reverted while implementing this audit.

### 1. Current wider Shop frame

The user explicitly approved the current live Shop content/frame being somewhat wider than the static reference. Keep the current wider treatment. Do not reduce the Shop frame merely to reproduce the reference max-width/gutter formula.

### 2. Mobile product density

Preserve the previously approved production mobile behavior:

- ordinary phone widths keep a two-column product grid;
- only very narrow widths may collapse to one column;
- mobile Editor’s Pick remains hidden so products appear earlier;
- the compressed mobile Hero remains a production-quality phone adaptation.

### 3. Real commerce and backend ownership

Preserve real WooCommerce product data, taxonomy/filter URLs, sorting, pagination URLs/state, product links and YITH Wishlist ownership. Static fake/sample commerce content must never replace real data.

## Protected surrounding systems

Do not reopen:

```text
Main Header V2: CLOSED
Main Footer V2: CLOSED
Single Product: Completed 1:1
Cart: Completed 1:1
Checkout: Completed 1:1
Thank You / Order Result: Completed 1:1
```

## Complete delta matrix

### A. Breadcrumb

Reference:

- 28px top rhythm;
- Inter-style sans microtype;
- 11px size;
- .22em tracking;
- uppercase;
- `Home / Shop / current editorial context`.

Current:

- overall vertical location is close;
- uses JetBrains Mono 10px / weight 500;
- root Shop outputs `Home / Shop / Shop` because the third crumb is always the archive title.

Action:

- keep current approved overall width;
- change Shop breadcrumb microtype to the reference sans treatment;
- eliminate duplicate root `Shop / Shop` semantics;
- retain real taxonomy/archive context on filtered archives.

### B. Hero

Major geometry already matches the reference skeleton:

- 1.1fr / 1fr;
- 96px gap;
- 64px top / 80px bottom;
- bottom rule;
- H1 geometry and Cormorant treatment are already close to the source.

Remaining strict deltas:

- kicker is JetBrains Mono 10px / 600 instead of reference sans 11px / lighter microtype;
- meta labels are JetBrains Mono 10px instead of reference sans 12px;
- signoff currently inherits the generic 22px adjacent-paragraph rhythm, while the source has its own larger separation;
- real dynamic H1 `Shop` is valid even though the static sample title is longer; this is a permitted dynamic-slot difference.

Action:

- microtype calibration only;
- preserve current wider frame;
- preserve real archive title ownership;
- do not hardcode static sample title.

### C. Filter / Sort toolbar

Major geometry already aligns closely:

- horizontal filter row;
- 36px vertical rhythm;
- 32px filter gap;
- lower rule;
- real taxonomy-driven details panels.

Remaining strict deltas:

- filter labels use JetBrains Mono 11px rather than reference sans 12px;
- reference sort composition contains a visible `Arrange by` label plus a bordered `Editor’s order ↓` pill;
- current production output renders the native Woo ordering select without the separate reference label;
- filter dropdown panels are a required production adaptation and remain functional.

Action:

- preserve `woocommerce_catalog_ordering()` as owner;
- add visual `Arrange by` label around the native control;
- style the native control to the reference sort pill rather than replacing Woo sorting;
- keep current JS mutual exclusion / outside click / Escape behavior unchanged.

### D. Editor’s Pick

Major desktop geometry already matches:

- 5fr / 7fr;
- 80px gap;
- 80px section padding;
- 4:5 media;
- open editorial layout;
- real selected product / image / price / URL ownership.

Remaining strict deltas:

- stamp and small labels use JetBrains Mono instead of reference sans;
- kicker is slightly too small;
- button dimensions / microtype are tighter than reference;
- current image adds a zoom-on-hover effect not present in the approved static treatment;
- ghost-button geometry should follow the source treatment more closely.

Action:

- keep real backend-editable Editor’s Pick ownership;
- remove extra image zoom;
- calibrate small type and buttons;
- keep Editor’s Pick hidden on mobile as already approved.

### E. Product section heading

Reference:

```text
single editorial title + right-side count
```

Example visual contract:

```text
The full edit                         Showing 1 — 12 of 32
```

Current:

```text
THE COLLECTION
The Quiet Archive                    SHOWING …
```

The extra section kicker creates a real structural mismatch.

Action:

- stop rendering the Shop section kicker on the front end;
- preserve its stored Customizer setting for rollback/history; do not delete data merely because it is no longer rendered;
- keep the editable section title;
- set title/count microtype and spacing to the reference geometry.

### F. Product grid

Desktop major geometry already matches:

- four columns;
- 56px row gap / 40px column gap;
- 32px grid top / 80px grid bottom;
- 4:5 media.

Approved mobile exception remains:

- two columns on normal phones;
- one column only at very narrow width.

Action:

- preserve grid system and approved wider frame;
- only calibrate card details and responsive micro-rhythm.

### G. Product card

This is the largest structural content delta.

Reference card hierarchy:

```text
media
hover View piece →
editorial subline
product title
price
placement note
```

Current hierarchy:

```text
media
Wishlist
category
product title
price
```

Current media also zooms on hover; reference instead uses a subtle whole-card lift and a quick-action reveal.

Action:

- retain YITH Wishlist and real product link;
- reuse existing real Woo product admin fields instead of inventing another owner:
  - `_sf_material`
  - `_sf_piece_reference`
  - `_sf_placement`
- build the editorial subline from Material + Piece Reference when available;
- if those are empty, fall back to current real Woo product category text;
- output Placement Note only when `_sf_placement` is populated;
- never fabricate sample place-note copy;
- add `View piece →` quick-action overlay on desktop hover;
- remove image zoom and use the reference-style subtle card lift;
- move the dividing rule so it belongs to the Placement Note layer instead of appearing above price;
- tighten title bottom spacing to the reference;
- do not fabricate static `New in`, `Last N`, or other fake stock/editorial badges.

Mobile adaptation:

- retain two-column cards;
- keep the new real editorial information readable at compact scale;
- quick hover overlay should not become a fake touch-only control requirement.

### H. Pagination

Current:

- native WooCommerce pagination URLs/state are correct;
- visually centered compact number row;
- page items use large circular hit areas.

Reference:

```text
← Previous       centered numbers       Next page →
```

with a much wider 3-part composition.

Action:

- preserve Woo native pagination owner and URLs;
- restyle native prev/next and number elements into the three-part reference composition;
- when native Woo omits a disabled edge action on the first/last page, a visual disabled placeholder may be provided without creating a fake link;
- mobile may use a tighter safe version of the same structure to prevent overflow.

### I. Closing editorial note

Major desktop geometry already matches:

- 1fr / 1fr;
- 80px gap;
- 80px top / 120px bottom;
- right text max-width and general editorial structure.

Remaining strict deltas:

- current front end adds `BEFORE YOU CHOOSE` kicker that does not exist in the static closing-note contract;
- current CSS forces intro / emphasized phrase / trailing sentence into separate block lines;
- source treats the sentence as one flowing large editorial statement, with the emphasized phrase italic/blue inside it;
- current trailing span is reduced to a separate 22px line, which is not the source treatment;
- current button is smaller/tighter than reference.

Action:

- stop rendering the extra closing kicker while preserving stored backend copy;
- restore inline editorial sentence flow;
- make all three sentence parts inherit the same large Cormorant sizing, with only the emphasized phrase italic/blue;
- recalibrate button geometry and microtype.

### J. Product Contact Band between Closing Note and Footer

Current Shop renders `template-parts/product-contact-band` after the closing note.

The approved static Shop reference does not contain this separate lead-capture band in the same slot.

Classification:

```text
Production extra / not silently removable
```

Reason:

- it is a real current conversion/lead-capture surface;
- historical Shop acceptance explicitly preserved it;
- removing it is a product decision, not merely a CSS calibration.

Current remediation rule:

- preserve it during the first strict calibration batch;
- do not claim it is reference-identical;
- handle retention/removal only through an explicit product decision, not as collateral Shop cleanup.

### K. Typography system

The most pervasive small-detail mismatch is microtype.

Reference editorial hierarchy broadly uses:

- Cormorant Garamond for display/editorial serif;
- Inter/body sans for small labels, toolbar, crumb and controls.

Current Shop controlled block frequently substitutes JetBrains Mono for breadcrumb, filters, metadata labels, count and price labels.

Action:

- convert Shop-reference microtype from JetBrains Mono to the reference sans treatment where the static source uses body/sans;
- retain JetBrains elsewhere on the site when it belongs to other completed surfaces; this is Shop-scoped only.

### L. Responsive behavior

Keep approved production differences:

- mobile Editor’s Pick hidden;
- compact Hero;
- secondary Hero body paragraph hidden on phone;
- two-column product grid until very narrow width;
- mobile filter row horizontally scrollable with safe fixed panel behavior.

Strict calibration within those approved deviations:

- typography ratios;
- spacing between Hero/meta/filters/product heading;
- card inner rhythm;
- pagination safety;
- closing-note stacking.

## Files expected in the implementation batch

```text
woocommerce/archive-product.php
woocommerce/content-product.php
assets/css/spatial-flow.css
functions.php  (asset version only, unless a narrow verified helper becomes necessary)
```

Expected untouched file:

```text
assets/js/spatial-flow.js
```

Reason: current Shop filter interaction logic is already correct and should not be reopened without a concrete regression.

## Implementation rule

The next implementation should be one coherent Shop strict-calibration batch, not a series of appended tiny CSS fixes.

Preferred CSS workflow:

- replace / revise the existing controlled Shop block;
- do not append another generic Shop override layer after it;
- preserve the user-approved wider frame rule;
- keep all selectors scoped to Woo product archives.

## Acceptance after implementation

Shop remains `Not done` until fresh runtime evidence confirms:

- desktop micro-detail alignment;
- phone alignment under approved deviations;
- filter/sort behavior;
- YITH Wishlist;
- product links;
- native pagination;
- taxonomy / selected-filter behavior;
- no Header/Footer regression;
- no Single Product / Cart / Checkout regression.
