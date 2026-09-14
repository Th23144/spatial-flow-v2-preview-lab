# Header V2 — A1 Search closed-state right-action alignment fix

Date: 2026-09-14
Status: IMPLEMENTATION REQUIRED

## User runtime finding
A1 inline Search is visually acceptable in the open state, but after the A1 implementation the normal closed-state `SEARCH / SAVED / BAG` group shifted slightly left.

## Root cause
The hidden main-site `.sf-header-search-panel` remains a zero-width flex child of `.sf-v2-header-actions` while closed. The parent still has its normal flex `gap`, so the invisible fourth child creates one extra trailing gap after `BAG`, moving the visible three-item group left even though the actions container remains `justify-self: end`.

## Corrective scope
CSS only. Do not touch PHP, JS, Search behavior, menu ownership, Woo/YITH owners, or mobile Header.

Use the closed state as out-of-flow so it contributes no flex-gap width; restore `position: static` only when `.is-search-open` is active.

## Acceptance
- Closed state: SEARCH / SAVED / BAG returns to the exact right alignment used before A1.
- Open state: A1 inline Search remains unchanged visually and functionally.
- No mobile effect (desktop/tablet rule remains inside min-width: 768px).
- Header remains Not done; this is a narrow runtime polish fix only.
