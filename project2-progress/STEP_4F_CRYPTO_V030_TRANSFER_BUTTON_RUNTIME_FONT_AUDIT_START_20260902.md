# Step 4F · Crypto V0.3.0 transfer-button runtime font audit start · 2026-09-02

## Context
The accepted V0.3.0 plugin source files were revalidated against the locked fingerprints. The source rule for `.sf-p2-crypto-transfer-complete` already declares the static reference typography contract:

```css
font-family: var(--sf-p2-mono);
font-size: 9px;
letter-spacing: .17em;
text-transform: uppercase;
```

Therefore no source edit is justified yet.

## Runtime question
Determine whether the live `I HAVE COMPLETED THE TRANSFER` button is actually rendering with the intended computed typography and whether `JetBrains Mono` is available/loaded or a fallback face is being used.

## Required evidence
Capture in one Console audit:
- button and label-span computed `font-family`, `font-size`, `font-weight`, `letter-spacing`, `text-transform`, `line-height`
- button/label geometry
- `document.fonts.status`
- `document.fonts.check()` results for JetBrains Mono
- loaded FontFaceSet entries related to JetBrains/mono where available
- stylesheet rules matching `.sf-p2-crypto-transfer-complete`

## Boundary
Do not modify CSS, template, plugin bootstrap, JS, payment verification, settlement, routing, feature flags, or backend logic until the runtime evidence is returned.
