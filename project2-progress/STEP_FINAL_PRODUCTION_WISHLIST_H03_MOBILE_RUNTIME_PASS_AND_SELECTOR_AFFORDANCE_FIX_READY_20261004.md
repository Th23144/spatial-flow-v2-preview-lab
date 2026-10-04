# Final Production Wishlist — H03 Mobile Runtime PASS / Selector Affordance Fix Ready

Date: 2026-10-04
Project: Spatial Flow V2 / Project 2

## Runtime result

User confirmed the mobile Wishlist state bug is fixed.

Fresh mobile evidence shows the H03 Wishlist rendering real saved items at mobile width rather than falling into the false empty state.

The responsive source fix is therefore accepted at runtime.

## Mobile visual review

A full mobile screenshot was reviewed after the runtime fix.

Overall mobile composition is accepted:
- no horizontal overflow;
- product cards remain readable;
- media/copy/action hierarchy is coherent;
- footer remains stable;
- no obvious mobile-only card/frame regression;
- current H03 mobile geometry does not require broad redesign.

One usability issue remains:

### Mobile Collection Index discoverability

The mobile Collection Index is implemented as a native `select`, but in its closed state it visually reads like plain editorial text.

Current CSS deliberately removes visible native select chrome:
- border 0;
- transparent background;
- no explicit custom indicator.

As a result, the user stated that they would not know the control was selectable without tapping it.

This is a real affordance issue, not a preference-only issue.

## Fix direction

Do not turn the selector into a bordered form control/card.

Keep the editorial treatment and add one explicit, lightweight dropdown affordance:
- custom downward chevron at the right edge;
- select gets pointer cursor;
- native select appearance is normalized;
- focus-within changes the chevron to the clay accent;
- no JS / PHP logic change.

Because the stylesheet URL is versioned through `SPATIAL_FLOW_CHILD_VERSION`, bump:
- 2.7.53 -> 2.7.54

## CSS baseline

`spatial-flow(20261004-095034).css`

- 610,277 bytes
- 21,700 logical lines
- SHA256 `d154166a7f11058008b515db4f0f1c2822e6c218f4789df0966af2023b1575d0`

Expected CSS target:
- 610,831 bytes
- 21,721 logical lines
- SHA256 `776760cf5f96c1f27b693063d7d90f787edaa4709e72add9670a22dc222e56e0`
- brace delta 0

## functions.php baseline

`functions(20261004-102226).php`

- 640,866 bytes
- 12,275 logical lines
- SHA256 `25da2eee11476b0c0bdc6514022125d0dc9e91481cf7132461ad47a18f4f4e5b`
- version 2.7.53

Expected functions.php target:
- 640,866 bytes
- 12,275 logical lines
- SHA256 `0d53a94de25bbef22dfbf0e6e5f42c3e65cf611f4f853838cb329496f8629257`
- version 2.7.54
- PHP syntax PASS

## Status

Mobile runtime state: PASS.
Mobile broad visual layout: PASS.
Selector affordance: one bounded CSS correction pending.
Wishlist global completion remains pending until this final mobile usability correction is accepted.
