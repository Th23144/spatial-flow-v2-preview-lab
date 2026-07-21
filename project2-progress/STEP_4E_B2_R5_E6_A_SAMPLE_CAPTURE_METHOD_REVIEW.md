# Step 4E-B2-R5-E6-A · Sample Capture Method Review

Last updated: 2026-07-21  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
Sample 1: setup proof only / not admissible evidence.
Sample 2: clean viewport image but not full-page evidence / rejected.
Sample 3: normal browser fullscreen screenshot at wrong viewport and not full-page / rejected.
Current required evidence remains A2, A4 and A6 only.
No source edit authorized.
Cart status: Not done.
```

## 1. Sample 1

The first image shows Edge DevTools, the responsive toolbar and a 1366 × 768 emulated viewport.

Useful:

```text
- confirms the requested viewport dimensions were entered
- confirms responsive mode is active
```

Not acceptable as A2 because:

```text
- DevTools and browser UI occupy the image
- the page is scaled inside the host window
- it is not a clean full-page capture
- the Cart recommendations and Footer are not included
```

## 2. Sample 2

The second image is a clean page-only capture and preserves the 1366:768 aspect ratio.

Not acceptable as A2 because:

```text
- it captures only the current viewport
- the lower Cart, recommendations and Footer are missing
- R5-E6 requires a full-page image produced from a 1366 × 768 viewport
```

The resulting full-page file should retain the 1366 CSS-pixel viewport width while its image height expands to the full document height.

## 3. Sample 3

The third image is a normal 1920 × 1080 desktop screenshot with browser chrome.

Not acceptable as A2 because:

```text
- viewport does not match 1366 × 768
- browser tabs/address bar are included
- only the visible first screen is captured
- recommendations and Footer are missing
```

## 4. Correct capture command

After setting the DevTools responsive viewport to 1366 × 768 and confirming page zoom 100%:

```text
1. Keep DevTools open.
2. Press Ctrl + Shift + P inside DevTools.
3. Search for: Capture full size screenshot.
4. Choose Capture full size screenshot, not Capture screenshot.
5. Upload the downloaded PNG file directly.
```

The browser may visually scale the emulated viewport to fit the host window. That scale is acceptable; the exported full-page PNG is the evidence, not a screenshot of the DevTools window.

## 5. Current evidence gate

```text
A2: live desktop full page from a 1366 × 768 viewport
A4: live phone full page from a 390 × 844 viewport
A6: live narrow-phone full page from a 360 × 800 viewport
```

All three must include Header, complete Cart, recommendations and Footer, with no modal, open Coupon, temporary Console style or inspector highlight.
