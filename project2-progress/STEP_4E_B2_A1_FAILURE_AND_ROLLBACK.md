# Step 4E-B2-A1 · Visual Failure and Exact Rollback

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
B2-A1 manual deletion：Executed exactly.
Uploaded deletion-state metrics：Matched prediction exactly.
Deletion browser result：Failed — Cart layout collapsed severely.
Cause：The deletion batch removed structural Cart CSS still required before replacement CSS existed.
User editing error：No.
B2-A1 acceptance：Rejected.
Exact deleted range reinserted：Passed.
Cart browser layout：Restored by user confirmation.
Restored CSS exact file validation：Passed exactly.
Old B2-A2 deletion-first continuation：Withdrawn permanently.
Cart page status：Not done.
```

## Evidence for the rejected deletion state

```text
Name: spatial-flow(5).css
Size: 731,426 bytes
Lines: 24,531
SHA256: ff341433f0b57881da4962028e5242fa1f5b56fdc40e3c08d7222811870a3487
Opening braces: 3,764
Closing braces: 3,764
Opening comments: 368
Closing comments: 368
CSS parse errors: 0
```

These values exactly matched the B2-A1 prediction. The user performed the requested deletion correctly. The visual failure came from the operation design, not from an incorrect manual edit.

## Failure observed

The Cart product table collapsed into a narrow vertical strip beside Order Summary. Product names, prices, metadata, quantities and row structure no longer retained a usable desktop layout.

This exceeded the acceptable temporary-degradation threshold. A staged cleanup must never leave the live local page in a structurally collapsed state between steps.

## Rollback performed

The exact 35,694-byte / 1,213-line range from `Cart Visual 1 START` through `Cart Visual 1.4.1 ACTION BUTTON OVERLAP FIX END` was reinserted at its original boundary between `Single Product Visual 1 END` and `Cart Visual 2-D START`.

The user then reported that the rollback succeeded, which passed browser-level restoration.

## Exact restored file validation

Uploaded restored file:

```text
Name: spatial-flow(6).css
Size: 767,120 bytes
Lines: 25,744
SHA256: 675ecd3acea94f263ab9ec9b5b02c413ea19f831a0eb18a0ba7e0523d0aab76a
Opening braces: 3,918
Closing braces: 3,918
Opening comments: 397
Closing comments: 397
CSS parse errors: 0
```

Exact comparison with accepted pre-deletion `spatial-flow(4).css`:

```text
Byte equality：True
Different bytes：0
Size delta：0
Line delta：0
Hash delta：None
```

The rollback is therefore complete and exact.

Authoritative validation record:

```text
project2-progress/STEP_4E_B2_A1_ROLLBACK_VALIDATION.md
```

## Revised execution rule

The old B2 plan of deleting structural Cart CSS before replacement is permanently withdrawn.

Future Cart CSS work must use this sequence:

```text
1. Re-audit current cascade responsibilities.
2. Insert a complete scoped replacement layer first.
3. Validate desktop, tablet/mobile and native Cart functions.
4. Remove only legacy selectors proven redundant, in small independently reversible groups.
5. Revalidate after every removal.
```

A large structural deletion-only batch is no longer allowed.

## Next phase

```text
Step 4E-B2-R1 · Cart CSS dependency re-audit：Complete.
Next executable code step：Step 4E-B2-R2 · Complete scoped Cart V2 consolidation layer.
```

No legacy deletion is authorized in B2-R2.