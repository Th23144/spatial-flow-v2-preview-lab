# Header V2 Search Final Tuning — Source PASS — 2026-09-14

## Scope
Final narrow Search visual tuning only. No PHP, JS, menu ownership, Search route, WooCommerce, YITH, or mobile progressive navigation changes.

## Returned source
User returned latest `spatial-flow.css` after replacing the Search panel rules.

## Validation
- Search panel rules match the intended narrowed editorial attached-panel candidate.
- Width: `min(440px, calc(100vw - 40px))`
- Offset: `top: calc(100% + 8px)`
- Full outer rectangle border removed; top/bottom fine rules retained.
- Shadow removed.
- Input and SEARCH action share the same baseline treatment.
- CSS braces balanced: `{` 3473 / `}` 3473.
- CSS comments balanced: `/*` 278 / `*/` 278.
- tinycss2 parse errors: 0.
- File size: 622,708 bytes.
- Physical lines: 22,231.
- SHA256: `799868c0840e071ea78d9fb555e82a06806c1d8afa1f93d9b871fa614dbee6cb`.

## Status
`SOURCE VALIDATED` for this Search tuning pass.

Header V2 remains `Not done` until user visually reviews the actual Search-open state and explicitly accepts the remaining Header details. Do not mark Header closed or final without explicit user acceptance.
