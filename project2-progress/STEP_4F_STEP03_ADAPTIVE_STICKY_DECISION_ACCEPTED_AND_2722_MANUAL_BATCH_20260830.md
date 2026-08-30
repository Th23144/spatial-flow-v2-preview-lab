# Project 2 · Step03 Adaptive Sticky Decision Accepted + 2.7.22 Manual Batch · 2026-08-30

## User decision

The user explicitly accepted the adaptive Step03 sticky behavior:

- when the real left Payment column is taller than the full right rail and therefore supplies real vertical runway, preserve the reference behavior: the whole right rail remains sticky at 136px;
- when the right rail itself defines the grid height and therefore has no real vertical runway, do not manufacture blank space and do not restore the rejected theme-side Selected Payment panel; instead release the whole rail and make only the Step03 completed-context card sticky at 136px;
- mobile/tablet behavior remains the existing static/stacked layout.

This is now the approved production behavior for Step03.

## Current source baselines

### `functions.php`
```text
bytes: 612013
logical lines: 11689
SHA256: 82d31604ebd298fa3182ffaa800c07b2dae7db1fe456dc71042fcd6f54eb4d6f
version: 2.7.21
```

### `assets/css/checkout-safe5.css`
```text
bytes: 148983
logical lines: 4855
SHA256: c1f5835297adf28f2509c9138f785007fd9b180d52bd83643c298fe3a999f87a
line endings: CRLF
```

### `assets/js/checkout-safe5.js`
```text
bytes: 59007
logical lines: 1768
SHA256: b672ab9c643bc0e4008b0bb9215c0fdc6a2c777c9a18d3f2a1be48ff2cbe5af0
line endings: CRLF
```

## Source findings retained

Current production already matches the Step03 reference ownership:

```text
.sf-safe5-shell
└─ aside.sf-safe5-summary          // whole-rail sticky owner
   ├─ .sf-safe5-context-card--payment
   └─ .sf-safe5-summary-card
      └─ #order_review             // static child
```

Current CSS already declares the whole rail sticky at `top:136px`, and `#order_review` static. Current JS does not force shell/summary heights.

The causal A/B proof established that the current full rail cannot visibly lock because the right rail itself defines the grid height. Expanding only shell runway immediately made the same sticky owner lock repeatedly at 136px.

## Implementation design

### Runtime mode class

Use one root class only:

```text
.sf-safe5-step3-context-sticky
```

It is applied only on desktop Step03 when the real `.sf-safe5-main` is not taller than the full `.sf-safe5-summary`.

A 2px tolerance prevents sub-pixel layout noise from flipping modes.

### CSS behavior

Desktop only (`min-width:1041px`):

- normal mode: current source remains unchanged; `.sf-safe5-summary` stays sticky at 136px;
- fallback mode: `.sf-safe5-summary` becomes static and `.sf-safe5-context-card--payment` becomes sticky at 136px.

No fake `min-height` is introduced.

### JS behavior

Add:

- `syncAdaptiveStep3Sticky(root)`
- `bindAdaptiveStep3Sticky(root)`

Re-evaluate on:

- Step changes;
- desktop resize;
- Woo payment-method changes;
- ResizeObserver changes to main/summary heights;
- Woo `updated_checkout`.

Outside Step03 or at `<=1040px`, the fallback class is removed.

## Manual source batch

Three files are modified in one coherent batch.

### Part A — `functions.php` cache-bust only

Old, expected exactly once:

```php
define( 'SPATIAL_FLOW_CHILD_VERSION', '2.7.21' );
```

Replace with:

```php
define( 'SPATIAL_FLOW_CHILD_VERSION', '2.7.22' );
```

No PHP behavior change beyond asset-version cache busting.

Expected local simulated result:

```text
bytes: 612013
logical lines: 11689
SHA256: 9e7e942a56c44ddff521d653e8f9cf7ed14e77678d71a3e450a73c2beeee8410
PHP syntax: PASS
```

### Part B — `assets/css/checkout-safe5.css`

Locate the Step03 block ending immediately before its existing `@media (max-width: 1040px)`:

```css
body.woocommerce-checkout:not(.woocommerce-order-received)
  .sf-safe5-context-card--payment
  .sf-safe5-context-value
  small {
  display: block;
  margin-top: 2px;
  color: var(--sf-safe5-muted);
}

@media (max-width: 1040px) {
```

Expected match count: 1.

Replace with:

```css
body.woocommerce-checkout:not(.woocommerce-order-received)
  .sf-safe5-context-card--payment
  .sf-safe5-context-value
  small {
  display: block;
  margin-top: 2px;
  color: var(--sf-safe5-muted);
}

/* Step 03 desktop adaptive sticky fallback.
   Keep the whole right rail sticky when the left Payment column creates real
   vertical runway. If the right rail itself defines the grid height, release
   the rail and keep only the completed-context card sticky. */
@media (min-width: 1041px) {
  body.woocommerce-checkout:not(.woocommerce-order-received)
    .sf-safe5-checkout[data-sf-safe5-current-step="3"].sf-safe5-step3-context-sticky
    .sf-safe5-summary {
    position: static;
    top: auto;
    bottom: auto;
  }

  body.woocommerce-checkout:not(.woocommerce-order-received)
    .sf-safe5-checkout[data-sf-safe5-current-step="3"].sf-safe5-step3-context-sticky
    .sf-safe5-context-card--payment {
    position: sticky;
    top: 136px;
    z-index: 2;
    align-self: start;
  }
}

@media (max-width: 1040px) {
```

Expected delta preserving current CRLF endings:

```text
+815 bytes
+23 logical lines
```

Expected simulated result:

```text
bytes: 149798
logical lines: 4878
SHA256: 28b2e89c3fb966e57863a9adfe18edfe2a40559b4ca9b142dedaf0f2d853a499
brace balance: 584/584
comment balance: 25/25
tinycss2 top-level errors: 0
```

### Part C — `assets/js/checkout-safe5.js`

#### C1 — insert adaptive helpers before `showStep`

Old anchor, expected exactly once:

```js
  function showStep(root, step) {
```

Replace that single line with the helper block plus the original line:

```js
  function syncAdaptiveStep3Sticky(root) {
    var fallbackClass = "sf-safe5-step3-context-sticky";

    if (!root) return;

    var currentStep = parseInt(
      root.getAttribute("data-sf-safe5-current-step") || "1",
      10
    );

    if (currentStep !== 3 || window.innerWidth <= 1040) {
      root.classList.remove(fallbackClass);
      return;
    }

    var main = q(".sf-safe5-main", root);
    var summary = q(".sf-safe5-summary", root);
    var context = summary
      ? q(".sf-safe5-context-card--payment", summary)
      : null;

    if (!main || !summary || !context || context.hidden) {
      root.classList.remove(fallbackClass);
      return;
    }

    var mainHeight = main.getBoundingClientRect().height;
    var summaryHeight = summary.getBoundingClientRect().height;

    /*
     * Whole-rail sticky needs real height supplied by the opposite column.
     * A 2px tolerance prevents sub-pixel layout noise from flipping modes.
     */
    var hasWholeRailRunway = mainHeight >= summaryHeight + 2;

    root.classList.toggle(fallbackClass, !hasWholeRailRunway);
  }

  function bindAdaptiveStep3Sticky(root) {
    if (!root || root.dataset.sfSafe5Step3StickyBound) return;

    root.dataset.sfSafe5Step3StickyBound = "1";

    var frame = 0;

    function scheduleSync() {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      frame = window.requestAnimationFrame(function () {
        frame = 0;
        syncAdaptiveStep3Sticky(root);
      });
    }

    window.addEventListener("resize", scheduleSync, { passive: true });

    root.addEventListener("change", function (event) {
      if (
        event.target &&
        event.target.matches &&
        event.target.matches('input[name="payment_method"]')
      ) {
        window.setTimeout(scheduleSync, 0);
      }
    });

    if (window.ResizeObserver) {
      var observer = new ResizeObserver(scheduleSync);
      var main = q(".sf-safe5-main", root);
      var summary = q(".sf-safe5-summary", root);

      if (main) observer.observe(main);
      if (summary) observer.observe(summary);

      root.sfSafe5Step3StickyObserver = observer;
    }

    if (window.jQuery) {
      window.jQuery(document.body).on(
        "updated_checkout.sfSafe5Step3Sticky",
        scheduleSync
      );
    }

    scheduleSync();
  }

  function showStep(root, step) {
```

#### C2 — synchronize immediately after Step03 context visibility/content changes

Old, expected exactly once:

```js
  if (step === 3) {
    syncPaymentContext(root);
  }

  window.scrollTo({
```

Replace with:

```js
  if (step === 3) {
    syncPaymentContext(root);
  }

  syncAdaptiveStep3Sticky(root);

  window.scrollTo({
```

#### C3 — bind once during SAFE5 init

Old, expected exactly once:

```js
    initPackaging(root);
    syncShippingMirror(root);
    bindWooCommerceEvents(root);
    showStep(root, 1);
```

Replace with:

```js
    initPackaging(root);
    syncShippingMirror(root);
    bindAdaptiveStep3Sticky(root);
    bindWooCommerceEvents(root);
    showStep(root, 1);
```

Expected total JS delta preserving current CRLF endings:

```text
+2487 bytes
+92 logical lines
```

Expected simulated result:

```text
bytes: 61494
logical lines: 1860
SHA256: ba71dcff2629094e465fb68ada2502ef6d5a96b1d0b6d7eaa1912f54b40bd69c
node --check: PASS
```

## Safety boundary

Do not change:

- `.sf-safe5-shell` min-height;
- Woo gateway markup or `payment_box`;
- native Terms/privacy;
- `#place_order` ownership;
- `#order_review` static ownership;
- Product Packaging behavior;
- Step01/Step02 sticky behavior;
- mobile/tablet Step03 composition;
- Crypto order-pay Workspace.

## Post-edit source validation gate

The user should save all three files, then return the three saved files together before runtime acceptance.

Expected source signatures are the simulated signatures above if the editor preserves existing line endings exactly. If the editor normalizes CRLF/LF, byte/SHA differences alone are not an automatic failure; semantic anchors, syntax, brace/comment balance and exact inserted blocks must be revalidated.

After source validation passes, run one consolidated runtime batch:

1. current Step03 desktop short-left state: root should carry `.sf-safe5-step3-context-sticky`; whole summary static; context card sticky and locks at 136px;
2. temporary console-only left-height expansion or a naturally tall gateway state: fallback class should clear and whole summary should return to sticky ownership;
3. Step02 desktop regression: existing whole summary sticky still works;
4. Step03 mobile regression: no sticky; existing context -> main -> summary ordering remains unchanged.

No business/payment settlement test is required for this presentation-only change unless a concrete checkout behavior regression appears.
