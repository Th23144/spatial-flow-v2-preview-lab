# Step 4F · R1-D2B1 Ship-to-Different-Address Expansion Evidence

Date: 2026-08-04  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Evidence

The user supplied a live mobile Step-01 screenshot with:

```text
Ship to a Different Address? = checked
```

## Confirmed runtime result

The screenshot shows one visible native Shipping address field set containing:

```text
First name
Last name
Country / Region
Street address
Apartment / suite
Town / City
State
ZIP Code
```

The existing Billing field set remains present once above it.

No visible duplicate Shipping field group appears.

The Contact / Delivery / Optional note panel structure remains intact.

## What remains unproven

The screenshot does not prove that unchecking the same native control hides the same Shipping field set again.

Required closure action:

```text
- uncheck Ship to a Different Address?
- wait for WooCommerce transition
- confirm the expanded Shipping fields disappear
- confirm the checkbox remains present once
- confirm no blank Optional-note wrapper returns
```

## Classification

```text
Gate 3 expansion: passed
Gate 3 single Shipping set: passed visually
Gate 3 collapse: pending
Gate 3 overall: partial, not closed
D2B1: not closed
Checkout: Not done
```
