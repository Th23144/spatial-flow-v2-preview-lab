# Final Production Wishlist — H03 Desktop 1:1 Audit from Existing Screenshot

Date: 2026-10-03
Project: Spatial Flow V2 / Project 2

## Evidence handling correction

The user had already supplied the H03 desktop Local screenshot. This screenshot is the active runtime evidence; no resend is required.

## Runtime verdict

H03 is structurally much closer to the accepted authority than the rejected visible-YITH-table approach, but it is not yet strict 1:1.

## Exact remaining authority drift

The accepted Wishlist authority contains a later Edition III override layer that was not fully ported into H03.

### Palette mismatch
Authority final tokens:
- paper: #F1EADD
- paper-2: #E7DED1
- ink: #201C18
- mute: #686158
- rule: #D1C6B6
- clay: #985037
- clay-deep: #743A27

Current H03 tokens:
- paper: #F6F1EB
- paper-2: #EDE7DF
- ink: #1F1916
- mute: rgba(31,25,22,.62)
- rule: rgba(31,25,22,.13)
- clay: #A8745C
- clay-deep: #8B5D49

This visibly changes the page tone and separator strength.

### Intro mismatch
Authority final:
- top padding 32px;
- bottom padding 28px;
- title weight 300;
- intro-side uses serif italic;
- intro-side max-width 280px;
- intro-side font-size 16px.

Current H03:
- top padding 46px;
- bottom padding 28px;
- title weight 400;
- intro-side uses Inter italic;
- intro-side max-width 34em;
- intro-side font-size 16px.

### Toolbar mismatch
Authority uses the rule token for top/bottom separators; H03 uses the ink token, producing visibly darker horizontal rules.

### What is already aligned
- 1480 body width architecture;
- Collection Index structure;
- first-item 1.08/.92 editorial spread;
- first-item gap clamp(48px,7vw,110px);
- first-item image height min(68vh,730px), cover, center 56%;
- subsequent alternating spreads;
- subsequent 4:5 media treatment;
- real product metadata / price / stock / actions.

## Next correction

Perform a bounded H03 authority-token/intro/toolbar correction. Do not redesign the adapter and do not touch YITH/Woo logic.

Status: H03 STRUCTURE PASS / STRICT 1:1 VISUAL TUNING ACTIVE.