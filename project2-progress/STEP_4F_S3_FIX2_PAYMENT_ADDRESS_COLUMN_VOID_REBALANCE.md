# Step 4F · S3 FIX2 · Payment Address-Column Void Rebalance

Last updated: 2026-07-31  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User-observed issue

On the Step 03 Payment page, the approved context-card grid uses:

```text
left: Deliver to
right-top: Contact
right-bottom: Shipping Method
```

Because the right column contains two stacked sections, the left address column stretches to the same overall height and leaves a visibly large unused area below the address text.

The user explicitly identified the lower-left void, not the overall card typography or any other page area.

## Exact correction

Only the Step 03 `Before it leaves.` card was changed.

```text
- move Edit address out of the card title row
- place Edit address at the bottom of the left address column
- add a light divider above the action
- keep the approved two-column internal architecture
- keep all address, contact and shipping information
- preserve the mobile two-column derivative
```

This turns the formerly empty lower-left area into the address section's operational footer.

## Files changed

```text
preview/spatial-flow-checkout-payment-v1.html
preview/spatial-flow-checkout-context-v1.css
```

## Explicit non-scope

```text
- Step 02 Shipping page
- Payment-method area
- Order Summary
- Header / Footer
- shared Checkout flow geometry
- WordPress / WooCommerce live source
```

## Status

```text
Implemented; waiting for user visual acceptance.
Checkout remains: Not done
Phase S4 Crypto asset/network page: not started
```
