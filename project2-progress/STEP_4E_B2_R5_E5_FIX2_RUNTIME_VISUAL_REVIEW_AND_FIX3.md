# Step 4E-B2-R5-E5-FIX2 · Runtime Visual Review + FIX3

Last updated: 2026-07-19  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Runtime result

```text
Deployed artifact: spatial-flow(32).css
BlockUI filled wash removal: Passed.
Residual visual frame perception: Failed / still perceptible.
Current executable phase: R5-E5-FIX3 demote the native Coupon / Update Cart row into static-reference-aligned editorial utilities.
Cart page status: Not done.
```

## Screenshot diagnosis

The supplied normal-state screenshot no longer shows a painted BlockUI rectangle. The Cart form and surrounding page use the same uninterrupted warm canvas.

The remaining frame is perceptual but real as a composition defect. It is created by the following aligned geometry:

```text
- the product row spans the full left column and ends with a full-width divider
- the Coupon input, Apply Coupon button and Update Cart button immediately repeat the same full-width rectangular axis
- all three controls use closed 1px rectangular borders
- the action row begins directly under the product divider
```

Together these elements create an implied container boundary even though the form background itself is transparent.

## Static-reference comparison

Authoritative reference:

```text
preview/spatial-flow-cart-v1.html
```

The reference keeps:

```text
- transparent item owner
- transparent rows
- only a bottom divider between items
- small mono text actions with no boxed surface
```

The static reference does not contain the native WooCommerce Coupon / Update Cart row. Therefore the production adaptation should preserve those functions while styling them as quiet editorial utilities, following the reference's `cart-item-actions` language rather than closed form boxes.

Do not remove the product-row divider. It is present in the static reference. Do not change width, 7fr / 5fr tracks, 80px gap, product grid, totals or BlockUI.

## FIX3 operation A · desktop Coupon / Update Cart owner

Start from exact deployed `spatial-flow(32).css`.

Replace the complete range:

```text
/* ---------- Coupon / Update Cart ---------- */
through the line immediately before
/* ---------- Order Summary ---------- */
```

with:

```css
/* ---------- Coupon / Update Cart ---------- */
body.woocommerce-cart form.woocommerce-cart-form tr:has(td.actions),
body.woocommerce-cart form.woocommerce-cart-form td.actions {
  display: block !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  background: transparent !important;
}

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

body.woocommerce-cart form.woocommerce-cart-form td.actions .coupon label {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  white-space: nowrap !important;
}

body.woocommerce-cart form.woocommerce-cart-form td.actions .coupon .input-text {
  flex: 1 1 auto !important;
  width: auto !important;
  min-width: 0 !important;
  height: 40px !important;
  margin: 0 !important;
  padding: 0 0 8px !important;
  border: 0 !important;
  border-bottom: 1px solid var(--sf-cart-border) !important;
  border-radius: 0 !important;
  background: transparent !important;
  color: var(--sf-cart-ink) !important;
  box-shadow: none !important;
  font-size: 13px !important;
}

body.woocommerce-cart form.woocommerce-cart-form td.actions .button {
  display: inline-flex !important;
  flex: 0 0 auto !important;
  align-items: center !important;
  justify-content: center !important;
  width: auto !important;
  min-width: 0 !important;
  min-height: 0 !important;
  height: auto !important;
  margin: 0 !important;
  padding: 0 0 7px !important;
  border: 0 !important;
  border-bottom: 1px solid currentColor !important;
  border-radius: 0 !important;
  background: transparent !important;
  color: var(--sf-cart-ink) !important;
  box-shadow: none !important;
  font-family: "JetBrains Mono", ui-monospace, monospace !important;
  font-size: 9px !important;
  font-weight: 600 !important;
  line-height: 1.25 !important;
  letter-spacing: .18em !important;
  text-transform: uppercase !important;
  white-space: nowrap !important;
}

body.woocommerce-cart form.woocommerce-cart-form td.actions .button:hover,
body.woocommerce-cart form.woocommerce-cart-form td.actions .button:focus-visible {
  background: transparent !important;
  color: var(--sf-cart-clay) !important;
}

body.woocommerce-cart form.woocommerce-cart-form td.actions .button:disabled,
body.woocommerce-cart form.woocommerce-cart-form td.actions .button[disabled] {
  opacity: .32 !important;
  cursor: not-allowed !important;
}

```

## FIX3 operation B · mobile action-row owner

Inside the existing Cart mobile media query, replace the complete range beginning with:

```css
body.woocommerce-cart form.woocommerce-cart-form td.actions {
```

and ending immediately before:

```css
body.woocommerce-cart .cart-collaterals {
```

with:

```css
  body.woocommerce-cart form.woocommerce-cart-form td.actions {
    display: block !important;
    padding-top: 22px !important;
  }

  body.woocommerce-cart form.woocommerce-cart-form td.actions .coupon {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) auto !important;
    align-items: end !important;
    gap: 14px !important;
    width: 100% !important;
    max-width: none !important;
  }

  body.woocommerce-cart form.woocommerce-cart-form td.actions .coupon .input-text {
    width: 100% !important;
    min-width: 0 !important;
  }

  body.woocommerce-cart form.woocommerce-cart-form td.actions .coupon .button,
  body.woocommerce-cart form.woocommerce-cart-form td.actions > .button {
    width: auto !important;
    min-width: 0 !important;
  }

  body.woocommerce-cart form.woocommerce-cart-form td.actions > .button {
    margin-top: 18px !important;
  }

```

## Predicted exact artifact

```text
Size: 698,076 bytes
Logical lines: 23,406
SHA256: 3e6b0d6fa292681cee1c2936e744314b4347a0bcc82ea3e7cd911d5cac1969ce
Braces: 3,638 / 3,638
Comments: 337 / 337
CSS parser errors: 0
Line endings: LF
Final newline: present
```

## Runtime gate

```text
1. no filled or tinted Cart-form surface exists
2. no BlockUI rectangle appears during update
3. Coupon is an underline field, not a closed input box
4. Apply Coupon and Update Cart are quiet text actions, not bordered rectangles
5. product divider remains, matching the static reference
6. native coupon and update behavior remains functional
7. disabled Update Cart remains visibly disabled
8. mobile coupon row remains readable and overflow-safe
9. Cart geometry, totals, breadcrumb, recommendations, Header and Footer remain unchanged
```