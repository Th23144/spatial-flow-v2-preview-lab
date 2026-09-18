# Shop V2 — Closing Note CTA Customizer field location correction

Date: 2026-09-18

## User screenshot finding

The user entered http://spatialflow.local/contact-us/ into:
- Studio Note Button URL

This is the wrong owner for the Shop Closing Note CTA.

## Source-confirmed ownership

Studio Note Button URL:
- setting id: sf_shop_v2_editor_pick_note_url
- belongs to the Editor's Pick / Studio Note control group
- affects the secondary ghost Studio Note button in the currently frozen Editor's Pick block

Closing Note Button URL:
- setting id: sf_shop_v2_closing_button_url
- belongs to the Closing Editorial Note control group
- directly owns the Write to the editors CTA at the bottom of Shop

Both controls live in the same Spatial Flow Shop V2 Customizer section, but Closing Note controls appear after the Editor's Pick controls.

Expected Closing Note control order:
1. Enable Closing Editorial Note
2. Closing Note Kicker
3. Closing Note Intro
4. Closing Note Emphasis
5. Closing Note Body
6. Closing Note Side Text
7. Closing Note Button Text
8. Closing Note Button URL

## URL note

A URL such as /contact-us/ is structurally valid for the URL field only if that route actually exists.

Previous WP-CLI checks found no page whose title/slug contained contact, so the current Local database does not presently confirm a real Contact page at /contact-us/.

## Action

- Clear the mistakenly populated Studio Note Button URL unless intentionally retained for future Editor's Pick/DIY work.
- Populate Closing Note Button URL with a real existing destination when available.

Status:
OWNER LOCATION CORRECTED / NO CODE CHANGE.