# Step 4F · S3 FIX3 · Compress Shipping Context and Restore Edit Placement

Date: 2026-07-31

## Scope

This correction is limited to the Step 03 `Before it leaves.` context card in:

```text
preview/spatial-flow-checkout-payment-v1.html
preview/spatial-flow-checkout-context-v1.css
```

No Step 02, Order Summary, payment-method, global header/footer, or live WordPress/WooCommerce source was changed.

## User-reported issue

The prior FIX2 moved `Edit address` to the bottom of the left address column. The resulting action placement was visually poor and did not solve the actual concern cleanly.

The real target was the excessive vertical spacing inside the right-side `Shipping method` section, which made the right column unnecessarily tall and created a large empty area beneath the address column.

## Correction

```text
- Restore Edit address visually to the card title area.
- Remove it from the normal address-column flow by positioning the existing link at the card top-right.
- Compress the vertical gap before Shipping method.
- Compress Shipping method heading/value/detail spacing.
- Keep all address, contact, shipping method, estimate, and price information.
- Preserve the approved desktop and mobile internal two-column grid.
```

## Source commit

```text
6d2aafdeee6790b549ac70185d2e73365701ce46
```

## Status

```text
Step 03 context-card FIX3: implemented, awaiting focused visual review
Checkout: Not done
Phase S4 Crypto asset/network workspace: not started
```
