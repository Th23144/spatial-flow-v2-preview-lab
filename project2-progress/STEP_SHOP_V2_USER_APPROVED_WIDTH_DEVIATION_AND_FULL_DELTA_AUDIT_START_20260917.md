# STEP_SHOP_V2_USER_APPROVED_WIDTH_DEVIATION_AND_FULL_DELTA_AUDIT_START_20260917

Date: 2026-09-17
Project: Spatial Flow V2 / 项目二换皮工程
Surface: Main-site Shop archive

## User-approved exception

The user explicitly approved the current Shop width as a controlled deviation from the static reference:

```text
The current website is somewhat wider than the reference.
The user prefers the current wider treatment.
Do not narrow the Shop page solely to match the static reference width.
```

This decision supersedes the earlier audit item that proposed correcting the Shop width to the static reference's `max-width: 1440px` + `56px` inner-gutter model.

## Acceptance implication

For Shop strict 1:1 review, page-width mismatch is now an explicit user-approved deviation under the standing strict-acceptance policy.

Therefore:

```text
CURRENT WIDER SHOP WIDTH = PROTECTED / DO NOT CHANGE
```

Do not use this exception to relax other visual details. All remaining geometry, typography, spacing, borders, image treatment, component hierarchy, interactions and responsive behavior still require detailed comparison against the approved static reference, subject only to other separately documented user-approved deviations and production/data ownership constraints.

## Current status

```text
Shop archive: Not done
Full-detail Delta Audit: STARTED
Production code changes: none in this record
```

## Audit rule from this point

Audit every Shop block and micro-detail, but exclude the overall wider page-width choice from the remediation list.

The audit will classify each delta as one of:

```text
MATCH
STRICT DELTA — FIX
USER-APPROVED DEVIATION — KEEP
DYNAMIC DATA SUBSTITUTE — KEEP OWNER, MATCH GEOMETRY
BACKEND OWNER GAP — FIX WITHOUT FABRICATION
CONTENT / MEDIA QUALITY — NOT TEMPLATE BUG
```

Protected global systems remain CLOSED unless a concrete regression is discovered:

- Main-site Header V2
- Main-site Footer V2
- Single Product
- Cart
- Checkout
- Thank You / Order Result
