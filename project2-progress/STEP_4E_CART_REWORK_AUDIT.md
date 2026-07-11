# Step 4E-A · Cart Desktop + Mobile 1:1 Current-State Audit

Last updated: 2026-07-10
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-A · In progress.
Step 4E-A1 · Static reference decomposition：Passed.
Step 4E-A2 · Current screenshots + CSS/JS baseline audit：Passed.
Step 4E-A3 · PHP source ownership / hook audit：Pending current functions.php.
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

## Step 4E-A2 · Current real Cart evidence

Status:

```text
Current screenshots + CSS/JS baseline audit：Passed.
PHP source ownership / backend-editability audit：Pending.
```

### 1. Evidence received

```text
1. Desktop Cart first-screen screenshot.
2. Desktop Cart full-page screenshot.
3. Mobile Cart first-screen screenshot.
4. Mobile Cart full-page screenshot.
5. Current local assets/css/spatial-flow.css.
6. Current local assets/js/spatial-flow.js.
7. No Cart-specific PHP/template file supplied because the user is not aware of a Cart override.
```

### 2. Current local file baseline

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(2).css
Size: 767,069 bytes
Lines: 25,742
SHA256: a8db33e2cd3e7886a12a455383fe6769cbd262e7e6d6fac8003aa46fe641a10d
Opening braces: 3,917
Closing braces: 3,917
Comment openings: 397
Comment closings: 397
CSS parser errors: 0

assets/js/spatial-flow.js
Size: 70,828 bytes
Lines: 1,995
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
Opening braces: 378
Closing braces: 378
JavaScript syntax check: Passed
```

### 3. Cart template-override determination

Current evidence strongly indicates:

```text
The real Cart page is using native WooCommerce Cart markup plus theme CSS and PHP hook output.
There is currently no evidence of a child-theme Cart template override.
```

Grounding:

```text
- The CSS contains the explicit historical comment:
  “WooCommerce cart / checkout structural polish without adding template overrides”.
- Cart selectors target native WooCommerce markup such as:
  form.woocommerce-cart-form
  table.shop_table.cart
  .cart-collaterals
  .cart_totals
  td.actions .coupon
- The screenshots show the native WooCommerce Cart table/action/totals structure.
- The uploaded JS contains no Cart-page quantity, remove, coupon, update-cart, totals, or shipping handler.
- JS only contains Add-to-cart feedback elsewhere and leaves Cart operations to WooCommerce.
- Repository search found no tracked `woocommerce/cart/cart.php`, `cart-totals.php`, or `cross-sells.php` implementation file.
```

Important limitation:

```text
Absence cannot be proven from CSS/JS/screenshots alone.
A definitive filesystem check is still:
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/woocommerce/cart/
```

Main Cart override files, if present, would normally include:

```text
cart.php
cart-totals.php
cross-sells.php
proceed-to-checkout-button.php
shipping-calculator.php
```

`mini-cart.php` affects the mini-cart/header surface and is not evidence that the main Cart page itself is overridden.

Current action:

```text
Do not require a Cart template PHP upload at this stage unless the local `woocommerce/cart/` folder actually exists.
```

### 4. PHP source ownership that still must be audited

The current page contains non-native Cart components/classes:

```text
.sf-cart-pro-intro
.sf-cart-service-grid
.sf-cart-summary-trust
.sf-cart-next-steps--real
.sf-cart-item-meta
```

These are not generated by CSS, and the uploaded JS does not create them. They are therefore most likely produced by:

```text
- functions.php WooCommerce hooks/filters, or
- an included Cart-specific template part called from functions.php.
```

Therefore the next required PHP baseline is:

```text
Current local functions.php
```

Any template part referenced by the Cart-related functions must then be supplied only if the code actually includes one.

### 5. CSS architecture finding

The current stylesheet contains a large layered Cart patch history rather than one controlled final Cart visual system.

Observed Cart-specific ranges include:

```text
Cart Visual 1
Cart Visual 1.1 FIX
Cart Visual 1.2 FIX
Cart Visual 1.3 DESKTOP STABILITY FIX
Cart Visual 1.4 FINAL WIDE TWO-COLUMN FIX
Cart Visual 1.4.1 ACTION BUTTON OVERLAP FIX
Cart Visual 2-D
Cart Visual 2-D.1
Cart Visual 2-D.2
Cart Visual 2-D.4
Cart Visual 2-D.5
Cart Visual 2-D.6
Cart Visual 2-D.8
Cart Visual 2-E
Cart Visual 3
Step 4E Cart Notice Toast
```

The main historical Cart visual stack occupies approximately local CSS lines 3,628–7,423, with an additional Cart notice block near the end of the file.

Conclusion:

```text
Do not append another Cart polish block.
The implementation phase must use a controlled Cart CSS rebase/consolidation after the PHP source audit.
Keep the later Cart notice behavior separate unless audit proves it belongs in the same controlled block.
```

### 6. Current desktop mismatch matrix

```text
Area                         Current real Cart                                  Static target / required direction
--------------------------   -------------------------------------------------  -------------------------------------------------
Global Header/Footer         Accepted shared shell renders normally             Preserve; do not rebuild
Breadcrumb                   No Cart breadcrumb visible                         Reference includes quiet breadcrumb
Page heading                 “Cart”, smaller and separated by large whitespace  “Your bag.” editorial heading + dynamic count line
Item count                   No body-level count line                            Dynamic current cart count below heading
Intro                        Rounded “Review your order” card                    Not in reference; currently adds vertical load
Main layout                  Rounded table card + rounded totals card            Open 7fr/5fr editorial composition
Item rows                    Compact Woo table rows                              Larger open rows with quiet separators
Product image                Small thumbnail                                    Approx. 120px square editorial image
Product details              Title + category/context line                      Title/SKU/variation where real data exists
Price presentation           Separate Price and Subtotal columns                Simpler right-side amount hierarchy
Quantity                     Native control works visually                      Preserve native behavior; restyle only
Remove                       Small circular icon at far left                     Must remain clear; reference uses editorial action
Coupon/update                Functional operation bar below table                Preserve; integrate cleanly without overlap
Order summary title          “Cart Totals”                                      “Order summary” visual direction if dynamically safe
Summary behavior             Card visible; sticky ownership not established     Sticky desktop, normal-flow tablet/mobile
Shipping                     Dynamic flat rate + destination shown               Preserve all native rows and calculation
Trust/service content        3 cards below form + 4 cards below totals           Duplicate/noisy; reference has one restrained set
Recommendations              Dark rounded 3-card custom section                  Open editorial recommendation section
Footer                       Accepted Footer renders normally                    Preserve
```

### 7. Current mobile mismatch matrix

```text
Area                         Current real Cart                                  Required direction
--------------------------   -------------------------------------------------  -------------------------------------------------
Header                       Accepted mobile Header renders normally             Preserve
First-screen density         Title + intro + notice consume large vertical area  Reduce nonessential vertical load
Cart notice                  “Cart updated” remains accessible                   Preserve dynamic notice; do not permanently hide
Item cards                   Large stacked rounded cards                         More compact editorial rows/cards
Repeated labels              PRICE / QUANTITY / SUBTOTAL repeated per item       Retain clarity with less vertical repetition
Product image/title          Readable                                            Preserve and improve hierarchy
Remove control               Visible and tappable                               Preserve
Quantity                     Visible and tappable                               Preserve native behavior
Coupon                       Full-width mobile stack                             Preserve; visually integrate as Cart action area
Service cards                Three cards before totals                           Adds long delay before totals; likely consolidate
Cart totals                  Appears after items/actions/service cards            Keep logical order and reduce distance from items
Checkout CTA                 Accessible                                         Preserve
Recommendations              One-column dark cards; very tall                    Use lighter/closer reference hierarchy
Horizontal overflow          None observed                                      Keep zero overflow
Footer                       Accepted accordion Footer renders normally          Preserve
```

### 8. Functional observations requiring follow-up

#### Header Bag count

The screenshots show:

```text
Header: BAG (4)
Visible Cart rows: 3
Visible quantities: 1 + 1 + 1
Subtotal: $96.00 = $48.00 + $36.00 + $12.00
```

This is a likely Cart-count synchronization mismatch, but it is not yet confirmed as a persistent bug.

Required verification:

```text
1. Hard refresh the Cart page.
2. Confirm whether BAG remains 4 or changes to 3.
3. Change one quantity and update Cart.
4. Remove one item.
5. Confirm Header Bag count, visible rows, quantity total, and Cart subtotal remain synchronized.
```

#### Cart notice state

The screenshots include a valid dynamic `Cart updated.` notice. It is not part of a clean static reference, but it must remain supported and styled because WooCommerce uses notices for real state changes and errors.

#### Shipping text

The current summary contains mixed-language shipping output. That is dynamic configuration/translation data, not something CSS should rewrite or hardcode during the visual pass.

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

## Step 4E-A3 · Next action

```text
1. Read the current local functions.php.
2. Locate every Cart hook/filter and every output source for:
   - intro copy
   - service cards
   - summary trust cards
   - product meta line
   - recommendation products/copy
   - continue-shopping URL
   - Cart heading/count
3. Determine which content is backend-editable and which is hardcoded.
4. Follow any included template-part path only when it actually exists.
5. Verify the Header Bag-count ownership.
6. Produce the final controlled replacement plan before any implementation change.
```
