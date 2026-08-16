# Step 4F · BIG BATCH B · Step-03 Full Execution Entry and Ownership

Date: 2026-08-15
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Entry state

```text
Batch 6 R1 end-to-end: FINAL CLOSED
Step 02 / Product Packaging: FINAL CLOSED
Crypto BIG BATCH A / V0.2.9 backend: FINAL CLOSED
Project 2 Crypto Workspace Feature Flag: OFF after backend acceptance
BIG BATCH B: STARTED
```

The user explicitly requested compressed execution. BIG BATCH B therefore remains one coordinated Step-03 implementation batch rather than being split back into historical S5/S6 micro-cycles.

## 2. Current live Step-03 baseline

The current live theme already owns the correct generic Step-03 architecture:

```text
woocommerce/checkout/form-checkout.php
→ Step-03 shell / copy / context / WooCommerce payment mount

woocommerce_checkout_payment()
→ native WooCommerce payment DOM
→ real eligible gateway list
→ native gateway payment_box / iframe / nonce content
→ native Terms/privacy
→ one native #place_order

assets/js/checkout-safe5.js
→ Step state
→ Step-03 context synchronization
→ WooCommerce-native submission preservation

assets/css/checkout-safe5.css
→ Step-03 presentation
```

The current theme must NOT be converted into a second payment-gateway registry.

WooCommerce remains the only real gateway registry and eligibility authority.

## 3. Main Payment Host decision

The existing Step-03 PHP ownership is structurally correct and should remain stable unless a concrete strict-parity defect requires markup change.

The main visible defect is presentation: the current native gateway entries still read as rounded/white SAFE5 cards, while the accepted Step-03 reference uses a flatter editorial payment-host language.

Therefore the main Payment Host work is primarily a bounded CSS parity correction around the existing native DOM:

```text
#payment
ul.payment_methods
li.wc_payment_method
native checked state
.payment_box
privacy / Terms
.place-order
#place_order
```

Do not hardcode gateway count, gateway ID, labels, fake Card/Wallet rows or Crypto-only main-page registry logic.

Future eligible gateways must continue to render through WooCommerce native fallback automatically.

## 4. Crypto Workspace ownership decision

V0.2.9 now owns the secure order-pay boundary and backend truth:

```text
WooCommerce order-pay authorization
Workspace Token
REST
Invoice Create/Reuse
amount / receiver / TRON environment
transaction-hash verification
verification state
rate limiting
settlement lock
Sandbox authorization
payment_complete()
WooCommerce paid state
rollback bridge
```

Project 2 owns the customer-facing Step-03 Crypto Workspace presentation.

For BIG BATCH B, the clean integration boundary is:

```text
plugin order-pay template = semantic Workspace mount + secure bootstrap
plugin dedicated Project-2 Workspace JS/CSS = customer presentation/client coordinator
V0.2.9 backend/service classes = unchanged unless a concrete integration defect is found
```

This keeps the order-pay Workspace self-contained on the page where the plugin already owns the verified bootstrap and avoids adding theme-level order-key/bootstrap logic.

Visual ownership is still Project-2 authority even though the dedicated Workspace presentation assets physically ship with the Crypto plugin package.

## 5. One coordinated implementation release

BIG BATCH B should produce one bounded Crypto plugin presentation release based on the accepted V0.2.9 backend and one bounded live-theme Payment-Host parity patch.

### Plugin presentation scope

Allowed:

```text
templates/crypto-order-pay-workspace.php
new dedicated Project-2 crypto-workspace CSS
new dedicated Project-2 crypto-workspace JS
minimum plugin enqueue/version wiring required for those assets
```

Backend/service/security classes from V0.2.9 should remain byte-identical unless an objectively proven integration defect requires correction.

The dedicated Workspace frontend must implement, against real V0.2.9 REST truth:

```text
Preparing Invoice
Create-or-Reuse automatically once
Invoice Ready / Waiting for Payment
USDT / TRON / environment
server amount
server receiver address
copy address / copy amount where appropriate
truthful transfer instructions
required TRON Transaction Hash input
Hash submit
explicit Refresh status
focus recovery / page-load recovery
verification_failed
retryable temporary verification error
manual_review
cancelled / terminal
paid_confirmed transition
manager Sandbox control only when backend actions permit
recovery guidance / reload-order-pay model
```

No default interval polling.
No fake chain monitoring.
No fake countdown.
No active expiry.
No replacement Invoice.
No QR in this batch.
No multi-asset or customer network selector.

When `payment.confirmed === true` or `actions.reload_for_canonical_result === true`, the client reloads the already-authorized order-pay page so the existing V0.2.9 server boundary performs the canonical WooCommerce Step-04 redirect. The browser must not manufacture a success URL.

## 6. Workspace state mapping

Use server response truth, not static demo state switches.

High-level UI mapping:

```text
no invoice + can_create_invoice
→ Preparing Invoice
→ POST create/reuse

invoice waiting_payment
→ Waiting for payment
→ transfer details + required Hash verification action

verification_failed
→ deterministic rejection panel
→ show safe server reject_message
→ permit another Hash only if actions.can_submit_tx

retryable REST / provider response
→ temporary verification error
→ do not label Invoice as failed
→ permit retry / refresh according to response

manual_review
→ review state
→ stop automatic customer transaction submission

cancelled / order_terminal
→ terminal state
→ no payment controls

payment confirmed / can_enter_step_04
→ paid-confirmed transition
→ reload current order-pay page
→ server redirects to canonical WooCommerce result
```

Customer-visible messages must remain safe and may use the server-provided customer-safe `message` / `reject_message`. Internal provider/SQL details must never be surfaced.

## 7. Accepted visual reference family

BIG BATCH B must use the already accepted static family as the presentation authority:

```text
preview/spatial-flow-checkout-payment-v1.html
preview/spatial-flow-checkout-payment-host-v1.css
preview/spatial-flow-checkout-payment-host-v1.js

preview/spatial-flow-checkout-crypto-invoice-v1.html
preview/spatial-flow-checkout-crypto-invoice-v1.css
preview/spatial-flow-checkout-crypto-invoice-v1.js

preview/spatial-flow-checkout-crypto-states-v1.css
preview/spatial-flow-checkout-crypto-states-v1.js
```

Static demo data and static state switchers are NOT production authority.

Future multi-asset references remain isolated and are not imported into current production behavior.

## 8. Strict-parity rule

For the main Step-03 Payment Host and the Crypto Workspace:

```text
reference source
vs
live source
vs
runtime/computed values
```

must be compared.

Screenshot similarity alone is not final acceptance.

Dynamic WooCommerce/plugin data may differ from static fixtures, but that does not excuse avoidable typography, spacing, border, surface, selected-state, responsive or hierarchy drift.

## 9. Responsive acceptance

The coordinated implementation must be usable and visually coherent at minimum:

```text
1366×768
390×844
360×800
```

The Crypto Workspace must not inherit the temporary unstyled V0.2.9 backend-shell appearance.

## 10. Current production limitation retained

V0.2.9 still uses the WooCommerce numeric order total as the same numeric USDT amount and does not implement fiat→USDT quote/rate locking.

BIG BATCH B must not hide or misrepresent this limitation.

It does not block local UI/system integration, but production rollout remains blocked until a shop-currency / quote policy is separately resolved.

## 11. Regression boundary

BIG BATCH B must preserve:

```text
Address Step 01
Shipping Step 02
Product Packaging
Coupon
Order Summary
normal WooCommerce gateway selection
normal gateway native fields/iframes/nonces
Terms/privacy
one #place_order
normal gateway order creation
Crypto one-order creation
Packaging persistence into Crypto order
Feature Flag OFF legacy /crypto-pay/ rollback
```

## 12. No Step-04 implementation here

Step 04 remains a separate major project.

BIG BATCH B may only transition a confirmed Crypto payment into the existing canonical WooCommerce result route. It must not implement the production Step-04 status matrix.

## 13. Execution mode

```text
No return to S5/S6 micro-step approval loops.
No multiple intermediate installation packages unless a blocker is discovered.
One coordinated implementation candidate.
One source/security/parity review.
One combined local acceptance cycle.
```

## 14. Immediate implementation targets

```text
A. Main Step-03 Payment Host strict-parity CSS correction against current checkout-safe5.css
B. Crypto Workspace presentation release based on accepted V0.2.9
C. automatic Create/Reuse + live REST state coordinator
D. responsive/state CSS covering normal/error/review/terminal/success transition states
E. combined static/syntax/security regression before user installation
```

Status after this record:

```text
BIG BATCH B: ACTIVE
Current operation: coordinated implementation candidate build
Step 04: NOT STARTED
Checkout: Not done
```
