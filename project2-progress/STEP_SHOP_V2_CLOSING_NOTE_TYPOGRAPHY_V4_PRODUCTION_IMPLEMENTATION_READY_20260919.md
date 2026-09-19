# Shop V2 — Closing Note Typography V4 production implementation ready

Date: 2026-09-19
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user accepted external Closing Note Typography V4 and instructed Project 2 to begin production implementation.

## Current source re-audit

Latest File Library sources located:
- `woocommerce/archive-product.php` uploaded 2026-09-18 12:52:37 UTC;
- `assets/css/spatial-flow.css` uploaded 2026-09-18 15:22:36 UTC.

Current archive owner remains:
- `sf_shop_v2_closing_enabled`;
- `closing_intro`;
- `closing_emphasis`;
- `closing_body`;
- `closing_side_text`;
- `closing_button_text`;
- `sf_shop_v2_closing_button_url` fallback chain.

The current archive markup still does not render the already-existing `closing_kicker` owner. Intro / Emphasis / Body remain wrapped as strong / em / span inside one paragraph.

Latest CSS identity is the previously source-validated `spatial-flow(20260918-152238).css`:
- bytes: 645,564;
- logical lines: 22,939;
- SHA256: 712f7fdb2c642d8e15603e0e26ff1e66676911d1486d06d975f84cf0fe2c5b77;
- braces: 3,550 / 3,550;
- comments: 276 / 276;
- parser errors: 0.

Current desktop Closing Note CSS still contains the temporary `padding-left:48px` right-column experiment. Mobile remains previously accepted with block layout and right margin-top 26px.

## Bounded production delta

### archive-product.php

Add only one rendered backend-owned kicker before the existing left paragraph.

Use a `div.sf-shop-v2-closing-note__kicker` so the existing mobile `.sf-shop-v2-closing-note__left span` owner cannot accidentally capture the kicker.

No CTA owner, URL owner, Woo loop, pagination, filtering, product data or footer code changes.

Expected textual delta for the bounded markup replacement:
- approximately +140 UTF-8 bytes;
- +1 logical line.

### spatial-flow.css

Replace the canonical current Closing Note owner block in place.

Desktop >=1101 only:
- V4 internal typography hierarchy;
- kicker visible;
- Intro / Emphasis / Body separated visually;
- wider left measures to prevent unnecessary vertical line stacking;
- right group constrained to 470px, aligned toward the outer side, then moved 20px inward;
- restrained terracotta rule above right copy;
- V4 section padding / CTA microtype.

Base / <=1100:
- kicker hidden;
- existing inline left paragraph model retained;
- existing mobile block layout retained;
- existing mobile right margin-top retained.

The temporary desktop `padding-left:48px` experiment is removed as part of the canonical replacement.

Expected CSS textual delta under LF line endings:
- +2,465 bytes;
- +85 logical lines;
- expected resulting CSS size approximately 648,029 bytes;
- expected logical lines 23,024.

## Hard boundaries

Do not modify:
- Header;
- Footer;
- DIY / Custom Studio frozen feature;
- WooCommerce loop / sort / filters / pagination;
- mobile Shop accepted layout;
- Closing Note CTA routing;
- Customizer registration in functions.php.

## Acceptance sequence

1. User performs the two bounded replacements.
2. User returns both edited files.
3. Project 2 source-validates PHP syntax, CSS braces/comments/parser, exact owner uniqueness and cascade.
4. Only after source PASS, run desktop Closing Note runtime review.
5. Mobile only receives a regression check confirming no visual change.

Status: PRODUCTION IMPLEMENTATION READY / AWAITING USER MANUAL REPLACEMENT.
