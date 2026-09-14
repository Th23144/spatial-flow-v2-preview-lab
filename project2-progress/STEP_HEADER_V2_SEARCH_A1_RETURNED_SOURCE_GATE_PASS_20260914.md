# STEP HEADER V2 — Search A1 Returned Source Gate PASS — 2026-09-14

Status: SOURCE VALIDATED
Header overall status: Not done
Runtime/user visual acceptance: Pending

## Returned production files

### header.php
- 20,627 bytes
- 372 physical lines
- SHA256: `74198be9a557e56c1e68c88cdc43798ff872821c795e6785ca066b1a56dc4ffa`
- `php -l`: PASS
- Main-site A1 markup present: `.sf-header-search-panel__field`
- Explicit close control present: `[data-sf-search-close]`
- Journal branch retains its separate legacy input/submit structure.

### assets/css/spatial-flow.css
- 626,773 bytes
- 22,389 physical lines
- SHA256: `9940744be18d707e33ab964f296f454b144ab3503fdb41f16e6d514e408036d1`
- `{` / `}` = `3490 / 3490`
- `/*` / `*/` = `278 / 278`
- tinycss2 top-level parse errors = `0`
- Main-site A1 owner state `.sf-v2-header--main .sf-v2-header-actions.is-search-open` present.
- Main-site inline Search panel state present.
- Journal Search retains independent scoped rules under `.sf-v2-header--journal`.
- 470px A1 inline rail rule present.

### assets/js/spatial-flow.js
- 91,698 bytes
- 2,776 physical lines
- SHA256: `b4c353ea64921625e9f6186fb5d6f09c6098604569bd57173e294337d57d9d8b`
- `node --check`: PASS
- `setupHeaderSearch()` exists once.
- `is-search-open` owner state add/remove logic present.
- `[data-sf-search-close]` handling present.
- Empty-search validation state remains present.

## Identity check
All three returned SHA256 values exactly match the precomputed A1 production candidate identities issued before manual application.

## Gate result
A1 implementation is accepted at SOURCE VALIDATED level.
This is not final Header acceptance or closure. The next gate is runtime/visual review of the A1 opened Search state on the main site, including open, close, submit, outside-click and Escape behavior.
