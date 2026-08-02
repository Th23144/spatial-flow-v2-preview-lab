# Project 2 · Live Checkout Ownership Audit

Date: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authoritative status

```text
S7 Step-04 result family: accepted and closed
S8 link/session audit: accepted and closed
S9 responsive static acceptance: accepted and closed
Repository ownership evidence layer: completed
Current child-theme/template verification: completed
Checkout page assignment: completed
CartFlows ownership check: completed; no Flow exists
Active plugin/payment evidence: completed
Current Crypto plugin artifact: verified as authoritative V0.2.5
WPCode active-snippet ownership check: required final residual check
Bounded reconstruction plan: not started
Plugin/workspace integration: not started
Checkout: Not done
```

This phase remains read-only. No live WordPress, WooCommerce, CartFlows, theme, database, WPCode snippet or Crypto-plugin source was changed.

## 2. Detailed evidence records

Repository evidence layer:

```text
project2-progress/STEP_4F_LIVE_CHECKOUT_OWNERSHIP_AUDIT.md
```

Current page/CartFlows evidence:

```text
project2-progress/STEP_4F_LIVE_CHECKOUT_PAGE_AND_CARTFLOWS_EVIDENCE.md
```

Current source/plugin verification:

```text
project2-progress/STEP_4F_LIVE_CHECKOUT_CURRENT_SOURCE_AND_PLUGIN_VERIFICATION.md
```

The current-source record contains exact hashes, template ownership, active plugin/payment evidence and the V0.2.5 artifact verification.

## 3. Confirmed current owners

| Surface | Current owner | Decision boundary |
|---|---|---|
| `/checkout-2-2/` WordPress page | WooCommerce Checkout page ID 623 with `[woocommerce_checkout]` | Page editor is only the shortcode host. |
| Main live Checkout structure | Child-theme `woocommerce/checkout/form-checkout.php` | Current four-view SAFE5 structure is legacy and includes a rejected Step 4 Review. |
| SAFE5 step state, validation, shipping mirror, coupon, notices and Place Order relocation | `assets/js/checkout-safe5.js` | Major migration owner; not decorative JS. |
| SAFE5 page-specific visual layer | `assets/css/checkout-safe5.css` | Scoped Checkout stylesheet. |
| Shared notice/terms behavior | `assets/js/spatial-flow.js` | Overlaps SAFE5 on `updated_checkout` and `checkout_error`; requires deliberate migration decision. |
| Historical shared Checkout cascade | `assets/css/spatial-flow.css` | Contains substantial old Checkout selectors; cannot remain an unexamined fallback layer. |
| Asset loading, legacy unhooks, item context, Customizer registration | `functions.php` | Must preserve WooCommerce authority while removing obsolete visual ownership. |
| Live Step 04 result | Child-theme `woocommerce/checkout/thankyou.php` + WooCommerce order object/hooks | Current non-failed branch does not distinguish pending/on-hold from paid success semantics. |
| Billing, shipping, totals, notices, gateways, order creation, statuses, stock and email | WooCommerce core/gateway lifecycle | Must remain server authoritative. |
| Current Crypto path | Spatial Flow Crypto Pay Trial V0.2.5 | Fixed USDT/TRON legacy `/crypto-pay/` flow; no Project 2 Workspace exists. |
| CartFlows | Plugin active, but no Flow exists | Not the current Checkout or Thank You structure owner. |

## 4. Locked current live defects relative to the accepted static architecture

### A. Rejected Review step remains live

Current live sequence:

```text
Information → Shipping → Payment → Review → Place Order
```

Accepted Project 2 sequence:

```text
01 Contact / Address
→ 02 Shipping
→ 03 Payment
→ 04 Order Confirmed / Thank You / Receipt
```

The live Review step is not accepted and must not become a fifth business step.

### B. Current JS requires Step 4 before native submission

`checkout-safe5.js` moves the real WooCommerce `.place-order` row into Step 4 and intercepts form submission until that step is active. This behavior must be reworked so the final transactional action belongs to Step 03.

### C. Current Thank You semantics are incomplete

The live `thankyou.php` separates failed orders, but all other statuses use the same success-like Order Received composition. Pending/on-hold orders therefore lack the accepted unpaid/pending language and recovery route.

### D. Checkout Customizer fields are partly orphaned

The backend still exposes `Spatial Flow Checkout Page`, but SAFE5 removes the legacy hooks that consume many of those values while `form-checkout.php` hardcodes current headings, step labels, summary and trust copy. Backend control presence does not equal active editability.

### E. Shared and SAFE5 notice owners overlap

Both `spatial-flow.js` and `checkout-safe5.js` listen to WooCommerce Checkout refresh/error events and move/normalize notices. `spatial-flow.css` also contains a historical rule hiding `.woocommerce-NoticeGroup-checkout`. This overlap must be resolved in the reconstruction plan.

## 5. Current Crypto truth

Current artifact:

```text
Spatial Flow Crypto Pay Trial V0.2.5
SHA256: 41e926e96af99a0623d850189ec99ea4a58536b3f4b23be78f1eba9d21d7550f
```

The supplied ZIP hash matches the previously recorded authoritative V0.2.5 baseline exactly.

Current runtime contract:

```text
Gateway ID: spatial_flow_crypto
fixed USDT on TRON/TRC20
administrator-controlled mainnet / Nile / Shasta
process_payment() sets on-hold
redirect to legacy /crypto-pay/ with order_id + WooCommerce order key
invoice and transaction submission through admin-post handlers
server-side TronGrid verification
payment_complete(tx_hash) on verified success
canonical WooCommerce order-received result
administrator-only Sandbox path
```

Current supplied settings show Nile Testnet and Sandbox enabled for local testing.

Absent from V0.2.5:

```text
REST Workspace routes
before_woocommerce_pay_form Workspace bootstrap
woocommerce_locate_template form-pay replacement
project2_workspace_enabled
Workspace epoch/token
X-SF-Workspace-Token
active order-pay Workspace
```

The invoice expiry timestamp is stored, but V0.2.5 has no autonomous worker/cron expiry transition. Minimum confirmations is stored for a later worker version. No operational countdown, automatic monitoring or confirmation tracker may be claimed.

## 6. Final residual ownership check

WPCode Lite 2.3.3 is active and can inject PHP/CSS/JavaScript outside the supplied child-theme files.

The only remaining user evidence required for this ownership phase is the active WPCode snippet list, checking for snippets related to:

```text
checkout
woocommerce_checkout
order-received / thankyou
payment gateways
crypto-pay
wc-ajax
```

No snippet is authorized to be edited or disabled during this check.

## 7. Next safe boundary

After the WPCode active-snippet check:

```text
close Live Checkout ownership audit
→ produce exact source-backed ownership matrix
→ write a bounded reconstruction plan
→ obtain explicit user authorization
→ only then modify one controlled implementation group
```

No live reconstruction, V0.2.6.1 installation or Workspace integration is authorized by this audit document.
