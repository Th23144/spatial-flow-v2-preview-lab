# Shop V2 — Closing Note Mobile Centered V3 production CSS source validation PASS

Date: 2026-09-19
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Returned source

Validated user-returned file:
- `spatial-flow(20260919-214046).css`

Previous validated baseline:
- `spatial-flow(20260919-205802).css`

## Exact file facts

New file:
- bytes: 650,429
- newline count: 23,106
- SHA256: `340a0c5b29262e1a68dafacf4e5a155090b51d8d47fc66416756fbe899e232a4`
- opening / closing braces: 3,565 / 3,565
- comment openings / closings: 276 / 276
- tinycss2 top-level parse errors: 0
- tinycss2 nested at-rule parse errors: 0

Compared with previous validated CSS:
- bytes: +2,400
- newline count: +83

## Exact diff audit

The only source diff between the previous validated CSS and the returned file is the intended phone Closing Note block inside `@media (max-width: 767px)`.

No unrelated CSS changed.

Removed phone rules:
- section padding `48px 0 72px`;
- flat left paragraph `34px`;
- inherited left span size;
- right margin-top `26px`.

Added accepted Centered V3 phone owners:
- section padding `44px 0 56px` + centered alignment;
- kicker visible;
- centered 17px serif Intro;
- centered 30px italic serif Emphasis;
- centered 13px sans Body, max-width 29ch;
- right group centered with margin-top 36px;
- centered 46px terracotta divider;
- Side Text `width:min(100%,330px)`, 11px / 1.72, centered;
- compact centered CTA.

## Conflict / residue audit

- old phone `padding:48px 0 72px !important`: 0 occurrences;
- accepted phone `padding:44px 0 56px !important`: exactly 1 occurrence;
- Side Text 330px owner: exactly 1 occurrence;
- phone right margin-top 36px: exactly 1 occurrence;
- desktop V4 right group 470px owner remains exactly 1 occurrence;
- old temporary desktop `padding-left:48px !important`: 0 occurrences.

Desktop V4 source remains intact.

## Decision

SOURCE VALIDATION: PASS.

The returned CSS is safe to replace into the local child-theme CSS for runtime testing.

Next runtime test:
1. replace the active local `assets/css/spatial-flow.css` with this validated file;
2. hard refresh the Shop page at phone width;
3. inspect Pagination → centered Closing Note → Footer;
4. verify the widened Side Text uses fewer lines and no horizontal overflow;
5. perform one desktop Closing Note spot-check to confirm desktop V4 remains unchanged.

Status:
MOBILE CENTERED V3 PRODUCTION CSS SOURCE PASS / READY FOR RUNTIME TEST.
