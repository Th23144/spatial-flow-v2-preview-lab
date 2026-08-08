# Step 4F · Product Packaging stacked-row correction

Date: 2026-08-08
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User correction

The previous interpretation of the visible Standard / Gift Packaging layout as two desktop columns was incorrect.

The required presentation is:

```text
Row 1: Standard Packaging
Row 2: Gift Packaging
```

This applies on desktop as well as smaller layouts. Each tier is one full-width horizontal card within the Product Packaging section.

## Distinct tier details

The two packaging tiers must not share one generic expanded information area.

Standard Packaging owns Standard-specific content only:

```text
- included / free price state
- quiet protective everyday presentation
- optional personalized name
- personalized-name input when Standard is selected
```

Gift Packaging owns Gift-specific content only:

```text
- provisional +$9.00 fee
- refined gift-oriented presentation
- gift card/message support
- gift-message textarea when Gift is selected
```

Selecting one tier reveals only that tier's own detail area.

## Advanced grouping

`Customize product groups` remains below both primary packaging rows and is not part of the basic Standard/Gift selection.

Its purpose remains mixed packaging within one order, such as:

```text
Product A -> Gift Packaging
Product B -> Standard Packaging
Product C + D -> one Gift Packaging Group
```

Separate Product Packaging Groups still do not imply separate courier shipments.

## Implementation boundary

This correction applies only to the isolated static candidate reference at this stage.

```text
Live SAFE5 / WooCommerce implementation: NOT STARTED
Batch 6: PAUSED
```

The candidate must be visually accepted before live implementation begins.
