# Step 4E-A · Cart Desktop + Mobile 1:1 Current-State Audit

Last updated: 2026-07-10
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
In progress.
```

## Why this is next

Project 2 page sequence has completed the controlled Shop rework and the Single Product rework. The next commerce page in the visual migration sequence is Cart.

Static reference:

```text
preview/spatial-flow-cart-v1.html
```

## Goal

```text
Audit the current real WooCommerce Cart page against the Cart static reference on desktop and mobile before making any code change.
```

## Hard boundaries

```text
- Preserve native WooCommerce cart quantities, remove-item behavior, coupon behavior, totals, shipping calculation, cross-sells, notices, and checkout link.
- Preserve current Cart URL and page assignment.
- Preserve backend-editable text/configuration sources.
- Do not hardcode product names, prices, shipping methods, coupon values, totals, or checkout URLs.
- Do not change Checkout, payment, order, or email logic.
- Do not add a plugin.
- Do not default to whole-file replacement or append-only CSS.
```

## First audit inputs

Required current-state evidence:

```text
1. Desktop Cart top/first-screen screenshot.
2. Desktop Cart full-page screenshot.
3. Mobile Cart first-screen screenshot.
4. Mobile Cart full-page screenshot.
5. Current latest local `assets/css/spatial-flow.css` after the Shop pagination fix.
6. Current latest local `assets/js/spatial-flow.js` if Cart quantity/remove/coupon behavior depends on it.
7. Any Cart-specific PHP/template file only if the local theme actually overrides one.
```

## Backend-editability audit checklist

Before editing, verify whether Cart headings, helper text, trust copy, coupon labels, button labels, and empty-cart copy currently come from:

```text
- WooCommerce native translations/templates
- theme_mod / options
- functions.php filters/hooks
- page content
- template parts
- shortcode output
```

Visual replacement must not convert an existing editable/dynamic source into hardcoded static HTML.

## Next action

```text
Collect the current Cart screenshots and current Cart-related local files, then produce a mismatch list against `preview/spatial-flow-cart-v1.html` before editing.
```
