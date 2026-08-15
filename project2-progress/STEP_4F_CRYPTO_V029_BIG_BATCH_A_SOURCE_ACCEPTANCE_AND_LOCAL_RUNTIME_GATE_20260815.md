# Step 4F · Crypto V0.2.9 BIG BATCH A Source Acceptance and Local Runtime Gate

Date: 2026-08-15
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Input and decision context

This review evaluates the single compressed BIG BATCH A delivery produced from the V0.2.8 source scaffold under:

`STEP_4F_CRYPTO_PLUGIN_POST_V028_BATCH_COMPRESSION_DECISION_20260815.md`

Returned artifacts:

- `spatial-flow-crypto-pay-trial-v0.2.9.zip`
- `Spatial-Flow-Crypto-Pay-Trial-V0.2.9-Crypto-Workspace-Backend-Complete-Delivery-Report.md`

Independent ZIP SHA256:

`d85028a0bfc92cd15aec5ace8892119f3cd9ff35083e65c3c70990de56cdf56a`

It matches the delivery report.

## 2. Independent source review performed

Project 2 did not rely only on the delivery report.

Independent checks included:

- V0.2.8 -> V0.2.9 file-level SHA comparison;
- ZIP root/file inventory inspection;
- `php -l` on every PHP file;
- source inspection of REST permissions and request-origin checks;
- Workspace Token validation/actor/epoch boundaries;
- Invoice create/reuse service and reusable-state rules;
- MySQL advisory-lock implementation and timeout/release path;
- transaction-hash verification and rate-limit sequencing;
- duplicate transaction race handling;
- settlement/payment_complete() idempotency boundary;
- Sandbox authorization and shared settlement path;
- response serializer leakage boundary;
- temporary order-pay Workspace bootstrap markup;
- legacy `/crypto-pay/` wrappers and rollback path;
- comparison of retained TronGrid verification functions against V0.2.8;
- comparison of `SF_Crypto_Pay_Gateway::process_payment()` against V0.2.8.

## 3. Package identity and change scope

Independent comparison confirms:

Added:

`includes/class-sf-crypto-pay-order-lock.php`

Changed:

- `spatial-flow-crypto-pay.php`
- `includes/class-sf-crypto-pay-invoice-service.php`
- `includes/class-sf-crypto-pay-payment-service.php`
- `includes/class-sf-crypto-pay-response.php`
- `includes/class-sf-crypto-pay-rest-controller.php`
- `includes/class-sf-crypto-pay-workspace-token.php`
- `includes/class-sf-crypto-pay-workspace.php`
- `templates/crypto-order-pay-workspace.php`

Byte-identical to V0.2.8:

- `templates/crypto-pay-page.php`
- `assets/crypto-pay.js`
- `assets/crypto-pay.css`

The two retained TronGrid verifier function bodies are byte-identical to V0.2.8.

`SF_Crypto_Pay_Gateway::process_payment()` is byte-identical to V0.2.8.

## 4. Independent static invariants

PASS:

- all PHP files parse successfully;
- exactly 5 Workspace REST route registrations;
- exactly 1 plugin `payment_complete()` call site;
- no Cron/Worker scheduling implementation;
- no third-party resources in the temporary Workspace template;
- no raw Order Key field in the Workspace template/bootstrap;
- no final S5/S6 fake payment controls in the temporary template;
- legacy `/crypto-pay/` template/JS/CSS remain unchanged;
- legacy admin-post and shortcode paths remain present.

## 5. External platform-boundary verification

Project 2 re-checked current primary-source platform behavior.

WooCommerce current `WC_Shortcode_Checkout::order_pay()` still performs the authoritative order/key/user/payability/stock/guest-email checks before firing:

`before_woocommerce_pay_form($order, $order_button_text, $available_gateways)`

and only afterward loads `checkout/form-pay.php`.

Therefore the V0.2.9 Token issuance/template replacement boundary remains architecturally valid.

WordPress REST cookie authentication still requires a `wp_rest` nonce (normally through `X-WP-Nonce`) to preserve a logged-in user identity. V0.2.9 exposes that nonce for customer/manager bootstrap actors, while Guest authorization remains based on the opaque Workspace Token plus same-origin mutation checks.

MySQL `GET_LOCK()` remains an exclusive session-level named lock, returns 1 on success, and is released by `RELEASE_LOCK()` or when the session terminates. The V0.2.9 `sfcp:<sha1(blog_id:order_id)>` key is below the MySQL name-length limit and uses explicit `try/finally` release.

## 6. BIG BATCH A contract review

Source-level result: PASS for the compressed backend scope.

Verified implemented domains:

- current Workspace/Invoice read;
- idempotent Create/Reuse Invoice;
- Workspace Token route authorization;
- same-origin Guest mutation boundary;
- common order lock family;
- Transaction Hash REST;
- retained TronGrid verifier;
- retryable vs deterministic verification mapping;
- `verification_failed` / `manual_review` handling;
- persistent transaction-attempt rate limiting;
- duplicate transaction protection;
- one settlement/payment_complete() authority;
- success-note idempotency;
- database-only Payment Status;
- manager-only Sandbox REST;
- recovery/bootstrap contract;
- legacy admin-post wrappers around shared services;
- Feature Flag rollback to `/crypto-pay/`.

No source-level blocker was found requiring another plugin-development round before local runtime testing.

## 7. Security observations / non-blocking carryovers

### 7.1 Write Content-Type defense-in-depth

An earlier S4B draft explicitly listed `Content-Type: application/json` as an additional Guest write defense.

V0.2.9 does not separately enforce that header in the permission callback. It does require all mutating routes to present the opaque `X-SF-Workspace-Token` and pass exact same-origin Origin/Referer checks, with `Sec-Fetch-Site` rejection when present. The token is not readable cross-origin and the custom header is not a normal cross-site form capability.

Decision for this gate:

`not a local-runtime blocker`.

BIG BATCH B client code must use JSON requests consistently. If final pre-production hardening later chooses to enforce JSON Content-Type explicitly, that may be folded into the final integration patch rather than creating another standalone plugin cycle.

### 7.2 Fiat -> USDT quote policy remains unresolved

V0.2.9 intentionally preserves the prototype rule:

`WooCommerce numeric order total == expected numeric USDT amount`

There is still no real-time fiat/USDT quote or rate-lock system.

This does not block local backend/Sandbox testing, but it is a production-readiness blocker unless the store deliberately locks a supported currency policy whose conversion semantics are explicitly accepted.

Do not silently mark this solved during BIG BATCH B.

### 7.3 Deferred payment states remain deferred

Still intentionally absent:

- partially paid aggregation;
- overpayment-specific workflow;
- late payment;
- operational expiry/replacement invoice;
- automatic chain monitoring.

The current backend requires a qualifying single submitted transaction hash and accepts the retained first-phase verification semantics.

## 8. Source acceptance decision

```text
Spatial Flow Crypto Pay Trial V0.2.9
BIG BATCH A source/security review: PASS
Installation authorization: YES
Production authorization: NO
Next local install/test target: V0.2.9 only
Rollback package: locally accepted V0.2.7
Workspace final state before/after test unless otherwise stated: OFF
```

V0.2.8 remains an uninstalled source scaffold and does not require a separate local cycle.

## 9. Compressed local runtime gate

Do not recreate the old dozens-of-round-trips process.

One V0.2.9 installation cycle should cover four coherent scenarios:

### Scenario A — Flag OFF legacy regression

- install/activate V0.2.9 without Fatal;
- existing Gateway settings preserved;
- one Crypto order only;
- on-hold;
- legacy `/crypto-pay/`;
- Generate Invoice;
- retained negative verification samples;
- Sandbox -> processing;
- Thank You / notes.

### Scenario B — Flag ON order-pay + backend bootstrap

- OFF -> ON increments epoch once;
- one new Crypto order only;
- on-hold;
- official WooCommerce order-pay URL;
- minimal backend-ready Workspace shell;
- no default payment-method list / duplicate Pay button;
- same order survives refresh/reopen;
- bad Order Key rejected;
- non-Crypto order-pay unchanged.

### Scenario C — Workspace REST backend

Using one disposable Crypto test order:

- Workspace GET;
- Create Invoice POST;
- repeated Create returns same Invoice;
- Payment Status database read;
- malformed Hash is non-destructive;
- known deterministic negative sample persists `verification_failed`;
- known retryable/unconfirmed sample does not persist failure;
- duplicate transaction sample rejected;
- manager Sandbox succeeds once and repeated Sandbox remains idempotent;
- confirmed paid order reload reaches canonical WooCommerce result.

A new real blockchain payment is not required for this local gate; the already-tested negative transaction samples plus Sandbox success cover the backend paths without incurring another real transfer fee.

### Scenario D — rollback bridge

- create/retain an unpaid Workspace ON order-pay URL;
- turn Workspace OFF;
- same valid order-pay URL returns to the same order on legacy `/crypto-pay/`;
- new Crypto Checkout while OFF also uses legacy route;
- leave Workspace OFF after testing.

## 10. Stop point

BIG BATCH A is source-accepted but not runtime-closed until the single compressed local regression passes.

After runtime PASS:

`BIG BATCH A CLOSED -> BIG BATCH B Project-2 Step-03 Live Visual/System Integration`

Step 04 remains separate.