# Step 4F · R1-D2B2 Step-01 Field Surface Migration

Date: 2026-08-04  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authorization and interaction correction

User authorized D2B2 and explained that prior acceptance work was split into too many micro-tests, delaying progress to the next implementation task.

Locked interaction rule from this point:

```text
- finish one bounded implementation subgroup
- issue the complete acceptance batch once
- user may return all evidence in one response
- do not split one subgroup into isolated state checks unless a real defect blocks the batch
- a defect reopens only its smallest owner; it does not broaden the task
```

## 2. Current status

```text
R1-D1: closed
R1-D2A: closed
R1-D2B1 native-field composition and functional closure: passed
R1-D2B2: started
Checkout: Not done
```

D2B1 closure evidence includes:

```text
malformed email blocked
one visible invalid-email notice
valid fields reach Step 02
Billing values and Order notes persist
country/state behavior works
Ship to a Different Address expands and collapses one native Shipping set
no duplicate Billing/Shipping fields
Optional-note orphan wrapper remains closed
```

## 3. Visual authority

Source-backed references:

```text
preview/spatial-flow-checkout-v1.html
preview/spatial-flow-checkout-flow-v1.css
preview/spatial-flow-checkout-mobile-commerce-v1.css
```

Reference requirements used by D2B2:

```text
- Contact / Delivery address / Optional note remain three semantic panels
- native WooCommerce fields remain single instances
- desktop panels are editorial sections separated by rules, not nested rounded cards
- mobile panels use the accepted warm editorial surface
- labels use compact uppercase Mono treatment
- inputs/selects/textarea use square borders
- Step-01 fields use thin line icons without new wrapper markup
- focus state remains visible
- Select2 Country/State controls remain native and usable
- Ship-to-different-address remains one native checkbox
- desktop actions use square V2 controls
- mobile primary action uses the accepted stone/green treatment
```

## 4. Runtime ownership and file scope

Allowed file:

```text
assets/css/checkout-safe5.css
```

No changes:

```text
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js
assets/css/spatial-flow.css
functions.php
WooCommerce field IDs/names/order values
Step 02
Step 03
Order Summary/Coupon/Trust
Crypto plugin
```

## 5. Exact current baseline

```text
assets/css/checkout-safe5.css
27,327 bytes
829 lines
SHA256: e807b1b63e225d991832e1490c4dfadcec842aeaec6171c85688d58fbe633937
Line endings: CRLF
Final newline: none
```

Other coupled files remain:

```text
form-checkout.php
9,847 bytes / 287 lines
SHA256: 81e81fb9d35e0aa41311686c51d0bae276bfc017f042d5b633ad41724c82bfa2

checkout-safe5.js
24,683 bytes / 818 lines
SHA256: 368ed12b7f6771d532c25bd54b65cf3276ce297bc9d2390a62bd45eec6fa1e4d
```

## 6. Bounded replacements

D2B2 uses three in-place replacements inside `checkout-safe5.css`:

```text
A. Replace the existing Step-01 native-field composition block
B. Replace the existing SAFE5 action-control block
C. Replace the existing mobile Step-01 panel block inside the current max-width: 767px media query
```

No file-end append and no new breakpoint.

## 7. Source-backed implementation content

Replacement A adds:

```text
- removal of legacy rounded #customer_details / billing/additional wrapper surfaces
- preservation of native field rows and two-column desktop grid
- compact Mono labels and clay required marker
- square input/select/textarea surfaces
- native Select2 Country/State support
- accessible focus state
- inherited per-row SVG icon variables for Billing and Shipping fields
- Order notes icon
- normalized native Ship-to-different-address checkbox
```

Replacement B adds:

```text
- square desktop actions
- V2 Mono typography and spacing
- primary/secondary hover hierarchy
```

Replacement C adds:

```text
- mobile wrapper neutralization
- accepted warm panel surface
- 47px controls
- 15px line icons
- compact mobile labels and spacing
- stone/green primary button
```

## 8. Expected post-change integrity

```text
assets/css/checkout-safe5.css
39,435 bytes
1,146 lines
SHA256: 4224a912090c5be378eae4f3ce0d9de2fbcbc8a631c5b5747b8ac4c4f2b05d00
```

Delta:

```text
+12,108 bytes
+317 lines
+44.31%
```

The increase exceeds the normal 15% review threshold and is explicitly audited rather than ignored.

Growth source:

```text
- eight reference-derived inline SVG icon definitions
- narrow high-specificity neutralization of legacy shared Checkout CSS
- native Select2 support
- desktop/mobile field and focus surfaces
- action-control migration
```

It is not caused by:

```text
bottom append
new page logic
new WooCommerce fields
field cloning
new breakpoint
payment/shipping/order code
```

Static validation on the reconstructed exact baseline:

```text
CSS parse errors: 0
Braces: 145 / 145
Comments: 14 / 14
New breakpoint: no
PHP change: no
JavaScript change: no
```

## 9. Acceptance model

After installation, D2B2 receives one consolidated batch only:

```text
1366 × 768 full Step 01
390 × 844 full Step 01
360 × 800 full Step 01
one focus-state screenshot
one expanded Ship-to-different-address screenshot
```

The batch checks all of the following together:

```text
fonts and hierarchy
square fields
icons
Country/State native controls
textarea
checkbox
panel spacing
button hierarchy
desktop two-column grid
mobile gutter
no clipping or horizontal overflow
no duplicate fields
```

Do not split these into separate conversational gates unless the batch exposes a defect.

## 10. Current stop point

```text
D2B2 source audit: complete
D2B2 replacement code: ready to issue
Runtime installation: pending
Next action: user applies the three exact CSS replacements
Checkout: Not done
```
