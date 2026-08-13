# Project 2 · Checkout SAFE5 · Coupon Non-Reference Extension Visual Policy · 2026-08-12

Status: LOCKED · DESIGN EXTENSION, NOT STRICT 1:1 REFERENCE ITEM

## Decision
The current Checkout reference page does not contain an interactive coupon-entry row. Therefore the live SAFE5 coupon area is not judged as a strict 1:1 reference reproduction item.

It is a necessary live WooCommerce feature extension and must instead follow these rules:

1. WooCommerce remains the functional/server authority for coupon application/removal.
2. The extension must visually inherit the accepted Checkout reference language.
3. It should have the lowest reasonable visual presence and must not introduce a competing card, floating frame, heavy divider stack, or nested-panel language.
4. The closed state should read as a lightweight action row, not as a second card inside Order Summary.
5. The expanded state may show the input/button controls, but should still avoid extra framing beyond the controls themselves.
6. This is a custom design cleanup, not a strict 1:1 discrepancy against the reference.

## Current issue observed
The closed coupon area visually reads like a transparent/invisible framed strip because the Order Summary header divider plus the coupon area's own divider create a boxed band. The lower horizontal line is also visually heavier than desired.

## Planned correction
Keep the existing coupon functionality and DOM. Reduce visual ownership in the existing `.sf-safe5-coupon` / `.sf-safe5-coupon-panel` CSS owner by removing redundant divider/framing behavior and relying primarily on whitespace plus the actual input/button borders in the expanded state.

## Maintenance rule
Do not add a new tail `FIX` block. Make the correction by replacing/merging inside the existing SAFE5 coupon owner.
