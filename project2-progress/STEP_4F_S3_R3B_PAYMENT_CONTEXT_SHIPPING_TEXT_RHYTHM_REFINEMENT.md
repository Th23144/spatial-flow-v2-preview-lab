# Step 4F · S3-R3B · Payment Context Shipping Text Rhythm Refinement

Last updated: 2026-07-31  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Checkout: Not done
Static Step 03: under visual review
Live WordPress / WooCommerce source: unchanged
```

## User-approved refinement

The Step-03 `Before it leaves.` card was accepted after the previous density correction, with one remaining micro-adjustment:

```text
Reduce the vertical rhythm between:
Shipping Method label
→ confirmed shipping method name
→ estimate / price
```

The target rhythm is the existing spacing used by the adjacent `Deliver to` and `Contact` sections.

## Root cause

The shared `.context-value` rule uses:

```css
white-space: pre-line;
```

This is required for the multiline address output, but inside the Step-03 right-side Shipping Method markup it also preserved source-formatting line breaks around the block-level `strong` and `small` elements, creating visible extra blank space.

## Bounded correction

Only the Step-03 right-side context value now uses:

```css
.checkout-step-payment .context-card__secondary .context-value {
  white-space: normal;
}
```

This collapses source-formatting whitespace while preserving:

```text
- all visible content
- Shipping Method label
- confirmed method name
- estimate and price
- desktop/mobile internal grid
- Address and Contact typography
- Edit actions
```

## Non-scope

No changes were made to:

```text
- Step 02
- Address content
- Contact content
- Order Summary
- Payment method area
- other Checkout pages
- live WordPress / WooCommerce files
```

## Source commit

```text
7641fe82073564132357dd810785a8b8a82ad8d6
```

## Naming note

This record intentionally uses `S3-R3B`, not `FIX4`. The previously cancelled Project-2 FIX4 remains cancelled and must never be executed.
