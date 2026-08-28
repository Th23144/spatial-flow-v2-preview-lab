# Project 2 · Step 04 · 2.7.19 production-only four-capture numeric re-audit + final micro-delta · 2026-08-28

## Result

The four production captures were paired to the unchanged V2 reference baseline:

- Processing Desktop ↔ Confirmed Reference Desktop
- Processing Mobile ↔ Confirmed Reference Mobile
- On-hold Desktop ↔ Pending Reference Desktop, shared visual contract only
- On-hold Mobile ↔ Pending Reference Mobile, shared visual contract only

Viewport conditions match the locked reference environment:

```text
Desktop: 1920×991, document client width 1905, DPR1, visualViewport scale 1
Mobile: 390×844, DPR3, visualViewport scale 1
```

## 2.7.19 targeted deltas

All eight deterministic correction targets from the prior audit are now runtime-converged:

```text
1. Overview strong: 18px / 20.88px — PASS
2. Facts dt weight: 400 — PASS
3. Timeline h3: 23px / 24.84px — PASS desktop/mobile
4. Address h3: 8px / 12.4px / 1.44px letter-spacing — PASS desktop/mobile
5. Receipt Summary heading line-height: 48.05px — PASS
6. Result Panel max-width: none — PASS
7. <=420 final Overview item grid-column: 1 / -1 — PASS
8. Summary price white-space: normal — PASS
```

## Dynamic/index differences reclassified correctly

Raw index-by-index JSON comparison still reports apparent differences in the receipt table, Payment Facts borders, and Summary total rows. Semantic-role alignment proves these are caused by real Woo data/order differences, not CSS divergence:

- reference has 3 static products; production has 1 real product
- production has extra Gift Packaging / Refund / shipping rows
- Payment Facts field order/content differs because production uses actual Woo/gateway facts
- Summary row indices shift because production has extra financial rows
- real product image replaces the static radial placeholder

These remain excluded from strict CSS parity.

Absolute page Y is not compared because production includes the real site/header environment while the static reference has its preview shell. Relative-to-breadcrumb geometry is the Step04 frame comparison. Desktop relative geometry through the main structural blocks is exact. Mobile divergence after the authority note is explained by shorter production copy height and is therefore content-driven.

## Remaining deterministic micro-deltas

After semantic alignment and dynamic exclusions, only these Step04-owned computed-style deltas remain:

### A. Overview label line-height

```text
selector: .result-overview li span
reference: 10.85px = 7px × 1.55
production: 8.12px = 7px × 1.16
all four pairs: FAIL
```

Cause: production selector sets font-size/letter-spacing but does not reclaim line-height, so a Woo/theme inherited line-height wins.

### B. Receipt table logical alignment

```text
reference table/thead/tbody/tfoot/non-final td/product copy: text-align start
production: text-align left
```

Visual result is equivalent in current LTR English, but the user explicitly requires microscopic computed 1:1. This is therefore promoted to a final deterministic delta rather than ignored.

Preserve:

```text
th => left (reference explicitly sets left)
last column => right
non-final td/table inherited flow => start
```

### C. Address logical alignment

```text
selector: .result-address-card address
reference: text-align start
production: text-align left
```

Again visually equivalent in current LTR, but not computed-identical.

## Final bounded source correction gate

One last manual anchored CSS batch is justified:

1. `.result-overview span` -> explicit `line-height:1.55 !important`
2. `table.result-order-table` -> `text-align:start !important`
3. receipt last-column rule -> `text-align:right !important`
4. receipt td rule -> `text-align:start !important` while higher-specificity `:last-child` keeps right
5. address block -> `text-align:start !important`
6. cache version 2.7.19 -> 2.7.20

No `thankyou.php` change.

Accepted source baseline before this final micro batch:

```text
spatial-flow.css
bytes 588919
logical lines 20670
SHA256 cc7d4a91ede6ff9297e0a7c6f03e4f079d2705798d567895de86034fc120b3b2

functions.php
bytes 612013
logical lines 11689
SHA256 f36e767387f0306eeae6744c6d17d99f4451999916f1c8d87df6797a183a736c
version 2.7.19
```

Internally reconstructed expected candidate fingerprints for the exact bounded batch:

```text
spatial-flow.css
bytes 589058
logical lines 20674
delta +139 bytes / +4 lines
SHA256 27ccdfb39e70f8a0a037e7d85756eb7179e535273ac26bb30bf96cfb4f9a9cf6
braces 3282/3282
comments 275/275
tinycss2 errors 0

functions.php
bytes 612013
logical lines 11689
SHA256 e45991fa5795c2a9403bf3ef12b3634db709616c3b0189ccd63ffb21585bb1a3
version 2.7.20
```

After returned-source validation, rerun only the four production JSON captures; the unchanged reference captures remain reusable.

Step04 Strict 1:1 remains FAIL/PENDING until these final deterministic micro-deltas converge.