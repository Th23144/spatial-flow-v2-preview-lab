# Header A1 Search — closed action alignment CSS source audit — 2026-09-14

## Scope
Audit the user-returned `spatial-flow.css` after the narrow correction intended to restore the closed-state `SEARCH / SAVED / BAG` group to its original right alignment.

## Intended correction
Within the main-site desktop A1 Search rules:

- closed `.sf-v2-header--main .sf-header-search-panel` must be removed from flex layout with `position: absolute;`
- open `.sf-v2-header--main .sf-header-search-panel.is-open` must restore normal layout participation with `position: static;`
- no PHP / JS / Search routing / A1 interaction ownership changes

## Returned source audit
Confirmed in returned CSS:

- closed Search panel uses `position: absolute;`
- open Search panel uses `position: static;`
- A1 `is-search-open` owner rules remain intact
- the open search rail remains 470px max width
- Search input / submit / explicit close styling remains intact
- Journal Search branch remains separate

File integrity checks:

- bytes: `626793`
- physical lines: `22389`
- SHA256: `89ea077e67101c9cdf119ca9fafba93dbc2839e8c2bf143d57e1bcf1856c6e8a`
- braces: `3490 / 3490`
- comments: `278 / 278`
- tinycss2 parse errors: `0`

## Formatting note
There is one non-functional formatting inconsistency in the returned Search block: the `.sf-v2-header--main .sf-header-search-panel.is-open {` selector is not indented to match the surrounding declarations inside the `@media (min-width: 768px)` block. CSS behavior is unaffected and parsing passes. Future code instructions must preserve and provide complete indentation.

## Status
`SOURCE VALIDATED` for the closed-state alignment correction.

Runtime visual recheck remains the next gate. Header overall remains `Not done`; this is not a final Header closure.
