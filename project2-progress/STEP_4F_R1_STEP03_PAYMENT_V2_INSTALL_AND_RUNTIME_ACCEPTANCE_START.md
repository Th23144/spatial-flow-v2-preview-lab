# Step 4F · R1 Step-03 Payment V2 Installation and Runtime Acceptance Start

Date: 2026-08-07
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user confirmed that the four coordinated Step-03 files were installed together into the active theme after source-integrity acceptance.

Installed source unit:

```text
functions.php
SHA256: 978b9cc033e5ab241127bde5d77e843d4b85dd08722148a703fbf2cf3d105c58

woocommerce/checkout/form-checkout.php
SHA256: 5b285cd74e4f0aacca5339d8a9095ab23a1be1b5c4f248d5bedc83ed2b146572

assets/js/checkout-safe5.js
SHA256: 66479f8cc357f7c9cda1ffd92cc45a6c908a589c27395d96efbd21d5d5683d9c

assets/css/checkout-safe5.css
SHA256: a3a83cd5f8ac3c76d1c333fd05debe338176fb1ea76604e0c8a4e0f94595ad39
```

## Status boundary

Source-integrity acceptance is complete, but runtime Step-03 acceptance has not yet been performed.

Therefore:

```text
R1 Step-03 Payment V2 source: accepted
R1 Step-03 Payment V2 installation: confirmed by user
Runtime visual/functional acceptance: open
Checkout: Not done
```

## Runtime acceptance batch

The next user-run acceptance batch must verify:

```text
A. Visual structure
- desktop 1366 complete Step 03
- mobile 390 complete Step 03
- mobile 360 complete Step 03
- Step-03 Intro shows Payment-specific copy
- Step-03 panel shows Payment · 03 / How should it settle?
- Before it leaves. Payment context appears
- no clipping / overflow / duplicate trust block

B. Native gateway ownership
- all currently enabled real WooCommerce gateways remain visible
- current environment presently has two visible gateways
- switching between gateways works
- selected gateway native payment_box opens/closes correctly
- gateway-owned fields/descriptions remain usable
- no gateway ID or label is hardcoded by SAFE5

C. Native order controls
- Terms/privacy remain visible
- rejecting unchecked Terms still works
- native #place_order exists exactly once
- Place Order remains WooCommerce-owned

D. Navigation/context
- Back to Shipping returns to Step 02
- state persists
- Edit address returns to Step 01
- Edit Shipping returns to Step 02
- returning to Step 03 re-syncs address/contact/shipping method

E. Backend-editable Step-03 copy
- representative heading save/render test
- representative textarea save/render test
- representative normal text/action save/render test
- clearing tested fields restores defaults
```

Order creation and Crypto redirect are still reserved for the later consolidated R1 end-to-end batch unless this runtime test reveals a Step-03-specific defect.
