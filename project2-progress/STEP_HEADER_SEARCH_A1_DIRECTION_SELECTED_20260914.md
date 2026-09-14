# Project2 Header Search — A1 Direction Selected — 2026-09-14

Status: DESIGN DIRECTION SELECTED / NOT YET IMPLEMENTED / NOT YET USER ACCEPTED IN PRODUCTION

User selected **A1 · Quiet inline search** from the dedicated four-variant Search A preview.

Authoritative direction:

- Main-site desktop/tablet Search should no longer open as a detached floating rectangle.
- Search should transform the existing right-side header action area into a quiet inline search rail.
- Preserve the true centered Spatial Flow wordmark and left primary navigation.
- Preserve existing Search route/action and form semantics.
- Preserve WooCommerce Bag/count authority and YITH Saved authority; these actions temporarily yield their visual slot while inline Search is open, then return when Search closes.
- Add an explicit close affordance and preserve Escape/outside-click close behavior.
- Mobile main-site Search remains hidden per the current approved mobile Header structure; no mobile drawer changes in this step.
- Journal branch must not be unintentionally redesigned by this main-site Search decision.

Implementation policy:

This is one coherent feature and may touch header.php + spatial-flow.css + spatial-flow.js together. Issue the complete bounded multi-file batch together; do not split it into file-by-file microsteps. User will return the modified files together for one source gate.

Current Header overall status remains Not done until production runtime and final visual acceptance.
