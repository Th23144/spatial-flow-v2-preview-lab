# Supplement — Gateway Order Readout

User supplied the non-truncated serialized tail for `woocommerce_gateway_order`:

```text
... i:41;s:17:"stripe_multibanco";i:42;s:11:"stripe_link";i:43;s:17:"stripe_wechat_pay";i:44;s:14:"stripe_cashapp";i:45;s:17:"stripe_acss_debit";i:46;s:17:"stripe_bacs_debit";i:47;s:20:"stripe_au_becs_debit";i:48;s:22:"awx_onboarding_gateway";i:49;s:14:"airwallex_main";i:50;s:14:"airwallex_card";i:51;s:16:"airwallex_wechat";i:52;s:26:"airwallex_express_checkout";i:53;s:13:"airwallex_pos";i:54;s:16:"airwallex_klarna";i:55;s:18:"airwallex_afterpay";i:56;s:19:"spatial_flow_crypto";i:57;}
```

The literal `airwallex` hit count is 7. `awx_onboarding_gateway` does not contribute to that count and requires independent identity verification before deletion.
