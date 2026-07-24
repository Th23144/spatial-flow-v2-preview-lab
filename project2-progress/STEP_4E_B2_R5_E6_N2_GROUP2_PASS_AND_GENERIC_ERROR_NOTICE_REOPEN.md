# Step 4E-B2-R5-E6-N2 · Group 2 Pass and Generic Error Notice Reopen

Last updated: 2026-07-24  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
Group 2 — Shipping costs updated: Passed.
Newly discovered runtime state: generic Cart validation error.
Observed message: Please enter a valid postcode / ZIP.
Current Option A coverage: incomplete for generic error notices.
Source edit during this group: None.
Cart page status: Not done.
```

## 1. Group 2 shipping Notice acceptance

The user supplied live desktop evidence for `Shipping costs updated.`.

Accepted observations:

```text
- the previous broad white rounded information card is absent
- the live information Notice now uses the approved transparent editorial status band
- no Notice shadow
- no rounded Notice surface
- visible status marker and readable text
- Shipping remains $8.99 in the supplied evidence
- Total remains $44.99 in the supplied evidence
- no visible overlap with the product area or Order Summary
- no visible horizontal clipping in the supplied viewport
```

Group 2 is therefore passed for the known `.woocommerce-info` shipping-update state.

## 2. Newly discovered validation-error state

A second supplied screenshot shows the runtime message:

```text
Please enter a valid postcode / ZIP.
```

Its visible treatment is still the former broad white rounded surface with substantial horizontal width and padding.

This state was not included in the approved N2 selector set.

The deployed Option A block currently covers:

```text
- `.woocommerce-message:not(:has(.wc-forward))`
- direct child `.woocommerce-info`
- native `.restore-item` action inside `.woocommerce-message`
- Order Summary `.sf-cart-summary-coupon__status`
```

It deliberately did not rewrite global `.woocommerce-error` during N2.

Therefore the new screenshot demonstrates a missing runtime state in the earlier Notice inventory, not a regression of the already accepted Family 1 / Family 2 selectors.

## 3. Current source-level hypothesis

The broad global WooCommerce rule still includes:

```css
.woocommerce-error,
.woocommerce-info,
.woocommerce-message
```

The new postcode / ZIP validation message is highly likely to be emitted through the native WooCommerce error channel and therefore continue inheriting the global white rounded rule.

However, exact runtime ownership must not be finalized from the screenshot alone. Required evidence:

```text
- exact element tag
- exact class list
- parent wrapper classes
- whether the message is a container or list item
- computed background, radius, shadow, padding and margin
- outerHTML
```

## 4. Scope correction

The Notice runtime inventory is now:

```text
Family 1 — `.woocommerce-message`
- Cart updated
- Removed item + Undo

Family 2 — `.woocommerce-info`
- Shipping costs updated

Family 3 — Order Summary inline Coupon status
- valid / invalid Coupon mirrored state

Family 4 candidate — generic Cart validation error
- Please enter a valid postcode / ZIP.
- exact DOM owner pending
```

No CSS correction for Family 4 is authorized until its live DOM is captured.

## 5. Current gate

Execute only the generic error DOM capture while the postcode / ZIP error is visible.

Do not:

```text
- edit CSS
- broaden selectors speculatively
- edit PHP or JavaScript
- alter WooCommerce validation logic
- continue to Remove / Undo or mobile acceptance yet
- mark Cart Completed
```

After exact ownership is confirmed, prepare one bounded Cart-only error Notice correction that preserves native WooCommerce validation and error semantics.
