# Step 4E-A3 · Cart PHP Source Ownership & Backend-Editability Audit

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`  
Local source reviewed: `functions.php`

## Status

```text
Step 4E-A3 · PHP source ownership / hook audit：Passed.
Step 4E-A · Current-state audit：Complete.
Real Cart implementation changes：None.
Next implementation step：Step 4E-B · Controlled Cart PHP/CSS rebase.
```

## 1. Reviewed local PHP baseline

```text
File: functions.php
SPATIAL_FLOW_CHILD_VERSION: 2.7.7
Size: 547,386 bytes
Lines: 10,162
SHA256: 4a0e6d7ee048398afb782c576626543f0ee67d44f37523ec3db9bd75c7ce12b2
Opening braces: 1,182
Closing braces: 1,182
PHP syntax check: Passed
```

The Cart-specific implementation is contained directly in `functions.php`; no Cart-specific include or template part is called from the Cart block.

Primary Cart PHP range in the reviewed file:

```text
Approximately lines 2,592–3,320
Marker:
Cart Page Visual 2-D: Product Meta + Coupon Alignment + Product-Like Complete Cards
```

## 2. Final ownership determination

The real Cart is built from:

```text
WooCommerce native Cart templates
+ child-theme global/page CSS
+ functions.php hooks/filters
+ Customizer theme_mod values
+ WooCommerce product/category/attribute data
```

Confirmed:

```text
- No child-theme override of the main WooCommerce Cart templates.
- No Cart-specific PHP template part is included from functions.php.
- Cart quantities, remove actions, coupons, totals, shipping, notices, checkout URL, and form/nonces remain native WooCommerce behavior.
- The non-native Cart blocks visible in the screenshots are generated directly by functions.php hooks.
```

Default implementation rule:

```text
Do not create cart.php, cart-totals.php, cross-sells.php, or another Cart template override.
Use controlled hooks/filters and CSS unless a later verified structural blocker proves otherwise.
```

## 3. Cart hook/filter map

| Hook/filter | Function | Priority | Current output / ownership |
|---|---|---:|---|
| `woocommerce_cart_item_name` | `spatial_flow_cart_visual_2_cart_item_name` | 20 | Adds `.sf-cart-item-meta` below product names on Cart and Checkout. |
| `woocommerce_before_cart` | `spatial_flow_cart_visual_2_intro` | 6 | Outputs `.sf-cart-pro-intro` with intro copy and Continue Shopping link. |
| `woocommerce_after_cart_table` | `spatial_flow_cart_visual_2_service_cards` | 20 | Outputs three `.sf-cart-service-card` items below the Cart form. |
| `woocommerce_after_cart_totals` | `spatial_flow_cart_visual_2_summary_trust` | 20 | Outputs four summary trust items plus payment note. |
| `woocommerce_after_cart` | `spatial_flow_cart_visual_2_next_steps` | 20 | Outputs the real-product recommendation section. |
| `woocommerce_product_options_general_product_data` | `spatial_flow_cart_visual_2_product_meta_field` | default | Adds product-level `_sf_cart_item_meta` editor field. |
| `woocommerce_admin_process_product_object` | `spatial_flow_cart_visual_2_save_product_meta_field` | default | Saves product-level Cart subtitle/context. |

No Cart-specific JavaScript handler is registered in `functions.php`.

## 4. Backend-editability ownership map

### 4.1 Intro / Continue Shopping

Current source:

```text
Customizer section: Spatial Flow Cart Page
sf_cart_intro_enabled
sf_cart_intro_kicker
sf_cart_intro_text
sf_cart_continue_text
sf_cart_continue_url
```

Result:

```text
Backend-editable：Yes.
URL fallback：Dynamic Shop URL through spatial_flow_shop_url().
Current visual issue：The rounded intro card is not part of the static target and adds excess desktop/mobile height.
```

### 4.2 Service cards below Cart items

Current source:

```text
sf_cart_service_enabled

sf_cart_service_1_icon
sf_cart_service_1_title
sf_cart_service_1_text

sf_cart_service_2_icon
sf_cart_service_2_title
sf_cart_service_2_text

sf_cart_service_3_icon
sf_cart_service_3_title
sf_cart_service_3_text
```

Result:

```text
Backend-editable：Yes.
Current visual issue：Duplicates the trust/reassurance content already shown beside Cart totals.
Static target：One restrained trust set in the order-summary area, not two separate groups.
```

### 4.3 Summary trust content

Current source:

```text
sf_cart_trust_enabled

sf_cart_trust_1_icon/title/text
sf_cart_trust_2_icon/title/text
sf_cart_trust_3_icon/title/text
sf_cart_trust_4_icon/title/text
sf_cart_payment_note
```

Result:

```text
Backend-editable：Yes.
Current position：After native Cart totals.
Static target direction：Retain one compact, summary-adjacent trust set.
Business claims must remain editable and must not be replaced with the static sample's unverified claims.
```

### 4.4 Product subtitle / context line

Current source priority:

```text
1. Variation-level _sf_cart_item_meta
2. Parent-product _sf_cart_item_meta
3. Real product category
4. Selected variation values
5. Real pa_purpose / pa_color / pa_five-elements-energy terms
6. Generic hardcoded fallback
```

Product admin field:

```text
WooCommerce Product data → General
Cart subtitle / product context
Meta key: _sf_cart_item_meta
```

Result:

```text
Per-product backend editability：Yes.
Real taxonomy/variation fallback：Dynamic.
Cross-page dependency：The same filter also runs on SAFE5 Checkout.
```

Risk found:

```text
When no real product/category/attribute source exists, the current helper fabricates:
“Crystal piece · Modern spatial living”
```

Handling rule:

```text
Do not silently preserve or expand fabricated product context in the final Cart.
Because the same filter also affects Checkout, any cleanup must be scoped so the Cart visual rebase does not accidentally change SAFE5 Checkout behavior.
```

### 4.5 Recommendations / Complete Your Space

Editable section copy:

```text
sf_cart_next_enabled
sf_cart_next_kicker
sf_cart_next_title
sf_cart_next_text
sf_cart_next_view_text
sf_cart_next_view_url
sf_cart_next_cta
```

Editable fallback products:

```text
sf_cart_next_default_product_1
sf_cart_next_default_product_2
sf_cart_next_default_product_3
```

Current real-product selection priority:

```text
1. WooCommerce cross-sells from Cart products
2. Products from the same product categories
3. Backend-selected fallback products
4. Latest publishable products
```

Product card data is real and dynamic:

```text
- image：WooCommerce product image
- category label：product_cat
- title：WooCommerce product name
- description：short description, then long description
- price：WooCommerce price HTML
- URL：product permalink
- visibility/purchasability/stock checks：enforced
- products already in Cart：excluded
```

Result:

```text
Backend-editable section copy：Yes.
Backend-selectable fallback products：Yes.
Product data：Dynamic and real.
Current layout：3 products.
Static target：4 editorial product cards.
```

## 5. Hardcoded and legacy PHP findings

### 5.1 Dead legacy sample recommendation defaults

`spatial_flow_cart_visual_2_defaults()` still contains unused manual-card defaults such as:

```text
Rose Quartz Point Necklace
Amethyst Placement Stone
Crystal Care Pouch
$39.00
$28.00
$12.00
manual card images/icons/eyebrows/URLs
```

Audit result:

```text
- These values are not registered as current Customizer controls.
- They are not read by the current real-product renderer.
- They do not currently appear as production Cart products.
- They are dead legacy defaults and should be removed in a controlled PHP cleanup so they cannot be mistaken for valid production data later.
```

### 5.2 Recommendation label fallback

Current generic fallback:

```text
Recommended piece
```

This is not product-specific backend content. The preferred final behavior is:

```text
Use the real product category when available.
Otherwise omit the eyebrow/label rather than invent product context.
```

### 5.3 Recommendation description fallback

Current generic fallback:

```text
A considered piece from the %s collection.
```

This is generated copy, not product-authored content. The preferred final behavior is:

```text
Use WooCommerce short description, then long description.
When both are empty, omit the description rather than generate editorial product claims.
```

### 5.4 Recommendation CTA fallback

`sf_cart_next_cta` is backend-editable, but the renderer also contains a hardcoded `View Piece` fallback when the setting is empty.

Handling:

```text
Keep a safe translated fallback only for missing configuration.
Do not hardcode product identity, price, URL, or claim text.
```

## 6. Cart heading, item count, and totals-heading ownership

### Current state

```text
Page heading “Cart” is not generated by the reviewed Cart hook block.
No dynamic Cart body item-count output exists in functions.php.
No Cart-specific filter currently changes “Cart totals” to “Order summary”.
```

Likely ownership:

```text
- Page heading：WordPress Cart page title / Astra page-title output
- “Cart totals”：WooCommerce native template translation
- Header BAG count：Header template or another shared header source, not this Cart block
```

The transient `BAG (4)` state already corrected to `BAG (3)` after refresh and is not a current implementation blocker.

## 7. Cross-page risk boundary

The following Cart helper is shared with Checkout:

```text
spatial_flow_cart_visual_2_cart_item_name()
```

It runs when either:

```text
is_cart()
or
is_checkout() and not order-received
```

Therefore:

```text
- Do not remove or broadly rewrite the filter during the Cart visual pass.
- Do not alter SAFE5 Checkout product-row structure unintentionally.
- Any Cart-only product-meta cleanup must be explicitly context-scoped and followed by Checkout regression.
```

The icon helper is also reused by historical Checkout visual code. Removing it wholesale would create cross-page regressions.

## 8. Final controlled replacement plan

### Step 4E-B1 · PHP controlled rebase

Expected file:

```text
functions.php
```

Planned scope:

```text
1. Keep all native WooCommerce Cart operations unchanged.
2. Keep the existing Customizer section and existing saved theme_mod values.
3. Replace the oversized intro-card output with target-aligned heading/count support or remove it after a new safe dynamic source is introduced.
4. Move/reuse the existing Continue Shopping setting in the native summary action area through a WooCommerce hook instead of the current top intro card.
5. Retain only one restrained trust set beside/below the order summary.
6. Remove or unhook the duplicate three-card service row from the final frontend layout while preserving rollback safety.
7. Preserve product-level _sf_cart_item_meta editing.
8. Keep Cart/Checkout shared product-name filter behavior protected; no broad Checkout change.
9. Expand recommendation support from 3 to 4 real products for the desktop target, with responsive reduction on smaller screens.
10. Remove dead manual sample-product defaults.
11. Stop generating recommendation category/description claims when no real product-authored source exists.
12. Do not add a Cart template override.
```

Backend fields that must remain usable:

```text
sf_cart_intro_*
sf_cart_continue_*
sf_cart_service_*
sf_cart_trust_*
sf_cart_payment_note
sf_cart_next_*
sf_cart_next_default_product_*
_sf_cart_item_meta
```

Fields/functions may be retired only after a controlled migration proves they are no longer used and rollback is preserved.

### Step 4E-B2 · CSS controlled rebase

Expected file:

```text
assets/css/spatial-flow.css
```

Plan:

```text
- Remove/replace the historical Cart visual stack as one controlled range.
- Do not append another late Cart patch.
- Preserve the separate dynamic WooCommerce notice treatment until specifically consolidated.
- Rebuild the Cart body around the native table/form/totals markup.
- Desktop target：open 7fr/5fr composition, editorial item rows, sticky summary.
- Mobile target：single column, no horizontal overflow, totals close to Cart actions, accessible quantity/remove/coupon/shipping/checkout controls.
- Recommendation target：light editorial four-card desktop section; responsive 2/1-column reductions.
- Preserve the accepted global Header and Footer.
```

### Step 4E-B3 · Browser and functional validation

Required tests:

```text
Desktop:
- 3 different products render correctly
- variable-product meta remains correct
- quantity increase/decrease + Update Cart
- remove item
- apply valid coupon
- invalid coupon notice
- remove coupon
- shipping destination/change address
- totals update
- Continue Shopping
- Proceed to Checkout
- recommendation product links
- sticky summary behavior
- empty Cart state

Mobile:
- no horizontal overflow
- readable/tappable remove and quantity controls
- coupon actions accessible
- totals follow items/actions logically
- shipping choices/calculator accessible
- checkout CTA accessible
- recommendation cards readable
- Header BAG count synchronized

Regression:
- Shop
- Single Product
- Header/Footer
- SAFE5 Checkout, especially product-name/meta output and notices
```

## 9. Step conclusion

```text
Step 4E-A is complete.
The implementation file set is currently expected to be:
- functions.php
- assets/css/spatial-flow.css

assets/js/spatial-flow.js is not expected to require Cart logic changes unless browser testing proves a specific native interaction problem.
No WooCommerce Cart template override is planned.
No real Cart code was changed during 4E-A.
```
