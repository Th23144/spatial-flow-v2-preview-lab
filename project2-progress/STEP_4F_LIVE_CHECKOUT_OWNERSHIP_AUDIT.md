# Project 2 · Live Checkout Ownership Audit

Date: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Final status

```text
S7 Step-04 result family: accepted and closed
S8 link/session audit: accepted and closed
S9 responsive static acceptance: accepted and closed
Repository ownership evidence: completed
Current child-theme/template verification: completed
Checkout page assignment: completed
CartFlows ownership check: completed; no Flow exists
Active plugin/payment evidence: completed
Current Crypto artifact: verified as authoritative V0.2.5
WPCode active-snippet ownership check: completed; no Checkout owner found
Live Checkout ownership audit: closed
Exact source-backed ownership matrix: issued
Bounded reconstruction plan: next separate phase, not started
Plugin/workspace integration: not started
Checkout: Not done
```

This audit remained read-only. No live WordPress, WooCommerce, CartFlows, theme, WPCode, database or Crypto-plugin source was changed.

## 2. Authoritative evidence records

```text
project2-progress/STEP_4F_LIVE_CHECKOUT_PAGE_AND_CARTFLOWS_EVIDENCE.md
project2-progress/STEP_4F_LIVE_CHECKOUT_CURRENT_SOURCE_AND_PLUGIN_VERIFICATION.md
project2-progress/STEP_4F_LIVE_CHECKOUT_WPCODE_VERIFICATION_AND_OWNERSHIP_CLOSURE.md
project2-progress/STEP_4F_LIVE_CHECKOUT_EXACT_OWNERSHIP_MATRIX.md
```

## 3. Confirmed current owners

| Surface | Current owner | Final audit conclusion |
|---|---|---|
| `/checkout-2-2/` | WooCommerce Checkout page ID 623 with `[woocommerce_checkout]` | Page editor is only the shortcode host. |
| Main Checkout shell | Child-theme `woocommerce/checkout/form-checkout.php` | Current live four-view SAFE5 includes a rejected Step 4 Review. |
| Step state, validation, shipping mirror, coupon, notices, Place Order relocation | `assets/js/checkout-safe5.js` | Major migration owner; currently requires Review before submission. |
| Checkout visual layer | `assets/css/checkout-safe5.css` | Correct scoped owner for live Checkout presentation. |
| Shared Terms/notice behavior | `assets/js/spatial-flow.js` | Overlaps SAFE5 on `updated_checkout` and `checkout_error`. |
| Historical shared Checkout cascade | `assets/css/spatial-flow.css` | Contains substantial old Checkout selectors and notice hiding. |
| Asset loading, legacy unhooks, item context, Customizer controls | `functions.php` | Preserves Woo hooks but exposes partly orphaned Checkout edit controls. |
| Live order result | `woocommerce/checkout/thankyou.php` + WooCommerce order object/hooks | Failed is distinct; pending/on-hold currently shares success-like output. |
| Commerce truth | WooCommerce core and active gateways | Owns fields, totals, validation, order, payment, stock, email and statuses. |
| Current Crypto path | Spatial Flow Crypto Pay Trial V0.2.5 | Fixed USDT/TRON legacy `/crypto-pay/`; no Project 2 Workspace exists. |
| CartFlows | Plugin active, no Flow | Not a current Checkout or Thank You owner. |
| WPCode | Active snippets inspected | No Checkout/payment/Crypto owner found. Search snippet ID 2801 is search-scoped only. |

## 4. Locked live defects relative to accepted architecture

### A. Rejected Review step remains live

Current:

```text
Information → Shipping → Payment → Review → Place Order
```

Accepted:

```text
01 Contact / Address
→ 02 Shipping
→ 03 Payment
→ 04 Order Confirmed / Thank You / Receipt
```

Review must not survive as a fourth input step or fifth business stage.

### B. Native Place Order is relocated incorrectly

`checkout-safe5.js` moves the real WooCommerce `.place-order` row into Review and blocks form submission until Step 4. The final native transactional action must return to Step 03 without cloning or replacing `#place_order`.

### C. Pending/on-hold result semantics are incorrect

The live `thankyou.php` separates failed orders but uses one success-like composition for every other status. Pending/on-hold must use accepted unpaid language and safe recovery/support behavior; paid/processing/completed must use Confirmed semantics.

### D. Backend editability is incomplete

`Spatial Flow Checkout Page` controls still exist, but SAFE5 removes many consuming legacy hooks while `form-checkout.php` hardcodes headings, steps, summary and trust copy. Saved settings must be reconnected, mapped or deliberately migrated.

### E. Notice ownership overlaps

`checkout-safe5.js` and `spatial-flow.js` both process WooCommerce Checkout events and notices. `spatial-flow.css` also contains historical Checkout notice rules. Reconstruction must establish one owner and prevent duplicate, hidden or misplaced errors.

## 5. Current Crypto truth

```text
Plugin: Spatial Flow Crypto Pay Trial V0.2.5
ZIP SHA256: 41e926e96af99a0623d850189ec99ea4a58536b3f4b23be78f1eba9d21d7550f
Gateway ID: spatial_flow_crypto
Asset/network: fixed USDT / TRON-TRC20
Current supplied environment: Nile Testnet
Sandbox: enabled
```

Current path:

```text
WooCommerce creates order
→ on-hold
→ legacy /crypto-pay/
→ invoice/admin-post transaction submission
→ server-side TronGrid verification
→ payment_complete(tx_hash)
→ canonical WooCommerce order-received result
```

Absent from V0.2.5:

```text
REST Workspace routes
order-pay Workspace hooks
form-pay replacement
project2_workspace_enabled
Workspace token/epoch
active Project 2 Crypto Workspace
```

No operational countdown, automatic monitoring or confirmation tracker may be claimed under this baseline.

## 6. WPCode closure

The only ambiguous active snippet was ID 2801, `主站限制搜索及页面定向`, a PHP snippet set to Auto Insert / Run Everywhere.

Its registered hooks are limited to product-search behavior:

```text
pre_get_posts
posts_search
template_include
wp_head
init
```

Its effective paths are guarded by `is_search()` / main search query / main-site checks. It contains no Checkout, order-pay, order-received, gateway, Crypto, redirect or order-status logic. WPCode is therefore excluded from current Checkout ownership.

## 7. Exact ownership matrix

The exact keep / replace / migrate / exclude decisions, backend-editability source, rollback boundary and regression tests are recorded in:

```text
project2-progress/STEP_4F_LIVE_CHECKOUT_EXACT_OWNERSHIP_MATRIX.md
```

Key locked decisions:

```text
- preserve WooCommerce commerce authority
- remove live Review as an input step
- keep native Place Order in Step 03
- preserve dynamic gateway rendering
- keep V0.2.5 untouched during initial shell reconstruction
- correct pending/on-hold result semantics
- consolidate notice ownership
- restore real backend editability
- clean historical Checkout CSS by bounded blocks
- exclude CartFlows and WPCode
```

## 8. Current stop point

```text
Live Checkout ownership audit: closed
Exact ownership matrix: issued
Bounded reconstruction plan: authorized next documentation phase, not started
Live code modification: not authorized and not started
Plugin/workspace integration: not started
Checkout: Not done
```
