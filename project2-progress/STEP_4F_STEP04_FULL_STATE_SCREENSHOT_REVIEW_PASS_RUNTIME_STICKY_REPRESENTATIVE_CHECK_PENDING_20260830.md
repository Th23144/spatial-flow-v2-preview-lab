# Project 2 · Step04 Full-State Screenshot Review PASS; Representative Sticky Runtime Check Pending · 2026-08-30

## Trigger

The user supplied fourteen current production Step04 screenshots in one batch: seven WooCommerce order-result states, each with desktop and iPhone 12 Pro/mobile capture, and asked for a very careful state-by-state judgment.

## Screenshot sorting

The supplied capture filenames map as follows:

| Suffix | Production state |
|---|---|
| no suffix | Processing / confirmed-family |
| `(1)` | Completed |
| `(2)` | Pending payment |
| `(3)` | On-hold |
| `(4)` | Failed |
| `(5)` | Cancelled |
| `(6)` | Refunded |

Each suffix has one desktop capture and one `(iPhone 12 Pro)` mobile capture.

## Reference / semantic precedence retained

- Processing and Completed compare to the S7 Confirmed reference family.
- Pending payment and On-hold compare structurally to the S7 Pending-family reference.
- Failed, Cancelled and Refunded have no dedicated static S7 page; they are judged against the shared Step04 visual contract plus accepted Woo/server semantics.
- Production semantics override the older S7 Pending wording:
  - Pending payment may expose same-order recovery only when `needs_payment()`.
  - On-hold does not expose Return/Retry merely because it is On-hold.
- BACS `Our Bank Details` is gateway-owned dynamic output. The previously formal allowed case is On-hold. In the supplied Pending/Failed screenshots the same temporary BACS test gateway fixture also emits its bank-details block while payment can still require action. No Step04-owned geometry break is visible from that block, and no theme/source change is authorized from this screenshot review alone.
- Cancelled correctly suppresses payment instructions; Processing/Completed/Refunded also do not show the BACS instructions in this batch.

## Static visual + semantic review

### Processing — PASS

Desktop and mobile preserve the accepted confirmed-family composition:
- intro / progress / confirmed status card
- five-cell overview
- receipt table
- payment facts
- three-step next-actions timeline
- billing/shipping cards
- receipt-summary hierarchy and actions
- no visible Step04-owned clipping, border break, white band or horizontal overflow
- mobile stack remains intro -> status -> overview -> receipt -> payment record -> timeline -> addresses -> summary -> footer

Semantics are coherent: Payment confirmed; Woo order status Processing; fulfilment language is allowed.

### Completed — PASS

Desktop/mobile preserve confirmed-family geometry while correctly changing state semantics to Completed. No downgrade back to Processing wording is visible in the order-status fact/timeline. No layout regression or mobile overflow is visible.

### Pending payment — PASS for static visual + semantics

Desktop/mobile preserve pending-family geometry. The page clearly exposes payment-required semantics and the primary recovery CTA `RETURN TO PAYMENT`. Woo facts show Pending payment rather than On-hold. The same temporary BACS test gateway outputs `Our Bank Details`; it remains contained inside the summary and does not create a Step04-owned visual break.

### On-hold — PASS

Desktop/mobile preserve pending-family geometry while remaining distinct from Pending payment:
- status card says `Order on hold`
- facts show On-hold
- no Return/Retry payment CTA
- primary action is continue browsing
- BACS bank details remain visible as previously accepted gateway-owned On-hold payment instructions

No layout regression is visible.

### Failed — PASS for static visual + semantics

Desktop/mobile clearly show failure semantics and do not claim successful payment or fulfilment. The primary CTA is `RETRY PAYMENT`, which is acceptable only because this fixture is evidently in a payment-recovery-capable state. The temporary BACS test gateway also outputs bank details; it remains visually contained. No Step04-owned overflow/clipping or summary break is visible.

### Cancelled — PASS

Desktop/mobile clearly show cancelled semantics, closed-order timeline language, no false paid/fulfilment claim, no recovery CTA and no BACS payment-instruction block. This preserves the previously validated Cancelled boundary. No visual/layout regression is visible.

### Refunded — PASS

Desktop/mobile show refund-ledger truth rather than pretending the order is simply paid:
- refund row is visible in the receipt/totals area
- the original total is struck/retained for reference and the resulting total reflects the refund ledger
- payment/order status is Refunded
- copy says the refund was recorded and does not claim that external bank/wallet funds have already arrived
- no BACS payment-instruction block is shown

The extra refund rows and summary height remain contained without visible clipping or mobile overflow.

## Cross-state visual conclusion

Across all fourteen screenshots, no new Step04-owned static 1:1 blocker is visible after the 2.7.21 body-level sticky ancestor unlock.

Shared geometry remains coherent across the family:
- page frame and gutters
- intro two-column composition on desktop
- four-step progress
- result card / overview / receipt / payment facts / timeline / address hierarchy
- right summary width and internal rhythm
- mobile stacking and summary placement after addresses
- footer transition

Allowed differences are data/state driven rather than unexplained layout drift.

## Important runtime distinction

These full-page screenshots cannot prove actual sticky motion. The 2.7.21 sticky runtime activation itself already passed on a normal Step04 state, proving the body unlock and `.result-side { position: sticky; top: 132px; }` contract.

However, this full-state batch contains two materially taller sidebar families that were not directly demonstrated by motion in the screenshots:

1. BACS/recovery tall summary family — Pending/On-hold/Failed.
2. Refund-ledger tall summary family — Refunded.

Because sticky behavior can depend on the sticky element's height relative to the viewport/containing block, strict full-state runtime closure should use only two representative non-destructive checks rather than rerunning all seven states:

- one BACS-tall state, preferably Failed (covers bank details + recovery CTA), and
- Refunded (covers refund-ledger height).

Processing already provides the accepted normal/short-family sticky proof. Completed and Cancelled are not taller/more complex than already-proven families, and Pending/On-hold/Failed share the same tall gateway-output geometry class.

## Current classification

```text
Step04 full-state static visual 1:1 screenshot sweep: PASS
Step04 full-state state semantics screenshot sweep: PASS
Step04 2.7.21 shared sticky source/runtime activation: PASS
Step04 representative tall-family sticky runtime proof: PENDING (Failed + Refunded only)
Step04 final family closure: PENDING only this bounded runtime proof
No source modification authorized from the screenshot review
```

## Next action

Run one consolidated non-destructive sticky diagnostic on:

1. Failed desktop
2. Refunded desktop

Required result in each:
- body overflow `clip visible`
- `.result-side` remains `position: sticky; top:132px`
- at least one valid middle-scroll sample locks to approximately 132px
- containing-shell boundary remains coherent / no footer overlap

If both pass, Step04 full-state regression can be formally closed without rerunning the historical 17-test functional matrix.
