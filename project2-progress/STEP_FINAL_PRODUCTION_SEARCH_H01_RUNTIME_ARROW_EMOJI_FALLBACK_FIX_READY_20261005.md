# Final Production Search — H01 Runtime Arrow Emoji Fallback Fix Ready

Date: 2026-10-05
Project: Spatial Flow V2 / Project 2

## Runtime finding

Search H01 functionality passed the user's initial runtime check.

Fresh screenshots show a visual defect on every action that uses the literal Unicode north-east arrow `↗`:
- Search button
- Change the search
- View object
- Open page
- Read article / Explore topic when present

On this Windows/browser/font stack, the glyph is falling back to color emoji presentation, producing a blue square external-link icon.

This is not the accepted visual language and is not a functional defect.

## Root cause

The H01 template outputs literal U+2197 characters. The active text font stack does not reliably own that glyph, so the browser/system font fallback selects an emoji presentation.

## Fix direction

Use a dedicated text-presentation arrow span and force a text glyph font.

Do not replace the arrow with a different icon set and do not use an image/SVG dependency.

### Template
Replace every visible H01 action-arrow literal with:

`<span class="sf-global-search-arrow" aria-hidden="true">&#8599;&#65038;</span>`

This explicitly requests:
- U+2197 NORTH EAST ARROW
- U+FE0E text presentation

### CSS
Add a canonical Search-owned rule inside the existing H01 Search block:

```css
.sf-global-search-arrow {
  display: inline-block;
  margin-left: .22em;
  font-family: Georgia,"Times New Roman",serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  color: currentColor;
  vertical-align: .04em;
}
```

### Asset version
Bump child version:
- 2.7.56 -> 2.7.57

This is a bounded runtime parity correction only.

Status: FUNCTION PASS / ARROW EMOJI FALLBACK CONFIRMED / SMALL THREE-FILE MANUAL FIX READY.
