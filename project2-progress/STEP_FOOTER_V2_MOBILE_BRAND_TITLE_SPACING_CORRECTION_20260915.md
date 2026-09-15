# Footer V2 — Mobile brand-title spacing correction

Date: 2026-09-15

## User validation

- Desktop Footer left brand/trust-intro spacing correction: visually improved / acceptable.
- Mobile Footer still feels cramped in the `Considered Objects, Sent With Care.` title block.

## Diagnosis

The desktop correction was intentionally overridden by the existing mobile rule:

```css
.sf-v2-footer--main .sf-v2-trust-intro--brand h3 {
  max-width: 14ch;
  margin-top: 10px !important;
  font-size: 27px !important;
  line-height: 1.02 !important;
}
```

At ~390px this keeps the title constrained to three tight lines. The mobile correction should preserve the desktop PASS and only loosen the mobile title geometry.

## Narrow correction

For mobile only, increase title width and breathing room while retaining the same content and overall Footer layout:

- `max-width: 18ch`
- `margin-top: 12px`
- `font-size: 26px`
- `line-height: 1.08`

Also restore a little more separation before the following descriptive copy by increasing its mobile top margin from `9px` to `13px`.

No desktop rule, menu behavior, trust rail, legal row, information copy, WordPress owner, or Blog Footer change is authorized by this correction.

## Status

MOBILE VISUAL CORRECTION REQUIRED — narrow CSS-only patch.
