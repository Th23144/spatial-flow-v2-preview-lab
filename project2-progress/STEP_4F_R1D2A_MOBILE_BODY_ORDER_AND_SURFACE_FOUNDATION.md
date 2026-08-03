# Step 4F · R1-D2A Mobile Body Order and Surface Foundation

Date: 2026-08-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authorization

User instruction:

```text
好，开始吧
```

Decision:

```text
R1-D2 started
First bounded subgroup: D2A mobile body order + outer panel/action foundation
Checkout: Not done
```

## 2. Confirmed defects

Current live mobile order:

```text
Intro → Order Summary → Address form
```

Accepted V2 order:

```text
Intro → Address form → Order Summary
```

Current body surfaces also retain the pre-V2 rounded white-card treatment:

```text
- rounded Address/form outer card
- rounded Order Summary outer card
- rounded mobile action buttons
- Back action appears before the primary Continue action
```

## 3. Exact scope

Only this runtime file changes:

```text
assets/css/checkout-safe5.css
```

D2A changes only:

```text
- remove the responsive Order Summary order:-1 reversal
- explicitly keep main form before Order Summary below 980px
- replace mobile outer form/summary cards with square warm editorial surfaces
- place the primary Continue action before the secondary Back action on mobile
- remove mobile pill-radius from the two navigation controls
```

Not changed:

```text
PHP / JavaScript
WooCommerce hooks or field order
input/select/textarea styling
Order Summary internal table rows
Coupon behavior
shipping mirror
payment gateway markup
Place Order ownership
Terms handling
normal/Crypto submit paths
desktop two-column body geometry
```

## 4. Current verified baseline

```text
File: assets/css/checkout-safe5.css
Bytes: 22,595
Lines: 655
SHA256: 290f5185d23382d02ecdbd679fcdd021d996df25ee1c8cff58ed323d1068eacc
```

This baseline includes the accepted R1-D1 mobile gutter correction.

## 5. Anchored replacement A — mobile body order

Search exactly:

```css
@media (max-width: 980px) {
  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-shell {
    grid-template-columns: 1fr !important;
  }

  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-summary {
    position: static !important;
    order: -1;
  }
}
```

Expected matches:

```text
1
```

Replace with:

```css
@media (max-width: 980px) {
  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-shell {
    grid-template-columns: 1fr !important;
  }

  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-main {
    order: 0;
  }

  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-summary {
    position: static !important;
    order: 1;
  }
}
```

## 6. Anchored replacement B — mobile outer surfaces/actions

Search exactly:

```css
  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-section-card,
  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-summary-card {
    border-radius: 24px;
    padding: 18px;
  }

  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-actions {
    display: grid;
    grid-template-columns: 1fr;
  }

  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-next,
  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-back,
  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-back-link {
    width: 100%;
  }
```

Expected matches:

```text
1
```

Replace with:

```css
  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-section-card {
    margin-bottom: 14px;
    padding: 15px;
    border: 1px solid rgba(74, 93, 90, 0.12);
    border-radius: 0;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.18), transparent 42%), var(--sf-safe5-soft);
    box-shadow: 0 8px 22px rgba(43, 35, 30, 0.045);
  }

  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-summary-card {
    padding: 22px 18px;
    border: 1px solid rgba(31, 25, 22, 0.07);
    border-radius: 0;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.18), transparent 46%), var(--sf-safe5-soft);
    box-shadow: 0 8px 22px rgba(43, 35, 30, 0.045);
  }

  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-actions {
    display: flex;
    flex-direction: column-reverse;
    align-items: stretch;
    gap: 14px;
    margin-top: 14px;
  }

  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-next,
  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-back,
  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-back-link {
    width: 100%;
    border-radius: 0;
  }
```

## 7. Expected integrity result

```text
Bytes: 23,283
Lines: 674
Delta: +688 bytes / +19 lines
SHA256: e94c0dac13f48bc564166e5de61655547b9c166ef2ab118af37258f18cb2cc09
```

Static validation:

```text
CSS parse errors: 0
Braces: 91 / 91
Comments: 12 / 12
Bottom append: no
New breakpoint: no
```

Growth from current baseline:

```text
+3.04%
```

The increase is fully explained by replacing two existing responsive blocks; it is below the Project 2 material-growth trigger.

## 8. Expected runtime result

At 390px and 360px:

```text
Intro/progress
→ Address form
→ primary Continue action
→ secondary Back action
→ Order Summary
```

The outer form and Order Summary surfaces should become square warm editorial panels with the already accepted 22px-class shell gutter.

The following remain open after D2A:

```text
- nested WooCommerce billing/address card removal
- field icons and V2 field surfaces
- Step-01 section titles/copy migration
- Order Summary internal typography/rows/trust migration
- desktop 7:5 body geometry
```

## 9. Stop point

```text
D2A candidate: source-audited and issued
Runtime application: pending
Next evidence: one 360px Step-01 screenshot after both replacements
D2B: blocked until D2A passes
Checkout: Not done
```
