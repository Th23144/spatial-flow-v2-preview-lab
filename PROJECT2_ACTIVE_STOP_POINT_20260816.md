# Project 2 · Active Stop Point · 2026-08-30

## Current authoritative stop point

```text
Step04 full-state visual/runtime regression: FINAL PASS
Step04 overall: CLOSED
Step04 status-icon micro visual polish: DEFERRED BY USER; non-blocking later optimization

Step03 sidebar sticky issue: ROOT CAUSE LOCKED
Step03 shell/sidebar runway A/B: CONFIRMED CAUSAL
Step03 source / architecture audit: COMPLETE
Step03 adaptive production behavior: USER ACCEPTED
Step03 2.7.22 manual source batch: READY TO APPLY
No runtime acceptance until returned saved source is validated

Crypto V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch: OPEN AFTER STEP03
Final Checkout 01-04 consolidated visual 1:1 sweep: REQUIRED AFTER ALL OPEN PRESENTATION BLOCKERS CLOSE
Checkout binary status: Not done
```

## Accepted Step03 production behavior

The user accepted the adaptive desktop behavior:

- when the real left Payment column supplies genuine vertical runway, preserve the reference behavior: whole `.sf-safe5-summary` sticky at 136px;
- when the full right rail itself defines the grid height and therefore cannot meaningfully lock, do not add fake shell height and do not restore the rejected duplicate Selected Payment panel;
- in that no-runway state, release the whole rail and keep only `.sf-safe5-context-card--payment` sticky at 136px while Order Summary remains in normal flow;
- `<=1040px` retains the existing static/stacked mobile/tablet behavior.

Authoritative implementation record:
`project2-progress/STEP_4F_STEP03_ADAPTIVE_STICKY_DECISION_ACCEPTED_AND_2722_MANUAL_BATCH_20260830.md`

Commit:
`6bb3937373ed42e4d064623c2bd34bbaea53ba82`

## Current source baselines

### `functions.php`
```text
bytes: 612013
logical lines: 11689
SHA256: 82d31604ebd298fa3182ffaa800c07b2dae7db1fe456dc71042fcd6f54eb4d6f
version: 2.7.21
```

### `assets/css/checkout-safe5.css`
```text
bytes: 148983
logical lines: 4855
SHA256: c1f5835297adf28f2509c9138f785007fd9b180d52bd83643c298fe3a999f87a
line endings: CRLF
```

### `assets/js/checkout-safe5.js`
```text
bytes: 59007
logical lines: 1768
SHA256: b672ab9c643bc0e4008b0bb9215c0fdc6a2c777c9a18d3f2a1be48ff2cbe5af0
line endings: CRLF
```

## Ready 2.7.22 manual batch

Modify all three files in one coherent save batch:

1. `functions.php`: version `2.7.21 -> 2.7.22` only, to cache-bust SAFE5 CSS/JS asset URLs.
2. `checkout-safe5.css`: add one desktop-only fallback class block before the existing Step03 `@media (max-width:1040px)` block.
3. `checkout-safe5.js`: add adaptive geometry sync/binding, call sync on Step changes, and bind once during init.

The runtime class is:

```text
.sf-safe5-step3-context-sticky
```

It is set only when:

```text
current step == 3
viewport > 1040px
mainHeight < summaryHeight + 2px
```

The 2px tolerance only prevents sub-pixel mode flipping.

Re-evaluation happens on Step changes, resize, payment-method change, ResizeObserver main/summary size changes, and Woo `updated_checkout`.

## Simulated post-edit fingerprints

If line endings are preserved exactly:

### `functions.php`
```text
bytes: 612013
logical lines: 11689
SHA256: 9e7e942a56c44ddff521d653e8f9cf7ed14e77678d71a3e450a73c2beeee8410
PHP syntax: PASS
```

### `checkout-safe5.css`
```text
bytes: 149798
logical lines: 4878
SHA256: 28b2e89c3fb966e57863a9adfe18edfe2a40559b4ca9b142dedaf0f2d853a499
brace balance: 584/584
comment balance: 25/25
tinycss2 errors: 0
```

### `checkout-safe5.js`
```text
bytes: 61494
logical lines: 1860
SHA256: ba71dcff2629094e465fb68ada2502ef6d5a96b1d0b6d7eaa1912f54b40bd69c
node --check: PASS
```

If the local editor normalizes CRLF/LF, byte/SHA mismatch alone is not failure; validate exact anchors, syntax and semantic block counts.

## Immediate next action

User applies the full 2.7.22 manual batch once, then returns all three saved files together:

- `functions.php`
- `assets/css/checkout-safe5.css`
- `assets/js/checkout-safe5.js`

Do not run runtime acceptance before source validation.

After source validation PASS, run one consolidated runtime batch:

1. current Step03 short-left desktop state: fallback class present, whole rail static, payment context card sticky/locks at 136px;
2. a temporary console-only tall-left proof: fallback class clears and whole rail resumes sticky ownership;
3. Step02 desktop sticky regression PASS;
4. Step03 mobile static/stacked regression PASS.

Then close Step03 sticky if no blocker remains.

After Step03 closes:
1. fix/revalidate Crypto V0.3.0 transfer-button typography;
2. run final Checkout 01-04 consolidated visual 1:1 sweep;
3. perform final Checkout closure review;
4. only if no blocker remains, change Checkout binary label to `Completed 1:1`.

## Explicit deployment boundary

Continue manual anchored replacement for large theme/plugin files unless the user explicitly changes that decision.
