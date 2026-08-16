# Project 2 · Verified Full-File Replacement Policy

Date locked: 2026-08-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Purpose and precedence

The user has explicitly authorised complete-file replacement for future Project 2 steps **only when the replacement is protected by a machine-verifiable preflight, audited diff boundary, postflight verification, and immediate rollback path**.

This policy is a later explicit exception to `PROJECT2_MANUAL_REPLACEMENT_AND_FILE_SIZE_AUDIT_POLICY.md`.

It does **not** abolish anchored manual replacement. Manual anchored replacement remains the fallback whenever any verification gate below cannot be satisfied.

## 2. Core safety principle

A complete-file replacement is permitted only when the current live source is proven to be exactly the same source used to build the candidate.

```text
CURRENT LIVE FILE
-> exact bytes / logical lines / SHA256 captured
-> candidate generated from that exact source
-> full diff audited
-> only authorised regions changed
-> syntax/parser/structure checks pass
-> rollback copy prepared
-> candidate SHA256 published
-> replacement performed
-> installed file SHA256 must equal candidate SHA256
-> runtime testing only after postflight PASS
```

If the pre-replacement SHA256 differs from the recorded baseline, **STOP**. Do not overwrite the file.

This single rule prevents a complete replacement from silently deleting edits that appeared after the candidate was generated.

## 3. Mandatory preflight gate

For every file included in a verified whole-file replacement, record before deployment:

```text
- exact runtime path
- current byte size
- current logical line count
- current SHA256
- syntax/parser/structure result
- candidate byte size
- candidate logical line count
- candidate SHA256
- byte delta
- line delta
- exact explanation for all material growth/shrinkage
```

The candidate must have been generated directly from the recorded current live file, not from an older repository copy, remembered source, stale upload, or reconstructed approximation.

## 4. Full-diff audit gate

Before the user receives a complete replacement file, the assistant must compare the candidate against the exact live baseline and prove that every changed hunk belongs to the authorised scope.

For large files, the audit must explicitly state which regions are allowed to change.

Examples:

```text
functions.php
- theme version constant
- named Customizer section/function only
- all other bytes unchanged

assets/css/spatial-flow.css
- one named START/END owner block only
- prefix before START byte-identical
- suffix after END byte-identical

WooCommerce template
- template replacement may be whole-file only when that template itself is the authorised component owner
- all WooCommerce hooks/data authorities required by the implementation contract must be verified after replacement
```

If unrelated hunks appear, complete-file replacement is prohibited and the task falls back to anchored replacement.

## 5. Backup / rollback gate

Before replacement, create or require a timestamped backup of the exact current live file(s).

Minimum rollback state:

```text
<filename>.pre-<step>-<timestamp>.bak
```

For a multi-file replacement batch, preserve all files from the same pre-change state in one backup folder or archive and record their SHA256 values.

Rollback must be possible without reconstructing old code from chat.

## 6. Replacement and postflight gate

Immediately after replacement, before opening the affected page for runtime testing:

```text
- recalculate installed bytes
- recalculate installed logical lines
- recalculate installed SHA256
- compare installed SHA256 with published candidate SHA256
- run syntax/parser/structure validation
```

Required examples:

```text
PHP -> php -l
JavaScript -> node --check where applicable
CSS -> brace balance + comment balance + parser/structural check
```

If the installed SHA256 does not equal the candidate SHA256, **STOP and rollback**.

Runtime/browser testing is forbidden until postflight identity and syntax both pass.

## 7. Atomic multi-file batches

A multi-file complete replacement is allowed only when the files form one coherent implementation batch and all of them pass preflight first.

The batch procedure is:

```text
verify all current SHAs
-> back up all target files
-> replace all target files
-> verify all candidate SHAs
-> run all syntax/parser checks
-> if any file fails, rollback the whole batch
-> only then perform runtime testing
```

Do not leave a partially applied multi-file state if one file fails verification.

## 8. User-facing delivery requirements

When using this policy, the assistant must not simply say "replace these files".

The delivery must include:

```text
Verified Full-File Replacement: YES
Why this batch qualifies
Current baseline manifest
Candidate manifest
Authorised diff regions
Backup instruction
Replacement order
Post-replacement verification method
Exact expected SHA256 values
Automatic/manual rollback trigger
```

A complete candidate file may be provided only after these items exist.

## 9. Automatic verification preferred

When practical, prefer a small verification/apply script that:

```text
1. verifies current SHA256 values
2. aborts on mismatch
3. creates timestamped backups
4. copies candidate files
5. verifies candidate SHA256 values
6. runs syntax/structure checks
7. automatically restores backups on failure
8. writes a result manifest/log
```

The script must never overwrite a file whose current SHA differs from the approved preflight baseline.

A script is a safety mechanism, not permission to bypass the diff audit.

## 10. When full-file replacement is still prohibited

Fall back to manual anchored replacement when any of the following is true:

```text
- current live SHA is unknown or does not match the candidate base
- the user cannot provide/access the current file
- the diff contains unrelated or unexplained changes
- ownership boundaries are unclear
- the candidate is based on an older repository copy
- syntax/parser validation is unavailable for a risky change
- the rollback source is not available
- a plugin/theme updater may be concurrently modifying the same file
```

## 11. Interaction with Strict 1:1

This policy changes only **deployment mechanics**.

It does not relax `PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md`.

Strict 1:1 still requires the approved static source to control geometry, typography, spacing, surfaces and responsive behaviour, subject only to the documented production exceptions.

## 12. Current Step 04 application

The previously generated Step-04 2.7.15 complete candidates remain internal artifacts until they are requalified under this policy.

Because the user has not applied them, the live theme remains on the verified 2.7.13 baseline.

Before Step 04 complete-file deployment is reissued, Project 2 must:

```text
- use the fresh live files already supplied in the conversation as the exact base
- produce and record full-diff boundaries for functions.php, thankyou.php, and spatial-flow.css
- create a baseline/candidate manifest
- prepare a rollback-safe verification method
- then reissue the candidate files under this policy
```

## 13. Status

```text
Policy: LOCKED
Authorisation: user explicitly granted a standing exception on 2026-08-16, conditional on the verification gates above
Manual anchored replacement: fallback
Verified full-file replacement: permitted when every gate passes
Zero-risk guarantee: impossible; controlled/reversible risk is the target
```
