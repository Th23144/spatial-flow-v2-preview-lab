# Project 2 - Header V2 runtime desktop Mega hover continuity defect - 2026-09-13

Status: RUNTIME DEFECT FOUND. Header remains Not done.

Runtime evidence from user:
- desktop Header renders and attached Shop Mega opens from Shop hover;
- Search, Saved and Bag are reported normal;
- tablet/mobile breakpoint switch renders;
- mobile root and Shop progressive panels render;
- desktop defect: moving the pointer away from the Shop nav item toward the attached Mega causes the Mega to disappear immediately, so the user cannot reliably enter the panel.

Source diagnosis:
- current attached Mega is visible only while the Shop owner is `:hover` / `:focus-within` or the Mega itself is hovered;
- the current consolidated Header V2 Mega block removed the old hover-bridge behavior;
- the V2 nav item itself has no vertical padding, while the fixed Mega is positioned at the Header bottom, leaving a physical pointer travel gap;
- therefore `:hover` can be lost before the pointer reaches the Mega.

Repair owner: Header V2 CSS + existing `setupHeaderMegaPosition()` JavaScript only. Do not touch PHP, WooCommerce/YITH/Search/Bag owners, mobile progressive navigation, Journal legacy navigation, or completed page bodies.

Repair design:
1. Add an explicit runtime owner class and open-state class for the Shop menu item.
2. Compute a transparent bridge height from the Shop owner bottom to the actual Header bottom.
3. Keep the Mega open through that bridge and add a short close grace period for diagonal pointer movement.
4. Preserve existing `:hover` / `:focus-within` fallback and keyboard behavior.
5. Hide/clear the bridge state at <=1100px.

After repair: rerun desktop Shop-to-Mega pointer transfer first, then continue the remaining consolidated Header runtime acceptance batch.