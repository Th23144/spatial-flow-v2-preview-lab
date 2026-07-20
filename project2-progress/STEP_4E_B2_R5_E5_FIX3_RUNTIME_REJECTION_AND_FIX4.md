# Step 4E-B2-R5-E5-FIX3 · Runtime Rejection + FIX4

Last updated: 2026-07-20  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Runtime result

```text
Deployed artifact: spatial-flow(34).css
Coupon / Apply / Update de-boxing: Passed.
Implied left-column frame removal: Failed.
Current executable phase: R5-E5-FIX4 break the remaining full-width visual axis.
Cart page status: Not done.
```

## Screenshot diagnosis

The new runtime screenshot confirms that the Cart form and page canvas share the same warm background. There is no remaining painted form panel or BlockUI wash.

FIX3 nevertheless preserved the two strongest geometric frame cues:

```text
- the final product row still ends with a full-width divider
- td.actions still owns the full left-column width
- justify-content: space-between still pins Update Cart to the far-right edge
- the Coupon group begins at the far-left edge
```

Therefore the left edge, final product divider and far-right Update Cart action still define one shared rectangular axis. Removing the closed button borders was insufficient because the geometry remained unchanged.

## Static-reference interpretation correction

Reference:

```text
preview/spatial-flow-cart-v1.html
```

The reference uses item dividers to separate product rows. In a dynamic one-item Cart, preserving a terminal full-width divider does not separate two products; it closes the bottom edge of the product composition.

FIX4 therefore treats the divider as an inter-item separator only:

```text
- product rows followed by another product keep the divider
- the final product row before the native actions row has no terminal divider
```

The native Coupon / Update utilities also become a compact left-aligned group rather than a full-width table footer.

## FIX4 operation A · final-item divider ownership

Start from exact deployed `spatial-flow(34).css`.

Inside the Canonical Cart product-row rule, replace:

```css
  border: 0 !important;
  border-bottom: 1px solid var(--sf-cart-border-soft) !important;
  border-radius: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
}

body.woocommerce-cart form.woocommerce-cart-form tr.woocommerce-cart-form__cart-item:first-child {
```

with:

```css
  border: 0 !important;
  border-bottom: 0 !important;
  border-radius: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
}

body.woocommerce-cart form.woocommerce-cart-form tr.woocommerce-cart-form__cart-item:has(+ tr.woocommerce-cart-form__cart-item) {
  border-bottom: 1px solid var(--sf-cart-border-soft) !important;
}

body.woocommerce-cart form.woocommerce-cart-form tr.woocommerce-cart-form__cart-item:first-child {
```

This preserves separators between multiple products but removes the terminal line that closes the one-item composition.

## FIX4 operation B · compact left-aligned utilities

Replace the exact range:

```css
body.woocommerce-cart form.woocommerce-cart-form td.actions {
  display: flex !important;
  align-items: flex-end !important;
  justify-content: space-between !important;
  gap: 32px !important;
  padding-top: 26px !important;
}

body.woocommerce-cart form.woocommerce-cart-form td.actions .coupon {
  display: flex !important;
  flex: 1 1 auto !important;
  align-items: flex-end !important;
  gap: 18px !important;
  width: auto !important;
  max-width: 520px !important;
}
```

with:

```css
body.woocommerce-cart form.woocommerce-cart-form td.actions {
  display: flex !important;
  align-items: flex-end !important;
  justify-content: flex-start !important;
  gap: 28px !important;
  width: min(100%, 650px) !important;
  max-width: 650px !important;
  margin-right: auto !important;
  padding-top: 38px !important;
}

body.woocommerce-cart form.woocommerce-cart-form td.actions .coupon {
  display: flex !important;
  flex: 0 1 480px !important;
  align-items: flex-end !important;
  gap: 18px !important;
  width: min(100%, 480px) !important;
  max-width: 480px !important;
}
```

Do not change the existing phone owner. The width functions above remain viewport-safe and the approved phone grid continues to override the Coupon layout.

## Predicted exact artifact

```text
Size: 698,352 bytes
Logical lines: 23,413
SHA256: 6377f0686c9b7a992c440e0c855bfa409cdcd45359f33695f896fa048d5f6737
Braces: 3,639 / 3,639
Comments: 337 / 337
CSS parser errors: 0
Line endings: LF
Final newline: present
```

## Runtime gate

```text
1. the final product row has no terminal full-width divider
2. dividers remain between products when the Cart contains multiple product rows
3. Coupon / Apply / Update form one compact left-aligned utility group
4. Update Cart no longer defines the far-right edge of the left column
5. no filled Cart-form surface or BlockUI rectangle appears
6. native Coupon, Update Cart, quantity, notice and Undo behavior remains functional
7. phone layout remains readable and overflow-safe
8. Cart geometry, totals, breadcrumb, recommendations, Header and Footer remain unchanged
```