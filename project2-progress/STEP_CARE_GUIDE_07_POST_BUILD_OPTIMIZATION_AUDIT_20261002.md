# Care Guide 07 — Post-build Optimization Audit

Date: 2026-10-02
Project: Spatial Flow V2 / Project 2

## User assessment

User says Care Guide 07 is "还不错" and asks whether further optimization is needed.

## Independent audit conclusion

07 is now a viable visual / structural base.

The major architecture should NOT be redesigned again.

Remaining work is a bounded refinement pass, not a new concept.

## What is working

- Category-first routing is clear.
- One-page filtered interaction remains usable.
- The selected category now behaves like teaching content, not a pure text reference.
- Image/text alternation creates a more appropriate instructional rhythm.
- The layout can tolerate later copy rewrites without collapsing.

## Remaining issues before acceptance

### 1. Prototype / implementation copy is still visible

Several current notes are authoring instructions rather than user-facing care content, e.g.:
- "A short visual reminder can sit here later..."
- "Placement guidance stays secondary..."
- "The image position can later show..."
- "The page stays compact..."
- "one page, filtered by object"

These must not survive into the final visual authority.

### 2. Image repetition is still too obvious

Jewelry and Crystal teaching blocks reuse the same source image with different crops.

This is acceptable for layout testing only, but it prevents a real assessment of the teaching value.

Final imagery should differentiate:
- object / everyday state;
- cleaning / handling close-up;
- storage / placement / context.

### 3. Module rhythm is too mechanically alternating

All teaching blocks use the same large 5:4 image + text formula with left/right alternation.

This is cleaner than the previous text-heavy layout, but nine identical teaching modules can become predictable.

A final refinement should introduce restrained variation:
- one dominant image-led module;
- one compact detail / caution module;
- one split or mini-step module.

Do not introduce a card wall.

### 4. Caution / "what to avoid" information needs stronger instructional treatment

At present warnings often appear as muted note paragraphs.

For teaching content, a small, consistent "Avoid / Note" treatment would improve scanability without turning the page into warning signage.

### 5. Selected-category transition can be tighter

The active panel starts with another large category heading after the user has just selected that category above.

The heading is useful, but the vertical handoff can be compressed so selection → teaching feels more immediate.

### 6. Mobile requires explicit visual QA

The CSS collapses image/text blocks to one column and removes reverse ordering, which is directionally correct.

But 360–430px still needs real visual inspection for:
- image height;
- heading wrapping;
- note density;
- change-category placement;
- cumulative page length.

### 7. Placeholder copy / image assets remain non-authoritative

Current copy and Unsplash images are prototype content.

Before production mapping:
- replace temporary images with real Spatial Flow imagery;
- replace placeholder / authoring language with real editable Care Guide fields;
- verify factual care guidance against actual product/material scope.

## Recommendation

Proceed with one final bounded refinement pass (07.1 / 08), focused on:
- removing prototype language;
- varying teaching-module composition slightly;
- adding a restrained reusable caution treatment;
- tightening the category-to-content handoff;
- preparing image slots for real assets;
- mobile visual QA.

Do NOT restart the information architecture.

## Status

CARE GUIDE 07 = VIABLE BASE / NOT YET USER-ACCEPTED.
NEXT = BOUNDED REFINEMENT, NOT REDESIGN.
NO PRODUCTION MAPPING.
