# Step 4F · R1 Step 01 Strict 1:1 Omission Audit

Date: 2026-08-06  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user correctly identified that the live Step-01 field rows are vertically more compressed than the accepted static reference and requested a careful audit for any other omissions before Step 02 begins.

## Evidence and authority reviewed

```text
preview/spatial-flow-checkout-v1.html
preview/spatial-flow-checkout-flow-v1.css
preview/spatial-flow-checkout-mobile-commerce-v1.css
project2-progress/STEP_4F_S3_FINAL_STATIC_CHECKOUT_AND_MOBILE_COMMERCE_SURFACE_ACCEPTANCE.md
project2-progress/STEP_4F_R1D2B2_STRICT_1_TO_1_COMPLETENESS_REAUDIT.md
project2-progress/STEP_4F_R1_SHARED_SHELL_GEOMETRY_RUNTIME_ACCEPTANCE_AND_CLOSE.md
current uploaded assets/css/checkout-safe5.css
current desktop / 1024 / 390 / 360 runtime screenshots
user-supplied reference-versus-live Step-01 comparison
```

The static reference remains authoritative. It defines, among other values:

```text
desktop form-row bottom spacing: 18px
mobile form-row bottom spacing: 11px
label-to-control gap: 8px desktop / 5px mobile
page background: #f6f1eb
field background: rgba(250, 247, 243, .42) over the warm page surface
mobile checkbox row: no extra 14px top padding
sentence-case panel headings and accepted reference copy
```

## Confirmed omissions

### 1. Desktop field vertical rhythm

The reference-versus-live comparison confirms that the next field label starts materially too close to the preceding control. Visible examples:

```text
First name / Last name -> Country / Region
Country / Region -> Street address
Town / City / ZIP -> State / Phone
```

The installed stylesheet contains nominal `margin-bottom: 18px !important`, but the rendered geometry does not match the reference. The root cause is not yet proven and must be determined from computed geometry and cascade evidence before editing.

Classification:

```text
owner: R1-D2B2 Step-01 field geometry
status: failed / reopened
```

### 2. Main Checkout canvas is white instead of the accepted warm background

Pixel-level screenshot comparison and direct visual evidence show:

```text
reference page canvas: #f6f1eb
live main Checkout canvas: white
```

The stylesheet sets the `body` background, but an inner Astra/WooCommerce page wrapper is visibly painting white above it. This also makes the semi-transparent live field surfaces render much whiter than the reference.

Classification:

```text
owner: shared R1 Checkout surface/background
status: missed shared-surface defect
shared width/column geometry remains accepted and does not need rollback
```

### 3. Mobile native shipping-address checkbox retains non-reference top padding

The current stylesheet still contains:

```css
#ship-to-different-address {
  padding-top: 14px !important;
}
```

inside the phone media query. The accepted mobile reference checkbox row has compact row spacing but no dedicated 14px top-padding layer.

Classification:

```text
owner: R1-D2B2 mobile Step-01 rhythm
status: confirmed static mismatch
```

### 4. Step-01 panel copy/capitalization is not identical to the static authority

Confirmed rendered/source differences include:

```text
reference: Where should we write?
live:      Where Should We Write?

reference: Send it to this room.
live:      Send It To This Room.

reference: A practical detail.
live:      A Practical Detail.

reference delivery note:
These fields represent the address WooCommerce will later use...

live delivery note:
These fields remain WooCommerce-owned and are used...

reference secondary action: Back to Bag
live secondary action: Return to cart
```

Native WooCommerce field labels, dynamic required markers, Address line 2 and alternate-shipping semantics remain allowed differences. The panel-heading, explanatory-copy and CTA differences are not among those native-field exceptions.

Classification:

```text
owner: Step-01 copy alignment / later backend-editable copy owner
status: tracked strict-1:1 content mismatch
not safe to silently change in the current CSS-only rhythm fix
```

## Items reviewed and not reopened

```text
shared 1440px / 7fr:5fr / 80px shell geometry: remains accepted
<=1040px single-column transition: remains accepted
22px phone gutter: remains accepted
field heights, square borders and icons: materially aligned
Country/State closed and open states: accepted
alternate Shipping desktop/mobile geometry: accepted
address-line 1 / 2 spacing: accepted
mobile order and no horizontal overflow: accepted
```

## Known future groups, not current omissions

The following are visibly incomplete but already have explicit future owners and therefore are not surprise omissions in D2B2:

```text
Order Summary / Coupon / Trust internals
Step 02 Shipping V2
Step 03 Payment V2
error-notice visual ownership
Step 04 result-state semantics
legacy CSS cleanup
Crypto and commerce regression
final complete Checkout strict 1:1 acceptance
```

## Required runtime diagnostic before repair

One bounded read-only diagnostic must capture:

```text
computed margin/padding/display/grid values for each Billing row
actual control-to-next-label pixel gaps
matching margin rules and priorities
Delivery grid row-gap and track geometry
body -> field ancestor background colors
actual white-painting wrapper
checkbox padding and dimensions
shell/intro geometry to confirm no width regression
```

After the diagnostic, prepare one consolidated repair for:

```text
field vertical rhythm
warm page/canvas background
mobile checkbox top spacing
```

Copy alignment remains separately tracked unless the user authorizes it to be included with the same source group.

## Status

```text
Shared R1 width/column geometry: completed and retained
R1-D2B2: reopened for field rhythm and mobile checkbox spacing
Shared R1 surface background: reopened as one bounded defect
Step 02 Shipping V2: blocked
Checkout: Not done
```
