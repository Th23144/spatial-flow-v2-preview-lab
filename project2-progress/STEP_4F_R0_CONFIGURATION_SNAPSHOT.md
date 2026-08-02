# Step 4F · R0 Configuration Snapshot

Date: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Scope

This is a read-only R0 database/configuration snapshot derived from the user-exported JSON files.

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
```

Both files parse as valid JSON.

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

Exact relevant saved values:

```json
{
  "sf_order_received_hero_title": "Your Order Has Been Received.",
  "sf_order_received_hero_text": "Your order has been received and is now being prepared for shipment.\n\nWe'll send email updates, including tracking information, as soon as your package is on its way.",
  "sf_order_received_empty_text": "Your order received page is ready. Order details appear here after checkout is completed.",
  "sf_order_received_receipt_kicker": "Order Details",
  "sf_order_received_receipt_title": "Items In Your Order",
  "sf_order_received_receipt_note": "Review the products included in your purchase,\nalong with selected options and order totals.",
  "sf_order_received_next_kicker": "What happens next",
  "sf_order_received_step_2_title": "Carefully Prepared",
  "sf_order_received_customer_kicker": "Customer Details",
  "sf_order_received_customer_title": "Delivery Information",
  "sf_order_received_summary_kicker": "Receipt Summary",
  "sf_order_received_summary_title": "Order Summary",
  "sf_order_received_summary_note": "A confirmation email has been sent\nto your inbox.\n\nPlease keep your order number for\nfuture tracking and support requests.",
  "sf_order_received_action_note": "Need to check your order later?\nSave your order number and confirmation email.",
  "sf_order_received_shop_button_text": "Continue Shopping",
  "sf_order_received_reading_kicker": "HELPFUL RESOURCES",
  "sf_order_received_reading_title": "Helpful Information While You Wait.",
  "sf_order_received_step_1_title": "Order Received",
  "sf_order_received_step_1_text": "Your order has been successfully placed\nand added to our fulfillment queue.",
  "sf_order_received_step_2_text": "Each item is reviewed and packed\nbefore leaving our studio.",
  "sf_order_received_step_3_title": "On The Way",
  "sf_order_received_step_3_text": "Tracking details will be sent\nas soon as your package ships.",
  "sf_order_received_reading_1_kicker": "CRYSTAL GUIDE",
  "sf_order_received_reading_1_title": "Understanding Natural Crystals",
  "sf_order_received_reading_1_text": "Learn about crystal types, meanings,\nformations, and the unique characteristics\nof natural stones.",
  "sf_order_received_reading_1_url": "http://blog.spatialflow.local/category/crystals-botanicals/",
  "sf_order_received_reading_2_kicker": "CARE GUIDE",
  "sf_order_received_reading_2_title": "How To Care For Your Jewelry",
  "sf_order_received_reading_2_text": "Simple care tips to help preserve the beauty\nof crystal, wooden, and handcrafted pieces.",
  "sf_order_received_reading_3_title": "Explore The Journal",
  "sf_order_received_reading_3_text": "Discover articles on modern Feng Shui,\nEastern culture, mindful living,\nand everyday inspiration.",
  "sf_order_received_reading_3_url": "http://blog.spatialflow.local/",
  "sf_checkout_payment_note": ""
}
```

Important baseline conclusions:

```text
- The only saved sf_checkout_* key is sf_checkout_payment_note, and its saved value is empty.
- 32 sf_order_received_* values are saved.
- The saved Order Received copy is strongly success/fulfillment-oriented.
- R4 must export/preserve these values before adding status-specific Confirmed/Pending/Failed/Cancelled semantics.
- R3 cannot assume the many registered Checkout Customizer fields have saved database values; current live fallbacks/defaults remain important.
```

## 4. WooCommerce gateway order option

The exported `woocommerce_gateway_order` option contains 58 ordered IDs.

```json
{
  "_wc_pes_woopayments": 0,
  "woocommerce_payments": 1,
  "woocommerce_payments_affirm": 2,
  "woocommerce_payments_afterpay_clearpay": 3,
  "woocommerce_payments_alipay": 4,
  "woocommerce_payments_bancontact": 5,
  "woocommerce_payments_au_becs_debit": 6,
  "woocommerce_payments_eps": 7,
  "woocommerce_payments_giropay": 8,
  "woocommerce_payments_grabpay": 9,
  "woocommerce_payments_ideal": 10,
  "woocommerce_payments_link": 11,
  "woocommerce_payments_multibanco": 12,
  "woocommerce_payments_klarna": 13,
  "woocommerce_payments_p24": 14,
  "woocommerce_payments_sepa_debit": 15,
  "woocommerce_payments_sofort": 16,
  "woocommerce_payments_wechat_pay": 17,
  "woocommerce_payments_apple_pay": 18,
  "woocommerce_payments_google_pay": 19,
  "_wc_pes_paypal_full_stack": 20,
  "_wc_offline_payment_methods_group": 21,
  "bacs": 22,
  "cheque": 23,
  "cod": 24,
  "stripe_giropay": 25,
  "_wc_pes_stripe": 26,
  "stripe": 27,
  "stripe_us_bank_account": 28,
  "stripe_alipay": 29,
  "stripe_amazon_pay": 30,
  "stripe_blik": 31,
  "stripe_klarna": 32,
  "stripe_affirm": 33,
  "stripe_afterpay_clearpay": 34,
  "stripe_eps": 35,
  "stripe_bancontact": 36,
  "stripe_boleto": 37,
  "stripe_ideal": 38,
  "stripe_oxxo": 39,
  "stripe_sepa_debit": 40,
  "stripe_p24": 41,
  "stripe_multibanco": 42,
  "stripe_link": 43,
  "stripe_wechat_pay": 44,
  "stripe_cashapp": 45,
  "stripe_acss_debit": 46,
  "stripe_bacs_debit": 47,
  "stripe_au_becs_debit": 48,
  "awx_onboarding_gateway": 49,
  "airwallex_main": 50,
  "airwallex_card": 51,
  "airwallex_wechat": 52,
  "airwallex_express_checkout": 53,
  "airwallex_pos": 54,
  "airwallex_klarna": 55,
  "airwallex_afterpay": 56,
  "spatial_flow_crypto": 57
}
```

Relevant current positions include:

```text
WooPayments base gateway: woocommerce_payments → 1
Cash on delivery: cod → 24
Airwallex main gateway: airwallex_main → 50
Spatial Flow Crypto: spatial_flow_crypto → 57
```

Boundary:

```text
This option records ordering only.
It does not prove each gateway's display title, enabled state or runtime availability.
A final read-only runtime gateway export is still required before R0 can close.
```

## 5. R0 status after these exports

```text
Saved theme-mod export: completed
Gateway order export: completed
Runtime gateway title/enabled/availability export: pending
Functional smoke test: pending
R1: blocked and not started
Checkout: Not done
```
