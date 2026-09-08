# Step 4F · Single Product B4.2 Mobile Disclosure Visual Correction · 2026-09-08

## User acceptance test finding
The initial mobile progressive-disclosure implementation functionally worked, but two defects were identified on the 390px Single Product Section 02 state:

1. In collapsed state the article could begin from a retained internal scroll offset, making the first visible lines look clipped/obscured instead of starting from the beginning of the reading body.
2. The full-width `READ FULL NOTE +` row was visually too large/empty and did not fit the editorial composition.

## Root cause / correction direction
- The Section 02 body is a desktop internal scroll container (`max-height: 360px; overflow-y: auto`). The mobile collapse logic changes overflow/max-height but did not explicitly reset the element's internal `scrollTop`. If the element retained a prior internal scroll position, the collapsed mobile preview could start from the middle of the story.
- The mobile toggle was styled as a 100%-width rule/button row. Functionally correct, visually too heavy for this composition.

## Planned correction
- When entering collapsed mobile state, force the reading body back to `scrollTop = 0` before/while applying the collapsed class.
- Keep the existing bottom fade cue.
- Restyle the toggle as a compact editorial text action, with the `+ / −` close to the label rather than at the far edge of a full-width row.
- Preserve desktop 360px internal scrolling, Section 02 backend content ownership, Reading/Pairing/Reads meta, and current mobile expand/collapse behavior.

## Scope
Expected files only:
- `functions.php` version bump for cache busting
- `assets/js/spatial-flow.js`
- `assets/css/spatial-flow.css`

`single-product.php` remains untouched.
