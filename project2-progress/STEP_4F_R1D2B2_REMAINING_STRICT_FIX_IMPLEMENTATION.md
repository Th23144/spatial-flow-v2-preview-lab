# Step 4F · R1-D2B2 Remaining Strict-Fix Implementation

Date: 2026-08-05  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. User clarification

The user's statement that the Checkout remains far from strict 1:1 referred to the complete Checkout implementation, not specifically to D2B2.

```text
D2B2 = remaining bounded Step-01 visual defects
Complete Checkout = still requires Step 02, Step 03, Summary/Coupon/Trust, notices, editable copy, result semantics, CSS cleanup, Crypto and commerce regression
Checkout remains Not done
```

## 2. Current D2B2 source baseline

```text
assets/css/checkout-safe5.css
40,397 bytes
1,181 lines
SHA256: a3bd84e46458fa9fb703f4a31b2338e953ecc7b850f5208b3a1b5448f8963cea
CRLF
no final newline
```

The native address-line spacing defect is fixed and visually accepted in the supplied desktop/mobile evidence.

## 3. Remaining bounded defects

```text
- desktop City/Postcode and State/Phone do not form the accepted two-column pairs
- native Country/State controls lack an explicit visible dropdown affordance
- Select2 open-menu surface has not been migrated to the accepted square editorial language
- Ship to a Different Address contains a non-reference internal top divider
- desktop pairing must reset to one column on phone widths
- Astra scroll-to-top control is not present in the accepted static Checkout and obscures fields on mobile
```

## 4. Allowed scope

Only:

```text
assets/css/checkout-safe5.css
```

No changes:

```text
form-checkout.php
checkout-safe5.js
spatial-flow.css
WooCommerce IDs/names/field movement
Step 02
Step 03
Order Summary
Crypto plugin
```

## 5. Implementation method

Six anchored in-place replacements:

```text
A. Hide the Astra scroll-to-top control on live Checkout only
B. Add explicit desktop City/Postcode and State/Phone grid placement for Billing and Shipping
C. Add visible native/Select2 chevrons and square Select2 dropdown/search/result surfaces
D. Remove the non-reference divider and padding from Ship to a Different Address
E. Reset all explicit desktop field pairs to one column below 767px
F. Preserve two-background icon/chevron positions on mobile controls
```

No file-end append and no new breakpoint.

## 6. Reconstructed expected integrity

```text
assets/css/checkout-safe5.css
44,163 bytes
1,297 lines
SHA256: f03ebf5fd4f3e3cd01ccdad121d98349b1e116c386ce347294e6d39b1a99e5c1
Braces: 159 / 159
Comments: 16 / 16
CSS parse errors: 0
CRLF
no final newline
```

## 7. Acceptance boundary

After source integrity review, one consolidated D2B2 runtime batch will verify:

```text
1366 full Step 01
390 full Step 01
360 full Step 01
desktop Country or State dropdown open
mobile Country or State dropdown open
desktop different-shipping-address open
mobile different-shipping-address open
```

No additional micro-gates unless the consolidated batch exposes a real defect.

## 8. Stop point

```text
D2B2 remaining strict-fix code: ready to issue
Step 02 Shipping V2: blocked
Checkout: Not done
```
