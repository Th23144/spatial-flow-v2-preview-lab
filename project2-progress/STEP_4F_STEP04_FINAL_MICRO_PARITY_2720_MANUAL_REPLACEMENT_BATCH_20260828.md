# Project 2 · Step 04 · Final micro-parity 2.7.20 manual replacement batch · 2026-08-28

## Purpose

Close the final deterministic computed-style residuals after the 2.7.19 production-only four-capture re-audit.

No `thankyou.php` change.

## Current accepted baselines

```text
assets/css/spatial-flow.css
bytes 588919
logical lines 20670
SHA256 cc7d4a91ede6ff9297e0a7c6f03e4f079d2705798d567895de86034fc120b3b2

functions.php
bytes 612013
logical lines 11689
SHA256 f36e767387f0306eeae6744c6d17d99f4451999916f1c8d87df6797a183a736c
version 2.7.19
```

## CSS Part A — Overview label line-height

Old block, expected match count 1:

```css
.sf-order-result-v3 .result-overview span {
  display: block;
  color: var(--soft);
  font-size: 7px;
  letter-spacing: .16em;
}
```

Replace with:

```css
.sf-order-result-v3 .result-overview span {
  display: block;
  color: var(--soft);
  font-size: 7px;
  line-height: 1.55 !important;
  letter-spacing: .16em;
}
```

Delta: +32 bytes / +1 line.

## CSS Part B — Receipt table root logical alignment

Old block, expected match count 1:

```css
body.woocommerce-order-received .sf-order-result-v3 table.result-order-table {
  width: 100% !important;
  margin: 0 !important;
  border: 0 !important;
  border-collapse: collapse !important;
  border-radius: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
  overflow: visible !important;
  font-family: var(--sans) !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 1.55 !important;
}
```

Replace with same block plus:

```css
  text-align: start !important;
```

Delta: +32 bytes / +1 line.

## CSS Part C — Preserve final-column right alignment

Old block, expected match count 1:

```css
.sf-order-result-v3 .result-order-table th:last-child,
.sf-order-result-v3 .result-order-table td:last-child {
  text-align: right;
}
```

Replace with:

```css
.sf-order-result-v3 .result-order-table th:last-child,
.sf-order-result-v3 .result-order-table td:last-child {
  text-align: right !important;
}
```

Delta: +11 bytes / 0 lines.

## CSS Part D — Receipt non-final cell logical alignment

Old block, expected match count 1:

```css
.sf-order-result-v3 .result-order-table td {
  padding: 18px 0 !important;
  border: 0 !important;
  border-bottom: 1px solid var(--line-soft) !important;
  background: transparent !important;
  vertical-align: top;
}
```

Replace with:

```css
.sf-order-result-v3 .result-order-table td {
  padding: 18px 0 !important;
  border: 0 !important;
  border-bottom: 1px solid var(--line-soft) !important;
  background: transparent !important;
  text-align: start !important;
  vertical-align: top;
}
```

The higher-specificity `:last-child` rule from Part C keeps the final column right-aligned.

Delta: +32 bytes / +1 line.

## CSS Part E — Address logical alignment

Old block, expected match count 1:

```css
body.woocommerce-order-received .sf-order-result-v3 .result-address-card address,
body.woocommerce-order-received .sf-order-result-v3 .result-address-card p {
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  color: var(--soft) !important;
  font-size: 11px !important;
  font-style: normal !important;
  line-height: 1.75 !important;
}
```

Replace with same block plus:

```css
  text-align: start !important;
```

Delta: +32 bytes / +1 line.

## CSS combined expected fingerprint

```text
bytes 589058
logical lines 20674
delta +139 bytes / +4 lines
SHA256 27ccdfb39e70f8a0a037e7d85756eb7179e535273ac26bb30bf96cfb4f9a9cf6
braces 3282 / 3282
comments 275 / 275
tinycss2 errors 0
```

## functions.php cache bump

Old, expected match count 1:

```php
define( 'SPATIAL_FLOW_CHILD_VERSION', '2.7.19' );
```

New:

```php
define( 'SPATIAL_FLOW_CHILD_VERSION', '2.7.20' );
```

Expected fingerprint:

```text
bytes 612013
logical lines 11689
SHA256 e45991fa5795c2a9403bf3ef12b3634db709616c3b0189ccd63ffb21585bb1a3
version 2.7.20
```

## Stop conditions

- If any old block does not match exactly once, stop and do not guess.
- After all edits, return only `spatial-flow.css` and `functions.php` together for consolidated validation.
- Do not regenerate reference JSON.
- After exact returned-source validation, rerun only the four production JSON diagnostics.