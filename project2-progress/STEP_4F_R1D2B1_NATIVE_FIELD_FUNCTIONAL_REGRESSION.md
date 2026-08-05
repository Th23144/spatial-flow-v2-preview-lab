# Step 4F · R1-D2B1 Native Field Functional Regression

Date: 2026-08-04  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authorization

User instruction:

```text
开始
```

Decision:

```text
R1-D2B1 visual structure remains accepted.
Run functional regression for the moved native WooCommerce fields.
No source change is authorized during this test group.
Checkout remains Not done.
```

## 2. Installed source state

```text
form-checkout.php
9,847 bytes / 287 lines
SHA256: 81e81fb9d35e0aa41311686c51d0bae276bfc017f042d5b633ad41724c82bfa2

checkout-safe5.js
24,683 bytes / 818 lines
SHA256: 368ed12b7f6771d532c25bd54b65cf3276ce297bc9d2390a62bd45eec6fa1e4d

checkout-safe5.css
27,327 bytes / 829 lines
SHA256: e807b1b63e225d991832e1490c4dfadcec842aeaec6171c85688d58fbe633937
```

## 3. Functional gates

```text
1. Country / state dynamic behavior
2. No duplicate Billing or Shipping fields after WooCommerce refresh
3. Ship to a Different Address toggle
4. Malformed email blocking after field movement
5. Step 01 → Step 02 navigation with valid native values
6. Optional note wrapper remains stable after repeated update_checkout events
```

## 4. Gates completed

Authoritative evidence:

```text
project2-progress/STEP_4F_R1D2B1_COUNTRY_STATE_RUNTIME_EVIDENCE.md
project2-progress/STEP_4F_R1D2B1_STATE_SELECTION_RETENTION_ACCEPTANCE.md
```

Confirmed runtime results:

```text
- Country / Region changes from Hong Kong to United States (US)
- Region transforms into the native US State selector
- State option California can be selected
- California remains displayed after the WooCommerce update cycle
- US labels update to Town / City, ZIP Code and State
- Billing fields remain visible once after refresh
- Contact / Delivery / Optional note composition remains intact
- Optional-note orphan wrapper does not return
- mobile gutter and Order Summary remain intact
```

Classification:

```text
Gate 1 Country/state dynamic behavior: passed
Gate 2 no duplicate Billing fields after refresh: passed visually
Gate 6 Optional-note stability after update cycles: passed visually to this point
```

## 5. Active gate

```text
Gate 3: Ship to a Different Address toggle
```

Procedure:

```text
- remain on Step 01
- check Ship to a Different Address
- wait for WooCommerce to reveal the native shipping-address fields
- confirm one Shipping field set appears
- confirm Billing fields remain present once
- confirm Optional-note blank wrapper does not return
```

Expected result:

```text
.woocommerce-shipping-fields remains one native block
.shipping_address becomes visible
shipping_first_name, shipping_last_name, shipping_country and related native fields appear once
unchecking the control hides the same native Shipping field set
no duplicated Billing or Shipping rows are introduced
```

## 6. Current classification

```text
Gate 1: passed
Gate 2 Billing duplicate check: passed visually
Gate 3: active
Gate 4: pending
Gate 5: pending
Gate 6: passed visually so far; final stability check remains part of closure
D2B1: not closed
D2B2: blocked
Checkout: Not done
```

## 7. Current stop point

```text
Active action: test Ship to a Different Address toggle
Source edits: none
Do not advance to malformed-email regression until Gate 3 closes
```
