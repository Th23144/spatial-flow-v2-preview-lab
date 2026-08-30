# Project 2 · Active Stop Point · 2026-08-30

## Current authoritative stop point

```text
Step04 full-state visual/runtime regression: FINAL PASS
Step04 overall: CLOSED
Step04 status-icon micro visual polish: DEFERRED BY USER; non-blocking later optimization

Step03 sidebar sticky issue: ROOT CAUSE LOCKED
Step03 shell/sidebar runway A/B: CONFIRMED CAUSAL
Step03 production fix: SOURCE / ARCHITECTURE AUDIT STARTED
Step03 source files required from current live child theme: functions.php + assets/css/spatial-flow.css + assets/js/spatial-flow.js
No source modification authorized until uploaded live files are fingerprinted and audited
Crypto V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch: OPEN AFTER STEP03
Final Checkout 01-04 consolidated visual 1:1 sweep: REQUIRED AFTER ALL OPEN PRESENTATION BLOCKERS CLOSE
Checkout binary status: Not done
```

## Step03 root cause retained

Current live baseline:

```text
owner: aside.sf-safe5-summary
position: sticky
top: 136px
owner height: 1012.047px
shell height: 1166.047px
shell minus owner: 154px
baseline sticky lock count: 0
```

Console-only A/B enlarged only the containing shell and immediately produced repeated native sticky locks at 136px, then restored the page. Therefore insufficient real containing-block vertical runway is confirmed causal.

The diagnostic min-height is not a production fix. Do not manufacture large fake blank space.

## Source audit start

Authoritative record:
`project2-progress/STEP_4F_STEP03_STICKY_SOURCE_ARCHITECTURE_AUDIT_START_20260830.md`

Commit:
`bd701f18f9f8f9624db88c4c834ea30a62a26a70`

Request the three current live child-theme files together:

1. `functions.php`
2. `assets/css/spatial-flow.css`
3. `assets/js/spatial-flow.js`

Do not request a ZIP or unrelated templates initially.

Audit goals:
- locate PHP ownership/markup for `.sf-safe5-checkout`, `.sf-safe5-shell`, `.sf-safe5-summary`, payment context card and summary card;
- locate desktop grid, sticky, height/min-height and Step03-specific CSS;
- inspect JS for fragment refresh, DOM relocation, class toggles or payment-method behavior affecting real column heights;
- compare production structure to the accepted Step03 static reference;
- preserve whole-right-wrapper sticky ownership and inner order review static ownership;
- preserve native Woo gateway/Place Order/Terms/privacy behavior;
- prepare one bounded manual anchored source correction only after the audit.

Known comparison fingerprints from the latest accepted 2.7.21 state:

### `functions.php`
```text
bytes: 612013
SHA256: 82d31604ebd298fa3182ffaa800c07b2dae7db1fe456dc71042fcd6f54eb4d6f
version: 2.7.21
```

### `assets/css/spatial-flow.css`
```text
bytes: 589104
SHA256: 45e50011b043b6141bbd3bf242c64e12efa9529d2251ebdd25bf2e94357d36b6
```

The newly uploaded live files are source of truth and must be re-fingerprinted before edits.

## Immediate next action

Await all three current live source files in one batch, then perform the source/architecture audit. No further runtime test is needed before that audit.

After Step03 sticky closes:
1. fix/revalidate Crypto V0.3.0 transfer-button typography;
2. run final Checkout 01-04 consolidated visual 1:1 sweep;
3. perform final Checkout closure review;
4. only if no blocker remains, change Checkout binary label to `Completed 1:1`.

## Explicit deployment boundary

Continue manual anchored replacement for large theme/plugin files unless the user explicitly changes that decision.
