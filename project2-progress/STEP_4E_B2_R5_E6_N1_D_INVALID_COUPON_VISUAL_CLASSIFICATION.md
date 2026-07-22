# Step 4E-B2-R5-E6-N1-D · Invalid Coupon Visual Classification

Last updated: 2026-07-22  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
Invalid Coupon desktop screenshot evidence: Received.
Screenshot sufficiency for visual classification: Yes.
Invalid Coupon visual family: Third distinct family.
Exact live DOM / computed-style owner: Pending.
Source changes authorized or performed: None.
Notice replacement design: Not selected or user-approved.
Current executable substep: capture the inline Coupon error DOM only.
Cart page status: Not done.
```

## 1. Evidence reviewed

The user supplied a desktop Cart screenshot after submitting an invalid Coupon code.

The screenshot includes enough surrounding context to establish placement relative to:

```text
- Your Bag and product area
- Order Summary
- Coupon input and Apply Coupon action
- Checkout controls
```

The error appears directly inside the Order Summary Coupon section, beneath the Coupon input/action row.

## 2. Visual classification

The Invalid Coupon state does not visually match either previously confirmed primary family.

### Not Family 1

Family 1 is the full-width transparent Cart status row used by:

```text
- Cart updated.
- Removed item + native Undo / Restore link.
```

The invalid Coupon error is not placed above the product list and does not use the long full-width divider/status-row composition.

### Not Family 2

Family 2 is the broad white rounded WooCommerce Notice surface used by:

```text
- Shipping costs updated.
```

The invalid Coupon error does not appear as a large white 18px-rounded, shadowed panel across the Cart content width.

### Confirmed Family 3

```text
Family 3: inline Coupon validation feedback
Placement: inside Order Summary Coupon section
Surface: no separate broad panel visible
Hierarchy: small inline error copy beneath the Coupon controls
```

This is a distinct visual and ownership branch even if WooCommerce generated the underlying error text.

## 3. Visual finding

The screenshot is sufficient to identify the state as a third family, but the low-resolution evidence is not sufficient to close exact DOM ownership.

Observed concern:

```text
- error copy is very small
- contrast is weak
- placement is compressed beneath the input/action row
- it can read as residual system text rather than deliberate validation feedback
```

The wording itself is not assessed as corrupted from the screenshot. The defect is primarily presentation and hierarchy.

## 4. Minimal remaining evidence

Only one DOM/computed-style capture remains for Notice ownership:

```text
Invalid Coupon inline error beneath the Order Summary Coupon controls.
```

Required fields:

```text
- exact element tag and classes
- parent classes
- nearest Coupon wrapper classes
- whether `.woocommerce-error`, `.woocommerce-info` or `.woocommerce-message` is involved
- computed background, radius, shadow, padding, margin, display and position
- exact outerHTML
```

No additional broad Notice screenshot sweep is required.

Coupon applied/removed success states need separate capture only if they visibly introduce a fourth treatment during later runtime acceptance.

## 5. Current ownership map

```text
Family 1 — transparent full-width status row
Owner confirmed: Cart-specific `.woocommerce-message:not(:has(.wc-forward))`
States confirmed: Cart updated; removed item + Undo

Family 2 — broad white rounded Notice
Owner confirmed: `.woocommerce-info` under the broad global WooCommerce Notice rule
State confirmed: Shipping costs updated

Family 3 — inline Coupon validation feedback
Visual family confirmed: Yes
Exact DOM/source owner: Pending
State confirmed: Invalid Coupon
```

## 6. Boundaries

```text
- no CSS edit
- no PHP or JavaScript edit
- no template override
- no plugin addition
- no deployment
- no version bump
- no pre-approved replacement design
- preserve native WooCommerce validation and error visibility
- preserve native Restore / Undo lifecycle
- cancelled FIX4 remains cancelled
- Cart remains Not done
```
