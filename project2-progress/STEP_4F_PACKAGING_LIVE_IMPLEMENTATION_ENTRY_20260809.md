# Step 4F · Product Packaging · Live Implementation Entry

Date: 2026-08-09
Status: LIVE IMPLEMENTATION AUTHORIZED · SOURCE PREFLIGHT REQUIRED
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Current project stage

Batch 5 · Order Summary / Coupon / Trust is already closed. Batch 6 remains paused while the newly requested Product Packaging capability is inserted into the accepted SAFE5 Checkout flow.

The user has now explicitly authorized the live implementation to begin.

## Locked visual / interaction authority

The implementation must start from the user-accepted original item-centric B candidate:

```text
preview/spatial-flow-checkout-packaging-itemcentric-v1.html
preview/spatial-flow-checkout-packaging-v8-itemcentric.css
preview/spatial-flow-checkout-packaging-itemcentric-v1.js
```

The B2 density-refinement candidate remains rejected and historical only:

```text
preview/spatial-flow-checkout-packaging-itemcentric-b2.html
```

Do not import B2 mobile compression into the live implementation.

## Locked functional contract

The live Packaging implementation must preserve these rules:

```text
- usable Package 01 / 02 / 03... slots are generated from the real cart assignment units; customers do not manually create arbitrary physical packages
- every product assignment unit belongs to exactly one package
- assigning the same unit to another package transfers it; it must never duplicate
- empty package slots are not physical packages and add no fee
- only non-empty actual packages receive a Standard / Gift choice
- Gift Packaging fee is calculated per actual non-empty Gift package
- Standard Packaging adds no gift fee
- Packaging affects product packaging inside the shipment; it does not create an additional shipping method or shipment
- real WooCommerce cart items, quantities, prices, shipping and totals remain authoritative
- packaging state must survive Step 02 -> Step 03 navigation and be available when the real order is created
- accepted Step 01, Step 02 Shipping, Step 03 Payment, Coupon, Order Summary, Trust and desktop Summary sticky behavior must not regress
- desktop 1366 and mobile 390 / 360 are acceptance targets
```

## Live ownership / expected files

The existing accepted SAFE5 system is a coordinated runtime unit involving:

```text
functions.php
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
```

Packaging is expected to require coordinated changes across the same ownership boundary:

```text
functions.php
- WooCommerce session / fee / order metadata ownership
- backend-editable Packaging copy/settings only where appropriate
- validation/sanitization and order persistence

woocommerce/checkout/form-checkout.php
- real SAFE5 Step-02 Packaging mount / hidden state fields / accessible structure

assets/js/checkout-safe5.js
- real cart assignment-unit model
- package transfer behavior
- Standard/Gift package state
- Step navigation persistence and updated_checkout synchronization

assets/css/checkout-safe5.css
- accepted original-B visual contract
- desktop and 390/360 responsive treatment
```

No change is authorized here to the Crypto plugin, gateway logic, CartFlows, global `spatial-flow.css`, global `spatial-flow.js`, or the Thank You template.

## Source preflight result

The GitHub repository is the Project-2 visual/reference/progress repository. It does not contain the current live WordPress runtime copies of the four SAFE5 files.

Project policy requires live changes to use the user's current server/local source files as the sole implementation baseline and requires exact byte / line / SHA256 / syntax auditing before an anchored replacement is issued.

Therefore the implementation has formally started, but no live runtime source is modified in this entry step.

Latest accepted Checkout CSS identity already recorded after Batch-5 sticky acceptance:

```text
assets/css/checkout-safe5.css
88,922 bytes
2,713 lines
SHA256 8dcf35e6b850f861bc02c060936ba775ab73ef855d264d6342cfe49860788659
CRLF
no final newline
```

This historical identity is an integrity reference only. The current submitted source must still be measured before editing.

## Required source handoff before the first live replacement

Submit the current live copies of all four files together:

```text
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/functions.php
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/woocommerce/checkout/form-checkout.php
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/assets/js/checkout-safe5.js
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/assets/css/checkout-safe5.css
```

The next implementation pass must:

```text
1. audit current bytes / lines / SHA256 / line endings / syntax for all four files
2. map the exact SAFE5 Step-02 insertion anchors and existing WooCommerce ownership
3. build the smallest coordinated Packaging patch against those exact sources
4. calculate expected post-edit identities before installation
5. issue bounded manual replacement instructions; stop if any expected anchor count differs
6. source-audit the edited four files before browser/runtime testing
```

## Intentionally NOT changed in this entry step

```text
real WordPress runtime files
WooCommerce database/session state
shipping methods
payment gateways
Crypto plugin
orders/emails
Batch 6 acceptance state
rejected B2 candidate
accepted original B candidate
```

## User acceptance / authorization status

```text
Original item-centric B: USER ACCEPTED
B2: USER REJECTED
Live Packaging implementation: USER AUTHORIZED TO START
Live source patch: NOT YET BUILT — waiting for current four-file source baseline
```

## Current stop point

Do not resume Batch 6 yet.

Exact next action:

```text
Receive the four current SAFE5 runtime files -> source-integrity audit -> build the first bounded live Packaging replacement against the exact current source.
```

This is a source-safety gate, not a design reopening.