# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-18  
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
R5-E4-B-FIX1 exact artifact and runtime width：Passed / closed.
Current executable phase：R5-E4-C3 desktop + phone strict visual acceptance.
Cart page status：Not done.
```

## Accepted code baselines

```text
functions.php
Version: 2.7.8
Size: 552,215 bytes
SHA256: 7f4d1f3722e86ba5b03bcbb05ac9119cf1cdd6c74ddc54ba49c1454a291ed070

assets/js/spatial-flow.js
Size: 70,828 bytes
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3

assets/css/spatial-flow.css
Deployed artifact: spatial-flow(24).css
Size: 696,069 bytes
Logical lines: 23,335
SHA256: 412d6b20993a101e73b0fae9b7a26abc4941b5e8f6eb032c1c38689dfc823436
Braces: 3,626 / 3,626
Comments: 340 / 340
CSS parser errors: 0
```

## Accepted geometry

```text
- Cart width now matches the completed Shop page width
- 7fr / 5fr rendered relationship passed
- 80px desktop column gap passed
- 88px title-to-count rhythm passed
- 120px count-to-main-row rhythm passed
- inherited parent/wrapper padding removal passed
```

Runtime record:

```text
project2-progress/STEP_4E_B2_R5_E4_B_FIX1_RUNTIME_ACCEPTANCE.md
```

## Current exact operation · R5-E4-C3

No code change in this substep.

Validate the full Cart visually against the approved static direction:

```text
Desktop
- full-page width and 48px visual gutters align with Shop
- Your Bag title/count whitespace matches the static composition
- product rows, image crop, title/meta/quantity/price alignment are coherent
- Order Summary starts at the correct main-row top and uses the right visual weight
- coupon/update controls align cleanly
- recommendation section uses the full available width and four real products
- Header and Footer remain unchanged

Phone
- non-empty Cart remains production-quality with no horizontal overflow
- remove, quantity, coupon, summary and recommendations remain usable
- both empty-Cart states remain centered
- Footer accordion and Header remain normal
```

The static phone preview is guidance only; production-quality mobile behavior takes priority.

## Remaining sequence

```text
R5-E4-C3 desktop + phone strict visual acceptance
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final strict functional + visual acceptance
→ binary Cart status decision
```