# Project 2 · Step04 Strict 1:1 Cascade Fix · Source Validation PASS · 2026-08-26

## Scope

User returned the two manually edited live-source files for the Step04 strict 1:1 cascade-fix batch:

- `functions.php`
- `assets/css/spatial-flow.css`

This validation checks only the bounded Step04 cascade-fix batch previously issued. No further live-site code was modified by this record.

## functions.php

Returned fingerprint:

```text
bytes: 612013
logical lines: 11689
SHA256: ef28d7c51ec8e03649b75a2f1183420e14d1a9c139568353f9509673739770ed
SPATIAL_FLOW_CHILD_VERSION: 2.7.16
PHP syntax: PASS
```

Validation:

- expected version `2.7.16` occurs exactly once
- old version `2.7.15` no longer occurs
- file size and line count exactly match the expected bounded candidate
- PHP parser reports no syntax errors

Result: PASS.

## spatial-flow.css

Returned fingerprint:

```text
bytes: 587405
logical lines: 20635
SHA256: 307958483ead674b91799908d5e64b3a4407154cc0fd1d394354dac4fdc013f8
{ / }: 3281 / 3281
/* / */: 275 / 275
tinycss2 parse errors: 0
```

The returned CSS exactly matches the expected bounded candidate fingerprint.

Confirmed replacement ownership:

1. Step04 outer Woo wrapper now uses `margin: 0 !important; padding: 0 !important;`, removing the legacy top/bottom wrapper bands from the current Step5F owner block.
2. `result-panel` is now owned by the Step04 production selector and explicitly restores the static-reference transparent/no-card surface.
3. `result-order-table` now uses a sufficiently specific Step04 production selector to override the older global `.woocommerce-checkout table.shop_table` radius/background layer.
4. Billing/shipping address body copy now uses the Step04 production selector and locks the static-reference 11px typography instead of inheriting the older 14px Woo customer-details rule.

No CSS parser/brace/comment imbalance was introduced.

Result: PASS.

## Current status

```text
Step04 strict 1:1 cascade-fix source deployment: PASS
Runtime visual revalidation: REQUIRED
```

Next runtime evidence is intentionally narrow. Do not rerun the full Step04 status matrix. Capture only:

- Confirmed / Processing desktop full page
- Confirmed / Processing mobile 390x844 full page
- Pending desktop full page
- Pending mobile 390x844 full page

Compare these against the locked S7 Step04 static reference. After those four captures are reviewed, either close strict 1:1 or isolate any remaining concrete delta owner.
