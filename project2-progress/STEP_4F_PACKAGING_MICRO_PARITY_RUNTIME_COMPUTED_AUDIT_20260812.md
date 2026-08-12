# Step 4F · Packaging / Summary Micro Parity · Runtime Computed Audit

Date: 2026-08-12
Status: AUDITED · STRICT 1:1 NOT YET PASSED · RUNTIME ROOT CAUSES IDENTIFIED

## Evidence conditions

Real local Checkout Step 02, desktop viewport:
- viewport 1920 × 991
- DPR 1
- DevTools detached, so viewport width is not reduced by docking
- current SAFE5 step = 2
- current loaded child assets include `spatial-flow.css?ver=2.7.11` and `checkout-safe5.css?ver=2.7.11`

The user supplied complementary left/right Console screenshots covering:
1. typography / box computed table
2. critical DOM state
3. loaded SAFE5 assets
4. all readable CSS rules containing `product-quantity`
5. font availability

No further runtime diagnostic screenshot is required before the next correction batch.

## Confirmed matches

The following desktop values now match the current formal static reference contract:
- page title: Cormorant Garamond, 84px, weight 300, line-height ≈ 82.32px, letter-spacing -1.68px
- page title italic word: 84px italic 300
- Shipping title: 44px / 300 / line-height ≈ 46.2px
- Packaging title: 44px / 300 / line-height ≈ 46.2px
- Summary title: 31px / 300 / line-height ≈ 32.55px
- first Summary product title: 17px / 400 / line-height ≈ 19.55px
- first Summary product meta: 8px / 400 / letter-spacing ≈ 1.12px
- Custom slot: 56×32; JetBrains Mono 7px / 500
- Summary width: 520px

Font availability also passes at runtime:
- Cormorant normal 300 = loaded
- Cormorant italic 300 = loaded
- Cormorant italic 400 = loaded
- Inter 400 = loaded
- JetBrains Mono 500 = loaded
- Noto Serif SC 400 = loaded

Therefore missing font files are NOT the current root cause.

## Confirmed mismatch 1 — SAFE5 inherited root typography is wrong

Runtime computed `.sf-safe5-checkout`:
- font-family: Inter stack
- font-size: 14px
- font-weight: 600
- line-height: 23.1px
- font smoothing: antialiased

Formal static reference body/root contract:
- sans family
- font-weight: 400
- line-height: 1.55
- antialiased

The live `.sf-safe5-checkout` owner currently defines variables and color but does not explicitly establish the reference `font-family / font-weight / line-height / font-smoothing` inheritance baseline.

This causes several children which intentionally inherit weight to become 600 instead of the reference 400. Runtime examples:
- intro lede: 19px italic **600** (reference inherits 400)
- Packaging intro: 14px italic **600** (reference inherits 400)
- Summary wrapper/card base: 14px **600**
- Packaging boundary note: 11px **600** (reference 400)
- Custom intro/item/package base inheritance: 14px **600**

This is a major source of the user's reported micro-typography mismatch.

Correction direction: extend the existing `.sf-safe5-checkout` root owner in place to establish the formal reference inheritance contract; do not append a typography fix block.

## Confirmed mismatch 2 — legacy `spatial-flow.css` wins product quantity

Runtime DOM:
- quantity element: `<strong class="product-quantity">× 1</strong>`
- parent: `.product-name`
- computed display: `block`
- font-size: 12px
- font-weight: 850
- margin-top: 8px

Current SAFE5 Summary CSS intends `.product-quantity { display:none !important; }`, because quantity is already included in the new compact meta (`Qty 1`).

However runtime rule enumeration proves the older `spatial-flow.css?ver=2.7.11` still contains and matches:

`body.woocommerce-checkout:not(.woocommerce-order-received) #order_review table.shop_table .product-name .product-quantity`

with:
- `display:block !important`
- `margin-top:8px !important`
- `font-size:12px !important`
- `font-weight:850 !important`

This legacy selector has sufficient / greater specificity to beat the newer SAFE5 hide rule even though `checkout-safe5.css` is loaded later.

This proves the visible `×1` is not a Woo AJAX mystery or cache issue; it is an owner collision with a known legacy Checkout Summary hotfix in `spatial-flow.css`.

Correction direction: retire/replace the understood obsolete legacy Summary ownership rather than add another tail specificity patch.

## Confirmed mismatch 3 — sticky offset

Runtime `.sf-safe5-summary`:
- position sticky
- top 112px

Formal Step 02 reference `.checkout-side`:
- sticky top 136px

Correction direction: replace the existing SAFE5 Summary sticky owner value in place.

## Confirmed mismatch 4 — Packaging boundary-note margin

Current runtime / live rule uses top and bottom margin of 22px (`22px 0`).

Formal accepted Packaging reference uses:
- `margin: 0 0 22px`

The recent top-margin addition was not strict reference parity and must be reverted in the existing Packaging owner.

## Confirmed mismatch 5 — Step 02 copy differs from formal reference

Live defaults/runtime include:
- Intro: `Select the delivery pace that fits this order. The final amount updates before payment begins.`
- Shipping note: `Available delivery methods are calculated by WooCommerce for this address and cart. Final availability and cost remain store-controlled.`

Formal Step 02 reference uses:
- Intro: `Choose how your order will be delivered and how the products inside should be packaged before payment.`
- Shipping note: `Choose one of the delivery methods available for this address and order.`

These are not merely semantic differences: copy length changes wrapping and vertical rhythm, so strict 1:1 requires parity unless a live business-truth requirement prevents it. Neither formal reference string creates fake shipping methods or overrides Woo authority.

## Still valid architectural constraints

- Do not fake Shipping methods that do not exist in WooCommerce.
- WooCommerce remains shipping/fee/payment/order authority.
- Product Packaging logic already passed functional QA and must not be redesigned.
- Future Packaging edits must replace/merge inside current owners; no FIX1/FIX2 tail blocks.
- CSS maintenance policy remains precise replace/merge, not append-only.
- Backend editability remains required.

## Next correction batch

Proceed without another diagnostic loop. Build one bounded strict-parity correction batch that addresses, at minimum:
1. SAFE5 root typography inheritance baseline
2. retirement/neutralization of obsolete Summary quantity legacy owner
3. Summary sticky 112 → 136
4. Packaging boundary margin 22px 0 → 0 0 22px
5. exact Step 02 intro and Shipping reference copy, preserving backend editability
6. re-audit desktop/mobile computed results after installation

Do not declare strict 1:1 complete until the remaining reference-vs-live code contract has been re-audited.