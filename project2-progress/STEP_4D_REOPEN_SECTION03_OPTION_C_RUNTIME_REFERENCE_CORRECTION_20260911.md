# Project 2 · Step 4D REOPEN · Section 03 Option C runtime/reference correction · 2026-09-11

## Trigger
The user installed the Option C numbering refinement and returned desktop + 390px screenshots. The numbering removal itself is visually successful, but the user flagged three horizontal rules around Section 03 and stated that the static reference does not show them in this form.

## Runtime observation
Desktop currently shows:
- one horizontal rule above Section 03
- two closely spaced horizontal rules below Section 03 / before Related Products

390px additionally shows horizontal separators between the Care units.

## Source diagnosis
Current live stylesheet contains:

```css
.single-product .sf-product-v2-care {
  margin-top: clamp(64px, 7vw, 96px);
  padding: clamp(72px, 7vw, 96px) 0;
  border-top: 1px solid #d9d1c4;
  border-bottom: 1px solid #d9d1c4;
  background: transparent;
}
```

and:

```css
.single-product .sf-related-products {
  ...
  border-top: 1px solid rgba(31,25,22,.12);
  ...
}
```

and on <=900px:

```css
.single-product .sf-product-v2-care__unit + .sf-product-v2-care__unit {
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid rgba(31,25,22,.1);
}
```

## Static-reference audit
Authoritative static product reference `preview/spatial-flow-product-v1.html` uses `.long-section` for Section 03. That shared long-section rule has a bottom border, but no top border:

```css
.long-section {
  max-width: var(--max);
  margin: 0 auto;
  padding: 96px var(--gutter);
  border-bottom: 1px solid var(--paper-line);
}
```

The static `.care-grid` defines only grid columns/gap/margin and does not add borders between care articles. At responsive widths it becomes one column with a gap; no per-unit separator border is defined.

The static `.related` block has its own spacing and a bottom border, but no top border.

Therefore the current live implementation has these extra reference mismatches:
1. Section 03 `border-top` — extra, remove.
2. Related Products `border-top` — extra, remove.
3. Mobile Care unit `border-top` separators — extra, remove while preserving the 40px-style vertical rhythm via spacing only.

The Section 03 `border-bottom` is reference-supported and should remain. This is why the two lower desktop lines should collapse to one reference-faithful separator rather than deleting both.

## Correction to earlier refinement record
The earlier Option C decision record said to preserve the existing mobile separators. That instruction is superseded by this later strict-reference audit: the separators are not in the static reference and must not be preserved for a strict 1:1 result.

## Protected scope
Do NOT change:
- Option C numbering removal
- Section 03 backend fields/save logic
- Section 03 all-empty hide behavior
- Section 03 titles/body content
- WooCommerce logic
- Related Products query/data
- other page sections

## Current status
Option C numbering removal: RUNTIME VISUALLY PASS
Strict 1:1 Section 03 / Related transition: FAIL due extra border rules
Single Product overall: Not done

## Exact next action
Make a bounded CSS-only correction:
- remove `border-top` from `.sf-product-v2-care`
- keep its `border-bottom`
- remove mobile per-unit `border-top` while keeping spacing
- remove `border-top` from `.sf-related-products`
- bump child version once for deterministic CSS cache refresh
Then source-audit the returned files before runtime recheck.
