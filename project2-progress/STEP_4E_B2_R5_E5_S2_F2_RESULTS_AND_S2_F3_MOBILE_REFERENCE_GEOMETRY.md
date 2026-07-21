# Step 4E-B2-R5-E5-S2-F2 Results · S2-F3 Mobile Reference Geometry

Last updated: 2026-07-21  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
S2-F2 Test D, both horizontal boundaries removed: Improved / frame became lighter.
S2-F2 Test E, inset final divider retained: No change.
Single divider-width explanation: Rejected.
Shared-axis-only explanation: Rejected.
Cart page status: Not done.
Current executable substep: S2-F3 zero-source mobile reference-geometry test.
```

## 1. Interpretation of D and E

```text
- Both horizontal boundaries contribute to the visible bounded band.
- Removing both boundaries still does not eliminate the user's rejected frame perception.
- Shortening only the final divider does not change the perception.
- Therefore neither the final divider alone nor its full-width axis is the principal owner.
```

No source edit is authorized from Test D or Test E.

## 2. Newly confirmed static-reference mismatch

Authoritative reference:

```text
preview/spatial-flow-cart-v1.html
```

Reference responsive contract:

```text
At <= 720px:
- item row becomes 80px + 1fr

At <= 480px:
- item row becomes one column
- item image remains capped around 100px
```

The user's current phone screenshot is approximately 417px wide. At that width the approved static reference is in its one-column item state.

Current production Cart CSS instead keeps this two-column row for the entire <= 767px range:

```css
grid-template-columns: 84px minmax(0, 1fr) !important;
```

No narrower <= 480px Cart-item stack rule exists in the current Canonical Cart block.

## 3. Current hypothesis

The residual picture-frame perception may be structural rather than painted:

```text
- image and all item controls remain arranged as one horizontal two-column band
- the band spans the full Cart content width
- removing fill, radius, shadow and dividers only weakens the band
- the approved 417px reference would instead break that horizontal silhouette into a vertical editorial stack
```

This hypothesis is directly grounded in the approved static responsive rules and explains the D/E outcomes better than another border or background deletion.

## 4. S2-F3 Test F — temporary <= 480px one-column item geometry

DevTools/Console only. No source file is modified.

The test must:

```text
- apply only at <= 480px
- change the real Cart item row to one column
- place thumbnail first
- place title/meta below the image
- keep Remove accessible at the top-right
- place quantity below title/meta
- place subtotal below quantity
- preserve the final divider
- leave Order Summary, Coupon, PHP and JavaScript untouched
```

Interpretation:

```text
Test F disappears or materially improves:
The principal defect is the missing <= 480px reference breakpoint. Author S2-G as a bounded in-place phone geometry correction.

Test F has no meaningful effect:
Do not edit source. Continue with computed-style/live DOM ownership diagnostics.
```

## 5. Locked deployed state

```text
functions.php SHA256:
5bd9f8b307d1b59eaa92bf31d3640e2d4ba48bca4de7a640b705d5e75f9ef00b

assets/js/spatial-flow.js SHA256:
7442ee92167ae383b933c6db0281f14ea56a75733339818c3e4858d77d52651b

assets/css/spatial-flow.css SHA256:
4bce679ee3c2abca6bcc0dfd4733d92d0c8b77e16b7a0bbf7d7832e305cff6b6

Version: 2.7.8
```

## 6. Boundaries

```text
- no source file edit during S2-F3
- no CSS upload or deployment
- no PHP or JavaScript change
- retain final product divider
- do not append a production override
- do not execute cancelled FIX4
- refresh removes the temporary test
```
