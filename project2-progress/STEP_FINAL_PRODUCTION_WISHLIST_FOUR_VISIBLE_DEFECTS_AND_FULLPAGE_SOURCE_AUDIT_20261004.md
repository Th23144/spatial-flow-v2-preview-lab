# Final Production Wishlist — Four Visible Defects + Full-Page Source Audit

Date: 2026-10-04
Project: Spatial Flow V2 / Project 2

## User-reported defects
1. Intro/right-side note to toolbar spacing looks too tall.
2. Toolbar text links show two horizontal lines; static authority shows one.
3. Collection Index buttons show a visible framed/chip-like treatment absent from static authority.
4. Item action row differs: View the object has a double line; Add to Cart and Release typography/button scale are larger than static authority.

## Source-level findings

### 1. Intro gap
The production H03 intro geometry is already 46px top / 28px bottom, matching the static authority final desktop cascade.
However, the production intro-side font-family is wrong: production uses Inter italic, while the static authority final cascade keeps the base Cormorant Garamond serif italic and only later changes max-width to 34em and font-size to 16px.
This changes text metrics/baseline and contributes to the visible right-side gap.

Correct final intro-side desktop authority:
- max-width: 34em;
- Cormorant Garamond / Georgia serif;
- 16px;
- line-height 1.45;
- italic, weight 300;
- padding-bottom 6px.

### 2. Toolbar double line
Static authority has a global `a { text-decoration:none; }` reset plus one explicit `border-bottom` on toolbar action links.
Production H03 has the class-level text-decoration reset, but runtime theme/Astra link decoration still leaks through at higher cascade/specificity, producing a second underline.
Correction must harden the toolbar links with Wishlist-scoped `text-decoration:none !important` and no extra shadow/background.

### 3. Index frame/chip feel
Static authority globally resets buttons: background none, border 0, appearance none.
Production H03 index rules declare several of those properties but do not fully harden margin / border-radius / box-shadow / background against theme button styles.
The screenshot shows runtime button chrome leakage.
Correction must explicitly neutralize margin, border, radius, shadow and background with Wishlist-scoped priority.

### 4. Item action row
H03 runtime DOM uses:
- `View the object` = anchor;
- main add/select action = native button;
- `Release` = native button.
Static authority depends on its global anchor/button reset. Production native button styles can therefore leak from WordPress/Astra into Add/Release, while anchor decoration leaks into View.
Correction must harden the action-row authority values: Inter family, 12px, weight 400, line-height 1.5, min-height 44px, exact paddings, radius 0, shadow none, and text-decoration none for the anchor.

## Full-page audit
After temporary image/title alignment, the main item geometry and image placements are very close to the static authority.
Remaining visual differences fall into four buckets:
- the above runtime control/reset leaks;
- production intro-side serif mismatch;
- intentionally deferred palette difference;
- real Woo content still differs from the static demo in category labels, descriptions, prices, stock state and button state.

Header/Footer remain protected global shell owners and should not be reopened merely to match the standalone static file.

## Next
Prepare one bounded CSS-only H03 Source Parity Guard correction for the four visible defects.
Do not change PHP/JS/YITH/Woo/item geometry/header/footer/palette.

Status: FOUR DEFECTS CONFIRMED / SOURCE CAUSES IDENTIFIED.