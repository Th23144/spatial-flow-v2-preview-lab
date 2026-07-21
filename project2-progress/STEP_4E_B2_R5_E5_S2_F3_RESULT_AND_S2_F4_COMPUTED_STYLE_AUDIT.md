# Step 4E-B2-R5-E5-S2-F3 Result · S2-F4 Computed-Style / DOM Owner Audit

Last updated: 2026-07-21  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
S2-F3 Test F, <=480px one-column reference geometry: No meaningful improvement.
Missing narrow breakpoint as principal frame owner: Rejected.
Source edit authorization: None.
Cart page status: Not done.
Current executable substep: S2-F4 zero-source computed-style and DOM owner audit.
```

## 1. What Tests A-F have ruled out

```text
A. heading divider alone: no effect
B. row bottom padding alone: no effect
C. final product divider alone: slight improvement only
D. both horizontal boundaries together: improvement only
E. inset final divider: no effect
F. <=480px one-column row geometry: no meaningful improvement
```

Already removed in deployed S2-E:

```text
- explicit phone paper fill
- four-sided border
- 18px radius
- box shadow
- inset card padding
- card margin
```

Therefore no further source-level visual hypothesis is authorized from these tests.

## 2. Why the next step changes method

The remaining rectangle cannot be reliably attributed from canonical CSS text or screenshot perception alone. A later historical selector, a pseudo-element, an ancestor surface, a browser-generated table box, or a computed property may still own the visible band even when the intended canonical declarations are transparent.

S2-F4 must inspect the actual rendered element chain and computed styles, including:

```text
- cart item tr
- tbody
- table.shop_table.cart
- form.woocommerce-cart-form
- left Cart grid owner / page owner
- ::before and ::after pseudo-elements
- backgrounds and background images
- borders, outlines and shadows
- radius, filters and opacity
- padding / margin / dimensions
- overflow and positioning
```

## 3. Required evidence

Run one browser Console diagnostic on the real phone-width Cart after a full reload with no prior temporary test styles.

The diagnostic must return a JSON report for the Cart item and every ancestor up to `body`, including pseudo-element computed styles and bounding rectangles.

No source file is changed.

## 4. Locked state

```text
functions.php SHA256:
5bd9f8b307d1b59eaa92bf31d3640e2d4ba48bca4de7a640b705d5e75f9ef00b

assets/js/spatial-flow.js SHA256:
7442ee92167ae383b933c6db0281f14ea56a75733339818c3e4858d77d52651b

assets/css/spatial-flow.css SHA256:
4bce679ee3c2abca6bcc0dfd4733d92d0c8b77e16b7a0bbf7d7832e305cff6b6

Version: 2.7.8
```

## 5. Boundaries

```text
- no CSS/PHP/JS edit
- no upload or deployment
- no new production override
- no cancelled FIX4
- no S2-G candidate until computed-style evidence identifies a concrete owner
```
