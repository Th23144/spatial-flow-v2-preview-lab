# Footer V2 — Mobile Brand Spacing Source Pass — 2026-09-15

## Scope
Validate the user-applied mobile-only spacing correction for the Main-site Footer V2 brand/trust intro block.

## User-returned CSS identity
- File: `spatial-flow(20260915-160830).css`
- Size: 636,528 bytes
- Lines: 22,723
- SHA256: `d91933012f5dbbd737aa414efa03d9eba8e508e397f0ffb7a78e0db549526138`

## Verified mobile rules
Within the existing Main-site Footer V2 mobile media query, the following values are present:

```css
.sf-v2-footer--main .sf-v2-trust-intro--brand h3 {
  max-width: 18ch;
  margin-top: 12px !important;
  font-size: 26px !important;
  line-height: 1.08 !important;
}

.sf-v2-footer--main .sf-v2-trust-intro--brand span {
  max-width: 32ch;
  margin-top: 13px !important;
  font-size: 11px !important;
  line-height: 1.55 !important;
}
```

## Structural checks
- CSS opening / closing braces: `3531 / 3531`
- CSS comment opening / closing markers: `276 / 276`
- Footer V2 production START marker: 1
- Footer V2 production END marker: 1

## Result
**SOURCE VALIDATED — PASS**

This change is correctly scoped to the mobile Footer brand/trust intro spacing adjustment. Desktop Footer V2 rules remain untouched by this edit.

## Next step
Runtime visual check at approximately 390px width. If the mobile title spacing is accepted, Footer V2 can proceed to final user acceptance / closure.
