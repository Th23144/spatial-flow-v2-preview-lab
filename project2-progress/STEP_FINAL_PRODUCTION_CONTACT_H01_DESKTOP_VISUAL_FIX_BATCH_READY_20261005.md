# Final Production Contact — H01 Desktop Visual Fix Batch Ready

Date: 2026-10-05
Project: Spatial Flow V2 / Project 2

## Trigger

User supplied annotated desktop screenshots and identified:
1. excessive hero-side lower whitespace;
2. duplicate underline / bottom-rule appearance on toolbar links;
3. right support routes too compressed and route links showing the same duplicate-line defect;
4. left form content shifted right.

## Root causes confirmed from current source

### 1. Legacy form padding leakage

The historical global rule at the beginning of the stylesheet still owns:

`.sf-contact-form,.sf-journal-form { padding:24px; ... }`

The H01 Contact override only set:

`padding-top:18px;`

Therefore the historical left/right/bottom 24px padding remains live, shifting the whole form interior to the right.

Correction:
`padding:18px 0 0;`

### 2. Route-row padding loses to the Contact page normalizer

The Contact page normalizer contains:

`body.sf-main-contact-body article { ... padding:0; }`

Each support route is an `<article class="sf-contact-route-row">`.

The existing `.sf-contact-route-row { padding:24px 0; }` has lower specificity, so runtime receives zero route-row padding and the rail becomes vertically compressed.

Correction:
raise only the H01 route-row selector specificity to:
`.sf-main-contact-page .sf-contact-route-row`
and use 28px desktop / 24px mobile vertical padding.

### 3. Link decoration leakage

Toolbar and route links still receive Astra / entry-content anchor decoration in runtime, producing a second line in addition to the H01 border-bottom owner.

Correction:
Contact-scoped strong reset:
- border reset;
- explicit intended border-bottom;
- transparent background;
- no box-shadow;
- `text-decoration:none !important`.

### 4. Hero-side lower whitespace

The current H01 hero uses:
- intro bottom padding 28px;
- side-note bottom padding 6px.

User explicitly judged this lower whitespace too tall.

Correction:
- intro bottom padding 20px;
- side-note bottom padding 0.

## Scope

CSS-only visual correction plus asset-version bump.

Do not touch:
- Contact DOM;
- AJAX;
- sf_contact_message CPT;
- Order Number persistence;
- Customizer fields;
- success/error modal logic;
- Header/Footer.

## Baselines

functions.php:
- 658,030 bytes
- 12,558 logical lines
- SHA256 `a44ed9a324b18d0b6d3cacc5131d9a7bfd743867ef7b1d9edaf8b216763f90f5`
- version 2.7.60

CSS:
- 627,348 bytes
- 22,524 logical lines
- SHA256 `7f961606a49bc3d38134556ad481f74452d8845a0cea7ccda5909c30c8ea1a0b`
- braces 3543 / 3543
- parse errors 0

## Verified target

functions.php:
- 658,030 bytes
- 12,558 logical lines
- SHA256 `21672032e7b591256e921543fc13c225ad99483ea514f6ec9b8f7e0b5cfe86c2`
- version 2.7.61
- PHP syntax PASS

CSS:
- 627,691 bytes
- 22,533 logical lines
- SHA256 `77829fc9ca6e7520e75a2f44e76b65cc0528923bbb32fb69b37361eb35cb351a`
- braces 3543 / 3543
- comments 241 / 241
- top-level CSS parse errors 0

Status: DESKTOP VISUAL FIX BATCH SOURCE-VERIFIED / MANUAL ANCHORED DELIVERY READY.
