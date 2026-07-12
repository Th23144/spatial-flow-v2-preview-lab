# Step 4E-B2-A1 · Visual Failure and Exact Rollback

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
B2-A1 manual deletion：Executed exactly.
Uploaded CSS metrics：Matched the predicted deletion output exactly.
Browser result：Failed — Cart layout collapsed severely.
Cause：The deletion batch removed structural Cart CSS still required before replacement CSS existed.
User error：No.
B2-A1 acceptance：Rejected.
B2-A2：Blocked.
Required action：Restore only the deleted range.
Cart page status：Not done.
```

## Evidence

Uploaded file:

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

These values exactly match the B2-A1 prediction. Therefore the user performed the requested deletion correctly. The visual failure comes from the operation design, not from an incorrect manual edit.

## Failure observed

The Cart product table collapsed into a narrow vertical strip beside Order Summary. Product names, prices, metadata, quantities and row structure no longer retained a usable desktop layout.

This exceeds the acceptable temporary degradation threshold. A staged cleanup must never leave the live local page in a structurally collapsed state between steps.

## Immediate rollback

Restore only the exact deleted range:

```text
Bytes: 35,694
Lines: 1,213
START: /* === Cart Visual 1 START ===
END: /* === Cart Visual 1.4.1 ACTION BUTTON OVERLAP FIX END === */
```

Insert the range at this exact boundary:

```text
after:
/* === Single Product Visual 1 END === */

before:
/* === Cart Visual 2-D PRODUCT META + COUPON ALIGNMENT + PRODUCT-LIKE COMPLETE CARDS START ===
```

Expected restored CSS:

```text
Size: 767,120 bytes
Lines: 25,744
SHA256: 675ecd3acea94f263ab9ec9b5b02c413ea19f831a0eb18a0ba7e0523d0aab76a
Opening braces: 3,918
Closing braces: 3,918
Opening comments: 397
Closing comments: 397
CSS parse errors: 0
```

## Revised execution rule

The old B2 plan of deleting structural Cart CSS before replacement is withdrawn.

Future Cart CSS cleanup must use one of these safer patterns:

```text
1. Replace one small selector group in place and validate immediately; or
2. Insert a complete scoped replacement block first, verify that it owns the required structure, then remove only selectors proven redundant.
```

A large structural deletion-only batch is no longer allowed.

## Gate

Do not begin another Cart CSS operation until:

```text
- the exact deleted range is restored
- the restored CSS file is uploaded
- file metrics match the accepted baseline
- the Cart layout is visually restored
```
