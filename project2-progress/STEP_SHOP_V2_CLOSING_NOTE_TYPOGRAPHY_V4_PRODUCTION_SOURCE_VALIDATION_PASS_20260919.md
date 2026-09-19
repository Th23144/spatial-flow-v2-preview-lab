# Shop V2 — Closing Note Typography V4 production source validation PASS

Date: 2026-09-19
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User-returned files

Validated:
- `archive-product(10).php`
- `spatial-flow(20260919-205802).css`

## PHP validation

File facts:
- bytes: 18,979
- lines: 453
- SHA256: `15121b9e7382fb404fb45a45a942861a305a8635548441eab6b5a52b3d40faaa`
- terminal newline: present
- `php -l`: PASS, no syntax errors

Closing Note ownership:
- `closing_kicker`: exactly 1 occurrence
- `closing_intro`: exactly 1 occurrence
- `closing_emphasis`: exactly 1 occurrence
- `closing_body`: exactly 1 occurrence
- `closing_side_text`: exactly 1 occurrence
- `closing_button_text`: exactly 1 occurrence
- `sf_shop_v2_closing_button_url`: exactly 1 occurrence
- `sf_product_contact_url` fallback remains present
- `get_footer( 'shop' )`: exactly 1 occurrence
- Shop call to `template-parts/product-contact-band`: absent

The accepted V4 kicker is rendered through the existing backend-owned `closing_kicker` value with `Before you choose` fallback.

## CSS validation

File facts:
- bytes: 648,029
- lines: 23,023
- SHA256: `21819051bc27ad68c7f64e25e4c38e86ebd70c9fa9d476f64ccf6ecedcd9403b`
- terminal newline: present

Structural checks:
- opening / closing braces: 3,559 / 3,559
- comment openings / closings: 276 / 276
- tinycss2 top-level parse errors: 0
- tinycss2 nested at-rule parse errors: 0

Relative to the validated pre-V4 CSS baseline:
- bytes: +2,465 exactly
- lines: +84
- implementation-ready note estimated +85 lines; the returned source proves the real textual delta is +84. This is an accounting correction only, not a source defect.

## V4 owner verification

Canonical Closing Note block contains:
- base 1fr / 1fr grid and 80px gap;
- base kicker hidden;
- desktop `@media (min-width: 1101px)` V4 owner;
- desktop section padding `84px 0 104px`;
- kicker visible with terracotta 10px microtype;
- Intro separated at 20px serif;
- Emphasis separated, Cormorant italic, `clamp(34px, 2.8vw, 44px)`;
- Body separated, Inter 15px / 1.72, max-width 58ch;
- right group `width:min(100%,470px)`, `justify-self:end`, `margin-right:20px`;
- right padding-top 30px and padding-left reset to 0;
- restrained 60px terracotta rule;
- right paragraph max-width reset and line-height 1.82;
- CTA V4 spacing/microtype.

The prior temporary desktop `padding-left: 48px !important` rule is absent globally.

## Cascade / mobile regression source check

All Closing Note selectors terminate inside the controlled Shop rebase; there are no later Closing Note rules after the existing mobile owners.

Existing <=767px owners remain:
- Closing Note `display:block`;
- `padding:48px 0 72px`;
- left paragraph 34px;
- left span inherits;
- right `margin-top:26px`.

Therefore V4 desktop typography is bounded to >=1101px and the previously accepted phone composition is not source-modified.

## Decision

SOURCE VALIDATION: PASS.

No additional CSS/PHP edits are justified before runtime review.

Next:
1. desktop Shop Closing Note visual check against accepted V4;
2. click `Write to the editors` to confirm CTA routing remains correct;
3. one mobile regression screenshot/check only — no redesign.

Status: V4 PRODUCTION SOURCE PASS / READY FOR RUNTIME VISUAL ACCEPTANCE.
