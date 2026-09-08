# Step 4D Reopen B4.2 — Mobile editorial disclosure preview accepted / implementation start — 2026-09-08

## User decision
The interactive mobile prototype for Section 02 progressive disclosure was explicitly accepted.

Accepted interaction/visual pattern:
- Long mobile narrative initially shows a bounded editorial preview.
- Bottom of the preview fades naturally into the Section 02 background.
- A centered `↓ CONTINUE READING` action sits inside the fade area, not as a separate full-width accordion row.
- The fade area/action expands the narrative to full natural height.
- Expanded state shows a restrained `COLLAPSE ↑` action after the full narrative and before the Section 02 metadata row.
- `READING / PAIRING / READS` remains outside the collapsed content and always follows the narrative/disclosure controls.
- Short narratives do not receive disclosure controls.
- Desktop behavior remains the accepted fixed-height internal narrative scroll treatment.
- Mobile disclosure must not modify WooCommerce product/variation/cart logic or Section 02 backend authoring fields.

## Current source baseline before implementation
Latest user-returned baseline is version `2.7.35`.
Relevant files:
- `functions.php`
- `assets/js/spatial-flow.js`
- `assets/css/spatial-flow.css`

The previous rejected visual treatment (`READ FULL NOTE +` as a separate compact underline action) is superseded by this accepted fade-overlay pattern.

## Next implementation gate
Implement only the accepted mobile disclosure presentation:
1. increment child version to 2.7.36;
2. replace the current Section 02 mobile disclosure JS with body-shell + fade overlay + collapse control behavior;
3. replace only the mobile disclosure CSS rules with the accepted prototype-equivalent treatment;
4. do not modify `single-product.php`;
5. audit returned source before frontend testing.
