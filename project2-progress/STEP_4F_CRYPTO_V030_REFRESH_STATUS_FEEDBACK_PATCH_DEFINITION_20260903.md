# Step 4F — Crypto V0.3.0 Refresh Status feedback patch definition — 2026-09-03

## Source verification
User returned current `project2-crypto-workspace.js`.

Verified baseline:
- bytes: 18,946
- lines: 482
- SHA256: `95272796a655a017a03bae8244b3caf657407171d6f63224f2bb3c0b5a9b9ca7`

This is the previously accepted V0.3.0 JavaScript baseline.

## Existing functional contract retained
Historical runtime evidence already proved:
- one `REFRESH STATUS` click -> one `payment-status` fetch
- HTTP 200
- no duplicate binding
- unchanged `waiting_payment` response can look visually inert

Therefore the backend/REST refresh path is not being reopened.

## Current UX-only defect
An explicit customer click has no visible acknowledgement when server truth remains unchanged, so the control can appear broken despite a successful request.

## Patch boundary
Modify only `project2-crypto-workspace.js` customer feedback behavior.

Do not change:
- REST routes
- workspace token / nonce behavior
- payment state decisions
- invoice creation
- transaction hash validation/submission
- Sandbox settlement
- Woo order status logic
- canonical result reload
- focus-triggered background refresh semantics

## Intended behavior
Only explicit user clicks on `REFRESH STATUS` receive button-label feedback:

`REFRESH STATUS` -> `REFRESHING…` -> `UP TO DATE` -> original label

Background refresh triggered by window focus must not show this button-feedback sequence.

If the server returns a changed/confirmed state, the existing payload render / canonical transition remains authoritative.
