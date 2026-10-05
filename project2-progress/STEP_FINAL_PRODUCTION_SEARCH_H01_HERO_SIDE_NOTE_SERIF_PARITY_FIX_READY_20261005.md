# Final Production Search — H01 Hero Side Note Serif Parity Fix Ready

Date: 2026-10-05
Project: Spatial Flow V2 / Project 2

## User finding

User compared the current Search runtime against the accepted static authority and pointed out the right-side hero note typography.

This finding is correct.

## Source-level comparison

Accepted static authority:
- note element includes class `serif`
- `.serif` supplies `font-family: var(--serif)`
- Search-specific note rule supplies:
  - 17px
  - 1.45 line-height
  - italic
  - 300 weight
  - letter-spacing 0

Therefore the final static authority note is Cormorant Garamond serif italic.

Current production H01:
- `.sf-global-search-page` establishes Inter as the page font
- `.sf-global-search-hero__note` sets size / line-height / italic / weight but does not override `font-family`
- result: runtime note inherits Inter and is therefore visibly more ordinary / sans-serif than the static authority

This was missed in the previous desktop comparison.

## Correct fix

Do not change the large hero title typography.

Only add the missing serif family to the canonical Search note owner:

```css
.sf-global-search-hero__note {
  max-width: 34em;
  margin: 0;
  padding-bottom: 6px;
  color: var(--sf-gs-mute);
  text-align: right;
  font-family: "Cormorant Garamond",Georgia,serif;
  font-size: 17px;
  line-height: 1.45;
  font-style: italic;
  font-weight: 300;
  letter-spacing: 0;
}
```

Because this changes the cached stylesheet, bump child version:
- 2.7.56 -> 2.7.57

No template change is required for this typography correction.

## Baselines

CSS:
- file: `spatial-flow(20261005-021148).css`
- 611,696 bytes
- 21,793 logical lines
- SHA256 `6bd0ba12f4a5eeb67296408d2cb191281d01d0d7eed0d9d0d5a124df4b59f846`

Expected CSS target:
- 611,747 bytes
- 21,794 logical lines
- SHA256 `9c70feb616fe41c98ef75b91ed3a0ef0f4ae0397c94cdb283136a592f09def26`

functions.php:
- file: `functions(20261005-021747).php`
- 644,206 bytes
- 12,339 logical lines
- SHA256 `ed1ba9d79c9020a8ba6069267bf80a160cb2a1f388c281d841ca4e1f7b2c6db9`
- version 2.7.56

Expected functions target:
- 644,206 bytes
- 12,339 logical lines
- SHA256 `97f889501cc0e83f1642751a4342c7662068f50a29bc2e065481268f22934bb5`
- version 2.7.57

## Status

USER TYPOGRAPHY FINDING CONFIRMED / TWO-FILE BOUNDED FIX READY.
