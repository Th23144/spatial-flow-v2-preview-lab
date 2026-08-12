# Step 4F · Micro 1:1 Runtime Computed Audit · 2026-08-12

Status: RUNTIME EVIDENCE CAPTURED · STRICT 1:1 NOT YET ACCEPTED

## Evidence supplied by user
Real SAFE5 Checkout Step 02 at desktop viewport 1920×991, DevTools detached so viewport width is not distorted.

## Corrections to prior diagnosis
- Font availability is NOT currently the root cause. Runtime `document.fonts.check()` returned true for:
  - Cormorant Garamond normal 300
  - Cormorant Garamond italic 300
  - Cormorant Garamond italic 400
  - Inter 400
  - JetBrains Mono 500
  - Noto Serif SC 400
- Earlier suspicion that missing Cormorant italic 300 / Noto Serif SC asset loading explained the visual mismatch is therefore withdrawn.

## Runtime facts now proven
### Core desktop typography / geometry already close to reference contract
- PAGE TITLE: width ~748.8, height ~82.33 at 1920 viewport. This is consistent with reference `84px × line-height .98` geometry.
- SHIPPING TITLE and PACKAGING TITLE: height ~46.19, consistent with reference `44px × line-height 1.05` geometry.
- SUMMARY TITLE: height ~32.55 under current live rule.
- First summary product title: 17px.
- First summary meta: 8px.
- First summary thumb: 64×64.
- Summary card width: 520px, matching the validated 1440 / 56 / 7:5 / 80 desktop geometry.
- First summary product composition width: ~390.08px; tfoot inner width: 448px.
- Packaging Custom item slot: 56×32, matching accepted item-centric v8 desktop contract.
- Packaging Custom item/package outer widths are ~726–728px inside the validated 728px left column.

### Clear runtime mismatch: Woo quantity owner still visible
Runtime quantity audit shows each native Woo `<strong class="product-quantity">× 1</strong>` computes to:
- `display: block`
- `visibility: visible`
- `font-size: 12px`
- `margin: 8px 0 0`

This conflicts with the current accepted SAFE5 source rule:
`.sf-safe5-summary-card #order_review.sf-safe5-order-review .product-quantity { display: none !important; }`

Therefore the problem is no longer merely a source-value mismatch. A competing runtime cascade / selector-scope / stylesheet-version owner is winning or the intended selector is not matching the actual post-AJAX DOM state. This must be identified before another CSS patch is issued.

### Current source-vs-reference differences still open
- Reference Step 02 intro copy is longer: `Choose how your order will be delivered and how the products inside should be packaged before payment.` Current live default remains `Select the delivery pace that fits this order. The final amount updates before payment begins.`
- Reference Shipping note is shorter than current live Woo-authority explanatory copy.
- Reference breadcrumb DOM exists; live SAFE5 template currently has no equivalent breadcrumb inside the SAFE5 checkout owner.
- Reference `.checkout-side` sticky top is 136px; live `.sf-safe5-summary` source remains 112px.
- Reference final Packaging boundary note comes from packaging-v1 and remains `margin: 0 0 22px`; current Micro Parity V1 live source uses `margin: 22px 0`, so that recent change is not strict parity and must be corrected.
- Live SAFE5 root defines the reference font variables but does not yet reproduce all reference root inheritance properties (`font-family`, `font-weight`, `line-height`, `-webkit-font-smoothing`) on the SAFE5 root. Runtime computed values need to be captured in tabular form before changing this.

## Important conclusion
Do not continue screenshot-only micro tweaks. Next diagnostic must output flat computed-style tables and matched CSS rules, especially for `.product-quantity`, so the exact runtime winner can be identified.

## Next action
Run one improved console audit that:
1. prints typography properties as table columns rather than collapsed objects;
2. reports ancestry and match state for `.product-quantity`;
3. enumerates accessible stylesheet rules containing `product-quantity` and whether each selector matches the live node;
4. prints final computed margin/padding/border/font values for Summary and Packaging against known reference values.

No production source change authorized by this record yet.
