# Step 4E-B0 · Cart Manual Exact-Range Execution Map

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-B0 · Manual exact-range execution map：Complete.
Code changes：None.
User local files changed：No.
Whole-file candidate：Withdrawn / Do not apply.
Next executable step：Step 4E-B1-A · PHP settings only.
Cart page status：Not done.
```

## 1. Confirmed unchanged local baselines

```text
functions.php
Version: 2.7.7
Size: 547,386 bytes
Lines: 10,162
SHA256: 4a0e6d7ee048398afb782c576626543f0ee67d44f37523ec3db9bd75c7ce12b2
PHP syntax: Passed

assets/css/spatial-flow.css
Uploaded name: spatial-flow(2).css
Size: 767,069 bytes
Lines: 25,742
SHA256: a8db33e2cd3e7886a12a455383fe6769cbd262e7e6d6fac8003aa46fe641a10d
CSS parser errors: 0

assets/js/spatial-flow.js
Size: 70,828 bytes
Lines: 1,995
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
JavaScript syntax: Passed
```

If the local files no longer match these baselines before `B1-A`, the newest files must be supplied and the map revalidated.

## 2. Non-negotiable execution method

```text
- No ZIP or complete replacement file.
- No blind overwrite of functions.php or spatial-flow.css.
- One named manual operation at a time.
- Every operation uses exact START/END anchors.
- Every operation has an expected delta and an independent rollback.
- The edited file is re-read or its exact metrics are checked before continuing.
- PHP and CSS work are never combined into one manual operation.
- Large CSS deletion and new CSS insertion are separate phases.
- No WooCommerce Cart template override.
- No Cart-specific JavaScript unless a real native interaction defect is proved.
```

## 3. PHP execution map

Current Cart PHP block:

```text
START anchor:
/* === Cart Page Visual 2-D: Product Meta + Coupon Alignment + Product-Like Complete Cards START ===

Current source line range:
approximately 2,592–3,320

END anchor:
/* === Cart Page Visual 2-D: Product Meta + Coupon Alignment + Product-Like Complete Cards END === */
```

Line numbers are baseline references only. After the first edit, anchors—not old line numbers—become authoritative.

### Step 4E-B1-A · Backend settings only

Purpose:

```text
Add only the editable Cart heading/count/summary settings and the fourth fallback product selector.
No frontend output changes.
```

Exact anchor groups:

```text
A1 defaults insertion
After:
'sf_cart_continue_url'     => function_exists( 'spatial_flow_shop_url' ) ? spatial_flow_shop_url() : home_url( '/shop/' ),
Before:
'sf_cart_service_enabled'  => '1',

A2 fourth fallback default
After:
'sf_cart_next_default_product_3' => '',
Before the dead legacy sample defaults beginning with:
'sf_cart_next_1_icon'      => 'jewelry',

A3 Customizer field insertion
After:
'sf_cart_continue_url'    => [ __( 'Continue shopping button link', 'spatial-flow' ), 'url' ],
Before:
'sf_cart_service_enabled' => [ __( 'Show service cards', 'spatial-flow' ), 'checkbox' ],

A4 fourth product selector loop
Change only the fallback-product loop immediately after the four trust-card fields:
for ( $i = 1; $i <= 3; $i++ )
Do not change the separate three-service-card loop.
```

Must remain unchanged:

```text
- version 2.7.7
- all frontend hooks
- old intro output
- service cards
- recommendations currently showing 3 products
- SAFE5 Checkout
```

Validation gate:

```text
PHP syntax, size, lines, Customizer load, Cart unchanged, SAFE5 Checkout unchanged.
```

### Step 4E-B1-B · New heading/count renderer, not hooked

Purpose:

```text
Add the live WooCommerce Cart count formatter and the new heading/count renderer beside the legacy intro code.
Do not display it yet.
```

Insertion boundary:

```text
After:
add_action( 'woocommerce_admin_process_product_object', 'spatial_flow_cart_visual_2_save_product_meta_field' );

Before:
if ( ! function_exists( 'spatial_flow_cart_visual_2_intro' ) ) {
```

Required characteristics:

```text
- new function names must not collide with existing functions
- live count source: WC()->cart->get_cart_contents_count()
- singular/plural formats use the B1-A settings
- old spatial_flow_cart_visual_2_intro() remains unchanged
- no add_action for the new renderer in this step
```

Validation gate:

```text
PHP syntax; no duplicate frontend heading; current Cart appearance unchanged.
```

### Step 4E-B1-C · Intro-to-heading hook switch

Replace exactly one hook line:

```text
Old:
add_action( 'woocommerce_before_cart', 'spatial_flow_cart_visual_2_intro', 6 );

New direction:
remove the old intro hook and hook only the already-validated new heading/count renderer at the same controlled Cart position.
```

Do not delete the legacy intro function or its saved Customizer settings.

Immediate browser gate:

```text
- one heading only
- live count matches Cart quantities
- no duplicate intro card
- Header BAG count unchanged
- Cart operations unchanged
```

### Step 4E-B1-D · Continue Shopping move

Insertion boundary:

```text
After:
add_action( 'woocommerce_after_cart_totals', 'spatial_flow_cart_visual_2_summary_trust', 20 );

Before:
if ( ! function_exists( 'spatial_flow_cart_visual_3_cart_product_ids' ) ) {
```

Purpose:

```text
Add a dedicated renderer using existing sf_cart_continue_text / sf_cart_continue_url values and hook it after the native Proceed to Checkout button.
```

Hard boundary:

```text
Do not replace, intercept, or hardcode the native WooCommerce checkout button or checkout URL.
```

Immediate browser/link gate required.

### Step 4E-B1-E · Duplicate service-row unhook

Replace exactly one line:

```text
add_action( 'woocommerce_after_cart_table', 'spatial_flow_cart_visual_2_service_cards', 20 );
```

with a rollback comment only.

Preserve:

```text
- spatial_flow_cart_visual_2_service_cards() function
- sf_cart_service_* settings and saved values
- summary trust hook and sf_cart_trust_* values
```

Immediate mobile check: totals must move closer to Cart actions without losing any operational controls.

### Step 4E-B1-F · Editable summary heading

Insertion location:

```text
After the validated Continue Shopping function/hook.
Before spatial_flow_cart_visual_3_cart_product_ids().
```

Scope:

```text
Change only WooCommerce's “Cart totals” text on the Cart page, using sf_cart_summary_title.
No global WooCommerce translation change.
No Checkout/Thank You effect.
```

### Step 4E-B1-G · Recommendation cleanup and fourth real product

Exact existing areas:

```text
G1 dead sample defaults
Current baseline lines approximately 2,645–2,670.
START:
'sf_cart_next_1_icon'      => 'jewelry',
END:
'sf_cart_next_3_url'       => function_exists( 'spatial_flow_shop_url' ) ? spatial_flow_shop_url() : home_url( '/shop/' ),
Baseline block: 26 lines / 2,083 bytes.

G2 product label helper
Function:
spatial_flow_cart_visual_3_product_label()
Current baseline approximately 3,143–3,159.

G3 product description helper
Function:
spatial_flow_cart_visual_3_product_description()
Current baseline approximately 3,161–3,179.

G4 recommendation selector
Function:
spatial_flow_cart_visual_3_recommended_products()
Current default limit: 3.
Fallback selector loop currently ends at 3.

G5 recommendation renderer call
Current:
spatial_flow_cart_visual_3_recommended_products( 3 )
```

Required behavior:

```text
- remove only dead manual sample defaults
- use 4 real products
- use fourth backend fallback setting
- keep priority: cross-sells → same category → backend-selected → latest products
- omit generic “Recommended piece” when no real category exists
- omit generated collection description when no product-authored description exists
- preserve real image, title, price, URL, stock, visibility and Cart exclusion checks
```

### Step 4E-B1-H · Cart-only product-context fallback safety

Cross-page risk boundary:

```text
spatial_flow_cart_visual_2_product_meta_text()
spatial_flow_cart_visual_2_cart_item_name()
```

Exact existing fallback:

```text
$parts = [ __( 'Crystal piece', 'spatial-flow' ), __( 'Modern spatial living', 'spatial-flow' ) ];
```

Required behavior:

```text
- Cart: return no fabricated context when no real source exists
- SAFE5 Checkout: retain its prior fallback until the Checkout page is separately handled and regressed
- preserve _sf_cart_item_meta, categories, selected variations and real attributes
```

This step must be followed by a SAFE5 Checkout product-row check.

### Step 4E-B1-I · Version bump, deferred

Exact current line:

```php
define( 'SPATIAL_FLOW_CHILD_VERSION', '2.7.7' );
```

Do not change it during B1-A through B1-H.

Change to `2.7.8` only after the controlled Cart CSS insertion is ready, so the version change is tied to an actual frontend asset change rather than backend-only preparation.

## 4. CSS deletion map

Authoritative file:

```text
assets/css/spatial-flow.css
Baseline: 767,069 bytes / 25,742 lines
```

Preserve completely:

```text
/* === Step 4E Cart Notice Toast START ===
...
/* === Step 4E Cart Notice Toast END === */

Baseline notice range: approximately 25,348–25,494
147 lines / 4,876 bytes
```

The old Cart stack is split into five deletion-only batches. Each batch includes the blank separator immediately after its END marker so the later insertion point remains clean.

### Step 4E-B2-A1 · Remove legacy Cart base layers

```text
START:
/* === Cart Visual 1 START ===

END:
/* === Cart Visual 1.4.1 ACTION BUTTON OVERLAP FIX END === */
plus the immediately following blank line.

Baseline range: 3,628–4,840
Expected deletion: 1,213 lines / 35,694 bytes
```

### Step 4E-B2-A2 · Remove Cart Visual 2-D base layers

```text
START:
/* === Cart Visual 2-D PRODUCT META + COUPON ALIGNMENT + PRODUCT-LIKE COMPLETE CARDS START ===

END:
/* === Cart Visual 2-D.2 HOTFIX — COUPON BAR + COMPLETE CONTAINER END === */
plus the immediately following blank line.

Baseline range: 4,841–5,944
Expected deletion: 1,104 lines / 33,675 bytes
```

### Step 4E-B2-A3 · Remove corrective Cart hotfix layers

```text
START:
/* === Cart Visual 2-D.4 CORRECTIVE HOTFIX — CENTER GROUP + COUPON FULL WIDTH START ===

END:
/* === Cart Visual 2-D.8 STABLE COUPON ROLLBACK + OVAL SUPPRESS END === */
plus the two immediately following blank lines.

Baseline range: 5,945–6,968
Expected deletion: 1,024 lines / 34,034 bytes
```

### Step 4E-B2-A4 · Remove mobile rhythm layer

```text
START:
/* === Cart Visual 2-E MOBILE COMPACT RHYTHM REFINEMENT START ===

END:
/* === Cart Visual 2-E MOBILE COMPACT RHYTHM REFINEMENT END === */
plus the immediately following blank line.

Baseline range: 6,969–7,363
Expected deletion: 395 lines / 11,605 bytes
```

### Step 4E-B2-A5 · Remove old recommendation visual layer

```text
START:
/* === Cart Visual 3 REAL WOOCOMMERCE RECOMMENDATIONS START ===

END:
/* === Cart Visual 3 REAL WOOCOMMERCE RECOMMENDATIONS END === */
plus the immediately following blank line.

Baseline range: 7,364–7,424
Expected deletion: 61 lines / 2,084 bytes
```

Expected state after all five deletion batches:

```text
Size: 649,977 bytes
Lines: 21,945
Total removed: 117,092 bytes / 3,797 lines
```

The exact hash will be recorded only after the user performs the deletions and returns the intermediate file.

After every A-batch:

```text
- braces balanced
- comments balanced
- CSS parser passes
- Header/Footer/Shop/Single Product/SAFE5 Checkout quick regression
```

Cart may become progressively less styled during deletion-only work. That is expected; functional Cart controls must remain usable.

## 5. CSS insertion map

Fixed insertion boundary after deletion:

```text
After:
/* === Single Product Visual 1 END === */

Before:
/* === Checkout Visual Final IMPLEMENTATION START ===
```

The target CSS will not be pasted as one 1,000-line operation. It will be divided into three separately validated named blocks:

```text
Step 4E-B2-B1 · Cart core
- page frame
- heading/count
- native form/table item rows
- quantity/remove/subtotal
- Coupon and Update Cart
- totals/checkout/Continue Shopping
- summary trust

Step 4E-B2-B2 · Recommendation and empty-Cart surfaces
- four real-product editorial grid
- product card states
- empty Cart and Return to Shop

Step 4E-B2-B3 · Responsive rules
- <=1180px
- <=960px one-column transition
- <=767px compact mobile anatomy
- no horizontal overflow
```

Every inserted block must have its own START/END markers, exact expected delta, parse check and rollback text. The exact CSS content and metrics are supplied only when that substep begins.

## 6. Required execution order

```text
B1-A settings only
→ validate
B1-B unhooked renderer
→ validate
B1-C hook switch
→ browser check
B1-D Continue Shopping
→ browser/link check
B1-E service-row unhook
→ mobile check
B1-F summary heading
→ browser check
B1-G recommendations
→ product/link/stock checks
B1-H Cart-only product context
→ Cart + SAFE5 Checkout check

B2-A1 through B2-A5 deletion-only batches
→ validate after every batch
B2-B1 core CSS
→ validate
B2-B2 recommendation/empty CSS
→ validate
B2-B3 responsive CSS
→ desktop/mobile first-screen check
B1-I version bump
→ hard refresh
B2-C exact visual refinements only
B3 full functional and cross-page acceptance
```

## 7. Rollback model

```text
- B1-A/B1-B/B1-D/B1-F: delete only the inserted block.
- B1-C/B1-E/B1-I: restore only the one replaced line.
- B1-G/B1-H: restore only the exact helper/default ranges changed.
- B2-A1–A5: restore only that deleted named CSS batch.
- B2-B1–B3: remove only that inserted named block.
```

Restoring the entire file is an emergency fallback, not the normal rollback method.

## 8. B0 conclusion

```text
B0 is complete.
No theme code has changed.
The withdrawn ZIP/full-file candidate remains prohibited.
The first executable manual operation is B1-A only.
Do not begin B1-B or any CSS work until B1-A is applied and revalidated.
```
