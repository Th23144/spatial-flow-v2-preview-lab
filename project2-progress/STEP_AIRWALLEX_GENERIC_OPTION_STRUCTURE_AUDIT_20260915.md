# Airwallex Generic Option Structure Audit — 2026-09-15

## Context
This record captures the read-only inspection of the final shared WooCommerce options that still contained historical Airwallex text after source cleanup and the broad zero-residual database recheck.

## Cache rows
The exact-key DELETE statements for the two previously identified cache/transient rows returned 0 affected rows at execution time:
- `_transient_woocommerce_admin_payment_gateway_suggestions_specs`
- `_site_transient_wp_plugin_dependencies_plugin_data`

Interpretation: the exact cache keys were already absent by the time the deletes ran. This is not treated as an error; final zero-residual audit must still confirm they remain absent.

## `woocommerce_payments_nox_profile`
The actual value is a PHP serialized array whose meaningful structure is:

```text
suggestions
└── airwallex
    └── attached
        └── timestamp
```

This is a shared WooCommerce payments profile option. The whole option must not be deleted. Only the obsolete `suggestions['airwallex']` member is a cleanup candidate.

## `woocommerce_gateway_order`
Read-only context extraction returned:
- value length: 1885 bytes
- literal `airwallex` hits: 7
- first `airwallex` position: 1651

Relevant tail of the serialized ordered gateway list:

```text
... i:41;s:17:"stripe_multibanco";
i:42;s:11:"stripe_link";
i:43;s:17:"stripe_wechat_pay";
i:44;s:14:"stripe_cashapp";
i:45;s:17:"stripe_acss_debit";
i:46;s:17:"stripe_bacs_debit";
i:47;s:20:"stripe_au_becs_debit";
i:48;s:22:"awx_onboarding_gateway";
i:49;s:14:"airwallex_main";
i:50;s:14:"airwallex_card";
i:51;s:16:"airwallex_wechat";
i:52;s:26:"airwallex_express_checkout";
i:53;s:13:"airwallex_pos";
i:54;s:16:"airwallex_klarna";
i:55;s:18:"airwallex_afterpay";
i:56;s:19:"spatial_flow_crypto";
i:57;
```

The seven literal `airwallex_*` entries are confirmed historical Airwallex gateway IDs. `awx_onboarding_gateway` is also an adjacent Airwallex-related candidate and must be verified before write operations.

## Safety decision
- Do not edit the serialized text manually.
- Do not delete the whole `woocommerce_gateway_order` option.
- Do not delete the whole `woocommerce_payments_nox_profile` option.
- Any cleanup write should use WordPress/WooCommerce option APIs or another serialization-safe method, removing only verified obsolete members and preserving all non-Airwallex entries including `spatial_flow_crypto`.

## Current stop point
Perform final identity verification for `awx_onboarding_gateway`, then execute one serialization-safe targeted cleanup for:
1. verified Airwallex gateway IDs in `woocommerce_gateway_order`;
2. `suggestions['airwallex']` in `woocommerce_payments_nox_profile`.

After that, rerun the full zero-residual audit before Checkout runtime regression.
