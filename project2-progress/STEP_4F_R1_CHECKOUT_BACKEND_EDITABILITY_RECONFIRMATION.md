# Step 4F · R1 Checkout Backend Editability Reconfirmation

Date: 2026-08-06  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

While applying strict Step-01 copy alignment, the user explicitly reconfirmed the standing requirement that visible operating copy remain editable from the WordPress backend.

## Requirement remains authoritative

The requirement has not been cancelled, deferred away, or replaced by visual-only acceptance.

The existing exact ownership matrix already states:

```text
Main Checkout shell:
New shell copy must read active theme mods/options.

SAFE5 step state:
Step labels/copy should come from active theme options after reconstruction.

Checkout Customizer controls:
Existing sf_checkout_* theme mods must be reconnected or replaced without losing saved values.

Locked decision:
Backend Checkout copy controls must be reconnected or replaced without losing saved values.
```

## Current source reality

The currently submitted strict-copy files pass the previously issued byte-level targets:

```text
woocommerce/checkout/form-checkout.php
9,855 bytes
287 lines
SHA256: 9060a69bb556f34ba3c6748048032b0a2608b245e875ce2177e5b9283c67759b

assets/css/checkout-safe5.css
47,086 bytes
1,400 lines
SHA256: d0377342d32702a0da0227bf354829962d4b4cd4feef96acf3cf7a77f29dc472
```

However, the PHP template still directly hardcodes custom visible copy, including Intro copy, Step labels, Step-01 panel headings/notes, navigation labels, Summary headings, coupon labels, trust copy and processing-overlay copy.

Therefore:

```text
Strict visual copy alignment source: correct
Backend editability: not yet complete
Final D2B2 acceptance: blocked
Checkout completion: blocked
```

This is not a reason to discard the current visual copy. The accepted reference strings may remain as safe fallback defaults, but the live values must be supplied through backend-owned theme mods/options or existing compatible Customizer controls.

## Ownership boundaries

Must remain backend/data owned:

```text
Custom SAFE5 headings, explanatory copy, step labels, navigation labels, Summary/trust copy and related non-transactional labels -> active theme mods/options
WooCommerce native billing/shipping field output and validation -> WooCommerce
Cart items, totals, shipping methods, coupon validity, gateways, terms and final order submission -> WooCommerce / gateway settings
```

Native operational values must not be converted into static editable text merely for visual matching.

## Correct next action

Before D2B2 can close:

```text
1. Audit current functions.php Checkout Customizer controls and saved sf_checkout_* theme-mod names.
2. Map every currently hardcoded SAFE5 copy surface to an existing compatible setting or a clearly named replacement.
3. Preserve saved values where compatible.
4. Use strict-reference text only as fallback defaults.
5. Verify an admin edit changes the intended live surface.
6. Verify empty/missing settings fall back safely.
7. Re-run Step-01 visual and functional regression.
```

No blind functions.php patch is authorized without the exact active source and current setting map.

## Status

```text
Backend editability requirement: active and mandatory
Submitted visual-copy source integrity: matches issued targets
Submitted files as final Checkout implementation: not accepted
D2B2: open
Step 02 Shipping V2: blocked
Checkout: Not done
```
