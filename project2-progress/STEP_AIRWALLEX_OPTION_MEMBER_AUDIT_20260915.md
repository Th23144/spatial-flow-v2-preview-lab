# Airwallex Option Member Audit — 2026-09-15

Read-only inspection identified the following tail sequence in `woocommerce_gateway_order`:

```text
stripe_au_becs_debit
awx_onboarding_gateway
airwallex_main
airwallex_card
airwallex_wechat
airwallex_express_checkout
airwallex_pos
airwallex_klarna
airwallex_afterpay
spatial_flow_crypto
```

The seven `airwallex_*` IDs are confirmed obsolete Airwallex members. `awx_onboarding_gateway` remains under final ownership verification before write. No database write has yet been made to either shared option.
