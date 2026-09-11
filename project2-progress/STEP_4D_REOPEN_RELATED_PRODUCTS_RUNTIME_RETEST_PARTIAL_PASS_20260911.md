# Project 2 · Step 4D-REOPEN · Related Products runtime retest — partial pass, not closed

Date: 2026-09-11
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user installed the v2.7.43 bounded correction and returned fresh desktop and ~390px mobile screenshots, asking for an independent judgment because the visual change was not obvious to them.

## Runtime comparison result

### Desktop geometry — PASS

Measured against the supplied static-reference screenshot at the same 1920px viewport:

- reference product image columns: 302px each
- current live product image columns after v2.7.43: 302px each
- reference x positions: 289–590, 631–932, 973–1274, 1315–1616
- current live x positions: the same four ranges
- image aspect/height: 302 × 378 in both reference and current live evidence
- 40px inter-column gaps are preserved

Therefore the second correction successfully restored the reference inner 56px desktop gutter and the four-column image geometry.

### Heading case — PASS

The current screenshot now renders:

`Pieces of a similar weight.`

instead of the previously inherited title-capitalized form.

### Mobile structural layout — PASS for the currently visible shell

The mobile screenshot remains a one-column stack with no horizontal overflow or card framing regression. The section heading and `View the full edit →` remain present and the product images/cards remain open editorial items rather than boxed Woo cards.

## Why the user may perceive little change

The previous desktop images were approximately 330px wide. The corrected images are 302px wide, a 28px reduction per item. At a 1920px full-page screenshot this is visually subtle, even though it is measurable and now matches the reference geometry exactly.

## Remaining strict-1:1 blockers

This block is NOT closed yet.

1. The reference metadata row (SKU / Edition) is not visible for the current related products because the underlying real product data is absent for those products.
2. The reference editorial Placement Note row is not visible because `_sf_placement` is absent for those products.
3. These rows must not be fabricated merely to imitate the static reference. Real backend product data must be used where applicable.
4. The reference hover treatment `View piece →` has not yet been runtime-verified in the returned screenshots because no hover-state evidence was supplied.
5. Dynamic product titles/images/prices are intentionally real WooCommerce data and therefore do not need to match the static sample product names/images.

## Classification

```text
Related Products desktop geometry: PASS
Related Products heading treatment: PASS
Related Products mobile shell/layout: PASS
Real SKU/Edition/Placement content state: PENDING / DATA-DEPENDENT
Reference hover state: PENDING
Related Products overall strict 1:1 acceptance: NOT CLOSED
Single Product overall binary status: Not done
```

## Next action

Do not change source again solely for desktop width/heading geometry; those corrections are now validated.

Next:

- populate real SKU / Edition / Placement for the current related products where those business fields legitimately apply;
- capture a desktop screenshot showing the populated rows;
- capture one desktop hover-state screenshot proving `View piece →`;
- retain mobile evidence for regression confirmation;
- only then decide whether Related Products can be closed as current strict-reference 1:1 with real-data adaptations.

Gift CTA / Closing Editor's Note remain paused until Related Products is formally closed.
