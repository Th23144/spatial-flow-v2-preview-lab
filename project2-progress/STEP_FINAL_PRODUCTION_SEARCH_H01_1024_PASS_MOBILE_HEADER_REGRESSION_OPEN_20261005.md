# Final Production Search — H01 1024 PASS / Mobile Header Regression Open

Date: 2026-10-05
Project: Spatial Flow V2 / Project 2

## Evidence reviewed

User supplied:
- 1024-class full-page Search screenshot
- mobile full-page Search screenshot in the required 390-class review range

## 1024 regression

The previously accepted mixed 1024 breakpoint remains stable after H01 production mapping:
- hero hierarchy remains coherent;
- serif title and side note remain correct;
- search bar remains intact;
- result summary/tabs remain usable;
- object result remains two-column;
- no horizontal overflow or card/frame regression;
- footer remains stable.

1024 regression = PASS.

## Mobile review

The Search body itself is broadly healthy:
- hero stacks correctly;
- side note moves left as intended;
- search bar remains usable;
- suggested directions remain visible;
- result summary/tabs remain readable;
- object result becomes a clean one-column spread;
- footer collapses correctly;
- no obvious horizontal overflow.

However, one blocking regression is visible:

### Main mobile header is missing

The mobile screenshot shows the promotional/info strip, then jumps directly into the Search hero.

Expected site behavior and accepted Search authority both contain a mobile main header/navigation row between those surfaces.

The accepted static Search authority switches at <=960px to:
- hidden desktop primary nav;
- visible utility/mobile menu control;
- persistent site mark / utility row;
- optional expandable mobile nav.

Therefore Search mobile cannot be accepted while the main header is absent.

This is a structural/header regression, not a Search-body spacing preference.

## Scope guard

Do not change the accepted Search body or footer while diagnosing this issue.

First determine whether:
1. the current production header is genuinely absent in the live mobile DOM on Search only; or
2. the screenshot/capture path omitted a sticky/fixed header that is actually visible during normal browsing.

If the header is genuinely absent, identify the native Astra/header owner before any edit. Do not recreate a Search-specific fake header.

Status: 1024 PASS / MOBILE BODY BROADLY PASS / MOBILE HEADER REGRESSION BLOCKS FINAL ACCEPTANCE.
