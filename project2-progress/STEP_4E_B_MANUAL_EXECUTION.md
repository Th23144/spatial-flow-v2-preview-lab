# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-19  
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
R5-E4 strict geometry, canvas, breadcrumb and recommendation visual rebase：Passed / closed.
R5-E5 notice source audit and bounded CSS artifact：Passed technically.
R5-E5 runtime visual acceptance：Failed / rejected.
R5-E5-FIX1 loading-frame source audit：Complete.
Current executable phase：Apply R5-E5-FIX1 to spatial-flow(26).css, then exact pre-deploy validation.
Cart page status：Not done.
```

## Accepted stable baselines

```text
functions.php
Deployed artifact: functions(17).php
Version: 2.7.8
Size: 555,130 bytes
Logical lines: 10,366
SHA256: ab7c9b1a893b2fdfaf8db7947fcf82974e8c1d71b54c8f0d17fe32029e5f5d86
PHP syntax: Passed
Braces: 1,215 / 1,215

assets/css/spatial-flow.css
Last accepted Cart visual artifact: spatial-flow(26).css
Size: 697,699 bytes
Logical lines: 23,389
SHA256: 1699ee8bfc66ab2dd4c9229b04f61be8ec92386493ac33665275bc9d91638e66
Braces: 3,633 / 3,633
Comments: 341 / 341
CSS parser errors: 0

assets/js/spatial-flow.js
Unchanged accepted baseline
Size: 70,828 bytes
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
```

## Rejected R5-E5 artifact

```text
spatial-flow(28).css
Size: 697,513 bytes
Logical lines: 23,384
SHA256: 2120e5639f780a2eb370b5776fb78dcc470f3049d5a921badf2aef1d23261015
```

It changed the live notice but was rejected because it still looked like a standalone status component.

## New loading-frame diagnosis

The user supplied normal and quantity-update screenshots showing the left Cart region reading like a picture frame and becoming an explicit pale rectangle during loading.

The Canonical Cart form is already reset to transparent, borderless, zero-radius and shadowless. The width correction did not introduce a form card.

The direct source is the native WooCommerce BlockUI overlay injected over the rectangular bounds of the Cart form and Order Summary. The current CSS contains no `.blockUI` / `.blockOverlay` ownership. The wider 7fr form column makes that native white overlay footprint more visible, but width is not the direct defect.

## Current operation · R5-E5-FIX1

Follow exactly:

```text
project2-progress/STEP_4E_B2_R5_E5_FIX1_LOADING_FRAME_AUDIT_AND_MANUAL_FIX.md
```

Start from:

```text
spatial-flow(26).css
```

The bounded FIX1 contains two operations:

```text
A. add Cart-scoped BlockUI surface and restrained loader ownership inside the Canonical Cart owner
B. replace the rejected Cart Notice block with quiet editorial text feedback
```

Predicted exact artifact:

```text
Size: 697,642 bytes
Logical lines: 23,387
SHA256: 74afc4c8f3989c37aa937581687423de3d9ae34294034e363e0cd2cee66e87f7
Braces: 3,636 / 3,636
Comments: 337 / 337
CSS parser errors: 0
Line endings: LF
Final newline: present
```

Do not deploy before exact edited-file validation.

Do not modify PHP, JavaScript, templates, Cart geometry, breadcrumb, recommendation logic, Header/Footer or version 2.7.8.

## Remaining sequence

```text
R5-E5-FIX1 manual CSS edit + exact artifact validation
→ R5-E5 runtime loading/notice/Undo acceptance
→ R5-E6 final strict functional + visual acceptance
→ binary Cart status decision
```