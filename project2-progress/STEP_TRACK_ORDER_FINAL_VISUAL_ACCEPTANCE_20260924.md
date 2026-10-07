# Track Order Final Visual Acceptance — Breathing Pass 06

Date: 2026-09-24
Project: Spatial Flow V2 / 项目二换皮工程

## User decision

The user explicitly accepted the Track Order page with:
“可以，就这样”

## Accepted artifact

Branch:
`temp-track-order-wishlist-led-01`

File:
`temp-preview/Spatial-Flow-Track-Order-Wishlist-Led-06.html`

## Accepted visual characteristics

- 1720px Header / Footer shell
- 1480px page body
- editorial hero with relaxed breathing
- lookup form remains functional / Inter-led
- right-side result area uses a restrained soft-focus surface
- no redundant top border / accent line
- four-stage parcel lifecycle uses horizontal editorial rows
- bottom support block has widened title measure and more breathing room
- site-established serif family / weight relationship preserved
- mobile / tablet responsive treatment retained

## Reference lineage

External AI ZIP reference:
NO

Repository old page:
YES

Old baseline:
`preview/spatial-flow-track-order-v1.html`

The accepted design keeps the old page's functional responsibilities while replacing its earlier card-heavy visual composition.

## Status

TRACK ORDER = USER VISUALLY ACCEPTED / CLOSED FOR THIS DESIGN BATCH.

No production WordPress mapping has been performed yet.


## Production mapping audit + H06 2.7.100 one-shot batch — 2026-10-07

The user proceeded from the completed FAQ / Help visual pass into Track Order.

Fresh production audit against the current 2.7.99 files confirms:
- `/track-order/` is already a native theme route (`spatial_flow_track_order_native_template()` at template_redirect priority 20);
- lookup ownership is correctly delegated to WooCommerce `[woocommerce_order_tracking]` rather than a custom query implementation;
- visible page copy is theme-mod / Customizer owned through `sf_track_order_*`;
- the separate privacy-safe Delivery Details card remains Customizer-owned through `sf_track_order_delivery_*` and hooks into `woocommerce_track_order`;
- current production presentation is the older card-heavy Step 5E-B implementation plus SAFE5 form layout + later SAFE1 unified-result + SAFE2 Delivery Details CSS;
- accepted visual authority remains `temp-track-order-wishlist-led-01/temp-preview/Spatial-Flow-Track-Order-Wishlist-Led-06.html`.

Production-mapping decision:
- preserve WooCommerce form validation, lookup permission, order data, totals, statuses and status-dependent actions;
- preserve the existing Delivery Details hook and backend-editable copy;
- do not render the accepted static artifact's fake example order data in production;
- instead, call the WooCommerce tracking shortcode exactly once, classify whether it returned the lookup form or a successful order result, and place the real successful result into the accepted soft-focus right-hand result surface;
- in pre-search / invalid-form state, the right surface uses editable privacy/check guidance rather than fake customer data;
- on a successful lookup, the left column becomes a restrained 'track another order' route while the real Woo output occupies the focused result surface;
- preserve the four-stage lifecycle and final Contact support block from accepted H06;
- retire the old breadcrumb/card/reading-card presentation and old SAFE5 form appearance;
- consolidate the old SAFE1/SAFE2 result presentation into an H06-compatible Woo result + Delivery Details presentation while preserving the safety behaviors (addresses hidden on public lookup; valid status-dependent actions retained; duplicate out-of-table invoice actions suppressed).

Backend editability:
- existing saved `sf_track_order_*` and `sf_track_order_delivery_*` theme mods are not deleted/reset;
- visible H06 hero, toolbar, lookup copy, pre-search guidance, result labels, lifecycle rows/states and help route remain editable in the existing Track Order Customizer section;
- obsolete old visual-only fields may remain stored but cease to render.

Prepared candidate:
- version 2.7.99 -> 2.7.100;
- complete Step 5E-B PHP owner replacement only;
- complete Step 5E-B + SAFE5 CSS owner replacement only;
- complete later SAFE1+SAFE2 Track Order CSS consolidation only;
- no Services / FAQ / Policy / Contact / WooCommerce order-data owner changes.

Candidate preflight:
- PHP lint PASS;
- CSS braces 3570/3570;
- CSS comments 243/243;
- tinycss2 parse errors 0;
- old `.sf-track-order-card`, `.sf-track-order-reading`, `.sf-track-order-breadcrumb`, `.sf-track-order-grid` presentation selectors absent from the candidate;
- current Delivery Details PHP hook remains intact.

Status:
**TRACK ORDER H06 PRODUCTION MAPPING 2.7.100 READY / USER MANUAL APPLY + RETURNED-FILE SOURCE GATE PENDING**


## Returned 2.7.100 source gate — 2026-10-07

User returned:
- `functions(20261007-111128).php`
- `spatial-flow(20261007-111127).css`

Source Gate result: PASS.

Verified:
- `SPATIAL_FLOW_CHILD_VERSION = 2.7.100`;
- PHP lint PASS;
- Track Order H06 PHP owner START/END markers each occur once;
- real WooCommerce `[woocommerce_order_tracking]` output is rendered once into `$tracking_html`, then classified as form vs successful result;
- successful result is routed into the H06 focused result surface; pre-search/invalid-form state retains the real Woo form and safe guidance surface;
- native `/track-order/` template redirect owner remains intact;
- existing privacy-safe `woocommerce_track_order` Delivery Details hook remains intact at priority 90;
- old card-heavy `.sf-track-order-card`, `.sf-track-order-reading`, `.sf-track-order-breadcrumb`, `.sf-track-order-grid` presentation selectors are absent;
- old SAFE5 Track Order form CSS and old SAFE1 + SAFE2 result CSS markers are absent;
- new H06 main CSS block occurs once;
- new consolidated H06 result + Delivery Details CSS block occurs once;
- CSS braces 3570/3570;
- CSS comments 243/243;
- tinycss2 top-level parse errors 0;
- comparison against the prior 2.7.99 files shows no non-Track-Order functional changes; outside the intended PHP owner/version changes the PHP is identical, and outside the intended CSS owners only an inconsequential blank-line difference exists.

Returned file hashes:
- functions SHA256 `f4093644c37067b0ecec7f5690cd247c0d5544ecddc4fb103be15f14dc0eb072`
- CSS SHA256 `2a9ee64a64c0fbd8e9dd63827e93ceccc3d94aaad3c33d34553920354a2563c1`

Next gate:
1. Runtime visual check — pre-search desktop + mobile.
2. Functional successful lookup using a real local test order and its billing email.
3. Successful-result desktop + mobile visual check, including status-dependent Woo actions and Delivery Details.

Status:
**TRACK ORDER H06 2.7.100 SOURCE PASS / RUNTIME VISUAL + FUNCTIONAL VERIFICATION PENDING**


## Track Order H06 2.7.100 pre-search runtime visual gate — 2026-10-07

User supplied desktop + mobile full-page captures for the initial, unqueried Track Order state.

Visual verdict: PASS on both breakpoints.

Confirmed:
- H06 editorial hero, 1480px desktop shell and mobile reflow are rendering correctly;
- WooCommerce lookup form is visibly integrated into the left lookup column without card-era UI leakage;
- right pre-search guidance surface is present and balanced against the form;
- toolbar, lifecycle rows, support block and footer transition are coherent on desktop and mobile;
- mobile form collapses to a single-column full-width Track action correctly;
- no blue emoji-arrow regression is visible;
- no old Track Order breadcrumb/card/reading-card presentation is visible;
- existing saved sf_track_order_* copy is being preserved (e.g. legacy-approved hero/lifecycle/help copy), confirming backend-editability ownership rather than fallback overwriting.

Status:
**TRACK ORDER H06 PRE-SEARCH DESKTOP VISUAL PASS**
**TRACK ORDER H06 PRE-SEARCH MOBILE VISUAL PASS**

Next required gate:
- submit a real local WooCommerce test Order ID + matching Billing Email;
- verify successful lookup behavior and capture desktop + mobile successful-result states;
- specifically inspect Woo status output, real order table/totals, any valid Pay/Cancel/Invoice actions, privacy-safe address suppression, and the Delivery Details hook.
