# Final Production Wishlist — H03 Source Parity Guard Execution Ready

Date: 2026-10-04
Project: Spatial Flow V2 / Project 2

## Current stop point

Resume from the four user-reported desktop visible defects on Wishlist H03.

Current production CSS baseline:
- file: `spatial-flow(20261004-054819).css`
- bytes: 609,303
- logical lines: 21,676
- SHA256: `d809cea66ca7f32407761335c6522dd00487dd5a7e0ad90de9e0deb237cf1dab`
- CSS brace delta: 0

Static authority:
- `preview/spatial-flow-wishlist-harmonized-v1.html`
- authority blob: `b99669bebe65481c2ecba153a49a1fe168ee0629`

The prior serif conclusion for `.intro-side` is withdrawn by:
`STEP_FINAL_PRODUCTION_WISHLIST_STATIC_FINAL_CASCADE_AUDIT_CORRECTION_20261004.md`.

## Execution scope

One coherent CSS-only batch, four exact in-place replacements inside the existing canonical H03 block.

Do not touch:
- PHP
- JS
- YITH / WooCommerce behavior
- product geometry
- Header
- Footer
- dark palette
- mobile-specific rules

No bottom-of-file patch is to be appended.

## Part 1 — intro-side reset parity

Reason:
Static authority globally zeroes element margins. Production H03 already declares `margin:0`, but WordPress/Astra runtime paragraph rules can win by specificity. Harden only the existing zero margin.

Change:
`margin: 0;`
to:
`margin: 0 !important;`

Exact distinctive sequence was verified once in the current baseline.

Expected delta:
- +11 bytes
- +0 lines

## Part 2 — toolbar link chrome reset

Reason:
Static authority has global `a { text-decoration:none; }` plus exactly one intended `border-bottom`.
Production runtime shows a second line.

Existing H03 toolbar action block must be replaced in place so the link keeps one intentional bottom border while runtime text-decoration/background/shadow/padding chrome is neutralized.

Expected delta:
- +242 bytes
- +7 lines

## Part 3 — Collection Index button chrome reset

Reason:
Static authority globally resets button border/background/appearance and zeroes margin/padding.
Production runtime shows framed/chip-like button chrome.

Existing H03 Index button block must be replaced in place.
Retain the authority `::after` hover/focus underline and responsive rules.

Expected delta:
- +221 bytes
- +6 lines

## Part 4 — item actions native-control reset

Reason:
H03 runtime uses an anchor for View and native buttons for Add/Select and Release.
Static authority depends on global anchor/button resets.
Woo/Astra native button typography/padding/chrome can therefore leak.

Harden the existing H03 action classes to the authority values:
- Inter
- 12px
- line-height 1.5
- weight 400
- letter-spacing .16em
- min-height 44px
- exact paddings
- radius 0
- shadow none
- no text-decoration
- one intentional View bottom border

Do not reduce font size below 12px.

Expected delta:
- +500 bytes
- +11 lines

## Expected post-edit identity

Assuming the current LF line endings are preserved:
- bytes: 610,277
- logical lines: 21,700
- byte delta: +974
- line delta: +24
- brace delta: 0

The post-edit SHA256 must be measured from the returned file; do not invent it in advance.

If the editor changes line endings or the actual bytes/lines materially differ from the above, STOP before browser testing.

## Acceptance sequence

After the user applies all four replacements as one batch:
1. return the edited CSS;
2. source gate: bytes / lines / SHA256 / brace balance / parser;
3. only after source PASS, hard-refresh Wishlist;
4. compare at the same desktop viewport / 100% zoom against the static authority;
5. review the four defects together in one screenshot batch.

Mobile remains pending until Desktop strict 1:1 closes.

Status: EXECUTION READY / NOT YET APPLIED.
