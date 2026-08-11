# STEP 4F · Checkout Geometry Diagnostic Method Correction · 2026-08-11

Status: METHOD CORRECTED

The prior follow-up incorrectly interpreted a 628px `window.innerWidth` result as if the browser window itself had been resized narrower. The user correctly pointed out that opening DevTools can consume viewport width depending on docking position.

Observed behavior:
- Earlier desktop geometry capture: DevTools docked at the bottom, so page width remained about 1365px while height was reduced.
- Later geometry capture: DevTools docked at the right, so page `innerWidth` dropped to about 628px and SAFE5 entered the <1040px responsive layout.

Therefore geometry comparisons must use the same DevTools docking arrangement on both captures. Preferred method for desktop width QA:
1. Keep the browser window maximized / same physical size.
2. Dock DevTools to the bottom, or undock DevTools into a separate window.
3. Run the geometry console script with page width still at desktop size.

The 628px capture remains useful only to show the new `.entry-content > .woocommerce` width reset is active at that viewport; it is not valid as a desktop parity comparison.

No code change is required by this correction.
