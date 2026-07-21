# Step 4E-B2-R5-E5-S2-C · Exact CSS Ownership Correction

Last updated: 2026-07-21  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
S2-A PHP renderer validation: Passed / not deployed.
S2-B JavaScript lifecycle bridge validation: Passed / not deployed.
S2-C CSS manual execution: Ready.
Combined frontend deployment: Not authorized yet.
Cart page status: Not done.
```

## Purpose

This is the source operation that removes the native WooCommerce `td.actions` owner from the visible left-column geometry while preserving the native controls and nonce in the DOM.

It therefore addresses the residual implied / invisible frame under the Cart product stack.

The final product divider remains untouched. The visible production Coupon control is styled inside the filled Order Summary surface.

## 1. Source baseline

```text
Server path: assets/css/spatial-flow.css
Uploaded alias: spatial-flow(35).css
Size: 698,076 bytes
Logical lines: 23,406
SHA256: 3e6b0d6fa292681cee1c2936e744314b4347a0bcc82ea3e7cd911d5cac1969ce
Opening / closing braces: 3,638 / 3,638
Opening / closing comments: 337 / 337
CSS parser errors: 0
```

## 2. Operation A · Replace the active native actions presentation

Find the unique section beginning with:

```css
/* ---------- Coupon / Update Cart ---------- */
```

and ending immediately before:

```css
/* ---------- Order Summary ---------- */
```

Replace the complete old section with:

```css
/* ---------- Native Coupon / Update Cart owner ---------- */
body.woocommerce-cart form.woocommerce-cart-form tr:has(td.actions),
body.woocommerce-cart form.woocommerce-cart-form td.actions {
  position: absolute !important;
  display: block !important;
  width: 1px !important;
  min-width: 1px !important;
  max-width: 1px !important;
  height: 1px !important;
  min-height: 1px !important;
  max-height: 1px !important;
  margin: -1px !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  clip-path: inset(50%) !important;
  border: 0 !important;
  background: transparent !important;
  white-space: nowrap !important;
}

```

This keeps the native owner in the form but prevents it from contributing visible layout, fill, padding or spacing.

## 3. Operation B · Add the Order Summary Coupon styles

Find this unique block:

```css
body.woocommerce-cart .cart-collaterals .wc-proceed-to-checkout {
  display: grid !important;
  gap: 10px !important;
  margin: 0 !important;
  padding: 0 !important;
}
```

Insert the following immediately after that block and before the existing checkout-button selector:

```css
/* ---------- Order Summary Coupon ---------- */
body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon {
  display: block !important;
  width: 100% !important;
  margin: 0 0 8px !important;
  padding: 0 !important;
  border: 0 !important;
  border-top: 1px solid var(--sf-cart-border-soft) !important;
  border-bottom: 1px solid var(--sf-cart-border-soft) !important;
  border-radius: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
}

body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__summary {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 16px !important;
  min-height: 44px !important;
  margin: 0 !important;
  padding: 0 !important;
  cursor: pointer !important;
  list-style: none !important;
  color: rgba(31, 25, 22, .68) !important;
  font-family: "JetBrains Mono", ui-monospace, monospace !important;
  font-size: 9px !important;
  font-weight: 500 !important;
  line-height: 1.4 !important;
  letter-spacing: .16em !important;
  text-transform: uppercase !important;
}

body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__summary::-webkit-details-marker {
  display: none !important;
}

body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__icon {
  position: relative !important;
  display: block !important;
  flex: 0 0 10px !important;
  width: 10px !important;
  height: 10px !important;
}

body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__icon::before,
body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__icon::after {
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  width: 10px !important;
  height: 1px !important;
  background: currentColor !important;
  content: "" !important;
  transform: translate(-50%, -50%) !important;
  transition: transform .18s ease !important;
}

body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__icon::after {
  transform: translate(-50%, -50%) rotate(90deg) !important;
}

body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon[open] .sf-cart-summary-coupon__icon::after {
  transform: translate(-50%, -50%) rotate(90deg) scaleX(0) !important;
}

body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__body {
  padding: 0 0 16px !important;
}

body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__body > label {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: -1px !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  clip-path: inset(50%) !important;
  border: 0 !important;
  white-space: nowrap !important;
}

body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__controls {
  display: grid !important;
  grid-template-columns: minmax(0, 1fr) auto !important;
  align-items: end !important;
  gap: 14px !important;
}

body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__controls input {
  width: 100% !important;
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
  font-family: "Inter", sans-serif !important;
  font-size: 13px !important;
  line-height: 1.4 !important;
}

body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__controls input:focus {
  border-bottom-color: var(--sf-cart-ink) !important;
  outline: 0 !important;
  box-shadow: none !important;
}

body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__controls button {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: auto !important;
  min-width: 0 !important;
  min-height: 0 !important;
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
  letter-spacing: .16em !important;
  text-transform: uppercase !important;
  white-space: nowrap !important;
}

body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__controls button:hover,
body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__controls button:focus-visible {
  background: transparent !important;
  color: var(--sf-cart-clay) !important;
}

body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon.is-processing {
  opacity: .62 !important;
}

body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__status {
  min-height: 0 !important;
  margin: 8px 0 0 !important;
  color: rgba(31, 25, 22, .62) !important;
  font-size: 10px !important;
  line-height: 1.45 !important;
}

body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__status:empty {
  display: none !important;
}

body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__status.is-error {
  color: var(--sf-cart-clay) !important;
}

body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__status.is-success {
  color: var(--sf-cart-ink) !important;
}

```

## 4. Operation C · Remove the obsolete phone actions continuation

Inside the existing `@media (max-width: 767px)` block, delete this exact complete range:

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

Do not remove or alter the following `.cart-collaterals` mobile rule.

## 5. Required boundaries

Do not:

```text
- remove the final product divider
- delete the native actions row from PHP or DOM
- append a new general Cart patch after the Canonical Cart block
- modify non-Cart selectors
- modify Checkout, payment, Header or Footer
- modify version 2.7.8
- deploy PHP, JavaScript or CSS yet
- execute cancelled FIX4
```

## 6. Expected edited artifact

When the three operations are performed exactly in UTF-8/LF format:

```text
Size: 700,439 bytes
Logical lines: 23,474
SHA256: d3460695ff0e53e79465ac9d13d723b440c69021413e15ff671705ec28b907aa
Opening / closing braces: 3,645 / 3,645
Opening / closing comments: 338 / 338
CSS parser errors: 0
```

Expected uniqueness:

```text
/* ---------- Native Coupon / Update Cart owner ---------- */: 1
/* ---------- Order Summary Coupon ---------- */: 1
old /* ---------- Coupon / Update Cart ---------- */: 0
active phone td.actions presentation blocks: 0
Canonical Cart Presentation END marker: 1
```

## 7. Validation gate

After editing, upload the exact CSS file.

Do not deploy any of the three edited artifacts until the CSS artifact passes exact hash, balance, parser, diff and scope validation.