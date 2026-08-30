# Project 2 · Active Stop Point · 2026-08-30

## Current authoritative stop point

```text
Step04 full-state visual/runtime regression: FINAL PASS
Step04 overall: CLOSED
Step04 status-icon micro visual polish: DEFERRED BY USER; non-blocking later optimization

Step03 sidebar sticky issue: ROOT CAUSE LOCKED
Step03 reference sticky owner: whole right-side wrapper `.checkout-side` / top 136px
Step03 production sticky owner: CORRECT — `aside.sf-safe5-summary`
Step03 production child order-review: CORRECT — static
Step03 body ancestor unlock: ALREADY CORRECT — body clip/visible
Step03 ancestor overflow/transform/contain blockers: NONE FOUND
Step03 baseline sticky activation: FAIL
Step03 shell/sidebar runway A/B: CONFIRMED CAUSAL
Step03 production fix: NOT YET AUTHORIZED — focused source/architecture audit required first
Crypto V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch: OPEN AFTER STEP03
Final Checkout 01-04 consolidated visual 1:1 sweep: REQUIRED AFTER ALL OPEN PRESENTATION BLOCKERS CLOSE
Checkout binary status: Not done
```

## Step03 runway A/B root-cause confirmation

Authoritative record:
`project2-progress/STEP_4F_STEP03_STICKY_RUNWAY_AB_CONFIRMED_20260830.md`

Commit:
`1addec88cde2503f7cb50f7c7c095a7bf1410944`

Current live baseline:

```text
owner: aside.sf-safe5-summary
position: sticky
top: 136px
align-self: start
owner height: 1012.047px
shell height: 1166.047px
shell minus owner: 154px
viewport height: 991px
usable below sticky top: 855px
body overflow: clip visible
```

Baseline scroll never locked to 136px:

```text
baselineLockCount = 0
baselineEverLocked = false
```

Console-only diagnostic then enlarged only `.sf-safe5-shell` min-height to 2413px, preserving sticky owner, top, body overflow, child order-review ownership and actual content.

Result:

```text
scrollY 512  -> ownerTop 136 -> locked true
scrollY 642  -> ownerTop 136 -> locked true
scrollY 1070 -> ownerTop 136 -> locked true
scrollY 1470 -> ownerTop 136 -> locked true
expandedLockCount = 4
expandedEverLocked = true
interpretation = RUNWAY_HYPOTHESIS_CONFIRMED
restored = true
```

Therefore insufficient containing-block vertical runway is proven causal for the current Step03 whole-right-column sticky failure.

## Important implementation boundary

The diagnostic min-height is NOT a production fix. Do not ship an arbitrary large `.sf-safe5-shell { min-height: ... }` because it would create artificial blank space and violate strict 1:1 / Product Truth.

The correct production fix must preserve the approved Step03 architecture and determine the smallest bounded way to provide real sticky runway or equivalent whole-right-column ownership behavior without:
- fake empty vertical space
- moving sticky ownership into `#order_review`
- duplicating payment UI
- changing Woo gateway/business logic
- breaking mobile layout

## Immediate next action

Perform a focused source/architecture audit of the live Step03 layout owner(s):
- identify the exact production CSS/PHP/JS rules that define `.sf-safe5-shell`, `.sf-safe5-summary`, payment-main height/content flow, and Step03-only variants;
- compare them with the static Step03 reference geometry;
- determine whether the left Payment column is unintentionally too short relative to the approved reference or whether sticky ownership/layout should be adjusted in another bounded way;
- only after the audit, prepare one manual anchored source correction batch with exact file fingerprints/deltas.

No more runtime diagnosis is required before that source audit.

After Step03 sticky closes:
1. fix/revalidate Crypto V0.3.0 transfer-button typography;
2. run final Checkout 01-04 consolidated visual 1:1 sweep;
3. perform final Checkout closure review;
4. only if no blocker remains, change Checkout binary label to `Completed 1:1`.

## Explicit deployment boundary

Continue manual anchored replacement for large theme/plugin files unless the user explicitly changes that decision.
