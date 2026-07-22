# Step 4E-B2-R5-E6-N1-B · Cart Notice Visual-State Inventory and Runtime Ownership

Last updated: 2026-07-22  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
User desktop screenshot evidence received: A / B / C.
Known runtime Notice states shown: Three.
Confirmed visual families shown: Two.
Family 1: transparent text status row (A and B).
Family 2: broad white rounded Notice surface (C).
Runtime DOM / computed style for A Cart updated: Captured and confirmed.
Runtime DOM for B removed item + Undo: Pending.
Runtime DOM for C Shipping costs updated: Pending.
Source changes authorized or performed: None.
Notice replacement design: Not selected or user-approved.
Current executable substep: capture B removed-item / Undo DOM.
Cart page status: Not done.
```

## 1. Screenshot evidence and visual taxonomy

The user supplied three desktop screenshots showing:

```text
A. Quantity update
   Visible text: Cart updated.

B. Removed item
   Visible text: product title + removed. + UNDO?

C. Shipping address update
   Visible text: Shipping costs updated.
```

The screenshots establish three runtime states but only two confirmed visual families.

### Family 1 — A and B

```text
- transparent / no white panel
- full-width status row above product rows
- bottom divider
- small, low-contrast text
- excessive unused row width and space
- optional native action link for removed-item state
```

The text is not corrupted data. The user’s “garbled” impression is a visual hierarchy and composition failure caused by tiny copy, weak contrast, excessive row width, long divider and unclear action placement.

### Family 2 — C

```text
- broad white rounded surface
- substantial internal padding
- soft shadow
- spans most of the Cart content width
- visually heavier than the short status message warrants
```

The broad global WooCommerce rule remains the confirmed source-level candidate for this treatment:

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

The Cart-specific transparent reset excludes `.woocommerce-info`, but C still requires live DOM confirmation before exact ownership is closed.

## 2. Runtime DOM result — A Cart updated

The user captured the following live state after a quantity update:

```text
Text: Cart updated.
Element: div
Class list: woocommerce-message
Parent class: woocommerce-notices-wrapper
Contains .wc-forward: No
Contains .restore-item: No
```

Exact live markup:

```html
<div class="woocommerce-message" role="alert" tabindex="-1">
  Cart updated.
</div>
```

Computed style:

```text
background-color: rgba(0, 0, 0, 0)
border-radius: 0px
box-shadow: none
padding: 0px 0px 16px
margin: 0px
display: flex
position: relative
```

## 3. A ownership conclusion

A is now confirmed, not inferred:

```text
Runtime class: .woocommerce-message
Wrapper: .woocommerce-notices-wrapper
.wc-forward condition: absent
Winning visual family: Cart-specific transparent success-message reset
```

The current Cart-specific selector matches A exactly:

```css
body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-message:not(:has(.wc-forward)),
body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward))
```

Therefore the following A properties are intentionally produced by the current Cart Notice block:

```text
- transparent background
- zero radius
- no shadow
- 16px bottom padding
- flex layout
- full wrapper width / bottom-divider composition
```

The A defect is not caused by the broad global white rounded Notice rule. It is caused by the currently deployed Cart-specific success-message treatment and its typography / spacing / divider composition.

No replacement treatment is approved by this finding.

## 4. B removed-item / Undo capture requirement

B appears visually related to A, but shared DOM ownership is not yet closed.

The next capture must confirm:

```text
- exact class list
- parent wrapper
- presence of .restore-item
- background / radius / shadow
- padding / margin
- display / position
- exact outerHTML including the native Undo link
```

The native Restore / Undo lifecycle must remain functional and visible in any future correction.

## 5. Other possible states

Additional WooCommerce states may exist:

```text
- Coupon applied successfully
- Coupon removed successfully
- Invalid Coupon error
- Restore completion feedback
- Add-to-cart feedback containing .wc-forward
```

A broad screenshot sweep is not required.

The evidence order remains:

```text
1. Close A/B shared-family ownership using B DOM.
2. Capture C Shipping costs updated DOM.
3. Trigger one invalid Coupon error only after A/B/C owners are known.
4. Capture Coupon success/removal separately only if they visibly introduce another treatment.
5. Present design options only after ownership is complete.
```

## 6. Design findings, not design decisions

Confirmed defects:

```text
Family 1:
- weak hierarchy
- excessive empty status-row space
- unclear alignment and action composition

Family 2:
- oversized white rounded surface inconsistent with the accepted Cart composition
```

No visual treatment is user-approved. The earlier quiet-editorial-text direction remains an assistant-authored proposal only.

## 7. Boundaries

```text
- no source edit
- no deployment
- no temporary permanent CSS
- no PHP or JavaScript change
- no template override
- no plugin addition
- no version bump
- preserve native Restore / Undo behavior
- preserve native error visibility and lifecycle
- cancelled FIX4 remains cancelled
- Cart remains Not done
```
