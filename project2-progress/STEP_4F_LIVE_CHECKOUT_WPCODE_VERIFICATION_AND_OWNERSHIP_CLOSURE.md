# Project 2 · Live Checkout WPCode Verification and Ownership Closure

Date: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Scope

Final read-only residual ownership check for WPCode Lite after the current child-theme, Checkout template, page assignment, CartFlows, payment-provider and Crypto V0.2.5 evidence had already been verified.

No snippet, plugin, theme file, database value or live Checkout behavior was modified.

## 2. Active WPCode list evidence

The supplied WPCode list showed seven active snippets:

```text
购物车css
订单查询结果css
订单查询美化
主站限制搜索及页面定向
收藏页
页眉固定
筛选按钮
```

No active snippet was named or presented as Checkout, payment, Crypto, Thank You, order-pay, order-received or WooCommerce checkout customization.

The only active snippet requiring source inspection was:

```text
ID: 2801
Name: 主站限制搜索及页面定向
Type: PHP Snippet
Insertion: Auto Insert
Location: Run Everywhere
Device: Any device type
Smart Conditional Logic: disabled
Status: active
```

## 3. Exact source review

The user supplied the full PHP source.

Registered hooks:

```text
pre_get_posts
  callback: sf_main_search_products_only_with_spell
  priority: 20

posts_search
  callback: sf_posts_search_multi_terms_and
  priority: 20
  accepted arguments: 2

template_include
  callback: sf_main_search_force_wc_archive_template
  priority: 9999

wp_head
  callback: sf_search_ui_tweaks
  priority: 99

init
  callback: sf_rebuild_dict_once
  priority: 5
```

The source is limited to main-site product search behavior:

```text
- normalize and split search terms
- build a product-title token dictionary
- perform limited English spelling correction
- restrict the main search query to product
- add SKU LIKE lookup
- replace the default search SQL with multi-term AND LIKE clauses
- select WooCommerce archive-product.php only when is_search() is true
- hide the Astra search banner and render a did-you-mean message only on search pages
- rebuild the search dictionary only for an administrator requesting ?sf_rebuild_dict=1
```

Relevant guards include:

```text
is_admin()
$wp_query->is_main_query()
$wp_query->is_search()
is_search()
get_current_blog_id() == 1
current_user_can('manage_options') for dictionary rebuild
```

## 4. Checkout exclusion conclusion

The inspected snippet contains no reference to:

```text
is_checkout
woocommerce_checkout
checkout_error
updated_checkout
wc-ajax
order-pay
order-received
thankyou
payment gateway registration
spatial_flow_crypto
crypto-pay
payment_complete
wp_redirect / wp_safe_redirect
WooCommerce order status mutation
```

Its `template_include` filter executes its WooCommerce archive-template substitution only when `is_search()` is true. It does not replace Checkout, order-pay, order-received or Crypto templates.

Therefore:

```text
WPCode snippet ID 2801 does not own or modify the current Checkout flow.
WPCode does not block the Live Checkout ownership audit from closing.
No WPCode snippet change is required for Checkout reconstruction.
```

## 5. Final ownership-audit status

```text
Repository ownership evidence: completed
Current child-theme/template verification: completed
Checkout page assignment: completed
CartFlows ownership check: completed; no Flow exists
Active plugin/payment evidence: completed
Crypto V0.2.5 artifact verification: completed
WPCode active-snippet ownership check: completed; no Checkout owner found
Live Checkout ownership audit: closed
Exact source-backed ownership matrix: issued separately
Bounded reconstruction plan: not started
Live source modification: not started
Checkout: Not done
```

## 6. Boundary

This closure authorizes documentation and planning only. It does not authorize:

```text
editing or disabling WPCode snippets
modifying form-checkout.php
modifying thankyou.php
modifying checkout-safe5.js or checkout-safe5.css
cleaning spatial-flow.js or spatial-flow.css
installing V0.2.6.1
activating a Project 2 Crypto Workspace
changing payment, order, stock, email or database behavior
```
