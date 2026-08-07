# Step 4F · R1 Step-03 Payment V2 Full Acceptance and Close

Date: 2026-08-07  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user confirmed that the complete Step-03 backend-editable copy runtime protocol passed after the previously accepted source-integrity, installation, visual and functional interaction batches.

## Final Step-03 acceptance

The following are now user-confirmed passed at runtime:

```text
- desktop 1366 Step 03 visual structure
- mobile 390 Step 03 visual structure
- mobile 360 Step 03 visual structure
- Payment-specific Intro copy
- Payment · 03 / How should it settle? panel
- Before it leaves. Step-03 context card
- real address/contact/shipping-method context
- two currently enabled native WooCommerce gateways remain visible
- switching between the two gateways works
- selected native payment_box opens/closes correctly
- gateway-owned content remains intact
- native Terms/privacy remain visible
- unchecked Terms blocks submission without order creation/redirect
- native Place Order remains present exactly once
- Edit address returns to Step 01
- Shipping-method Edit returns to Step 02
- Back to Shipping returns to Step 02
- returning to Step 03 preserves state and re-syncs context
```

## Backend-editable Step-03 copy

The user confirmed all 9 visible Step-03 settings passed save/render testing:

```text
1. Step 03 label
2. Step 03 Intro title
3. Step 03 Intro description
4. Step 03 card small label
5. Step 03 card title
6. Step 03 card description
7. Step 03 shipping-method label
8. Step 03 shipping-method edit action
9. Back to Shipping button text
```

Also confirmed:

```text
- heading <em> markup renders correctly
- edited navigation labels do not break their actions
- native gateway switching remains functional while test copy is active
- clearing all 9 tested fields restores default fallbacks automatically
- WooCommerce gateway labels/descriptions, Shipping method truth, Terms/privacy and Place Order remain native/dynamic
```

Shared `Before it leaves.`, `Deliver to`, `Contact`, and `Edit address` copy ownership had already passed full runtime testing in Step 02 and remains reused without regression.

## Ownership boundary retained

Step 03 does not hardcode or replace WooCommerce payment truth.

```text
WooCommerce owns:
- gateway registry and availability
- gateway labels and native descriptions
- gateway fields / iframe / nonce content
- Terms / privacy
- Place Order and checkout submission

SAFE5 owns:
- Step-03 presentation copy
- Step-03 layout/visual treatment
- read-only address/contact/shipping context presentation
```

Spatial Flow Crypto Pay Trial remains V0.2.5 and is untouched by this Step-03 migration.

## Deferred checks

Successful order creation and Crypto redirect are intentionally not claimed by this closure. They remain in the later consolidated R1 end-to-end acceptance batch:

```text
- normal test gateway -> exactly one WooCommerce order
- duplicate-order protection
- Crypto -> exactly one on-hold order -> /crypto-pay/
```

The known visually poor Checkout error/notice presentation remains mandatory R2 scope and is not dismissed by Step-03 closure.

## Status

```text
R1 Step-03 Payment V2: completed and closed
Batch 4 · Step-03 Payment acceptance: completed
Checkout overall: Not done
Next bounded R1 group: Order Summary / coupon / trust migration
Next manual acceptance: Batch 5
```
