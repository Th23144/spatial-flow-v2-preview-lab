# STEP_SHOP_V2_EXPLICIT_SCREENSHOT_MISMATCHES_HERO_TOOLBAR_EDITOR_PICK_20260917

Date: 2026-09-17
Project: Spatial Flow V2 / 项目二换皮工程
Surface: Main-site Shop archive
Status: VISUAL AUDIT CORRECTION / NO CODE CHANGE

## User correction

The user provided paired screenshots of the current Shop and static reference and highlighted obvious mismatches that the prior audit underweighted.

This record supersedes any earlier wording implying these blocks were already near-accepted visually.

## Confirmed visible mismatches

### 1. Global page canvas color

Current runtime is visually white across the Shop body, while the static reference uses the warm beige canvas `#f6f1eb` throughout. This affects perceived typography, borders, editor-pick composition and the toolbar.

### 2. Hero right body copy

Current runtime body copy is visibly too heavy/bold and reads like default theme/body typography.

Reference body copy is light Inter-like sans, approximately 14px / 1.75, weight 300.

Current CSS sets size/line-height/color on generic hero body paragraphs but does not explicitly set the sans family or `font-weight: 300`, allowing inherited Astra/theme weight to leak into the result.

This is a concrete CSS ownership bug, not a content issue.

### 3. Hero signoff

Current signoff does not visually match the reference's lighter terracotta editorial signature treatment. Need explicit ownership of family, weight, color, margin and line-height against the runtime cascade.

### 4. Toolbar

Current toolbar is on the wrong white canvas and therefore reads as a generic WooCommerce control strip.

Reference toolbar is integrated into the warm page canvas with subtle warm-beige divider lines, light sans microtype, and balanced filter/sort optical weight.

Need to verify final runtime owner for filter typography, sort typography, select styling, active underline, top/bottom divider relationship and background.

### 5. Editor's Pick subtitle

Current subtitle is visually weaker/different from the reference editorial subtitle line. Although the selector uses the right serif/italic direction, final runtime spacing/color/weight must be checked against the actual cascade.

### 6. Editor's Pick body copy

Current body copy is visibly too bold/heavy. Reference uses a light sans paragraph treatment.

Current CSS sets max-width, margin, color, size and line-height on the generic Editor's Pick body paragraph but does not explicitly set `font-family: Inter/...` or `font-weight: 300`. This allows inherited theme weight/family to leak in, producing the visibly bold result.

This is a concrete CSS ownership bug.

### 7. Editor's Pick visual hierarchy

The title/subtitle/body/place-note/footer spacing must be recalibrated as one editorial stack. Do not treat each selector independently without checking the rendered hierarchy.

### 8. Width exception

Do not change the user-approved wider Shop canvas. Differences caused solely by the wider production canvas remain approved deviations.

### 9. Header/Footer boundary

The screenshots contain a different static-reference header, but the production Header V2 and Footer V2 are already CLOSED. Do not reopen them during Shop work unless a real regression is identified.

## Root-cause direction

The key failure mode is no longer assumed to be missing structure. It is runtime CSS ownership/cascade leakage:

- generic Shop selectors set partial typography only;
- Astra/global child-theme rules can supply the missing family/weight/background;
- the CSS file contains multiple historical layers;
- therefore source values that look correct in isolation do not prove the runtime rendering is correct.

## Next audit rule

Before any further code patch, build a screenshot-driven delta list for each visible Shop block and identify the final runtime owner for:

- background;
- font family;
- font weight;
- font size;
- line-height;
- color;
- margins/padding;
- borders;
- responsive overrides.

Only then create one coherent remediation batch.
