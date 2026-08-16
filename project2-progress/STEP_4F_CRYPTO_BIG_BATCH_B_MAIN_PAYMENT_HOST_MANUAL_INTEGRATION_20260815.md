# Step 4F · BIG BATCH B · Main Payment Host Manual Integration

Date: 2026-08-15

Status: one coordinated local integration; not final acceptance.

## Baseline

```text
functions.php
SPATIAL_FLOW_CHILD_VERSION 2.7.13
609,465 bytes / 11,657 logical lines
SHA256 62b13f9acb69838bae1543a196e3bd4497faf02e1f30f04f197f7c0fb6575631

woocommerce/checkout/form-checkout.php
37,981 bytes / 674 logical lines
SHA256 c7af24d516ff9ca90c6cabddc546b709362a27dd91548201e58e4258f7d68f9e

assets/js/checkout-safe5.js
59,007 bytes / 1,768 logical lines
SHA256 b672ab9c643bc0e4008b0bb9215c0fdc6a2c777c9a18d3f2a1be48ff2cbe5af0

assets/css/checkout-safe5.css
148,983 bytes / 4,855 logical lines
SHA256 c1f5835297adf28f2509c9138f785007fd9b180d52bd83643c298fe3a999f87a
```

## Replacement 1 — form-checkout.php

Target: `woocommerce/checkout/form-checkout.php`
Expected OLD match: 1

Find the Step-03 native payment mount ending and replace it with the same mount plus this panel immediately after it, still inside `.sf-safe5-section-card--payment`:

```html
<section class="sf-safe5-payment-selected-panel" data-sf-safe5-payment-selected-panel hidden>
  <div class="sf-safe5-payment-selected-panel__head">
    <span data-sf-safe5-payment-selected-kicker>Selected payment</span>
    <span data-sf-safe5-payment-selected-family>WooCommerce gateway</span>
  </div>
  <div class="sf-safe5-payment-selected-panel__body">
    <div>
      <h3 data-sf-safe5-payment-selected-title>Payment</h3>
      <p data-sf-safe5-payment-selected-copy>Payment fields and settlement remain controlled by WooCommerce and the selected provider.</p>
    </div>
    <dl>
      <div>
        <dt>Settlement</dt>
        <dd data-sf-safe5-payment-selected-settlement>Selected gateway</dd>
      </div>
      <div>
        <dt>Presentation</dt>
        <dd data-sf-safe5-payment-selected-mode>Provider-controlled</dd>
      </div>
    </dl>
  </div>
</section>
```

Do not move or clone `woocommerce_checkout_payment()`.

## Replacement 2 — checkout-safe5.js

Target: `assets/js/checkout-safe5.js`
Expected insertion anchor match: 1

Insert the following functions immediately before `function bindWooCommerceEvents(root)`, then call `bindPaymentHostPresentation(root);` as the first statement inside `bindWooCommerceEvents(root)`.

```js
function normalizePaymentHostText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function paymentHostDescriptor(input, item) {
  var label = item ? q("label", item) : null;
  var paymentBox = item ? q(".payment_box", item) : null;
  var nativeTitle = normalizePaymentHostText(label ? label.textContent : "") || "Payment";
  var nativeCopy = normalizePaymentHostText(paymentBox ? paymentBox.textContent : "");

  if (input && input.value === "spatial_flow_crypto") {
    return {
      title: "Cryptocurrency",
      family: "Cryptocurrency",
      copy: "Pay with USDT on TRON / TRC20. After the order is created, payment continues in a secure dedicated Step 03 workspace.",
      settlement: "USDT · TRON / TRC20",
      mode: "Dedicated workspace",
      actionLabel: "Continue to secure Crypto payment →"
    };
  }

  return {
    title: nativeTitle,
    family: "WooCommerce gateway",
    copy: nativeCopy || "Payment fields and settlement remain controlled by WooCommerce and the selected provider.",
    settlement: "Selected gateway",
    mode: "Provider-controlled",
    actionLabel: ""
  };
}

function syncPaymentHostPresentation(root) {
  var panel = q("[data-sf-safe5-payment-selected-panel]", root);
  var checked = q('input[name="payment_method"]:checked', root);
  var placeOrder = q("#place_order", root) || q("#place_order");

  if (!panel || !checked) {
    if (panel) panel.hidden = true;
    return;
  }

  var item = checked.closest("li.wc_payment_method");
  var descriptor = paymentHostDescriptor(checked, item);

  var kicker = q("[data-sf-safe5-payment-selected-kicker]", panel);
  var family = q("[data-sf-safe5-payment-selected-family]", panel);
  var title = q("[data-sf-safe5-payment-selected-title]", panel);
  var copy = q("[data-sf-safe5-payment-selected-copy]", panel);
  var settlement = q("[data-sf-safe5-payment-selected-settlement]", panel);
  var mode = q("[data-sf-safe5-payment-selected-mode]", panel);

  if (kicker) kicker.textContent = "Selected payment";
  if (family) family.textContent = descriptor.family;
  if (title) title.textContent = descriptor.title;
  if (copy) copy.textContent = descriptor.copy;
  if (settlement) settlement.textContent = descriptor.settlement;
  if (mode) mode.textContent = descriptor.mode;

  panel.hidden = false;

  if (placeOrder) {
    if (!placeOrder.dataset.sfSafe5OriginalLabel) {
      placeOrder.dataset.sfSafe5OriginalLabel =
        placeOrder.getAttribute("data-value") ||
        placeOrder.value ||
        normalizePaymentHostText(placeOrder.textContent) ||
        "Place order";
    }

    if (descriptor.actionLabel) {
      placeOrder.textContent = descriptor.actionLabel;
      placeOrder.value = descriptor.actionLabel;
    } else {
      var nativeLabel =
        placeOrder.getAttribute("data-value") ||
        placeOrder.dataset.sfSafe5OriginalLabel ||
        "Place order";

      placeOrder.textContent = nativeLabel;
      placeOrder.value = nativeLabel;
    }
  }
}

function bindPaymentHostPresentation(root) {
  if (root.dataset.sfSafe5PaymentHostBound) {
    syncPaymentHostPresentation(root);
    return;
  }

  root.dataset.sfSafe5PaymentHostBound = "1";

  root.addEventListener("change", function (event) {
    if (!event.target || !event.target.matches('input[name="payment_method"]')) return;

    window.setTimeout(function () {
      syncPaymentHostPresentation(root);
    }, 0);
  });

  if (window.jQuery) {
    window.jQuery(document.body)
      .off("updated_checkout.sfSafe5PaymentHost")
      .on("updated_checkout.sfSafe5PaymentHost", function () {
        window.setTimeout(function () {
          syncPaymentHostPresentation(root);
        }, 0);
      });
  }

  syncPaymentHostPresentation(root);
}
```

## Replacement 3 — checkout-safe5.css

Target: `assets/css/checkout-safe5.css`
Expected insertion anchor match: 1

Insert this component immediately after the existing `.payment_box > :last-child` rule and before the existing `.place-order` rule:

```css
body.woocommerce-checkout:not(.woocommerce-order-received)
  .sf-safe5-payment-selected-panel[hidden] {
  display: none !important;
}

body.woocommerce-checkout:not(.woocommerce-order-received)
  .sf-safe5-payment-selected-panel {
  box-sizing: border-box;
  width: 100%;
  margin-top: 14px;
  padding: 18px;
  border: 1px solid var(--sf-safe5-line);
  background: rgba(250, 247, 243, 0.38);
  color: var(--sf-safe5-ink);
}

body.woocommerce-checkout:not(.woocommerce-order-received)
  .sf-safe5-payment-selected-panel__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--sf-safe5-line);
  color: var(--sf-safe5-muted);
  font-family: var(--sf-safe5-mono);
  font-size: 8px;
  font-weight: 500;
  letter-spacing: 0.16em;
  line-height: 1.4;
  text-transform: uppercase;
}

body.woocommerce-checkout:not(.woocommerce-order-received)
  .sf-safe5-payment-selected-panel__head
  span:last-child {
  color: var(--sf-safe5-stone);
}

body.woocommerce-checkout:not(.woocommerce-order-received)
  .sf-safe5-payment-selected-panel__body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(220px, 0.65fr);
  gap: 24px;
  padding-top: 16px;
}

body.woocommerce-checkout:not(.woocommerce-order-received)
  .sf-safe5-payment-selected-panel__body
  h3 {
  margin: 0;
  color: var(--sf-safe5-ink);
  font-family: var(--sf-safe5-serif);
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.05;
}

body.woocommerce-checkout:not(.woocommerce-order-received)
  .sf-safe5-payment-selected-panel__body
  p {
  max-width: 52ch;
  margin: 6px 0 0;
  color: var(--sf-safe5-muted);
  font-size: 10px;
  line-height: 1.6;
}

body.woocommerce-checkout:not(.woocommerce-order-received)
  .sf-safe5-payment-selected-panel__body
  dl {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin: 0;
}

body.woocommerce-checkout:not(.woocommerce-order-received)
  .sf-safe5-payment-selected-panel__body
  dl
  > div {
  min-width: 0;
}

body.woocommerce-checkout:not(.woocommerce-order-received)
  .sf-safe5-payment-selected-panel__body
  dt {
  margin: 0 0 4px;
  color: var(--sf-safe5-faint);
  font-family: var(--sf-safe5-mono);
  font-size: 7px;
  font-weight: 500;
  letter-spacing: 0.14em;
  line-height: 1.4;
  text-transform: uppercase;
}

body.woocommerce-checkout:not(.woocommerce-order-received)
  .sf-safe5-payment-selected-panel__body
  dd {
  margin: 0;
  color: var(--sf-safe5-ink);
  font-family: var(--sf-safe5-serif);
  font-size: 15px;
  line-height: 1.2;
}

@media (max-width: 720px) {
  body.woocommerce-checkout:not(.woocommerce-order-received)
    .sf-safe5-payment-selected-panel {
    margin-top: 10px;
    padding: 12px;
  }

  body.woocommerce-checkout:not(.woocommerce-order-received)
    .sf-safe5-payment-selected-panel__head {
    gap: 10px;
    padding-bottom: 9px;
    font-size: 7px;
    letter-spacing: 0.13em;
  }

  body.woocommerce-checkout:not(.woocommerce-order-received)
    .sf-safe5-payment-selected-panel__body {
    grid-template-columns: 1fr;
    gap: 14px;
    padding-top: 12px;
  }

  body.woocommerce-checkout:not(.woocommerce-order-received)
    .sf-safe5-payment-selected-panel__body
    h3 {
    font-size: 21px;
  }

  body.woocommerce-checkout:not(.woocommerce-order-received)
    .sf-safe5-payment-selected-panel__body
    p {
    font-size: 9px;
  }

  body.woocommerce-checkout:not(.woocommerce-order-received)
    .sf-safe5-payment-selected-panel__body
    dl {
    gap: 9px;
  }

  body.woocommerce-checkout:not(.woocommerce-order-received)
    .sf-safe5-payment-selected-panel__body
    dt {
    font-size: 6.5px;
  }

  body.woocommerce-checkout:not(.woocommerce-order-received)
    .sf-safe5-payment-selected-panel__body
    dd {
    font-size: 13px;
  }
}
```

## Replacement 4 — functions.php cache bump

Target: `functions.php`
Expected OLD match: 1

OLD:
```php
define( 'SPATIAL_FLOW_CHILD_VERSION', '2.7.13' );
```

NEW:
```php
define( 'SPATIAL_FLOW_CHILD_VERSION', '2.7.14' );
```

No other functions.php change is authorized in this integration.

## Local sequence

1. Preserve V0.2.9 and V0.2.7 plugin rollback ZIPs.
2. Keep Project 2 Crypto Workspace OFF.
3. Install `Spatial Flow Crypto Pay Trial V0.3.0` candidate.
4. Apply the three theme source changes above.
5. Bump child version to 2.7.14 last.
6. Save all files.
7. Return the changed four theme files to Project 2 for syntax/identity review before enabling Workspace.

Do not declare BIG BATCH B complete at this stage.
