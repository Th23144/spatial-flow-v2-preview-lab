# Project 2 · Active Stop Point · 2026-08-30

## Current authoritative stop point

```text
Step04 full-state visual/runtime regression: FINAL PASS
Step04 overall: CLOSED
Step04 status-icon micro visual polish: DEFERRED BY USER; non-blocking later optimization

Step03 sidebar sticky issue: ROOT CAUSE LOCKED
Step03 shell/sidebar runway A/B: CONFIRMED CAUSAL
Step03 source / architecture audit: COMPLETE
Step03 missing sticky CSS / JS geometry bug: NOT FOUND
Step03 production correction: ARCHITECTURE DECISION REQUIRED before source edit
Recommended direction: adaptive no-fake-space context-card sticky fallback when whole-rail runway is unavailable
No source modification authorized until that deliberate reference deviation is accepted

Crypto V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch: OPEN AFTER STEP03
Final Checkout 01-04 consolidated visual 1:1 sweep: REQUIRED AFTER ALL OPEN PRESENTATION BLOCKERS CLOSE
Checkout binary status: Not done
```

## Step03 authoritative audit

Record:
`project2-progress/STEP_4F_STEP03_STICKY_SOURCE_ARCHITECTURE_AUDIT_COMPLETE_DESIGN_DECISION_REQUIRED_20260830.md`

Commit:
`c3727ff8ffb060b2809ebd167d3da206d2e069c5`

Current live SAFE5 asset fingerprints:

### `assets/css/checkout-safe5.css`
```text
bytes: 148983
logical lines: 4855
SHA256: c1f5835297adf28f2509c9138f785007fd9b180d52bd83643c298fe3a999f87a
brace balance: 581 / 581
comment balance: 24 / 24
tinycss2 errors: 0
```

### `assets/js/checkout-safe5.js`
```text
bytes: 59007
logical lines: 1768
SHA256: b672ab9c643bc0e4008b0bb9215c0fdc6a2c777c9a18d3f2a1be48ff2cbe5af0
node --check: PASS
```

Parent/global source remains:

```text
functions.php: 612013 bytes / SHA256 82d31604ebd298fa3182ffaa800c07b2dae7db1fe456dc71042fcd6f54eb4d6f / v2.7.21
spatial-flow.css: 589104 bytes / SHA256 45e50011b043b6141bbd3bf242c64e12efa9529d2251ebdd25bf2e94357d36b6
spatial-flow.js: 78143 bytes / SHA256 7442ee92167ae383b933c6db0281f14ea56a75733339818c3e4858d77d52651b
```

## Locked Step03 source conclusion

Current CSS already matches reference sticky ownership:

```text
.sf-safe5-summary = sticky / top 136px / align-self start
#order_review = static
body desktop overflow = clip visible
```

Current Checkout JS does not touch `.sf-safe5-shell` or `.sf-safe5-summary` geometry. It hides inactive views, synchronizes context, and reacts to Woo checkout updates.

Current live geometry:

```text
right rail: 1012.047px
shell:      1166.047px
shell padding total: 154px
whole-rail sticky locks: 0
```

A/B enlarging only the shell creates repeated native sticky locks. Therefore real containing-block runway is the causal variable.

The Step03 static reference also has no separate mechanism guaranteeing runway when the right stack is taller than the payment main. Production made this limitation visible after the later-correct rollback of the duplicate theme-side Selected Payment panel. That panel must not be restored merely to manufacture height.

## Rejected fixes

Do not:
- add a large Step03 min-height / fake blank area;
- reintroduce duplicate Selected Payment UI;
- add nested scroll to the whole right rail;
- replace native sticky with a fixed-position clone.

## Recommended decision

Adaptive Step03 fallback:

- keep whole `.sf-safe5-summary` sticky when genuine main-column runway exists;
- after entering Step03 and after `updated_checkout`, compare real main/right geometry;
- when the right rail is height-dominant and whole-rail sticky cannot meaningfully activate, make the wrapper static and make only the first payment context card sticky at 136px;
- Order Summary remains in normal flow;
- desktop only; mobile remains static;
- no Woo gateway/payment/order semantics change.

This is a deliberate production adaptation beyond the literal static-reference whole-side sticky ownership and therefore needs explicit user acceptance before editing source.

## After Step03 decision/fix

1. source validation;
2. one consolidated desktop + mobile + gateway-update regression;
3. close Step03 sticky;
4. fix Crypto V0.3.0 transfer-button typography;
5. final Checkout 01-04 consolidated visual 1:1 sweep;
6. final Checkout closure review.

## Explicit deployment boundary

Continue manual anchored replacement for large theme/plugin files unless the user explicitly changes that decision.
