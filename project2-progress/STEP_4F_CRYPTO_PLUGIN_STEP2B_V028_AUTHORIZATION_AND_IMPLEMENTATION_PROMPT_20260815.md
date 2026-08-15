# Step 4F · Crypto Plugin Step 2B · V0.2.8 Authorization and Implementation Prompt

Date: 2026-08-15
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Status

```text
Current installed plugin: Spatial Flow Crypto Pay Trial V0.2.7
V0.2.7 Plugin Step 2A: FINAL ACCEPTED / CLOSED
Current Feature Flag: OFF
Current sf_crypto_workspace_token_epoch: 3
Legacy /crypto-pay/: PASS
Current authorized development group: Step 2B only
Project 2 live Checkout/theme modification: NOT AUTHORIZED in this group
```

This record authorizes the first real customer-route change for the experimental Project-2 Crypto Workspace, but only behind the existing Feature Flag.

## 2. Step 2B objective

Implement the server-authorized WooCommerce `order-pay` Workspace entry/bootstrap boundary.

When the Feature Flag is OFF:

```text
current V0.2.7 behavior must remain authoritative
Checkout Crypto order
→ on-hold
→ legacy /crypto-pay/
```

When the Feature Flag is ON:

```text
Checkout Crypto order
→ on-hold
→ WooCommerce-generated order-pay URL
→ WooCommerce performs its own order/key/customer/payability/stock/guest-email validation
→ only after those checks pass, plugin establishes verified Workspace context
→ plugin issues the Step-2A Workspace Token
→ dedicated Crypto form-pay replacement renders a minimal bootstrap shell
```

Step 2B does NOT yet create an Invoice and does NOT yet register any REST route.

## 3. Authoritative WooCommerce validation boundary

The implementation must preserve WooCommerce's real `WC_Shortcode_Checkout::order_pay()` validation sequence.

The current WooCommerce source performs, before `before_woocommerce_pay_form`:

```text
order ID normalization
Order Key comparison
pay_for_order capability / login checks
needs_payment() check
stock checks where applicable
Guest email verification when required
customer billing-location setup
available gateway loading
```

Then WooCommerce fires:

```text
before_woocommerce_pay_form( $order, $order_button_text, $available_gateways )
```

and only after that calls:

```text
wc_get_template( 'checkout/form-pay.php', ... )
```

This ordering is the locked Step-2B security boundary.

### Mandatory consequence

Workspace Token issuance MUST occur only from the post-validation `before_woocommerce_pay_form` context or an equivalently proven post-validation boundary.

Forbidden:

```text
issuing a Workspace Token from before_woocommerce_pay
issuing a Workspace Token from raw GET order_id + key before WooCommerce validation
creating a public token-issuance endpoint
trusting the browser merely because an order-pay URL shape is present
```

## 4. Output version

Input authoritative package:

```text
Spatial Flow Crypto Pay Trial V0.2.7
ZIP SHA256:
aa2075c78e5e788bc4bb2e5d111325b122bacea91835819a509a77b19bae7184
```

Authorized output:

```text
Spatial Flow Crypto Pay Trial V0.2.8
spatial-flow-crypto-pay-trial-v0.2.8.zip
```

Plugin name, directory, Gateway class and Gateway ID remain unchanged:

```text
Spatial Flow Crypto Pay Trial
spatial-flow-crypto-pay/
SF_Crypto_Pay_Gateway
spatial_flow_crypto
```

## 5. Exact allowed source scope

Allowed to modify:

```text
spatial-flow-crypto-pay.php
includes/class-sf-crypto-pay-order-guard.php
includes/class-sf-crypto-pay-workspace-token.php
includes/class-sf-crypto-pay-workspace.php
```

Allowed if objectively required for small shared serialization/error helpers:

```text
includes/class-sf-crypto-pay-response.php
```

Allowed to add:

```text
templates/crypto-order-pay-workspace.php
```

Do not add Project-2 final Workspace CSS/JS in Step 2B.

Must remain functionally untouched:

```text
includes/class-sf-crypto-pay-invoice-service.php
includes/class-sf-crypto-pay-payment-service.php
includes/class-sf-crypto-pay-rest-controller.php
templates/crypto-pay-page.php
assets/crypto-pay.js
assets/crypto-pay.css
```

Legacy business functions must remain unrefactored in this group:

```text
sf_crypto_pay_generate_invoice()
sf_crypto_pay_submit_tx()
sf_crypto_pay_sandbox_success()
sf_crypto_pay_verify_tron_usdt_payment()
sf_crypto_pay_verify_tron_usdt_payment_from_txinfo()
```

## 6. Feature-flagged process_payment() redirect

This is the first group authorized to change `SF_Crypto_Pay_Gateway::process_payment()` redirect behavior.

All existing order creation / on-hold / cart-emptying semantics must remain unchanged.

Required redirect rule:

```text
project2_workspace_enabled != yes
→ exact legacy /crypto-pay/ redirect behavior

project2_workspace_enabled == yes
→ server-generated WooCommerce order-pay URL for that already-created order
```

Use WooCommerce's own order payment URL API rather than hand-building a checkout path.

The order-pay URL may naturally contain the raw WooCommerce Order Key because that is WooCommerce's own recovery/payment URL contract. Do not copy the raw key into Workspace Token payloads, normal bootstrap JSON, logs or analytics.

## 7. Order-pay verified context establishment

`SF_Crypto_Pay_Workspace` must register:

```text
before_woocommerce_pay_form
```

Required signature:

```text
priority: explicitly documented
accepted args: 3
```

The callback must:

```text
receive WooCommerce's already-validated WC_Order
confirm Feature Flag = yes
confirm payment_method = spatial_flow_crypto
confirm Order Guard eligibility
resolve guest/customer/manager actor context using the Step-2A binding rules
establish an in-request verified context
issue one real Workspace Token using SF_Crypto_Pay_Workspace_Token
store only request-local bootstrap state for the template
```

It must NOT print customer-visible markup itself.

If Token issuance fails after WooCommerce has validated the order, fail closed into the dedicated plugin template with a customer-safe bootstrap-unavailable state. Do not fall back to a generic multi-gateway Pay form for that Crypto order while the Feature Flag is ON.

## 8. Dedicated form-pay template replacement

Register:

```text
woocommerce_locate_template
```

Required behavior:

```text
only intercept template_name === checkout/form-pay.php
only while Feature Flag = yes
only when the current request-local context was established by the post-validation before_woocommerce_pay_form callback
only for the exact spatial_flow_crypto order in that context
return an absolute plugin path to templates/crypto-order-pay-workspace.php
otherwise return the original located template unchanged
```

Document priority and accepted argument count.

This must prevent the default WooCommerce order-pay payment-method list and duplicate `Pay for order` button from appearing under the dedicated Crypto Workspace.

No other Gateway's order-pay page may be affected.

## 9. Minimal Step-2B Workspace template

`templates/crypto-order-pay-workspace.php` is a TEMPORARY integration/bootstrap shell, not the final Project-2 S5/S6 visual implementation.

Its purpose is to prove:

```text
WooCommerce validated the order first
plugin owns the dedicated form-pay surface for this one Crypto order
Workspace Token can be issued safely
browser can receive the minimum non-sensitive bootstrap contract
no second order is created
no default payment method form is duplicated
```

The template may render only a minimal customer-safe state such as:

```text
Secure Crypto payment workspace
Order #...
Payment workspace authorization ready.
Invoice service is not enabled in this development step.
No transfer details are available yet.
```

Do not visually imitate final S5/S6 in this plugin step.

Do not display:

```text
fake wallet address
fake amount to transfer
fake QR
fake waiting-for-payment claim
fake payment detection
fake invoice status
```

## 10. Browser bootstrap contract in Step 2B

The temporary template may expose a minimal same-origin bootstrap object, preferably in a non-executing JSON script block or equivalently bounded DOM data.

Allowed bootstrap fields:

```text
schema/version
order_id
order_number
WooCommerce order status
Gateway ID = spatial_flow_crypto
workspace_token
auth_context
token_expires_at
feature_epoch
current phase = bootstrap_only
```

Optional:

```text
REST base URL as a future endpoint base, even though no routes exist yet
```

Forbidden bootstrap fields:

```text
raw WooCommerce Order Key
TronGrid API key
Gateway private API settings
receiver address before Invoice service returns it
fake Invoice ID
fake amount
raw server token record
WordPress salts
stack traces
SQL details
```

The Workspace Token itself is intentionally browser-visible under scheme B; it is authorization material and therefore must not be echoed anywhere except the dedicated bootstrap field required by the future same-origin client.

## 11. Recovery URL leakage boundary

The order-pay browser URL already contains the raw Order Key by WooCommerce design.

Step 2B must still preserve the established leakage rules:

```text
raw key does not enter bootstrap JSON
raw key does not enter Token payload/server record
raw key does not enter logs
raw key does not enter analytics
no third-party scripts or third-party assets on the dedicated Workspace page
```

A customer-visible recovery-link control is NOT required in Step 2B. It belongs to the later recovery/UI group.

## 12. Response/security headers

When the request is a Project-2 Crypto order-pay candidate, add safe headers early enough that they are sent before rendering:

```text
Cache-Control: no-store, private
Referrer-Policy: no-referrer
```

Prefer the WordPress header/filter lifecycle rather than calling headers after template output.

The header logic may conservatively apply to the Crypto order-pay request before final Workspace authorization; it must not leak information or affect unrelated pages/gateways.

Do not load third-party fonts/scripts/images from the Step-2B template.

## 13. Feature Flag rollback for existing order-pay URLs

The old `/crypto-pay/` route remains authoritative when the Feature Flag is OFF.

Step 2B must preserve rollback not only for future Checkout submissions but also for an unpaid Crypto order that already has an order-pay recovery URL from a prior ON test.

Approved bounded behavior:

```text
request is WooCommerce order-pay
+ order exists
+ raw key matches server order key
+ payment_method = spatial_flow_crypto
+ order is unpaid and allowed for legacy recovery
+ Feature Flag = OFF
→ redirect to the existing legacy /crypto-pay/ URL for that same order
```

Do not perform this redirect for:

```text
wrong key
wrong Gateway
paid order
cancelled order
refunded order
completed order
trash/missing order
```

This redirect is a rollback bridge only. It must not issue a Workspace Token.

## 14. Paid order handling

For an order-pay request that resolves to the correct Crypto order and valid key but the order is already paid:

```text
redirect to the server-generated canonical WooCommerce order-received URL
```

The canonical WooCommerce result page remains responsible for its own customer/guest verification.

Do not render a payment Workspace for a paid order.

## 15. Cancelled/refunded/completed/invalid handling

Step 2B must not make these orders payable and must not issue Tokens.

Safe WooCommerce/default error handling may remain authoritative for:

```text
cancelled
refunded
completed
invalid key
invalid order
wrong Gateway
```

Do not invent a Step-04 result implementation inside the plugin in this group.

## 16. No REST in Step 2B

Confirmed forbidden:

```text
register_rest_route
Create/Reuse Invoice REST
Workspace GET REST
Submit Transaction Hash REST
Payment Status REST
Sandbox REST
```

The Token is rendered only to prove the secure bootstrap boundary and prepare Step 3.

No browser request should use it yet.

## 17. No Invoice / Payment Service behavior in Step 2B

Do not implement or call new shared Invoice/Payment services.

The temporary Workspace must explicitly state that payment details are not available in this development step.

No amount/address is to be generated or shown by the new Workspace.

Legacy `/crypto-pay/` remains the only operational Invoice/Hash surface while Feature Flag is OFF.

## 18. No Project-2 final UI yet

Do not copy the full accepted S5/S6 HTML/CSS/JS into the plugin.

Step 2B is an integration proof only.

Project-2 visual integration remains deferred until real Invoice/Payment REST/state services exist.

No Project-2 theme source may be changed by the plugin-development window.

## 19. Required automated/static verification

The delivery must prove at minimum:

```text
version = 0.2.8
Feature Flag OFF keeps old process_payment redirect
Feature Flag ON returns WooCommerce order-pay URL
order creation/on-hold behavior unchanged
before_woocommerce_pay_form registered with 3 args
woocommerce_locate_template registered and scoped
no replacement for non-Crypto Gateway
no replacement without verified request-local context
Token issue happens only after verified context establishment
no register_rest_route exists
no Invoice/Payment service activation exists
no raw Order Key in bootstrap JSON
no third-party resources in the new template
no default form-pay markup in the custom template
all PHP files php -l PASS
legacy shortcode/admin-post/Sandbox hooks remain
```

Add bounded mocks where possible for:

```text
flag OFF redirect legacy
flag ON redirect order-pay
post-validation context + token issue success
wrong gateway does not establish context
ineligible order does not establish context
custom template selected only with exact verified Crypto context
invalid/no context returns original template
paid-order early result redirect helper
flag-OFF existing order-pay rollback bridge
```

Do not claim real WooCommerce runtime PASS if the development environment does not contain the target runtime.

## 20. Required local manual regression after Project-2 source review

Project 2 will inspect the returned ZIP before installation.

After source acceptance, local checks will include:

### Feature Flag OFF

```text
plugin installs/activates
version = 0.2.8
current epoch preserved
legacy Checkout Crypto order created exactly once
on-hold
legacy /crypto-pay/
Invoice
Hash
Sandbox
Thank You
notes
```

### Feature Flag ON

Changing OFF → ON should increment the current epoch exactly once.

Then:

```text
new Checkout Crypto order created exactly once
order = on-hold
redirect = WooCommerce order-pay URL
no new /crypto-pay/ redirect for that Checkout
WooCommerce validation occurs before Workspace
minimal dedicated Workspace shell appears
no default gateway list
no duplicate Pay button
no second order
refresh keeps same order
closing/reopening same order-pay URL keeps same order
no Invoice/address/amount is shown yet
```

### Validation/security runtime

Where reproducible locally:

```text
bad Order Key → no Workspace
non-Crypto order-pay → ordinary WooCommerce page unchanged
paid Crypto order-pay → canonical order-received
Guest verification, if WooCommerce triggers it, occurs before Workspace
```

### Rollback bridge

After creating an unpaid order while Feature Flag is ON:

```text
turn Feature Flag OFF
same order-pay URL
→ legacy /crypto-pay/ for that same unpaid Crypto order
```

Future Checkout submissions while OFF must also return to legacy behavior.

Final local state after Step-2B testing should normally be Feature Flag OFF until the next plugin group is ready.

## 21. Rollback

If V0.2.8 source review or runtime regression fails:

```text
turn Project 2 Crypto Workspace OFF
reinstall accepted V0.2.7 package
SHA256 aa2075c78e5e788bc4bb2e5d111325b122bacea91835819a509a77b19bae7184
```

Do not delete Invoice/Transaction/Log/order data or reset the epoch.

V0.2.8 must introduce no required database schema migration.

## 22. Required delivery report

Return:

```text
spatial-flow-crypto-pay-trial-v0.2.8.zip
```

and:

# Spatial Flow Crypto Pay Trial V0.2.8 · Plugin Step 2B Delivery Report

with sections:

```text
1. Input Baseline and SHA256
2. Output Version
3. Exact Changed / Added Files
4. Feature-Flag Redirect Behavior
5. WooCommerce order-pay Validation Boundary
6. Verified Workspace Context
7. Workspace Token Issuance Boundary
8. form-pay Template Replacement Scope
9. Minimal Bootstrap Contract
10. Security / Cache / Referrer Headers
11. Paid / Invalid / Cancelled Handling
12. Feature-Flag Rollback Bridge
13. Explicit Non-Changes
14. Static / Syntax Checks
15. Automated / Mock Checks
16. Required Local Regression
17. Rollback
18. ZIP SHA256
19. Stop Point
```

## 23. Stop point

After generating V0.2.8 ZIP and report, STOP.

Do not start Step 3.
Do not register REST routes.
Do not implement Invoice Create/Reuse.
Do not implement Hash verification REST.
Do not implement Sandbox REST.
Do not add Project-2 S5/S6 final visual UI.
Do not modify Step 04.
