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
Begin functional regression for the moved native WooCommerce fields.
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

The following gates must pass before D2B1 can close:

```text
1. Country / state dynamic behavior
2. No duplicate billing or shipping fields after WooCommerce refresh
3. Ship to a Different Address toggle
4. Malformed email blocking after field movement
5. Step 01 → Step 02 navigation with valid native values
6. Optional note wrapper remains stable after repeated update_checkout events
```

## 4. Gate 1 runtime evidence

Authoritative evidence record:

```text
project2-progress/STEP_4F_R1D2B1_COUNTRY_STATE_RUNTIME_EVIDENCE.md
```

The user changed:

```text
Country / Region: Hong Kong → United States (US)
```

The live `360px` screenshot confirms:

```text
- Country / Region remains present once and displays United States (US)
- the former Hong Kong Region control becomes a US State selector
- the selector displays “Select an option...”
- labels update to Town / City, ZIP Code and State
- no duplicate Billing fields are visible
- Contact / Delivery / Optional note composition remains intact
- the Optional-note blank wrapper does not return
- mobile gutter and Order Summary remain intact
```

The screenshot does not prove that a concrete state can be selected and retained after the WooCommerce update cycle.

Gate 1 remaining sub-check:

```text
Select one US state, wait for the update cycle, and confirm it remains selected.
```

## 5. Current classification

```text
Country change reaction: passed
Region → State transformation: passed
Duplicate-field check after country update: passed visually
Optional-note wrapper stability after country update: passed visually
Concrete state selection/retention: pending
Gate 1: partial, not closed
Gates 2–6: not started or not independently closed
D2B1: not closed
D2B2: blocked
Checkout: Not done
```

## 6. Current stop point

```text
Active action: select and retain one US state
Source edits: none
Do not advance to shipping-address toggle until Gate 1 closes
```
