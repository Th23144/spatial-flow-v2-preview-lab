# Step 4E-B2-R5-E6-N1-E · Notice Ownership Complete and Design Options

Last updated: 2026-07-22  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
Primary Cart Notice runtime/source ownership audit: Complete.
Confirmed visual families: Three.
Family 1 owner: Cart-specific `.woocommerce-message:not(:has(.wc-forward))` treatment.
Family 2 owner: `.woocommerce-info` under the broad global WooCommerce Notice rule.
Family 3 visible owner: `.sf-cart-summary-coupon__status.is-error` inside Order Summary.
Family 3 native source-of-truth owner: `.woocommerce-cart-form .coupon .coupon-error-notice`.
PHP or JavaScript correction required by ownership findings: No.
Bounded CSS-only correction is technically sufficient after a design direction is approved.
Source changes authorized or performed: None.
Current executable substep: user selects or approves one Notice design direction.
Cart page status: Not done.
```

## 1. Family 3 runtime evidence

The Invalid Coupon capture returned several elements because the diagnostic search pattern also matched Coupon labels and buttons. Only two nodes carry the actual error text.

### Native WooCommerce error owner

```text
Element: p.coupon-error-notice
Parent: div.coupon
Role: alert
Text: Coupon "123" cannot be applied because it does not exist.
```

Simplified markup:

```html
<p class="coupon-error-notice" id="coupon-error-notice" role="alert">
  Coupon "123" cannot be applied because it does not exist.
</p>
```

Computed style captured:

```text
background: transparent
color: rgb(55, 65, 81)
font-size: 14px
line-height: 23.1px
border-radius: 0
box-shadow: none
padding: 0
margin-bottom: 22.4px
display: block
```

This node remains inside the native Cart Coupon owner. The native actions row is visually clipped out of layout while remaining in the form, so this node is the WooCommerce lifecycle/source-of-truth error, not the visible Order Summary design surface.

### Visible Order Summary error owner

```text
Element: p.sf-cart-summary-coupon__status.is-error
Parent: div.sf-cart-summary-coupon__body
Role: status
aria-live: polite
Text: Coupon "123" cannot be applied because it does not exist.
```

Exact markup:

```html
<p id="sf-cart-summary-coupon-status"
   class="sf-cart-summary-coupon__status is-error"
   role="status"
   aria-live="polite"
   data-sf-cart-coupon-status="">
  Coupon "123" cannot be applied because it does not exist.
</p>
```

Computed style captured:

```text
background: transparent
color: rgb(168, 116, 92)
font-size: 10px
line-height: 14.5px
border-radius: 0
box-shadow: none
padding: 0
margin: 8px 0 0
display: block
position: static
```

This is the element visible in the accepted Order Summary Coupon interface.

## 2. Exact Family 3 lifecycle bridge

The deployed JavaScript lifecycle bridge deliberately preserves the native Coupon owner and mirrors its result into the visible Order Summary status.

The bridge:

```text
1. Reads `.woocommerce-cart-form .coupon .coupon-error-notice`.
2. Stores the native text as `state.couponStatus`.
3. Stores the type as `error`.
4. Writes the text into `[data-sf-cart-coupon-status]`.
5. Toggles `.is-error` on the visible status element.
6. Repeats this after WooCommerce Cart/AJAX replacement events.
```

Therefore the two error paragraphs are not an accidental duplicate visible UI. They are a deliberate native-owner / visible-mirror architecture:

```text
Native WooCommerce source-of-truth
p.coupon-error-notice
        ↓ JavaScript reads and mirrors
Visible Order Summary status
p.sf-cart-summary-coupon__status.is-error
```

The native Coupon field, submit button, nonce, validation response and lifecycle remain WooCommerce-owned.

## 3. Family 3 CSS ownership conclusion

The visible Family 3 appearance is exactly explained by the deployed Order Summary Coupon CSS:

```css
body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__status {
  margin: 8px 0 0 !important;
  color: rgba(31, 25, 22, .62) !important;
  font-size: 10px !important;
  line-height: 1.45 !important;
}

body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__status.is-error {
  color: var(--sf-cart-clay) !important;
}
```

The captured `10px / 14.5px / rgb(168,116,92) / margin-top 8px` values match this rule.

Family 3's weak hierarchy is therefore owned by the visible Order Summary status CSS, not by the broad global `.woocommerce-error` rule.

## 4. Complete Notice ownership map

### Family 1 — transparent full-width status row

Confirmed runtime states:

```text
- Cart updated.
- Removed item + native Undo / Restore action.
```

Runtime owner:

```text
div.woocommerce-message
inside .woocommerce-notices-wrapper
without .wc-forward
```

Winning CSS owner:

```css
body.woocommerce-cart .woocommerce-notices-wrapper > .woocommerce-message:not(:has(.wc-forward)),
body.woocommerce-cart .woocommerce-message:not(:has(.wc-forward))
```

Important content variant:

```html
<a class="restore-item">Undo?</a>
```

Native Restore URL, nonce and lifecycle must remain untouched.

### Family 2 — broad white rounded Notice

Confirmed runtime state:

```text
- Shipping costs updated.
```

Runtime owner:

```text
div.woocommerce-info
inside .woocommerce-notices-wrapper
```

Winning CSS owner:

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

The Cart-only `.woocommerce-message` reset does not match `.woocommerce-info`.

### Family 3 — inline Coupon validation feedback

Confirmed runtime state:

```text
- Invalid Coupon.
```

Native lifecycle owner:

```text
p.coupon-error-notice
inside the native hidden div.coupon owner
```

Visible design owner:

```text
p.sf-cart-summary-coupon__status.is-error
inside Order Summary
```

JavaScript mirrors the native text into the visible status. CSS controls the visible presentation.

## 5. Technical correction scope

The ownership evidence shows that all three visual defects can be corrected without changing WooCommerce lifecycle logic.

A bounded implementation can remain CSS-only:

```text
- Family 1: refine the Cart-specific `.woocommerce-message` treatment.
- Family 2: add a Cart-specific `.woocommerce-info` treatment that overrides the broad global surface.
- Family 3: refine `.sf-cart-summary-coupon__status` and `.is-error` presentation.
```

No PHP renderer change is required.

No JavaScript lifecycle change is required.

No native error, Coupon, Restore/Undo, URL, nonce or AJAX owner should be removed or duplicated.

## 6. Visually reasoned options

These are design options only. None is user-approved yet.

### Option A — Unified editorial status band — recommended

Page-level success and information states use one restrained horizontal status band.

```text
Family 1 and Family 2:
- transparent background
- no radius
- no shadow
- compact 44–48px vertical rhythm
- 1px quiet divider treatment
- 12px readable body copy
- aligned to the Cart content grid
- Undo / Restore presented as a distinct underlined action

Family 3:
- remains inline beneath Coupon controls
- 11px readable error copy
- stronger clay contrast
- 16–17px line height
- 10–12px top spacing
- no separate panel
```

Advantages:

```text
- closest to the accepted editorial Cart language
- removes the oversized white pill
- fixes A/B hierarchy without introducing another card
- preserves semantic distinction between page-level status and field-level validation
- lowest implementation risk
- CSS-only
```

Risk:

```text
- intentionally restrained; status is clear but not highly attention-seeking
```

### Option B — Compact warm callout

Page-level success and information states use a contained warm callout rather than a full-width pill.

```text
Family 1 and Family 2:
- width follows content or a bounded max-width
- very light warm fill
- 3–4px radius
- no shadow
- 12px copy
- compact padding
- Undo / Restore visually separated

Family 3:
- inline error remains beneath the Coupon controls
- stronger typography and contrast
```

Advantages:

```text
- more immediately recognizable as feedback
- avoids the current full-width oval
- conventional and accessible
```

Risk:

```text
- reintroduces a visible card/surface into a Cart that was deliberately de-boxed
- less faithful to the strict editorial reference
```

### Option C — Hairline accent status

Page-level states use a compact text row with one short vertical or horizontal clay accent.

```text
Family 1 and Family 2:
- no fill
- no radius
- no shadow
- short clay accent line
- 12px copy
- Undo / Restore as a strong text action

Family 3:
- same accent language at field level
- inline placement retained
```

Advantages:

```text
- creates a stronger hierarchy than Option A
- remains de-boxed
- clearly signals system feedback
```

Risk:

```text
- more utility/interface-like
- the accent may compete with the quiet luxury/editorial composition
```

## 7. Recommendation

Option A is the strongest fit for the accepted Cart composition.

Reasoning:

```text
- The page already uses hairline dividers and restrained typography.
- The product area and Order Summary were intentionally de-boxed.
- A new compact card would partially reverse that direction.
- Page-level status should be readable and deliberate without becoming the dominant component.
- Field-level Coupon validation should remain physically attached to the field that caused it.
```

This recommendation is not an approval. The user must select or approve a direction before any source edit is prepared.

## 8. Boundaries

```text
- no CSS edit yet
- no PHP or JavaScript edit
- no template override
- no plugin addition
- no deployment
- no version bump
- no automatic adoption of the earlier assistant suggestion
- preserve native Restore / Undo lifecycle
- preserve native Coupon validation and error visibility
- cancelled FIX4 remains cancelled
- Cart remains Not done
```
