# Step 4F · R1-D1 Mobile Gutter Correction

Date: 2026-08-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Trigger

The user compared the live 390px/360px Checkout with the accepted V2 references and correctly identified that the live content sits too close to the viewport edges.

This correction addresses the shared mobile outer-gutter foundation before R1-D2 begins.

## 2. Scope

Only this runtime file changes:

```text
assets/css/checkout-safe5.css
```

No PHP, JavaScript, WooCommerce hook, field, Order Summary markup, gateway, submit path or Crypto behavior changes.

## 3. Current verified baseline

```text
Bytes: 22,543
Lines: 654
SHA256: e005cf24b4ced7140627aa04b20ed3cbe2e54583fcfca02dd9864e2e2b489195
```

## 4. Exact anchored replacement

Search exactly:

```css
  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-intro,
  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-shell {
    width: min(100% - 32px, 1180px);
  }
```

Expected matches:

```text
1
```

Replace with:

```css
  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-intro,
  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-shell {
    width: min(calc(100% - 44px), 1180px) !important;
    max-width: 1180px !important;
  }
```

## 5. Expected integrity result

```text
Bytes: 22,595
Lines: 655
Delta: +52 bytes / +1 line
SHA256: 290f5185d23382d02ecdbd679fcdd021d996df25ee1c8cff58ed323d1068eacc
```

Static validation:

```text
CSS parse errors: 0
Braces: 89 / 89
Comments: 12 / 12
Bottom append: no
Breakpoint addition: no
```

## 6. Intended effect

At the existing mobile breakpoint:

```text
- Intro/progress receives the accepted 22px-class outer gutter
- Checkout shell receives the same enforced gutter
- the later same-specificity mobile rule overrides the earlier important desktop shell width
- four-stage progress containment remains unchanged
```

This correction does not complete R1-D2. The following remain open:

```text
- form-before-Order-Summary mobile order
- panel/card visual migration
- field visual migration
- Order Summary migration
- action-button migration
```

## 7. Status

```text
Correction: source-audited and issued
Runtime application: pending
390px/360px screenshot verification: pending
R1-D2: blocked
Checkout: Not done
```
