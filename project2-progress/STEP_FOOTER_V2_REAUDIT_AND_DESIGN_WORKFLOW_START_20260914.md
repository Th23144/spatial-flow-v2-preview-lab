# STEP_FOOTER_V2_REAUDIT_AND_DESIGN_WORKFLOW_START_20260914

Date: 2026-09-14
Project: Spatial Flow V2 / 项目二换皮工程
Subsystem: Main-site Footer V2

## Start condition

Main-site Header V2 received final user acceptance and is now closed. The standing project sequence therefore advances to Footer V2.

## Governing reframe

Per `STEP_HEADER_FOOTER_PRODUCT_QUALITY_REFRAME_20260912.md`, Footer is not treated as merely an unfinished literal static-reference copy. The remaining work is product-quality / maturity work while preserving the real WordPress/WooCommerce ownership model.

## Footer V2 workflow

Before editing production code:

1. Re-audit the current live Footer implementation and source ownership.
2. Identify current WordPress menu locations, Customizer/theme_mod/options, dynamic links, newsletter/contact/social/payment/legal ownership, and any legacy/duplicated Footer CSS or markup.
3. Review the current live Footer visually on desktop and mobile.
4. Compare against the accepted Spatial Flow design language now established by the completed Header V2 and the project's approved reference direction.
5. Decide the mature Footer information architecture and visual direction.
6. Use a standalone visual prototype/HTML only if needed for a real design decision; do not generate images without explicit user permission.
7. After direction approval, implement one coherent bounded multi-file production batch rather than arbitrary file-by-file microsteps.
8. Perform combined source validation, then consolidated runtime/visual acceptance.

## Hard constraints

- Preserve WordPress/WooCommerce backend editability and real data/function ownership.
- Do not fabricate editorial, policy, payment, social, trust, or legal content.
- Do not delete pages/menu items merely because the admin selector is cluttered.
- Do not reopen completed Header V2 absent a concrete regression or explicit user request.
- No image generation without explicit user permission.
- Any code supplied to the user must include complete indentation.

## Current status

Footer V2: NOT DONE / RE-AUDIT STARTED.

Standing next sequence after Footer remains:

Footer → Shop → Home
