# Step 4E-B2-R5-E5-S2-F4 · Computed-Style Result and S2-F5 Table Shadow Test

Last updated: 2026-07-21  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
S2-F4 computed-style / DOM audit: Complete.
Concrete painted owner found: table.shop_table.cart.
Residual property: box-shadow: rgba(0, 0, 0, 0.02) 0px 5px 20px 0px.
Cart page status: Not done.
Current executable substep: S2-F5 zero-source table-shadow confirmation.
```

## 1. Live runtime evidence

Viewport:

```text
390 x 844
Device pixel ratio: 3
```

The Cart item row, tbody, form and ancestor chain are transparent, square and unshadowed.

The live table owner reports:

```text
element: table.shop_table.shop_table_responsive.cart.woocommerce-cart-form__contents
rect: 310px x 209.281px
background: transparent
border: none
border-radius: 0
box-shadow: rgba(0, 0, 0, 0.02) 0px 5px 20px 0px
```

The same shadow is confirmed through the `.woocommerce-cart-form__contents` selector.

No pseudo-element surface exists on the table, row, tbody or form.

## 2. Why prior tests did not eliminate the defect

```text
Tests A-D changed dividers and spacing only.
Test E changed divider width only.
Test F changed row geometry only.
None of those tests changed table.shop_table.cart box-shadow.
```

The shadow covers the exact 310px x 209.281px Cart table rectangle. Its opacity is only 0.02, so it does not look like a conventional card shadow; instead it creates the persistent subtle bounded plane described by the user as an invisible picture frame.

## 3. S2-F5 Test G

DevTools/Console only. Reload before and after the test.

Temporarily set:

```css
body.woocommerce-cart table.shop_table.cart {
  box-shadow: none !important;
}
```

Question:

```text
Does the residual invisible picture-frame perception disappear when the live table shadow alone is removed?
```

## 4. Interpretation

```text
Test G disappears:
The concrete owner is confirmed. Author S2-G as an in-place source correction for the existing table selector only.

Test G materially improves but does not fully disappear:
The table shadow is one confirmed owner; inspect remaining live painted properties after removing it before source edit.

Test G has no effect:
Do not edit source. Continue computed-style isolation.
```

## 5. Locked deployed state

```text
functions.php SHA256:
5bd9f8b307d1b59eaa92bf31d3640e2d4ba48bca4de7a640b705d5e75f9ef00b

assets/js/spatial-flow.js SHA256:
7442ee92167ae383b933c6db0281f14ea56a75733339818c3e4858d77d52651b

assets/css/spatial-flow.css SHA256:
4bce679ee3c2abca6bcc0dfd4733d92d0c8b77e16b7a0bbf7d7832e305cff6b6

Version: 2.7.8
```

## 6. Boundaries

```text
- no source file edit during S2-F5
- no CSS upload or deployment
- no PHP or JavaScript change
- retain final product divider
- do not execute cancelled FIX4
- refresh removes the temporary test
```
