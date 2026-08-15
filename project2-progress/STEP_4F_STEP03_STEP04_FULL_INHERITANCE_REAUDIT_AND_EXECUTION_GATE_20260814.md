# Step 4F · Step 03 / Step 04 Full Inheritance Re-audit and Execution Gate

Date: 2026-08-14
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Trigger

After Batch 6 end-to-end closure, the user stopped progression and explicitly required a full repository/memory inheritance review before any Step-03 or Step-04 work.

The user clarified that Step 03 is not a simple visual reskin. It is the payment-system integration surface, has multiple accepted reference subviews/states, must cooperate with the separately developed Spatial Flow Crypto Pay plugin, and must reserve a safe architecture for future WooCommerce payment methods.

The user also reaffirmed that Step 04 is a substantial WooCommerce server-status-driven result system, not a cosmetic Thank You page.

No live source, plugin source, WooCommerce setting or preview artifact was modified during this inheritance audit.

## 2. Documents and reference families reviewed

This re-audit reviewed the Project-2 execution policies and the relevant Step-03/Step-04 architecture chain, including:

- `PROJECT2_RESUME_INDEX.md`
- `PROJECT2_DOCS_INDEX.md`
- `PROJECT2_CURRENT_STATE.md`
- `PROJECT2_NEXT_WINDOW_PROMPT.md`
- `PROJECT2_STEP_RECORDING_POLICY.md`
- `PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md`
- `PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md`
- `PROJECT2_CSS_MAINTENANCE_POLICY.md`
- `PROJECT2_MANUAL_REPLACEMENT_AND_FILE_SIZE_AUDIT_POLICY.md`
- `project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md`
- `project2-progress/STEP_4F_CHECKOUT_STATIC_FLOW_COMPLETION_PLAN.md`
- `project2-progress/STEP_4F_LIVE_CHECKOUT_BOUNDED_RECONSTRUCTION_PLAN.md`
- Step-03 Payment V2 audit/implementation/acceptance records
- Payment Host extensibility records
- S4A future Crypto selector records
- S4B plugin capability/alignment/integration-contract records
- V0.2.6 / V0.2.6.1 bounded plugin Step-1 records
- S5 Preparing / Invoice / Waiting records
- S6 verification/recovery state records
- S7 Step-04 result records
- S8 linked-flow/session records
- S9 responsive static acceptance records

The actual static reference source family was also reviewed, including the Payment Host, fixed USDT/TRON Crypto Workspace, S6 state layer, future multi-asset Workspace and Step-04 result artifacts.

## 3. Correction to the previous post-Batch-6 framing

The earlier post-Batch-6 record correctly established that Step 03 had not yet been proven under the later strict micro-1:1 standard, but describing the next operation primarily as a `strict 1:1 re-audit` is too narrow.

The correct Step-03 scope is:

```text
Generic live WooCommerce Payment Host
+ real eligible gateway rendering
+ gateway-family presentation adapters / safe native fallback
+ one authoritative final action zone
+ dedicated Crypto Step-03 Workspace lifecycle
+ plugin/server integration and rollback boundary
+ future gateway extensibility
+ strict visual/source/computed parity
+ backend-editable presentation copy
+ security and server-authority preservation
```

Therefore Step 03 must be treated as a bounded payment-system integration project, not as a CSS-only or layout-only correction.

This record expands and supersedes only the scope framing of:

`STEP_4F_POST_BATCH6_ROUTE_RECONCILIATION_STEP03_STRICT_REAUDIT_20260814.md`

That earlier record remains historically valid in stating that Step-03 final strict 1:1 was not yet proven.

## 4. Locked Step-03 business architecture

The customer-visible Checkout progression remains:

```text
01 Address
→ 02 Shipping + Product Packaging
→ 03 Payment
→ 04 WooCommerce result
```

Step 03 owns the full payment lifecycle up to server-confirmed settlement.

For a normal gateway, Step 03 may complete through inline secure fields or a gateway redirect/hosted handoff.

For Cryptocurrency, the approved technical sequence is:

```text
select Crypto in Step 03
→ one native WooCommerce Checkout submission
→ WooCommerce creates the order
→ Crypto gateway process_payment()
→ unresolved order becomes on-hold
→ dedicated Crypto Workspace that is still visually Step 03
→ create or restore one active invoice
→ Preparing
→ Waiting for payment
→ customer transfers externally
→ customer submits TRON transaction hash
→ plugin/server verifies
→ deterministic failure / retryable error / manual review / recovery where applicable
→ server alone calls payment_complete()
→ paid-confirmed transition boundary
→ canonical WooCommerce Step 04
```

No Crypto Workspace state may become a fifth Checkout business step.

## 5. Generic Payment Host / future gateway contract

WooCommerce remains the authoritative gateway registry and eligibility source.

The Step-03 host must support real gateway families without rebuilding the entire page:

```text
inline secure fields
express wallets when actually eligible
redirect / hosted handoff
Crypto dedicated workspace
offline / delayed instructions
unknown eligible gateway safe Woo-native fallback
```

Project 2 must never hardcode a fake permanent payment-method list.

A future eligible gateway may require a small presentation adapter, but it must not require rebuilding Address, Shipping, Product Packaging, Order Summary, progress navigation or the whole Payment page.

Empty capability zones must not render blank boxes merely to preserve a static composition.

## 6. Accepted static Step-03 reference family

Already accepted as STATIC architecture/presentation references:

```text
Main Payment Host:
preview/spatial-flow-checkout-payment-v1.html
preview/spatial-flow-checkout-payment-host-v1.css
preview/spatial-flow-checkout-payment-host-v1.js

Future multi-asset selection study:
preview/spatial-flow-checkout-crypto-select-v1.html
preview/spatial-flow-checkout-crypto-v1.css
preview/spatial-flow-checkout-crypto-v1.js

Current fixed-USDT/TRON Workspace:
preview/spatial-flow-checkout-crypto-invoice-v1.html
preview/spatial-flow-checkout-crypto-invoice-v1.css
preview/spatial-flow-checkout-crypto-invoice-v1.js

Supported verification/recovery states:
preview/spatial-flow-checkout-crypto-states-v1.css
preview/spatial-flow-checkout-crypto-states-v1.js

Future integrated multi-asset Workspace architecture reference:
preview/spatial-flow-checkout-crypto-workspace-future-v1.html
preview/spatial-flow-checkout-crypto-workspace-future-v1-base.css
preview/spatial-flow-checkout-crypto-workspace-future-v1.css
preview/spatial-flow-checkout-crypto-workspace-future-v1.js
```

These references do not themselves create WooCommerce orders, invoices, blockchain verification or payment status.

## 7. Current fixed-USDT/TRON scope

The accepted current first-phase Crypto customer capability remains:

```text
Asset: USDT
Network: TRON / TRC20
Customer asset/network selection: unavailable
```

Therefore the current production route must bypass the future multi-asset selector.

Current fixed-pair route:

```text
Step-03 Payment Host
→ Crypto selected
→ one final Checkout commitment
→ dedicated fixed-USDT/TRON Workspace
```

The S4A selector and future multi-asset Workspace remain isolated references until the payment backend genuinely supports multiple customer-selectable asset/network pairs.

## 8. Accepted fixed Crypto Workspace state family

Static references already establish these internal Step-03 states:

```text
Preparing invoice
bootstrap failure / retry
Waiting for payment
verification_failed
retryable temporary verification error
manual_review
cancelled
unfinished-payment recovery
paid_confirmed transition boundary
```

Supported deterministic verification-failure examples include:

```text
receiver mismatch
old transaction
wrong token / no qualifying USDT transfer
amount too low
duplicate transaction
```

Explicitly excluded from the first integration phase unless separately implemented and tested:

```text
automatic chain monitoring
continuous polling presented as monitoring
live confirmation-count progress
operational invoice expiry
replacement invoice after elapsed time
automatic partial / over / late-payment workflows
QR
wallet connection
production multi-asset routing
```

Transaction-hash submission remains the required real verification action under the established first-phase architecture.

## 9. Crypto plugin ownership and approved integration architecture

Locked ownership split:

```text
Project 2 theme / Checkout:
- Step-03 visual shell
- gateway presentation
- customer interaction/status presentation
- responsive composition

Spatial Flow Crypto Pay plugin / WordPress server:
- order/workspace authorization
- invoice create/reuse and persistence
- true amount
- true receiver address
- environment
- transaction verification
- duplicate/old-transaction protection
- Sandbox authorization
- payment success decision
- payment_complete()

WooCommerce:
- order authority
- native gateway registry/eligibility
- stock/payment lifecycle
- emails
- canonical Step-04 result
```

Approved future Workspace direction from the existing integration contract:

```text
server-rendered WooCommerce order-pay based Step-03 bootstrap
+ same-origin server operations / REST JSON
+ short-lived opaque order-scoped Workspace authorization
+ one order-scoped server write lock for mutating Crypto operations
+ legacy /crypto-pay/ and admin-post flow retained as rollback compatibility
```

The raw WooCommerce Order Key must not become normal front-end REST authorization material.

## 10. Plugin implementation status: unresolved current-runtime baseline

Repository history establishes:

```text
V0.2.5:
- verified legacy working baseline
- /crypto-pay/ path
- fixed USDT/TRON
- manual transaction-hash verification
- Sandbox path

V0.2.6 / V0.2.6.1:
- bounded Plugin Step-1 scaffolding only
- inert/default-off Project-2 Workspace feature flag
- version/option compatibility work
- no real REST Workspace
- no order-pay replacement
- no Workspace Token
- no Workspace implementation
- no Plugin Step-2 implementation proven by the reviewed repository records
```

A 2026-08-02 live-source verification still identified V0.2.5 as the actual supplied current artifact. Batch 6 on 2026-08-14 confirms that the legacy Crypto order/on-hold `/crypto-pay/` path still works, but it does not establish the exact currently installed plugin version or prove any later Workspace implementation.

Therefore the exact current Crypto plugin runtime/source baseline MUST be re-established before authorizing Step-03 Workspace integration.

Do not assume V0.2.5 or V0.2.6.1 without current evidence.

## 11. Step-04 architecture inherited and locked

Step 04 is not a generic success skin and is never a second payment/confirmation action.

Production Step 04 must be selected from the real WooCommerce order object/status.

Required real status families:

```text
processing / completed
→ Confirmed / paid semantics

pending / on-hold
→ Pending / unpaid semantics
→ fulfillment not started
→ valid WooCommerce payment recovery when available

failed
→ Failed
→ safe WooCommerce retry-payment route when available

cancelled
→ Cancelled
→ no success claim

refunded
→ Refunded / support-oriented semantics
```

The accepted Confirmed/Pending static S7 pages are presentation references, not sufficient production state logic.

The live implementation must preserve real order details, guest-order authorization, WooCommerce gateway-specific thank-you output and Woo-generated recovery URLs.

Browser query parameters may never choose the real Step-04 status.

## 12. Immediate execution gate

No Step-03 visual patch, plugin modification or Step-04 modification is authorized by this inheritance record.

Immediate next operation is a READ-ONLY CURRENT BASELINE AUDIT covering:

```text
A. current live child-theme Step-03 owners
B. current installed Crypto plugin package/source + version
C. current project2_workspace_enabled / related plugin feature state if present
D. whether any real Plugin Step-2 REST/order-pay/Workspace code exists
E. current WooCommerce enabled/eligible gateway set and relevant live DOM
F. current legacy /crypto-pay/ rollback path
G. current thankyou.php / Step-04 live ownership
```

Only after this current baseline is proven may the project decompose and authorize the live Step-03 integration work.

## 13. Expected high-level execution sequence after baseline

```text
1. Freeze and verify current live/theme/plugin/gateway baseline
2. Reconcile main Step-03 generic Payment Host against current strict source/computed standard
3. Determine plugin readiness:
   - if only legacy/Step-1 exists, resume the separate plugin workstream first
   - do not fake Workspace capabilities in theme code
4. Implement/verify server-authoritative Crypto Workspace integration in bounded plugin phases
5. Connect accepted S5/S6 Project-2 presentation to real server data/states
6. Preserve and regression-test legacy /crypto-pay/ rollback path during first integration revision
7. Verify future-gateway native fallback/extensibility
8. Complete Step-03 strict visual/functional/security/end-to-end acceptance
9. Resume R2 notice/error ownership (Batch 7)
10. Implement real Step-04 WooCommerce status matrix (R4 / later Batch 9)
11. Historical Checkout CSS cleanup
12. Crypto/full-commerce regression
13. Final Checkout strict 1:1 closure
```

## 14. Current stop point

```text
Batch 6: accepted and closed
Step 02 / Product Packaging: closed
Step 03 old R1 structural/functional migration: completed
Step 03 full payment-system / Workspace / final strict closure: NOT COMPLETE
Static S4A/S5/S6/S7/S8/S9 references: accepted as references only
Real Crypto Workspace integration: NOT PROVEN / NOT COMPLETE
Real Step-04 full Woo status matrix: NOT COMPLETE
Batch 7: PAUSED
Live code change authorized now: NO
Immediate next task: current baseline audit
```
