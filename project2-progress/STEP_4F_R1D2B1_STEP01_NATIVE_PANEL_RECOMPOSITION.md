# Step 4F · R1-D2B1 Step-01 Native Panel Recomposition

Date: 2026-08-04  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authorization and evidence

User authorized the next step and supplied the complete live DOM map.

Authoritative evidence:

```text
project2-progress/STEP_4F_R1D2B_STEP01_NATIVE_FIELD_DOM_AUDIT.md
project2-progress/STEP_4F_R1D2B_NATIVE_FIELD_DOM_RUNTIME_EVIDENCE.md
```

The evidence confirms one unique native instance of every billing field, the shipping relationship/alternate-address block and order comments. All are currently owned by Step 01.

## 2. Bounded subgroup

```text
R1-D2B1
```

This subgroup performs only:

```text
- Contact / Delivery address / Optional note semantic panel mounts
- native WooCommerce node movement into those mounts
- accepted billing-field order
- fallback preservation for unknown/plugin-added billing rows
- basic desktop and mobile editorial panel composition
```

This subgroup does not yet add:

```text
- field SVG icons
- final field-surface pixel tuning
- helper hints beneath individual fields
- Order Summary internal migration
- trust-surface migration
- desktop final 7:5 body acceptance
```

Those remain later D2B/D2 work.

## 3. Ownership preservation

The implementation keeps:

```php
do_action( 'woocommerce_checkout_billing' );
```

No input, select or textarea is cloned or recreated.

The JavaScript uses `appendChild()` to move the existing native rows and wrappers. Therefore original IDs, names, values, required classes, WooCommerce listeners and posted values remain attached to the same DOM nodes.

## 4. Files and verified current baselines

| File | Current bytes / lines | Current SHA256 |
|---|---:|---|
| `woocommerce/checkout/form-checkout.php` | 7,925 / 240 | `14e58b22966d1c3cb6c713157e5475eb43de102bc271a4e620ddfe14a4da17ec` |
| `assets/js/checkout-safe5.js` | 20,744 / 671 | `7b2906a3be0823cc5055db409fe20cc498878d71d479809c7e812174530ae0df` |
| `assets/css/checkout-safe5.css` | 24,022 / 688 | `5c174617e71e1f3b9c2a3319c23c270efbcadbe819f3183ebead42529f99c23b` |

Any baseline mismatch blocks manual replacement.

## 5. Expected installed results

| File | Expected bytes / lines | Expected SHA256 | Delta |
|---|---:|---|---:|
| `form-checkout.php` | 9,667 / 266 | `5fdfd2d3904bd21cb2cc3a5a81aba33ec1bf708b25d6f22e11125b619ae4e1c8` | +1,742 bytes / +26 lines |
| `checkout-safe5.js` | 23,834 / 757 | `0a05082d62cffccdac93ffecff4c5eb3f266faf6c409cf70e5f94339f57a6ab7` | +3,090 bytes / +86 lines |
| `checkout-safe5.css` | 26,921 / 809 | `e08ec831ee0f1d80ddb963dd10c7a8b56c2575e16ae1d24ebe174f23a1175608` | +2,899 bytes / +121 lines |

Relative growth:

```text
PHP: +21.98%
JS: +14.90%
CSS: +12.07%
```

The PHP percentage is high because a small single-panel Step-01 template is replaced by three semantic panel mounts. It does not add new WooCommerce actions or business logic.

The JS growth is the idempotent native-node placement routine plus two existing event integrations.

The CSS growth is below the 15% review threshold and is limited to the new unique Step-01 panel classes. It is not a bottom append.

## 6. Static validation

```text
PHP syntax: passed
JavaScript syntax: passed
CSS parse errors: 0
CSS braces: 112 / 112
CSS comments: 13 / 13
Bottom append: no
New breakpoint: no
Shared spatial-flow.css edit: no
functions.php edit: no
```

## 7. Native placement behavior

### Contact

```text
#billing_email_field
```

### Delivery

```text
#billing_first_name_field
#billing_last_name_field
#billing_country_field
#billing_address_1_field
#billing_address_2_field
#billing_city_field
#billing_postcode_field
#billing_state_field
#billing_phone_field
unknown/plugin-added billing rows
.woocommerce-shipping-fields
```

### Optional note

```text
.woocommerce-additional-fields
```

Fallback:

```text
If .woocommerce-additional-fields is unavailable, move #order_comments_field directly.
```

## 8. Progressive-enhancement behavior

Before JavaScript recomposition:

```text
- new panels remain hidden
- original WooCommerce source remains visible and usable
```

After successful recomposition:

```text
- new panels display
- emptied original source wrapper hides
```

This prevents an empty Step 01 if JavaScript fails to initialize.

## 9. Event behavior

The placement routine runs on:

```text
initialization
updated_checkout
country_to_state_changed
```

The routine is idempotent and moves only existing nodes whose parent is not already the correct mount.

## 10. Required runtime acceptance

First acceptance is `360px` Step 01 only.

Expected order:

```text
Contact · 01
→ Email

Delivery address · 01
→ native billing fields in accepted order
→ native Ship to a Different Address control

Optional note
→ native Order notes

Continue to Shipping
→ Return to cart
→ Order Summary
```

Required checks:

```text
- no duplicate field IDs
- no empty visible panel
- hidden shipping_address remains hidden while checkbox is unchecked
- checkbox still reveals the native shipping fields
- email validation still blocks malformed email
- Continue still reaches Step 02 after valid data
- existing mobile gutter remains intact
```

## 11. Rollback boundary

Atomic rollback unit:

```text
form-checkout.php
checkout-safe5.js
checkout-safe5.css
```

All three files must be rolled back together if D2B1 fails.

## 12. Current status

```text
DOM evidence: passed
D2B1 source design: completed
Static validation: passed
Manual replacement instructions: ready to issue
Runtime application: pending
R1-D2B1: not yet accepted
Checkout: Not done
```
