# Step 4E-B2-R5-E5-S2-F5 · Table Shadow Confirmed / S2-G Decision

Last updated: 2026-07-21  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
S2-F5 Test G: Passed.
Residual invisible picture frame: Disappeared visibly.
Confirmed owner: table.shop_table.cart box-shadow.
Mobile product divider: Retain for now.
Cart page status: Not done.
Current executable substep: S2-G bounded in-place table-shadow source correction.
```

## 1. Runtime confirmation

At the rejected 390px phone viewport, the user temporarily applied:

```css
body.woocommerce-cart table.shop_table.cart {
  box-shadow: none !important;
}
```

Computed style returned:

```text
none
```

The user confirmed the previously persistent invisible picture-frame effect visibly disappeared on phone and desktop.

Therefore the concrete runtime owner is confirmed:

```text
table.shop_table.shop_table_responsive.cart.woocommerce-cart-form__contents
box-shadow: rgba(0, 0, 0, 0.02) 0px 5px 20px 0px
```

## 2. Mobile divider decision

The remaining phone product divider is visually separate from the rejected shadow defect.

Authoritative static reference:

```text
preview/spatial-flow-cart-v1.html
```

Reference contract:

```css
.cart-item {
  padding: 32px 0;
  border-bottom: 1px solid var(--border-soft);
}
```

Responsive rules at <=720px and <=480px alter the item grid only; they do not remove the product divider.

Project policy also requires the final product divider to remain. Therefore:

```text
- do not cancel the divider during S2-G
- do not combine a subjective divider redesign with the confirmed shadow bug fix
- deploy and review the shadow-free page first in a normal browser view
- if the divider is still rejected afterward, treat it as a separate strict-reference design decision
```

## 3. Authorized S2-G scope

Only the existing Cart table shadow declaration may be corrected in place:

```text
Target owner: body.woocommerce-cart table.shop_table.cart or the exact current canonical equivalent
Target property: box-shadow
Required result: none !important
```

Must remain unchanged:

```text
- product-row bottom divider
- heading divider
- item spacing and layout
- Order Summary
- Coupon bridge
- quantity, remove, undo, totals and checkout behavior
- PHP and JavaScript
- version 2.7.8
- cancelled FIX4 status
```

## 4. Deployment boundary

```text
- CSS only
- no append-only override
- edit the existing canonical Cart table selector in place
- exact artifact validation before deployment
- runtime acceptance after deployment
```
