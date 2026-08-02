# Project 2 · Live Checkout Ownership Audit

Date: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Status

```text
S7 Step-04 result family: accepted and closed
S8 link/session audit: accepted and closed
S9 responsive static acceptance: accepted and closed
Live Checkout ownership audit — repository evidence layer: completed
Live Checkout ownership audit — current local-source verification: required next
Plugin/workspace integration: not started
Checkout: Not done
```

This phase remains read-only. No live WordPress, WooCommerce, CartFlows, theme, database or Crypto-plugin source was changed.

## 2. Audit objective

Determine which live component owns each Checkout responsibility before any production reconstruction begins.

Ownership domains:

```text
- WooCommerce core templates and checkout lifecycle
- child-theme template overrides
- child-theme functions.php hooks, filters and AJAX handlers
- CartFlows or other Checkout-page wrappers
- Checkout-specific and shared CSS/JavaScript
- payment-gateway rendering and submission
- Spatial Flow Crypto order creation, on-hold state, recovery and verification
- Thank You/result routing
- backend-editable text and settings sources
```

## 3. Repository evidence boundary

The repository contains:

```text
- accepted static references
- architecture and integration decisions
- historical local-source audits
- deployed-file hashes and sync manifests
- Crypto-plugin package reviews
```

The repository does not contain the complete current local WordPress installation or the current full contents of:

```text
functions.php
assets/js/spatial-flow.js
assets/css/checkout-safe5.css
assets/css/spatial-flow.css
active child-theme woocommerce/checkout/ overrides
CartFlows flow/step configuration
currently installed Crypto-plugin source
```

An earlier authoritative plugin review explicitly found no repository source reference to:

```text
checkout/form-pay.php
woocommerce_locate_template
before_woocommerce_pay_form
```

and correctly warned that this does not prove the local installation has no override or handler. Therefore repository evidence can establish the ownership contract, but cannot close the current local-source verification gate by itself.

## 4. Confirmed current ownership map

| Surface / responsibility | Confirmed owner | Repository conclusion |
|---|---|---|
| Checkout entry from Cart | WooCommerce checkout navigation | The accepted Cart routes to `/checkout-2-2/`; Cart does not replace the checkout URL or nonce lifecycle. |
| Contact, address, shipping, totals, validation, notices, order commitment | WooCommerce core lifecycle | These must remain server-owned and dynamic. Static Step 01–03 files are visual references only. |
| Available payment methods and final payment submission | WooCommerce gateway system | Step 03 is the only final transactional Checkout step. No second Review/Confirm step is permitted. |
| Order, order key, stock, taxes, totals, email, refunds and statuses | WooCommerce | Navigation or browser state cannot decide payment success. |
| Checkout product secondary line | Child-theme `functions.php` shared filter | `spatial_flow_cart_visual_2_cart_item_name()` runs on Cart and Checkout and adds `.sf-cart-item-meta`; it is a cross-page dependency that must not be removed blindly. |
| SAFE5 Checkout visual/notice treatment | `assets/css/checkout-safe5.css` | Checkout-only stylesheet. It contains at least the accepted rule that hides the carried add-to-cart success notice on SAFE5 while preserving validation, Coupon, payment and required-field errors. |
| Shared storefront shell and potentially historical Checkout selectors | `assets/css/spatial-flow.css` | Global/shared visual owner. Checkout-specific changes must not default to this file when `checkout-safe5.css` is the correct scoped owner. Exact current overlap still requires source verification. |
| Existing Checkout interaction layer | Child-theme `assets/js/spatial-flow.js` and WooCommerce scripts | The deployed JS artifact is recorded, but its exact current Checkout responsibilities cannot be proven without the current file contents. WooCommerce AJAX/update lifecycle must remain intact. |
| Current fixed Crypto gateway identity | Spatial Flow Crypto plugin | Gateway ID `spatial_flow_crypto`; fixed USDT on TRON/TRC20; administrator-controlled mainnet/Nile/Shasta; customer-submitted TRON transaction hash; server-side TronGrid verification. |
| Current unresolved Crypto order state | Spatial Flow Crypto plugin + WooCommerce | Expected state is `on-hold`; server verification calls `payment_complete()` at most once and WooCommerce owns the resulting order lifecycle. |
| Existing Crypto customer path | Current Crypto plugin legacy flow | Reviewed package evidence preserves `process_payment()`, `/crypto-pay/`, `[sf_crypto_pay]`, invoice creation, admin-post handlers, Sandbox and canonical Thank You behavior. |
| Future dedicated Crypto order-pay Workspace | Not active in the accepted V0.2.6.1 Step-1 package | V0.2.6.1 adds only inert skeletons and a default-off feature flag. It introduces no REST route, no order-pay hook, no template override and no redirect change. Installation/runtime activation is not established by this repository audit. |
| Unfinished-payment recovery target | WooCommerce order-pay | Approved future recovery surface. Before activation, the active theme/plugins must be checked for `form-pay.php`, `woocommerce_locate_template`, `before_woocommerce_pay_form` and other order-pay customizations. |
| Step 04 / canonical result truth | WooCommerce order-received lifecycle | Confirmed and Pending static S7 pages define accepted presentation and language only. The live result must be selected from the actual WooCommerce order/payment state. |
| Operational content/editability | WordPress theme mods/options, WooCommerce data and gateway settings | Existing dynamic/editable sources must be preserved. Static copy must not replace product, customer, shipping, totals, payment or status truth. |

## 5. Confirmed deployed/theme evidence

Current repository records identify the deployed commerce-theme baseline as:

```text
functions.php
Version: 2.7.8
SHA256: 5bd9f8b307d1b59eaa92bf31d3640e2d4ba48bca6de7a640b705d5e75f9ef00b

assets/js/spatial-flow.js
SHA256: 7442ee92167ae383b933c6db0281f14ea56a75733339818c3e4858d77d52651b

assets/css/spatial-flow.css
SHA256: 79ab7e08308903f0e1693076b4817402515ada52944c575c1e827324cc6161fd
```

These hashes prove the accepted Cart baseline, not the exact current Checkout hook/function map. The source contents must be re-read before editing.

## 6. Crypto integration truth

Approved current/future split:

### Existing legacy path

```text
Step 03 selects spatial_flow_crypto
→ WooCommerce creates the order
→ order becomes on-hold
→ current plugin redirects to /crypto-pay/
→ customer creates/uses an invoice
→ customer submits the transaction hash
→ server verifies through TronGrid
→ payment_complete()
→ canonical WooCommerce Thank You/result
```

### Future dedicated Step-03 Workspace

```text
WooCommerce order-pay validation
→ dedicated spatial_flow_crypto Workspace
→ create/reuse one invoice
→ required transaction-hash submission
→ server verification
→ canonical Step 04
```

The accepted V0.2.6.1 Step-1 package does not activate this future flow. It has:

```text
- no REST route
- no order-pay hook
- no checkout/form-pay.php replacement
- no Workspace Token generation
- no process_payment() redirect change
- default-off inert feature flag
```

Therefore Project 2 must not design against an assumed active order-pay Workspace until the installed plugin source and runtime version are confirmed.

## 7. Current unresolved ownership questions

### A. Main Checkout template ownership

Not yet proven from current source:

```text
- whether the child theme currently overrides woocommerce/checkout/form-checkout.php
- whether it overrides review-order.php or payment.php
- whether CartFlows replaces/wraps the Checkout form or only supplies the WordPress page/step container
- whether any plugin filters woocommerce_locate_template for Checkout templates
```

### B. Order-pay ownership

Not yet proven from current source:

```text
- active woocommerce/checkout/form-pay.php override
- before_woocommerce_pay_form handlers
- woocommerce_valid_order_statuses_for_payment filters
- order-pay CSS/JS customizations
- conflict with a future dedicated Crypto Workspace
```

### C. Theme PHP and JavaScript ownership

Not yet proven from current source:

```text
- exact SAFE5 hooks and callback priorities in functions.php
- exact Step 01/02/03 state owner
- exact email validation owner
- exact shipping-step transition owner
- exact payment-section transition owner
- WooCommerce updated_checkout / checkout_error / AJAX event handlers in spatial-flow.js
- any DOM relocation that depends on current WooCommerce markup
```

### D. Result-page ownership

Not yet proven from current source:

```text
- whether woocommerce/checkout/thankyou.php is currently overridden
- which hooks add custom Thank You content
- whether current Pending/On-hold language is gateway-specific or generic
- which existing result content is backend editable
```

### E. Installed Crypto-plugin runtime

Not yet proven by this repository audit:

```text
- exact installed plugin version
- whether V0.2.6.1 has been installed
- whether its Step-1 local old-path regression passed
- current value of project2_workspace_enabled
- current epoch option value
```

## 8. Required current-source evidence bundle

The next bounded audit group requires the current local copies or exact current listings for:

```text
1. wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/functions.php
2. wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/assets/js/spatial-flow.js
3. wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/assets/css/checkout-safe5.css
4. wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/assets/css/spatial-flow.css
5. directory listing: wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/woocommerce/checkout/
6. every existing file from that directory, especially:
   - form-checkout.php
   - form-pay.php
   - review-order.php
   - payment.php
   - thankyou.php
7. current `/checkout-2-2/` WordPress page content/template assignment
8. CartFlows flow/step configuration or export that owns `/checkout-2-2/`
9. current active-plugin list relevant to Checkout/payment
10. currently installed `spatial-flow-crypto-pay` plugin source or exact installed ZIP/version evidence
```

Large files must be reviewed as current baselines before any edit. Historical hashes and previous uploads are not substitutes.

## 9. Safe implementation boundary after source verification

After the evidence bundle is read, the next output must be a source-backed ownership matrix naming:

```text
- exact file
- exact hook/filter/event
- exact callback or selector
- current responsibility
- keep / replace / unhook / migrate decision
- backend-editability source
- rollback boundary
- regression tests
```

Only after that matrix is accepted may a bounded reconstruction plan be written.

No live template, CSS, JS, CartFlows or Crypto-plugin change is authorized by this audit record.

## 10. Current stop point

```text
Live Checkout ownership audit — repository evidence layer: completed
Live Checkout ownership audit — current local-source verification: required next
Bounded reconstruction plan: blocked
Plugin/workspace integration: blocked
Live Checkout source modification: not started
Checkout: Not done
```
