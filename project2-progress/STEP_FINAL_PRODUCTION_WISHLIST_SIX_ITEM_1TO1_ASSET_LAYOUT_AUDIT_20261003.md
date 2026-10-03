# Final Production Wishlist — Six-Item 1:1 Runtime Audit / Asset-vs-Layout Diagnosis

Date: 2026-10-03
Project: Spatial Flow V2 / Project 2

## User evidence

The user matched the live Wishlist item count to the static authority (6 items) and supplied a full-page Local desktop screenshot for direct comparison.

## Main conclusion

The large perceived aesthetic gap is now primarily caused by real product assets/content, NOT by the six-item editorial spread geometry.

The H03 production adapter matches the static authority for the core item system:
- 1480 content architecture;
- first item 1.08 / .92 columns;
- first-item gap clamp(48px,7vw,110px);
- first-item padding 20px 0 64px;
- first image height min(68vh,730px), cover, center 56%;
- later items 1.1 / .9 alternating spreads;
- later item gap 56px 72px;
- later item padding 72px 0;
- later media width min(100%,540px), 4:5, cover, center 55%;
- metadata / name / blurb / price-stock / actions structure.

## Why the live page feels much worse

The authority uses six visually coordinated editorial objects across varied categories:
1. Vessel No. 04 — Ceramics / Tabletop
2. Heavy Linen Throw — Textiles / Living
3. Travertine Catch Tray — Stone / Objects
4. Blackened Ash Stool — Furniture / Seating
5. Moss & Vetiver Candle — Scent / Home
6. Threadbound Journal — Paper / Desk

The live page currently uses six bracelet products, mostly conventional ecommerce/product photography with materially different backgrounds, crop behavior, object scale and visual density. Repetition of one category plus uneven source photography materially changes the rhythm even when the layout geometry is the same.

## Important cascade correction

The previous H03 Final-Tuning audit read intermediate Edition III values instead of the final computed Harmonized authority cascade.

The actual desktop static authority FINAL values are:
- intro top padding: 46px (HARMONIZED overrides Edition III 32px);
- intro h1 weight: 400 (HARMONIZED overrides base/Edition III 300);
- intro-side font-family: sans / Inter (HARMONIZED override);
- intro-side max-width: 34em (HARMONIZED override of 280px);
- toolbar border-color: ink (HARMONIZED override of rule).

The current production H03 after Final-Tuning is therefore wrong on those five points because it was moved back toward intermediate Edition III values.

## Deferred palette difference

Static final palette remains darker/deeper:
- paper #F1EADD vs production #F6F1EB;
- paper-2 #E7DED1 vs production #EDE7DF;
- ink #201C18 vs production #1F1916;
- mute #686158 vs production rgba(31,25,22,.62);
- rule #D1C6B6 vs production rgba(31,25,22,.13);
- clay #985037 vs production #A8745C;
- clay-deep #743A27 vs production #8B5D49.

The user already deferred broad palette harmonization until the wider mapping work is complete, so do not force that change now.

## Minor runtime issue

In the supplied screenshot the first-item Release control appears with a dark filled hover treatment while later Release controls are quiet text. This is a runtime/global-hover leakage and should be normalized before final closure.

## Correct next action

Do a small CSS correction that restores the five FINAL Harmonized desktop values and hardens ghost-button hover background to transparent.

Do not change product/item geometry.
Do not change PHP/JS/YITH/Woo.
Do not change the deferred palette tokens.

Status:
H03 ITEM GEOMETRY = PASS / CLOSE TO AUTHORITY.
MAJOR PERCEIVED GAP = ASSET/CONTENT DRIVEN.
FINAL HARMONIZED CASCADE = NEEDS ONE CORRECTION.
PALETTE = DEFERRED.