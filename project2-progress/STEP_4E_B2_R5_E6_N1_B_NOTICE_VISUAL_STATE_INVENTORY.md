# Step 4E-B2-R5-E6-N1-B · Cart Notice Visual-State Inventory

Last updated: 2026-07-22  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
User desktop screenshot evidence received: A / B / C.
Known runtime Notice states shown: Three.
Confirmed visual families shown: Two.
Family 1: transparent text status row (A and B).
Family 2: broad white rounded Notice surface (C).
Additional candidate states may exist, but broad screenshot collection is not required.
Source changes authorized or performed: None.
Notice replacement design: Not selected or user-approved.
Current executable substep: representative live DOM / computed-style ownership capture.
Cart page status: Not done.
```

## 1. Evidence received

The user supplied three desktop screenshots with enough surrounding Cart composition to review placement relative to the `Your Bag` heading, product rows and Order Summary.

```text
A. Quantity update
   Visible text: Cart updated.

B. Removed item
   Visible text: product title + removed. + UNDO?

C. Shipping address update
   Visible text: Shipping costs updated.
```

The user correctly noted that these are only the states currently discovered and that other WooCommerce feedback states may still exist.

## 2. Screenshot A — quantity update

Observed composition:

```text
- no white card or rounded panel
- message occupies a full-width status row above the product list
- text is very small and low contrast
- the row contains disproportionate empty vertical and horizontal space
- a long bottom divider extends far beyond the short message
- the message reads as detached system residue rather than intentional Cart feedback
```

The text itself is not corrupted data. The "garbled" impression comes from hierarchy and composition:

```text
- tiny body copy
- weak contrast
- excessive status-row width
- large unused space
- unclear alignment with the product content below
```

This is a visual-design failure, not a functional or encoding failure.

## 3. Screenshot B — removed item / Undo

Observed composition:

```text
- same transparent, borderless status-row family as Screenshot A
- same placement above the product rows
- same long bottom-divider structure
- longer product title makes the row visually denser
- the native Undo action is retained
- the tiny uppercase / monospaced Undo treatment competes with the sentence rather than forming a clear action hierarchy
```

A and B are separate runtime states but appear to share one visual family.

Important preservation requirement:

```text
The native Restore / Undo link must remain functional and visible in any future correction.
```

## 4. Screenshot C — shipping update

Observed composition:

```text
- full-width Notice placement above the Cart columns
- a large white rounded pill / capsule spans almost the complete content width
- substantial internal padding
- the white surface separates strongly from the warm page canvas
- the component is visually heavier than the brief status message warrants
- it does not match the accepted editorial Cart composition
```

This is clearly not the same visual treatment as A and B.

The current source audit already identified a broad global WooCommerce rule capable of producing exactly this white rounded surface:

```css
.woocommerce-error,
.woocommerce-info,
.woocommerce-message {
  border-radius: 18px;
  background: #fff !important;
  padding: 16px 18px !important;
  box-shadow: 0 10px 24px rgba(31,25,22,.055);
}
```

The Cart-specific transparent reset currently excludes `.woocommerce-info`, making the class-gap explanation for Screenshot C highly plausible. Runtime DOM evidence is still required before closing ownership.

## 5. Visual taxonomy after screenshots

The evidence supports this classification:

```text
Runtime state A: Cart quantity updated
Runtime state B: item removed + Undo
Runtime state C: shipping costs updated

Visual family 1: A + B
- transparent status row
- compact plain text
- bottom divider
- optional native action link

Visual family 2: C
- broad white rounded WooCommerce Notice surface
```

Therefore:

```text
Three runtime states do not require three independent CSS components.
A and B should be audited as one shared visual-owner candidate.
C requires a separate owner check.
```

## 6. Other states that may exist

The current WooCommerce lifecycle and prior regression matrix indicate these additional candidate states:

```text
1. Coupon applied successfully.
2. Coupon removed successfully.
3. Invalid Coupon error.
4. Restore / Undo completion response, if WooCommerce emits another notice.
5. Add-to-cart success notice containing `.wc-forward`.
```

Current source already hides Cart add-to-cart messages containing `.wc-forward`, so that state is not automatically an open visual defect.

Coupon success/removal likely belongs to an existing success-message family, but this is not asserted without runtime evidence. Invalid Coupon may create a genuinely different error treatment and must be checked later only if it appears visually different.

No broad screenshot sweep is required now.

## 7. Minimal evidence plan

The next evidence step is intentionally narrow:

```text
1. Capture live DOM / computed style for Screenshot A or B as the representative transparent-row family.
2. Capture live DOM / computed style for Screenshot C as the representative white-rounded family.
3. Confirm whether A and B share the same class and winning selectors.
4. Trigger one invalid Coupon error only after the two primary owners are known.
5. If the invalid error visually matches an existing family, no extra design branch is created.
6. Coupon applied / removed states need separate capture only if they visibly introduce another treatment.
```

This avoids making the user manually discover every possible WooCommerce notice before ownership is understood.

## 8. Design findings, not design decisions

The screenshots prove the following defects:

```text
Family 1 defect:
- weak hierarchy, excessive empty row space and unclear action composition

Family 2 defect:
- oversized white rounded surface inconsistent with the Cart page
```

They do not approve a replacement design.

The earlier quiet-editorial-text direction remains an assistant-authored proposal, not a user-selected solution.

## 9. Boundaries

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
- preserve native error visibility and lifecycle
- cancelled FIX4 remains cancelled
- Cart remains Not done
```
