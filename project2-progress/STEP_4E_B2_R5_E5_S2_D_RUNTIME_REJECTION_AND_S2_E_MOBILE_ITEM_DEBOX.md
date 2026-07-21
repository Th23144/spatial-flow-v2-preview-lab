# Step 4E-B2-R5-E5-S2-D Runtime Rejection · S2-E Mobile Item Debox

Last updated: 2026-07-21  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
S2-D combined deployment: Confirmed by user runtime screenshots and testing.
PHP fatal / blank page: Not observed.
Cart functional smoke checks: User reports basically all tested and working.
Desktop ownership correction: Visually improved / native actions row absent.
Mobile strict visual acceptance: Failed.
Failure: a white rounded shadowed product-card frame remains around each Cart item.
Cart page status: Not done.
Current executable substep: S2-E remove the obsolete phone product-card surface owner.
```

## 1. Screenshot diagnosis

The desktop screenshot shows the native Coupon / Apply / Update footer removed and the visible Coupon control operating inside Order Summary.

The phone screenshot still shows the Cart item as a separate elevated card with:

```text
- filled paper background
- four-sided border
- 18px radius
- mobile shadow
- 16px inset padding
- 16px bottom card gap
```

This is the remaining “invisible frame / picture-frame” artifact identified by the user.

## 2. Static reference contract

Authoritative reference:

```text
preview/spatial-flow-cart-v1.html
```

Base item contract:

```text
.cart-item
- transparent page-plane row
- vertical padding
- bottom divider only
- no filled surface
- no radius
- no shadow
```

At the mobile breakpoints the static reference changes only item grid geometry. It does not add a card background, border radius, shadow, inset card padding or card margin.

## 3. Exact active source owner

Validated deployed source baseline:

```text
assets/css/spatial-flow.css
Uploaded alias: spatial-flow(37).css
SHA256: d3460695ff0e53e79465ac9d13d723b440c69021413e15ff671705ec28b907aa
```

Inside the single Canonical Cart `@media (max-width: 767px)` product-row rule, the following six declarations actively create the remaining frame:

```css
margin: 0 0 16px !important;
padding: 16px !important;
border: 1px solid rgba(31, 25, 22, .055) !important;
border-radius: 18px !important;
background: var(--sf-cart-paper) !important;
box-shadow: var(--sf-cart-shadow-mobile) !important;
```

The selector is:

```css
body.woocommerce-cart form.woocommerce-cart-form tr.woocommerce-cart-form__cart-item,
body.woocommerce-cart form.woocommerce-cart-form tr.woocommerce-cart-form__cart-item:first-child
```

This is independent from the S2-C native `td.actions` ownership correction. S2-C worked; this separate phone product-row presentation remained.

## 4. Authorized S2-E correction

Delete only the six presentation declarations above from the existing phone product-row rule.

Retain all phone layout declarations:

```text
- two-column mobile grid
- grid rows
- column gap
- row gap
- min-height reset
- align-items
- thumbnail, name, remove, quantity and subtotal placement
```

After deleting the six overrides, the already-existing canonical base row contract resumes on phone:

```text
- transparent background
- no radius
- no shadow
- bottom divider only
- base vertical row padding
```

No new selector or append-only override is authorized.

## 5. Locked exact candidate

Starting artifact:

```text
spatial-flow(37).css
Size: 700,439 bytes
Logical lines: 23,474
SHA256: d3460695ff0e53e79465ac9d13d723b440c69021413e15ff671705ec28b907aa
```

Expected S2-E artifact after deleting exactly the six lines:

```text
Size: 700,177 bytes
Logical lines: 23,468
SHA256: 4bce679ee3c2abca6bcc0dfd4733d92d0c8b77e16b7a0bbf7d7832e305cff6b6
Braces: 3,645 / 3,645
Comments: 338 / 338
CSS parser errors: 0
```

## 6. Scope and deployment gate

```text
Modify only spatial-flow(37).css.
Do not change PHP or JavaScript.
Do not change version 2.7.8.
Do not append a later override.
Do not deploy until the edited CSS passes exact artifact validation.
Do not execute cancelled FIX4.
```

## 7. Post-deploy acceptance target

```text
1. phone Cart item is no longer a floating white rounded card
2. product image/text/quantity/price remain correctly placed
3. bottom divider remains visible
4. final product divider remains visible
5. remove control remains usable
6. Order Summary and visible Coupon remain unchanged
7. quantity, totals, counts, Coupon, Remove and Undo remain functional
8. desktop Cart remains unchanged
```
