# Project 2 · Step03 Sticky Source/Architecture Audit COMPLETE · Design Decision Required · 2026-08-30

## Trigger

The user supplied the current live SAFE5 Checkout assets after the runtime A/B had already proven that Step03 whole-right-column sticky activates only when the shell is given additional vertical runway.

Current uploaded live source truth:

### `assets/css/checkout-safe5.css`
```text
bytes: 148983
logical lines: 4855
SHA256: c1f5835297adf28f2509c9138f785007fd9b180d52bd83643c298fe3a999f87a
brace balance: 581 / 581
comment balance: 24 / 24
tinycss2 parse errors: 0
```

### `assets/js/checkout-safe5.js`
```text
bytes: 59007
logical lines: 1768
SHA256: b672ab9c643bc0e4008b0bb9215c0fdc6a2c777c9a18d3f2a1be48ff2cbe5af0
node --check: PASS
```

Previously supplied same-batch parent sources remain:

### `functions.php`
```text
bytes: 612013
logical lines: 11689
SHA256: 82d31604ebd298fa3182ffaa800c07b2dae7db1fe456dc71042fcd6f54eb4d6f
SPATIAL_FLOW_CHILD_VERSION: 2.7.21
```

### `assets/css/spatial-flow.css`
```text
bytes: 589104
logical lines: 20676
SHA256: 45e50011b043b6141bbd3bf242c64e12efa9529d2251ebdd25bf2e94357d36b6
```

### `assets/js/spatial-flow.js`
```text
bytes: 78143
logical lines: 2243
SHA256: 7442ee92167ae383b933c6db0281f14ea56a75733339818c3e4858d77d52651b
```

## Source findings

### 1. Production sticky ownership is already correct

Current `checkout-safe5.css` owns the desktop shell and right rail with:

```css
.sf-safe5-shell {
  display: grid !important;
  grid-template-columns: minmax(0, 7fr) minmax(360px, 5fr) !important;
  align-items: start !important;
  gap: 80px !important;
  padding: 58px 56px 96px !important;
}

.sf-safe5-summary {
  position: sticky;
  top: 136px;
  align-self: start;
}
```

The inner native `#order_review.sf-safe5-order-review` is explicitly static. This correctly mirrors the authoritative Step03 reference ownership:

```text
.checkout-side              -> sticky, top 136
.checkout-side .order-summary -> static
```

Do not move sticky ownership into `#order_review`.

### 2. Desktop root overflow is already correct

Current SAFE5 CSS explicitly applies on desktop:

```css
body.woocommerce-checkout:not(.woocommerce-order-received) {
  overflow-x: clip !important;
  overflow-y: visible !important;
}
```

This matches the successful runtime diagnostic. Step03 is not the old Step04 body-overflow bug.

### 3. `checkout-safe5.js` does not alter shell/summary geometry

The current JS contains no selector usage for `.sf-safe5-shell` or `.sf-safe5-summary` and no direct `style.*` writes.

Its Step03-relevant behavior is:
- `showStep()` hides inactive views and sets `data-sf-safe5-current-step`;
- `syncPaymentContext()` refreshes delivery/contact/shipping text;
- Woo `updated_checkout` re-syncs context/mirrors;
- it preserves native gateway/payment/Terms/Place Order behavior.

Therefore no existing JS mutation is collapsing or disabling sticky.

### 4. The live layout has an intrinsic geometry conflict, not a missing sticky rule

The accepted SAFE5 template structure is:

```text
.sf-safe5-shell
├─ main.sf-safe5-main
│  ├─ Step01 view
│  ├─ Step02 view
│  └─ Step03 view
└─ aside.sf-safe5-summary
   ├─ Step03 payment context card
   └─ order summary card
```

`showStep()` uses the `[hidden]` state so inactive Step01/02 content contributes no layout height. On Step03, the live left column is intentionally only the native Woo payment host + Back action.

The right column contains completed context + live order summary and is currently the taller grid item.

Runtime facts already locked:

```text
right sticky owner: 1012.047px
shell border-box:    1166.047px
shell padding total: 154px (58 top + 96 bottom)
actual grid/content runway beyond the right rail: effectively none
baseline sticky locks: 0
```

When only the shell min-height was increased in the reversible console A/B, the same owner immediately locked repeatedly at 136px. Therefore the absence of real containing-block runway is causal.

### 5. Why Step03 became short

The authoritative static Step03 reference contains an older theme-side `Selected Payment` information panel plus static payment-truth/prototype content. Project 2 later rejected and rolled back the duplicate theme-side Selected Payment layer because native Woo selected gateway + `payment_box` must remain the payment-information owner and the duplicate implementation hardcoded Crypto into the theme.

That rollback is still correct and must not be reversed merely to manufacture left-column height.

Production Step03 must remain:

```text
eligible native Woo gateways
-> selected native payment_box / provider fields
-> Terms/privacy
-> exactly one native Place Order
```

No second theme-side selected-payment panel may be reintroduced for sticky geometry.

## Reference architecture limitation exposed

The static reference declares the whole `.checkout-side` sticky, but it contains no separate mechanism that guarantees vertical runway when the right stack is taller than the payment column.

Therefore the declared whole-side sticky contract is conditional on the live content balance. In dynamic Woo production, a short payment host plus a tall order/context rail exposes this latent design limitation.

This is not fixable by another `position:sticky`, `top`, overflow, transform or align-self declaration.

## Rejected production fixes

### Reject: large Step03 `min-height`
Would reproduce the A/B proof but create artificial blank page height. Violates strict visual/product truth.

### Reject: reintroduce Selected Payment panel
Would restore a previously rejected duplicate payment-information layer and hardcode theme-side gateway semantics.

### Reject: internal scrolling on the entire right rail
Would change the accepted interaction model and create nested scroll behavior.

### Reject: fixed-position JS clone/rail
Would escape the real shell boundary, require collision logic near the footer, and replace native sticky with a more fragile behavior.

## Recommended architecture

Use an adaptive no-fake-space Step03 sticky fallback:

1. Preserve the canonical whole-right-wrapper sticky as the preferred mode.
2. On Step03, measure real `.sf-safe5-main` and `.sf-safe5-summary` geometry after entering the step and after Woo `updated_checkout`.
3. If the main column supplies enough genuine vertical runway, leave the whole `.sf-safe5-summary` sticky exactly as today.
4. If the right rail is the height-dominant column and whole-rail sticky cannot activate meaningfully, switch only that Step03 runtime state to a bounded fallback:
   - `.sf-safe5-summary` becomes static;
   - the first payment context card becomes the sticky object at 136px;
   - the live Order Summary continues in normal document flow beneath it.
5. No artificial shell height, no duplicate gateway UI, no change to Woo payment/order logic, no mobile sticky.

Why this fallback is technically sound:
- the context card is much shorter than its parent right rail;
- the order-summary content below provides genuine containing-block runway for that child;
- the fallback preserves completed address/contact/shipping context while the user works in Payment;
- it does not invent content or whitespace;
- it degrades only the impossible whole-rail state rather than changing all Step03 layouts.

This is a deliberate production adaptation beyond the literal static-reference sticky ownership, so it should not be silently applied without a user decision.

## Current classification

```text
Step03 runtime root cause: CONFIRMED
Step03 source audit: COMPLETE
Missing CSS sticky declaration: NO
JS geometry bug: NO
Woo/payment ownership defect: NO
Reference whole-side sticky guarantee under short-main/tall-side geometry: NOT ROBUST
Source modification: PAUSED pending architecture decision
```

## Decision gate

Recommended: adaptive context-card sticky fallback when genuine whole-rail runway is unavailable.

Alternative if the user insists that the entire right rail must always stay sticky: the project must accept one of the previously rejected costs (additional vertical runway/blank space, nested internal scrolling, or a larger structural redesign). There is no CSS-only declaration that can provide sustained whole-rail sticky motion while simultaneously keeping the same page height, the same tall rail, and no overlap.
