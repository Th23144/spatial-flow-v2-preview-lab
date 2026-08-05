# Step 4F · R1-D2B1 Native Field Functional Regression

Date: 2026-08-04  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authorization

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
project2-progress/STEP_4F_R1D2B1_SHIP_TO_DIFFERENT_ADDRESS_EXPANSION_EVIDENCE.md
```

Confirmed runtime results:

```text
- Country / Region changes from Hong Kong to United States (US)
- Region transforms into the native US State selector
- California can be selected and remains after the WooCommerce update cycle
- US labels update to Town / City, ZIP Code and State
- Billing fields remain visible once after refresh
- Ship to a Different Address can be checked
- exactly one native Shipping address field set expands
- Billing remains present once while Shipping is expanded
- the user confirms unchecking the same control hides the same Shipping field set
- the checkbox remains available
- Contact / Delivery / Optional note composition remains intact
- Optional-note orphan wrapper does not return
- mobile gutter and Order Summary remain intact
```

Classification:

```text
Gate 1 Country/state dynamic behavior: passed
Gate 2 no duplicate Billing/Shipping fields after refresh: passed visually
Gate 3 expansion and collapse: passed
Gate 6 Optional-note stability after multiple update cycles: passed visually to this point
```

## 5. Remaining D2B1 gates

The remaining checks will be combined into one user test batch rather than split into separate micro-tests:

```text
- malformed email remains blocked after field movement
- valid Step 01 values advance to Step 02
- moved values remain present and no duplicate field appears after the transition
- Optional note wrapper remains stable
```

## 6. Current classification

```text
Gate 1: passed
Gate 2: passed visually
Gate 3: passed
Gate 4: pending
Gate 5: pending
Gate 6: passed visually so far; final observation included in the combined closure batch
D2B1: not closed
D2B2: blocked
Checkout: Not done
```

## 7. Current stop point

```text
Active action: issue one combined D2B1 closure test, not further micro-tests
Source edits: none
```
