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
Step 4E-B2-A1 rollback：User confirmed browser restoration succeeded.
Restored CSS file validation：Pending upload.
Old B2-A2 deletion-first continuation：Withdrawn / blocked.
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

PHP remained unchanged throughout B2-A1 and its rollback.

## Accepted CSS baseline to restore

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

## Rollback state

The exact deleted range was reinserted at the original boundary. The user confirmed that the Cart layout was restored successfully.

Expected restored metrics:

```text
Size: 767,120 bytes
Lines: 25,744
SHA256: 675ecd3acea94f263ab9ec9b5b02c413ea19f831a0eb18a0ba7e0523d0aab76a
Braces: 3,918 / 3,918
Comments: 397 / 397
CSS parse errors: 0
```

## Current executable gate

```text
Upload the restored spatial-flow.css for exact rollback validation.
```

No new Cart CSS deletion or insertion begins until the restored file matches the accepted baseline.

## Next strategy after file validation

The old deletion-first B2-A2 plan will not resume.

Future work must use:

```text
- one small selector-group replacement at a time; or
- one complete scoped replacement layer first, validated before removing only proven redundant old selectors
```

The exact next CSS operation will be designed only after the restored file is re-read.