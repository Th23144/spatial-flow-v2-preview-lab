# STEP_SHOP_V2_BATCH_A_RUNTIME_HERO_FONT_CASCADE_ROOT_CAUSE_20260917

Date: 2026-09-17
Project: Spatial Flow V2 / 项目二换皮工程
Surface: Main-site Shop Hero runtime typography

## Status

ROOT CAUSE CONFIRMED

User runtime screenshot shows that the Hero right-side typography still does not match the static reference, despite the intended Cormorant/Inter declarations existing in the controlled Shop CSS.

## Static reference typography contract

Source: `preview/spatial-flow-shop-v1.html`

- Shop body baseline: Inter, weight 300, line-height 1.6, antialiased.
- Hero lede: Cormorant Garamond, 22px, weight 300, line-height 1.55, ink-soft.
- Hero ordinary paragraph: inherited Inter, 14px, weight 300, line-height 1.75, ink-soft.
- Hero signoff: Cormorant Garamond italic, 16px, terracotta.

## Current controlled CSS conflict

The current runtime CSS contains a broad rule:

```css
.sf-shop-v2-hero__body p {
  font-family: "Inter", ... !important;
  font-style: normal;
  font-weight: 300 !important;
  ...
}
```

It also contains intended special rules:

```css
.sf-shop-v2-lede {
  font-family: "Cormorant Garamond", ... !important;
  ...
}

.sf-shop-v2-signoff {
  font-family: "Cormorant Garamond", ... !important;
  font-style: italic;
  ...
}
```

All relevant declarations use `!important`.

Because `.sf-shop-v2-hero__body p` has higher specificity than `.sf-shop-v2-lede` and `.sf-shop-v2-signoff`, the broad paragraph rule wins for properties such as `font-family`, `font-style`, and any conflicting important declaration.

Runtime consequence:

- lede is rendered in Inter instead of Cormorant Garamond;
- signoff is also pulled toward the general Inter/normal paragraph treatment instead of the reference Cormorant italic treatment;
- the browser is not failing to load Cormorant Garamond—the H1 and other serif elements prove the font is available;
- this is a cascade/specificity ownership bug, not a font-download problem.

## Required remediation

Do not add another later override layer.

Correct the broad Hero paragraph selector so it applies only to the ordinary body paragraph:

```css
.sf-shop-v2-hero__body p:not(.sf-shop-v2-lede):not(.sf-shop-v2-signoff)
```

Then keep the dedicated lede/signoff rules as their explicit owners.

This restores the static reference hierarchy without changing page width or Hero structure.

## Additional visual note from runtime screenshot

The current Hero title appears as `Objects For The Quiet Room.` while the reference copy is `Objects for the Quiet Room.`. This is a separate content/case detail and should be verified after the font cascade fix; it is not part of the typography cascade root cause above.

## Boundary

- Preserve the user-approved wider Shop width.
- Do not reopen Header/Footer.
- Do not touch WooCommerce filtering/sorting behavior.
