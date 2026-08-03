# Step 4F · R1-D1 Mobile Gutter Correction

Date: 2026-08-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Trigger

The user compared the live 390px/360px Checkout with the accepted V2 references and correctly identified that the live content sat too close to the viewport edges.

This correction addressed the Intro/progress mobile gutter foundation before R1-D2.

## 2. Scope

Only this runtime file changed:

```text
assets/css/checkout-safe5.css
```

No PHP, JavaScript, WooCommerce hook, field, Order Summary markup, gateway, submit path or Crypto behavior changed.

## 3. Pre-edit baseline

```text
Bytes: 22,543
Lines: 654
SHA256: e005cf24b4ced7140627aa04b20ed3cbe2e54583fcfca02dd9864e2e2b489195
```

## 4. Applied anchored replacement

Old rule:

```css
  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-intro,
  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-shell {
    width: min(100% - 32px, 1180px);
  }
```

New rule:

```css
  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-intro,
  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-shell {
    width: min(calc(100% - 44px), 1180px) !important;
    max-width: 1180px !important;
  }
```

Expected integrity result:

```text
Bytes: 22,595
Lines: 655
Delta: +52 bytes / +1 line
SHA256: 290f5185d23382d02ecdbd679fcdd021d996df25ee1c8cff58ed323d1068eacc
```

A fresh uploaded source file/hash was not supplied, so the expected hash remains the audit target rather than an independently measured post-edit result.

## 5. Runtime screenshot review

The user supplied a new live 360px screenshot after applying the correction.

Confirmed:

```text
- the Intro/progress block now has a visible mobile outer gutter
- its left/right spacing is materially closer to the accepted V2 360px reference
- the title, explanatory copy and four stages remain fully contained
- no new horizontal overflow is visible
- all four labels remain present
```

Classification:

```text
R1-D1 Intro/progress mobile gutter correction: passed
R1-D1 mobile structural containment: passed
R1-D1 mobile visual scope: accepted
```

## 6. Separate body-layout result

The same screenshot still shows the Checkout body cards touching or nearly touching the viewport edges:

```text
- Order Summary outer card
- Address/form outer card
- bottom action surfaces
```

This does not mean the D1 replacement failed. It proves that the body surfaces are controlled by a separate responsive width/margin/card cascade outside the D1 Intro/progress scope.

The exact body selector owner will be audited in R1-D2 rather than guessed from the screenshot.

The current mobile body order also remains:

```text
Intro → Order Summary → Address form
```

instead of the accepted V2 order:

```text
Intro → Address form → Order Summary
```

## 7. Decision

```text
D1 Intro/progress gutter: closed as passed
No further D1 correction required
Body gutter/order/panel surfaces: assigned to R1-D2
R1-D2: next active bounded group
Checkout: Not done
```
