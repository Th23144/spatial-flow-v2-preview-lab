# Shop V2 — Editor's Pick bottom-anchor experiment rejected and reverted

Date: 2026-09-17

## Runtime result

The attempted three-row grid layout:

- main content at top
- flexible spacer in the middle
- price / View Piece footer anchored to the bottom

was visually worse than the previous state.

The user explicitly rejected the result and reverted it.

## Why it failed

The experiment converted the existing visual imbalance into a larger artificial vertical void between the editorial copy and the footer. The footer became too detached from the text block and the composition looked mechanically stretched to match the image height.

This confirms that the Editor's Pick right column should NOT be forced to consume the full media height via a bottom-anchored footer.

## Preserved decisions

- Keep the approved horizontal structure.
- Do not shift the whole right column left.
- Do not force product short descriptions to a minimum length.
- Do not solve short content by pinning the footer to the image bottom.
- Keep the current product-data ownership and fallback behavior already accepted.
- The user has reverted the failed CSS experiment.

## Next direction

Return to the previous accepted visual baseline and solve the remaining emptiness with local optical spacing/density only, not full-height distribution. Any next adjustment should be small and screenshot-driven.
