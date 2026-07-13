# Step 4E-B2-R5-B · Canonical Cart CSS In-Place Replacement

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-A1 visual-gap / ownership audit：Complete.
R5-B canonical CSS：Generated and parser-validated.
User manual replacement：Pending.
Historical Cart CSS deletion in this step：Forbidden.
Cart page status：Not done.
```

## 1. Purpose

Replace the complete temporary `R2 + FIX1 + FIX2 + FIX3` Cart layer **in place** with one canonical Cart presentation block.

This is not another append-only patch and it is not a whole-file replacement.

The canonical block is designed to:

```text
- preserve the accepted desktop 7fr / 5fr frame
- preserve the production-quality one-column phone flow
- fix trust-icon shell / text overlap on desktop and mobile
- fix the double × mobile remove control
- make thumbnail td / anchor / img own one explicit slot per breakpoint
- give desktop Remove its own row below dynamic metadata
- integrate the Order Summary heading into the beige panel on every breakpoint
- normalize Coupon, totals, buttons, recommendations and responsive spacing
- preserve real WooCommerce data and all native Cart behavior
```

## 2. Authoritative baseline

```text
File: assets/css/spatial-flow.css
Uploaded baseline: spatial-flow(10).css
Size: 813,887 bytes
Logical lines: 27,215
SHA256: 7f55a49bfd82f3c2e9fc5db9b5a37b209ac4bad9f6c0b4f99dcabe23a73643ae
Opening / closing braces: 4,127 / 4,127
Opening / closing comments: 405 / 405
CSS parser errors: 0
```

Unchanged PHP baseline:

```text
functions.php
Version: 2.7.8
Size: 550,884 bytes
Lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
```

If the local CSS no longer matches this baseline, stop and supply the newest file before replacing anything.

## 3. Exact range being replaced

Current range metrics:

```text
Size: 46,765 bytes
Logical lines: 1,470
SHA256: de89193566e99219e74f34f1c5e3ede018c7c0e81ca1bc35e166fc334fa80414
Braces: 209 / 209
Comments: 8 / 8
```

START marker:

```css
/* === Step 4E-B2-R2 · Cart V2 Consolidation Layer START ===
```

END marker:

```css
/* === Step 4E-B2-R2 · Cart V2 Consolidation Layer END === */
```

Select from the first `/` of the START marker through the final `/` of the END marker.

Do **not** select the blank line after the END marker.

The protected next marker must remain:

```css
/* === Step 4E Cart Notice Toast START ===
```

## 4. Independent rollback first

Before replacing, save the complete selected range as:

```text
R5-B-rollback-current-R2-FIX-stack.css
```

Exact rollback range metrics:

```text
Size: 46,765 bytes
Logical lines: 1,470
SHA256: de89193566e99219e74f34f1c5e3ede018c7c0e81ca1bc35e166fc334fa80414
```

Rollback means restoring only this bounded range at the same location. Do not overwrite the complete stylesheet as the default rollback.

## 5. Canonical replacement artifact

Use the bounded artifact supplied with these instructions:

```text
R5-B-canonical-cart-block.css
```

Exact canonical block metrics:

```text
Size: 44,703 bytes
Logical lines: 1,343
SHA256: 4ea330724a30edfd5801ff7e22d4756ba06955210fe7bc7f325ce9dcec79111b
Braces: 156 / 156
Comments: 16 / 16
CSS parser errors: 0
```

Its markers are:

```css
/* === Step 4E-B2-R5-B · Canonical Cart Presentation START ===
...
/* === Step 4E-B2-R5-B · Canonical Cart Presentation END === */
```

Paste the complete canonical block exactly where the old R2/FIX range was removed.

Do not paste it at the bottom of the file and do not retain the old R2/FIX range beside it.

## 6. Required final boundary

After replacement, the boundary must read:

```css
/* === Step 4E-B2-R5-B · Canonical Cart Presentation END === */

/* === Step 4E Cart Notice Toast START ===
```

Expected marker counts:

```text
Canonical START / END：1 / 1
Old R2 START / END：0 / 0
FIX1 START / END：0 / 0
FIX2 START / END：0 / 0
FIX3 START / END：0 / 0
Cart Notice START：1
```

## 7. Expected complete stylesheet result

When the exact baseline and newline state are preserved:

```text
Size: 811,825 bytes
Logical lines: 27,089
SHA256: 23d8703b13e51f5a61def505431beff97ca9bbcf78abe08d74b5ee9a1de2e1bb
Opening / closing braces: 4,074 / 4,074
Opening / closing comments: 413 / 413
CSS parser errors: 0
Delta: -2,062 bytes / -126 logical lines
```

No PHP, JavaScript, WooCommerce template, plugin, database or version change is expected.

## 8. First browser gate

After saving, force-refresh the Cart and check desktop and phone before any historical deletion.

Blocking defects that must be resolved:

```text
1. trust icons remain inside a compact 20px desktop / 22px mobile column
2. trust icons do not overlap headings or body copy
3. each mobile remove control shows exactly one ×
4. desktop Remove appears on its own line below metadata
5. desktop and phone thumbnails fill their allocated slots
6. mobile Order Summary title has no white inset strip
```

Structural checks:

```text
- desktop frame remains centered and uses left items / right summary
- phone remains one-column with no horizontal overflow
- Coupon controls remain usable
- four real recommendation products remain present
- Header and Footer remain unchanged
```

Native checks:

```text
- quantity plus/minus and Update Cart
- remove and Undo / Restore
- invalid Coupon path
- Change address / shipping refresh
- Proceed to Checkout / SAFE5 Checkout
- Continue Shopping
- recommendation links
```

## 9. Required evidence

Upload the edited `spatial-flow.css` for exact validation and provide:

```text
1. desktop Cart screenshot containing items, Order Summary and recommendations
2. phone Cart screenshot containing item remove controls, Summary trust rows and recommendations
3. text confirmation that native controls remain functional
```

Do not begin R5-C historical deletion until this canonical replacement passes exact file, desktop, mobile and functional validation.
