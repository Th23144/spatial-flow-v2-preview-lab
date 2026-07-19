# Step 4E-B2-R5-E4-D · Complete Pre-Deploy Validation

Last updated: 2026-07-19  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
A1 breadcrumb defaults：Passed.
A2 breadcrumb Customizer controls：Passed.
A3 product-level recommendation exclusion field/save logic：Passed.
A4 Cart breadcrumb renderer：Passed.
A5 recommendation qualification/description/candidate-pool changes：Passed.
CSS B1–B4 warm canvas and breadcrumb presentation：Passed.
Pre-deploy source validation：Passed.
Deployment：Authorized for the two validated files only.
Cart page status：Not done.
```

## Validated PHP artifact

```text
Uploaded name: functions(17).php
Version: 2.7.8
Size: 555,130 bytes
Logical lines: 10,366
SHA256: ab7c9b1a893b2fdfaf8db7947fcf82974e8c1d71b54c8f0d17fe32029e5f5d86
Braces: 1,215 / 1,215
PHP syntax: Passed
Line endings: LF
Final newline: absent
```

Full-file comparison against accepted partial artifact `functions(16).php` confirms that only the intended A4 and A5 changes exist:

```text
- add spatial_flow_cart_v2_breadcrumb()
- hook breadcrumb at woocommerce_before_cart priority 5
- preserve existing heading at priority 6
- reject products marked _sf_cart_recommendation_excluded = yes
- reject products without a valid featured-image attachment URL
- remove generated unauthored recommendation marketing copy
- enlarge same-category candidate pool to max(24, remaining * 8)
- enlarge final candidate pool to max(24, remaining * 8)
```

No unrelated PHP section changed.

## Corrected PHP metric note

The earlier predicted target was:

```text
555,129 bytes / 10,365 logical lines
b101b33f6a327c53a2714855ec212bc6b973b3ea815acf619f832d2f407de458
```

That prediction represented the same code with one blank line omitted between the image-readiness guard and its following comment. The issued manual replacement included that blank line, and `functions(17).php` matches the issued code exactly. The extra blank line has no runtime effect and is accepted. No further PHP edit is required.

## Validated CSS artifact

```text
Uploaded name: spatial-flow(26).css
Size: 697,699 bytes
Logical lines: 23,389
SHA256: 1699ee8bfc66ab2dd4c9229b04f61be8ec92386493ac33665275bc9d91638e66
Braces: 3,633 / 3,633
Comments: 341 / 341
CSS parser errors: 0
Line endings: LF
Final newline: present
```

Full-file comparison against `spatial-flow(25).css` confirms that only B1–B4 exist:

```text
- assign the warm Cart canvas to Cart-scoped Astra/page wrappers
- add the Cart breadcrumb to the full-grid owner list
- add desktop breadcrumb presentation
- add phone breadcrumb calibration
```

The CSS matches the expected final hash exactly.

## Preserved scope

```text
assets/js/spatial-flow.js：unchanged
header.php：unchanged
WooCommerce templates：unchanged
Checkout SAFE5：unchanged
Cart geometry values：unchanged
Cart Notice block：unchanged
Header/Footer：unchanged
SPATIAL_FLOW_CHILD_VERSION：2.7.8 unchanged
```

## Authorized deployment

Replace only:

```text
functions.php <- functions(17).php
assets/css/spatial-flow.css <- spatial-flow(26).css
```

Do not replace or edit `assets/js/spatial-flow.js` in this deployment.

## Required backend action after deployment

```text
Natural Silver Obsidian Bracelet:
- simplest current action: enable “Exclude from Cart recommendations” and save
- later alternative: replace/crop the featured image, then disable the exclusion

Natural Malachite Mixed Bead Bracelet:
- no action required while it has no valid featured image; it will be excluded automatically
- adding a real featured image later restores eligibility unless the exclusion checkbox is enabled
```

## Required runtime gate

```text
1. Clear page/cache layers and reload Cart.
2. Confirm warm Cart canvas on desktop and phone.
3. Confirm HOME / YOUR BAG breadcrumb and working HOME link.
4. Confirm existing strict Cart geometry remains unchanged.
5. Confirm four recommendations are real, image-ready products when inventory permits.
6. Confirm no cube/package placeholder appears.
7. Confirm excluded products do not appear.
8. Confirm blank product descriptions remain blank instead of receiving generated claims.
9. Confirm quantity, remove, Undo, coupon, totals, shipping and checkout navigation still work.
10. Confirm both empty-Cart entry paths remain aligned.
11. Confirm Shop, Single Product and SAFE5 Checkout have no regression.
```

## Next sequence

```text
Deploy validated PHP/CSS
→ perform backend exclusion/image action
→ R5-E4-C4 strict desktop + phone visual rerun
→ R5-E5 Cart Notice in-place refinement
→ R5-E6 final strict functional + visual acceptance
→ binary Cart status decision
```
