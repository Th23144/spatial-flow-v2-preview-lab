# Step 4F · R1 Batch-5 Nested Order Review Sticky Root Cause and Fix

Date: 2026-08-07  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

After the desktop body-overflow sticky correction, the outer `.sf-safe5-summary` began sticking correctly, but the user reported a new bottom-of-page overlap among Shipping / Total / Trust.

A bottom-state runtime diagnostic at 1365×991 / Step 01 proves the exact second-layer cause.

## Runtime proof

Outer Summary:

```text
.sf-safe5-summary
position: sticky
top: 112px
height: 908.78px
rect top/bottom: -349.81 / 558.97
```

Unexpected nested sticky:

```text
#order_review.sf-safe5-order-review
position: sticky
top: 112px
height: 486.97px
rect top/bottom: 36 / 522.97
```

The table/tfoot rows themselves are static:

```text
tfoot: position static
Subtotal: position static
Shipping: position static
```

Trust is also static:

```text
.sf-safe5-trust
position: static
rect top/bottom: 362.80 / 522.97
```

The measured intersections are decisive:

```text
Subtotal vs Shipping: no overlap
Shipping vs Total: no overlap
Total vs Trust: overlap = 60.09px
Shipping vs Trust: overlap = 54.44px
```

Therefore the visual collision is not caused by malformed tfoot geometry. It occurs because `#order_review` is independently sticky inside an already-sticky `.sf-safe5-summary`. As the outer Summary reaches its bottom containing-block clamp, the nested `#order_review` remains visually displaced while the following Trust block stays in its normal-flow position, causing direct overlap.

## Ownership interpretation

The Batch-5 read-only audit had already documented that historical `assets/css/spatial-flow.css` still contains repeated broad Checkout selectors including `#order_review`, and that Batch 5 must establish a narrow `.sf-safe5-summary-card` owner without editing shared CSS until R5.

The current Batch-5 CSS normalizes `#order_review` width/background/overflow, but does not yet neutralize legacy `position/top`. Runtime computed style proves that omission is now observable.

## Bounded correction

Keep the accepted outer Summary sticky behavior unchanged. Neutralize sticky positioning only on the nested native Order Review inside the SAFE5 Summary card:

```css
body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-summary-card #order_review.sf-safe5-order-review {
  position: static !important;
  top: auto !important;
  bottom: auto !important;
}
```

Insert this immediately after the existing combined `#order_review / table.shop_table` normalization block and before the subsequent table display rule.

Do not change:

```text
.sf-safe5-summary position/top
Summary card layout
Coupon
Trust
product rows
tfoot rows
Step 01/02/03
PHP
JavaScript
shared spatial-flow.css
```

## Exact source target

Pre-change installed source:

```text
assets/css/checkout-safe5.css
88,711 bytes
2,707 lines
SHA256 8808c8ef99cf48bdde9deb2994f6e5fcd373c603fe32b9d852783ab6ae4d288a
CRLF
no final newline
```

Post-change target from exact CRLF-preserving offline construction:

```text
assets/css/checkout-safe5.css
88,922 bytes
2,713 lines
SHA256 8dcf35e6b850f861bc02c060936ba775ab73ef855d264d6342cfe49860788659
CRLF
no final newline
CSS braces 330 / 330
CSS comments 22 / 22
```

## Runtime acceptance after installation

At 1366px / 100% / Step 01:

```text
1. scroll until Summary enters sticky state
2. confirm the entire Summary moves as one unit
3. continue to page bottom
4. confirm Shipping / Total / Trust never overlap
5. confirm outer Summary releases within the Checkout shell and does not cover Footer
```

No mobile sticky retest is required because <=1040px remains intentionally static.

## Status

```text
Body overflow sticky ancestor defect: fixed
Nested #order_review sticky defect: proven
Nested fix: defined / not yet installed
Batch 5: open pending source audit and runtime acceptance
Checkout: Not done
```
