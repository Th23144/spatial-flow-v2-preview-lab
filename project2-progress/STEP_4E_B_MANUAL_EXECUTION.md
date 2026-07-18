# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-17  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-A audit：Complete.
Step 4E-B0 manual map：Complete.
Step 4E-B1-A through B1-H：Passed.
Step 4E-B2-A1 deletion-first attempt：Rejected / rolled back.
R5-B canonical implementation：Passed as cleaned baseline, not final 1:1.
R5-C1 through R5-C4 cleanup：Passed / closed.
R5-D1 source/ownership：Passed.
R5-D2 editability/dynamic ownership：Passed / closed.
R5-D3 strict visual acceptance：Failed / reopened.
R5-D4 native regression：Failed / reopened.
R5-D5 binary decision：Blocked.
R5-E1 exact source/state audit：Complete.
R5-E2 synchronized live counts：Passed / closed.
R5-E3 empty-Cart parity：Passed / closed.
R5-E4-A1 first geometry measurement：Complete.
R5-E4-A2 ancestor/container trace：Complete.
R5-E4-B strict geometry artifact：Passed / deployed.
R5-E4-C1 partial runtime proof：Complete.
R5-E4-C2 principal geometry measurement：Passed.
R5-E4-C2 wrapper computed-value confirmation：Passed.
Current executable phase：Identify exact stylesheet rule supplying max-width: 1200px.
Cart page status：Not done.
```

## Accepted current baselines

```text
functions.php
Version: 2.7.8
Size: 552,215 bytes
SHA256: 7f4d1f3722e86ba5b03bcbb05ac9119cf1cdd6c74ddc54ba49c1454a291ed070

assets/js/spatial-flow.js
Size: 70,828 bytes
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3

assets/css/spatial-flow.css
Deployed artifact: spatial-flow(23).css
Size: 695,962 bytes
Logical lines: 23,331
SHA256: b55c854e959ab42026f93c786e62b0c7e6b56e1cbf5307027b45991d39d90531
Braces: 3,625 / 3,625
Comments: 340 / 340
CSS parser errors: 0
```

## Accepted R5-E4-C2 geometry

```text
window inner width: 1315
document client width: 1300
wrapper border/content width: 1200 / 1200
wrapper outer gutters: 50 / 50
parent entry-content width: 1300
form / gap / summary: 653 / 80 / 467
title → count: 88
count → main row: 120
```

Passed:

```text
- 7fr / 5fr rendered relationship
- 80px desktop column gap
- 88px title-to-count rhythm
- 120px count-to-main-row rhythm
- inherited parent/wrapper padding removal
```

## Confirmed remaining width owner

```text
wrapper css_width: 1200px
wrapper max_width: 1200px
wrapper padding: 0 / 0
wrapper border: 0 / 0
parent content width: 1300px
```

A direct winning `max-width: 1200px` declaration is the only remaining owner preventing the strict 1204px / 48px-gutter result.

## Current exact operation

Do not edit CSS yet.

Identify the exact stylesheet rule matching:

```text
body.woocommerce-cart .entry-content > .woocommerce
```

that supplies:

```text
max-width: 1200px
```

Required evidence:

```text
selector
value
!important priority
stylesheet source
active media condition
```

Reference:

```text
project2-progress/STEP_4E_B2_R5_E4_C2_WIDTH_OWNER_CONFIRMATION.md
```

## Remaining sequence

```text
identify exact 1200px max-width rule source
→ bounded width-owner correction
→ R5-E4-C3 desktop + phone visual acceptance
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final strict acceptance
→ binary Cart status decision
```