# Footer V2 Correction Source Gate PASS — 2026-09-15

## Scope

Second Source Gate after the targeted Footer V2 corrections requested in the previous review.

Reviewed user-returned files:

- `spatial-flow.css`
- `spatial-flow.js`

`footer.php` was not changed in this correction round and remains at its previously passed source state.

## Exact returned file identities

### `spatial-flow.css`

- size: 636,491 bytes
- line count (`wc -l` semantics): 22,721
- SHA256: `97a2f72792bbee6f2924a0498dc308e3afb76d21ffa3c7eda13b58f943e6e3fb`

### `spatial-flow.js`

- size: 93,021 bytes
- line count (`wc -l` semantics): 2,829
- SHA256: `04702235c5ffaa2ec644db60ca983faa0b2030e830cfa1c9a3e30777ea5c23bb`

## Diff audit against the immediately previous returned pair

The CSS diff contains only the two requested Footer fixes:

1. `.sf-v2-footer--main` now explicitly sets `padding: 0 !important;`, neutralizing the inherited legacy root Footer padding.
2. `.sf-v2-footer--main .sf-v2-footer-grid--main` now explicitly sets:
   - `width: 100% !important;`
   - `max-width: none !important;`
   - `margin: 0 !important;`

This prevents the older 1060px Footer-grid constraint from limiting the new main-site Footer layout.

The JS diff contains only the requested `setupFooter()` state-management correction:

- introduces `lastIsMobile`
- resets Footer accordion state only when the responsive mode actually changes
- ordinary mobile viewport resize events no longer collapse an already opened Footer group
- desktop/mobile breakpoint behavior remains preserved

## Validation

### JavaScript

- `node --check`: PASS
- no syntax error returned

### CSS

- `{` / `}` count: `3531 / 3531`
- `/*` / `*/` count: `276 / 276`
- `tinycss2` top-level parse errors: `0`
- Footer V2 production block remains bounded by one START marker and one END marker

## Source Gate result

**SOURCE VALIDATED — PASS**

No additional source repair is required before runtime/visual testing.

## Next state

Proceed to one consolidated Footer V2 runtime/visual acceptance round covering desktop and mobile.

This source pass is not yet a runtime pass and is not final user acceptance/closure.
