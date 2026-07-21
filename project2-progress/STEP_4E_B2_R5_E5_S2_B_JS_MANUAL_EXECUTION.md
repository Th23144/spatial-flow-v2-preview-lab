# Step 4E-B2-R5-E5-S2-B · Delegated Cart JavaScript Lifecycle Bridge

Last updated: 2026-07-20  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
S2-A PHP renderer validation: Passed / not deployed.
S2-B JavaScript manual execution: Ready.
CSS editing: Not authorized yet.
Combined frontend deployment: Not authorized yet.
Cart page status: Not done.
```

## 1. Source baseline

```text
Server path: assets/js/spatial-flow.js
Uploaded alias: spatial-flow(4).js
Size: 70,828 bytes
Logical lines: 1,995
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
Node syntax: Passed
```

## 2. Exact operation

Insert the following block immediately before the unique anchor:

```javascript
  function setupAddToCartDFeedback() {
```

```javascript
  /* === Step 4E-B2-R5-E5-S2-B · Cart Lifecycle Bridge START === */
  function setupCartLifecycleBridge() {
    if (!document.body.classList.contains("woocommerce-cart") || !window.jQuery) return;

    var $ = window.jQuery;
    var $document = $(document);
    var $body = $(document.body);
    var namespace = ".sfCartLifecycle";
    var quantityTimer = null;
    var state = {
      couponOpen: false,
      couponValue: "",
      couponStatus: "",
      couponStatusType: "",
      applyingCoupon: false
    };

    function readText(node) {
      return node ? (node.textContent || "").replace(/\s+/g, " ").trim() : "";
    }

    function currentCartForm() {
      return $(".woocommerce-cart-form").first();
    }

    function currentNativeCouponField() {
      return currentCartForm().find("#coupon_code").first();
    }

    function currentNativeCouponButton() {
      return currentCartForm().find(':input[name="apply_coupon"]').first();
    }

    function currentNativeUpdateButton() {
      return currentCartForm().find(':input[name="update_cart"]').first();
    }

    function readNativeCouponResponse() {
      var error = q(".woocommerce-cart-form .coupon .coupon-error-notice");
      if (error) {
        return {
          text: readText(error),
          type: "error"
        };
      }

      var notices = qa(
        ".woocommerce-notices-wrapper .woocommerce-message, " +
        ".woocommerce-notices-wrapper .woocommerce-info, " +
        ".woocommerce-notices-wrapper .is-success, " +
        ".woocommerce-notices-wrapper .is-info, " +
        ".woocommerce > .woocommerce-message, " +
        ".woocommerce > .woocommerce-info"
      );
      var notice = notices.length ? notices[notices.length - 1] : null;

      return {
        text: readText(notice),
        type: notice ? "success" : ""
      };
    }

    function syncVisibleCoupon() {
      var details = q("[data-sf-cart-coupon]");
      if (!details) return;

      var input = q("[data-sf-cart-coupon-input]", details);
      var button = q("[data-sf-cart-coupon-apply]", details);
      var status = q("[data-sf-cart-coupon-status]", details);

      details.open = !!state.couponOpen;
      details.classList.toggle("is-processing", !!state.applyingCoupon);

      if (input) {
        input.value = state.couponValue;
        input.disabled = !!state.applyingCoupon;
        input.setAttribute("aria-busy", state.applyingCoupon ? "true" : "false");
      }

      if (button) {
        button.disabled = !!state.applyingCoupon;
        button.setAttribute("aria-busy", state.applyingCoupon ? "true" : "false");
      }

      if (status) {
        status.textContent = state.couponStatus;
        status.classList.toggle("is-error", "error" === state.couponStatusType);
        status.classList.toggle("is-success", "success" === state.couponStatusType);
      }
    }

    function captureNativeCouponResponse() {
      var response = readNativeCouponResponse();

      state.applyingCoupon = false;
      state.couponStatus = response.text;
      state.couponStatusType = response.type;

      syncVisibleCoupon();
    }

    function invokeNativeCartUpdate() {
      var $form = currentCartForm();
      var $button = currentNativeUpdateButton();

      if (!$form.length || !$button.length || $form.hasClass("processing")) return;

      $button.prop("disabled", false);
      $button.trigger("click");
    }

    function scheduleNativeCartUpdate(event) {
      var input = event.currentTarget;

      window.clearTimeout(quantityTimer);
      quantityTimer = window.setTimeout(function () {
        if (input && !document.documentElement.contains(input)) return;

        if (input && input.checkValidity && !input.checkValidity()) {
          return;
        }

        invokeNativeCartUpdate();
      }, 500);
    }

    function applyVisibleCoupon(event) {
      event.preventDefault();

      var details = event.currentTarget.closest("[data-sf-cart-coupon]");
      var visibleInput = details ? q("[data-sf-cart-coupon-input]", details) : null;
      var $nativeField = currentNativeCouponField();
      var $nativeButton = currentNativeCouponButton();

      if (!visibleInput || !$nativeField.length || !$nativeButton.length) return;

      state.couponOpen = true;
      state.couponValue = (visibleInput.value || "").trim();
      state.couponStatus = "";
      state.couponStatusType = "";
      state.applyingCoupon = true;
      syncVisibleCoupon();

      $nativeField.val(state.couponValue).trigger("input").trigger("change");
      $nativeButton.prop("disabled", false);
      $nativeButton.trigger("click");
    }

    $document.off(namespace);
    $body.off(namespace);

    $document.on(
      "input" + namespace + " change" + namespace,
      ".woocommerce-cart-form .cart_item input.qty",
      scheduleNativeCartUpdate
    );

    $document.on(
      "input" + namespace,
      "[data-sf-cart-coupon-input]",
      function (event) {
        state.couponOpen = true;
        state.couponValue = event.currentTarget.value || "";
        state.couponStatus = "";
        state.couponStatusType = "";
        syncVisibleCoupon();
      }
    );

    $document.on(
      "click" + namespace,
      "[data-sf-cart-coupon] > summary",
      function (event) {
        var details = event.currentTarget.parentNode;
        window.setTimeout(function () {
          state.couponOpen = !!(details && details.open);
        }, 0);
      }
    );

    $document.on(
      "click" + namespace,
      "[data-sf-cart-coupon-apply]",
      applyVisibleCoupon
    );

    $document.on(
      "keydown" + namespace,
      "[data-sf-cart-coupon-input]",
      function (event) {
        if ("Enter" !== event.key) return;
        event.preventDefault();

        var details = event.currentTarget.closest("[data-sf-cart-coupon]");
        var button = details ? q("[data-sf-cart-coupon-apply]", details) : null;
        if (button) button.click();
      }
    );

    $body.on(
      "applied_coupon" + namespace,
      function () {
        window.setTimeout(captureNativeCouponResponse, 0);
      }
    );

    $body.on(
      "removed_coupon" + namespace,
      function () {
        state.couponValue = "";
        window.setTimeout(captureNativeCouponResponse, 0);
      }
    );

    $body.on(
      "updated_wc_div" + namespace + " updated_cart_totals" + namespace,
      function () {
        window.setTimeout(function () {
          var nativeError = q(".woocommerce-cart-form .coupon .coupon-error-notice");
          if (nativeError) {
            state.couponOpen = true;
            state.couponStatus = readText(nativeError);
            state.couponStatusType = "error";
          }
          syncVisibleCoupon();
        }, 0);
      }
    );

    var initialNativeField = currentNativeCouponField();
    var initialNativeError = q(".woocommerce-cart-form .coupon .coupon-error-notice");

    if (initialNativeField.length) {
      state.couponValue = initialNativeField.val() || "";
    }

    if (initialNativeError) {
      state.couponOpen = true;
      state.couponStatus = readText(initialNativeError);
      state.couponStatusType = "error";
    }

    syncVisibleCoupon();
  }
  /* === Step 4E-B2-R5-E5-S2-B · Cart Lifecycle Bridge END === */

```

Then replace this unique init sequence:

```javascript
    setupProductStoryAccordion();
    setupAddToCartDFeedback();
```

with:

```javascript
    setupProductStoryAccordion();
    setupCartLifecycleBridge();
    setupAddToCartDFeedback();
```

## 3. Ownership and safety contract

The bridge:

```text
- runs only on body.woocommerce-cart
- requires existing jQuery
- uses namespaced delegated handlers
- resolves the current native form and buttons on every action
- invokes native Update Cart and Apply Coupon controls
- contains no custom AJAX
- performs no price, shipping, tax, Coupon or fragment calculations
- survives native form and totals replacement
- preserves visible Coupon open/value/status state
```

Do not edit any unrelated function.

## 4. Expected edited artifact

When inserted exactly with the existing UTF-8/LF format:

```text
Size: 78,143 bytes
Logical lines: 2,242
SHA256: 7442ee92167ae383b933c6db0281f14ea56a75733339818c3e4858d77d52651b
Node syntax: Passed
```

Expected uniqueness:

```text
Step 4E-B2-R5-E5-S2-B markers: 2
function setupCartLifecycleBridge(): 1
setupCartLifecycleBridge();: 1
function setupAddToCartDFeedback(): 1
setupAddToCartDFeedback();: 1
```

## 5. Validation gate

After editing, upload the exact JavaScript file.

Do not:

```text
- deploy PHP or JavaScript
- edit CSS
- execute cancelled FIX4
- modify Checkout, payment, Header, Footer or version 2.7.8
```
