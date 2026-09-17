# STEP_SHOP_V2_COLOR_SYSTEM_AUDIT_20260917

Date: 2026-09-17
Project: Spatial Flow V2 / 项目二换皮工程
Surface: Main-site Shop archive
Status: COLOR SYSTEM MISMATCH CONFIRMED

## User correction

The user correctly identified that the current Shop does not merely have small typography / spacing deltas; the overall color impression is materially different from the approved static reference.

## Reference palette

The approved static Shop reference defines:

```text
paper / beige      #f6f1eb
beige deep         #ede7df
line               #d9d1c4
ink                #1f1916
ink soft           #4a423d
ink mute           #8a807a
terracotta         #a8745c
bluestone          #4a5d5a
```

The current controlled Shop CSS already defines the same Shop palette tokens, but the runtime page does not consistently apply them to the actual page surfaces.

## Primary runtime color mismatch

The current runtime Shop is visually dominated by pure white / cool near-white surfaces. The approved reference is dominated by warm beige `#f6f1eb`.

This is the main reason the current page still reads as a generic WooCommerce / theme page even though many local typography and geometry rules already match the reference.

Likely ownership issue: the controlled Shop rebase defines palette variables but does not establish a sufficiently strong Shop-scoped background owner for the live page / theme content wrappers, allowing Astra / existing global surfaces to remain white.

## Confirmed issue classes

1. Page canvas / main content background is too white; reference is warm beige.
2. Product placeholder / empty-image areas are too cool and pale in runtime; reference supporting surface is warm beige-deep.
3. Warm palette hierarchy is not visually continuous across Hero, toolbar, Editor's Pick, product grid, pagination and closing note.
4. Terracotta and bluestone accents exist in CSS but are visually too weak / sparse in the runtime composition.
5. Divider lines and muted text therefore read cooler and lower-contrast against white than intended against the reference beige.
6. Contact band and footer transition currently create an abrupt visual shift because the Shop body stays white for most of the page.
7. The current approved wider Shop width remains protected; color correction must not shrink the page.
8. Header and Footer remain CLOSED; Shop color correction must not reopen their internal designs. Only the visual transition from Shop body into the closed Footer may be evaluated.

## Execution order

Before more micro-typography work:

1. establish Shop-only warm canvas ownership;
2. verify all Shop archive surface backgrounds;
3. verify placeholder / product image supporting background;
4. verify line / muted-text contrast on the warm canvas;
5. verify terracotta / bluestone accent visibility;
6. verify contact-band transition;
7. then resume detailed typography / spacing / card calibration.

No production code change is authorized by this audit record alone.
