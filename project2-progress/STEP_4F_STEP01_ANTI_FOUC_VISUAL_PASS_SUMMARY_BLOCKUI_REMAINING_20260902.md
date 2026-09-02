# Step 4F — Step01 anti-FOUC visual pass / Order Summary BlockUI remains — 2026-09-02

## User validation

After the Step01 anti-FOUC PHP + CSS guard was applied, the previously reported native WooCommerce white rounded input-field flash on full refresh is no longer visible.

User-provided screenshot confirms the Step01 field area now paints directly in the SAFE5 final composition.

## Remaining refresh-time visual

The right-side Order Summary still shows a temporary white/translucent blocked region with a spinner during WooCommerce checkout recalculation.

This is a separate phenomenon from the Step01 native-field FOUC. It is WooCommerce BlockUI / AJAX update feedback on the order review / summary region.

## Impact assessment

- Functional impact: none expected; this overlay is part of WooCommerce interaction blocking while totals/order review are recalculated.
- Visual impact: yes. Under Project 2 strict 1:1 acceptance, the temporary white wash is visibly inconsistent with the accepted editorial Order Summary surface.
- Decision: keep WooCommerce blocking semantics and loader behavior, but remove only the white/translucent wash from the Order Summary region with a narrowly scoped visual override.
- Do not reintroduce the previously rolled-back global Checkout BlockUI override.
- Do not affect Step01 anti-FOUC logic, gateway UI, order totals, payment logic, or WooCommerce AJAX authority.

## Next action

Add a summary-only BlockUI visual override in `assets/css/checkout-safe5.css`, scoped to `.sf-safe5-summary-card` / `#order_review`, preserving pointer blocking and a visible loader while making the overlay background transparent.
