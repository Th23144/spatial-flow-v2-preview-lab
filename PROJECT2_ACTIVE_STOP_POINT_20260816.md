# Project 2 · Active Stop Point · 2026-08-30

## Current authoritative stop point

```text
Step04 production audit: COMPLETE
Step04 computed-style strict parity: PASS
Step04 final screenshot residual review: PASS
Step04 clean Pending-payment recovery sanity: PASS
Step04 desktop result-side sticky runtime: PASS / USER ACCEPTED
Step04 2.7.21 body-only Sticky Ancestor Unlock: PASS
Step04 reference variant audit: COMPLETE
Step04 seven-state desktop/mobile screenshot sweep: PASS
Step04 seven-state semantics screenshot sweep: PASS
Step04 representative tall-family sticky runtime proof: PASS (Failed + Refunded)
Step04 full-state visual/runtime regression: FINAL PASS
Step04 overall: CLOSED
Step04 status-icon micro visual polish: DEFERRED BY USER; non-blocking later optimization

Step03 sidebar sticky issue: ACTIVE NEXT TASK
Crypto V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch: OPEN AFTER STEP03
Final Checkout 01-04 consolidated visual 1:1 sweep: REQUIRED AFTER ALL OPEN PRESENTATION BLOCKERS CLOSE
Checkout binary status: Not done
```

## Step04 final closure

Authoritative record:
`project2-progress/STEP_4F_STEP04_TALL_FAMILY_STICKY_FINAL_PASS_AND_FORMAL_CLOSE_20260830.md`

Commit:
`b655a2d45314df049c69b51d1dcdc05703b1afed`

Final representative sticky evidence:

### Failed
```text
body overflow: clip visible
position: sticky
top: 132px
side height: 1105.125px
scrollY 559  -> sideTop 132 -> locked true
scrollY 907  -> sideTop 132 -> locked true
scrollY 1308 -> sideTop 132 -> locked true
all samples insideShell: true
near-shell-end samples release from top lock without crossing shell
```

### Refunded
```text
body overflow: clip visible
position: sticky
top: 132px
side height: 978.125px
scrollY 559  -> sideTop 132 -> locked true
scrollY 915  -> sideTop 132 -> locked true
scrollY 1302 -> sideTop 132 -> locked true
all samples insideShell: true
near-shell-end samples release from top lock without crossing shell
```

This closes the tall BACS/recovery family and refund-ledger family. The earlier normal/short Step04 family sticky proof remains accepted.

## Step04 architecture clarification

Failed, Refunded, Processing, Completed, Pending payment, On-hold and Cancelled are not separate theme page implementations. They are server-authoritative state variants of the same Step04 WooCommerce `order-received` result architecture.

Shared across the family:
- same Step04 template family
- `.sf-order-result-v3`
- `.result-shell`
- `.result-side`
- same 2.7.21 body-level Sticky Ancestor Unlock

What varies by Woo order state is rendered content and therefore height: title/status copy, timeline, recovery CTA, BACS gateway-owned instructions, refund-ledger rows, payment facts, etc. This is why the same sticky implementation still needed representative tall-state runtime proof after the normal state passed.

## Deferred Step04 icon micro-visual item

Retain for later micro-polish only:
- checkmark: acceptable
- refunded/return arrow: acceptable
- ellipsis/waiting mark: visually weak
- X/failure/cancel mark: visually weak
- Step03 payment-status mark is preferred visual-language reference

Do not reopen Step04 mainline for this now.

## Immediate next action

Diagnose the Step03 sidebar sticky issue independently. Do not assume it shares the Step04 root cause until runtime evidence proves it.

After Step03 sticky closes:
1. fix/revalidate Crypto V0.3.0 transfer-button typography;
2. run final Checkout 01-04 consolidated visual 1:1 sweep;
3. perform final Checkout closure review;
4. only if no blocker remains, change Checkout binary label to `Completed 1:1`.

## Explicit deployment boundary

Continue manual anchored replacement for large theme/plugin files unless the user explicitly changes that decision.
