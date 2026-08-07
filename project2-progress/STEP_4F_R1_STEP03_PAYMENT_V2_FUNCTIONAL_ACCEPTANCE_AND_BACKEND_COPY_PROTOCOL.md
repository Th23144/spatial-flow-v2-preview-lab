# Step 4F · R1 Step-03 Payment V2 Functional Acceptance and Backend-Copy Protocol

Date: 2026-08-07
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user reported that the Step-03 functional interaction batch passed after the prior desktop / 390 / 360 visual runtime acceptance.

## Functional runtime acceptance

User-confirmed pass:

```text
1. switching between the two currently visible real WooCommerce gateways works
2. selected gateway payment_box opens/closes correctly
3. Edit address returns to Step 01
4. Shipping-method Edit returns to Step 02
5. Back to Shipping returns to Step 02
6. state/data persist when returning to Step 03
7. Step-03 context re-syncs after returning
8. unchecked Terms blocks Place Order and prevents order creation / redirect
```

No order-creation / Crypto redirect success-path claim is made here; those remain reserved for the later consolidated R1 end-to-end batch.

## Current Step-03 status

```text
source integrity: passed
installation: passed
visual runtime acceptance: passed
native multi-gateway presence: passed
functional interaction acceptance: passed
backend-editable Step-03 copy runtime acceptance: open
R1 Step-03 Payment V2: in progress
Checkout: Not done
```

## Backend-editable Step-03 copy runtime protocol

Use the existing single WordPress Customizer section:

```text
Appearance -> Customize -> Spatial Flow Checkout Page
```

Do not create or use a second Checkout settings area.

### Step-03 visible fields to test

Test these 9 visible Step-03 settings:

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

The shared `Before it leaves.`, `Deliver to`, `Contact`, and `Edit address` settings were already fully runtime-tested in Step 02 and are reused here; they do not require another exhaustive save/clear test unless a regression is observed.

### Temporary test values

```text
Step 03 label
PAYMENT TEST

Step 03 Intro title
Choose the <em>TEST PAYMENT</em>.

Step 03 Intro description
STEP03 INTRO DESCRIPTION TEST

Step 03 card small label
PAYMENT TEST · 03

Step 03 card title
How should it <em>TEST SETTLE</em>?

Step 03 card description
STEP03 PAYMENT DESCRIPTION TEST

Step 03 shipping-method label
SHIPPING METHOD TEST

Step 03 shipping-method edit action
EDIT SHIPPING TEST →

Back to Shipping button text
← BACK SHIPPING TEST
```

For heading fields, preserve the literal `<em>...</em>` tag. Only the enclosed words should render italic.

### Save/render acceptance

After publishing the Customizer changes:

```text
- hard refresh Checkout
- navigate Step 01 -> Step 02 -> Step 03
- verify all 9 test strings appear in their correct locations
- verify gateway labels/descriptions remain WooCommerce/gateway-owned
- verify Shipping method name/price remains live WooCommerce data
- verify Terms/privacy remain native
- verify native Place Order remains unchanged and present once
```

### Interaction acceptance while test copy is active

Verify:

```text
- EDIT SHIPPING TEST → returns to Step 02
- ← BACK SHIPPING TEST returns to Step 02
- returning to Step 03 restores the 9 test strings and live context data
- switching gateways still works
```

### Clear-to-default acceptance

Clear all 9 tested Customizer fields completely; do not manually retype defaults. Publish, hard refresh, and return to Step 03.

Required default recovery:

```text
Step 03 label
Payment

Step 03 Intro title
Choose the payment.

Step 03 Intro description
Complete payment here. Order confirmation appears only after the selected gateway has been verified.

Step 03 card small label
Payment · 03

Step 03 card title
How should it settle?

Step 03 card description
Choose from the payment methods currently available for this order. Gateway fields, verification and settlement remain controlled by WooCommerce and the selected provider.

Step 03 shipping-method label
Shipping method

Step 03 shipping-method edit action
Edit →

Back to Shipping button text
← Back to Shipping
```

`payment` and `settle` must recover with the intended italic styling from the default `<em>` markup.

If any cleared field renders blank instead of its fallback, backend editability fails.

## Non-theme-owned controls

Do not test theme editing for these because SAFE5 intentionally does not own them:

```text
WooCommerce gateway labels
WooCommerce / gateway payment descriptions and fields
Terms / privacy text
Place Order text / submission behavior
Shipping method name / price
Order totals
```

## Closure rule

Step 03 may be closed only after the user confirms:

```text
all 9 Step-03 copy fields save/render correctly
heading <em> markup renders correctly
navigation still works with edited labels
all 9 fields clear back to defaults
native gateway / Terms / Place Order ownership remains intact
```
