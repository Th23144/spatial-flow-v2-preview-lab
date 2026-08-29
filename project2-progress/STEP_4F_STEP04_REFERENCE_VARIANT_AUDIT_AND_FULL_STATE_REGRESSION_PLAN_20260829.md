# Project 2 · Step04 Reference Variant Audit + Full-State Regression Plan · 2026-08-29

## Repository reference audit
The authoritative Step04 static reference is a single HTML page:

`preview/spatial-flow-thank-you-v1.html`

Its companion JS `preview/spatial-flow-thank-you-v1.js` exposes only two static review states:

- default / `confirmed`
- `?prototype_result=pending`

The JS explicitly normalizes every query value other than `pending` to `confirmed`; therefore there are no dedicated static Step04 HTML variants for Completed, Failed, Cancelled, Refunded, or custom/unknown states.

## Important semantic limitation
The S7 `pending` static state predates the later production semantic clarification and combines wording that resembles On-hold with a recovery CTA. Production semantics are now authoritative:

- Woo `pending` / Pending payment = payment-recovery state; recovery CTA expected when `needs_payment()`.
- Woo `on-hold` / On-hold = separate awaiting-confirmation state; recovery CTA is not expected merely because the order is On-hold.

Therefore the S7 pending reference remains the structural/visual reference for the pending-family layout, but its exact CTA/status wording must not override the later accepted production semantics.

## Reference URLs
Rendered confirmed:
`https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/main/preview/spatial-flow-thank-you-v1.html`

Rendered pending-family:
`https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/main/preview/spatial-flow-thank-you-v1.html?prototype_result=pending`

Source HTML:
`https://github.com/Th23144/spatial-flow-v2-preview-lab/blob/main/preview/spatial-flow-thank-you-v1.html`

Source CSS:
`https://github.com/Th23144/spatial-flow-v2-preview-lab/blob/main/preview/spatial-flow-thank-you-v1.css`

Shared Checkout CSS:
`https://github.com/Th23144/spatial-flow-v2-preview-lab/blob/main/preview/spatial-flow-checkout-flow-v1.css`

State-switch JS:
`https://github.com/Th23144/spatial-flow-v2-preview-lab/blob/main/preview/spatial-flow-thank-you-v1.js`

## Production state-to-reference mapping

| Production state | Static comparison target | Rule |
|---|---|---|
| Processing | Confirmed | closest/direct confirmed-family reference |
| Completed | Confirmed | shared confirmed-family geometry; production completion semantics remain authoritative |
| Pending payment | Pending-family | structural/visual target; production recovery semantics override old static wording |
| On-hold | Pending-family | structural/visual target; no recovery CTA expected under accepted production semantics |
| Failed | No dedicated static variant | compare shared Step04 geometry/style contract + accepted state semantics |
| Cancelled | No dedicated static variant | compare shared Step04 geometry/style contract + accepted state semantics |
| Refunded | No dedicated static variant | compare shared Step04 geometry/style contract + Woo refund-ledger truth |
| custom/unknown | No dedicated static variant | only test if a reproducible fixture exists; safe fallback semantics are authoritative |

## Consolidated full-state regression
Run before Step03.

### Required viewports
- Desktop: 1920×991, 100% browser zoom.
- Mobile: 390×844, scale 1; use the same mobile environment used in prior Step04 acceptance.

### Required production states
1. Processing
2. Completed
3. Pending payment — fresh, never-refunded order
4. On-hold
5. Failed
6. Cancelled
7. Refunded — disposable order with real Woo refund ledger; do not reuse a clean recovery order
8. custom/unknown only if a safe reproducible fixture already exists

### Visual checks on every state
- breadcrumb/page frame
- intro typography/spacing/line breaks
- Step04 progress geometry
- status block
- overview row
- receipt table/rules
- payment facts
- timeline
- billing/shipping cards
- right receipt summary
- CTA placement
- borders/rules/shadows/pseudo-elements
- no horizontal clipping/overflow
- mobile stacking/gutters
- desktop right-side sticky activates and stays within the Step04 containing region

### Allowed dynamic differences
Do not fail strict visual parity for real Woo values that naturally differ:
- products/count/names/images/meta/wrapping
- totals/fees/gift packaging/shipping/refund rows
- addresses/payment values/status text
- copy-length-driven vertical height
- gateway-owned BACS bank details on On-hold
- already-accepted global header/footer differences outside Step04 scoring

### State-specific semantic checks
- Processing: confirmed/paid family; fulfillment may proceed according to Woo state.
- Completed: completed family; do not downgrade to Processing wording.
- Pending payment: recovery CTA present only when Woo `needs_payment()`; same-order recovery.
- On-hold: no Return/Retry recovery CTA expected merely from On-hold.
- Failed: failure semantics; recovery only if Woo says order needs payment.
- Cancelled: cancelled semantics; no false paid/fulfillment language.
- Refunded: real refund-ledger truth; do not claim external funds have already arrived.
- custom/unknown: safe paid/needs-payment classification or neutral fallback; never manufacture paid state.

### Do not rerun
Do not repeat the historical 17-test functional/status matrix unless this regression exposes a concrete functional regression. This batch is a full visual/runtime/state-family regression after the 2.7.21 shared Step04 sticky-scope change.
