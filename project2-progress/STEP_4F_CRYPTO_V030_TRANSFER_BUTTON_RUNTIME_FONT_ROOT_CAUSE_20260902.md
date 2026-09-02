# Step 4F · Crypto V0.3.0 transfer-button runtime font root cause · 2026-09-02

## Runtime evidence

Diagnostic: `SF_CRYPTO_V030_TRANSFER_FONT_AUDIT_20260902`

Observed computed style for `.sf-p2-crypto-transfer-complete` and its first label span:

```text
font-family: Inter, -apple-system, BlinkMacSystemFont, "PingFang SC", "Segoe UI", sans-serif
font-size: 14px
font-weight: 400
letter-spacing: 2.38px
text-transform: uppercase
```

The intended source rule in `assets/project2-crypto-workspace.css` is:

```css
.sf-p2-crypto-transfer-complete {
  font-family: var(--sf-p2-mono);
  font-size: 9px;
  letter-spacing: .17em;
  text-transform: uppercase;
}
```

The CSS variable resolves correctly to:

```text
"JetBrains Mono", ui-monospace, "SF Mono", monospace
```

JetBrains Mono is available and loaded in the document, so this is not a font-loading failure.

## Root cause

Earlier in the same stylesheet, the reset rule is:

```css
.sf-p2-crypto-workspace button,
.sf-p2-crypto-workspace input { font: inherit; }
```

That selector has higher specificity than `.sf-p2-crypto-transfer-complete` and the `font` shorthand resets/inherits font-family, font-size, font-weight, font-style and line-height from the workspace root.

Therefore the button's intended `font-family` and `font-size` declarations lose the cascade, while `letter-spacing` and `text-transform` still apply because they are not reset by the `font` shorthand. This exactly matches the runtime result: Inter 14px with 2.38px letter spacing (`0.17em × 14px`).

## Minimal correction

Do not alter font values, geometry, colors, template markup, JS or backend logic.

Change only the selector ownership in `assets/project2-crypto-workspace.css`:

```css
.sf-p2-crypto-transfer-complete {
```

to:

```css
.sf-p2-crypto-workspace .sf-p2-crypto-transfer-complete {
```

This raises specificity enough for the already-correct typography declarations to beat the generic workspace button reset without introducing `!important`.

Expected computed result after the correction:

```text
font-family: "JetBrains Mono", ui-monospace, "SF Mono", monospace
font-size: 9px
letter-spacing: 1.53px
text-transform: uppercase
```

## Boundary

- Typography-only correction.
- No change to button height, width, padding, border, background, color, position or behavior.
- No change to template PHP.
- No change to plugin bootstrap/backend/security/settlement logic.
