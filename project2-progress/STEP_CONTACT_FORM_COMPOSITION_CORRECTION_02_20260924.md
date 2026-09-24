# Contact Wishlist-led 02 — Form Composition Correction

Date: 2026-09-24
Project: Spatial Flow V2 / Project 2

## User evidence

The user opened the corrected Contact preview and identified a remaining layout/composition problem in the left message-form area.

## Diagnosis

The issue was not the previously corrected `KEEP THE REAL OWNER.` line break.

The left form header still carried two competing pieces of implementation-oriented hierarchy:
- `MESSAGE FORM` + `Write with context.`
- a second production-ownership explanation on the right of the same form header.

That duplicated the owner explanation already present in the right-side implementation note and made the form heading feel detached / over-composed. The form also had slightly excessive vertical depth in the message field.

## Bounded correction

New candidate:
`temp-preview/Spatial-Flow-Contact-Wishlist-Led-02.html`

Branch:
`temp-contact-wishlist-led-01`

Changes only:
- remove the redundant production-owner paragraph from the form header;
- keep `MESSAGE FORM` and `Write with context.` as one clean left-aligned stack;
- reduce form-header bottom spacing;
- slightly tighten field vertical rhythm;
- reduce message textarea minimum height from 138px to 118px.

Preserved:
- hero;
- toolbar;
- two-column main composition;
- Track Order / FAQ / Services routes;
- right-side `IMPLEMENTATION NOTE / KEEP THE REAL OWNER.` ownership reminder;
- form fields and functional roles;
- 1480 body / 1720 Header/Footer;
- responsive behavior.

## Status

CONTACT WISHLIST-LED 02 = READY FOR USER VISUAL REVIEW.
NO PRODUCTION MAPPING.
