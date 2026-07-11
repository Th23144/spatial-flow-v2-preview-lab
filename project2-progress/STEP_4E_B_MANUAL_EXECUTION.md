# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-A audit：Complete.
Whole-file Cart candidate：Withdrawn / Do not apply.
Step 4E-B0 exact manual map：Complete.
Step 4E-B manual code implementation：Not started.
Next executable step：Step 4E-B1-A · PHP settings only.
Current local source of truth：User's unchanged local files.
Cart page status：Not done.
```

Authoritative exact-range map:

```text
project2-progress/STEP_4E_B0_MANUAL_MAP.md
```

## 1. Why this protocol exists

The withdrawn candidate changed two large files at once:

```text
functions.php: +1,188 bytes / +46 lines
spatial-flow.css: -90,402 bytes / -2,759 lines
```

Static checks passed, but blind whole-file replacement created an unacceptable rollback surface. All Cart work must now use manual, staged, exact-range operations.

## 2. Non-negotiable delivery rule

For Step 4E-B:

```text
- no ZIP or complete replacement file as the implementation method
- no blind overwrite of functions.php or spatial-flow.css
- no combined PHP + CSS operation
- no later substep before the previous file is re-read or exact metrics are verified
- no Cart template override
- no Cart-specific JavaScript unless a real native interaction defect is proved
```

Every executable instruction must include:

```text
Step name
Purpose
File
Current baseline version/hash
START anchor
END anchor
Exact delete/replace instruction
Exact inserted content
Expected size/line delta
Syntax/balance checks
Visible expectation
What must not change
Independent rollback
Evidence required before continuing
```

## 3. Current baselines

```text
functions.php
Version: 2.7.7
Size: 547,386 bytes
Lines: 10,162
SHA256: 4a0e6d7ee048398afb782c576626543f0ee67d44f37523ec3db9bd75c7ce12b2

assets/css/spatial-flow.css
Size: 767,069 bytes
Lines: 25,742
SHA256: a8db33e2cd3e7886a12a455383fe6769cbd262e7e6d6fac8003aa46fe641a10d

assets/js/spatial-flow.js
Size: 70,828 bytes
Lines: 1,995
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
```

If any local baseline has changed, the newest file must be supplied before instructions continue.

## 4. Staged implementation

### Step 4E-B0 · Exact manual map

```text
Status：Complete.
Code changes：None.
Record：project2-progress/STEP_4E_B0_MANUAL_MAP.md
```

### Step 4E-B1-A · PHP settings only

```text
Add only editable Cart heading/count/summary fields and the fourth fallback product selector.
Do not change frontend hooks or version.
```

### Step 4E-B1-B · New heading/count renderer only

```text
Add the renderer without hooking it.
Keep the old intro renderer and output unchanged.
```

### Step 4E-B1-C · Hook switch

```text
Unhook only the old intro output.
Hook only the validated new heading/count renderer.
Keep the legacy function/settings for rollback.
```

### Step 4E-B1-D · Continue Shopping move

```text
Add a backend-driven Continue Shopping renderer after the native checkout action.
Do not alter the native checkout button or URL.
```

### Step 4E-B1-E · Duplicate service row

```text
Unhook only the three-card service row.
Preserve its function and saved settings.
Keep the summary trust set.
```

### Step 4E-B1-F · Editable summary heading

```text
Change “Cart totals” only on the Cart page through the approved backend field.
No global translation or Checkout effect.
```

### Step 4E-B1-G · Recommendation safety and fourth product

```text
Remove exact dead sample defaults.
Use 4 real products.
Add/use the fourth backend fallback selector.
Omit invented recommendation label/description fallbacks.
Preserve real cross-sell/category/backend/latest priority.
```

### Step 4E-B1-H · Cart-only product-context fallback

```text
Cart must not fabricate generic product context.
SAFE5 Checkout retains prior behavior until its regression check passes.
```

### Step 4E-B2-A1 through B2-A5 · CSS deletion-only batches

```text
Delete the five exact historical Cart ranges documented in the B0 map.
Validate after every batch.
Do not insert new Cart CSS during deletion work.
Preserve the separate Step 4E Cart Notice Toast block.
```

### Step 4E-B2-B1 through B2-B3 · Controlled CSS insertion

```text
Insert three named blocks at the fixed gap between Single Product Visual 1 END and Checkout Visual Final START:
1. Cart core
2. Recommendations + empty Cart
3. Responsive rules
```

### Step 4E-B1-I · Version bump

```text
Change 2.7.7 to 2.7.8 only after controlled CSS insertion is ready.
```

### Step 4E-B2-C · Visual refinement

Only small exact selector replacements are allowed. No second broad Cart patch.

### Step 4E-B3 · Functional and regression acceptance

Required tests:

```text
Cart:
- 3 different products
- variable-product meta
- quantity change + Update Cart
- remove item
- valid/invalid/remove coupon
- shipping destination/rate
- totals refresh
- Continue Shopping
- Proceed to Checkout
- recommendation links
- sticky summary
- empty Cart
- Header BAG count

Mobile:
- no horizontal overflow
- quantity/remove/coupon/shipping/checkout usable
- totals in logical order

Regression:
- Header/Footer
- Shop
- Single Product
- SAFE5 Checkout product meta and notices
```

## 5. Rollback rule

Each substep must be independently reversible by restoring only its exact changed block or line. Full-file rollback is emergency-only.

## 6. Current next action

```text
Step 4E-B1-A only.
Do not begin B1-B or any CSS operation until B1-A is manually applied and revalidated.
```
