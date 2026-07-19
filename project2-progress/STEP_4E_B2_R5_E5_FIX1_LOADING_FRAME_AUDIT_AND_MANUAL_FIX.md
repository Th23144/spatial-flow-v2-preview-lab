# Step 4E-B2-R5-E5-FIX1 · Loading Frame Audit + Editorial Notice Fix

Last updated: 2026-07-19  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
New runtime defect: confirmed.
Width correction itself: not the direct source.
Cart form normal-state surface: transparent / borderless in the Canonical Cart owner.
Loading-state white rectangle: native WooCommerce BlockUI overlay, currently unowned by Cart CSS.
R5-E5 notice artifact spatial-flow(28).css: visually rejected.
Current source baseline for FIX1: spatial-flow(26).css.
Latest edited artifact spatial-flow(30).css: failed exact validation.
Reason: Part A is correct, but Part B still contains the rejected spatial-flow(28).css notice block.
Cart page status: Not done.
```

## User evidence

The user supplied two desktop screenshots:

```text
1. normal Cart state
2. quantity-update loading state
```

The highlighted left Cart region reads like an invisible picture frame in the normal composition and becomes an explicit pale rectangular card during loading. The product row then reads like a sticker placed inside that frame.

## Exact source diagnosis

The Canonical Cart owner already resets the real Cart form to:

```css
body.woocommerce-cart form.woocommerce-cart-form {
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  border-radius: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
}
```

Therefore the strict-width correction did not introduce a form border, card background, radius, padding or shadow.

The current CSS has no dedicated ownership for:

```text
.blockUI
.blockOverlay
```

During quantity update WooCommerce injects a BlockUI overlay over the complete rectangular bounds of the Cart form and Order Summary. Its pale/white overlay makes the otherwise invisible form rectangle visible. The wider 7fr column makes this native overlay footprint more noticeable, but the width rule is not the direct visual defect.

## FIX1 scope

Start from the last accepted Cart visual baseline:

```text
spatial-flow(26).css
Size: 697,699 bytes
Logical lines: 23,389
SHA256: 1699ee8bfc66ab2dd4c9229b04f61be8ec92386493ac33665275bc9d91638e66
```

Modify only `assets/css/spatial-flow.css`.

Do not modify PHP, JavaScript, templates, Cart geometry, breadcrumb, recommendation logic, Header/Footer or version 2.7.8.

## Part A · Loading state surface normalization

Inside the existing Canonical Cart block, immediately before:

```css
/* === Step 4E-B2-R5-B · Canonical Cart Presentation END === */
```

insert:

```css
/* ---------- Native Cart loading state ---------- */
body.woocommerce-cart form.woocommerce-cart-form > .blockUI.blockOverlay,
body.woocommerce-cart form.woocommerce-cart-form > .blockOverlay {
  border: 0 !important;
  border-radius: 0 !important;
  background: rgba(246, 241, 235, .78) !important;
  box-shadow: none !important;
  opacity: 1 !important;
}

body.woocommerce-cart .cart-collaterals > .blockUI.blockOverlay,
body.woocommerce-cart .cart-collaterals .cart_totals > .blockUI.blockOverlay,
body.woocommerce-cart .cart-collaterals .blockOverlay {
  border: 0 !important;
  border-radius: 0 !important;
  background: rgba(237, 231, 223, .78) !important;
  box-shadow: none !important;
  opacity: 1 !important;
}

body.woocommerce-cart .blockUI.blockOverlay::before,
body.woocommerce-cart .blockOverlay::before {
  width: 18px !important;
  height: 18px !important;
  margin: -9px 0 0 -9px !important;
  border: 1px solid rgba(31, 25, 22, .18) !important;
  border-top-color: var(--sf-cart-ink) !important;
  border-radius: 999px !important;
  background: none !important;
  animation: sf-cart-loading-spin .7s linear infinite !important;
}

@keyframes sf-cart-loading-spin {
  to {
    transform: rotate(360deg);
  }
}

```

This keeps the native blocking behavior but removes the foreign white-card loading surface and replaces the heavy generic loader with a small restrained ring.

## Part B · Replace the rejected notice component

Replace the complete existing range:

```text
/* === Step 4E Cart Notice Toast START ===
...
/* === Step 4E Cart Notice Toast END === */
```

with:

```css
/* === Step 4E Cart Notice Toast START ===
   Scope: Cart page only.
   Keep WooCommerce feedback in the normal Cart document flow.
   Render update / removed-item feedback as quiet editorial text, not a component.
   Preserve the native Restore / Undo link.
*/

/* Keep hiding "added to cart" success notice on the Cart page. */
body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-message:has(.wc-forward),
body.woocommerce-cart .woocommerce-message:has(.wc-forward) {
  display: none !important;
}

body.woocommerce-cart .woocommerce-notices-wrapper {
  grid-column: 1 / -1 !important;
  width: 100% !important;
  margin: 0 0 22px !important;
}

/* Quiet inline status copy aligned to the existing Cart rhythm. */
body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-message:not(:has(.wc-forward)),
body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) {
  position: relative !important;
  inset: auto !important;
  z-index: 2 !important;

  display: flex !important;
  flex-wrap: wrap !important;
  align-items: baseline !important;
  gap: 6px 14px !important;

  width: 100% !important;
  margin: 0 !important;
  padding: 0 0 16px !important;

  border: 0 !important;
  border-bottom: 1px solid var(--sf-cart-border-soft) !important;
  border-radius: 0 !important;
  background: transparent !important;
  color: rgba(31, 25, 22, .62) !important;
  box-shadow: none !important;

  font-family: "Inter", sans-serif !important;
  font-size: 12px !important;
  font-weight: 400 !important;
  line-height: 1.55 !important;
  letter-spacing: .015em !important;
}

body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward))::before {
  display: none !important;
  content: none !important;
}

body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) .restore-item {
  display: inline-flex !important;
  align-items: baseline !important;
  min-height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;

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
  line-height: 1.35 !important;
  letter-spacing: .16em !important;
  text-transform: uppercase !important;
  white-space: nowrap !important;
}

body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) .restore-item:hover,
body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) .restore-item:focus-visible {
  color: var(--sf-cart-clay) !important;
}

/* Empty Cart keeps the same language, centered above the empty-state copy. */
body.woocommerce-cart .entry-content > .woocommerce:has(.cart-empty) .woocommerce-message:not(:has(.wc-forward)) {
  justify-content: center !important;
  text-align: center !important;
}

@media (max-width: 767px) {
  body.woocommerce-cart .woocommerce-notices-wrapper {
    margin-bottom: 18px !important;
  }

  body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-message:not(:has(.wc-forward)),
  body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) {
    display: block !important;
    padding-bottom: 14px !important;
    font-size: 11px !important;
    line-height: 1.55 !important;
  }

  body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward)) .restore-item {
    margin-top: 8px !important;
  }
}
/* === Step 4E Cart Notice Toast END === */
```

## Latest edited-file validation · spatial-flow(30).css

```text
Result: Failed / do not deploy
Size: 698,744 bytes
Logical lines: 23,422
SHA256: 46ef934107ba04789f4d89dee92afbc213fbf1bd6f2490bc87c254d63143da0c
Braces: 3,638 / 3,638
Comments: 340 / 340
CSS parser errors: 0
Line endings: LF
Final newline: present
```

Exact diagnosis:

```text
Part A loading-state block: correct and in the correct location.
Canonical Cart END marker: restored correctly.
Part B editorial notice replacement: not applied.
Current Part B is still the rejected spatial-flow(28).css status-row block with:
- full border rectangle
- clay left accent line
- circular icon
- panel background
- grid-based Undo action
```

The only required correction is to replace the complete Cart Notice Toast START-to-END range with the Part B block above. Do not touch Part A or any other CSS.

## Predicted exact artifact

Applying Part A and Part B exactly to `spatial-flow(26).css` produces:

```text
Size: 697,642 bytes
Logical lines: 23,387
SHA256: 74afc4c8f3989c37aa937581687423de3d9ae34294034e363e0cd2cee66e87f7
Braces: 3,636 / 3,636
Comments: 337 / 337
CSS parser errors: 0
Line endings: LF
Final newline: present
```

## Runtime acceptance gate

```text
1. normal Cart form remains transparent and borderless
2. quantity update no longer exposes a white rectangular card around the left form
3. Order Summary loading wash remains on its own warm summary surface
4. loaders become small restrained rings
5. notice is plain editorial text with only a thin bottom divider
6. no icon, panel, accent bar, radius, shadow or pill action
7. native Undo restores the exact item
8. live BAG / Your Bag counts remain synchronized
9. phone loading and notice states have no horizontal overflow
10. Cart width, 7fr/5fr relationship, breadcrumb, recommendations, Header and Footer remain unchanged
```

Do not deploy before exact edited-file validation.