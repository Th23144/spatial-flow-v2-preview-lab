# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-20  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-A audit：Complete.
Step 4E-B0 manual map：Complete.
Step 4E-B1-A through B1-H：Passed.
Step 4E-B2-A1 deletion-first attempt：Rejected / rolled back.
R5-B canonical implementation：Passed as cleaned baseline, not final 1:1.
R5-C1 through R5-C4 cleanup：Passed / closed.
R5-D1 source/ownership：Passed.
R5-D2 editability/dynamic ownership：Passed / closed.
R5-D3 strict visual acceptance：Failed / reopened.
R5-D4 native regression：Failed / reopened.
R5-D5 binary decision：Blocked.
R5-E1 exact source/state audit：Complete.
R5-E2 synchronized live counts：Passed / closed.
R5-E3 empty-Cart parity：Passed / closed.
R5-E4 strict geometry, canvas, breadcrumb and recommendation visual rebase：Passed / closed.
R5-E5 notice source audit and first CSS artifact：Passed technically / failed visually.
R5-E5-FIX1 source and exact CSS validation：Passed.
R5-E5-FIX1 runtime frame removal：Failed / warm rectangular wash still perceptible.
R5-E5-FIX2 static-reference comparison and exact artifact validation：Passed.
R5-E5-FIX2 BlockUI filled wash removal：Passed.
R5-E5-FIX2 residual composition acceptance：Failed / implied frame remained.
R5-E5-FIX3 exact CSS artifact validation：Passed.
R5-E5-FIX3 Coupon / Apply / Update de-boxing：Passed.
R5-E5-FIX3 implied-frame runtime acceptance：Failed.
R5-E5-FIX4 speculative CSS proposal：Cancelled before execution.
R5-E5-S1 strict source/DOM ownership audit：Complete.
Current executable phase：R5-E5-S2 exact bounded implementation planning from the latest local PHP / JS / CSS files.
Cart page status：Not done.
```

## Current exact baselines

```text
functions.php
Deployed artifact: functions(17).php
Version: 2.7.8
Size: 555,130 bytes
Logical lines: 10,366
SHA256: ab7c9b1a893b2fdfaf8db7947fcf82974e8c1d71b54c8f0d17fe32029e5f5d86
PHP syntax: Passed
Braces: 1,215 / 1,215

assets/js/spatial-flow.js
Size: 70,828 bytes
Logical lines: 1,995
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
Braces: 378 / 378

assets/css/spatial-flow.css
Current deployed artifact: spatial-flow(34).css
Size: 698,076 bytes
Logical lines: 23,406
SHA256: 3e6b0d6fa292681cee1c2936e744314b4347a0bcc82ea3e7cd911d5cac1969ce
Braces: 3,638 / 3,638
Comments: 337 / 337
CSS parser errors: 0
Line endings: LF
Final newline: present
```

## Strict static contract

Authoritative source:

```text
preview/spatial-flow-cart-v1.html
```

Required result:

```text
- keep 7fr / 5fr and 80px gap
- keep the product-only left visual plane
- keep every static product-row bottom divider
- keep the right Order Summary as the only filled Cart surface
- do not leave the native WooCommerce actions footer visible below products
- preserve real quantity, Coupon, nonce, notices, Undo, totals and shipping behavior
```

## Completed S1 ownership conclusion

Official WooCommerce 10.4.3 owns Coupon, Update Cart, `woocommerce_cart_actions` and `woocommerce-cart-nonce` inside the final `td.actions` row of `.woocommerce-cart-form`. Native cart.js delegates form events, serializes the form, replaces `.woocommerce-cart-form` and `.cart_totals`, and triggers `updated_wc_div` / `updated_cart_totals`.

Therefore:

```text
- deleting or moving native controls outside the form is unsafe
- a one-time DOM move is not durable
- CSS-only visual refinement cannot produce strict 1:1
- no Cart template override is required for the first bounded solution
```

Detailed audit:

```text
project2-progress/STEP_4E_B2_R5_E5_S1_STRICT_SOURCE_DOM_OWNERSHIP_AUDIT.md
```

## R5-E5-S2 target implementation

```text
1. Keep the native actions row and nonce inside the Cart form but remove it from the visible layout with an accessible clipped owner.
2. Keep the final product divider exactly as the static source.
3. Debounce quantity changes and programmatically invoke the hidden native Update Cart submit button.
4. Render one narrow production-only Coupon control in Order Summary.
5. Copy the visible Coupon value into the hidden native #coupon_code and invoke the hidden native apply_coupon button.
6. Use delegated JavaScript so WooCommerce form/totals replacement remains safe.
7. Mirror native Coupon validation into the visible Order Summary control.
8. Preserve wc-cart-fragments as the only live-count refresh owner.
```

## Files required before exact manual instructions

```text
1. functions(17).php
2. assets/js/spatial-flow.js
3. spatial-flow(34).css
```

All three must be the exact current local files. After validation, S2 will issue exact anchors, expected metrics/hashes, runtime gates and rollback ranges.

## Freeze

```text
- do not execute cancelled FIX4
- do not remove the final product divider
- do not create a Cart template override
- do not append another general Cart CSS patch
- do not modify Checkout, payment, orders, Header, Footer or version 2.7.8
- do not mark Cart Completed 1:1
```

## Remaining sequence

```text
R5-E5-S2 exact-file validation + bounded implementation plan
→ exact edited-artifact validation
→ R5-E5 runtime acceptance
→ R5-E6 final strict acceptance
→ binary Cart status decision
```