# Step 4F · R1 Step-03 Payment V2 Visual Runtime Acceptance

Date: 2026-08-07
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

After installing the coordinated four-file Step-03 Payment V2 source unit, the user supplied live screenshots at desktop, 390px mobile, and 360px mobile.

This record accepts only what the screenshots directly prove. Functional interactions not explicitly reported by the user remain open.

## Visual evidence accepted

The screenshots confirm all of the following:

```text
Desktop / 1366-class view:
- Step 03 Intro now shows Payment-specific copy
- title is Choose the payment.
- kicker is Secure checkout · Step 03 of 04
- progress shows Address and Shipping complete, Payment active
- panel shows Payment · 03 / How should it settle?
- two real WooCommerce payment-method entries remain visible
- currently selected gateway keeps its native payment_box visible
- native privacy text remains visible
- native Terms checkbox remains visible
- native Place Order is visible once
- legacy duplicate sf-checkout-trust block is no longer visible in the payment host
- Back to Shipping remains present
- Step-03 Before it leaves. context is present
- context contains real Deliver to / Contact / Shipping method information
- Order Summary remains present
- no visible horizontal overflow, clipping, or column collapse

390px mobile:
- Payment-specific Intro remains intact and readable
- Before it leaves. is ordered before the Payment panel
- Payment panel remains ordered before Back to Shipping and Order Summary
- two real gateway entries remain visible
- selected gateway detail surface remains visible
- native privacy / Terms / Place Order remain present
- no visible horizontal overflow or clipped gateway content

360px mobile:
- same responsive ordering and ownership remain intact
- long Intro copy wraps without overflow
- Before it leaves. remains readable
- payment gateway host remains bounded and readable
- Terms / Place Order remain usable-looking and unclipped
- Order Summary remains below Payment
```

The logged-in WordPress admin bar shown on the mobile screenshots is an administrator-only environment surface and is not classified as a Checkout defect.

## Dynamic gateway conclusion

The live screenshots still show the two current real WooCommerce gateways simultaneously.

This confirms the Step-03 visual migration did not collapse the native gateway list to a hardcoded single method.

However, screenshots alone do not prove click switching or gateway submission behavior; those remain functional acceptance items.

## Visual defects

No new blocking Step-03 visual defect is established from this screenshot batch.

The previously recorded R2 notification/error visual defect remains separate and open.

## Functional items still open

The following must not be marked passed until the user explicitly reports them:

```text
1. switch from the currently selected gateway to Pay with Crypto and back
2. selected gateway payment_box opens/closes correctly
3. gateway-owned content remains usable after switching
4. Edit address returns to Step 01
5. Shipping-method Edit returns to Step 02
6. Back to Shipping returns to Step 02
7. state persists when returning to Step 03
8. Step-03 context re-syncs after returning
9. unchecked Terms blocks Place Order without order creation/redirect
10. Step-03 backend-editable copy save/render/clear-to-default acceptance
```

## Status

```text
R1 Step-03 Payment V2 source: accepted
Installation: confirmed
Visual runtime acceptance at desktop / 390 / 360: passed
Native multi-gateway presence after migration: passed visually
Functional interaction acceptance: open
Backend editability runtime acceptance: open
R1 Step-03 Payment V2: in progress
Checkout: Not done
```
