# Step 4F · Crypto V0.3.0 BIG BATCH B Runtime Acceptance Plan

Date: 2026-08-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
BIG BATCH B runtime acceptance: OPEN
Acceptance procedure: LOCKED BY THIS RECORD
Runtime testing performed under this record: NO
Current required flag state before B1: OFF
V0.3.0 plugin candidate: KEEP
Theme Step-03 selected-payment experiment: REJECTED / ROLLED BACK / CLOSED
```

## Evidence basis

This plan is derived from the later authoritative records and accepted contracts:

```text
STEP_4F_CRYPTO_BIG_BATCH_A_V029_FINAL_ACCEPTED_20260815.md
STEP_4F_CRYPTO_V029_TO_V030_PAYMENT_WINDOW_HANDOFF_20260816.md
STEP_4F_BIG_BATCH_B_THEME_POST_INSTALL_AUDIT_20260816.md
STEP_4F_SELECTED_PAYMENT_THEME_ROLLBACK_VALIDATION_20260816.md
STEP_4F_FULL_REPOSITORY_DOCUMENT_INHERITANCE_COMPLETE_20260816.md
```

The earlier V0.3.0 candidate record's requirement for a theme-side Selected Payment panel is explicitly superseded by the later post-install audit. This plan does not test or reintroduce that rejected theme layer.

## Accepted baseline that is NOT being re-developed

V0.2.9 BIG BATCH A is FINAL ACCEPTED / CLOSED. Its accepted runtime/security contract includes:

```text
one WooCommerce order
on-hold unpaid semantics
order-pay Workspace boundary
Workspace Token authorization
Create/Reuse Invoice
server-authoritative USDT/TRON amount/address
Payment Status without polling
transaction-hash backend
verification_failed / retryable / manual_review mappings
rate limiting / duplicate protection
payment_complete at-most-once boundary
manager-only Sandbox
refresh/reopen/multi-tab recovery
legacy /crypto-pay/ compatibility
Feature Flag rollback
```

BIG BATCH B therefore validates the V0.3.0 customer presentation over this backend plus critical regression points; it does not repeat the whole backend security audit.

## V0.3.0 expected runtime identity

```text
Plugin: Spatial Flow Crypto Pay Trial
Version: 0.3.0
Gateway ID: spatial_flow_crypto
ZIP SHA256: d7227f52ddd4f1949b1860348b56a956f47723f3d64d5c052f34a2c1ab58fdb9
```

V0.3.0 Workspace assets only load when:

```text
Project 2 Crypto Workspace = ON
Woo endpoint = order-pay
order exists
order gateway = spatial_flow_crypto
```

Expected customer state model:

```text
Preparing Invoice
→ automatic one-time Create or Reuse
→ Waiting for payment
→ manual Transaction Hash verification / manager Sandbox
→ server-confirmed paid state
→ canonical WooCommerce result route
```

No timed polling, QR, countdown, automatic chain monitoring, wallet connection, multi-network selection or browser-authored Step-04 success is expected.

## Test compression model

Three user-feedback gates only:

```text
B1 — controlled ON entry + Waiting/recovery/responsive acceptance
B2 — hash/failure presentation + manager Sandbox confirmed transition
B3 — Feature Flag OFF rollback + final normal/Crypto regression closure
```

Each gate must be recorded in GitHub before the next gate begins.

---

# B1 — Controlled ON Entry + Waiting / Recovery / Responsive

## B1.0 pre-enable observation

Before changing the flag:

```text
confirm installed plugin reports V0.3.0
confirm Project 2 Crypto Workspace is currently OFF
confirm Sandbox/Test Mode remains enabled for the later local-success test if that is the existing accepted local configuration
```

No plugin/theme source edit is authorized.

## B1.1 controlled enable

Turn:

```text
Project 2 Crypto Workspace: OFF → ON
```

This is the only configuration mutation in B1.

## B1.2 create one fresh disposable Crypto order

Use the normal Project-2 Checkout flow:

```text
Step 01 Address
→ Step 02 Shipping / Product Packaging
→ Step 03 select the real Crypto gateway
→ native WooCommerce Place Order
```

Expected:

```text
exactly one WooCommerce order
order initially unpaid / on-hold under current Crypto contract
redirect to official WooCommerce order-pay route
URL family: /checkout-2-2/order-pay/{order_id}/...
V0.3.0 Project-2 Crypto Workspace is rendered
no second Woo gateway selector
no duplicate Pay/Place Order button
```

The main theme Step 03 remains untouched and gateway-agnostic.

## B1.3 Workspace bootstrap → Invoice → Waiting

On a fresh order V0.3.0 should automatically consume the accepted backend contract:

```text
bootstrap
→ GET Workspace
→ Create/Reuse Invoice if required
→ Waiting for payment
```

The customer-visible Waiting surface must show server-returned truth, including as applicable:

```text
USDT
TRON / TRC20
amount
receiver address
copy amount/address controls
TRON-only warning
manual Transaction Hash verification entry
explicit Refresh status action
manager Sandbox control only when backend authorizes the current actor
order context / totals from WooCommerce
```

Real Woo order context should include line items and real totals; when the test order contains Product Packaging fees, those fees must come from WooCommerce rather than a browser-calculated duplicate.

Do not reject B1 solely because `Preparing Invoice` is too brief to capture on a fast local install; automatic first-load progression to a valid server-backed Waiting state is acceptable evidence of that transition. A persistent/stuck Preparing state is a failure.

## B1.4 recovery / no-polling behavior

Using the same unpaid order:

```text
manual page refresh
→ same Woo order
→ same/reused active Invoice rather than a new order

close/reopen or duplicate the same authorized order-pay URL
→ same order and recoverable Workspace state

switch away and refocus the tab
→ status may refresh on focus
→ no interval/timed polling loop should appear as repetitive autonomous network traffic

click explicit Refresh status
→ Workspace re-reads server state without creating another Woo order
```

Do not submit Sandbox success yet. Preserve this order unpaid for B1 evidence.

## B1.5 responsive / visual acceptance

Inspect the same Waiting Workspace at:

```text
Desktop: 1366px class width
Mobile: 390px class width
Mobile: 360px class width
```

Required runtime quality:

```text
no horizontal overflow
no missing/cut-off critical controls
amount/address/hash controls readable
order summary readable
native site header/footer do not break Workspace
no duplicate Checkout payment form appears
no rejected theme-side Selected Payment panel appears in main Checkout
```

B1 is a runtime-quality gate, not the final full strict-parity closure; any concrete layout defect must be recorded before code changes are proposed.

## B1 evidence to return

Minimum user feedback:

```text
1. plugin version shown as V0.3.0: yes/no
2. controlled flag ON succeeded: yes/no
3. fresh Crypto order ID
4. exactly one order: yes/no
5. order-pay Workspace appeared: yes/no
6. Waiting state with real amount/address: yes/no
7. refresh/reopen/Refresh-status reuse same order/state: yes/no
8. desktop 1366: pass/problem
9. mobile 390: pass/problem
10. mobile 360: pass/problem
11. screenshots of desktop Waiting and at least one mobile Waiting state
12. any visible error text / console-level fatal if encountered
```

Stop after B1 and record its result before B2.

---

# B2 — Hash / Failure Presentation + Manager Sandbox Success

B2 is authorized only after B1 is recorded PASS or after any B1 failure is explicitly triaged.

Use the same B1 order where safe, or a new disposable Crypto order if B1 evidence requires preserving the original.

## B2.1 client hash guard

Use a clearly malformed value that cannot be a valid TRON transaction hash.

Expected:

```text
client/UI rejects format or backend returns invalid_format
order remains unpaid
Invoice remains non-settled
no success redirect
```

## B2.2 deterministic/retryable/manual-review presentation

These states should only be exercised with already-known safe test samples or backend conditions from the accepted V0.2.9 test set. Do not invent a fake browser success/failure state and do not submit arbitrary real-chain hashes merely to force a visual.

Where reproducible, confirm V0.3.0 correctly presents:

```text
verification_failed
retryable / temporary service error
manual_review
terminal/cancelled recovery state
```

If a particular state cannot be safely reproduced from the retained local test fixtures, record it as source-mapped / runtime-not-reproduced rather than fabricating evidence. This does not reopen V0.2.9 backend acceptance by itself.

## B2.3 manager Sandbox success

While signed in as an authorized manager/admin and with the accepted local Sandbox/Test Mode configuration enabled, use the Workspace's manager-only Sandbox control.

Expected:

```text
server handles simulated settlement through accepted backend authority
order settlement happens at most once
order moves to the appropriate paid WooCommerce state (historically processing in Sandbox)
Workspace obtains server-confirmed paid state
browser follows/reloads authorized canonical WooCommerce result route
no browser-manufactured success URL
no second Woo order
no duplicate settlement/note on repeated harmless refresh
```

Step 04 visual/status-matrix redesign remains outside BIG BATCH B. B2 only verifies the canonical WooCommerce result transition and absence of duplicate settlement.

## B2 evidence to return

```text
malformed hash result
any reproduced verification_failed/retryable/manual_review result
Sandbox control visible to manager: yes/no
Sandbox action result
final Woo order ID/status
canonical result route reached: yes/no
one order only: yes/no
refresh after success created duplicate settlement/order: yes/no
screenshots of any failure state reproduced and final result
```

Stop and record B2 before B3.

---

# B3 — Feature Flag OFF Rollback + Final Regression

B3 is authorized only after B2 result is recorded.

## B3.1 preserve/create unpaid order-pay test case

Use a separate unpaid Crypto Workspace order; do not use the already-paid Sandbox-success order for rollback proof.

While Workspace is ON, retain its valid official order-pay URL and order ID.

## B3.2 controlled rollback

Turn:

```text
Project 2 Crypto Workspace: ON → OFF
```

Reopen the same unpaid order-pay URL.

Expected:

```text
bridge to legacy /crypto-pay/
same WooCommerce order ID
no new order
legacy invoice/payment path remains functional
```

Then create one new Crypto Checkout while OFF.

Expected:

```text
exactly one Woo order
on-hold unpaid semantics
legacy /crypto-pay/ route
```

## B3.3 normal gateway regression

Verify at least one currently available non-Crypto WooCommerce gateway can still be selected/rendered in main Step 03 without the Project-2 theme knowing its gateway internals.

Do not require a real charge if the configured provider is not ready for local payment. This check is for:

```text
real eligible gateway list remains dynamic
gateway switching works
native payment_box/provider fields render where applicable
native Terms/privacy remain
exactly one native Place Order remains
no Crypto-specific theme panel/label contaminates another gateway
```

## B3 final state

Unless a later explicit deployment decision says otherwise, leave:

```text
Project 2 Crypto Workspace = OFF
```

after local BIG BATCH B acceptance.

## Final decision gate

BIG BATCH B can close only if:

```text
V0.3.0 customer Workspace entry works
Waiting/server truth works
recovery/reuse works
hash workflow does not create browser truth
Sandbox confirms canonical paid transition without duplicate order/settlement
responsive critical states pass or any defects are resolved and retested
Feature Flag OFF rollback preserves same order + legacy path
main Step-03 normal Woo gateway architecture remains intact
no rejected theme Selected Payment layer returns
```

Only after BIG BATCH B closes may Project 2 advance to the separate real Step-04 WooCommerce order-result/status matrix project.

## Failure rule

Any runtime failure discovered in B1/B2/B3 must be written to GitHub before a source/configuration fix is attempted. Do not silently modify theme/plugin code during acceptance.
