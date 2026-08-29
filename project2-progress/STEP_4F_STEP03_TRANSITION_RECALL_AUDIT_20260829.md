# Step 4F · Step 03 → Step 04 Transition Recall Audit

Date: 2026-08-29
Purpose: reconstruct why Checkout Step 03 was allowed to move forward before Step 04, and distinguish explicit deferrals from later architectural corrections.

## Chronology reconstructed

### 2026-07-30 — user corrected the Checkout contract
- Step 03 must be the payment-completion stage.
- Step 04 is the post-payment Order Confirmed / Thank You / receipt result, not a review stage.
- Desktop Step 03 should remain a two-column composition.
- Crypto should not be treated as a normal bank-card inline accordion because token/network/payment-workspace complexity is higher.
- User accepted an in-flow dedicated Crypto workspace / waiting surface rather than a modal.
- At that time only Crypto was actually enabled; future production gateways were not yet fixed. Therefore the plan was to lock a dynamic payment host and the real current Crypto path rather than invent future gateways.

### 2026-07-31 — first-phase Crypto implementation plan
Locked flow:
`Project 2 Checkout Step 03 -> Woo order -> on-hold -> official order-pay -> still presented as Step 03 Crypto Workspace -> invoice -> transaction hash -> server verification -> payment_complete() -> Step 04`.

The first phase intentionally fixed USDT/TRON and deferred QR, countdown, invoice expiry, automatic scanning, WalletConnect, multi-asset/network switching and rate-lock work.

### 2026-08-07 — Step 03 host accepted under the then-current R1 contract
Runtime acceptance explicitly included desktop/mobile Step-03 visual structure, the Payment · 03 panel, native WooCommerce gateways, gateway switching, native payment_box, gateway-owned content, Terms/privacy, exactly one Place Order, navigation back to Steps 01/02, and backend-editable Step-03 copy.

Important: the acceptance record does NOT state that the user explicitly chose to defer or tolerate a visually unfinished white gateway-card treatment. It records the Step-03 visual structure as passed. Therefore there is no source-supported basis for claiming that the current white gateway rows were knowingly deferred by the user before Step 04.

What was explicitly deferred by this close was end-to-end order creation / Crypto redirect validation and the known poor Checkout error/notice presentation.

### 2026-08-16 — later architecture correction, after Step 03 had already been closed
Project 2 briefly added a second theme-side `Selected Payment` panel. Source audit rejected it because WooCommerce native selected gateway + payment_box already owns that role, the implementation hardcoded Crypto into the theme, it was structurally placed after Woo payment output, and moving Place Order would reopen a known regression risk.

That four-file experiment was rolled back. This was NOT the original reason Step 03 moved to Step 04; it was a later correction.

## Correct historical conclusion

There was no explicit user decision equivalent to: “leave the white payment choices unfinished and come back later.”

The actual transition occurred because Step 03 was declared accepted under the R1 acceptance standard at that time, with the native WooCommerce gateway rows treated as the correct live architecture. Later work separated Crypto’s complex payment UI into the plugin-owned order-pay Workspace. The later rejection of the duplicate `Selected Payment` panel only prevented a second theme-side payment-information layer; it does not prove the current native gateway-row skin is visually complete under the newer strict micro 1:1 standard.

Therefore, if the current white gateway rows now fail the project’s strict 1:1 visual standard, that should be treated as a reopened Step-03 visual-parity defect, not as a previously documented user-approved deferral.
