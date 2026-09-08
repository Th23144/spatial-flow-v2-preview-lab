# Step 4D — Backend Editability Acceptance + Final Admin Manual Requirement — 2026-09-08

## User correction / acceptance policy
A frontend element that has been implemented as backend-editable must **not** be marked Passed/Closed merely because the frontend structure exists or because the empty-state renders correctly.

Before closing that item, the workflow must include:
1. tell the user exactly where the backend control is located;
2. have the user edit a real test value through the normal WordPress/WooCommerce admin UI;
3. save/update the product or setting;
4. verify the corresponding frontend location changes correctly;
5. verify clearing the value produces the intended empty/fallback behavior when relevant.

This applies immediately to B5 Hero Product Subtitle and future backend-editable Single Product fields.

## B5 correction
The Hero Product Subtitle frontend layer exists, but it is not yet visually/operationally accepted because the user had not been shown where to edit `Hero · Product subtitle` in WooCommerce Product Data → General, and no real backend-to-frontend edit test had been completed.

B5 therefore remains OPEN until that backend edit path is verified together with the remaining Hero metadata parity work.

## Final project deliverable requirement
Before Project 2 is considered fully handed off, produce a **very detailed backend operation manual mapped to frontend locations**.

The manual must, at minimum, document for every editable frontend area:
- frontend page / section / visible label;
- exact WordPress/WooCommerce admin navigation path;
- exact backend field/control name;
- whether the value is global, per-product, per-category, WooCommerce-native, or fallback-driven;
- what happens when the field is empty;
- recommended content format / length where relevant;
- whether the field affects desktop, mobile, or both;
- screenshots or clear visual location references where useful;
- special warnings for fields that must not be confused with similarly named controls;
- verification steps after editing.

Do not postpone discovering these mappings until the very end: record them as work progresses so the final manual can be assembled accurately.
