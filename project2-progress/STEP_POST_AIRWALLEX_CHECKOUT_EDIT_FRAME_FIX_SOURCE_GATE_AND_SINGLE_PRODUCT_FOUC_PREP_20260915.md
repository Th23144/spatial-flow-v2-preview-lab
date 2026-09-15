# Post-Airwallex — Checkout edit-frame fix Source Gate + Single Product FOUC prep — 2026-09-15

## Trigger
The user supplied fresh current-live evidence of two historical visual regressions after Airwallex cleanup closure:
1. Checkout Step03 completed-context `EDIT ADDRESS →` and Shipping `EDIT →` controls show an unintended translucent/button-like rectangular chrome.
2. Single Product hard refresh briefly paints the native WooCommerce variation selects before the accepted visual variation controls take over.

These are bounded visual regressions only. They do not reopen Checkout architecture, payment/order logic, Product Packaging, Single Product content architecture, or WooCommerce ownership.

## Checkout current returned source
User returned current `assets/css/checkout-safe5.css`.

Baseline:
- bytes: 145,317
- logical lines: 4,942
- SHA256: `166d5cd02e529aa1caf8151c210f8cfc6a4ea25df9b12d7077750c1b0b84e888`
- braces: 590 / 590

The current Step03 edit-control owner already sets `padding: 0`, `border: 0`, and `background: transparent`, but does not hard-reset theme/button chrome properties such as `min-height`, `appearance`, `box-shadow`, `text-shadow`, and hover/focus/active surface behavior. This leaves the controls vulnerable to global button styling.

## Checkout bounded correction
Authorized correction is limited to the existing Step03 edit-control selectors:
- `.sf-safe5-context-address-edit`
- `.sf-safe5-context-section__edit`

The correction:
- keeps the address action full-width and retains the single intended top divider;
- keeps the Shipping edit action inline/auto-width;
- hard-resets native/theme button chrome with scoped `!important` only on presentation properties;
- removes unintended background/box-shadow/min-height/appearance carry-over;
- preserves keyboard focus visibility with a narrow `:focus-visible` outline;
- preserves the existing 8px mobile address top-padding override.

No checkout markup, JS, WooCommerce lifecycle, gateway, totals, order submission, or packaging logic is changed.

## Generated corrected Checkout CSS
Output prepared from the returned current file:
- bytes: 146,438
- logical lines: 4,977
- SHA256: `b74d89e7094056a2a6cf3703d16bf3a67ada623a8daaeab87687b2c0f3f350af`
- braces: 593 / 593
- tinycss2 parse errors: 0

Source Gate: **PASS**.

Runtime gate still required:
- desktop Step03: `EDIT ADDRESS →` has no rectangular button chrome, only the intended top divider;
- desktop Step03 Shipping `EDIT →` has no rectangular button chrome;
- hover/focus does not reintroduce a box;
- 390px mobile retains correct spacing and no regression.

## Single Product refresh-time native variation FOUC
Repository history confirms the accepted visual variation system mirrors/syncs native WooCommerce variation state; WooCommerce native variation/add-to-cart ownership must remain authoritative.

The new evidence is not the previously closed Product Options BlockUI white-wash defect. It is a first-paint / initialization FOUC where native WooCommerce selects are visible before the visual variation UI is ready.

A safe repair must therefore use the same design principle as Checkout Step01 anti-FOUC:
- preserve native WooCommerce selects as fallback truth;
- suppress only the incorrect first paint when JavaScript is available and preparing the enhanced UI;
- reveal the accepted visual control surface only when the enhancement is ready;
- release back to native controls if enhancement fails / times out;
- do not permanently `display:none` the WooCommerce variation form.

## Required current-live source before Single Product write
Do not patch Single Product from historical source snapshots.
Need the user's current live files that own the variation enhancement and presentation, starting with:
- `assets/css/spatial-flow.css`
- the current JS/PHP owner that builds `.sf-variation-choice` / synchronizes native variation selects (identify from current source before edit)
- `woocommerce/single-product.php` only if a synchronous pre-paint bootstrap must be inserted in template markup.

Status:
- Checkout edit-frame correction: SOURCE GATE PASS / runtime pending.
- Single Product FOUC: root-classification complete / current-live owner audit pending.
