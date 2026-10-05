# Final Production 404 — H01 Title Case Root Cause Correction

Date: 2026-10-05
Project: Spatial Flow V2 / Project 2

## User correction

User checked the 404 Customizer and confirmed the saved backend values are already identical to the intended sentence-case values.

Therefore the prior diagnosis that stale Customizer values were causing Title Case is withdrawn.

## Source evidence

Current functions defaults are sentence case:
- This page has / moved.
- Search the / site.
- Common routes
- Return to the / shop.
- Open the / journal.
- Ask for / help.

Current canonical 404 CSS sets font/size/weight for these headings but does NOT explicitly reset `text-transform`.

The runtime screenshot capitalizes every word only on the heading elements:
- This Page Has Moved.
- Search The Site.
- Common Routes
- Return To The Shop.
- Open The Journal.
- Ask For Help.

This pattern is consistent with inherited/theme heading `text-transform: capitalize` leakage from Astra/global typography.

## Correct bounded fix

Add one Search/404-owned reset inside the canonical 404 block:

```css
.sf-404-intro h1,
.sf-404-search h2,
.sf-404-routes__head h2,
.sf-404-route__copy h3 {
  text-transform: none !important;
}
```

Bump child asset version:
- 2.7.58 -> 2.7.59

No 404.php or Customizer value changes are required.

## Baselines

functions.php:
- 651,069 bytes
- 12,475 logical lines
- SHA256 `1e05ac597d4fb506797ef0df86ca601afb0424d875123b719aad6f06f260ef9b`
- version 2.7.58

Expected functions target:
- 651,069 bytes
- 12,475 logical lines
- SHA256 `c2fffb501948d5a054464d784f6b2515ac21cfde707c0478ac3c7fb30ea0cdfc`
- version 2.7.59

CSS:
- 621,021 bytes
- 22,253 logical lines
- SHA256 `95b0750cc849e0fad96c560cc52890ad2ae5f050ae9b2f3493725e09cbc66a22`

Expected CSS target:
- 621,146 bytes
- 22,260 logical lines
- SHA256 `c15755a3d2b28aa249d69ded21f3534d229911ca74e6cc3d0ef2a6d3d0dd3a5c`

Status: PRIOR CUSTOMIZER DIAGNOSIS WITHDRAWN / THEME TEXT-TRANSFORM LEAKAGE FIX READY.
