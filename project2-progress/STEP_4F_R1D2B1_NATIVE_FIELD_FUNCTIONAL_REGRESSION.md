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

## 4. Active gate

```text
Gate 1: Country / state dynamic behavior
```

Procedure:

```text
- start on Step 01 at 360px
- change Country / Region from Hong Kong to United States (US)
- wait for WooCommerce country/state update to complete
- verify Region becomes a United States state selector
- verify no billing field is duplicated
- verify Optional note blank wrapper does not return
```

Expected result:

```text
#billing_country remains the original native field
#billing_state remains one native field and changes its UI/options for US
field IDs/names remain unchanged
no duplicate field rows appear
no blank Optional-note wrapper reappears
```

## 5. Current stop point

```text
D2B1 visual structure: passed
Optional-note orphan wrapper: closed
D2B1 functional regression: started
Active gate: Country / state dynamic behavior
Source edits: none
D2B1: not closed
D2B2: blocked
Checkout: Not done
```
