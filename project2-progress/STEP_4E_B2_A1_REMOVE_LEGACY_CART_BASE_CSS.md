# Step 4E-B2-A1 · Remove Legacy Cart Base CSS Layers

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-B1-H：Passed.
Step 4E-B2-A1 instructions：Issued.
User manual CSS deletion：Pending.
New CSS insertion in this step：Forbidden.
Cart page status：Not done.
```

## 1. Purpose

Delete only the oldest Cart base and early corrective layers so the project can later insert one controlled Cart CSS implementation instead of continuing the historical patch stack.

This is a deletion-only operation.

```text
- do not insert replacement Cart CSS
- do not edit functions.php
- do not edit spatial-flow.js
- do not change SPATIAL_FLOW_CHILD_VERSION 2.7.8
- do not delete the next Cart Visual 2-D block
- do not delete the separate Step 4E Cart Notice Toast block
```

The Cart may look less finished after this deletion. That is an expected intermediate state. Native WooCommerce controls must remain usable.

## 2. Authoritative baseline

```text
File: assets/css/spatial-flow.css
Uploaded baseline name: spatial-flow(4).css
Size: 767,120 bytes
Lines: 25,744
SHA256: 675ecd3acea94f263ab9ec9b5b02c413ea19f831a0eb18a0ba7e0523d0aab76a
Opening braces: 3,918
Closing braces: 3,918
Opening comments: 397
Closing comments: 397
CSS parse errors: 0
```

Unchanged PHP baseline:

```text
functions.php
Uploaded name: functions(12).php
Version: 2.7.8
Size: 550,884 bytes
Lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
```

If the local CSS differs from the baseline above, stop and supply the newest CSS before deleting anything.

## 3. Exact deletion boundary

Current baseline line references:

```text
START marker line：3,628
END marker line：4,839
Following blank separator line：4,840
Next protected marker line：4,841
```

Line numbers are reference aids only. The markers are authoritative.

### START marker

```css
/* === Cart Visual 1 START ===
```

### END marker

```css
/* === Cart Visual 1.4.1 ACTION BUTTON OVERLAP FIX END === */
```

Delete everything from the first `/` of the START marker through:

```text
- the complete END marker
- the one immediately following blank line
```

Stop before this protected next marker:

```css
/* === Cart Visual 2-D PRODUCT META + COUPON ALIGNMENT + PRODUCT-LIKE COMPLETE CARDS START ===
```

After deletion, the local boundary must read exactly like this:

```css
/* === Single Product Visual 1 END === */

/* === Cart Visual 2-D PRODUCT META + COUPON ALIGNMENT + PRODUCT-LIKE COMPLETE CARDS START ===
```

Do not delete either of those two surviving markers.

## 4. Safe manual execution method

```text
1. Open assets/css/spatial-flow.css.
2. Search for the exact START marker.
3. Before deleting, copy the full selected range into a temporary local text file named B2-A1-deleted-range.txt.
4. Select from the START marker through the blank line immediately after the END marker.
5. Confirm the next visible line begins with the protected Cart Visual 2-D START marker.
6. Delete the selection once.
7. Save spatial-flow.css.
8. Do not paste any new Cart CSS in this step.
```

The temporary range copy is only an independent rollback aid. It is not a replacement theme file.

## 5. Expected deletion

```text
Deleted bytes：35,694
Deleted lines：1,213
Deleted opening braces：154
Deleted closing braces：154
Deleted opening comments：29
Deleted closing comments：29
```

## 6. Expected file result

When line endings and final-newline state remain unchanged:

```text
Size: 731,426 bytes
Lines: 24,531
SHA256: ff341433f0b57881da4962028e5242fa1f5b56fdc40e3c08d7222811870a3487
Opening braces: 3,764
Closing braces: 3,764
Opening comments: 368
Closing comments: 368
CSS parse errors: 0
Delta: -35,694 bytes / -1,213 lines
```

The predicted output was generated from the accepted `spatial-flow(4).css` baseline and parsed successfully with zero CSS errors.

## 7. Expected visible result

Because this removes an old Cart base layer before the remaining layers are removed and the new implementation is inserted, the Cart can change visually in this intermediate state.

Acceptable temporary effects include:

```text
- spacing, card surfaces, borders, or button styling becoming less polished
- some later Cart layers still partially styling the page
- the page no longer matching the V2 reference temporarily
```

Not acceptable:

```text
- missing product rows
- unusable quantity controls
- broken remove links
- broken Coupon or Update Cart controls
- missing totals or checkout button
- PHP warning/fatal output
- Header, Footer, Shop, Single Product, or SAFE5 Checkout structural regression
```

## 8. What must remain untouched

```text
- all CSS above /* === Single Product Visual 1 END === */
- the Cart Visual 2-D block beginning immediately after the deleted range
- later Cart Visual 2-D.4 through 2-E layers
- Cart Visual 3 recommendation layer
- Step 4E Cart Notice Toast
- Checkout CSS layers
- Header, Footer, Shop, and Single Product CSS
- functions.php
- spatial-flow.js
- WooCommerce templates
```

## 9. Independent rollback

Reinsert only the saved `B2-A1-deleted-range.txt` contents at this exact boundary:

```text
after:
/* === Single Product Visual 1 END === */

before:
/* === Cart Visual 2-D PRODUCT META + COUPON ALIGNMENT + PRODUCT-LIKE COMPLETE CARDS START ===
```

Do not restore or overwrite the complete CSS file as the default rollback.

## 10. Required validation before B2-A2

Upload the edited `spatial-flow.css` for exact validation of:

```text
- size
- line count
- SHA256
- brace balance
- comment balance
- CSS parser result
- START marker removed
- END marker removed
- protected Cart Visual 2-D START marker retained
```

Also report in text:

```text
Cart controls usable
Header/Footer/Shop/Single Product normal
SAFE5 Checkout normal
```

Screenshots are not required for this deletion-only intermediate step.

Do not begin Step 4E-B2-A2 until the edited CSS passes exact file validation.