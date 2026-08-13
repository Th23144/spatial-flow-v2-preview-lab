# STEP 4F — Coupon Expanded Editorial Field V4 Patch Prep — 2026-08-13

Status: PREPARED · MANUAL INSTALL PENDING

## Scope
Final visual polish for the **expanded** SAFE5 coupon form before returning to the remaining strict micro 1:1 Checkout work.

This Coupon UI remains a necessary functional extension that does not exist in the static reference, so it is **not** scored as a strict-reference 1:1 mismatch. The design requirement is instead: preserve WooCommerce coupon authority while making the extension feel native to the Spatial Flow editorial system.

## Current accepted baseline
`assets/css/checkout-safe5.css`

- bytes: 137,690
- logical lines: 4,493
- SHA256: `cfe1a06961b437797b80c27751c0c90e5e9bdd8ec65e05cc77632bbf7b6477fb`
- CRLF
- no final newline

## Observed expanded-state problem
The V3 collapsed trigger is accepted, but the expanded form still reads like a generic embedded form: a boxed 46px input plus a heavy solid black Apply button. This creates a visually abrupt utility block inside the editorial Order Summary.

## V4 design decision
Convert the expanded form into an **editorial underline field rail** rather than another card or boxed mini-form:

- keep the collapsed V3 serif row unchanged;
- keep `COUPON CODE` as a small mono label, now clay-accented;
- remove the full rectangular input box and focus halo;
- use a single understated bottom rule for the input;
- turn Apply into a text-weight mono action with a matching underline, not a filled CTA block;
- keep input and Apply on one row on desktop and mobile, including <=480px;
- preserve all coupon JS/server behavior and message owners;
- no new tail FIX block; replace only the existing Coupon owners in place.

## Exact target identity
After the bounded replacements:

- bytes: 138,098
- logical lines: 4,506
- SHA256: `5d7ba977e84aed0a959adde7bde7a401a2c307882a6d9085117180c7b0c6ab1f`
- braces: 530 / 530
- comments: 24 / 24
- CSS parser errors: 0
- CRLF
- no final newline

## Files not touched
- `functions.php`
- `woocommerce/checkout/form-checkout.php`
- `assets/js/checkout-safe5.js`
- `assets/css/spatial-flow.css`

## Stop point
After manual replacement, upload the resulting `checkout-safe5.css` for byte/hash/parser validation. Only after source acceptance should the expanded Coupon state be visually checked. If accepted, close the Coupon extension polish and return to the remaining strict micro 1:1 Checkout finish work.
