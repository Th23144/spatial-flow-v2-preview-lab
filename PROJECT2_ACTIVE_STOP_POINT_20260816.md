# Project 2 · Active Stop Point · 2026-08-30

## Current authoritative stop point

```text
Step04 full-state visual/runtime regression: FINAL PASS
Step04 overall: CLOSED
Step04 status-icon micro visual polish: DEFERRED BY USER; non-blocking later optimization

Step03 sidebar sticky issue: ACTIVE DIAGNOSTIC NOW
Step03 reference sticky owner: whole right-side wrapper `.checkout-side` / top 136px
Step03 production sticky owner: CORRECT — `aside.sf-safe5-summary`
Step03 production child order-review: CORRECT — static
Step03 body ancestor unlock: ALREADY CORRECT — body clip/visible
Step03 ancestor overflow/transform/contain blockers: NONE FOUND
Step03 runtime sticky activation: FAIL
Step03 leading differential: shell/sidebar vertical runway is extremely small
Step03 causation: NOT YET LOCKED — one reversible console-only shell-runway A/B required
Crypto V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch: OPEN AFTER STEP03
Final Checkout 01-04 consolidated visual 1:1 sweep: REQUIRED AFTER ALL OPEN PRESENTATION BLOCKERS CLOSE
Checkout binary status: Not done
```

## Step03 diagnostic result

Authoritative result record:
`project2-progress/STEP_4F_STEP03_SIDEBAR_STICKY_DIAGNOSTIC_RESULT_AND_RUNWAY_HYPOTHESIS_20260830.md`

Commit:
`39f12af312795d57cd66f96c694c37dc46767471`

Runtime facts from current production Step03 desktop:

```text
owner: aside.sf-safe5-summary
position: sticky
top: 136px
align-self: start
owner height: 1012.047px

child #order_review: static
shell height: 1166.047px
shell-owner delta: 154px

body overflow: clip visible
html overflow: hidden auto
all intermediate ancestors: overflow visible / transform none / contain none
```

Scroll samples never lock to 136px; the owner moves with the shell/document despite the correct computed sticky contract.

This proves Step03 is not currently blocked by the same immediate body-overflow condition that originally blocked Step04. Do not reapply the Step04 body fix and do not move sticky ownership into the inner order review.

## Leading hypothesis

The production Payment main column is short while the right Context + Order Summary stack is tall. The containing shell is only 154px taller than the 1012px sticky owner, leaving almost no vertical runway for the whole-column sticky contract.

This is the strongest remaining differential but is not yet sufficient causal proof.

## Immediate next action

Run one reversible console-only A/B on Step03 desktop:

1. baseline current geometry/scroll behavior;
2. temporarily enlarge only `.sf-safe5-shell` vertical runway with inline `min-height`;
3. preserve owner `position:sticky`, `top:136px`, child order-review static, body overflow and content;
4. rerun scroll samples;
5. automatically restore the original inline style.

Interpretation:
- if the same owner begins locking at ~136px only after shell runway is enlarged, shell runway is proven causal;
- if it still does not lock, reject this hypothesis and continue diagnosis without source changes.

No source modification before this A/B result.

After Step03 sticky closes:
1. fix/revalidate Crypto V0.3.0 transfer-button typography;
2. run final Checkout 01-04 consolidated visual 1:1 sweep;
3. perform final Checkout closure review;
4. only if no blocker remains, change Checkout binary label to `Completed 1:1`.

## Explicit deployment boundary

Continue manual anchored replacement for large theme/plugin files unless the user explicitly changes that decision.
