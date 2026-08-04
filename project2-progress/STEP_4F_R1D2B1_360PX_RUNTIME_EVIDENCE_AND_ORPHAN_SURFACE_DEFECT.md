# Step 4F · R1-D2B1 360px Runtime Evidence and Orphan Surface Defect

Date: 2026-08-04  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Evidence

The user supplied a live `360px` Step-01 screenshot after installing the audited D2B1 PHP, JavaScript and CSS files.

Installed source state:

| File | Bytes / lines | SHA256 |
|---|---:|---|
| `form-checkout.php` | 9,847 / 287 | `81e81fb9d35e0aa41311686c51d0bae276bfc017f042d5b633ad41724c82bfa2` |
| `checkout-safe5.js` | 24,682 / 819 | `7dc849b92771b2dc3092f4faea77022b4dd558b9695df59edd59b521b75b9dde` |
| `checkout-safe5.css` | 26,979 / 817 | `42e45a5fe4ecfd78b976c43efef47dd974a3c8e7b2f67b2a70001ccb586c3b1c` |

## 2. Runtime structure confirmed

The screenshot confirms that D2B1 native-node recomposition executed:

```text
Contact · 01
→ native Billing email field

Delivery address · 01
→ native first name
→ native last name
→ native country/region
→ native address line 1
→ native address line 2
→ native city
→ native postcode
→ native state/region
→ native phone
→ native Ship to a Different Address control

Optional note
→ native Order notes label and textarea
```

Additional visible confirmations:

```text
- form remains before Order Summary
- Continue remains before Return to cart
- accepted mobile outer gutter remains intact
- no visible horizontal overflow
- Order Summary remains rendered
- no duplicated visible billing fields
```

## 3. Defect discovered

Inside the `Optional note` panel, between the explanatory paragraph and the visible `Order notes (optional)` label, the screenshot shows:

```text
one unlabeled, empty, white rounded horizontal surface
```

This surface is not part of the accepted V2 reference and cannot be classified from the screenshot alone.

Possible ownership categories include:

```text
- retained legacy wrapper surface from .woocommerce-additional-fields
- an empty heading/wrapper receiving old shared Checkout styling
- a non-posted decorative/structural node
- a live native/plugin field whose label is hidden
```

No corrective CSS or DOM removal is authorized until its exact DOM node, control ownership and computed geometry are identified.

## 4. Classification

```text
D2B1 native panel recomposition: visibly executed
Contact panel: passed visually at structure level
Delivery panel: passed visually at structure level
Optional note native textarea: visible
Unknown blank surface: failed / blocking
D2B1 overall: partial, not closed
D2B2: blocked
Checkout: Not done
```

## 5. Next evidence required

Run a read-only DOM map scoped to:

```text
.sf-safe5-native-fields--note
.woocommerce-additional-fields
.woocommerce-additional-fields > *
.woocommerce-additional-fields__field-wrapper
#order_comments_field
```

For every visible descendant, capture:

```text
tag / id / class
text content
control id/name/type
parent chain
geometry
background
border
border-radius
padding/margin
display/visibility
```

The next correction must target the exact identified node only. No broad hiding rule and no additional bottom-append override is permitted.
