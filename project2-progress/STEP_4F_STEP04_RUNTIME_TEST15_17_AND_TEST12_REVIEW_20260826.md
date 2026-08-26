# Project 2 · Step04 Runtime Test 15–17 + Test 12 Review · 2026-08-26

## Scope

Reviewed the user's seven newly supplied screenshots before starting any new test batch:

- Test 15: Pending desktop full-page
- Test 16: Pending mobile full-page
- Test 17: Completed first screen
- Test 17: On-hold first screen
- Test 17: Failed first screen
- Test 17: Cancelled first screen
- Test 17: Refunded first screen

Also re-evaluated the purpose and necessity of Test 12 (gateway Thank You hook preservation).

## Test 15 — Pending desktop

Result: PASS for live visual/runtime composition.

Observed:
- Pending hero and status semantics render correctly.
- Step 04 remains the active result step.
- main receipt + side Receipt Summary composition matches the accepted S7 family.
- order overview, receipt, payment facts, timeline, addresses, and recovery actions remain in the expected hierarchy.
- no second Woo order-details table is visible.

The screenshot uses order #3621 after that order had previously entered Refunded, so the Refund row / 0.00 total is ledger pollution from the test order and is excluded from visual 1:1 scoring. Dynamic Woo order data is not a static-reference mismatch.

## Test 16 — Pending mobile

Result: PASS for live responsive composition.

Observed:
- one-column mobile flow is retained.
- status, overview, receipt, payment facts, timeline, addresses, and summary remain reachable.
- no obvious page-level horizontal overflow, clipped action, or duplicate block is visible.
- receipt summary moves below the main content as intended.

Same refund-ledger caveat as Test 15: the dynamic 0.00/refund data does not invalidate responsive visual acceptance.

## Test 17 — five additional status states

### Completed
PASS.
- hero: Order Completed
- status: Order Completed
- completed/confirmed visual family retained
- Step 04 result semantics match Woo status

### On hold
PASS.
- hero remains Payment Pending
- status box explicitly says Order On Hold
- no paid/fulfilled claim
- pending/attention visual family retained

### Failed
PASS.
- hero: Payment Failed
- status box: Payment Failed / Needs Attention
- no confirmed-payment claim

### Cancelled
PASS.
- hero: Order Cancelled
- status box: Order Cancelled
- no active-fulfilment claim

### Refunded
PASS.
- hero: Order Refunded
- status box: Refund Recorded / Refunded
- copy says WooCommerce records the refund; does not claim bank/wallet settlement has arrived

Overall Test 17: PASS.

## Additional URL-tamper evidence

All five Test 17 first-screen screenshots visibly retain `prototype_result=confirmed` in the browser URL while the rendered page follows the actual server/Woo status (Completed / On hold / Failed / Cancelled / Refunded).

This is additional runtime evidence that the production Step04 page ignores the old static prototype result parameter and remains server-authoritative.

## Test 12 clarification and revised acceptance decision

The actual purpose of Test 12 is not to test Crypto settlement. It is to verify that replacing the Thank You template did not suppress gateway/plugin-owned Thank You output.

The production template already preserves both:
- `woocommerce_thankyou_{gateway}` via a dynamically constructed hook using the current order payment method
- general `woocommerce_thankyou`

The user's supplied Pending page visibly renders gateway-owned `Our Bank Details` content exactly once inside the Step04 summary. This is direct runtime proof that gateway-owned Thank You output survives the custom template.

Decision:
- Test 12 core gateway-hook preservation: PASS.
- A separate Crypto-order runtime replay is no longer required to close Test 12, because the template invokes the gateway-specific hook generically for the selected payment method and source validation already confirmed the generic + specific hook paths.
- A Crypto-specific replay may be used later only if an actual Crypto Thank You regression is observed; do not create a new Crypto payment solely for Test 12.

## Updated acceptance state

```text
Test 11 duplicate rendering: PASS
Test 12 gateway Thank You hook preservation: PASS
Test 13 Processing desktop visual composition: PASS (dynamic refund-ledger data excluded from visual scoring)
Test 14 Processing mobile responsive composition: PASS (same caveat)
Test 15 Pending desktop visual composition: PASS
Test 16 Pending mobile responsive composition: PASS
Test 17 additional five-state visual family: PASS
URL prototype_result tamper: PASS with repeated evidence
```

## Remaining non-visual caveat

Order #3621 is permanently unsuitable for clean amount/recovery assertions after entering Refunded because WooCommerce created a refund ledger entry. Do not use it to prove a later Pending/Processing order still has the original payable amount.

No new test batch is started by this record. The next action, when the user authorizes continuation, should be determined from the remaining runtime checklist after excluding already accepted evidence. Do not restart the full 17-test suite.
