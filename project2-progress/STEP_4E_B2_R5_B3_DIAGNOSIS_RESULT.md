# Step 4E-B2-R5-B3 · Post-Load Remove Glyph Diagnosis Result

Last updated: 2026-07-13  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-B3 live diagnosis：Complete.
Exact final computed state：Captured.
Root cause：Confirmed.
Next executable step：R5-B4 bounded canonical ownership correction.
Historical Cart CSS deletion：Blocked.
Cart page status：Not done.
```

## Captured DOM

The fully loaded native remove link contains an Astra-injected icon span:

```html
<a class="remove" ...>
  <span class="ahfb-svg-iconset ast-inline-flex" aria-hidden="true">
    <svg class="ast-mobile-svg ast-close-svg" ...>...</svg>
  </span>
</a>
```

The remove link is therefore not text-only after final load.

## Captured final computed values

The canonical pseudo-element remains valid after final load:

```text
content："×"
display：grid
visibility：visible
opacity：1
color：rgb(0, 0, 0)
-webkit-text-fill-color：rgb(0, 0, 0)
font-size：22px
font-weight：700
position：relative
transform：none
z-index：1
pseudo width / height：24px / 22px
```

The link itself is:

```text
display：grid
width / height：32px / 32px
overflow：hidden
position：static
font-size：0
color：transparent
```

## Exact root cause

The final page contains two grid children inside the fixed 32 × 32px remove link:

```text
1. Astra span/SVG close icon
2. the canonical ::after pseudo-element
```

Because the link is a grid container without an explicit shared grid area, the injected span and `::after` are auto-placed into separate grid tracks. The Astra span occupies the first track. The pseudo-element is pushed into another track and its computed box shrinks to 24 × 22px rather than owning the full 32 × 32px circle.

The parent link uses `overflow: hidden`, so the second track/pseudo glyph is clipped outside the visible circle. The Astra SVG is also invisible because it inherits the link's transparent color.

This explains the complete observation:

```text
- before Astra's final icon state takes ownership, the black pseudo × flashes briefly
- after final load, the Astra span participates in grid layout
- the pseudo glyph moves into a clipped track
- the white shell remains but appears empty
```

This is not a later color, opacity, visibility or font-weight override. It is a child-ownership and grid-placement conflict.

## Decision

The canonical layer will remain the sole visual owner:

```text
- hide the Astra-injected `.ahfb-svg-iconset` only inside Cart remove links
- make the remove link a positioned containing block
- absolutely center the canonical `::after` across the full 32 × 32px circle
- preserve the native WooCommerce link, href, aria-label and click behavior
```

No JavaScript, PHP, template or appended CSS patch is required.