# STEP_SHOP_V2_FIRST_RUNTIME_VISUAL_REVIEW_NOT_ACCEPTED_20260917

Date: 2026-09-17
Project: Spatial Flow V2 / 项目二换皮工程
Surface: Main-site Shop archive

## Status

FIRST RUNTIME VISUAL REVIEW: NOT ACCEPTED

The user supplied fresh desktop and mobile full-page screenshots after the first remediation batch.

## Important conclusion

The batch produced several real structural/microtypographic changes, but the overall page still reads visually almost the same at normal viewing scale. Therefore this batch must not be treated as sufficient progress toward strict 1:1 acceptance.

The page remains:

```text
Shop archive: Not done
```

## Changes that are actually visible / present

- Root breadcrumb logic was simplified.
- Sort area now includes the `Arrange by` label.
- The extra `THE COLLECTION` layer above the product section is gone.
- Closing-note kicker was removed.
- Product-card template now supports editorial metadata / placement data and hover `View piece` presentation.
- Pagination presentation was restructured.
- Several microtype changes were applied.

## Why the user reasonably perceives little difference

1. Most changes were small typography or structural corrections rather than high-impact visual geometry changes.
2. Several new product-card layers are conditional on real per-product metadata and therefore do not appear on products where those fields are empty.
3. `View piece` is hover/focus-only on desktop and intentionally hidden on mobile, so it is absent from static full-page screenshots.
4. The user-approved wider Shop container was intentionally preserved, so one of the largest possible geometric differences was not changed.
5. The remaining strict 1:1 delta is distributed across many small but cumulative details: module spacing, typography scale, line-height, vertical rhythm, product-card density, pagination composition, closing-note proportions, and mobile spacing.

## Process correction

Do not continue by editing isolated selectors from source alone.

Next phase must use the fresh runtime screenshots as the primary current-state evidence and compare each visible block directly against the approved static reference. Prioritize visually material deltas first, then fine microtype.

Execution rule:

```text
Reference visual block
→ Current screenshot block
→ Visible delta
→ Exact source owner
→ One coherent replacement batch
→ Fresh runtime screenshots
```

Do not claim progress merely because source changes were made. Runtime visual delta is the acceptance evidence.

## Protected decision

Keep the current wider Shop page width as an explicit user-approved deviation from the static reference.
