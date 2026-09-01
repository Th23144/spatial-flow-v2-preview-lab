# Step 4F · Step03 Gateway Host WPCode Root Cause Confirmed · 2026-09-01

## Trigger

User supplied the requested `SF_STEP03_INLINE_STYLE_OWNER_AUDIT_20260901` runtime output from the live Checkout Step03 page at 1920×991.

## Root cause confirmed

The conflicting rounded white gateway-card styling is injected by WPCode, not by the canonical Project-2 SAFE5 stylesheet.

Runtime owner:

```text
style.wpcode-css-snippet
href: null
styleNodeIndex: 12
textLength: 10967
```

The injected snippet begins with:

```text
WooCommerce Checkout UI - Final PRO (WPCode)
Focus: Right Column (Order Review + Payment)
Desktop + Tablet + Mobile
Scope: checkout only
```

The exact conflicting winning rules are:

```css
body.woocommerce-checkout #payment .wc_payment_method {
  border: 1px solid rgb(237, 237, 237) !important;
  border-radius: 14px !important;
  padding: 12px !important;
  margin: 0 0 10px !important;
  background: rgb(250, 250, 250) !important;
}

body.woocommerce-checkout #payment .payment_box {
  background: rgb(255, 255, 255) !important;
  border: 1px solid rgb(237, 237, 237) !important;
  border-radius: 12px !important;
  padding: 12px !important;
  margin-top: 10px !important;
}
```

These declarations override the current canonical `checkout-safe5.css` Step03 rules, which intentionally use square editorial surfaces and different spacing/background values.

## Historical audit correction

The 2026-08-02 WPCode residual ownership audit excluded six active snippets based on visible snippet names/scope and only inspected the global PHP routing snippet in source.

That earlier conclusion is now superseded for Checkout CSS ownership by direct runtime evidence: an active WPCode CSS snippet is currently injecting Checkout/payment CSS into the live page.

Do not treat the old `WPCode: no Checkout owner` conclusion as authoritative for the current runtime.

## Safe correction sequence

1. Do **not** add stronger `!important` overrides to `checkout-safe5.css`.
2. Identify the active WPCode CSS snippet whose source begins with `WooCommerce Checkout UI - Final PRO (WPCode)`.
3. Record its current snippet ID/name/status before changing it.
4. Disable only that specific legacy Checkout CSS snippet; do not delete it yet.
5. Reload Checkout Step03 and capture desktop/mobile visual evidence.
6. Confirm the rounded white gateway rows/payment box disappear and the canonical SAFE5 visual owner becomes effective.
7. If disabling the snippet exposes any genuinely missing Checkout styling elsewhere, migrate only the required surviving declarations into the canonical owner after source-backed review; do not reactivate the whole legacy snippet as a blanket fix.

## Task ordering

The already-open Crypto V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch remains next in queue **after** this Step03 gateway-host blocker is closed.

The Crypto defect remains typography-only until source/runtime evidence proves otherwise. Locked static reference typography:

```css
font-family: var(--mono);
font-size: 9px;
letter-spacing: .17em;
text-transform: uppercase;
```

Before changing the Crypto plugin, validate the currently installed V0.3.0 source files against the accepted fingerprints documented in `STEP_4F_CRYPTO_V030_TRANSFER_BUTTON_TYPOGRAPHY_SOURCE_AUDIT_START_20260829.md`.

## Current status

```text
Step03 gateway-host visual blocker: ROOT CAUSE CONFIRMED / correction pending
WPCode legacy Checkout CSS: proven live owner
Canonical checkout-safe5.css: do not patch over the conflict
Crypto V0.3.0 transfer-button typography: queued immediately after Step03 blocker
Step04: remains CLOSED
```
