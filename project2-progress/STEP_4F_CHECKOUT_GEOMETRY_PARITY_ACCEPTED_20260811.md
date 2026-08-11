# Step 4F — Checkout geometry parity accepted — 2026-08-11

Status: ACCEPTED · DESKTOP GEOMETRY PARITY CONFIRMED

## Purpose

Close the temporary checkout-width diagnostic that was pulled forward during Product Packaging visual parity work.

## Runtime evidence

After removing the legacy `.entry-content > .woocommerce` width/margin/padding constraint from the SAFE5 checkout geometry ownership, the real checkout was measured with detached Chrome DevTools so DevTools did not reduce `window.innerWidth`.

Real checkout runtime at viewport 1920×991, DPR 1:

- `.sf-safe5-intro`: width 1440px, left 232.5px, padding 56px / 56px, gap 80px
- `.sf-safe5-shell`: width 1440px, left 232.5px, padding 56px / 56px, gap 80px
- `.sf-safe5-main`: width 728px
- `.sf-safe5-summary`: width 520px

## Canonical reference contract

Current `main/preview/spatial-flow-checkout-flow-v1.css` defines:

- `--max: 1440px`
- `--gutter: 56px`
- `.checkout-shell { grid-template-columns: minmax(0, 7fr) minmax(360px, 5fr); gap: 80px; width: min(100%, var(--max)); padding: 58px var(--gutter) 96px; }`

With global `box-sizing: border-box`, the reference geometry at a viewport wider than 1440px resolves exactly to:

- shell 1440px
- inner horizontal space = 1440 - 112 padding - 80 gap = 1248px
- 7/12 column = 728px
- 5/12 column = 520px

This exactly matches the real SAFE5 runtime measurements.

## Conclusion

Desktop checkout width/frame geometry is now at strict parity with the canonical static reference. The width phase does not need further changes at this point.

The temporary sequence adjustment is complete:

Packaging functional runtime PASS → Packaging Visual Parity V1 source PASS → Checkout outer-width diagnosis/fix → Desktop geometry parity ACCEPTED → resume Packaging / Order Summary micro visual parity.

## Important scope note

Do not change `.sf-safe5-shell` `1440 / 56 / 7fr:5fr / 80px` geometry unless new evidence proves a separate viewport-specific mismatch. Remaining visible differences should now be treated as component-level typography, spacing, borders, content hierarchy, and Order Summary presentation issues—not a desktop shell-width problem.
