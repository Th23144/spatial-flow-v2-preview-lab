# Step 4F · Crypto Plugin Step 2A · V0.2.7 Source Acceptance and Local Regression Gate

Date: 2026-08-15
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Inputs reviewed

Returned artifacts:

```text
spatial-flow-crypto-pay-trial-v0.2.7.zip
Spatial-Flow-Crypto-Pay-Trial-V0.2.7-Plugin-Step-2A-Delivery-Report.md
```

Authoritative input baseline retained for direct comparison:

```text
spatial-flow-crypto-pay-trial-v0.2.6.1.zip
SHA256 bddceb858a5314cf679b5c00929d22ff8972cb22e32c7d87a4395c3acb8aa8b2
```

Authorized specification:

```text
project2-progress/STEP_4F_CRYPTO_PLUGIN_STEP2A_V027_AUTHORIZATION_AND_IMPLEMENTATION_PROMPT_20260815.md
```

## 2. Package identity

Independent hash of returned V0.2.7 ZIP:

```text
aa2075c78e5e788bc4bb2e5d111325b122bacea91835819a509a77b19bae7184
```

This matches the Delivery Report.

Archive review:

```text
root: spatial-flow-crypto-pay/
actual source files: same set as V0.2.6.1
path traversal: none
symlinks: none
plugin header: 0.2.7
SF_CRYPTO_PAY_VERSION: 0.2.7
```

## 3. Exact diff result

Independent V0.2.6.1 -> V0.2.7 file comparison confirms exactly four changed files:

```text
spatial-flow-crypto-pay.php
includes/class-sf-crypto-pay-order-guard.php
includes/class-sf-crypto-pay-workspace-token.php
includes/class-sf-crypto-pay-workspace.php
```

All other source files are byte-identical to the accepted V0.2.6.1 baseline, including:

```text
Invoice Service skeleton
Payment Service skeleton
REST Controller skeleton
Response skeleton
legacy crypto-pay template
legacy crypto-pay JS
legacy crypto-pay CSS
```

No file was added or removed.

The legacy `process_payment()` implementation is unchanged between V0.2.6.1 and V0.2.7 and still redirects to `/crypto-pay/` with the existing order ID / key handoff.

## 4. Static / syntax verification

Independent checks:

```text
all 9 PHP source files: php -l PASS
register_rest_route: absent
before_woocommerce_pay_form: absent
woocommerce_locate_template: absent
real checkout/form-pay replacement: absent
new Workspace JS/CSS: absent
```

The only `checkout/form-pay.php` occurrence is explanatory commentary in the Workspace class.

Legacy shortcode/admin-post/Thank You registrations remain present.

## 5. Order Guard review

`SF_Crypto_Pay_Order_Guard` matches the authorized Step-2A boundary:

```text
Gateway must be spatial_flow_crypto
Feature Flag required for Workspace operations
paid orders rejected
allowed unpaid statuses: on-hold + pending
failed rejected
cancelled/refunded/completed/trash rejected
```

The WooCommerce payable-status filter is bounded to:

```text
project2_workspace_enabled = yes
+ real WC_Order
+ spatial_flow_crypto
+ unpaid
+ current status exactly on-hold
```

It appends `on-hold` without replacing WooCommerce's existing valid statuses and does not alter other gateways.

The implementation uses priority 10 / 2 accepted arguments, matching the approved contract.

## 6. Workspace Token review

Scheme B implementation is source-accepted.

Browser token:

```text
v1.<32-byte-random-identifier-base64url>.<HMAC-SHA256-tag-base64url>
```

Verified properties:

```text
random_bytes(32)
30-minute lifetime
HMAC-SHA256
key derived from wp_salt('auth') with plugin-specific context
raw Order Key absent from browser token
raw Order Key absent from transient authorization record
server record keyed by SHA-256 digest of random identifier
separate HMAC-based Order Key digest
constant-time hash_equals comparisons
blog/order/gateway/customer/actor/epoch/status bindings
Feature Flag off -> reject
paid/terminal/unsupported order -> reject
```

Transient early eviction fails closed and does not weaken authorization.

## 7. Actor binding review

Source rules match the locked contexts:

```text
Guest:
- current user must be logged out
- current Step-2A implementation requires order_customer_id = 0

Customer:
- logged-in user must equal order customer

Manager:
- logged-in actor ID is bound
- manage_woocommerce required at issue and validation time
```

No public Token issuance route exists in this release.

## 8. Feature epoch review

The bounded Gateway `process_admin_options()` override is structurally consistent with WooCommerce Settings API behavior:

```text
read persisted old flag
-> parent save
-> reload persisted settings
-> compare final flag
-> increment only on real yes/no transition
```

The existing epoch option is not reset on activation/upgrade.

Expected local behavior:

```text
current pre-install epoch: 1
0.2.7 upgrade: remains 1
OFF -> ON: 2
save ON again: remains 2
ON -> OFF: 3
save OFF again / unrelated setting save: remains 3
```

## 9. Independent bounded security harness

Project-2 review ran an independent mock harness against the returned source.

Result:

```text
18 / 18 PASS
```

Covered independently:

```text
on-hold eligibility
payable filter preservation/addition
verified context establishment
Guest token issue
Token issue/validate
HMAC tamper rejection
wrong expected order rejection
epoch mismatch rejection
Feature Flag off rejection
paid rejection
cancelled rejection
wrong Gateway rejection
Customer issue/validate/mismatch
Manager issue/validate/capability-loss rejection
```

This is not represented as a real WordPress/WooCommerce runtime integration test.

## 10. Important Step-2B forward gate

No blocker exists for Step 2A installation, but one architectural condition is explicitly carried forward:

`SF_Crypto_Pay_Workspace::establish_verified_order_pay_context()` is intentionally only a primitive in V0.2.7. It must NOT be treated as proof that WooCommerce authorization has happened merely because the URL/order key matches.

When Step 2B activates Token issuance, the caller must establish this context only from the post-validation WooCommerce order-pay boundary after WooCommerce has completed its normal:

```text
order ID/key validation
customer/permission validation
needs-payment validation
guest email verification where applicable
stock/payment eligibility validation
```

Step 2B must not expose a custom endpoint that calls this primitive directly from arbitrary browser input.

Also, because the Step-2A `woocommerce_valid_order_statuses_for_payment` filter intentionally makes qualifying on-hold Crypto orders payable while the Feature Flag is ON, the flag should remain OFF except during explicit local Step-2A tests until Step 2B replaces the order-pay presentation with the approved Workspace.

This is a forward integration gate, not a V0.2.7 source rejection.

## 11. Source acceptance decision

```text
Plugin Step 2A V0.2.7 source review: PASS
Returned ZIP identity: PASS
Authorized file scope: PASS
Legacy-path non-change: PASS
Order Guard: PASS
Token construction/bindings: PASS
Feature epoch implementation: PASS at source level
Real WordPress/WooCommerce runtime: still requires local acceptance
```

No correction package is required before local installation.

## 12. Local installation / acceptance gate

User may now back up V0.2.6.1 and install the reviewed V0.2.7 package.

Keep the Project 2 Crypto Workspace flag OFF initially.

Required local checks before Step 2B authorization:

```text
A. upgrade / legacy regression with flag OFF
B. exact feature-epoch transition test
C. bounded flag-ON legacy-path test
D. return flag to OFF at the end
```

Do not start Step 2B until these tests are reported and recorded.

## 13. Current stop point

```text
V0.2.7 source: ACCEPTED
Installation: AUTHORIZED
Step 2A runtime acceptance: PENDING
Step 2B: NOT AUTHORIZED YET
Project-2 Step-03 live modification: NOT AUTHORIZED
```
