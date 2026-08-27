# Step 4F · Step04 Computed Parity Audit Start · 2026-08-26

User supplied eight computed-style / geometry JSON captures for strict 1:1 audit.

## Audit method

The assistant will sort the files by source (reference/production), semantic state, and viewport, then perform programmatic comparison of:

- viewport / DPR / visualViewport scale;
- CSS custom properties;
- computed typography;
- margin / padding / border / background / radius / shadow;
- grid columns / rows / gaps;
- element bounding geometry;
- desktop and 390px responsive behavior.

Screenshots are supporting residual evidence only. Strict 1:1 acceptance is code-first and computed-style-first.

## Pair mapping to establish

1. Confirmed reference desktop ↔ Processing production desktop
2. Confirmed reference mobile ↔ Processing production mobile
3. Pending reference desktop ↔ Pending production desktop
4. Pending reference mobile ↔ Pending production mobile

Production `processing` is the WooCommerce semantic implementation of the static `confirmed` reference family.

## Stop condition

Do not issue any source modification until the complete computed parity diff is finished and deterministic mismatches are isolated. If mismatches are found, derive bounded manual anchored replacements only after confirming the true CSS owner.
