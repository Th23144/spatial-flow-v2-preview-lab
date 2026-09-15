# Project 2 · Post-Airwallex two legacy visual defects · bounded reopen · 2026-09-15

## Context

After Airwallex residual cleanup passed final zero-residual audit and Checkout runtime regression, the user reported two older visual defects that are not caused by the Airwallex cleanup.

Airwallex cleanup remains CLOSED.

## Defect 1 — Checkout Step03 context edit controls show unwanted translucent frame/surface

Fresh user evidence shows the Step03 context block with:
- `EDIT ADDRESS →`
- Shipping Method `EDIT →`

Both controls exhibit a visible translucent rectangular surface / frame that should not be present in the accepted editorial treatment.

This is a concrete visual regression / previously missed leftover. Reopen scope is limited to the visual owner of these context edit controls. Do not reopen Checkout commerce architecture, WooCommerce field ownership, payment submission, packaging, totals, or order creation.

The authoritative Checkout closure rule allows bounded reopen when new concrete evidence shows visual regression against the accepted design language.

## Defect 2 — Single Product full-refresh native WooCommerce variation UI flash / FOUC

Fresh user evidence shows that during page refresh/loading on a variable Single Product page, the old/native WooCommerce variation table/select presentation becomes visible before the accepted Product V2 presentation settles.

Historical repository evidence confirms a dedicated anti-FOUC fix existed for Checkout Step01 only:
- `STEP_4F_CHECKOUT_REFRESH_NATIVE_SOURCE_FOUC_ROOT_CAUSE_CORRECTION_20260902.md`
- `STEP_4F_STEP01_NATIVE_FIELD_FOUC_SOURCE_AUDIT_AND_FIX_PLAN_20260902.md`
- `STEP_4F_STEP01_FOUC_AND_SUMMARY_BLOCKUI_VISUAL_PASS_20260902.md`
- `STEP_4F_CHECKOUT_FINAL_CLOSURE_COMPLETED_1_TO_1_20260903.md`

That historical fix used a scoped pre-paint preparation guard for Checkout Step01. It was not a site-wide anti-FOUC system and did not establish equivalent protection for Single Product.

The Single Product final closure on 2026-09-12 was based on settled desktop/mobile runtime screenshots. Its closure record does not document a hard-refresh / first-paint FOUC gate. Therefore this newly captured refresh-time native variation flash is a real missed transient-state defect, not evidence that the whole Single Product architecture is invalid.

Bounded reopen scope:
- Single Product first-paint / refresh-time native variation UI only.
- Preserve `woocommerce_template_single_add_to_cart()` and native WooCommerce variation/cart authority.
- Do not replace native variation logic with a theme-side duplicate state system.

## Required next action

Before any source edit:
1. Audit current live owners for Defect 1 in `assets/css/checkout-safe5.css` and relevant Checkout markup/JS; identify the exact computed-style owner of the translucent frame/surface.
2. Audit current Single Product first-paint architecture in `woocommerce/single-product.php`, `assets/css/spatial-flow.css`, and any Single Product JS/inline bootstrap owner; determine why native variation markup becomes paintable before final V2 styling/state is authoritative.
3. Check whether similar first-paint native UI leaks exist on other current Project-2 pages before assuming this is Single Product-only.
4. Use bounded fixes with fallback safety; do not add broad global `display:none` rules or hide native WooCommerce controls permanently.
5. Source Gate, then focused refresh/runtime regression, then re-close only the bounded defects.

## Current state

```text
Airwallex Residual Cleanup: CLOSED
Checkout: narrow visual defect reopened — context edit translucent frames
Single Product: narrow transient defect reopened — refresh-time native variation FOUC
Whole Checkout architecture: remains protected
Whole Single Product architecture: remains protected
Next step: read-only owner audit before any source change
```
