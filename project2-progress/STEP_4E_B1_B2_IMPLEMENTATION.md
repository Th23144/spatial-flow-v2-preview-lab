# Step 4E-B1/B2 · Controlled Cart PHP/CSS Rebase Candidate

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`  
Source baseline: current local `functions.php`, `assets/css/spatial-flow.css`, and unchanged `assets/js/spatial-flow.js`

## Status

```text
Whole-file replacement candidate：Withdrawn / Do not apply.
Candidate applied to user's local site：No.
Step 4E-B manual implementation：Not started.
Cart page status：Not done.
```

The generated ZIP and full-file candidates must not be used as implementation instructions. They remain only as an internal comparison artifact showing one possible end state and its static checks.

The user rejected the delivery method because replacing two very large files blindly creates an unnecessarily large rollback surface and makes it difficult to verify exactly what changed. That objection is correct and now governs the next execution path.

Current authoritative execution record:

```text
project2-progress/STEP_4E_B_MANUAL_EXECUTION.md
```

## 1. Original input baselines

```text
functions.php
Version: 2.7.7
Size: 547,386 bytes
Lines: 10,162
SHA256: 4a0e6d7ee048398afb782c576626543f0ee67d44f37523ec3db9bd75c7ce12b2
PHP syntax: Passed

assets/css/spatial-flow.css
Uploaded name: spatial-flow(2).css
Size: 767,069 bytes
Lines: 25,742
SHA256: a8db33e2cd3e7886a12a455383fe6769cbd262e7e6d6fac8003aa46fe641a10d
CSS parser errors: 0

assets/js/spatial-flow.js
Size: 70,828 bytes
Lines: 1,995
SHA256: 6eef5c2cc215c604a2a2cfee38e51e6623897b283f5af996680e6351362873d3
JavaScript syntax: Passed
```

## 2. Withdrawn candidate metrics

These figures explain why blind replacement was not acceptable.

```text
Candidate functions.php
Version: 2.7.8
Size: 548,574 bytes
Lines: 10,208
SHA256: 8352a16cebdc1fd24728ccf7006b549ff8ec548722254afabeb040a8fc5273e3
Delta: +1,188 bytes / +46 lines
PHP syntax: Passed

Candidate assets/css/spatial-flow.css
Size: 676,667 bytes
Lines: 22,983
SHA256: 4e7d1012e449ae9a10fab5c8bbcac40a9e17db53eda504d3f6780532a23a6501
Delta: -90,402 bytes / -2,759 lines
CSS parser errors: 0
```

The CSS reduction came from replacing the large historical Cart patch stack as one range. Static balance checks passed, but that does not make a blind whole-file replacement operationally safe.

## 3. What the candidate attempted

The candidate attempted to:

```text
- add backend-editable Cart heading/count/summary fields
- replace the old rounded intro card with a target-aligned heading/count block
- move Continue Shopping beside the native checkout action
- remove the duplicate frontend service-card row while preserving saved settings
- retain one editable summary trust set
- preserve product-level _sf_cart_item_meta
- avoid fabricated Cart-only product context
- expand recommendations from 3 to 4 real WooCommerce products
- remove dead fake recommendation defaults
- omit invented recommendation labels/descriptions
- replace the historical Cart CSS stack with one controlled target block
- preserve native WooCommerce Cart operations and the separate notice block
```

These goals remain subject to staged manual implementation. The withdrawn files are not authority for what should be pasted.

## 4. Correct implementation rule

From this point forward:

```text
1. No downloadable whole-file replacement package for Cart.
2. No instruction to overwrite functions.php or spatial-flow.css blindly.
3. Work in small, named substeps.
4. For every substep, provide exact file, anchor text, old range, new range, and expected delta.
5. User performs the edit manually.
6. User returns the edited file or confirms exact size/line count.
7. Re-read and validate before proceeding to the next substep.
8. Browser-check the affected surface before any broad cleanup.
9. Large CSS deletion/consolidation must be split from visual insertion and verified between operations.
10. Keep a simple rollback instruction for every substep.
```

## 5. Next safe step

```text
Step 4E-B0 · Manual execution map and exact replacement boundaries.
```

This step must not change code. It will divide the work into individually reviewable operations, expected in this order:

```text
B1-A  PHP: add only the new editable Cart settings.
B1-B  PHP: add the new heading/count renderer without removing legacy output.
B1-C  PHP: switch hooks only after the new renderer is verified.
B1-D  PHP: move Continue Shopping through a separate exact hook change.
B1-E  PHP: recommendation cleanup and 4th product support as a separate change.
B2-A  CSS: identify and remove one exact obsolete Cart range; validate intermediate file.
B2-B  CSS: insert one controlled Cart target block at a fixed marker; validate again.
B2-C  Browser visual pass before any additional cleanup.
B3    Functional and cross-page regression.
```

The exact grouping may be narrowed further after the current source ranges are re-read.

## 6. Hard boundaries

```text
- No Cart template override.
- No Cart-specific JavaScript unless a real native interaction defect is proven.
- No payment, order, email, or SAFE5 Checkout redesign.
- No hardcoded products, prices, totals, shipping methods, coupon values, or checkout URL.
- Preserve WooCommerce quantity, remove, coupon, update-cart, shipping, totals, notices, nonces, and checkout behavior.
- Preserve existing backend-editable fields and saved theme_mod values.
```

## 7. Conclusion

```text
The full-file candidate is withdrawn and must not be applied.
No local production file was changed.
Step 4E-B will restart as a manual, staged, exact-range workflow.
Cart remains Not done.
```