# Step 4E-B2-R5-E6-N1-B · Cart Notice Visual-State Inventory

Last updated: 2026-07-22  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
User runtime clarification received: Yes.
Known visually distinct Cart notice states: At least three.
Screenshot-first classification: Required before broad DOM capture.
Source changes authorized or performed: None.
Notice replacement design: Not selected or user-approved.
Current executable substep: capture three representative desktop screenshots.
Cart page status: Not done.
```

## 1. User-observed visual states

The user clarified that the current Cart does not show one uniform notice component.

Known states:

```text
A. Quantity increase/decrease feedback
   - appears as plain text
   - no surrounding panel/frame
   - typography/composition reads like garbled or broken copy

B. Removed-item feedback
   - appears as plain text
   - no surrounding panel/frame
   - includes the native restore/undo lifecycle
   - typography/composition also reads like garbled or broken copy

C. Shipping address update feedback
   - appears inside a large rounded/oval white surface
   - visually mismatched with the accepted Cart composition
```

These states must not be collapsed into one defect or assumed to share one DOM class before evidence is captured.

## 2. Corrected evidence order

The prior plan requested immediate DOM/computed-style capture for multiple notice states. That is unnecessarily broad before the visual taxonomy is established.

The revised order is:

```text
1. Capture one representative screenshot for each of A, B and C.
2. Compare placement, hierarchy, line breaks, native action links and surface treatment.
3. Group only visually identical states together.
4. Capture DOM/computed style only for each distinct visual group.
5. Check Coupon and invalid-error states only if they introduce another distinct visual treatment.
6. Present design options only after owner evidence is complete.
```

This reduces unnecessary user testing and prevents unrelated notice states from being forced into one CSS solution.

## 3. Required screenshots

Use the same desktop viewport and browser zoom for all three where possible.

```text
Screenshot A: quantity 1 -> 2 or 2 -> 1, with the plain-text feedback visible.
Screenshot B: remove one product, with the plain-text removed-item / Restore or Undo feedback visible.
Screenshot C: update a valid shipping address, with "Shipping costs updated." visible inside the rounded white surface.
```

Each screenshot should include enough surrounding Cart layout to show where the notice sits relative to:

```text
- breadcrumb / Your Bag heading
- Cart item area
- Order Summary
```

No DevTools, Console output or mobile screenshots are required at this substep.

## 4. Current source-level context

The existing CSS audit has already confirmed:

```text
- a broad global WooCommerce notice rule can create a white 18px-radius surface
- the Cart-specific reset targets `.woocommerce-message:not(:has(.wc-forward))`
- the Cart-specific reset does not include `.woocommerce-info` or `.woocommerce-error`
```

The screenshots will determine which visual groups require runtime DOM proof and whether the plain-text states are visually failing because of typography, line breaking, action-link placement, wrapper width or another source.

## 5. Boundaries

```text
- no source edit
- no deployment
- no temporary permanent CSS
- no PHP or JavaScript change
- no template override
- no plugin addition
- no version bump
- no pre-approved replacement design
- preserve native Restore / Undo behavior
- cancelled FIX4 remains cancelled
- Cart remains Not done
```
