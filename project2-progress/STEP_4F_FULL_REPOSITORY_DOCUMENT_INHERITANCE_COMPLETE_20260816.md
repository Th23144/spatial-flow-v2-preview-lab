# Step 4F · Full Repository Documentation Inheritance — Complete

Date: 2026-08-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Project-2 documentation inheritance for the current window: COMPLETE
Implementation advanced during inheritance: NO
Current live-code gate: unchanged
```

## Scope inherited

This window enumerated and reviewed the Project-2 explanatory/policy/progress documentation tree and inherited the full execution line required for safe continuation, including:

```text
root Project-2 policies and current/resume/index records
strict 1:1 acceptance policy
mobile design review policy
CSS maintenance / replace-not-append policy
manual replacement + byte/line/SHA/syntax audit policy
mandatory GitHub step-recording policy
cross-window ownership/handoff policy
project2-progress index / progress / status / deferred records
Step 4C Shop rework history
Step 4D Single Product cleanup/consolidation history
Step 4E Cart audit, implementation, rejected fixes, exact rollbacks, S2 reconstruction, Notice N1/N2, final closure and deferred polish
Step 4F Checkout baseline/ownership/reconstruction history
Step 4F Step 01 / Step 02 / Step 03 R1 acceptance lineage
Step 4F Product Packaging candidate, rejection, live integration, QA, micro-parity and final closure lineage
Step 4F static Step-03/Step-04 reference architecture lineage
Step 4F Crypto plugin capability/integration evolution through V0.2.9 BIG BATCH A
Step 4F BIG BATCH B V0.3.0 customer Workspace candidate
latest BIG BATCH B theme post-install semantic audit/correction
payment-owner handoff and standalone-handoff policy
```

Historical records were not treated as interchangeable current truth. The current window inherited both the final decisions and the failure/rejection/rollback paths needed to avoid reintroducing disproved approaches.

## Historical conflict precedence

When two repository records disagree, this window will use:

```text
1. later explicit correction / rejection / rollback
2. later formal source/runtime/user acceptance or closure
3. standing policy unless explicitly superseded
4. older candidate / plan / current-state snapshot as historical evidence only
```

Therefore old docs that call Checkout or another surface `Not done` do not erase later dated closures; equally, an earlier closure of a bounded R1 scope does not erase a later explicit reopening/expansion of Step-03 payment-system scope.

## Project execution disciplines inherited

### A. GitHub is the execution ledger

The updated `PROJECT2_STEP_RECORDING_POLICY.md` is mandatory:

```text
meaningful action
→ record its start/state/result in GitHub
→ only then move to the next meaningful action
```

Do not run a chain of implementation/validation/rollback/acceptance actions and summarize them only afterward.

### B. Evidence outranks expectation

Planned byte/line counts, visual hypotheses or expected ownership never override actual source/runtime evidence.

A syntactically exact edit may still be rejected if semantic/browser evidence disproves the design.

### C. Source PASS ≠ runtime PASS ≠ strict 1:1 PASS

These states remain separate.

Functional acceptance does not automatically confer visual 1:1 acceptance, and visual similarity does not prove WooCommerce/payment business correctness.

### D. Exact manual replacement remains default for live source edits

For current runtime files:

```text
current exact source
→ bytes / logical lines / SHA256 / line endings / syntax
→ unique bounded anchor/replacement
→ expected identity
→ user manual edit
→ returned-source verification
→ runtime acceptance
```

Whole-file replacement is not the default.

### E. No append-only CSS maintenance

Establish the intended canonical owner, validate it, and remove obsolete owners in bounded reversible batches. Do not solve conflicts by endlessly appending overrides.

### F. Backend/business truth remains authoritative

WooCommerce/plugin/server owns customer/order/payment/shipping/tax/fee/status truth. UI may present or bridge native controls but must not manufacture business truth.

Backend editability may be preserved even when a specific frontend hook/display is removed.

### G. Do not repeat disproved visual fixes

The Cart history established that guessed border/color/spacing patches must stop when live DOM/computed evidence identifies another owner. Diagnose final DOM/cascade before stacking another override.

### H. Do not rewrite the reference to excuse the implementation

If the strict reference contract is still authoritative, fix live ownership rather than altering the reference to match an implementation defect.

### I. Assistant proposals are not user requirements

A recommendation becomes user-approved direction only when the user explicitly accepts it. Historical assistant suggestions must not be reclassified as user decisions.

## Current authoritative product/page state relevant to continuation

### Cart

```text
Final strict 1:1 closure: COMPLETED
Native Woo functionality/backend editability: accepted
Later notice polish: preserved as deferred history where recorded
```

### Checkout R1 / normal Woo flow

Batch 6 final end-to-end acceptance is closed for its bounded R1 scope, including:

```text
Step 01 Address
Step 02 Shipping
Product Packaging
Step 03 native Woo Payment structure/function
Order Summary / Coupon / Trust
backend-editable normal-state copy
normal non-Crypto order creation
Crypto legacy one-order/on-hold redirect regression
1366 / 390 / 360 normal flow regression
```

### Product Packaging

```text
FINAL ACCEPTED / CLOSED
```

Locked rules include:

```text
Original item-centric B direction accepted
B2 over-compressed mobile density direction rejected
one assignment unit belongs to exactly one package
reassignment transfers, never duplicates
only non-empty actual packages count
Standard Packaging fee = free
Gift fee = per non-empty Gift package
Woo totals/session/order metadata remain authoritative
intermediate-width single-column behavior accepted
Coupon is a live-only functional extension, not static-reference 1:1 scoring content
```

Do not reopen Product Packaging absent concrete regression/contract evidence.

### Step 03 payment-system scope

Important scope distinction:

```text
Batch-6 R1 native Step-03 structure/function: CLOSED
later expanded full payment-system / Crypto Workspace Step-03 closure: NOT YET CLOSED
```

The main live Step 03 is required to remain a gateway-agnostic WooCommerce host:

```text
real eligible gateway list
native selected gateway + payment_box
native gateway fields / iframe / nonce
native Terms/privacy
exactly one native Place Order
```

The theme must not become a second payment gateway registry.

### Crypto backend

```text
Spatial Flow Crypto Pay Trial V0.2.9
BIG BATCH A backend/security: FINAL ACCEPTED / CLOSED
ZIP SHA256:
d85028a0bfc92cd15aec5ace8892119f3cd9ff35083e65c3c70990de56cdf56a
```

Accepted backend includes Workspace Token, REST, Create/Reuse Invoice, server-authoritative fixed USDT/TRON truth, locking, hash verification, rate limiting, duplicate protection, manual review/retryable states, payment_complete at-most-once boundary, Sandbox authorization, recovery and Feature Flag rollback.

Production quote/rate-lock for arbitrary non-USD shop currency remains unresolved.

### Crypto V0.3.0 / BIG BATCH B

```text
V0.3.0 candidate: KEEP
V0.3.0 static/source integration: BUILT / VALIDATED
V0.3.0 BIG BATCH B customer runtime: NOT YET FINAL ACCEPTED
Project 2 Crypto Workspace: OFF until controlled runtime cycle
```

Do not restart from V0.2.9 or delete the V0.3.0 customer Workspace integration.

### Theme Selected Payment experiment

The immediately preceding four-file theme delta is formally:

```text
REJECTED / MUST BE ROLLED BACK
```

Reason:

```text
native Woo payment_box already owns selected-gateway content
new theme JS hardcoded spatial_flow_crypto / Crypto-specific copy
panel was structurally appended after the full Woo payment output
forcing its intended position would risk reopening native Place Order relocation
```

This rejection affects **only the new theme-side Selected Payment delta**. It does not roll back the V0.3.0 plugin.

### Step 04

Accepted static Step-04 references are not a substitute for the production Woo status matrix. Real Step 04 remains a separate server/order-status-driven project after full Step-03 payment integration. Browser/query state may not decide paid/pending/failed/cancelled/refunded truth.

## Cross-window operating model updated in this inheritance pass

The payment-development window remains long-term owner of payment/plugin evolution, but it is no longer expected to broadly read Project-2 repository history.

New default:

```text
Project 2 overlaps subsystem
→ Project 2 records overlap internally
→ Project 2 creates one self-contained standalone handoff
→ user downloads/forwards that file
→ owner window resumes from the handoff's explicit baseline/freeze point
```

Current standalone file:

`project2-progress/PAYMENT_WINDOW_STANDALONE_HANDOFF_V030_20260816.md`

The owner window should use that file as its normal intake.

## Current exact stop point

No new implementation is authorized until the current four-file theme rollback is source-validated.

Required restore target:

```text
functions.php
609,465 bytes
11,657 logical lines
SPATIAL_FLOW_CHILD_VERSION 2.7.13
SHA256 62b13f9acb69838bae1543a196e3bd4497faf02e1f30f04f197f7c0fb6575631

woocommerce/checkout/form-checkout.php
37,981 bytes
674 logical lines
SHA256 c7af24d516ff9ca90c6cabddc546b709362a27dd91548201e58e4258f7d68f9e

assets/js/checkout-safe5.js
59,007 bytes
1,768 logical lines
SHA256 b672ab9c643bc0e4008b0bb9215c0fdc6a2c777c9a18d3f2a1be48ff2cbe5af0

assets/css/checkout-safe5.css
148,983 bytes
4,855 logical lines
SHA256 c1f5835297adf28f2509c9138f785007fd9b180d52bd83643c298fe3a999f87a
```

Rollback meaning:

```text
Undo the complete immediately preceding Selected-Payment theme integration delta across those four files.
Do not undo any earlier accepted Step-03 work.
Do not roll back Spatial Flow Crypto Pay Trial V0.3.0.
Do not turn Project 2 Crypto Workspace ON yet.
```

## Exact next action

```text
User restores the four theme files
→ submit all four files
→ verify exact bytes / logical lines / SHA256 / PHP/JS/CSS integrity
→ record rollback validation in GitHub
→ only then open the consolidated V0.3.0 Crypto Workspace BIG BATCH B runtime acceptance cycle
```

This is the only authorized next implementation gate after completion of the inheritance pass.
