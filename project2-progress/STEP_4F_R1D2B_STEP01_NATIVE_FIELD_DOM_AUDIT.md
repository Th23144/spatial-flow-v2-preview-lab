# Step 4F · R1-D2B Step-01 Native Field DOM Audit

Date: 2026-08-04  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authorization

User instruction:

```text
开始下一步
```

Decision:

```text
R1-D2B started
Scope: Step-01 panel composition and native field-surface migration
Checkout: Not done
```

## 2. Authoritative reference

The accepted Step-01 reference is:

```text
preview/spatial-flow-checkout-v1.html
preview/spatial-flow-checkout-flow-v1.css
preview/spatial-flow-checkout-mobile-commerce-v1.css
```

Accepted Step-01 composition:

```text
Contact · 01
→ email field

Delivery address · 01
→ first/last name
→ country/region
→ street address
→ city/postcode/state/phone
→ address/billing relationship control

Optional note
→ order comments
```

Accepted mobile field characteristics:

```text
- square warm editorial panels
- serif panel headings
- mono uppercase field labels
- square field surfaces
- field icons applied to native controls
- compact helper copy
- no nested rounded Billing Details card
```

## 3. Ownership boundary

The authoritative ownership matrix requires:

```text
Step-01 billing/contact fields remain WooCommerce-owned.
Only move or wrap the native output visually.
Do not clone, recreate or browser-authoritatively replace the fields.
```

The live template currently preserves:

```php
do_action( 'woocommerce_checkout_billing' );
```

This must remain the source of native field IDs, required flags, dynamic country/state behavior, posted values and server validation.

## 4. Current installed source baseline

| File | Bytes / lines | SHA256 |
|---|---:|---|
| `woocommerce/checkout/form-checkout.php` | 7,925 / 240 | `14e58b22966d1c3cb6c713157e5475eb43de102bc271a4e620ddfe14a4da17ec` |
| `assets/js/checkout-safe5.js` | 20,744 / 671 | `7b2906a3be0823cc5055db409fe20cc498878d71d479809c7e812174530ae0df` |
| `assets/css/checkout-safe5.css` | 24,022 / 688 | `5c174617e71e1f3b9c2a3319c23c270efbcadbe819f3183ebead42529f99c23b` |

The CSS baseline includes the accepted D2A body order, action order and 22px-class mobile shell gutter.

## 5. Confirmed source mismatch

Current Step-01 template structure:

```text
one outer sf-safe5-section-card
→ Step 1 · Contact
→ Contact information
→ WooCommerce checkout billing output
```

Accepted reference structure:

```text
three editorial panels
→ Contact
→ Delivery address
→ Optional note
```

The current screenshot additionally shows:

```text
- Ship to a Different Address control inside the visible Step-01 body
- Order notes inside the visible Step-01 body
```

However, the inspected template places `woocommerce_checkout_shipping` in the hidden Step-02 view. Their exact live ancestor and owning view must be established before any node movement or wrapper insertion.

## 6. Required runtime evidence

Before issuing D2B code, collect a read-only DOM map for:

```text
billing field rows
shipping relationship control
shipping fields wrapper
order comments row
current owning sf-safe5-view
current parent/grandparent classes
```

This prevents:

```text
- moving a duplicated field instead of the posted native field
- breaking country/state replacement
- exposing hidden shipping fields in Step 01
- detaching order notes from the real Checkout form
- creating duplicate IDs or duplicate posted values
```

## 7. Planned bounded implementation after evidence

Expected D2B files:

```text
form-checkout.php
checkout-safe5.js
checkout-safe5.css
```

Planned method:

```text
- retain native WooCommerce action output
- add three empty semantic panel mounts in the template
- move existing native field row nodes into those mounts once
- re-run only the necessary field placement after Woo field replacement events
- hide/remove the obsolete nested Billing Details presentation, not the native fields
- style only the new mounts and native field IDs
```

No code is authorized until the runtime DOM map confirms the actual nodes.

## 8. Current stop point

```text
R1-D2A: closed
R1-D2B: started
Source/reference audit: completed
Runtime native-field DOM map: pending
D2B implementation: blocked pending DOM evidence
Checkout: Not done
```
