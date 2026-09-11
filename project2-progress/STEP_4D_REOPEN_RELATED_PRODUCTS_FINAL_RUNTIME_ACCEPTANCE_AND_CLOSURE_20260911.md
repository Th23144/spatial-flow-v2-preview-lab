# Project 2 · Step 4D-REOPEN · Related Products final runtime acceptance and closure · 2026-09-11

## User-confirmed final interaction result
The user confirmed that on the 390px mobile state, tapping a Related Products image once navigates directly to the corresponding product page.

The visible `VIEW PIECE →` state seen in the mobile screenshot was therefore a transient tap/focus interaction state, not a two-tap navigation defect.

## Final runtime acceptance
The current Related Products implementation is accepted for this remediation milestone.

Confirmed runtime behavior:
- desktop four-column geometry matches the static-reference target after the 56px internal desktop gutter correction;
- heading text renders as `Pieces of a similar weight.` with reference-style emphasis;
- `View the full edit →` is present;
- open editorial product layout is used instead of framed Woo cards;
- product image/title/price/permalink remain real WooCommerce dynamic data;
- public `Reference / Piece Code` is separated from WooCommerce inventory SKU via `_sf_piece_reference`;
- empty Reference / Piece Code does not fabricate or fall back to Woo SKU;
- optional Edition uses `_sf_piece_edition` and remains hidden when empty;
- optional Placement Note uses `_sf_placement` and remains hidden when empty;
- desktop `VIEW PIECE →` hover treatment works;
- 390px mobile one-column layout passes without horizontal overflow or abnormal wrapping;
- 390px mobile single tap navigates immediately to the product page; no double-tap requirement exists.

## Data-policy note
Temporary validation values used during testing are not production content and may be removed.

No fake Reference, Edition, Placement or other editorial metadata should be retained solely to reproduce the static sample.

## Closure
`Related Products / Pieces of a similar weight`: USER / RUNTIME ACCEPTED / CLOSED.

This closes the Related Products strict-1:1 remediation milestone.

It does **not** mark the whole Single Product page Completed 1:1.

## Protected boundaries
Do not reopen or modify this accepted Related Products implementation without new concrete evidence or a later explicit user design decision.

The current Reference / Piece Code ownership decision remains:
- WooCommerce SKU = inventory / operations identifier;
- `_sf_piece_reference` = public Spatial Flow editorial piece code.

## Current stop point after closure
`Step 4D-REOPEN · Single Product remediation`

Related Products is closed. The next action is **not** automatic implementation of Gift CTA. Before proceeding, re-read the authoritative Single Product remediation plan and perform the promised strict 1:1 back-audit of earlier Single Product surfaces so historical PASS labels do not hide remaining visible drift.

Single Product overall binary page status remains: `Not done`.
