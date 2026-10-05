# Final Production 404 — H01 Desktop Runtime Audit / Customizer Case Mismatch

Date: 2026-10-05
Project: Spatial Flow V2 / Project 2

## Runtime screenshot reviewed

The first production 404 desktop screenshot shows the new child-theme native 404 template rendering successfully with the existing production Header/Footer.

Visual structure is broadly aligned with the accepted static authority:
- 1480 editorial lane;
- hero composition;
- right-side serif note;
- ruled status toolbar;
- left recovery panel;
- large sage 404 code;
- Search recovery form;
- three-route right rail;
- note panel;
- production footer continuity.

No CSS geometry regression is evident from the screenshot.

## Concrete mismatch

Several display headings are rendered in Title Case while the accepted static authority and current H01 defaults use sentence case.

Runtime screenshot:
- `This Page Has Moved.`
- `Search The Site.`
- `Return To The Shop.`
- `Open The Journal.`
- `Ask For Help.`

Accepted authority / current defaults:
- `This page has moved.`
- `Search the site.`
- `Return to the shop.`
- `Open the journal.`
- `Ask for help.`

Current functions source confirms the H01 defaults are already sentence case.

No CSS `text-transform` owns these display headings.

Diagnosis:
existing saved `sf_404_*` Customizer theme-mod values are overriding the new defaults.

## Correct action

Do not change CSS or template.

Update/reset only the saved 404 Customizer display-copy fields:
- Hero title lead -> `This page has`
- Hero title accent -> `moved.`
- Search title lead -> `Search the`
- Search title accent -> `site.`
- Shop route title lead -> `Return to the`
- Shop route title accent -> `shop.`
- Journal route title lead -> `Open the`
- Journal route title accent -> `journal.`
- Support route title lead -> `Ask for`
- Support route title accent -> `help.`

Production-adapted support/search helper copy may remain different from the prototype because it is real user-facing copy rather than prototype implementation guidance.

Status: DESKTOP STRUCTURE PASS / SAVED CUSTOMIZER CASE MISMATCH OPEN.
