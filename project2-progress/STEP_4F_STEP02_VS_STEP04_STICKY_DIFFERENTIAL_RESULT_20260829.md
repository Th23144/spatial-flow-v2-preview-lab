# Project 2 · Step02 vs Step04 Sticky Differential Result · 2026-08-29

## Trigger

User ran the working-control sticky diagnostic on the normal Checkout Step02 page after confirming Step01/Step02 stick correctly while Step03/Step04 do not.

## Step02 working-control evidence

Environment:

```text
1920 × 991
DPR 1
visualViewport scale 1
```

Detected live structure:

```text
summary content: #order_review
sticky owner: aside.sf-safe5-summary
shell: form.checkout.woocommerce-checkout.sf-safe5-form
```

Sticky owner contract:

```text
position: sticky
top: 136px
align-self: start
owner height: 866.75px
usable viewport below top: 855px
owner fits below sticky top: false
```

Despite the owner being 11.75px taller than the nominal usable viewport region, native sticky activates correctly:

```text
scrollY 511 -> ownerTop 136 -> locked true
scrollY 791 -> ownerTop 136 -> locked true
```

It later releases near the containing shell boundary, which is correct native sticky behavior.

## Decisive runtime differential vs Step04

Step02 working page:

```text
body overflow: clip visible
html overflow: hidden auto
all intermediate checkout ancestors: overflow visible / transform none / contain none
sticky owner: aside.sf-safe5-summary
align-self: start
```

Step04 failing page:

```text
body overflow: hidden auto
html overflow: hidden auto
all intermediate Step04/Astra ancestors: overflow visible / transform none / contain none
sticky owner: .result-side
align-self: auto
```

Step04 scroll samples never lock and move one-for-one with the document.

The most important differential is therefore `body` overflow ownership:

```text
working Step02: body overflow-x: clip; overflow-y: visible
failing Step04: body overflow-x: hidden; overflow-y: auto
```

`html` remains `hidden auto` even on the working Step02 page, so the earlier diagnosis must be narrowed: `html` is not the decisive differentiator in the current Chromium runtime. The working control proves that body-level Sticky Ancestor Unlock is sufficient for Step02 even while the root element remains `hidden auto`.

## Sidebar-height conclusion

The working Step02 owner is also slightly taller than the nominal viewport region below `top:136px`, yet sticky still activates. Therefore sidebar height being slightly too tall is NOT the cause of Step04's complete zero-stick failure. Long-content usability may still require separate consideration, but it is not the activation blocker.

## Align-self conclusion

Step02 uses `align-self:start`; Step04 reports `align-self:auto`. This is not currently the leading cause because Step04 `.result-side` is not stretched to shell height and its measured height equals its content/sidebar height. The decisive tested runtime delta remains body overflow ownership. Do not alter align-self speculatively before testing the body-overflow unlock.

## Corrected root-cause statement

```text
Step04 already has position:sticky/top ownership.
Intermediate ancestors are not blocking.
The normal Checkout Step02 page works because its body is already page-scoped to overflow-x:clip / overflow-y:visible.
Step04 does not inherit that working body overflow environment; its body remains hidden/auto and native sticky never activates.
```

## Next bounded action

When the user resumes correction:

1. Extend the existing page-scoped Sticky Ancestor Unlock to the Step04 order-result scope at the body level.
2. Do not treat `html` as proven-required by the differential; preserve the existing SAFE2 pattern only if source ownership shows it is already paired with body.
3. Preserve `.result-side { position:sticky; top:132px; }`.
4. Do not add max-height/internal scroll or align-self changes in the same first correction.
5. Validate source, then rerun the exact Step04 sticky runtime diagnostic.
6. Require Step04 to show a valid middle range with `sideTop ≈ 132px` and `lockedToTop:true`, followed by normal release at the containing shell boundary.

Step03 remains explicitly deferred until Step04 is closed.

## Status

```text
Step02 working-control diagnostic: PASS
Step02 vs Step04 differential: COMPLETE
Step04 zero-stick root cause: narrowed to missing body-level sticky ancestor unlock
Step04 source correction: not yet applied
Step03: deferred
Checkout: Not done
```
