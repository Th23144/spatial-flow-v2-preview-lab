# Step 4E-B2-R1 · Cart CSS Dependency Re-Audit

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Code changes：None.
Accepted restored CSS baseline：spatial-flow(6).css.
Dependency re-audit：Complete.
Next executable code step：B2-R2, complete scoped replacement layer first.
Cart page status：Not done.
```

## 1. Why the prior deletion failed

The old range from `Cart Visual 1` through `Cart Visual 1.4.1` was not merely obsolete presentation CSS. It still owned critical desktop structure that later hotfix blocks assumed already existed.

Deleting the range removed the effective wide Cart grid, table column sizing and action-row foundations before another layer had replaced those responsibilities. Later blocks then continued to override fragments of a missing base, producing the collapsed product table.

## 2. Accepted source baseline

```text
File: assets/css/spatial-flow.css
Uploaded name: spatial-flow(6).css
Size: 767,120 bytes
Lines: 25,744
SHA256: 675ecd3acea94f263ab9ec9b5b02c413ea19f831a0eb18a0ba7e0523d0aab76a
Braces: 3,918 / 3,918
Comments: 397 / 397
CSS parser errors: 0
```

This file is byte-identical to the accepted pre-B2-A1 `spatial-flow(4).css` baseline.

## 3. Existing Cart layer map

The accepted CSS contains 15 named Cart visual blocks before the separate notice block:

| Block | Lines | Approx. bytes | Main responsibility |
|---|---:|---:|---|
| Cart Visual 1 | 3628–4014 | 10,264 | Base table, totals, buttons, mobile cards |
| Cart Visual 1.1 | 4016–4115 | 2,758 | Desktop grid and mobile remove control |
| Cart Visual 1.2 | 4117–4238 | 3,862 | Width, column clipping, action row |
| Cart Visual 1.3 | 4240–4362 | 3,920 | Desktop stability fallback |
| Cart Visual 1.4 | 4364–4673 | 9,705 | Wide two-column desktop layout |
| Cart Visual 1.4.1 | 4675–4839 | 5,179 | Coupon/action overlap correction |
| Cart Visual 2-D | 4841–5229 | 11,648 | Product meta, action bar, recommendations |
| Cart Visual 2-D.1 | 5231–5514 | 8,551 | Intro/icon/base corrections |
| Cart Visual 2-D.2 | 5516–5945 | 13,524 | Coupon and recommendation container |
| Cart Visual 2-D.4 | 5947–6161 | 7,292 | Centering and coupon width corrections |
| Cart Visual 2-D.5 | 6164–6412 | 8,092 | Coupon flex and functional balance |
| Cart Visual 2-D.6 | 6415–6669 | 8,653 | Display-contents overlap correction |
| Cart Visual 2-D.8 | 6672–6968 | 9,989 | Stable coupon rollback and oval suppression |
| Cart Visual 2-E | 6971–7364 | 11,604 | Mobile compact rhythm |
| Cart Visual 3 | 7366–7425 | 2,083 | Real recommendation card adjustments |

Combined named Cart visual layers:

```text
Lines: 3,780
Approx. bytes: 117,124
Opening rule/media braces: 456
Media-query declarations: 37
```

A separate `Step 4E Cart Notice Toast` block remains near the end of the file and is outside this consolidation scope.

## 4. Dependency conclusion

The current visual result is produced by cascade interaction across multiple generations, not by one authoritative block.

High-risk shared responsibilities include:

```text
- .entry-content > .woocommerce desktop grid
- .woocommerce-cart-form width and card surface
- .cart-collaterals / .cart_totals width and sticky behavior
- table.shop_table.cart layout and fixed column widths
- td.actions display mode
- .coupon display: contents / flex / grid transitions
- Coupon input and Apply / Update button sizing
- mobile table-to-card transformation
- remove-button geometry
- recommendation grid breakpoints
```

Therefore selector-by-selector deletion cannot safely begin until one later scoped layer explicitly owns these responsibilities at all required breakpoints.

## 5. Revised implementation pattern

The next code operation must be a complete, scoped Cart consolidation layer inserted at one fixed marker before the existing Cart notice block.

```text
- no deletion in the same operation
- body.woocommerce-cart scope on every rule
- desktop, laptop/tablet and mobile responsibilities included together
- native WooCommerce markup and controls preserved
- no functions.php or JavaScript changes
- exact expected file metrics and parser validation
- browser validation before any legacy selector removal
```

This is not an indefinite append-only patch. It is a temporary authoritative replacement layer with an explicit later cleanup gate:

```text
1. Insert complete scoped layer.
2. Validate desktop, mobile and Cart functions.
3. Prove that the new layer owns each structural responsibility.
4. Remove legacy blocks in small independently reversible groups.
5. Revalidate after every removal.
```

## 6. Next step

```text
Step 4E-B2-R2 · Insert complete scoped Cart V2 consolidation layer
```

B2-R2 instructions are not yet issued in this record. The replacement block must first be generated against the exact restored baseline and statically validated before the user edits the CSS.
