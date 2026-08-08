# Step 4F · Product Packaging Candidate · Two-Column Distinct-Details Revision

Date: 2026-08-08  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user rejected the previous packaging candidate presentation for two reasons:

1. Standard Packaging and Gift Packaging must be presented as two clear columns on desktop.
2. Their expanded information must not reuse the same content structure because the two services provide different benefits and inputs.

## Locked visual direction for the next candidate review

Desktop:

```text
Standard Packaging column | Gift Packaging column
```

Mobile:

```text
Standard Packaging
Gift Packaging
```

The two choices remain visible at the same time. The customer does not need to open an advanced editor merely to discover that Gift Packaging exists.

## Distinct detail ownership

### Standard Packaging

Current candidate semantics:

```text
Price: $0.00 / included
Purpose: ordinary protective product presentation
Optional feature: personalized name on the product package
Expanded control: Personalized name input
```

The personalized-name feature is enabled by default in the current candidate but remains a future admin on/off control in the live implementation.

### Gift Packaging

Current candidate semantics:

```text
Price: provisional +$9.00 per non-empty Gift Packaging Group
Purpose: refined gift-oriented product presentation
Included feature: gift card
Optional feature: gift-card message
Expanded control: Gift card message textarea
```

Gift Packaging must not display the Standard Packaging personalized-name detail as if both services were identical.

## Advanced grouping remains secondary

The Product Packaging Groups editor remains below the two primary columns:

```text
Need different packaging for different products?
[ Customize product groups ]
```

It is for mixed orders such as:

```text
Product A -> Standard Packaging
Product B -> Gift Packaging
Product C + D -> one shared Gift Packaging Group
```

Separate Product Packaging Groups still do not imply separate courier shipments.

## Cache-safe visual asset

A new candidate-only stylesheet was added:

```text
preview/spatial-flow-checkout-packaging-v3.css
```

The candidate HTML loads this after the older packaging stylesheet so the two-column card structure and distinct per-tier detail areas do not depend on a cached earlier packaging CSS version.

## Files changed

```text
preview/spatial-flow-checkout-packaging-v1.html
preview/spatial-flow-checkout-packaging-v3.css
```

No live SAFE5 / WordPress / WooCommerce implementation was changed.

## Status

```text
Two-column packaging candidate revision: IMPLEMENTED
User visual acceptance: PENDING
Live SAFE5/Woo implementation: NOT STARTED
Batch 6: PAUSED
```
