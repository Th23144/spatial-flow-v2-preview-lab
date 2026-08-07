# Step 4F · R1 Step-02 Shipping V2 Read-Only Delta Audit

Date: 2026-08-07  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Purpose

After final Step-01 closure, the user authorized the next bounded group to begin with the previously locked read-only delta audit for Step 02 Shipping.

No live source was modified in this audit.

## Current coordinated live rollback baseline

The latest accepted local sources remain:

```text
functions.php
575,903 bytes
SHA256: 48fb027223df748a23c33cff312fb45fd5437ec197a539d70eae71ac37f21fb8

woocommerce/checkout/form-checkout.php
13,700 bytes
SHA256: cdfe9d5981d0a30c0487ae27774e4327d62d67c2fb2aa57a57657dace73596f0

assets/js/checkout-safe5.js
24,772 bytes
SHA256: 7d0fb1c816f565cafcd19d88be01142c95fd025b61708609cd8654b9d8d20c0d

assets/css/checkout-safe5.css
47,086 bytes
SHA256: d0377342d32702a0da0227bf354829962d4b4cd4feef96acf3cf7a77f29dc472
```

These four files are the rollback unit for any Step-02 implementation because Step-02 strict-reference copy now intersects the accepted backend-editability layer.

## Static authority reviewed

```text
preview/spatial-flow-checkout-shipping-v1.html
preview/spatial-flow-checkout-flow-v1.css
preview/spatial-flow-checkout-context-v1.css
preview/spatial-flow-checkout-mobile-commerce-v1.css
preview/spatial-flow-checkout-flow-v1.js
project2-progress/STEP_4F_S3_FINAL_STATIC_CHECKOUT_AND_MOBILE_COMMERCE_SURFACE_ACCEPTANCE.md
project2-progress/STEP_4F_LIVE_CHECKOUT_EXACT_OWNERSHIP_MATRIX.md
project2-progress/STEP_4F_REMAINING_MANUAL_ACCEPTANCE_ROADMAP.md
```

The static Step-02 structure and its 390/360 Mobile Commerce treatment were explicitly accepted earlier. The live implementation must preserve that composition while replacing prototype-only data with WooCommerce truth.

## Locked truth boundary

The static Shipping page contains three example methods and prototype prices. Those values are not live authority.

The reference itself states that the live page must show only methods returned by WooCommerce for the validated address and cart.

Therefore:

```text
Visual hierarchy / composition: authoritative
Static method count: prototype-only
Static method titles: prototype-only
Static Free / $18 / pickup prices: prototype-only
Current live worldwide $8.99 rate: WooCommerce authority
Selected shipping method: WooCommerce authority
Order Summary totals: WooCommerce authority
```

No static shipping method, price, estimate or pickup capability may be hardcoded into production.

## Current live Step-02 structure

`form-checkout.php` currently renders:

```text
Step 02 view
→ generic .sf-safe5-section-card
→ existing editable kicker: Step 2 · Delivery
→ existing editable heading: Shipping details
→ .sf-safe5-shipping-fields
   → do_action( 'woocommerce_checkout_shipping' )
→ .sf-safe5-shipping-methods mirror mount
→ Back to address
→ Continue to payment
```

The right column currently contains only the shared SAFE5 Order Summary. The accepted Step-02 reference also contains a completed-Step-01 context card before the Order Summary.

## Delta A · Intro does not change to the accepted Step-02 editorial state

Current live behavior:

```text
showStep() changes only:
Secure checkout · Step XX of 04

The main H1 and lede remain the Step-01 values for every step.
```

Accepted Step-02 authority:

```text
Choose the journey.
Select the delivery pace that fits this order. The final amount updates before payment begins.
```

The word `journey` is editorially italicized in the accepted reference.

Classification:

```text
Confirmed Step-02 strict-reference omission
Owners: functions.php + form-checkout.php + checkout-safe5.js
```

Required implementation direction:

```text
- preserve existing editable global Intro base label
- add Step-02-specific editable title and lede
- allow only <em> in the Step-02 editorial title
- showStep(2) switches the visible H1/lede
- returning to Step 01 restores the accepted Step-01 H1/lede
- do not hardcode Step-02 copy in JavaScript
```

## Delta B · Desktop Step-02 panel is still the old generic rounded card

Current CSS gives `.sf-safe5-section-card` on desktop:

```text
30px border radius
white translucent background
shadow
24px all-around padding
small generic H2 scale
```

Accepted Step-02 desktop authority is a flat editorial panel:

```text
transparent/warm canvas
no rounded white card
no shadow
bottom divider
Shipping · 02 small mono label
How should it travel? large low-weight serif title
supporting panel note
```

The current mobile generic `.sf-safe5-section-card` already moves substantially closer to the accepted Mobile Commerce surface, so the desktop correction should be Step-02-specific rather than reopening shared Step-01 geometry.

Classification:

```text
Confirmed Step-02 visual delta
Owner: checkout-safe5.css
```

## Delta C · Current Shipping mirror has no dedicated visual layer

Current JavaScript `syncShippingMirror()` correctly treats native inputs as source of truth, but currently creates only:

```text
button.sf-safe5-shipping-option
→ decorative radio span
→ one flattened label-text span
```

Current accepted CSS contains no rules for:

```text
.sf-safe5-shipping-methods
.sf-safe5-shipping-option
.sf-safe5-shipping-option__radio
.sf-safe5-shipping-option__text
```

Therefore the live mirror cannot currently reproduce the accepted Step-02 method-card hierarchy.

Accepted reference hierarchy:

```text
shipping method container
→ method card
   → radio state
   → method title/content
   → price aligned separately
```

Required implementation direction:

```text
- keep the mirror architecture; do not move/clone WooCommerce authority
- read the real associated WooCommerce label
- preserve the real selected native input
- extract the real WooCommerce amount for a separate visual price column when available
- do not invent ETA or method descriptions unavailable from WooCommerce
- add radiogroup/radio ARIA state to the presentation layer
- resync on updated_checkout
- retain one/many/hidden-single-rate support
```

Classification:

```text
Confirmed Step-02 structural/visual delta
Owners: checkout-safe5.js + checkout-safe5.css + small template mount semantics
```

## Delta D · Completed Step-01 context card is missing

Accepted Step-02 reference contains, before the Order Summary:

```text
Before it leaves.
Edit address →
Deliver to
<completed Step-01 delivery address>
Contact
<email / phone>
```

Current live template has no equivalent Step-02 context card.

The static sample customer data is prototype-only and must not migrate.

Required live behavior:

```text
- reflect current native field values only
- if Ship to a different address is enabled, Deliver to reflects shipping_* values
- otherwise Deliver to reflects billing_* values
- Contact reflects the native billing email/phone values
- Edit address returns to Step 01 without reload or value loss
- the card never becomes a second source of customer data
```

At <=1040px the accepted reference places the context card before the Step-02 main form and keeps Order Summary after the form. This requires Step-02-only responsive ordering; Step-01 mobile order must remain untouched.

Classification:

```text
Confirmed Step-02 strict-reference omission
Owners: functions.php + form-checkout.php + checkout-safe5.js + checkout-safe5.css
```

## Delta E · Existing Step-02 backend copy is incomplete and partially mismatched

Already editable today:

```text
step_2_kicker
step_2_heading
back_to_address
continue_to_payment
```

Current fallbacks:

```text
Step 2 · Delivery
Shipping details
← Back to address
Continue to payment →
```

Accepted source-level copy requires at minimum:

```text
Shipping · 02
How should it travel?
← Back to Address
Continue to Payment →
```

`step_2_heading` must become an editorial-heading field that safely allows only `<em>`.

New editable Step-02 surfaces are also required for:

```text
Step-02 Intro title
Step-02 Intro lede
live-safe Shipping panel note
context-card title
Edit address action
Deliver to label
Contact label
```

No second Customizer section is permitted. Existing setting IDs must be reused where compatible.

Classification:

```text
Backend-editability gap inside Step 02
Owner: functions.php SAFE5 copy layer
```

## Prototype-only copy that must NOT be migrated verbatim

The following static text explicitly describes prototype behavior and therefore is not production copy authority:

```text
These options are static interaction examples...
Selecting a method previews its cost. Continuing commits that prototype selection...
```

The live panel note must instead truthfully state that available delivery methods are returned for the validated address/cart while WooCommerce remains authoritative.

## Shared Order Summary boundary

The Step-02 reference includes a differently composed Order Summary, but the project roadmap has a separate R1 Batch 5 for shared Order Summary / coupon / trust migration.

Therefore this Step-02 group will change only:

```text
Step-02 context-card presence/order
Step-02-specific positioning necessary to place context before main on tablet/mobile
```

It will NOT yet redesign shared product rows, coupon, totals or trust surfaces.

## Known later edge case retained

Current Step-02 client validation initializes:

```text
hasSelectedShipping = shippingMethods.length === 0
```

Thus a zero-method state is not currently treated as a client-side blocking failure. Under the current configured worldwide $8.99 rate this does not block the immediate Step-02 migration, but it remains a required later no-method/server-notice regression case under the notice/full-commerce matrices.

No change to this validation semantic is authorized in the visual migration audit itself.

## Smallest coordinated implementation owner

The Step-02 migration requires exactly these four current files:

```text
functions.php
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
```

Excluded:

```text
assets/js/spatial-flow.js
assets/css/spatial-flow.css
woocommerce/checkout/thankyou.php
Crypto plugin
payment gateway configuration
CartFlows
WPCode
Step-03 Payment migration
R2 notice redesign
R5 shared-CSS cleanup
```

## One unresolved runtime fact before source edits

Source inspection alone cannot safely establish what visible DOM the current call below contributes after the completed Step-01 recomposition lifecycle:

```php
do_action( 'woocommerce_checkout_shipping' );
```

This matters because the accepted Step-02 page should show Shipping methods, not a second visible address-entry form.

Before editing, capture the current live Step 02 at:

```text
1366px full relevant Step-02 surface
390px full Step-02 surface
```

The screenshots must answer:

```text
- Is .sf-safe5-shipping-fields visibly empty, hidden, or rendering fields?
- Is Ship to a different address content duplicated on Step 02?
- What does the current real $8.99 method mirror actually look like?
- What is the current tablet/mobile order of main vs Order Summary?
```

No diagnostic script is required unless the screenshots expose ambiguity.

## Status

```text
Step-01: completed and closed
Step-02 read-only source/static delta audit: completed
Step-02 implementation owners: defined
Step-02 source edit: not started
Current rollback baseline: locked
Runtime Step-02 baseline screenshots: required before edit
R2 ugly notice defect: retained, not mixed into this group
Checkout: Not done
```
