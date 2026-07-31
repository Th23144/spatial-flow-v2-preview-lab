# Project 2 · Checkout S4B Integration-Contract Review and Corrected Decision

Date: 2026-07-31  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Review result

```text
Submitted contract: technically substantial and directionally correct
Approval status: approved only with the mandatory corrections in this document
Plugin code generation: not yet authorized
Project 2 page modification: not yet authorized
Checkout status: Not done
```

Reviewed proposal:

```text
Spatial Flow Crypto Pay · Project 2 Integration Contract Proposal
Source baseline: Spatial Flow Crypto Pay Trial 0.2.5
Gateway class: SF_Crypto_Pay_Gateway
Gateway ID: spatial_flow_crypto
```

The proposal correctly answers the S4B architectural questions and supplies a workable service/API decomposition. It must not, however, be implemented verbatim. This decision is authoritative wherever it narrows or corrects the submitted proposal.

## 2. Approved core architecture

The following architecture is approved:

```text
WooCommerce creates the order during Step 03
→ Gateway process_payment()
→ order remains on-hold
→ customer enters a Crypto payment workspace that is still visually Step 03
→ plugin/server creates or restores the invoice
→ customer completes an external USDT/TRON transfer
→ customer submits the TRON transaction hash
→ server verifies through the retained TronGrid verification core
→ server calls payment_complete()
→ customer enters canonical WooCommerce Order Received / Step 04
```

Approved ownership split:

```text
Project 2:
- Step-03 visual shell
- customer interaction and status presentation
- fixed USDT / TRON confirmation presentation
- invoice/waiting/rejection layouts
- responsive behavior

Crypto plugin / WordPress server:
- order authorization
- invoice creation and persistence
- true amount and receiver address
- TRON environment
- transaction verification
- duplicate and old-transaction protection
- Sandbox authorization
- payment success decision
- payment_complete()
- WooCommerce order status

WooCommerce:
- order authority
- stock/payment-completion lifecycle
- emails
- canonical order-received result
```

## 3. Approved transport direction

Approved direction:

```text
server-rendered Step-03 workspace bootstrap
+ same-origin WordPress REST JSON operations
+ existing admin-post path retained as rollback compatibility
+ WooCommerce order-pay used as the unfinished-payment recovery route
```

The WooCommerce order-pay endpoint is the preferred recovery surface because the order already exists and still requires payment. It remains visually Step 03, not a fifth Checkout step.

The final implementation must prevent the normal order-pay gateway-selection/payment form from being rendered underneath or alongside the dedicated Crypto workspace. The plugin implementation plan must name the exact WooCommerce hooks or template boundary used to render the workspace and suppress duplicate payment UI.

## 4. Approved server operations

The following operations are approved in principle:

```text
Create or Reuse Invoice
Get Current Invoice / Workspace Bootstrap
Submit Transaction Hash
Get Payment Status
Sandbox Simulate Success
Recover Unfinished Payment
```

Approved route family:

```text
/wp-json/sf-crypto/v1/orders/{order_id}/workspace
/wp-json/sf-crypto/v1/orders/{order_id}/invoice
/wp-json/sf-crypto/v1/orders/{order_id}/invoice/{invoice_id}/transaction
/wp-json/sf-crypto/v1/orders/{order_id}/payment-status
/wp-json/sf-crypto/v1/orders/{order_id}/invoice/{invoice_id}/sandbox-success
```

Exact route names may change only if the implementation provides a documented compatibility reason. Response semantics and ownership may not change silently.

## 5. Mandatory correction: guest authorization model

The submitted proposal says the browser should send both:

```text
X-SF-Order-Key
X-SF-Crypto-Nonce
```

while also stating that Project 2 front-end must not read or control the Order Key. That is internally inconsistent.

Corrected first-phase rule:

```text
The raw WooCommerce Order Key is validated during the server-rendered order-pay workspace bootstrap.
The browser-side application must not repeatedly transmit the raw Order Key to every REST operation.
```

The plugin must mint a short-lived, opaque, order-scoped workspace credential after successful server-side order-pay authorization.

Required properties:

```text
- bound to order_id
- bound to Gateway ID spatial_flow_crypto
- bound to a non-reversible digest of the Order Key, not the raw key
- bound to customer ownership for logged-in orders
- time-limited
- same-origin only
- invalid after payment, cancellation or explicit expiry
- never written to plugin logs
- never included in analytics
- never returned in normal invoice/payment JSON fields
```

Acceptable implementation forms:

```text
A. HttpOnly + Secure + SameSite cookie carrying a signed opaque workspace token,
   plus a separate CSRF token available to the same-origin front end;

or

B. a short-lived signed opaque workspace token rendered into the Step-03 bootstrap,
   sent in a dedicated header, with the raw Order Key never re-sent by JavaScript.
```

A plain guest `wp_create_nonce()` without a documented order-specific binding is insufficient. The implementation must document token generation, verification, expiry and invalidation.

Administrator Sandbox additionally requires:

```text
logged-in session
manage_woocommerce
standard WordPress REST nonce
valid order-scoped workspace authorization
sandbox_mode = yes
order / invoice relationship validation
```

## 6. Mandatory correction: order eligibility

The gateway deliberately places unresolved Crypto orders in:

```text
on-hold
```

Therefore REST authorization must not blindly reject the order merely because a generic WooCommerce `needs_payment()` check does not regard every on-hold order as normally payable.

Approved eligibility rule:

```text
payment method = spatial_flow_crypto
AND order is not paid
AND order status is one of the explicitly approved Crypto-workspace states
AND order is not refunded, cancelled, trash or completed
```

Initial allowed WooCommerce statuses:

```text
on-hold
pending, only where reached through a documented recovery or migration path
failed, only where the plugin explicitly permits retry
```

`on-hold` is the primary expected state.

The implementation must not globally filter WooCommerce payable statuses for all gateways merely to make this plugin work. Eligibility must remain scoped to `spatial_flow_crypto`.

## 7. Mandatory correction: first-phase invoice expiry

The submitted proposal makes `expired` operational and permits creation of a replacement invoice. That is not approved for the first integration revision.

Reasons:

```text
- V0.2.5 uses a fixed receiver address
- there is no rate lock
- there is no automatic late-payment detector
- there is no late-payment reconciliation workflow
- creating a replacement invoice can complicate attribution of a transfer sent around the expiry boundary
```

Corrected first-phase rule:

```text
- keep the existing expires_at field for compatibility
- do not display a live countdown as an operational promise
- do not automatically mark invoices expired
- do not automatically create a replacement invoice because time elapsed
- keep one reusable active invoice per unpaid order
```

Operational `expired`, replacement-invoice creation and late-payment handling are deferred to a dedicated later phase.

The first-phase state model is therefore:

```text
waiting_payment
verification_failed
manual_review
cancelled
paid_confirmed
```

`expired` may remain a reserved future state but is not implemented as active customer behavior in the first revision.

## 8. Mandatory correction: no fake automatic monitoring

The submitted proposal correctly states that `Get Payment Status` must not call TronGrid. Therefore periodic polling is not a payment detector.

Corrected first-phase behavior:

```text
Call status/bootstrap:
- on initial page load
- after create/reuse invoice
- after transaction-hash submission
- after Sandbox simulation
- when the page regains focus
- when the customer explicitly chooses Refresh status
```

Do not run default 10–15 second continuous polling in the first revision.

The UI must state truthfully:

```text
Payment verification requires the customer to submit the TRON transaction hash.
```

Automatic detection, background monitoring, Worker, Cron and Webhook remain deferred.

## 9. Mandatory correction: transaction hash is primary, not fallback

V0.2.5 has no automatic chain monitoring. The transaction-hash form is therefore the real payment-verification action in the first revision.

Approved UI rule:

```text
- show transfer instructions first
- clearly explain where to find the transaction hash
- present the hash field as the required verification step after payment
- do not hide it behind language implying the site is already watching the chain automatically
```

It may use a progressive disclosure such as:

```text
I have completed the transfer
```

but the customer must understand that submitting the hash is required for confirmation.

## 10. Approved invoice-creation timing

The user already clicks:

```text
Continue to Create Crypto Invoice
```

on the fixed USDT/TRON confirmation surface.

Approved behavior:

```text
- that action submits the WooCommerce Checkout and creates the order
- process_payment redirects to the Step-03 order-pay workspace
- the workspace automatically performs one idempotent Create or Reuse Invoice request
- if creation fails, the page shows a retry action
- the customer is not asked to click a redundant second Generate Invoice button
```

The old `/crypto-pay/` page may continue to require its existing button while it remains the rollback path.

## 11. Approved QR and countdown scope

First integration revision:

```text
QR code: deferred
operational countdown: deferred
```

Reasons:

```text
- V0.2.5 has no QR payload contract
- no payment URI format has been approved
- expiry is not operational in the first revision
```

The S5 visual shell must not reserve a mandatory empty QR/countdown feature as if it is already available. These can be added later as independent bounded capabilities.

## 12. Approved customer-facing language

First-phase customer interface language:

```text
English, consistent with the current storefront
```

Customer-visible errors receive safe plain-language messages.

Internal codes such as:

```text
receiver_mismatch
old_transaction
wrong_token
amount_too_low
duplicate_tx
tron_api_error
```

may be retained in structured responses and logs, but should not be visually emphasized to the customer by default. Detailed technical diagnostics remain in order notes and plugin logs.

## 13. Approved recovery behavior

Approved recovery URL:

```text
WooCommerce order-pay URL generated by the server
```

First-phase customer support:

```text
- show a Copy payment-recovery link action inside the workspace
- permit reopening the same order-pay URL after closing the browser
- restore the same active invoice
- redirect already-paid orders to the canonical order-received URL
- refuse payment actions for cancelled orders
```

Adding the recovery link to WooCommerce emails is deferred until the workspace itself has passed local regression testing.

No new My Account feature is required in this phase.

## 14. Approved rollback boundary

The existing:

```text
/crypto-pay/
[sf_crypto_pay]
admin-post actions
```

must remain functional during the first integration revision.

They serve as:

```text
rollback path
regression comparison path
debug path
```

The new workspace must be feature-flagged or otherwise independently reversible. Disabling it must restore the V0.2.5 redirect path without database rollback.

The old page is not deleted or visually redesigned in the first plugin revision.

## 15. Approved unified response model

Approved top-level fields:

```text
success
code
message
retryable
order
invoice
payment
actions
redirect_url
```

Approved customer-readable invoice/payment fields:

```text
order id / number
WooCommerce status
fiat currency and amount
invoice id
asset code = USDT
network code = TRON
network label
environment
expected amount decimal
receiver address
invoice status
customer-safe rejection code/message
transaction hash after successful verification
paid amount after successful verification
Sandbox flag
action permissions
server-generated order-received URL after authorized success
```

Never return:

```text
raw Order Key
TronGrid API key
private key or seed phrase
raw TronGrid response
SQL errors
stack traces
other orders or invoices
reusable authorization material inside normal business JSON
```

All monetary values remain decimal strings, not binary floating-point JSON numbers.

## 16. Approved idempotency and concurrency requirements

Required:

```text
- one active invoice per unpaid order
- repeated workspace load returns the same invoice
- repeated successful Hash submission returns the existing success result
- payment_complete() executes at most once
- success order notes are not duplicated
- transaction record is not duplicated
- Sandbox success executes at most once
- other-order duplicate Hash returns conflict
```

Invoice creation must use a server-side order-scoped lock with a documented failure and release path.

The implementation proposal must name the selected locking mechanism before code generation. Front-end button disabling is not an acceptable concurrency control.

## 17. Approved implementation decomposition

Approved decomposition:

```text
REST controller
Crypto service layer
Workspace renderer/bootstrap
legacy admin-post wrappers
```

Existing verification functions should be preserved unless a specific defect is found:

```text
sf_crypto_pay_verify_tron_usdt_payment()
sf_crypto_pay_verify_tron_usdt_payment_from_txinfo()
TRON address-normalization helpers
Mainnet / Nile / Shasta configuration helpers
```

Existing redirect handlers should become compatibility wrappers around shared services rather than separate duplicated business logic.

## 18. First plugin-development revision scope

Required:

```text
- extract shared invoice service
- extract shared transaction-verification/settlement service
- unified response serializer
- order-scoped workspace authorization
- Create or Reuse Invoice REST operation
- Workspace/Get Invoice bootstrap operation
- Submit Transaction Hash REST operation
- Get Payment Status operation without chain polling
- administrator-only Sandbox REST operation
- order-pay Step-03 workspace integration boundary
- feature flag / rollback to existing /crypto-pay/ path
- old admin-post compatibility
```

Explicitly deferred:

```text
multi-asset
customer-selectable networks
USDC / BTC
Ethereum / Solana / Bitcoin / BNB / Base / Arbitrum
wallet connection
QR code
operational countdown and expiry
automatic monitoring
Worker / Cron / Webhook
real-time quote system
automatic refund
WooCommerce Blocks gateway registration
```

## 19. Required evidence before Project 2 page work

The plugin workstream must first produce an implementation plan, not code, that resolves:

```text
1. exact order-pay rendering hook/template boundary
2. exact workspace-token generation, storage, expiry and validation
3. exact CSRF protection for guest REST actions
4. exact order eligibility check for on-hold Crypto orders
5. exact order-scoped locking mechanism
6. exact feature-flag and rollback behavior
7. exact database migration impact, if any
8. exact regression test list for the old path
9. exact unit/integration/manual test list for the new path
10. exact files to add or modify
```

Only after that implementation plan is reviewed may plugin code generation begin.

## 20. Current project stop point

```text
S4A plugin-agnostic reference: accepted and closed
S4B capability alignment: complete
S4B integration-contract proposal: received
S4B corrected contract decision: complete
Plugin implementation plan: required next
Plugin code generation: not authorized
S4A gateway-specific static adaptation: not started
S5 static Invoice / Waiting shell: not started
Live Checkout modification: not started
Checkout: Not done
```
