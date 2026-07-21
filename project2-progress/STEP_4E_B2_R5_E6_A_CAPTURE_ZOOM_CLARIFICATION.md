# Step 4E-B2-R5-E6-A · Capture Zoom Clarification

Last updated: 2026-07-21  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
Browser page zoom and DevTools device-toolbar preview scale are different controls.
Only browser page zoom must be 100%.
DevTools preview scale may be Fit, 50%, 75%, or another value needed to fit the emulated viewport on screen.
The preview scale does not change the configured CSS viewport dimensions or the full-size screenshot evidence.
No source change is authorized.
Cart status: Not done.
```

## 1. Browser page zoom

The browser menu control shown as `100%` is the actual page zoom.

Required:

```text
Browser page zoom: 100%
```

This can be reset with:

```text
Ctrl + 0
```

## 2. DevTools device-toolbar preview scale

The device toolbar dropdown beside the configured viewport dimensions may show values such as:

```text
50%
75%
100%
125%
150%
200%
Fit to window / Auto fit
```

This control only scales the on-screen preview so a large emulated viewport, such as 1366 × 768, fits inside the available host window.

It does not change:

```text
- configured CSS viewport width
- configured CSS viewport height
- responsive breakpoint behavior
- exported full-size screenshot page width
```

Therefore it is acceptable to leave the DevTools preview at Fit, 50%, or 75% when 100% cannot fit on screen.

## 3. Evidence requirement

For A2 desktop evidence:

```text
Configured viewport: 1366 × 768 CSS px
Browser page zoom: 100%
DevTools preview scale: any convenient fit value
Capture command: Capture full size screenshot
```

The downloaded PNG, not the visual size of the preview inside DevTools, is the admissible evidence.
