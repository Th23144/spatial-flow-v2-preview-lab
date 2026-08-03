# Step 4F · R1-D2A Box-Sizing Gutter Correction

Date: 2026-08-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Trigger

The 360px D2A runtime screenshot confirmed that mobile body order and action order were corrected, but the expected V2 outer gutter was still visually consumed by the form, action and Order Summary surfaces.

## 2. Root cause

The responsive shell width is already correct:

```css
width: min(calc(100% - 44px), 1180px) !important;
```

At 360px this reserves a 22px-class side gutter.

However, the affected descendants still use content-box sizing. Their declared width or stretched grid width excludes padding and border, so the rendered outer width becomes:

```text
track/content width + left padding + right padding + borders
```

This causes the following elements to consume the reserved gutter:

```text
.sf-safe5-section-card
.sf-safe5-summary-card
.sf-safe5-next / .sf-safe5-back / .sf-safe5-back-link
```

The accepted V2 reference applies border-box globally. The live correction must reproduce that behavior only for the bounded Checkout layout surfaces rather than changing the entire site.

## 3. Scope

Only this runtime file changes:

```text
assets/css/checkout-safe5.css
```

No PHP, JavaScript, fields, WooCommerce hooks, gateways, totals, submit behavior or Crypto flow changes.

## 4. Current verified baseline

```text
Bytes: 23,283
Lines: 674
SHA256: e94c0dac13f48bc564166e5de61655547b9c166ef2ab118af37258f18cb2cc09
```

## 5. Exact anchored replacement

Search exactly:

```css
body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-main,
body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-summary-card {
  min-width: 0;
}
```

Expected matches:

```text
1
```

Replace with:

```css
body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-main,
body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-summary,
body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-section-card,
body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-summary-card,
body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-actions,
body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-next,
body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-back,
body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-back-link {
  box-sizing: border-box !important;
  min-width: 0;
  max-width: 100%;
}
```

## 6. Expected integrity result

```text
Bytes: 23,816
Lines: 682
Delta: +533 bytes / +8 lines
SHA256: 395ccd6d3b07e6c03e8f43eb2e812e5f942889f40fa3543f84ded1419cc77fba
```

Static validation:

```text
CSS parse errors: 0
Braces: 91 / 91
Comments: 12 / 12
Bottom append: no
New breakpoint: no
```

## 7. Expected runtime effect

At 390px and 360px:

```text
- the existing 22px-class shell gutter remains visible around the Address/form surface
- the Continue and Back actions remain within the same gutter
- the Order Summary surface remains within the same gutter
- the already-correct form-before-summary order is preserved
- no horizontal overflow is introduced
```

This correction does not migrate nested Billing Details styling, field surfaces, summary internals or final button colors. Those remain later D2 work.

## 8. Status

```text
Root cause: confirmed
Correction: source-audited and issued
Runtime application: pending
D2A closure: blocked pending 360px evidence
Checkout: Not done
```
