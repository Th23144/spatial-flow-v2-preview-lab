# Project 2 · Header V2 manual batch applied · awaiting returned-source audit · 2026-09-13

## Trigger
The user corrected the new-window inheritance and explicitly confirmed that the complete four-file Header V2 manual replacement batch issued in the previous window has already been completed.

This later explicit user confirmation supersedes the older `Next action` in `STEP_HEADER_V2_COMPLETE_MULTIFILE_CANDIDATE_STATIC_VALIDATION_20260913.md` that still said to issue/apply the manual replacement batch.

## Current implementation state

```text
Header V2 four-file manual batch: USER REPORTS APPLIED / COMPLETED
Returned-source audit: NOT YET PERFORMED
Runtime/browser acceptance: NOT YET PERFORMED
Visual acceptance: NOT YET PERFORMED
User final Header acceptance: NOT YET PERFORMED
Main-site Header binary status: Not done
```

Do not reissue the same four-file implementation instructions and do not ask the user to redo the edits.

## Four modified files expected back together

```text
functions.php
header.php
assets/css/spatial-flow.css
assets/js/spatial-flow.js
```

Per the user's batching correction, these four files belong to one coherent Header V2 feature step and must be source-audited together rather than treated as four separate implementation steps.

## Expected candidate identities
These are the exact offline-validated candidate identities recorded at commit `863c1661c2634274875389b3bcb86148c15b0424`.

```text
functions.php
- 635,166 bytes
- 12,121 newline-terminated lines
- SHA256 4e9d4ef1bfed01901d0908f79ecddd55690f088af31775b32e332492ab314eaa

header.php
- 19,022 bytes
- 278 newline-terminated lines
- SHA256 0eddd419d44fadba27f12a88d04dc89a314333378d65740765a7825209394f41

assets/css/spatial-flow.css
- 613,116 bytes
- 21,815 newline-terminated lines
- SHA256 eddd20e31cf39e084488ba1822791563f98bf2166d31caa97976be43d0e13837

assets/js/spatial-flow.js
- 88,268 bytes
- 2,584 newline-terminated lines
- SHA256 b2b39f9cdf29e6df3121453b19c778861349c94d73671b5d5e31ff57de593eb9
```

A line-ending/editor save transformation can change bytes/hash, so a mismatch is not automatically accepted or rejected. Any mismatch must be diff-audited before runtime testing.

## Locked ownership / scope contracts that remain in force

```text
Desktop primary navigation owner: sf_primary
Tablet/mobile navigation owner: sf_mobile
sf_primary may remain fallback only when sf_mobile is not assigned
WooCommerce taxonomy/product/category authority remains dynamic
Search remains real search behavior
Saved/Wishlist remains YITH authority
Bag/cart count remains WooCommerce authority
Checkout is omitted only from permanent mobile navigation presentation; Woo routing/page remains intact
Journal/blog Header remains outside this Main-site Header redesign
No Footer / Shop archive / Cart / Checkout / Thank You / Single Product implementation change is authorized in this Header batch
```

The withdrawn earlier whole-file ZIP remains historical/internal and must not be reused as a deployment instruction.

## Required returned-source gate
When the four files are returned, verify them as one batch before any browser acceptance:

```text
1. bytes / logical lines / SHA256 for all four files
2. functions.php PHP syntax
3. header.php PHP syntax
4. spatial-flow.js JavaScript syntax
5. spatial-flow.css brace/comment/structural sanity
6. full bounded diff against the approved current-server baselines/candidate
7. verify child version 2.7.47
8. verify sf_primary / sf_mobile ownership contract
9. verify Search / YITH Saved / Woo Bag count / taxonomy URLs were not replaced by hardcoded fake data
10. verify no unrelated closed-page implementation region changed
```

If any file materially diverges from the approved candidate, stop at source audit and diagnose it. Do not proceed to runtime testing merely because the site appears to render.

## Runtime gate after source PASS
Only after the returned-source gate passes, issue one consolidated Header runtime acceptance batch covering desktop, tablet and mobile rather than unnecessary micro-rounds.

Expected coverage includes:

```text
desktop Header shell / true-centered wordmark
desktop Shop attached mega layer and real links
hover/focus stability
tablet 768 / 834 / 1024 state
mobile ~390 root drawer
mobile Shop level 2
taxonomy level 3
Back / Close / reset
Search / Saved / Bag regression
live cart-count truth
no horizontal overflow
Journal Header regression check
backend editability of newly introduced Header copy owners
final user visual acceptance
```

## Current exact stop point

```text
WAIT FOR USER TO RETURN ALL FOUR MODIFIED CURRENT FILES TOGETHER
→ perform one combined returned-source audit
→ record PASS / FAIL in GitHub
→ only after SOURCE PASS enter consolidated runtime acceptance
```

No implementation reissue is required.