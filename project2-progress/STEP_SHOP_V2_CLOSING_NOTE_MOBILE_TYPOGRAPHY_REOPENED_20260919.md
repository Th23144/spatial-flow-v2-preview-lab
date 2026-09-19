# Shop V2 — Closing Note mobile visual reopened after desktop V4 pass

Date: 2026-09-19
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Runtime evidence

After desktop V4 source PASS and desktop runtime visual PASS, the user supplied a fresh mobile Shop screenshot and confirmed:
- `WRITE TO THE EDITORS` routes correctly;
- mobile Closing Note is still visually unacceptable.

User wording:
`可以跳转，不过手机上还是一样的丑。`

## Source diagnosis

This is not a new V4 desktop regression.

The production CSS intentionally scoped the accepted V4 hierarchy to:
`@media (min-width: 1101px)`.

The existing phone owner still restores the pre-V4 flat composition:
- Closing Note: `display:block`;
- section padding: `48px 0 72px`;
- left paragraph: `font-size:34px`;
- left child `span`: `font-size:inherit`;
- right group: `margin-top:26px`;
- kicker remains hidden because the base rule is `display:none` and only desktop >=1101 reveals it.

Because strong / em / span inherit the same base serif paragraph typography on phone, Intro + Emphasis + Body visually collapse back into one large editorial paragraph. The screenshot confirms this is the main aesthetic failure.

## Decision

Desktop V4 remains CLOSED/PASS.

Reopen only:
`Shop → Closing Note → phone typography/composition`.

Do NOT reopen:
- Shop product cards;
- mobile pagination;
- Header;
- Footer;
- filter/sort;
- desktop Closing Note;
- DIY / Custom Studio frozen feature.

## Mobile target

Create a phone-specific adaptation of the accepted desktop V4 language:
- show the existing backend-owned kicker;
- Intro becomes a small serif lead-in;
- Emphasis remains the main italic serif anchor but is sized/width-controlled for phone;
- Body becomes smaller sans-serif copy instead of inheriting the headline size;
- right-side editorial note receives a restrained divider/rule;
- CTA remains compact, backend-owned and functional;
- preserve single-column reading order;
- avoid cards, gradients, new backgrounds, oversized empty space, and full-width generic app-button styling.

## Next action

Build an external standalone HTML mobile study only.
Do not touch production source until user visually accepts the phone composition.

Status:
DESKTOP V4 PASS / CTA PASS / MOBILE CLOSING NOTE REOPENED FOR TYPOGRAPHIC ADAPTATION.
