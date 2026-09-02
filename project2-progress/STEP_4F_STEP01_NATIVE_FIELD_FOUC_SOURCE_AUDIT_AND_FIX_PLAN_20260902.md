# Step 4F — Step01 Native Field FOUC Source Audit and Fix Plan — 2026-09-02

## Returned source baselines

User returned the current live files after reverting the unrelated BlockUI CSS experiment.

```text
assets/js/checkout-safe5.js
61494 bytes
1860 logical lines
SHA256 ba71dcff2629094e465fb68ada2502ef6d5a96b1d0b6d7eaa1912f54b40bd69c

functions.php
612013 bytes
11689 logical lines
SHA256 9e7e942a56c44ddff521d653e8f9cf7ed14e77678d71a3e450a73c2beeee8410
SPATIAL_FLOW_CHILD_VERSION 2.7.22

woocommerce/checkout/form-checkout.php
37981 bytes
674 logical lines
SHA256 c7af24d516ff9ca90c6cabddc546b709362a27dd91548201e58e4258f7d68f9e
```

These match previously recorded Project 2 baselines for the current accepted Step03/2.7.22 chain.

## Confirmed Step01 root cause

The current implementation intentionally uses progressive enhancement:

1. `form-checkout.php` server-renders the native WooCommerce billing source visibly inside `.sf-safe5-native-customer-source`.
2. `.sf-safe5-address-panels` are CSS-hidden by default.
3. `checkout-safe5.js` is a footer script and initializes after DOM parsing / DOMContentLoaded.
4. `recomposeAddressFields()` moves the original native field nodes into the SAFE5 mounts and only then adds `is-recomposed`.
5. CSS hides the native source and reveals the SAFE5 panels only after `is-recomposed`.

Therefore a full hard refresh can paint the original WooCommerce field layout for one or more frames before JavaScript recomposition completes. This is the user's captured white/rounded native-field flash.

This is not the same defect as the previously diagnosed WooCommerce BlockUI white wash.

## Fix design

Do not move the SAFE5 script to the head and do not permanently hide the native source.

Use a scoped pre-paint progressive-enhancement guard on `#customer_details`:

- a tiny synchronous inline bootstrap inside `#customer_details`, before the native source markup, adds `sf-safe5-js-preparing` while JavaScript is available;
- during `sf-safe5-js-preparing`, CSS hides the native source and exposes the existing SAFE5 address-panel shell;
- `recomposeAddressFields()` runs synchronously and populates those already-visible mounts;
- existing `is-recomposed` rules remain authoritative after successful recomposition;
- an independent timeout removes `sf-safe5-js-preparing` after a bounded interval so the original native source automatically returns if the external SAFE5 script fails;
- with JavaScript disabled, the bootstrap never runs, so the original WooCommerce source remains visible immediately.

This preserves native WooCommerce ownership and the historic fallback requirement while removing the incorrect first-paint UI.

## Scope

Planned change only:

```text
woocommerce/checkout/form-checkout.php
assets/css/checkout-safe5.css
```

No change required to:

```text
assets/js/checkout-safe5.js
functions.php
WooCommerce field IDs/names/order
payment gateways
order submission
packaging logic
```

## Step03 classification

Current source audit shows Step03 does not use the Step01 recomposition mechanism. `woocommerce_checkout_payment()` is server-rendered directly inside `.sf-safe5-payment-mount`, and Step03 is server-hidden until navigation reveals it.

Therefore any remaining Step03 white flash must be treated as a separate runtime defect (likely in the WooCommerce/AJAX payment refresh path) rather than applying the Step01 fix blindly.

## Status

```text
Step01 FOUC root cause: CONFIRMED
Returned current source: BASELINE MATCH
Fix design: READY FOR MANUAL ANCHORED REPLACEMENT
Step03 quick flash: SEPARATE OPEN ITEM
Crypto V0.3.0 font parity: PENDING after Checkout visual defects close
```
