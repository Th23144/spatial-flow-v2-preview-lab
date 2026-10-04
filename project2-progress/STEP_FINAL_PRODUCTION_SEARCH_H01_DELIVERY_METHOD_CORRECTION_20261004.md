# Final Production Search — H01 Delivery Method Correction

Date: 2026-10-04
Project: Spatial Flow V2 / Project 2

## User correction

The previous assistant response incorrectly offered complete replacement files for Search H01.

This conflicts with the locked Project 2 delivery policy.

## Governing rule

`PROJECT2_MANUAL_REPLACEMENT_AND_FILE_SIZE_AUDIT_POLICY.md` states:

- default live-site delivery is manual anchored replacement;
- a downloadable ZIP / complete-file replacement / broad overwrite instruction must not be used unless the user explicitly requests that method for the current step;
- generated complete candidates may exist only as internal comparison artifacts;
- for large files including `functions.php` and `spatial-flow.css`, no routine whole-file overwrite or multi-file package deployment instruction.

The later `PROJECT2_VERIFIED_FULL_FILE_REPLACEMENT_POLICY.md` permits full-file replacement only as a conditional exception when the user chooses that method and every verification gate is satisfied. It does not replace the default anchored method.

`PROJECT2_MULTIFILE_EXECUTION_POLICY_USER_CORRECTION_20260913.md` also requires one coherent feature to be delivered as one coherent multi-file batch, but each file edit must still be a bounded, auditable change.

## Correction

Search H01 will continue from the already-completed DOM/Authority audit, but the user-facing implementation will be reissued as one bounded manual multi-file batch:

- `page-templates/global-search.php`
- `functions.php`
- `assets/css/spatial-flow.css`

For every part:
- exact current baseline;
- exact search anchor / old block;
- expected match count;
- exact replacement block;
- expected byte/line delta;
- stop-on-mismatch rule;
- rollback/reverse replacement;
- combined returned-file source gate before runtime testing.

The previously generated H01 complete candidate files are withdrawn as a deployment method and must not be used to overwrite runtime files.

Status: CORRECTION LOCKED / MANUAL ANCHORED H01 BATCH NEXT.
