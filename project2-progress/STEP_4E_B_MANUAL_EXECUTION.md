# Step 4E-B · Manual Staged Cart Execution Protocol

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-A audit：Complete.
Whole-file Cart candidate：Withdrawn / Do not apply.
Step 4E-B0 exact manual map：Complete.
Step 4E-B1-A through B1-H：Passed.
Step 4E-B2-A1 deletion：Executed exactly but rejected after browser collapse.
Step 4E-B2-A1 rollback：Passed exactly at browser and file levels.
Step 4E-B2-R1 dependency re-audit：Complete.
Step 4E-B2-R2 consolidation instructions：Issued / user insertion pending.
Old B2-A2 deletion-first continuation：Withdrawn permanently.
Cart page status：Not done.
```

## Current authoritative records

```text
project2-progress/STEP_4E_B0_MANUAL_MAP.md
project2-progress/STEP_4E_B1_H_VALIDATION.md
project2-progress/STEP_4E_B2_A1_REMOVE_LEGACY_CART_BASE_CSS.md
project2-progress/STEP_4E_B2_A1_FAILURE_AND_ROLLBACK.md
project2-progress/STEP_4E_B2_A1_ROLLBACK_VALIDATION.md
project2-progress/STEP_4E_B2_R1_CART_CSS_DEPENDENCY_REAUDIT.md
project2-progress/STEP_4E_B2_R2_CART_CONSOLIDATION.md
project2-progress/snippets/STEP_4E_B2_R2_CART_CONSOLIDATION.css
```

The failure-and-rollback records supersede the prior deletion-first B2 plan.

## Non-negotiable execution rule

```text
- no ZIP or complete replacement file as the implementation method
- no blind overwrite of functions.php or spatial-flow.css
- no combined PHP + CSS operation
- no later substep before the previous file is re-read or exact metrics are verified
- no Cart template override
- no Cart-specific JavaScript unless a real native interaction defect is proved
- no large structural CSS deletion before a validated replacement owns the same layout responsibility
- no deletion in the same operation that first introduces the replacement structure
```

Every executable operation must include exact anchors, expected delta, parser/balance checks, visible expectation, independent rollback and required evidence.

## Current PHP baseline

```text
File: functions.php
Uploaded name: functions(12).php
Version: 2.7.8
Size: 550,884 bytes
Lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
PHP syntax: Passed
Braces: 1,200 / 1,200
```

PHP remains unchanged in B2-R2.

## Current accepted CSS baseline

```text
File: assets/css/spatial-flow.css
Uploaded name: spatial-flow(6).css
Size: 767,120 bytes
Lines: 25,744
SHA256: 675ecd3acea94f263ab9ec9b5b02c413ea19f831a0eb18a0ba7e0523d0aab76a
Braces: 3,918 / 3,918
Comments: 397 / 397
CSS parse errors: 0
```

Exact comparison:

```text
spatial-flow(6).css == accepted spatial-flow(4).css byte-for-byte：True
Different bytes：0
```

## Rejected B2-A1 output

```text
Uploaded name: spatial-flow(5).css
Size: 731,426 bytes
Lines: 24,531
SHA256: ff341433f0b57881da4962028e5242fa1f5b56fdc40e3c08d7222811870a3487
Braces: 3,764 / 3,764
Comments: 368 / 368
CSS parse errors: 0
Browser result: Failed
```

The rejected output exactly matched the requested deletion. The user made no editing error.

## Dependency re-audit result

The accepted CSS contains 15 named Cart visual blocks totaling approximately:

```text
3,780 lines
117,124 bytes
456 rule/media braces
37 media-query declarations
```

Current desktop/mobile behavior is produced by cascade interaction across those layers. Critical structure is shared across the old and later blocks, so another deletion-first batch is prohibited.

## Current executable step

### Step 4E-B2-R2 · Complete scoped Cart V2 consolidation layer

```text
Mode：insertion only; deletion forbidden.
File：assets/css/spatial-flow.css only.
Snippet：project2-progress/snippets/STEP_4E_B2_R2_CART_CONSOLIDATION.css
Instruction：project2-progress/STEP_4E_B2_R2_CART_CONSOLIDATION.md
Scope：body.woocommerce-cart on every selector.
Insertion point：immediately before /* === Step 4E Cart Notice Toast START ===
Expected size：800,578 bytes.
Expected lines：26,828.
Expected SHA256：4c66fe5b092ced93b198fafe22af6d70e89ffc6064b6cb52b2d7ead8c30f6328.
Expected braces：4,063 / 4,063.
Expected comments：399 / 399.
Expected parser errors：0.
```

Required ownership:

```text
desktop frame/grid
table product rows and columns
action row
Order Summary and shipping
Continue Shopping
four trust entries
mobile rows and controls
recommendation breakpoints
empty-cart state
```

Required evidence after manual insertion:

```text
- edited spatial-flow.css
- desktop Cart screenshot
- mobile Cart screenshot
- native quantity/remove/coupon/shipping/checkout/continue-shopping confirmation
- Header/Footer/Shop/Single Product/SAFE5 Checkout no-regression confirmation
```

Do not remove any old Cart CSS until B2-R2 passes exact file, desktop, mobile and native functional validation.