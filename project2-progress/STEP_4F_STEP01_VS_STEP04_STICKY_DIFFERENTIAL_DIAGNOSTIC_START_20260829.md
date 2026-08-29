# Project 2 · Step01 vs Step04 Sticky Differential Diagnostic Start · 2026-08-29

## Trigger

User approved testing and asked for architectural clarification: whether Checkout Step01/Step02 and Step04 are actually the same page/runtime and whether the right-side information panel is a shared/common component.

## Clarification locked before test

They are not the same runtime page/template.

- Step01/Step02 are states of the ordinary WooCommerce Checkout form page and use the normal Checkout shell/sidebar implementation.
- Step04 is the WooCommerce order-received/result endpoint and uses a separate order-result template/runtime shell.
- They intentionally share a visual contract and information architecture, but the right-side summary is not one single DOM node/component instance reused across all steps.
- Consequently, sticky behavior, ancestor overflow, DOM ownership and dynamic content height can differ by step even when the side panels look visually consistent.

This does not imply the UX should differ. Project 2 still expects coherent right-summary behavior; the implementation owners are simply different.

## Diagnostic goal

Use one known-working Step01 or Step02 desktop page as the control and compare it against the already-captured failing Step04 runtime.

Capture on the working page:

- sticky element selector and computed position/top/bottom
- sidebar height and viewport fit
- parent shell bounds
- all ancestors' overflow/transform/contain
- live viewport top at multiple scrollY positions
- whether native sticky actually locks

Then compare the working control to Step04 to identify the minimal runtime difference before any Step04 source change.

## Scope boundary

- Prefer Step02 if convenient; Step01 is acceptable.
- Desktop only, 1920×991, zoom 100%.
- Step03 remains explicitly deferred until Step04 closes.
- Do not modify source before the differential is evaluated.
