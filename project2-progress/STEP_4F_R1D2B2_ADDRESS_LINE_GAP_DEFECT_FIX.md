# Step 4F · R1-D2B2 Native Address-Line Gap Defect Fix

Date: 2026-08-05  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Classification correction

The user identified that the native Street address and Apartment / suite inputs were visually attached with no vertical gap.

This was a review omission, not an intentionally deferred item.

```text
D2B2 had been incorrectly closed.
D2B2 is reopened.
Step 02 Shipping V2 remains blocked until this defect closes.
```

## 2. Strict 1:1 authority

The accepted static Checkout CSS defines:

```text
desktop form-row margin-bottom: 18px
mobile form-row margin-bottom: 11px
```

The live native rows affected are:

```text
#billing_address_1_field
#billing_address_2_field
#shipping_address_1_field
#shipping_address_2_field
```

The generic form-row spacing did not produce the accepted visual gap on these native WooCommerce address pairs. The fix therefore adds a narrow, higher-specificity address-row rule rather than altering all Checkout fields.

## 3. Runtime scope

Allowed file only:

```text
assets/css/checkout-safe5.css
```

No changes:

```text
form-checkout.php
checkout-safe5.js
spatial-flow.css
WooCommerce field IDs/names/order
Step 02
Step 03
Order Summary
Crypto plugin
```

## 4. Exact pre-fix baseline

```text
39,435 bytes
1,146 lines
SHA256: 4224a912090c5be378eae4f3ce0d9de2fbcbc8a631c5b5747b8ac4c4f2b05d00
CRLF
no final newline
```

## 5. Fix method

Two in-place replacements:

```text
A. Extend the existing desktop .sf-safe5-address-panel .form-row block with explicit address-line spacing.
B. Extend the existing mobile form-row spacing block with an 11px address-line override.
```

No bottom append and no new breakpoint.

## 6. Expected post-fix integrity

```text
40,397 bytes
1,181 lines
SHA256: a3bd84e46458fa9fb703f4a31b2338e953ecc7b850f5208b3a1b5448f8963cea
Braces: 148 / 148
Comments: 15 / 15
CRLF
no final newline
```

## 7. Acceptance and next step

After source integrity passes, only two focused runtime screenshots are required:

```text
desktop address-line pair
one mobile address-line pair at 390px or 360px
```

Pass condition:

```text
Street address and Apartment / suite are visibly separate by the accepted reference spacing.
No other field geometry regresses.
```

After pass:

```text
D2B2 closes.
Next implementation group: Step 02 Shipping V2 migration.
Checkout remains Not done.
```
