# Final Production Policy Family — H01A Refund / Returns Reading 03 Manual Batch Ready

Date: 2026-10-05
Project: Spatial Flow V2 / Project 2

## Why H01A starts with Refund / Returns

The accepted Policy authority is a Returns / Refunds long-form stress composition.

The current live Refund / Returns page is also the only policy page with a dedicated native PHP renderer and Customizer-owned content.

Therefore the safest production sequence is:

1. map Refund / Returns first against Reading 03;
2. runtime-accept the long-form stress page;
3. extract the same H01 family owner onto Privacy / Shipping / Terms while preserving their ordinary WordPress content ownership.

This is not a decision to treat Refund as a separate design family.

## Accepted authority

Branch:
`temp-policy-wishlist-led-01`

File:
`temp-preview/Spatial-Flow-Policy-Longform-Reading-03-Final.html`

## H01A ownership rules

Preserve:
- route `/refund-returns-policy/`;
- `spatial_flow_refund_returns_native_template()`;
- all existing `sf_refund_*` Customizer settings;
- Contact and Track Order destination ownership;
- Header/Footer;
- no legal copy rewrite.

Replace:
- only `spatial_flow_render_refund_returns_page()` presentation markup;
- current Step 5I + SAFE2 Refund CSS presentation owner.

Keep:
- Customizer registration block unchanged;
- later general top-gap neutralizer unchanged unless runtime proves it obsolete.

## Existing copy mapping

No existing visible policy copy is replaced.

Existing fields are remapped into Reading 03 roles:
- hero kicker/title/text -> Policy intro;
- hero primary/secondary actions -> toolbar actions;
- hero card title/text -> document lede;
- hero mini fields -> document metadata;
- overview fields + Policy card 1 -> Chapter 01;
- Policy card 2 -> Chapter 02;
- Policy card 3 -> Chapter 03;
- process fields + four existing process steps -> Chapter 04;
- conditions fields + four existing note fields -> Chapter 05;
- CTA fields/actions -> Chapter 06.

The legacy breadcrumb-home control remains stored but is not rendered because the accepted Reading 03 design has no breadcrumb row.

## Presentation implementation

The new canonical Refund owner uses only `.sf-policy-h01-*` inner classes.

This intentionally prevents the old generic `.sf-policy-page` card system from owning the new Refund composition.

Current wrapper remains `.sf-refund-policy-page` for route/page scoping and existing top-gap neutralization.

A shared helper:
`spatial_flow_policy_h01_title_html()`
adds the accepted sage italic emphasis to the final word without changing stored copy.

## Fresh baseline

`functions(20261005-133338).php`
- 658,030 bytes
- 12,558 logical lines
- SHA256 `2eb7ac7e103e4d8f015fb96955328003f41d2d79d953f22d01019a3e9c6b325b`
- version `2.7.69`

`spatial-flow(20261005-133337).css`
- 628,207 bytes
- 22,556 logical lines in the repository/tool counting convention
- SHA256 `4e1dfdccb176c48ee530a9e8c03e538a061615b3d2366831ab3543b3e1b3a4bd`

## Verified H01A target

functions.php:
- 663,788 bytes
- 12,642 logical lines
- SHA256 `12fff6b4c610142dd0462bbae426028c329033a358de4ac5f839aef2802aab67`
- version `2.7.70`
- PHP syntax PASS
- no trailing LF

CSS:
- 627,713 bytes
- 22,568 logical lines in trailing-LF counting convention
- SHA256 `71c17cc318d58471f566b68d79e2985b7766d32c68079231c05981af4185b583`
- braces 3545 / 3545
- comments 239 / 239
- top-level CSS parse errors 0
- trailing LF present

## CSS maintenance result

The H01A candidate removes the old dedicated Step 5I Refund presentation block and its SAFE2 conflict-override block, replacing them with one canonical H01 owner.

This is a canonical replacement, not another bottom-of-file override patch.

The older generic policy family block is retained temporarily because Privacy / Shipping / Terms still use that owner until H01B.

## Runtime gate after source pass

Refund / Returns must be checked at:
- desktop;
- 1024;
- 390–430 mobile;
- 360 only if pressure appears.

Verify:
- real current Customizer copy remains present;
- all six Reading 03 chapters render;
- sticky Contents behavior;
- rail numbering / labels;
- actions route correctly;
- no page-level horizontal overflow;
- Header/Footer unaffected.

Status: H01A SOURCE-VERIFIED / MANUAL ANCHORED DELIVERY READY.
