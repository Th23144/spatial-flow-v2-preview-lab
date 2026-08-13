# Project 2 · Step 4F · Coupon Visual Cleanup Source Accepted · 2026-08-13

Status: ACCEPTED · SOURCE FILE MATCHES PREPARED TARGET EXACTLY

## Scope

This is **not** a strict reference-page 1:1 item because the canonical static Step 02 reference does not contain the live WooCommerce coupon interaction. It is a required live functional extension that must remain visually subordinate to the reference design language.

## File

`assets/css/checkout-safe5.css`

Accepted uploaded/live candidate identity:

- bytes: `136,170`
- logical lines: `4,453`
- SHA256: `c6c2926c44956d943dd188343b9e839833234eaf7359375e4ffa6ccfa62244c2`
- CRLF: yes
- final newline: no
- `{` / `}`: `527 / 527`
- `/*` / `*/`: `24 / 24`

This matches the prepared target exactly.

## Accepted visual cleanup

The existing SAFE5 coupon owner was modified in place; no tail FIX block was appended.

- coupon outer container no longer draws its own bottom divider;
- coupon outer spacing reduced to a lower-visual-weight footprint;
- expanded coupon panel no longer draws an additional top divider;
- coupon success/error message no longer draws another divider;
- input and Apply button borders remain because they are necessary control boundaries;
- Order Summary heading divider remains intact as part of the reference visual system.

## Policy

Coupon remains a server-backed WooCommerce feature and is outside the canonical static 1:1 contract. Its acceptance criterion is therefore:

> preserve function and backend/server authority while minimizing visual noise and making the extension feel native to the Spatial Flow reference system.

## Next

Install/refresh this CSS on the real checkout and visually verify the coupon collapsed and expanded states. After this extension-specific cleanup is accepted, resume the remaining true micro-1:1 checkout parity work.
