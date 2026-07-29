# Step 4E-B2-R5-E6-N2-C · Cart Notice Component Full Coverage Manual Execution

Last updated: 2026-07-29  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
Generic Cart error DOM: Confirmed.
Confirmed owner: direct child `ul.woocommerce-error[role="alert"]`.
Confirmed content structure: one or more direct child `li` elements.
Approved strategy: Cart-page standard Notice component coverage.
Whole-site WooCommerce Notice rewrite: Not authorized.
Current source edit: None yet.
Current executable step: replace the existing approved N2 Notice block in place.
Cart page status: Not done.
```

## 1. Confirmed live error structure

The user captured the following live Cart validation state:

```text
Please enter a valid postcode / ZIP.
```

Confirmed runtime owner:

```html
<ul class="woocommerce-error" role="alert" tabindex="-1">
  <li>Please enter a valid postcode / ZIP.</li>
</ul>
```

Confirmed relationship:

```text
parent: div.woocommerce-notices-wrapper
container: ul.woocommerce-error
child content owner: direct li
role: alert
```

Confirmed computed treatment before correction:

```text
background: rgb(255, 255, 255)
border-radius: 18px
box-shadow: rgba(31, 25, 22, 0.055) 0 10px 24px
padding: 16px 18px
margin: 14px 0
width in supplied viewport: 1203.984375px
height: 55.09375px
display: block
```

This closes the structural uncertainty. The component correction can now support both one-item and multi-item native WooCommerce error lists without selecting individual message text.

## 2. Locked input artifact

Begin only from the currently deployed and previously validated N2 combined CSS artifact:

```text
Source artifact: spatial-flow(41).css
Destination: assets/css/spatial-flow.css
Size: 701,572 bytes
Logical lines: 23,504
SHA256: fbe26aee2be439099ccaf61a998d6a8695b74174cb046f07a4677887f99d7f81
Opening / closing braces: 3,648 / 3,648
Opening / closing comments: 337 / 337
CSS parser errors: 0
Final newline: present
```

Do not restart from `spatial-flow(39).css`, `spatial-flow(40).css` or the N2-A-only artifact.

## 3. Exact replacement boundary

Find the unique complete block beginning with:

```css
/* === Step 4E-B2-R5-E6-N2 · Approved Option A Notice Band START ===
```

and ending with:

```css
/* === Step 4E-B2-R5-E6-N2 · Approved Option A Notice Band END === */
```

Replace that complete range, including both marker comments, with the exact block below.

## 4. Exact N2-C replacement block

```css
/* === Step 4E-B2-R5-E6-N2-C · Cart Notice Component Coverage START ===
   Scope: Cart page standard WooCommerce page-level notices only.
   Unify message, information and error owners as one compact editorial status system.
   Preserve native WooCommerce text, roles, Restore / Undo actions and lifecycle ownership.
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
body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-error,
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
  list-style: none !important;

  font-family: "Inter", sans-serif !important;
  font-size: 12px !important;
  font-weight: 400 !important;
  line-height: 1.45 !important;
  letter-spacing: .01em !important;
}

body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward))::before,
body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-info::before,
body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-error::before {
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

body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-error::before {
  color: #9b5547 !important;
}

/* Native WooCommerce errors are a UL with one or more LI children. */
body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-error {
  display: grid !important;
  grid-template-columns: 14px minmax(0, 1fr) !important;
  column-gap: 10px !important;
  row-gap: 6px !important;
  align-items: center !important;
}

body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-error,
body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-error > li {
  list-style: none !important;
}

body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-error > li {
  grid-column: 2 !important;
  min-width: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  color: inherit !important;
  font: inherit !important;
  letter-spacing: inherit !important;
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
  body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-error,
  body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) {
    min-height: 44px !important;
    padding: 10px 0 !important;
    gap: 6px 9px !important;
    font-size: 11px !important;
    line-height: 1.5 !important;
  }

  body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward))::before,
  body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-info::before,
  body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-error::before {
    flex-basis: 13px !important;
    width: 13px !important;
    height: 13px !important;
  }

  body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-error {
    grid-template-columns: 13px minmax(0, 1fr) !important;
    column-gap: 9px !important;
  }

  body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) .restore-item {
    font-size: 8px !important;
  }
}
/* === Step 4E-B2-R5-E6-N2-C · Cart Notice Component Coverage END === */
```

## 5. Expected N2-C artifact

If the replacement is performed exactly on the locked UTF-8/LF input artifact:

```text
Size: 703,035 bytes
Logical lines: 23,543
SHA256: 79ab7e08308903f0e1693076b4817402515ada52944c575c1e827324cc6161fd
Opening / closing braces: 3,653 / 3,653
Opening / closing comments: 338 / 338
CSS parser errors: 0
Final newline: present
```

Expected marker counts:

```text
Old N2 START marker: 0
Old N2 END marker: 0
New N2-C START marker: 1
New N2-C END marker: 1
```

## 6. Coverage contract

The new block covers all standard direct page-level Cart Notice owners:

```text
- `.woocommerce-message:not(:has(.wc-forward))`
- `.woocommerce-info`
- `.woocommerce-error`
```

The error owner is treated as a component rather than by message text. Its native `ul > li` structure is retained, including support for more than one error item.

Semantic markers remain differentiated:

```text
message: existing clay marker
info: existing muted teal marker
error: stronger error marker `#9b5547`
```

## 7. Required preserved behavior

```text
- native WooCommerce text and ARIA roles
- native validation and error semantics
- native `.restore-item` URL, nonce and Undo lifecycle
- existing `.wc-forward` added-to-cart suppression
- N2-A Order Summary Coupon mirror status
- hidden native Coupon owner
- Cart AJAX, shipping, totals and checkout navigation
- version 2.7.8
```

## 8. Boundaries

```text
- edit only `assets/css/spatial-flow.css`
- replace the current marked N2 block in place
- do not append a second Notice patch at file end
- do not edit the unscoped global WooCommerce Notice rule
- do not broaden the rule to Checkout, Shop, Single Product, Thank You or account pages
- do not edit PHP, JavaScript, templates or plugins
- do not deploy before exact artifact validation
- cancelled FIX4 remains cancelled
- Cart remains Not done
```

## 9. Next gate

Upload the edited CSS artifact without deploying it. Validate exact hash, syntax, marker counts, diff scope and preservation of the Coupon status block before deployment.