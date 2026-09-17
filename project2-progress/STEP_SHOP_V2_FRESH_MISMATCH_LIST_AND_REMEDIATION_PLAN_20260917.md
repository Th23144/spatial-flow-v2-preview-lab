# STEP_SHOP_V2_FRESH_MISMATCH_LIST_AND_REMEDIATION_PLAN_20260917

Date: 2026-09-17
Project: Spatial Flow V2 / 项目二换皮工程
Surface: Main-site Shop archive
Status: FRESH SOURCE + RUNTIME AUDIT COMPLETE / REMEDIATION NOT YET APPLIED

## Current binary status

```text
Shop archive: Not done
```

This record does not authorize or apply production edits.

## Evidence reviewed

Fresh local source supplied by the user:

```text
woocommerce/archive-product.php
woocommerce/content-product.php
assets/css/spatial-flow.css
assets/js/spatial-flow.js
functions.php
```

Fresh runtime evidence supplied by the user:

```text
Desktop full-page Shop screenshot
390px-class mobile full-page Shop screenshot
```

Static visual contract:

```text
preview/spatial-flow-shop-v1.html
```

Historical evidence / standing rules:

```text
PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
project2-progress/PROJECT2_USER_REOPEN_HEADER_FOOTER_SHOP_SINGLE_PRODUCT_20260903.md
project2-progress/STEP_4C_SHOP_REWORK_AUDIT.md
project2-progress/STEP_4C_REWORK1_B_IMPLEMENTATION.md
project2-progress/STEP_4C_REWORK1_B3_FIX1_PAGINATION.md
project2-progress/STEP_SHOP_V2_FRESH_STRICT_1TO1_REAUDIT_START_20260917.md
```

## Fresh local baseline

```text
archive-product.php
- bytes: 14,932
- logical lines: 321
- SHA256: 2fb0c980b39f8bf7c80b5ca3adabfed29ac78a786047c9bfe57db81d4985be1b

content-product.php
- bytes: 1,509
- logical lines: 40
- SHA256: 6d5f34b4f9c1c7bd10def58d8d0abe48b5bff56a1a1e37117955cf7bf93afd89

spatial-flow.css
- uploaded snapshot bytes: 636,651
- logical lines: 22,726
- SHA256: 3082798392d291092fc14e46b9d59345f1cd8ce15362cc023ab1053707657d6b

spatial-flow.js
- bytes: 93,021
- logical lines: 2,830
- SHA256: 04702235c5ffaa2ec644db60ca983faa0b2030e830cfa1c9a3e30777ea5c23bb

functions.php
- bytes: 635,169
- logical lines: 12,125
- SHA256: f99a318072f53adb8bdf4e9d566124430a2e02dbc164e578a0d9b87a7406829a
- SPATIAL_FLOW_CHILD_VERSION: 2.7.47
```

## Fresh runtime overview

Desktop currently renders the expected broad architecture:

```text
CLOSED Header
breadcrumb
editorial Hero + metadata
filter / sort toolbar
Editor's Pick
product-section heading + count
4-column product grid
pagination
closing editorial note
product contact / signup band
CLOSED Footer
```

Mobile currently renders the previously accepted production adaptation:

```text
compact Hero
secondary Hero body reduced/hidden
Editor's Pick hidden
2-column product grid on ordinary phone width
no visible horizontal page overflow
closing note / contact band / CLOSED Footer stack normally
```

The fresh screenshots are runtime-composition evidence. Exact pixel measurement is based on source CSS / static CSS rather than the downscaled screenshot assets.

# Fresh mismatch classification

## A. MUST FIX before current Shop can be closed

### A1. Wide-desktop frame / inner-gutter contract drifts above the 1440 reference frame

Reference model:

```text
section max-width: 1440px
box-sizing: border-box
internal horizontal padding: 56px
reference inner content width at max frame: 1328px
```

Current controlled Shop model:

```text
width: min(1440px, calc(100% - 112px))
no equivalent 56px internal section padding
```

At a 1440px viewport the effective inner width is similar, which explains why the supplied screenshot looks broadly aligned. At wider desktop widths, however, the current content can expand to a full 1440px inner width, while the approved static frame remains 1440px including the 56px + 56px gutters.

Concrete effect at the max frame:

```text
reference 4-column grid inner width: 1328px
reference cards with 40px gaps: about 302px each
current max inner width: 1440px
current cards with 40px gaps: about 330px each
```

Remediation direction:

```text
Restore the 1440px outer-frame + 56px internal-gutter model on desktop for Shop-specific sections.
Do not disturb the CLOSED Header / Footer containers.
Retain the previously accepted mobile production gutter strategy unless a concrete phone regression appears.
```

### A2. Product-card editorial hierarchy is still incomplete

Static reference card hierarchy:

```text
image
optional truthful badge
hover “View piece →” action
title
editorial subline
price
placement / place note
```

Current `content-product.php` hierarchy:

```text
image
YITH Wishlist
product category
product title
price
```

Missing / mismatched layers:

```text
- no hover “View piece →” action;
- category appears before the title instead of a reference-style editorial subline after it;
- no placement note;
- price currently acts as the final card line;
- current visual divider ownership does not match the reference place-note divider.
```

This is the main remaining structural 1:1 omission in the product grid.

### A3. The historical backend-owner blocker for card editorial data no longer exists

The July rework deliberately did not fabricate the per-product place note because no verified backend owner existed at that time.

The current product model now already has real product-specific fields created during the later Single Product work:

```text
_sf_material
_sf_piece_reference
_sf_placement
```

They are editable from WooCommerce product admin and already participate in current product-page architecture.

Therefore no new Shop-only database field is required.

Approved remediation ownership:

```text
Card editorial subline:
- use `_sf_material` when present;
- optionally append `_sf_piece_reference` when present;
- if both are empty, use the existing real product-category text as a truthful fallback.

Card placement note:
- use `_sf_placement` only;
- hide the layer when empty;
- never fabricate reference sample copy.
```

YITH Wishlist ownership remains untouched.

### A4. Product section contains an extra visual kicker not present in the static contract

Current production markup adds:

```text
THE COLLECTION
The Quiet Archive / editable current section title
```

Static reference uses one section title + count only.

The current editable section title itself may differ from the static sample text because it is a legitimate backend-editable copy slot. The issue is the extra separate kicker layer, not the chosen current title.

No later explicit exception was found authorizing that extra visual line as a permanent strict-1:1 deviation.

Remediation direction:

```text
Remove / suppress the section kicker from the Shop front-end composition.
The existing Customizer value may remain stored for rollback / future use; no database cleanup is required.
```

### A5. Root Shop breadcrumb duplicates the same identity

Current root Shop code can render:

```text
Home / Shop / Shop
```

because the second breadcrumb item is the Shop link and the third item is the current archive title, which is also `Shop` on the root archive.

Reference uses a distinct current-context third item, so the duplicate root identity is not acceptable as final production semantics.

Remediation direction:

```text
Root Shop: avoid duplicate `Shop / Shop`.
Taxonomy/filter archive: retain Home / Shop / current parent classification.
Do not hardcode the static sample phrase “Objects for the Quiet Room” merely to fill the slot.
```

### A6. Pagination is functional and horizontally repaired, but not yet strict-reference geometry

Historical B3-FIX1 correctly solved the old defect where native page numbers stacked vertically. That record proves the horizontal Woo row works; it does not establish parity with the static three-zone pagination composition.

Static reference:

```text
left: Previous state
center: page numbers
right: Next page
```

Current runtime:

```text
centered native Woo pagination row
```

Remediation direction:

```text
Keep WooCommerce pagination ownership and URLs.
Move presentation as close as safely possible to the reference three-zone rhythm.
Do not replace native pagination business logic or fabricate navigation URLs.
If the native first page omits a Previous link, any disabled placeholder treatment must remain purely presentational and accessible.
```

## B. ALREADY CORRECT / PRESERVE

### B1. Hero core composition

Desktop Hero structure is already aligned in the important reference dimensions:

```text
1.1fr / 1fr
96px desktop gap
reference-style metadata row
editorial lede/body/signoff hierarchy
bottom divider
```

Only A1 wide-screen frame ownership needs correction around it.

### B2. Filter / sort ownership and interaction

Current filter system is correct and must not be rewritten:

```text
Woo product_cat + Woo product attributes remain the real owners
layered-nav query parameters remain active
active attribute chips are individually removable
parent classification remains the primary title/context
only one filter details panel stays open
outside click closes panels
Escape closes panels
native Woo ordering remains authoritative
```

### B3. Editor's Pick desktop

Current desktop Editor's Pick already has the reference 5fr / 7fr open editorial composition, 4/5 media ratio, editorial copy hierarchy and backend-editable owner model.

Preserve it.

### B4. Mobile Editor's Pick omission is an explicit historical production decision

The static reference itself stacks Editor's Pick on smaller screens, but the Project-2 Shop implementation explicitly chose to hide it on ordinary phone width so products appear earlier.

That mobile decision was previously runtime accepted and remains a permitted controlled deviation under the project's mobile-production rule.

Do not re-show it automatically in this fresh pass.

### B5. Mobile two-column product grid is a previously accepted controlled deviation

Static reference eventually goes to one column <=480px.

Project-2 previously explicitly selected:

```text
2 columns on ordinary mobile widths
1 column only under the very narrow threshold (~360px)
```

Fresh screenshot still shows a readable two-column layout with no visible horizontal overflow.

Preserve this unless a concrete regression appears.

### B6. Product grid geometry except max-frame issue

Current controlled Shop CSS already preserves:

```text
4 columns desktop
56px row gap
40px column gap
4/5 imagery
open cards rather than framed/shadowed Woo tiles
serif product-title treatment
```

### B7. Closing editorial note

Current closing note retains the intended open two-column editorial structure and backend-editable copy ownership.

Preserve it.

### B8. Product contact / signup band and CLOSED global shell

Current Shop flows normally into the product-contact/signup band and the CLOSED Footer.

Header and Footer are protected and are not part of this Shop remediation.

## C. DATA-DEPENDENT / DO NOT FABRICATE

### C1. Missing product photography / Woo placeholders

Several grid items show WooCommerce placeholder media.

Classification:

```text
product-content / catalog-data issue
not a Shop CSS implementation defect
```

Do not generate or invent product images during the Shop 1:1 code pass.

### C2. Static card badges such as “New in” / “Last 1”

The reference uses example commerce-status badges.

Current verified Shop/product architecture does not yet define a dedicated approved business owner for those labels.

Therefore:

```text
do not fabricate `New in` / `Last N` badges merely for visual matching.
```

A future truthful implementation may be based on explicit product metadata / stock rules after a separate owner decision.

### C3. Editor's Pick Studio Note button

The Studio Note action is already conditional on a real backend URL. If the URL is empty, hiding the action is valid dynamic behavior.

## Files expected in the remediation batch

Primary edits:

```text
woocommerce/archive-product.php
woocommerce/content-product.php
assets/css/spatial-flow.css
```

Possible small supporting edit:

```text
functions.php
- child-theme asset version bump;
- pagination presentation hook only if required by the final native-safe implementation.
```

Expected no-change file:

```text
assets/js/spatial-flow.js
```

Reason: the current Shop filter interaction already satisfies the accepted behavior.

## Remediation sequence

Use one coherent Shop batch, not fragmented visual micro-patches:

```text
1. Correct desktop max-frame / gutter model.
2. Correct root breadcrumb duplication.
3. Remove the extra product-section kicker layer.
4. Upgrade `content-product.php` to the truthful reference-style hierarchy using existing `_sf_material`, `_sf_piece_reference`, `_sf_placement` owners.
5. Add the non-destructive “View piece →” hover affordance.
6. Move card divider rhythm to the placement-note layer.
7. Align native Woo pagination presentation toward the reference without replacing Woo pagination logic.
8. Bump child asset version if CSS/PHP changes require cache invalidation.
9. Source validation.
10. Fresh desktop + mobile runtime regression.
```

## Protected behavior during implementation

Do not break or rewrite:

```text
Header V2
Footer V2
Single Product
Cart
Checkout / SAFE5
Thank You / Order Result
WooCommerce loop
WooCommerce ordering
WooCommerce taxonomy / layered-nav filtering
YITH Wishlist
product links
pagination URLs
active-filter individual removal
mobile compact-Hero decision
mobile hidden Editor's Pick decision
mobile two-column Shop grid decision
```

## Next gate

```text
STEP_SHOP_V2_REMEDIATION_BATCH
```

Shop remains `Not done` until returned source validation + fresh runtime evidence + explicit user acceptance are complete.
