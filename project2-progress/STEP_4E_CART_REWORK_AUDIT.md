# Step 4E-A · Cart Desktop + Mobile 1:1 Current-State Audit

Last updated: 2026-07-10
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-A · In progress.
Step 4E-A1 · Static reference decomposition：Passed.
Real Cart implementation changes：None.
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

## Step 4E-A1 · Static reference decomposition

Status:

```text
Passed.
```

The Cart reference is a visual source only. Its fixed sample products, prices, quantities, shipping state, totals, tax message, trust claims, checkout provider copy, URLs, and recommendations must not be copied into the real WooCommerce page as static production data.

### 1. Global shell boundary

The static file includes its own masthead, header, breadcrumb, and footer. In the real site:

```text
- Reuse the already accepted main-site Header and Footer.
- Preserve backend menus, Search, Wishlist/Saved, Bag count, mobile drawer, Shop mega menu, and blog branch logic.
- Do not rebuild the global shell inside the Cart template.
- Only audit Cart-specific breadcrumb/body/cross-sell output in Step 4E.
```

### 2. Desktop Cart target anatomy

Reference body structure:

```text
- Maximum content width: approximately 1440px.
- Main Cart area: open 7fr / 5fr two-column composition with approximately 80px gap.
- Page heading and item-count line span both columns.
- Left column: open editorial item rows separated by quiet borders.
- Right column: sticky order-summary panel.
- Below the main Cart: optional four-column recommendation/cross-sell section.
```

Required dynamic mapping:

```text
Reference visual                    Real source of truth
-------------------------------     -----------------------------------------------
Your bag heading                    WooCommerce/template/filter or editable source
Item count                          Current WooCommerce cart contents
Product image                       Real WooCommerce cart item thumbnail
Product title/link                  Real WooCommerce product/cart item permalink
SKU                                 WooCommerce product SKU when available
Variation data                      WooCommerce cart item variation/meta output
Quantity                            Native WooCommerce quantity input/update flow
Remove                              Native WooCommerce remove-cart-item URL/action
Item price                          WooCommerce formatted cart item price/subtotal
Subtotal                            WooCommerce cart subtotal
Shipping                            WooCommerce packages/rates/calculation output
Tax                                 WooCommerce tax configuration and calculated output
Estimated total                     WooCommerce cart total
Checkout button                     Native WooCommerce checkout URL
Continue shopping                   Existing dynamic Shop URL/source
Recommendations                     Native cross-sells or another real product query
```

### 3. Static-only elements that require an explicit decision or real source

The following reference elements must not be assumed to exist operationally:

```text
- Per-item editorial place note.
- Save for later.
- Per-unit “each” line.
- Free worldwide shipping claim.
- “30-day return, no questions” claim.
- “Secure checkout · Stripe” claim.
- “Hand-packed in Lisbon” claim.
- Fixed tax wording.
- Fixed four-product recommendation set.
```

Handling rule:

```text
- Use an existing backend-editable/dynamic source when one exists.
- Use native plugin behavior when already installed and verified.
- Add a new backend field only if the feature is genuinely required and approved.
- Otherwise omit the static-only element rather than fabricate it.
```

### 4. Coupon and Cart actions

The static reference does not visibly model the full real WooCommerce coupon/update-cart interface. The real implementation must preserve it even if the final visual placement differs from the sample HTML.

Required preservation:

```text
- Coupon input and apply action.
- Coupon success/error notices.
- Remove coupon behavior.
- Update-cart behavior, including any automatic quantity refresh already present.
- Empty-cart state.
- Stock/backorder/min-max quantity validation.
- WooCommerce nonces and form submission semantics.
```

### 5. Order-summary boundary

The visual target is an editorial summary panel, but all values and conditional rows must remain native/dynamic.

```text
- Do not replace `cart_totals` calculations with handwritten rows.
- Do not force “Free” when WooCommerce returns a paid rate or requires an address.
- Do not hide shipping calculators, rate choices, tax rows, fees, discounts, or notices only to match the screenshot.
- Do not hardcode a checkout URL.
- Sticky behavior is visual only and must degrade safely on tablet/mobile.
```

### 6. Cross-sell / recommendation boundary

The reference’s “Perhaps one more” section is visually equivalent to a cross-sell/recommendation area.

```text
- Prefer native WooCommerce cross-sells if the current Cart outputs them.
- Product image, title, price, stock state, link, and add-to-cart behavior must be real.
- Do not copy the four sample products from the static file.
- Do not implement pseudo Add-to-Bag overlays that bypass WooCommerce.
- Hide the entire section when no valid recommendation source exists.
```

### 7. Mobile target anatomy

Reference breakpoint direction:

```text
- Main Cart becomes one column below approximately 1100px.
- Summary loses sticky positioning and moves into normal document flow.
- Item rows reduce image size and eventually stack on very narrow screens.
- Recommendations reduce from four columns to three, two, then one.
```

Mobile acceptance requirements:

```text
- No horizontal overflow.
- Product names, variations, prices, quantity controls, and remove action remain readable and tappable.
- Quantity/update behavior remains functional.
- Summary appears in a logical order after Cart items.
- Coupon, notices, shipping choices/calculator, totals, and checkout CTA remain accessible.
- The page must not sacrifice operational controls merely to shorten the first screen.
```

## First current-state evidence

Required inputs:

```text
1. Desktop Cart top/first-screen screenshot.
2. Desktop Cart full-page screenshot.
3. Mobile Cart first-screen screenshot.
4. Mobile Cart full-page screenshot.
5. Current latest local `assets/css/spatial-flow.css` after the Shop pagination fix.
6. Current latest local `assets/js/spatial-flow.js` if Cart quantity/remove/coupon behavior depends on it.
7. Any Cart-specific PHP/template file only if the local theme actually overrides one.
```

Current evidence state:

```text
- Static reference source：Available and decomposed.
- Current desktop screenshots：Not yet provided in this 4E-A pass.
- Current mobile screenshots：Not yet provided in this 4E-A pass.
- Current local CSS/JS/PHP baseline：Not yet provided in this 4E-A pass.
```

## Backend-editability audit checklist

Before editing, verify whether Cart headings, helper text, trust copy, coupon labels, button labels, empty-cart copy, cross-sell heading, and continue-shopping destination currently come from:

```text
- WooCommerce native translations/templates
- theme_mod / options
- functions.php filters/hooks
- page content
- template parts
- shortcode output
- plugin output
```

Visual replacement must not convert an existing editable/dynamic source into hardcoded static HTML.

## Step 4E-A2 · Next action

```text
Collect the current Cart screenshots and current Cart-related local files.
Inspect file size, line count, marker/selector structure, template overrides, hooks, dynamic sources, and behavior ownership.
Then produce a desktop/mobile mismatch matrix against `preview/spatial-flow-cart-v1.html` before any implementation change.
```
