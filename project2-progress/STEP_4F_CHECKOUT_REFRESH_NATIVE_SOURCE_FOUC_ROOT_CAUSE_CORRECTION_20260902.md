# Project 2 · Checkout Refresh Native-Source FOUC Root-Cause Correction · 2026-09-02

## Context

The user clarified the visual defect with two screenshots of Step01:

- during a full page refresh, native WooCommerce checkout fields briefly appear with white rounded field surfaces and default/native label treatment;
- after SAFE5 initialization completes, the same underlying native fields appear in the accepted editorial recomposed Step01 panels with square warm field surfaces and the expected typography/icons;
- the user reports a similar very-fast transient state on Step03.

This is **not the same defect** as the WooCommerce BlockUI AJAX white-wash overlay diagnosed earlier.

## Correction of previous interpretation

The previous assistant interpretation treated the user's refresh-time complaint as an AJAX `BlockUI` surface issue. That interpretation was incomplete/wrong for the defect the user was pointing to.

The BlockUI runtime evidence remains technically valid, but it does not explain the screenshot supplied here.

The CSS block added solely to normalize `.blockUI/.blockOverlay` must therefore not be counted as the fix for this user-reported refresh-time field flash. It should be treated as an unrelated/unaccepted delta unless separately justified and accepted.

## Root cause now confirmed for Step01

The existing Step01 architecture was deliberately implemented as progressive enhancement.

Historical authoritative record:

`project2-progress/STEP_4F_R1D2B1_STEP01_NATIVE_PANEL_RECOMPOSITION.md`

That record explicitly defines:

- before JavaScript recomposition: new SAFE5 panels hidden, original WooCommerce source visible and usable;
- after successful recomposition: SAFE5 panels display, original source wrapper hides;
- JavaScript moves the existing native WooCommerce nodes with `appendChild()` rather than cloning/recreating them.

The current CSS still encodes that behavior:

```css
.sf-safe5-address-panels {
  display: none;
}

.sf-safe5-customer-details.is-recomposed .sf-safe5-address-panels {
  display: block;
}

.sf-safe5-customer-details.is-recomposed .sf-safe5-native-customer-source {
  display: none;
}
```

Therefore on a cold/full refresh, the browser is allowed to paint the original WooCommerce source before the SAFE5 JavaScript finishes node recomposition and adds the recomposed state. The user-visible white rounded inputs are this intentional fallback state leaking into first paint (FOUC / flash of unrecomposed native checkout UI).

## Important distinction

This defect is not:

- WPCode 1706 returning;
- SAFE5 final field CSS failing after initialization;
- an AJAX BlockUI wash;
- duplicate fields;
- cloned inputs;
- payment/order business-logic failure.

It is a **pre-recomposition first-paint visual leak** created by the progressive-enhancement fallback design.

## Step03

The user reports the same class of transient refresh defect on Step03, but it is too fast to inspect visually in normal operation.

Do not assume Step03 has the identical owner until the current `form-checkout.php` and `checkout-safe5.js` initialization/host-relocation sequence is inspected. The likely class is the same: native WooCommerce payment UI becoming paintable before the SAFE5 host/state becomes authoritative.

## Required next action

Before editing source:

1. preserve WPCode 1706 in the disabled state;
2. do not classify the BlockUI CSS delta as accepted for this defect;
3. inspect the current production copies of:
   - `woocommerce/checkout/form-checkout.php`
   - `assets/js/checkout-safe5.js`
   - current `assets/css/checkout-safe5.css` (already returned by user)
4. design one bounded anti-FOUC correction that prevents unrecomposed native UI from becoming visibly wrong during first paint while preserving native WooCommerce field authority and a usable fallback if JavaScript truly fails;
5. cover both Step01 and Step03 in the same architecture review where possible;
6. validate source before runtime testing.

## Current status

```text
WPCode 1706 stale Checkout owner: disabled
Step03 steady-state gateway-card white-block issue: corrected by disabling 1706
User-reported full-refresh field/card flash: OPEN
Step01 root cause: CONFIRMED native-source pre-recomposition FOUC
Step03 equivalent owner: PENDING exact source inspection
BlockUI CSS delta: unrelated to clarified defect / not user-accepted as its fix
Crypto V0.3.0 button font: queued after Checkout refresh defect closes
```
