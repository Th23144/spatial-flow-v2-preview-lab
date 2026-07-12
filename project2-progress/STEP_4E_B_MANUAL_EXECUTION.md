# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-A audit：Complete.
Whole-file Cart candidate：Withdrawn / Do not apply.
Step 4E-B0 exact manual map：Complete.
Step 4E-B1-A through B1-H：Passed.
Step 4E-B2-A1 deletion：Executed exactly but browser validation failed.
Current required action：Restore only the deleted B2-A1 range.
B2-A2：Blocked.
Cart page status：Not done.
```

## Current authoritative records

```text
project2-progress/STEP_4E_B0_MANUAL_MAP.md
project2-progress/STEP_4E_B1_H_VALIDATION.md
project2-progress/STEP_4E_B2_A1_REMOVE_LEGACY_CART_BASE_CSS.md
project2-progress/STEP_4E_B2_A1_FAILURE_AND_ROLLBACK.md
```

The failure-and-rollback record supersedes the prior instruction to accept the deletion-only intermediate state.

## Non-negotiable execution rule

```text
- no ZIP or complete replacement file as the implementation method
- no blind overwrite of functions.php or spatial-flow.css
- no combined PHP + CSS operation
- no later substep before the previous file is re-read or exact metrics are verified
- no Cart template override
- no Cart-specific JavaScript unless a real native interaction defect is proved
- no large structural CSS deletion before a validated replacement owns the same layout responsibility
```

Every executable operation must include exact anchors, expected delta, validation checks, visible expectation, independent rollback, and required evidence.

## Current PHP baseline

```text
File: functions.php
Uploaded name: functions(12).php
Version: 2.7.8
Size: 550,884 bytes
Lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
PHP syntax: Passed
Braces: 1,200 / 1,200
```

PHP remains unchanged by B2-A1.

## Accepted CSS baseline before B2-A1

```text
File: assets/css/spatial-flow.css
Uploaded name: spatial-flow(4).css
Size: 767,120 bytes
Lines: 25,744
SHA256: 675ecd3acea94f263ab9ec9b5b02c413ea19f831a0eb18a0ba7e0523d0aab76a
Braces: 3,918 / 3,918
Comments: 397 / 397
CSS parse errors: 0
```

## Rejected B2-A1 output

```text
Uploaded name: spatial-flow(5).css
Size: 731,426 bytes
Lines: 24,531
SHA256: ff341433f0b57881da4962028e5242fa1f5b56fdc40e3c08d7222811870a3487
Braces: 3,764 / 3,764
Comments: 368 / 368
CSS parse errors: 0
```

The uploaded output exactly matched the requested deletion. The user did not make an editing mistake. The operation itself removed structural Cart CSS still required by the current DOM and caused the desktop Cart layout to collapse.

## Current executable step

### Step 4E-B2-A1-RB · Restore the exact deleted range

```text
Restore bytes：35,694
Restore lines：1,213
Insert after：/* === Single Product Visual 1 END === */
Insert before：/* === Cart Visual 2-D PRODUCT META + COUPON ALIGNMENT + PRODUCT-LIKE COMPLETE CARDS START ===
Expected restored size：767,120 bytes
Expected restored lines：25,744
Expected restored SHA256：675ecd3acea94f263ab9ec9b5b02c413ea19f831a0eb18a0ba7e0523d0aab76a
Expected braces：3,918 / 3,918
Expected comments：397 / 397
Expected CSS parser errors：0
```

Authoritative record:

```text
project2-progress/STEP_4E_B2_A1_FAILURE_AND_ROLLBACK.md
```

Do not start a replacement or another deletion until the restored CSS is uploaded and the Cart layout is confirmed normal.