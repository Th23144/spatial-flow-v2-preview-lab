# Step 4F · R1 SAFE5 Checkout Backend Copy Mapping and Coordinated Patch

Date: 2026-08-06  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user reconfirmed the standing requirement that custom Checkout presentation copy remain editable from the WordPress backend. The already-prepared strict-copy PHP/CSS files were therefore held until the SAFE5 template could be reconnected to backend settings.

## Audited active sources

```text
functions.php
557,249 bytes
10,414 lines
SHA256: 5bd9f8b307d1b59eaa92bf31d3640e2d4ba48bca4de7a640b705d5e75f9ef00b

held strict-copy form-checkout.php
9,855 bytes
287 lines
SHA256: 9060a69bb556f34ba3c6748048032b0a2608b245e875ce2177e5b9283c67759b

held strict-copy checkout-safe5.css
47,086 bytes
1,400 lines
SHA256: d0377342d32702a0da0227bf354829962d4b4cd4feef96acf3cf7a77f29dc472
```

## Existing backend reality

The active `functions.php` contains three historical Checkout control generations in the same `spatial_flow_checkout_page` Customizer section:

```text
spatial_flow_checkout_visual_customizer
spatial_flow_checkout_visual_2_customizer
spatial_flow_checkout_visual_3_customizer
```

These register `sf_checkout_*`, `sf_checkout_flow_*`, `sf_checkout_support_*` and `sf_checkout_v3_*` settings. SAFE5 unhooks the old visual renderers while the new `form-checkout.php` directly hardcodes visible copy, so many controls are currently orphaned.

The R0 theme-mod snapshot contains only one saved Checkout value:

```text
sf_checkout_payment_note = ''
```

No non-empty saved compatible Checkout copy value requires content migration. Nevertheless, existing setting IDs and saved values must remain intact.

## Locked implementation design

One backend section only:

```text
Appearance → Customize → Spatial Flow Checkout Page
```

No second Checkout backend system will be introduced.

The patch will:

1. Add a SAFE5 copy defaults/getter layer.
2. Reuse 14 compatible historical setting IDs so any existing non-empty saved value remains authoritative.
3. Add 26 clearly named `sf_checkout_safe5_*` settings for surfaces that never had a compatible setting.
4. Keep all old settings in the database but remove obsolete/orphaned controls from the visible Customizer section.
5. Keep only the controls consumed by SAFE5.
6. Use strict-reference strings as safe fallback defaults.
7. Treat empty/missing settings as fallback, preventing blank critical labels.
8. Allow only `<em>` in the three editorial panel headings.
9. Keep WooCommerce native fields, totals, shipping, coupon validity, gateways, terms and order submission outside this copy system.

## Reused compatible setting IDs

```text
sf_checkout_intro_kicker
sf_checkout_intro_text
sf_checkout_v3_flow_1_title
sf_checkout_v3_flow_2_title
sf_checkout_v3_flow_3_title
sf_checkout_v3_flow_4_title
sf_checkout_v3_order_notes_placeholder
sf_checkout_coupon_label
sf_checkout_trust_1_title
sf_checkout_trust_1_text
sf_checkout_trust_2_title
sf_checkout_trust_2_text
sf_checkout_trust_3_title
sf_checkout_trust_3_text
```

## SAFE5 editable surface coverage

Forty logical visible-copy surfaces are mapped:

```text
Intro label, description and page title
Step 01–04 labels
Contact panel label/title/description
Delivery panel label/title/description
Optional-note label/title/description and native placeholder
Step 01 back/continue labels
Step 02 label/title/back/continue labels
Step 03 label/title/back label
Summary label/title
Coupon toggle/label/placeholder/apply label
Three trust-card titles/descriptions
Processing overlay title/description
```

Structural state text such as step numbers remains code-generated. WooCommerce/server validation and transactional messages remain operationally owned, not marketing-copy fields.

## Coordinated target files

```text
functions.php
573,356 bytes
10,702 lines
SHA256: 3224632653a0f59f7c363a233987753b19b9017219a9da5e7c2d7b2868c470af
PHP lint: pass
LF, no terminal newline

woocommerce/checkout/form-checkout.php
12,746 bytes
302 lines
SHA256: 5f4adf84776ce990ca674e43be9a79aabdd4ac1740f29f559b59bf264680f21f
PHP lint: pass
CRLF, no terminal newline

assets/css/checkout-safe5.css
47,086 bytes
1,400 lines
SHA256: d0377342d32702a0da0227bf354829962d4b4cd4feef96acf3cf7a77f29dc472
Unchanged from the held strict-copy CSS
```

No JavaScript change is included.

## Installation rule

The three files form one coordinated installation unit:

```text
functions.php
form-checkout.php
checkout-safe5.css
```

Do not install only the new template without the functions getter layer. The template contains safe local fallbacks, but partial installation is not an accepted final state.

## Required acceptance gates

1. PHP source integrity and lint.
2. Checkout opens without fatal error.
3. Default Step 01 appearance remains identical to the already accepted strict-copy state.
4. Customizer shows one coherent Checkout section, not three visible generations.
5. Change Contact panel description in the backend; live Step 01 changes after publish.
6. Restore the value; strict fallback/default remains correct.
7. Change one step label and one trust-card line; each intended live surface changes only once.
8. Native billing/shipping fields, totals, coupon, gateways, terms and Place Order remain unchanged.
9. Re-run Step 01 functional regression before D2B2 closure.

## Status

```text
Backend copy audit: completed
Mapping: completed
Coordinated source patch: prepared and linted
Live installation: not yet performed
Backend editability acceptance: pending
D2B2: open
Step 02 Shipping V2: blocked
Checkout: Not done
```
