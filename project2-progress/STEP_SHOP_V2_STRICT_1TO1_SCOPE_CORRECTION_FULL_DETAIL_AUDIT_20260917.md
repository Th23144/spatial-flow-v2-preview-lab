# STEP_SHOP_V2_STRICT_1TO1_SCOPE_CORRECTION_FULL_DETAIL_AUDIT_20260917

Date: 2026-09-17
Project: Spatial Flow V2 / 项目二换皮工程
Surface: Main-site Shop archive

## User correction

The user clarified that, under the project’s strict 1:1 standard, the Shop should not be treated as "mostly correct with a handful of blockers". The current page contains many small geometric / typographic / spacing / hierarchy differences across nearly every section.

Therefore the prior blocker-oriented mismatch summary is too coarse for final Shop acceptance.

## Superseding audit rule

Do not proceed directly to the previously proposed bounded R1B patch.

Before implementation, run a full-detail reference audit against `preview/spatial-flow-shop-v1.html` using exact source values where available.

The audit must cover every Shop-owned visible detail, including:

- outer frame / max width / internal gutters;
- section-by-section top / bottom padding;
- horizontal and vertical gaps;
- grid ratios and column widths;
- typography family / size / weight / line-height / letter-spacing / italic treatment;
- border placement and border color;
- image aspect ratio, object-fit, object-position and hover treatment;
- kicker / heading / subcopy hierarchy;
- toolbar spacing, filter labels, sort control dimensions;
- Editor's Pick composition and footer alignment;
- product-card title / subline / price / editorial place note / quick action / wishlist geometry;
- product-card row/column gaps and card vertical rhythm;
- product-section heading/count alignment;
- pagination geometry and previous / numbers / next presentation;
- closing editorial note composition;
- transitions into the protected CLOSED Header and Footer;
- tablet and phone breakpoint behavior;
- no horizontal overflow;
- backend editability and WooCommerce native data / URL / filter / sort / pagination ownership.

## Protected later decisions / permitted deviations

The full-detail audit must not mechanically revert later user-approved production decisions:

- Main Header V2 remains CLOSED.
- Main Footer V2 remains CLOSED.
- Mobile Shop keeps the later accepted reduced-density treatment so products appear earlier.
- Mobile ordinary widths keep the later accepted two-column product grid, with controlled one-column fallback only at very narrow widths.
- Mobile Editor's Pick may remain hidden under the later accepted production decision.
- Real WooCommerce product data replaces static sample data.
- Placeholder/missing product media is data truth and must not be replaced with fabricated imagery.
- Wishlist remains YITH-owned.
- Taxonomy/layered-nav filtering, sorting and pagination URLs remain WooCommerce-owned.

These are narrow exceptions. They do not permit approximation elsewhere.

## Current-source evidence already identified

The present Shop CSS intentionally reproduces many reference numeric values, but it also contains controlled production deviations and implementation drift. Examples already confirmed from current source:

- Shop containers currently use `width: min(1440px, calc(100% - 112px))`, which does not exactly model the static source's 1440px outer frame plus 56px internal padding.
- Product section currently includes an extra rendered kicker layer above the title.
- Current product-card template omits the reference quick action and editorial placement-note layer.
- Current pagination remains WooCommerce-centered page numbers rather than the static previous / center numbers / next composition.
- Current mobile rules intentionally retain two-column product layout below 480px until the 360px fallback, which is a later accepted production decision and not to be automatically reverted.

## Next step

Produce a full-detail Shop delta matrix before code edits.

For each visible block, record:

```text
REFERENCE VALUE / STRUCTURE
CURRENT VALUE / STRUCTURE
DELTA
CLASSIFICATION:
- exact match
- strict mismatch
- later approved deviation
- dynamic-data substitution
- backend-owner requirement
ACTION
```

Only after this matrix is complete should one coherent remediation batch be prepared.

Shop binary status remains:

```text
Not done
```
