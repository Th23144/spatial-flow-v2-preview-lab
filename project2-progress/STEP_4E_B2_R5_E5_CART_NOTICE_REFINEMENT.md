# Step 4E-B2-R5-E5 · Cart Notice In-Place Refinement

Last updated: 2026-07-19  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E4 strict Cart visual rebase：Passed / closed.
R5-E5 current notice source audit：Complete.
R5-E5 bounded manual CSS replacement：Ready.
Deployment：Not authorized before edited-file validation.
Cart page status：Not done.
```

## Scope

Modify only:

```text
assets/css/spatial-flow.css
```

Baseline:

```text
spatial-flow(26).css
Size: 697,699 bytes
Logical lines: 23,389
SHA256: 1699ee8bfc66ab2dd4c9229b04f61be8ec92386493ac33665275bc9d91638e66
Braces: 3,633 / 3,633
Comments: 341 / 341
```

Do not modify:

```text
functions.php
assets/js/spatial-flow.js
header.php
WooCommerce templates
Checkout SAFE5
Cart geometry
Cart breadcrumb
recommendation logic
Header/Footer
version 2.7.8
```

## Source diagnosis

The existing Cart Notice owner is functional but visually reads as a floating pill/toast because it uses:

```text
- max-width style width calculation tied to the old two-column layout
- 999px rounded container
- white translucent fill and drop shadow
- filled dark Undo pill
- prominent circular icon
```

That visual language is inconsistent with the restrained editorial Cart direction and was explicitly rejected by the user.

The refinement must preserve:

```text
- WooCommerce native message markup
- native Restore / Undo link
- hidden add-to-cart success message on the Cart page
- normal document-flow placement
- empty-Cart compatibility
- desktop and phone behavior
```

## Exact manual replacement

Inside `spatial-flow(26).css`, find the complete range:

```text
/* === Step 4E Cart Notice Toast START === */
...
/* === Step 4E Cart Notice Toast END === */
```

Replace that complete range in place with:

```css
/* === Step 4E Cart Notice Toast START ===
   Scope: Cart page only.
   Hide add-to-cart success notice.
   Present cart updated / item removed feedback as a restrained editorial status row.
   Keep Restore / Undo functional.
*/

/* Keep hiding "added to cart" success notice on Cart page. */
body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-message:has(.wc-forward),
body.woocommerce-cart .woocommerce-message:has(.wc-forward) {
  display: none !important;
}

/* Keep notice feedback inside the full Cart grid. */
body.woocommerce-cart .woocommerce-notices-wrapper {
  grid-column: 1 / -1 !important;
  width: 100% !important;
  margin: 0 0 24px !important;
}

/* Editorial status row for Cart updates and removed-item feedback. */
body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-message:not(:has(.wc-forward)),
body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) {
  position: relative !important;
  inset: auto !important;
  z-index: 2 !important;

  display: grid !important;
  grid-template-columns: 24px minmax(0, 1fr) auto !important;
  align-items: center !important;
  column-gap: 14px !important;

  width: 100% !important;
  margin: 0 !important;
  padding: 14px 18px !important;

  border: 1px solid rgba(31, 25, 22, 0.1) !important;
  border-left: 2px solid var(--sf-cart-clay, #a8745c) !important;
  border-radius: 0 !important;
  background: rgba(255, 253, 250, 0.72) !important;
  color: rgba(31, 25, 22, 0.72) !important;
  box-shadow: none !important;

  font-size: 12px !important;
  line-height: 1.55 !important;
}

/* Empty Cart keeps the same full-width feedback language. */
body.woocommerce-cart .entry-content > .woocommerce:has(.cart-empty) .woocommerce-message:not(:has(.wc-forward)) {
  width: 100% !important;
  margin: 0 !important;
}

/* Replace WooCommerce's absolute icon with a quiet inline status mark. */
body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward))::before {
  position: static !important;
  inset: auto !important;
  transform: none !important;

  content: "✓" !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;

  width: 24px !important;
  height: 24px !important;
  margin: 0 !important;

  border: 1px solid rgba(31, 25, 22, 0.12) !important;
  border-radius: 999px !important;
  background: transparent !important;
  color: var(--sf-cart-clay, #a8745c) !important;

  font-family: "JetBrains Mono", ui-monospace, monospace !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  line-height: 1 !important;
}

body.woocommerce-cart .woocommerce-message:has(.restore-item)::before {
  content: "↺" !important;
  font-size: 12px !important;
}

/* Restore / Undo remains a native WooCommerce link, styled as editorial text. */
body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) .restore-item {
  justify-self: end !important;
  display: inline-flex !important;
  align-items: center !important;

  min-height: 0 !important;
  margin: 0 !important;
  padding: 2px 0 !important;

  border: 0 !important;
  border-bottom: 1px solid currentColor !important;
  border-radius: 0 !important;
  background: transparent !important;
  color: var(--sf-cart-ink, #1f1916) !important;
  text-decoration: none !important;

  font-size: 10px !important;
  font-weight: 700 !important;
  letter-spacing: 0.14em !important;
  line-height: 1.2 !important;
  text-transform: uppercase !important;
  white-space: nowrap !important;
}

body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) .restore-item:hover,
body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) .restore-item:focus-visible {
  color: var(--sf-cart-clay, #a8745c) !important;
}

@media (max-width: 767px) {
  body.woocommerce-cart .woocommerce-notices-wrapper {
    margin-bottom: 18px !important;
  }

  body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-message:not(:has(.wc-forward)),
  body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) {
    grid-template-columns: 22px minmax(0, 1fr) !important;
    column-gap: 10px !important;
    row-gap: 8px !important;
    padding: 13px 14px !important;
    font-size: 11px !important;
    line-height: 1.55 !important;
  }

  body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward))::before {
    width: 22px !important;
    height: 22px !important;
    font-size: 10px !important;
  }

  body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) .restore-item {
    grid-column: 2 !important;
    justify-self: start !important;
    font-size: 9px !important;
  }
}
/* === Step 4E Cart Notice Toast END === */
```

Do not retain any part of the old block and do not append this code to the file end.

## Predicted exact artifact

With the exact replacement above:

```text
Size: 697,513 bytes
Logical lines: 23,384
SHA256: 2120e5639f780a2eb370b5776fb78dcc470f3049d5a921badf2aef1d23261015
Braces: 3,633 / 3,633
Comments: 339 / 339
CSS parser errors: 0
Line endings: LF
Final newline: present
```

The comment count decreases by two because the replacement intentionally consolidates explanatory comments; this is not lost styling or source scope.

## Expected runtime result

```text
- notice becomes a full-width editorial status row, not a floating pill
- no large rounded capsule and no drop shadow
- thin clay left rule provides restrained state emphasis
- icon remains small and secondary
- Undo becomes an underlined text action rather than a black pill
- mobile stacks Undo beneath the message without horizontal crowding
- native WooCommerce Restore / Undo behavior remains unchanged
```

## Pre-deploy gate

```text
1. edit spatial-flow(26).css only
2. save under a new upload name
3. do not deploy yet
4. upload for exact full-file validation
```
