# Step 4E-B2-R5-E6-N2 · Option A Approval and Exact CSS Manual Execution

Last updated: 2026-07-22  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
User reviewed a visual comparison of Notice directions A / B / C.
User-selected direction: Option A — unified editorial status band.
Notice ownership audit: Complete.
Implementation scope proven sufficient: Cart-only CSS.
PHP change required: No.
JavaScript change required: No.
WooCommerce lifecycle change required: No.
Source changes performed in repository: None.
Current executable substep: manually edit the exact current CSS artifact, then upload it for validation before deployment.
Cart page status: Not done.
```

## 1. Approved visual contract

### Family 1 — Cart success/status feedback

Confirmed states:

```text
- Cart updated.
- Removed item + native Undo / Restore action.
```

Approved treatment:

```text
- transparent background
- no card surface
- no radius
- no shadow
- compact 44–46px status-band rhythm
- quiet top and bottom hairlines
- readable 12px desktop copy
- restrained clay status marker
- native Undo / Restore retained as a distinct underlined action
```

### Family 2 — Shipping information feedback

Confirmed state:

```text
- Shipping costs updated.
```

Approved treatment:

```text
- same status-band geometry as Family 1
- transparent background
- no white rounded capsule
- neutral information marker
- same readable typography and grid alignment
```

### Family 3 — Coupon validation feedback

Confirmed state:

```text
- Invalid Coupon inside Order Summary.
```

Approved treatment:

```text
- remains inline beneath the Coupon controls
- no separate card or capsule
- 11px readable copy
- stronger hierarchy, spacing and contrast
- native hidden WooCommerce Coupon owner remains untouched
- visible Order Summary mirror remains intact
```

The visual comparison was used to choose the direction. The exact CSS values below are the bounded implementation specification for runtime validation; final acceptance still depends on the live desktop and phone result.

## 2. Locked source baseline

Edit only the current deployed CSS baseline:

```text
Server path: assets/css/spatial-flow.css
Uploaded alias used for audit: spatial-flow(40).css
Size: 700,208 bytes
Logical lines: 23,469
SHA256: 1a4daa7f09b6370ccc93cc8441ea3c45ec23d8777a049c1a6f2c8fd50720ddce
Opening / closing braces: 3,645 / 3,645
Opening / closing comments: 338 / 338
CSS parser errors: 0
Version: 2.7.8
```

Do not begin from an older CSS alias.

## 3. Operation A — refine the visible Order Summary Coupon status

Find the unique complete block beginning with:

```css
body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__status {
```

and ending after:

```css
body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__status.is-success {
  color: var(--sf-cart-ink) !important;
}
```

Replace that complete range with:

```css
body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__status {
  min-height: 0 !important;
  margin: 11px 0 0 !important;
  color: rgba(31, 25, 22, .72) !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  line-height: 1.55 !important;
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

This changes only the visible Order Summary status presentation. It does not alter the hidden native `p.coupon-error-notice`, Coupon validation, Nonce or lifecycle bridge.

## 4. Operation B — replace the complete active Cart Notice block

Find the unique complete range beginning with:

```css
/* === Step 4E Cart Notice Toast START ===
```

and ending with:

```css
/* === Step 4E Cart Notice Toast END === */
```

Replace the entire range, including both old marker comments, with:

```css
/* === Step 4E-B2-R5-E6-N2 · Approved Option A Notice Band START ===
   Scope: Cart page only.
   Unify page-level success and information feedback as one compact editorial status band.
   Preserve native WooCommerce message text, Restore / Undo actions and lifecycle ownership.
*/

/* Keep hiding "added to cart" success notices containing the native View cart action. */
body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-message:has(.wc-forward),
body.woocommerce-cart .woocommerce-message:has(.wc-forward) {
  display: none !important;
}

body.woocommerce-cart .woocommerce-notices-wrapper {
  grid-column: 1 / -1 !important;
  width: 100% !important;
  margin: 0 0 18px !important;
}

body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-message:not(:has(.wc-forward)),
body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-info,
body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) {
  position: relative !important;
  inset: auto !important;
  z-index: 2 !important;

  display: flex !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  justify-content: flex-start !important;
  gap: 6px 10px !important;

  width: 100% !important;
  min-height: 46px !important;
  margin: 0 !important;
  padding: 11px 0 !important;

  border: 0 !important;
  border-top: 1px solid var(--sf-cart-border-soft) !important;
  border-bottom: 1px solid var(--sf-cart-border-soft) !important;
  border-radius: 0 !important;
  background: transparent !important;
  color: rgba(31, 25, 22, .78) !important;
  box-shadow: none !important;

  font-family: "Inter", sans-serif !important;
  font-size: 12px !important;
  font-weight: 400 !important;
  line-height: 1.45 !important;
  letter-spacing: .01em !important;
}

body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward))::before,
body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-info::before {
  position: static !important;
  inset: auto !important;
  flex: 0 0 14px !important;

  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;

  width: 14px !important;
  height: 14px !important;
  margin: 0 !important;
  padding: 0 !important;

  border: 1px solid var(--sf-cart-clay) !important;
  border-radius: 50% !important;
  background: transparent !important;
  color: var(--sf-cart-clay) !important;
  box-shadow: none !important;

  font-family: "Inter", sans-serif !important;
  font-size: 9px !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: 1 !important;
  text-align: center !important;
  text-transform: none !important;
  content: "✓" !important;
}

body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-info::before {
  content: "i" !important;
}

body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) .restore-item {
  display: inline-flex !important;
  align-items: center !important;
  min-height: 0 !important;
  margin: 0 0 0 2px !important;
  padding: 0 0 2px !important;

  border: 0 !important;
  border-bottom: 1px solid currentColor !important;
  border-radius: 0 !important;
  background: transparent !important;
  color: var(--sf-cart-ink) !important;
  box-shadow: none !important;
  text-decoration: none !important;

  font-family: "JetBrains Mono", ui-monospace, monospace !important;
  font-size: 10px !important;
  font-weight: 600 !important;
  line-height: 1.35 !important;
  letter-spacing: .12em !important;
  text-transform: uppercase !important;
  white-space: nowrap !important;
}

body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) .restore-item:hover,
body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) .restore-item:focus-visible {
  color: var(--sf-cart-clay) !important;
}

/* Empty Cart keeps the same status language, centered above the empty-state copy. */
body.woocommerce-cart .entry-content > .woocommerce:has(.cart-empty) .woocommerce-message:not(:has(.wc-forward)),
body.woocommerce-cart .entry-content > .woocommerce:has(.cart-empty) .woocommerce-notices-wrapper > .woocommerce-info {
  justify-content: center !important;
  text-align: center !important;
}

@media (max-width: 767px) {
  body.woocommerce-cart .woocommerce-notices-wrapper {
    margin-bottom: 16px !important;
  }

  body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-message:not(:has(.wc-forward)),
  body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-info,
  body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) {
    min-height: 44px !important;
    padding: 10px 0 !important;
    gap: 6px 9px !important;
    font-size: 11px !important;
    line-height: 1.5 !important;
  }

  body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward))::before,
  body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-info::before {
    flex-basis: 13px !important;
    width: 13px !important;
    height: 13px !important;
    font-size: 8px !important;
  }

  body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) .restore-item {
    margin-left: 0 !important;
    font-size: 9px !important;
  }
}
/* === Step 4E-B2-R5-E6-N2 · Approved Option A Notice Band END === */
```

## 5. Exact expected edited artifact

If both operations are performed exactly on the locked UTF-8/LF baseline:

```text
Size: 701,895 bytes
Logical lines: 23,514
SHA256: 509a6143ff8d264539af4fbb5f2ef4132a293995566219781ff0229dfc239a3d
Opening / closing braces: 3,647 / 3,647
Opening / closing comments: 337 / 337
CSS parser errors: 0
Final newline: present
```

Expected uniqueness:

```text
Approved Option A Notice Band START marker: 1
Approved Option A Notice Band END marker: 1
Old Step 4E Cart Notice Toast START marker: 0
Order Summary Coupon status base selector: 1
Added-to-cart .wc-forward hide selectors: retained
```

## 6. Required boundaries

Do not:

```text
- append a broad patch at the end of the stylesheet
- edit the global non-Cart WooCommerce Notice rule
- modify PHP or JavaScript
- remove the hidden native Coupon owner
- remove or duplicate Restore / Undo URLs or Nonces
- modify Cart template ownership
- modify Checkout, payment, Header or Footer
- add a plugin
- change version 2.7.8
- execute the cancelled FIX4
- deploy before exact artifact validation
```

## 7. Validation sequence after manual editing

```text
1. Upload the edited CSS artifact for exact hash / syntax / scope validation.
2. Deploy only after artifact validation passes.
3. Runtime-check Cart updated.
4. Runtime-check removed item + Undo / Restore.
5. Runtime-check Shipping costs updated.
6. Runtime-check invalid Coupon inline status.
7. Check 1366 desktop, 390px phone and 360px phone.
8. Confirm no horizontal overflow, clipping, duplicated Notice or lifecycle regression.
9. Final Cart visual revalidation.
10. Binary Cart decision only after all gates pass.
```
