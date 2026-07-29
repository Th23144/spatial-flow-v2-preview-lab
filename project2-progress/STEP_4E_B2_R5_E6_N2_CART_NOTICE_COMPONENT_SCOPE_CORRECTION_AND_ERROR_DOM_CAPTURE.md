# Step 4E-B2-R5-E6-N2 · Cart Notice Component Scope Correction and Error DOM Capture

Last updated: 2026-07-29  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
User-approved strategy correction: Accepted.
Previous method: known runtime states only.
Corrected method: Cart-page standard WooCommerce Notice component coverage.
Current source edit: None.
Current executable step: capture the exact Cart error Notice container and child-item DOM.
Cart page status: Not done.
```

## 1. Corrected ownership strategy

The Cart Notice correction must no longer be driven by individual message text such as:

```text
Cart updated.
Shipping costs updated.
Please enter a valid postcode / ZIP.
```

The correction must instead be driven by the standard WooCommerce Notice owners inside the Cart page:

```text
body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-message
body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-info
body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-error
```

This provides Cart-page coverage for known and future standard WooCommerce Notice states without creating one selector per message string.

## 2. Scope boundary

The approved scope is:

```text
Cart-page global: Yes.
Whole-site WooCommerce global: No.
```

Do not replace the unscoped global rule for every WooCommerce page. Checkout, payment, Shop, Single Product, Thank You and account-page notices may require different visual semantics and layout behavior.

## 3. Shared and semantic treatment

The eventual Cart-only replacement should provide one shared structural system for:

```text
- `.woocommerce-message`
- `.woocommerce-info`
- `.woocommerce-error`
```

Shared structure:

```text
- transparent background
- zero radius
- zero shadow
- compact editorial status band
- aligned dividers, spacing and typography
- no horizontal overflow
```

Semantic differentiation may remain through the status marker color:

```text
message: clay / success state
info: muted teal / information state
error: stronger error color and readable contrast
```

## 4. Required preserved behavior

The correction must preserve:

```text
- native WooCommerce text and roles
- native validation and error semantics
- native `.restore-item` URL, nonce and Undo lifecycle
- existing `.wc-forward` added-to-cart suppression
- Order Summary inline Coupon mirror status
- hidden native Coupon owner
- WooCommerce AJAX, totals, shipping and checkout behavior
```

No PHP, JavaScript, template, plugin or version change is authorized.

## 5. Why one DOM capture is still required

The postcode / ZIP screenshot strongly indicates the standard WooCommerce error channel, but the exact live structure is not yet confirmed.

WooCommerce error output may be rendered as a container with child list items, for example:

```html
<ul class="woocommerce-error" role="alert">
  <li>...</li>
</ul>
```

or through another container form depending on the runtime path and WooCommerce implementation.

Before replacing the active Notice block, capture:

```text
- error container tag and classes
- direct parent tag and classes
- role
- direct child tags and classes
- computed background, radius, shadow, padding, margin and display
- complete outerHTML
```

This is component verification, not a message-specific patch.

## 6. Current execution gate

Execute only the live error DOM capture while `Please enter a valid postcode / ZIP.` is visible.

Do not:

```text
- edit CSS yet
- add a message-text selector
- append a new patch at the end of the file
- broaden styles to Checkout or all WooCommerce pages
- edit PHP, JavaScript or templates
- continue Remove / Undo, Coupon or mobile acceptance
- mark Cart Completed
```

After the exact error structure is confirmed, prepare one bounded in-place replacement of the existing approved Option A Notice block so it covers all three Cart-page standard Notice owners.
