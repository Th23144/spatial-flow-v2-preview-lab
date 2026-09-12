# Project 2 · Step 4D-REOPEN · Product Attributes / tablet-width drift confirmed · 2026-09-12

## Trigger
User supplied fresh live screenshot before making the pending Product Attributes mobile edit.

Viewport shown in DevTools:

```text
iPad Pro
1024 × 1366
```

## Fresh finding
The Single Product content shell is visibly constrained to a narrow centered column at this 1024px viewport instead of using the expected tablet-width content area.

This is a separate defect from the already-recorded Product Attributes 390px grid mismatch.

Reference behavior at <=1100px:
- product main becomes one column;
- content remains full-width within tablet gutters rather than collapsing to a phone-sized max-width shell;
- reference tablet gutter is 40px, implying roughly 944px usable width at a 1024px viewport before inner component constraints.

Fresh screenshot instead shows a much narrower centered storefront column, materially closer to a phone-width shell.

## Status

```text
TABLET WIDTH / OUTER SINGLE PRODUCT SHELL: FAIL / REOPENED
PRODUCT ATTRIBUTES 390px 1×4 vs 2×2: FAIL / PENDING
```

Do not issue the previously proposed Product Attributes-only edit yet. First audit the current source owners that constrain Single Product width between 768px and 1100px, then batch the width correction with the Product Attributes mobile-grid correction if they share CSS ownership.

## Boundaries
- no code edit authorized by this record;
- preserve accepted Hero Gallery behavior;
- preserve desktop wide layout;
- preserve true 390px mobile behavior except for already-identified Product Attributes grid drift;
- inspect current source before prescribing CSS.
