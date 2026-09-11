# Project 2 · Step 4D-REOPEN · Gallery navigation product decision discussion · 2026-09-11

## Current stage

Single Product Hero / Summary strict 1:1 back-audit.

## User question

The user is reconsidering whether Gallery image-switch controls should remain because future products may contain more than four gallery images, while the large-image area should still show only four thumbnails at a time.

## Product implication

This is a deliberate product/UX exception discussion relative to `preview/spatial-flow-product-v1.html`, whose static sample shows four thumbnails and no persistent main-image previous/next control.

The future real product requirement introduces a new constraint:

```text
0-4 gallery images -> all thumbnails can be visible at once
5+ gallery images -> only four thumbnails remain visible at once, but the user still needs a discoverable way to reach additional images
```

Therefore removing every navigation affordance would make 5+ image galleries incomplete unless the thumbnail strip itself gains pagination/scroll navigation.

## Recommended direction for decision

Prefer keeping image navigation capability, but do not keep the current large round previous/next buttons over the main image as-is.

Recommended UX:
- main image remains visually close to the reference;
- thumbnail viewport shows exactly four thumbnails;
- when total image count <= 4: no extra thumbnail navigation control;
- when total image count > 4: reveal restrained previous/next controls associated with the thumbnail strip, not dominant circular controls over the main image;
- desktop may support mouse-wheel/trackpad horizontal thumbnail movement and explicit arrows;
- mobile may support swipe/drag plus compact arrows or edge affordances;
- changing the selected thumbnail still changes the large image;
- optional main-image swipe/keyboard navigation may remain as supplemental behavior, but must not dominate the visual composition.

## Why this is preferred

This preserves the reference's quiet editorial Hero while making the gallery scale beyond four real product images.

It also keeps the user's explicit hard requirement: the page should not visually expand into more than four thumbnails at once.

## Status

No final product decision yet. No source edit authorized by this record.

## Current stop point

```text
GALLERY NAVIGATION PRODUCT DECISION PENDING
```

## Exact next action

Discuss whether the user prefers:
A. four-thumbnail window + subtle thumbnail-strip prev/next controls;
B. four-thumbnail window + horizontal scroll/swipe only;
C. preserve current main-image previous/next buttons as an intentional reference exception.

After user choice, record the final UX decision before source implementation.
