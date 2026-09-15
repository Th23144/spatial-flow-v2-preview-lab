# Project2 — Footer V2 desktop brand-spacing fix — SOURCE PASS

Date: 2026-09-15

## Scope
Main-site Footer V2 only. Narrow visual correction to the desktop brand/trust intro block after user reported the `Considered Objects, Sent With Care.` area felt cramped.

## Applied CSS changes verified
- Desktop `.sf-v2-trust-intro--brand h3`
  - `max-width: 18ch`
  - `margin: 14px 0 0`
  - `font-size: clamp(25px, 1.8vw, 30px)`
  - `line-height: 1.08`
- Desktop `.sf-v2-trust-intro--brand span`
  - `margin-top: 16px`
  - existing copy/ownership unchanged
- Mobile override preserved intentionally
  - `max-width: 14ch`
  - `margin-top: 10px`
  - `font-size: 27px`
  - explicit `line-height: 1.02`

## Source validation
Uploaded CSS identity:
- bytes: 636,527
- lines: 22,723
- SHA256: `d7a883214430f1ab53afa803369d61bee92f03e4b3812ed1aa7a21f115d24f50`
- `{ / }`: 3531 / 3531
- `/* / */`: 276 / 276
- Footer V2 production START marker: 1
- Footer V2 production END marker: 1

## Status
SOURCE VALIDATED — PASS.

Next: user should hard-refresh and provide one desktop screenshot of the left Footer brand/trust-intro area only. If visually accepted, proceed to final Footer V2 user acceptance/closure; do not reopen mobile or unrelated Footer regions.
