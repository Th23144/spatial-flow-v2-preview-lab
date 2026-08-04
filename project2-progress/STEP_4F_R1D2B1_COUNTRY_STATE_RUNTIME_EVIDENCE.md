# Step 4F · R1-D2B1 Country / State Runtime Evidence

Date: 2026-08-04  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Evidence

The user supplied a live `360px` Step-01 screenshot after changing:

```text
Country / Region: Hong Kong → United States (US)
```

## 2. Confirmed runtime results

The screenshot confirms:

```text
- the original Country / Region field remains present once
- Country / Region displays United States (US)
- the former Hong Kong Region control changes to a State selector
- the State selector displays “Select an option...”
- labels also update to US-specific wording: Town / City, ZIP Code, State
- no duplicate Billing fields are visible
- Contact / Delivery / Optional note panel composition remains intact
- the Optional-note blank orphan wrapper does not return
- mobile body gutter and Order Summary remain intact
```

## 3. What the screenshot does not prove

The screenshot does not independently prove that a concrete state option can be selected and retained after WooCommerce refresh.

Remaining sub-check:

```text
Select one US state (for example California), wait for the update cycle, and confirm the selected state remains displayed.
```

## 4. Classification

```text
Country change reaction: passed
Region → State control transformation: passed
Duplicate-field check: passed visually
Optional-note wrapper stability: passed visually
Concrete state selection/retention: pending
Gate 1 overall: partial, not closed
D2B1: not closed
Checkout: Not done
```
