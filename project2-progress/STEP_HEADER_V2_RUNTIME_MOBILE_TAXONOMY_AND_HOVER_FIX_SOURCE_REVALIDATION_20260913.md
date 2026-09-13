# Header V2 Runtime — mobile taxonomy screenshots + desktop hover-bridge fix source revalidation

Date: 2026-09-13

## Evidence received

User returned updated:
- `spatial-flow.css`
- `spatial-flow.js`

User also supplied mobile screenshots for:
- By Purpose
- Five Elements
- Color
- Zodiac

## Mobile visual/runtime evidence

The four deeper Shop taxonomy panels render as intended on mobile:
- full-width progressive drawer
- Back control visible
- centered SPATIAL FLOW brand
- Close control visible
- panel headings and rows remain within viewport
- no visible corner clipping or horizontal overflow in supplied screenshots
- long Zodiac list scrolls inside the drawer correctly

This is visual evidence for the deeper taxonomy panel states. It does not by itself prove every Back click path, but the returned JS still contains the progressive parent-based Back logic.

## Desktop Shop Mega hover regression fix — returned source validation

Returned CSS contains the intended owner/bridge states:
- `.sf-shop-mega-owner.is-sf-mega-open > .sf-shop-dynamic-mega`
- `.sf-shop-mega-owner::after`
- `--sf-shop-mega-bridge-height`
- bridge disabled at `max-width: 1100px`

Returned JS contains the intended revised `setupHeaderMegaPosition()`:
- owner class assignment
- `is-sf-mega-open` state
- 260ms delayed close
- owner and Mega `mouseenter` / `mouseleave`
- focus handling
- dynamic bridge-height calculation
- ResizeObserver on Header and owner

Local static revalidation on the returned files:

### CSS
- bytes: 616,486
- lines: 21,983
- SHA256: `5a64e6d40773c3cb39d0010018b3b9256864d65ef68709e91ae1ce59f33f522a`
- `{` = 3447
- `}` = 3447
- `/*` = 278
- `*/` = 278

### JavaScript
- bytes: 91,082
- lines: 2,739
- SHA256: `45e053d5bcd503b749f98448395e6934425c0993f4a39c7298b89546efb2bdf7`
- `node --check`: PASS
- exactly one `setupHeaderMegaPosition()`
- exactly one `scheduleClose()` inside that owner
- owner and Mega mouseenter handlers present
- owner ResizeObserver present

## Current acceptance state

PASS:
- Header V2 source gate before runtime
- Header V2 updated hover-bridge fix source revalidation
- Search / Saved / Bag runtime (user previously reported normal)
- tablet switch to mobile-style IA from prior supplied evidence
- mobile Root panel visual
- mobile Shop panel visual
- mobile deeper taxonomy panel visuals: Purpose / Five Elements / Color / Zodiac

Still requires explicit runtime confirmation before Header closure:
1. Desktop pointer transfer: `Shop -> Mega` remains open in real mouse movement after this fix.
2. Mobile Back chain works in live interaction, especially taxonomy -> Shop -> Root.
3. Journal/blog branch remains on legacy mobile menu and is not captured by main-site progressive drawer.
4. Quick regression smoke on one sealed Product / Cart / Checkout page confirms Header change did not disturb page body/layout.

Header status remains `Not done` until these runtime checks pass.
