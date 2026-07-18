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
R5-E4-C2 principal geometry measurement：Passed.
R5-E4-C2 wrapper/source ownership：Passed.
Current executable phase：R5-E4-B-FIX1 bounded max-width correction.
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
```

## Accepted geometry

```text
parent width: 1300px
wrapper: 1200px
form / gap / summary: 653 / 80 / 467
title → count: 88px
count → main row: 120px
```

Passed:

```text
- 7fr / 5fr rendered relationship
- 80px desktop column gap
- 88px title-to-count rhythm
- 120px count-to-main-row rhythm
- inherited parent/wrapper padding removal
```

## Exact remaining source owner

The browser stylesheet scan confirms active Cart-specific inline-style rules:

```text
max-width: 1200px
priority: no !important
source: inline <style>
condition: all
```

A direct matching selector is:

```css
.woocommerce-cart .woocommerce {
  max-width: 1200px;
}
```

This caps the wrapper at 1200px / 50px gutters instead of the strict 1204px / 48px result.

## Current exact operation

Follow only:

```text
project2-progress/STEP_4E_B2_R5_E4_B_FIX1_MAX_WIDTH_CORRECTION.md
```

Replace the existing R5-E4-B desktop media block in place by adding:

```css
body.woocommerce-cart .entry-content > .woocommerce {
  max-width: var(--sf-cart-max) !important;
}
```

Do not append at file end. Do not deploy before exact artifact validation.

## Remaining sequence

```text
R5-E4-B-FIX1 manual edit + exact artifact validation
→ runtime 1204px / 48px confirmation
→ R5-E4-C3 desktop + phone visual acceptance
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final strict acceptance
→ binary Cart status decision
```