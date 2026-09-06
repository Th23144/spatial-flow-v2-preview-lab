# Step 4D REOPEN B1.2 — Single Product BlockUI + Selected-State Root Cause

Date: 2026-09-06

## User-visible regressions after B1.1

1. During single-product refresh / variation initialization, the options region is covered by a large translucent white WooCommerce-style loading overlay with a spinner. This recreates the same undesirable white-wash pattern previously handled on Cart/Checkout.
2. Purpose / Five Elements Energy / Zodiac Sign choices are functionally selected, but the selected option has no visible state.

## Root-cause audit

### Selected-state feedback

The visual variation system already has a real `.is-active` state and the native WooCommerce variation selection still works. The loss of feedback is CSS specificity, not broken WooCommerce logic.

The current canonical base rule defines a dark active state:

`.single-product .sf-variation-choice.is-active { ... background: var(--sf-ink); color: var(--sf-bg); ... }`

However the later desktop `@media (min-width:1025px)` polish applies `background: transparent !important` and `color: #4a423d !important` to `.single-product .sf-variation-choice--text`. Those later `!important` declarations override the non-important `.is-active` presentation while leaving the underlying selected variation functional.

Authorized fix: add an explicit desktop active-state rule with matching `!important` strength. Do not change variation IDs, hidden selects, WooCommerce variation events, pricing, stock, or add-to-cart behavior.

### White loading wash

The screenshot is consistent with WooCommerce/jQuery BlockUI overlay behavior: a large white/translucent block with spinner covering the options/form region while the native variation state initializes/updates.

Authorized fix: keep the native blocking lifecycle and spinner semantics, but make the overlay surface transparent and render a small restrained spinner. Do not disable BlockUI behavior or allow clicks while WooCommerce considers the form busy.

## Scope

B1.2 is presentation-only:
- `assets/css/spatial-flow.css`
- `functions.php` version bump only for cache invalidation

No PHP template structure change and no JS/business-logic change are authorized.

## Gate

After returned-source verification, test desktop first:
- refresh no longer shows a large white rectangular wash;
- a small loading spinner may remain;
- text variation selected state is unmistakable (dark fill/light text);
- switching among Purpose / Five Elements / Zodiac updates the active state immediately;
- Woo variation price / stock / add-to-cart continue working.

Then confirm 390px mobile for the same two presentation states.
