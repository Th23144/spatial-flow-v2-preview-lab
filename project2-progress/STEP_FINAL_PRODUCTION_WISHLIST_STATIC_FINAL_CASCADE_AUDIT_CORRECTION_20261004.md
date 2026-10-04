# Final Production Wishlist — Static Final Cascade Audit Correction

Date: 2026-10-04
Project: Spatial Flow V2 / Project 2

## Why this correction exists

The immediately preceding audit record:

`STEP_FINAL_PRODUCTION_WISHLIST_FOUR_VISIBLE_DEFECTS_AND_FULLPAGE_SOURCE_AUDIT_20261004.md`

(commit `e603183c65b1552ce47075f8cff72acd57455124`) contains one incorrect final-cascade conclusion: it states that the static authority's final desktop `.intro-side` font family is Cormorant Garamond serif.

That conclusion is withdrawn.

The authority was re-read from the actual repository blob in source order, including later Harmonized rules and media contexts.

Authority:
- `preview/spatial-flow-wishlist-harmonized-v1.html`
- blob SHA: `b99669bebe65481c2ecba153a49a1fe168ee0629`

## Correct final desktop cascade

The base rule begins as serif:

```css
.intro-side {
  text-align: right;
  max-width: 280px;
  font-family: var(--serif);
  font-style: italic;
  font-weight: 300;
  font-size: 17px;
  line-height: 1.45;
  color: var(--mute);
  padding-bottom: 6px;
}
```

Edition III later changes desktop font-size to 16px.

But the later Harmonized production-language bridge explicitly overrides the family:

```css
.intro-side, .blurb { font-family: var(--sans); }
.intro-side { max-width: 34em; color: var(--mute); }
```

and `--sans` is:

```css
"Inter", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif
```

Therefore the final desktop authority for `.intro-side` is:

- Inter / sans, NOT Cormorant Garamond;
- italic;
- font-weight: 300;
- font-size: 16px;
- line-height: 1.45;
- max-width: 34em;
- text-align: right;
- padding-bottom: 6px.

## Consequence for defect 1

Do NOT change the production H03 intro-side from Inter to Cormorant Garamond.

If the visible intro/right-side-note-to-toolbar gap still differs, its owner must be found elsewhere in the production computed layout: exact font-size/line-height/width/padding/grid/wrapper metrics or runtime theme leakage.

The previous planned `intro-side font -> serif` correction is cancelled because it would move production away from strict 1:1.

## Defect 2 — Toolbar double underline

The earlier root direction remains valid.

The static authority includes:

```css
a { text-decoration: none; }
```

and one intentional underline:

```css
.toolbar-actions a {
  border-bottom: 1px solid var(--ink);
}
```

Therefore production should show one line only. A Wishlist-scoped link-decoration reset is valid if Astra/global link decoration leaks at runtime. Do not remove the intended border-bottom.

## Defect 3 — Collection Index frame/chip leakage

The earlier root direction remains valid.

The static authority globally resets buttons:

```css
button {
  background: none;
  border: 0;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
}
```

The final Index still intentionally keeps its hover/focus pseudo underline. Production should neutralize theme button chrome (margin/border/radius/shadow/background/appearance) without deleting the authority `::after` interaction.

## Defect 4 — Item actions scale / chrome

The earlier audit was correct that runtime native controls can inherit Astra/WordPress button styles, but the authority values must not be guessed smaller by eye.

Final desktop authority remains:

```css
.actions {
  display: flex;
  align-items: center;
  gap: 8px 18px;
  flex-wrap: wrap;
}

.btn-text {
  font-size: 12px;
  letter-spacing: .16em;
  text-transform: uppercase;
  font-weight: 400;
  min-height: 44px;
  padding: 0 2px;
  border-bottom: 1px solid var(--ink);
}

.btn-fill {
  font-size: 12px;
  letter-spacing: .16em;
  text-transform: uppercase;
  font-weight: 400;
  min-height: 44px;
  padding: 0 20px;
}

.btn-ghost {
  font-size: 12px;
  letter-spacing: .16em;
  text-transform: uppercase;
  font-weight: 400;
  min-height: 44px;
  padding: 0 4px;
}
```

So the production correction should hard-reset native button/link chrome and typography to these authority values. Do not reduce 12px to 10/11px merely because the runtime currently looks oversized.

## Scope lock

Still do not touch:

- PHP
- JS
- YITH/Woo business logic
- product geometry
- Header
- Footer
- deferred dark palette harmonization

The next production edit remains CSS-only.

However, exact manual replacement anchors, hit counts, expected bytes/lines/SHA must be derived from the verified current production CSS baseline:

`spatial-flow(20261004-054819).css`

Baseline record:
- 609,303 bytes
- 21,676 logical lines
- SHA256 `d809cea66ca7f32407761335c6522dd00487dd5a7e0ad90de9e0deb237cf1dab`
- brace delta 0

Do not invent an anchor or expected hash if the raw baseline block is not available.

## Status

- Previous intro-side serif conclusion: WITHDRAWN.
- Toolbar runtime-reset finding: RETAINED.
- Index runtime-reset finding: RETAINED.
- Action runtime-reset finding: RETAINED.
- Next step: one bounded CSS H03 Source Parity Guard, only after exact current H03 source anchors are available and verified.

Status: FINAL STATIC CASCADE RE-CHECKED / AUDIT CORRECTED.
