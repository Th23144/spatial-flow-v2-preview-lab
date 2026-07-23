# Step 4E-B2-R5-E6-N2-B · Approved Option A Notice Band CSS Manual Execution

Last updated: 2026-07-23  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
N2-A Coupon status CSS validation: Passed.
Approved Notice direction: Option A.
Current bounded operation: Family 1 + Family 2 page-level Notice band only.
PHP change: No.
JavaScript change: No.
Deployment: Not authorized before combined artifact validation.
Cart page status: Not done.
```

## 1. Locked input artifact

Begin only from the validated N2-A artifact:

```text
Server path: assets/css/spatial-flow.css
Size: 700,240 bytes
Logical lines: 23,470
SHA256: f9978ff54a6b3d9f3e4b46274082f35b4d85fc27fbda9f8822d1c8ec748c2e72
Opening / closing braces: 3,645 / 3,645
Opening / closing comments: 338 / 338
CSS parser errors: 0
Final newline: present
```

Do not restart from `spatial-flow(39).css` or `spatial-flow(40).css`; those files do not contain the validated N2-A Coupon status refinement.

## 2. Exact replacement boundary

Find the unique complete block beginning with:

```css
/* === Step 4E Cart Notice Toast START ===
```

and ending with:

```css
/* === Step 4E Cart Notice Toast END === */
```

Replace that complete range, including both old marker comments, with the following exact block.

## 3. Approved Option A replacement

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

  display: inline-block !important;
  width: 14px !important;
  height: 14px !important;
  margin: 0 !important;
  padding: 0 !important;

  border: 1px solid currentColor !important;
  border-radius: 999px !important;
  background: radial-gradient(circle, currentColor 0 2px, transparent 2.5px) !important;
  box-shadow: none !important;
  content: "" !important;
  box-sizing: border-box !important;
}

body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward))::before {
  color: var(--sf-cart-clay) !important;
}

body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-info::before {
  color: rgba(79, 111, 112, .82) !important;
}

body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) .restore-item {
  display: inline-flex !important;
  align-items: center !important;
  min-height: 0 !important;
  margin: 0 !important;
  padding: 0 0 2px !important;

  border: 0 !important;
  border-bottom: 1px solid currentColor !important;
  border-radius: 0 !important;
  background: transparent !important;
  color: var(--sf-cart-ink) !important;
  box-shadow: none !important;
  text-decoration: none !important;

  font-family: "JetBrains Mono", ui-monospace, monospace !important;
  font-size: 9px !important;
  font-weight: 600 !important;
  line-height: 1.25 !important;
  letter-spacing: .16em !important;
  text-transform: uppercase !important;
  white-space: nowrap !important;
}

body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) .restore-item:hover,
body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) .restore-item:focus-visible {
  color: var(--sf-cart-clay) !important;
}

/* Empty Cart keeps the same status language, centered above the empty-state copy. */
body.woocommerce-cart .entry-content > .woocommerce:has(.cart-empty) .woocommerce-message:not(:has(.wc-forward)) {
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
  }

  body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) .restore-item {
    font-size: 8px !important;
  }
}
/* === Step 4E-B2-R5-E6-N2 · Approved Option A Notice Band END === */
```

## 4. Expected combined N2 artifact

If the replacement is performed exactly on the validated N2-A UTF-8/LF artifact:

```text
Size: 701,572 bytes
Logical lines: 23,504
SHA256: fbe26aee2be439099ccaf61a998d6a8695b74174cb046f07a4677887f99d7f81
Opening / closing braces: 3,648 / 3,648
Opening / closing comments: 337 / 337
CSS parser errors: 0
Final newline: present
```

The comment count decreases by one pair because the replacement consolidates the previous marker and descriptive comment structure; this is expected.

## 5. Scope contract

This operation changes only the marked Cart Notice block.

It must preserve:

```text
- Family 1 native `div.woocommerce-message`
- Family 2 native `div.woocommerce-info`
- native `.restore-item` URL, nonce and lifecycle
- hidden `.wc-forward` added-to-cart Notice suppression
- Family 3 N2-A Coupon status refinement
- native hidden Coupon field, button, validation and error owner
- WooCommerce AJAX and totals behavior
```

## 6. Boundaries

```text
- do not append this block at the end of the CSS file
- do not leave the old Step 4E Cart Notice Toast block in place
- do not edit `.woocommerce-error` globally
- do not edit PHP, JavaScript or templates
- do not deploy before the combined artifact passes exact validation
- do not change version 2.7.8
- cancelled FIX4 remains cancelled
- Cart remains Not done
```

## 7. Next gate

Upload the combined edited CSS artifact. Validate exact hash, syntax, selector scope and diff before deployment.
