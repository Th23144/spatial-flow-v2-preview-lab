# Step 4F — Checkout final closure reopened: transient and notice states — 2026-09-03

## Context
The desktop normal-path 01–04 sweep passed, and the user then supplied the requested 390px mobile screenshots plus additional runtime screenshots covering non-happy-path / transient Checkout states.

The mobile screenshots show no new structural regression in Step 01 Address, Step 02 Shipping, or Step 03 Payment. The supplied Step 04 mobile screenshot is a Payment Pending result state rather than the Confirmed state; however, the Step04 result-state family had already been separately regression-tested and closed before this final sweep.

## Important closure correction
Checkout must NOT be marked Completed 1:1 yet.

The newly supplied runtime evidence exposes three remaining Checkout-owned visual states that were not included in the immediately preceding normal-path sweep:

1. Checkout validation / server notice presentation on Step03, example native Terms error: `Please read and accept the terms and conditions to proceed with your order.`
2. The full-page `Processing Payment... / Do not close or refresh this page.` transient submission overlay.
3. A carried add-to-cart success notice that briefly appears at the top of Checkout when the user adds a product and uses the mini-cart `CHECKOUT` action to go directly to Checkout; it disappears after loading completes.

These are not a separate future project. They belong to Checkout closure.

## Repository authority confirming scope
Historical Checkout ownership already explicitly included notices and processing behavior:

- `STEP_4F_LIVE_CHECKOUT_EXACT_OWNERSHIP_MATRIX.md` assigns Checkout notices to the SAFE5/Checkout notice layer, includes `.woocommerce-NoticeGroup-checkout`, server errors and step-aware error mapping, and requires that WooCommerce remain final validation authority.
- `STEP_4F_LIVE_CHECKOUT_BOUNDED_RECONSTRUCTION_PLAN.md` states that `checkout-safe5.js` should be the sole step-aware Checkout notice presentation owner; native WooCommerce notice text/server authority must remain untouched; notices must not be duplicated or suppressed.
- `PROGRESS_LOG.md` explicitly records: `The checkout add-to-cart carried success notice fix belongs in checkout-safe5.css, not global spatial-flow.css.` It also explicitly warns not to hide validation notices, coupon messages, payment errors, required-field errors, or other blocking checkout notices.
- Historical SAFE5 source notes also preserve processing-overlay behavior as part of Checkout.

Therefore the prior attempt to proceed to final closure after only the normal-path screenshots was too narrow. This record corrects that sequencing.

## Classification of the three remaining issues
### A. Terms / validation notice
Status: OPEN — Checkout blocker for strict 1:1 closure.

The native WooCommerce error text and validation semantics must remain authoritative. Only presentation/placement may be redesigned. Do not hide, replace, or browser-author a fake error message.

### B. Processing Payment overlay
Status: OPEN — Checkout transient-state visual blocker.

The lockout behavior and anti-double-submit semantics must remain. Only the visual treatment may be adapted to the Spatial Flow editorial system. Do not weaken submission locking or change payment lifecycle behavior.

### C. Direct mini-cart -> Checkout carried success notice
Status: OPEN — likely regression or path/scoping gap.

A historical record says this was already fixed in `checkout-safe5.css`. Current evidence shows the direct mini-cart Checkout path still produces a brief server-rendered notice before SAFE5 settles. Treat as a regression/path gap, not a new feature.

The correction must be narrowly scoped to the carried success notice. Do NOT globally hide `.woocommerce-NoticeGroup-checkout`, `.woocommerce-error`, payment errors, coupon messages, required-field errors or other blocking notices.

## Current closure state
- Desktop normal-path 01–04: PASS.
- 390px mobile Step01/02/03 visual structure: PASS in the supplied sweep.
- Step04 mobile supplied state: Payment Pending; no new structural regression visible. Prior result-state family acceptance remains authoritative.
- Crypto V0.3.0 transfer-button typography: FINAL PASS.
- Checkout transient / notice states above: OPEN.
- WPCode 1706 `收款页`: remain disabled, do not delete.

## Correct next sequence
1. Audit current notice DOM / selector ownership and current SAFE5 notice CSS/JS without changing behavior.
2. Repair Checkout validation/error notice presentation first.
3. Repair the `Processing Payment...` overlay visual treatment while preserving lock semantics.
4. Diagnose and repair the direct mini-cart -> Checkout carried success-notice flash, reconciling with the historical fix.
5. Re-run a bounded desktop + 390px runtime check of these three states only.
6. Then perform final Checkout closure review. No new generic viewport sweep should be added unless new evidence requires it.
