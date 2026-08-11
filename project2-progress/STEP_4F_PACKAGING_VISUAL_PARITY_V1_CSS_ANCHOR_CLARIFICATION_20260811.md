# Step 4F · Product Packaging Visual Parity V1 · CSS Anchor Clarification

Date: 2026-08-11
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Correction

The prior manual-install instructions used selector-only anchors such as `.sf-safe5-packaging-primary-option__facts`.

That selector appears in both desktop and mobile Packaging CSS, so selector-only search is ambiguous and is not acceptable for this manual replacement workflow.

## User state

The user reports:

```text
D1 completed.
D2 and every later CSS step have NOT been applied.
```

Therefore D2-D9 must be reissued from the accepted current Packaging CSS baseline plus completed D1 only.

## Replacement rule

For D2-D9:

- do not instruct the user to search a selector name alone when it has multiple hits;
- use a full old block or a multi-line unique anchor;
- state whether the block is desktop or inside `@media (max-width: 760px)`;
- where only one property changes, still identify the complete containing block;
- stop if the complete old block does not match exactly once in the intended scope.

No runtime/business logic change is introduced by this clarification.
