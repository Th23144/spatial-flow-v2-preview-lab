# Step 4F · Package-centric custom grouping UX

Date: 2026-08-08

## User feedback locked for the static candidate

The packaging business logic is accepted provisionally, but the prior custom-grouping presentation was not.

The rejected presentation was item-centric:

```text
Item A -> Package 01 / Package 02 / Package 03
Item B -> Package 01 / Package 02 / Package 03
Item C -> Package 01 / Package 02 / Package 03
```

This looked like a configuration matrix and forced the customer to think in package-number mappings.

## Current candidate direction

### Grouping mode selector

Desktop should use three compact columns because Step 02 already contains many full-width row choices:

```text
Keep everything together
Package every item separately
Choose what goes together
```

Mobile may stack them vertically.

### Custom grouping

Custom grouping is package-centric:

```text
Package 01
- shows the items currently inside
- Standard / Gift choice
- Change items

Package 02
- shows the items currently inside
- Standard / Gift choice
- Change items
```

`Change items` opens an editor inside that package. Items already in the package are shown as `In this package`; items elsewhere offer `Move here`.

The customer therefore thinks:

```text
What is inside this package?
```

instead of:

```text
Which package number should I assign to this item?
```

### Creating additional packages

`Create another package` is shown only inside Custom grouping, where the customer already understands that they are constructing a custom packaging arrangement. A newly created package starts empty and its item editor opens immediately.

### Visual direction

- restore clear bordered package cards; the user explicitly said the boxes themselves were not the problem
- preserve Standard/Gift as stacked full-width rows in the main packaging choice
- use three columns for the three grouping modes on desktop
- avoid a permanent item-to-package-number button matrix
- keep the advanced editor visually subordinate to the main packaging choice

## Status

```text
Business model: provisional accepted
Packaging logic: provisional accepted
Package-centric custom grouping candidate: IMPLEMENTED
User visual/interaction acceptance: PENDING
Live SAFE5/WooCommerce implementation: NOT STARTED
Batch 6: PAUSED
```
