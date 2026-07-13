# Step 4E-B2-R5-B2 · Mobile Remove Black Glyph Visibility Correction

Last updated: 2026-07-13  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-B canonical replacement：Applied exactly.
R5-B1 shell contrast correction：Applied.
R5-B2 forced black pseudo-glyph correction：Applied by user but visually failed.
Observed behavior：a black × briefly appears during hard refresh, then disappears after the page finishes loading.
R5-B final acceptance：Not passed.
Current executable step：R5-B3 live cascade / post-load ownership diagnosis.
Further blind CSS declaration changes：Forbidden.
Historical Cart CSS deletion：Forbidden.
Cart page status：Not done.
```

## 1. New evidence changes the diagnosis

The user observed that repeated hard refreshes briefly show a clearly black `×` before the page reaches its final loaded state. The glyph is not centered during that moment, then disappears.

This proves the R5-B2 pseudo-element can render. Therefore the remaining defect is not simply:

```text
- the chosen color being too light
- the font weight being too low
- the `content: "×"` declaration being absent from the source file
```

The likely failure class is a **post-load presentation change**, for example:

```text
- a later stylesheet or inline rule wins the final cascade
- a late state/class changes display, content, opacity, visibility, positioning or transform
- WooCommerce/Astra/WPCode/customizer JavaScript refreshes or replaces the Cart fragment and changes the final matched structure/state
- an inherited or pseudo-element rule moves the glyph outside the clipped 32px shell after final layout
```

The exact winner must be identified from the live browser after loading. Do not guess another color/weight declaration.

## 2. R5-B2 instruction history

R5-B2 changed the existing canonical phone `a.remove::after` rule in place to force:

```text
- pure black `#000`
- `-webkit-text-fill-color: #000`
- opacity 1
- visibility visible
- Arial/Helvetica system font
- 22px / 700 weight
- full-size grid centering
```

The black glyph's brief appearance demonstrates that these declarations are being parsed and initially applied.

## 3. Execution policy from this point

```text
- do not append another Cart CSS patch
- do not add R5-B4 declarations before live cascade evidence exists
- do not change PHP, JavaScript, templates, version, Cart Notice or historical Cart CSS
- do not begin R5-C historical deletion
- inspect the fully loaded remove link and its `::after` pseudo-element in DevTools
- identify the final active declaration/source before editing
```

## 4. Required live DevTools evidence

Use the fully loaded mobile Cart at 430 CSS px or narrower.

### A. Select the actual remove link

```text
1. Open DevTools.
2. Enable the phone viewport.
3. Hard-refresh and wait until the × has disappeared.
4. Use the element picker and click the white circular remove control.
5. In Elements, confirm the selected node is the native WooCommerce link:
   <a class="remove" ...>
```

### B. Inspect `::after`

In the Styles panel, locate the pseudo-element section for:

```css
a.remove::after
```

Use the Styles filter one term at a time and capture the active/crossed-out rules for:

```text
content
display
visibility
opacity
color
-webkit-text-fill-color
font-size
font-weight
position
top
right
bottom
left
transform
z-index
width
height
```

### C. Inspect Computed values

With the same remove link selected, open the Computed panel and record the final values/source links for:

```text
content
display
visibility
opacity
color
-webkit-text-fill-color
font-size
position
transform
z-index
```

### D. Required screenshots

Provide:

```text
1. Elements panel showing the selected <a class="remove"> node.
2. Styles panel showing all matched `::after` rules after the page is fully loaded.
3. Computed panel showing the final values above.
```

If DevTools offers a `::after` pseudo-element row under the selected element, select that row before taking the Styles/Computed screenshots.

## 5. Current expected local CSS state

The user applied R5-B1 and R5-B2 locally, but the latest edited stylesheet has not yet been uploaded for exact file validation.

Expected R5-B2 state if applied exactly:

```text
Complete CSS size: 812,142 bytes
Logical lines: 27,098
SHA256: de6ddce6c42cf9fc50fb583caa3d3f5ea46931f75f4d805cdf74ab158f61196d
Braces: 4,074 / 4,074
Comments: 413 / 413
CSS parser errors: 0
```

Upload the current CSS together with the DevTools evidence so the final live winner can be matched against the source file.

## 6. Acceptance rule

R5-B2 is not passed merely because the glyph flashes during loading. It passes only when:

```text
- one black × remains visible after the page fully loads
- it is centered inside the 32 × 32px control
- Remove and Undo/Restore remain functional
- no horizontal overflow or title collision occurs
```

Until the final cascade owner is identified, no further CSS correction is authorized.