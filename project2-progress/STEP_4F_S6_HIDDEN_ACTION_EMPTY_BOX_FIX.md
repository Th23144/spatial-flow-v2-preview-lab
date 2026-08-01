# Project 2 · S6 Hidden Action Empty-Box Fix

Date: 2026-08-01  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. User-reported issue

During S6 visual review, the user found an empty bordered square beside the real primary action on nearly every S6 state except the cancelled state.

Observed example:

```text
Try another transaction hash → [empty bordered box]
```

The empty box had no label or function.

## 2. Root cause

The S6 state DOM always creates two reusable action elements:

```text
button[data-state-primary]
a[data-state-secondary]
```

When a state does not use one of those actions, JavaScript correctly sets the unused element's `hidden` property.

However, the S6 stylesheet applied:

```css
.crypto-payment-state__actions button,
.crypto-payment-state__actions a {
  display: inline-flex;
}
```

That author rule overrode the browser's default `[hidden] { display: none; }` behavior.

Result:

```text
unused secondary action
→ hidden attribute present
→ CSS forces display:inline-flex
→ empty bordered control remains visible
```

The cancelled state did not expose the defect because it intentionally supplies both a primary and a secondary action.

## 3. Fix

Added an explicit S6-scoped hidden rule:

```css
.crypto-payment-state__actions[hidden],
.crypto-payment-state__actions button[hidden],
.crypto-payment-state__actions a[hidden] {
  display: none;
}
```

The same rule is repeated inside the mobile media block after the mobile display declarations so the mobile grid rules cannot re-expose hidden controls.

## 4. Scope

Changed only:

```text
preview/spatial-flow-checkout-crypto-states-v1.css
```

Unchanged:

```text
S6 JavaScript state definitions
S5 HTML structure
S5 base CSS/JS
Step 03
Step 04
Crypto plugin
live WordPress/WooCommerce
Project 2 version 2.7.8
```

## 5. Commit

```text
33dded69bdf5737127bbee7511a985c2125c311d
```

## 6. Expected result

```text
States with only one real action:
show only that action

States with no actions:
show no empty controls or empty action container

Cancelled state:
continues to show Contact support + Return to the shop
```

## 7. Current status

```text
Empty action-box defect: fixed
S6 overall state family: still awaiting final user acceptance
S7: not started
Checkout: Not done
```
