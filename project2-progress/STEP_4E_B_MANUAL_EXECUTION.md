# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-A audit：Complete.
Whole-file Cart candidate：Withdrawn / Do not apply.
Step 4E-B manual implementation：Not started.
Current local source of truth：User's unchanged local files.
Cart page status：Not done.
```

## 1. Why this protocol exists

The previously generated replacement package changed two very large files at once:

```text
functions.php: +1,188 bytes / +46 lines
spatial-flow.css: -90,402 bytes / -2,759 lines
```

Even though syntax and balance checks passed, asking the user to overwrite both files blindly created an unacceptable rollback surface. The project requires precise, reviewable, manually applied replacements instead.

## 2. Non-negotiable delivery rule

For Step 4E-B, the assistant must not provide a ZIP or complete replacement file as the primary implementation method.

Every code operation must use this format:

```text
Step name:
Purpose:
File:
Current baseline version/hash:
Find START anchor:
Find END anchor:
Delete/replace exactly:
Insert exactly:
Expected size/line delta:
Syntax/balance checks:
What should visibly change:
What must not change:
Rollback:
Evidence required before continuing:
```

No later substep begins until the previous edited file has been re-read or its exact output has been verified.

## 3. Staged execution map

### Step 4E-B0 · Exact manual map

```text
Code changes：None.
Goal：re-read exact PHP/CSS ranges and divide them into the smallest safe operations.
Output：manual instructions only, no downloadable replacement file.
```

### Step 4E-B1-A · PHP settings only

Expected scope:

```text
- add only approved backend-editable Cart heading/count/summary fields
- add fourth fallback product selector only if still required
- do not change frontend hooks
- do not change version until a frontend-affecting step is ready
```

Validation before continuing:

```text
- PHP syntax
- exact size and line count
- Customizer loads
- existing Cart frontend unchanged
- SAFE5 Checkout unchanged
```

### Step 4E-B1-B · New heading/count renderer only

Expected scope:

```text
- add a new renderer beside existing code
- use live WooCommerce cart contents count
- preserve old intro renderer and hook temporarily
- do not switch frontend output yet
```

Validation:

```text
- PHP syntax
- no duplicate frontend output because new renderer is not hooked yet
```

### Step 4E-B1-C · Hook switch

Expected scope:

```text
- remove only the old intro frontend hook
- add only the verified new heading/count hook
- keep legacy function/settings for rollback
```

Browser check immediately after this step.

### Step 4E-B1-D · Continue Shopping move

Expected scope:

```text
- add a dedicated backend-driven Continue Shopping renderer
- hook it after native Proceed to Checkout
- do not alter native checkout URL/button
```

Browser and link check immediately after this step.

### Step 4E-B1-E · Duplicate service row

Expected scope:

```text
- unhook only the three-card service row
- preserve its function and saved settings for rollback
- keep the summary trust set
```

Mobile distance-to-totals must be checked before continuing.

### Step 4E-B1-F · Recommendation safety and fourth product

Expected scope:

```text
- remove dead sample defaults only in their exact PHP range
- change current real-product output limit from 3 to 4
- add fourth backend fallback selector if required
- omit invented category/description fallback copy
- preserve real cross-sell/category/backend/latest priority
```

Validate product links, price, stock, and Cart exclusion.

### Step 4E-B2-A · CSS deletion-only pass

Expected scope:

```text
- identify exact obsolete Cart CSS blocks
- delete them in a controlled deletion-only operation
- do not insert the new target CSS in the same operation
```

Required intermediate validation:

```text
- exact size and line count
- brace/comment balance
- CSS parser
- Header/Footer/Shop/Single Product/Checkout quick regression
```

The site may look temporarily unstyled on Cart during this intermediate state; that is acceptable only when the deletion range has been proven and rollback is available.

### Step 4E-B2-B · Controlled CSS insertion

Expected scope:

```text
- insert one named Cart target block at one fixed marker
- no bottom-of-file patch
- preserve the separate WooCommerce notice block
- no unrelated selector cleanup
```

Required validation:

```text
- exact size and line count
- brace/comment balance
- CSS parser
- desktop first screen
- mobile first screen
```

### Step 4E-B2-C · Visual refinement

Only small, exact selector replacements are permitted after the main target block is visible. No second broad Cart block.

### Step 4E-B3 · Functional and regression acceptance

Required tests:

```text
Cart:
- 3 different products
- variable-product meta
- quantity change + Update Cart
- remove item
- valid coupon
- invalid coupon
- remove coupon
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
- quantity/remove/coupon/shipping/checkout remain usable
- totals appear in a logical order

Regression:
- Header/Footer
- Shop
- Single Product
- SAFE5 Checkout product meta and notices
```

## 4. Current baselines that must be checked before the first edit

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

If the current local files no longer match these baselines, the user must upload the newest files before any instruction is produced.

## 5. Rollback rule

Each substep must be independently reversible by restoring only the exact block changed in that substep. A full-file rollback must not be the default recovery plan.

## 6. Current next action

```text
Produce Step 4E-B0 exact manual replacement map from the unchanged local files.
Do not generate or recommend another complete replacement package.
Do not begin PHP or CSS editing until the map is reviewed.
```