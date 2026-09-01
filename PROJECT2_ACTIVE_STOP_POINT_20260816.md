# Project 2 · Active Stop Point · 2026-09-01

## Current authoritative stop point

```text
Step04 full-state visual/runtime regression: FINAL PASS
Step04 overall: CLOSED
Step04 status-icon micro visual polish: DEFERRED BY USER; non-blocking later optimization

Step03 sidebar sticky root cause: CLOSED
Step03 adaptive sticky 2.7.22 source: PASS
Step03 desktop runtime: PASS
Step03 Woo updated_checkout/payment-change re-evaluation: PASS
Step03 Step02 sticky regression: PASS
Step03 mobile stacked/static regression: PASS
Step03 sticky issue: CLOSED

Crypto V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch: CURRENT ACTIVE TASK
Final Checkout 01-04 consolidated visual 1:1 sweep: REQUIRED AFTER CRYPTO TYPOGRAPHY CLOSES
Checkout binary status: Not done
```

## Step03 final acceptance

Authoritative closure record:
`project2-progress/STEP_4F_STEP03_ADAPTIVE_STICKY_2722_RUNTIME_FINAL_PASS_AND_CLOSE_20260901.md`

Commit:
`cab5aa6644dbd2f871632fe7e0b00c8bd1e84477`

### Desktop final

Diagnostic:
`SF_STEP03_ADAPTIVE_STICKY_2722_DESKTOP_FINAL_20260830`

Viewport:
- 1920 × 991
- DPR 1
- scale 1

Accepted behavior:
- current short-left/tall-right Step03 activates `sf-safe5-step3-context-sticky`;
- whole `.sf-safe5-summary` becomes static;
- `.sf-safe5-context-card--payment` becomes sticky at `top:136px` and actually locks during scroll;
- no fake shell min-height is introduced;
- `updated_checkout` and payment-method changes retain correct mode;
- Step03 -> Step02 clears fallback;
- Step02 whole summary remains sticky at 136px and actual sticky lock passes;
- Step02 -> Step03 restores fallback;
- reversible tall-left proof clears fallback and restores whole-rail sticky at 136px;
- temporary inline style restores exactly afterward.

All desktop assertions: TRUE
`finalPass: true`

### Mobile final

Diagnostic:
`SF_STEP03_ADAPTIVE_STICKY_2722_MOBILE_FINAL_20260830`

Viewport:
- 390 × 844
- DPR 3
- scale 1

Accepted behavior:
- adaptive fallback class absent;
- shell is flex column;
- summary uses `display:contents` / static behavior;
- payment context card is not sticky;
- context -> main -> summary visual order is correct;
- no fake shell min-height;
- no horizontal overflow.

All mobile assertions: TRUE
`finalPass: true`

## Current active task: Crypto V0.3.0 transfer-button typography

Known presentation-only defect:
`I HAVE COMPLETED THE TRANSFER` does not match the accepted/reference typography.

Do not change:
- plugin payment logic;
- REST/AJAX;
- transaction-hash handling;
- settlement verification;
- order status transitions;
- order-pay flow;
- feature flags.

Reference button contract previously audited:

```css
.crypto-transfer-complete {
  display: flex;
  width: 100%;
  min-height: 54px;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 0 17px;
  border: 1px solid var(--ink);
  background: var(--ink);
  color: var(--bg);
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: .17em;
  text-transform: uppercase;
}
```

No explicit line-height in the reference rule.

## Immediate next action

Continue the already-open Crypto typography source audit using the current live plugin files. If current plugin source is not available in-repo, request only the minimum current files required for the presentation-only correction.

After Crypto typography closes:
1. run final consolidated Checkout 01-04 strict visual 1:1 sweep;
2. perform final Checkout closure review;
3. only if no blocker remains, change Checkout binary label to `Completed 1:1`.

## Explicit deployment boundary

Continue manual anchored replacement for large theme/plugin files unless the user explicitly changes that decision.
