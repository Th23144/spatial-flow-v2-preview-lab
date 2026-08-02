# Step 4F · R0 Configuration Snapshot

Date: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Scope

This is a read-only R0 database/configuration snapshot derived from user-exported JSON files.

```text
No WordPress option was changed.
No gateway was enabled, disabled or reordered.
No theme mod was changed.
No secret-bearing gateway settings were exported.
```

## 2. Source artifacts

```text
r0-theme-mods.json
Bytes: 29488
SHA256: 4e8d4b6d6fd7c8a1146e8488dd21ea1ef0a9a4a993fe453d4020443fb74e63af

r0-gateway-order.json
Bytes: 1478
SHA256: 96f0ac37903eac3aec13f95ff11046e9dcdbd587d45416b420c2af2f9906675c

r0-runtime-gateways.json
Bytes: 3959
SHA256: 19115bd99a69b9f870482777ecf14bcecf01485ce947908597edcfb44d6dee9a
```

All three files parse as valid JSON.

## 3. Relevant saved theme mods

The complete theme-mod export contains 395 keys. R0 filtered only keys beginning with:

```text
sf_checkout_
sf_order_received_
```

Filtered result:

```text
sf_checkout_* saved keys: 1
sf_order_received_* saved keys: 32
total relevant saved keys: 33
```

The only saved Checkout key is:

```text
sf_checkout_payment_note = ""
```

The 32 saved `sf_order_received_*` values are preserved in the uploaded baseline and are strongly success/fulfillment-oriented, including language such as:

```text
Your Order Has Been Received.
being prepared for shipment
successfully placed
added to our fulfillment queue
Carefully Prepared
On The Way
```

R4 must preserve these existing values before introducing status-specific Confirmed, Pending, Failed and Cancelled result families. Pending/on-hold orders must not inherit paid/fulfillment claims.

R3 cannot assume that all registered Checkout Customizer controls have saved values; current code defaults/fallbacks remain part of the baseline.

## 4. WooCommerce gateway order option

The exported `woocommerce_gateway_order` option contains 58 ordered IDs.

Relevant positions:

```text
woocommerce_payments: 1
cod: 24
airwallex_main: 50
spatial_flow_crypto: 57
```

This option records administrative ordering only. It does not prove whether a gateway is currently enabled or available for a specific Checkout session.

## 5. Runtime registered gateway baseline

`r0-runtime-gateways.json` contains 30 currently registered gateway objects.

Enabled gateways:

```text
ID: bacs
Title: 测试
Enabled: yes
Administrative order option: 22

ID: spatial_flow_crypto
Title: Pay with Crypto
Enabled: yes
Administrative order option: 57
```

Registered but disabled gateway families include:

```text
WooPayments base and related methods
Cheque
Cash on delivery
Airwallex onboarding/main/card/WeChat/Express/POS/Klarna/Afterpay
```

Exact important disabled states:

```text
woocommerce_payments / Card: no
cod / Cash on delivery: no
airwallex_main / Pay with cards and more: no
```

The runtime export's object-level `order` value is `null` for all returned gateways. This does not invalidate the separate `woocommerce_gateway_order` option; the two exports cover different properties.

Boundary:

```text
Registered + enabled does not guarantee that a gateway appears for every cart, address, currency or session.
Actual front-end availability must be confirmed by the R0 functional smoke test.
```

## 6. R0 status after configuration exports

```text
Saved theme-mod export: completed
Gateway order export: completed
Runtime registered/title/enabled export: completed
Actual Checkout gateway rendering: pending smoke test
Functional smoke test: pending
R1: blocked and not started
Checkout: Not done
```
