# STEP_FOOTER_V2_RETURNED_SOURCE_GATE_HOLD_20260915

Date: 2026-09-15
Project: Spatial Flow V2 / 项目二换皮工程
Subsystem: Main-site Footer V2
Status: SOURCE VALIDATION HOLD — two bounded corrections required before runtime review

## Returned files audited
- `footer.php`
- `assets/css/spatial-flow.css`
- `assets/js/spatial-flow.js`

## Syntax / structural results

### footer.php
- PHP syntax: PASS
- Main / Journal branch structure: PASS
- Main Footer V2 markup present once
- Journal Footer branch preserved
- Existing footer text helper keys preserved
- Existing main/footer/blog menu-location owners preserved

### spatial-flow.css
- CSS parse errors: 0
- `{` / `}` balance: PASS
- `/*` / `*/` balance: PASS
- New Footer V2 START / END markers: exactly 1 each
- Old Step 4B-R2-B Main Footer Dark Editorial START / END markers: removed
- Main Footer V2 production block is scoped to `.sf-v2-footer--main`; no Journal-specific selector added inside the new block

### spatial-flow.js
- JS syntax (`node --check`): PASS
- `setupFooter()` exists once
- Main-site single-open accordion scope is present

## Source-gate blockers found

### 1. Legacy global `.sf-footer` padding still applies to the new main Footer
Earlier shared CSS still contains desktop/mobile padding on `.sf-footer` (`56px 0` / `32px 0`). The new `.sf-v2-footer--main` root does not reset this, so runtime would inherit extra blank vertical space around the new section architecture.

Required correction:
- add `padding: 0 !important;` to `.sf-v2-footer--main`.

### 2. Older Main Footer column centering cap can still constrain the new near-full-width composition
A pre-existing Footer alignment rule outside the replaced legacy block still gives `.sf-v2-footer-grid--main` `max-width: 1060px !important` and auto margins. The new production block changes columns/gaps but does not reset the old max-width/margins, so the right navigation group can remain artificially capped on large desktop widths.

Required correction:
- in the new scoped `.sf-v2-footer--main .sf-v2-footer-grid--main` rule, explicitly reset `width: 100% !important; max-width: none !important; margin: 0 !important;`.

### 3. Footer resize sync should not re-collapse open mobile accordions on every resize event
The returned JS calls `syncFooterMode()` on every `resize`. On mobile browsers, viewport resize events can occur without actually crossing the 767px breakpoint, which can close an accordion the user just opened.

Required correction:
- track the current breakpoint mode;
- only reset all groups when the layout actually crosses between mobile and desktop, not on every resize event.

## Decision
Do not begin runtime / visual acceptance yet.

Apply one bounded correction batch to CSS + JS only. `footer.php` is source-approved and should not be touched in this correction.
