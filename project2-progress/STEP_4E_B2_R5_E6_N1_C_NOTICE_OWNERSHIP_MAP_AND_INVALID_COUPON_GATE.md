# Step 4E-B2-R5-E6-N1-C · Notice Ownership Map and Invalid Coupon Gate

Last updated: 2026-07-22  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
A Cart updated runtime ownership: Confirmed.
B removed-item / Undo runtime ownership: Confirmed.
C Shipping costs updated runtime ownership: Confirmed.
Primary Notice visual families: Two.
Family 1 owner: Cart-specific `.woocommerce-message:not(:has(.wc-forward))` treatment.
Family 2 owner: broad global `.woocommerce-info` treatment.
Source changes authorized or performed: None.
Notice replacement design: Not selected or user-approved.
Current executable substep: one invalid-Coupon visual-state check.
Cart page status: Not done.
```

## 1. C runtime evidence

The user captured the live Shipping update state with:

```text
Text: Shipping costs updated.
Element: div
Class list: woocommerce-info
Parent class: woocommerce-notices-wrapper
Contains .wc-forward: No
Contains .restore-item: No
```

Exact live markup:

```html
<div class="woocommerce-info" role="status">
  Shipping costs updated.
</div>
```

Computed style:

```text
background-color: rgb(255, 255, 255)
border-radius: 18px
box-shadow: rgba(31, 25, 22, 0.055) 0px 10px 24px 0px
padding: 16px 18px
margin: 0px 0px 28px
display: block
position: relative
```

## 2. C ownership conclusion

C is now confirmed, not inferred:

```text
Runtime class: .woocommerce-info
Wrapper: .woocommerce-notices-wrapper
Winning visual owner: broad global WooCommerce Notice rule
Cart-specific `.woocommerce-message` reset: does not match C
```

The winning broad rule is:

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

Therefore Screenshot C's large white rounded surface is directly explained by the current source cascade:

```text
.woocommerce-info
→ excluded from the later Cart-only `.woocommerce-message` reset
→ retains global white background, 18px radius, padding and shadow
```

This closes exact ownership for Family 2.

## 3. Complete primary ownership map

### Family 1 — transparent status row

Runtime states confirmed:

```text
A. Cart updated.
B. Removed item + native Undo / Restore link.
```

Shared owner:

```css
body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-message:not(:has(.wc-forward)),
body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward))
```

Shared computed treatment:

```text
transparent background
0px radius
no shadow
0 0 16px padding
flex layout
full-width status-row / bottom-divider composition
```

B adds one structural variant:

```html
<a class="restore-item">Undo?</a>
```

The native action URL, nonce and restore lifecycle remain WooCommerce-owned and must be preserved.

### Family 2 — broad white rounded Notice

Runtime state confirmed:

```text
C. Shipping costs updated.
```

Owner:

```text
.woocommerce-info under the broad global WooCommerce Notice rule
```

Computed treatment:

```text
white background
18px radius
soft shadow
16px 18px padding
28px bottom margin
block layout
```

## 4. Defects confirmed, design not selected

Family 1 defect:

```text
- weak text hierarchy
- low contrast / very small copy
- excessive unused row width and space
- long divider detached from short feedback
- Undo action competes with the status sentence
```

Family 2 defect:

```text
- oversized white rounded surface for a brief status message
- excessive visual weight against the warm Cart canvas
- inconsistent with the accepted Cart composition
```

These findings identify defects and owners only. They do not approve a replacement design.

The earlier quiet-editorial-text direction remains an assistant-authored proposal, not a user-selected solution.

## 5. Remaining candidate-state check

The two primary families are now closed. One bounded check remains before design options are prepared:

```text
Invalid Coupon error.
```

Reason:

```text
- `.woocommerce-error` is included in the same broad global white rounded source rule.
- It may visually match Family 2.
- It may also have additional list/error-specific markup or styling.
- Native error visibility must be preserved.
```

Required next evidence:

```text
1. Trigger one invalid Coupon code on the Cart page.
2. Capture one desktop screenshot with the error visible.
3. If it clearly matches Family 2, no new design branch is created.
4. If it is visually distinct, capture its live DOM / computed style.
```

Coupon applied / removed success states need separate capture only if they visibly introduce another treatment. A broad sweep is not required.

## 6. Boundaries

```text
- no CSS edit
- no PHP or JavaScript edit
- no template override
- no plugin addition
- no deployment
- no version bump
- no pre-approved replacement design
- preserve native Restore / Undo lifecycle
- preserve native error visibility and WooCommerce lifecycle
- cancelled FIX4 remains cancelled
- Cart remains Not done
```
