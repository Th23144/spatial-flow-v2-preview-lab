# Project 2 · Active Stop Point · 2026-08-29

## Current authoritative stop point

```text
Step04 production audit: COMPLETE
Step04 computed-style strict parity: PASS
Step04 final screenshot residual review: PASS
Step04 clean Pending-payment recovery sanity: PASS
Step04 desktop result-side sticky runtime: PASS / USER ACCEPTED
Step04 2.7.21 body-only Sticky Ancestor Unlock: PASS
Step04 reference variant audit: COMPLETE
Step04 full-state 1:1 regression after sticky fix: ACTIVE NOW
Step04 overall final closure: PENDING consolidated status-family sweep

Step03 sidebar sticky issue: DEFERRED until Step04 state-family sweep passes
Crypto V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch: OPEN AFTER STEP03
Final Checkout 01-04 consolidated visual 1:1 sweep: REQUIRED AFTER ALL OPEN PRESENTATION BLOCKERS CLOSE
Checkout binary status: Not done
```

## Step04 authoritative static references

Audit record:
`project2-progress/STEP_4F_STEP04_REFERENCE_VARIANT_AUDIT_AND_FULL_STATE_REGRESSION_PLAN_20260829.md`

Commit:
`c9f25ddece348941b3d6d4ff4ae35bd365411c4f`

The repository contains one authoritative S7 Step04 HTML page:
`preview/spatial-flow-thank-you-v1.html`

Its JS exposes only two static review states:
- default / confirmed
- `?prototype_result=pending`

There are no dedicated static HTML variants for Completed, Failed, Cancelled, Refunded, or custom/unknown. Those production states use the shared Step04 visual contract plus their accepted Woo/server semantics.

Important semantic precedence:
- `pending` / Pending payment = recovery state; recovery CTA only when Woo `needs_payment()`.
- `on-hold` / On-hold = separate awaiting-confirmation state; no recovery CTA expected merely from On-hold.
- The older S7 pending static reference is structural/visual guidance and must not override this later production semantic correction.

Rendered references:
- Confirmed: `https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/main/preview/spatial-flow-thank-you-v1.html`
- Pending-family: `https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/main/preview/spatial-flow-thank-you-v1.html?prototype_result=pending`

## Active Step04 state-family regression

Required practical state family:
1. Processing
2. Completed
3. Pending payment — fresh never-refunded order
4. On-hold
5. Failed
6. Cancelled
7. Refunded — disposable order with real Woo refund ledger
8. safe unknown/custom fallback only if an existing reproducible fixture is available

Viewports:
- Desktop 1920×991 at 100% zoom
- Mobile 390×844 at scale 1 / previously accepted mobile environment

For each state inspect:
- shared 1:1 geometry and typography
- state block / overview / receipt / facts / timeline / address panels
- right summary and CTA placement
- no horizontal clipping/overflow
- mobile stacking/gutters
- desktop right-side sticky activation and containment
- state-specific Woo semantics

Do not repeat the historical deep 17-test functional/security matrix unless this sweep exposes a concrete functional regression.

## Step04 sticky acceptance retained

The sticky correction remains accepted. Do not reopen source unless this state-family sweep exposes a concrete regression.

Accepted live source fingerprints:

### `functions.php`
```text
bytes: 612013
logical lines: 11689
SHA256: 82d31604ebd298fa3182ffaa800c07b2dae7db1fe456dc71042fcd6f54eb4d6f
SPATIAL_FLOW_CHILD_VERSION: 2.7.21
PHP syntax: PASS
```

### `assets/css/spatial-flow.css`
```text
bytes: 589104
logical lines: 20675
SHA256: 45e50011b043b6141bbd3bf242c64e12efa9529d2251ebdd25bf2e94357d36b6
brace balance: 3282/3282
comment balance: 275/275
tinycss2 errors: 0
```

## Immediate next action

Execute the complete Step04 status-family comparison in one batch. Do not drip-feed states.

After the Step04 family sweep passes:
1. close Step04 formally;
2. diagnose/fix Step03 sidebar sticky independently;
3. fix/revalidate Crypto V0.3.0 transfer-button typography;
4. run one final Checkout 01-04 consolidated visual 1:1 sweep;
5. only if no blocker remains, change Checkout binary label to `Completed 1:1`.

## Explicit deployment boundary

Continue manual anchored replacement for large theme/plugin files unless the user explicitly changes that decision.
