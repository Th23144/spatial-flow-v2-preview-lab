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

## Current functions.php audit

The user supplied the current active source:

```text
functions.php
SPATIAL_FLOW_CHILD_VERSION: 2.7.8
557,249 bytes
10,414 lines
SHA256: 5bd9f8b307d1b59eaa92bf31d3640e2d4ba48bca4de7a640b705d5e75f9ef00b
```

The source confirms that the existing `Spatial Flow Checkout Page` Customizer section and saved `sf_checkout_*` setting family still exist. It includes compatible settings for Intro copy, coupon labels, payment notes, trust-card copy, old flow labels and Visual-3 flow/notes copy.

SAFE5 currently removes the legacy visual-rendering hooks on the live Checkout page, but it does not remove the Customizer controls or their saved theme-mod values. The current SAFE5 template simply fails to consume most of those values.

The existing controls are useful and their values must be preserved, but they do not cover every new SAFE5 surface. Additional clearly named settings are still required for items such as the main Checkout title, Contact/Delivery/Optional-note headings and descriptions, Back/Continue labels, Summary title, processing overlay and other new shell copy.

## Installation sequencing decision

The two strict-copy files are retained as the accepted visual source but are not to be installed as a partial final package yet.

```text
form-checkout.php: HOLD — must first be connected to backend settings.
checkout-safe5.css: technically safe visually, but HOLD with the PHP file to avoid a mixed temporary version and duplicate manual replacement.
functions.php: audit source only; no replacement authorized yet.
```

The next issued package must be coordinated. It will include the backend setting/getter changes and the corresponding SAFE5 template consumption, while preserving the accepted CSS and visual fallback copy.

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
1. Map every currently hardcoded SAFE5 copy surface to an existing compatible setting or a clearly named replacement.
2. Preserve existing saved sf_checkout_* values where compatible.
3. Use strict-reference text only as fallback defaults.
4. Issue one coordinated replacement set instead of making the user replace the same files twice.
5. Verify an admin edit changes the intended live surface.
6. Verify empty/missing settings fall back safely.
7. Re-run Step-01 visual and functional regression.
```

## Status

```text
Backend editability requirement: active and mandatory
Current functions.php audit: completed
Submitted visual-copy source integrity: matches issued targets
Submitted two-file install: on hold
D2B2: open
Step 02 Shipping V2: blocked
Checkout: Not done
```
