# Step 4E-B2-R3-FIX3 · Mobile Duplicate Unit Price Validation

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
FIX3 exact file validation：Passed exactly.
Mobile duplicate unit price：Resolved.
Quantity / Update Cart subtotal behavior：Passed.
Horizontal overflow：No.
Native functional regression：Passed.
Final desktop/mobile strict visual acceptance：Reopened / not passed.
Next step：Step 4E-B2-R5-A1 final visual-gap and ownership audit.
Cart page status：Not done.
```

FIX3 is accepted only for its bounded purpose: removing the duplicate mobile unit-price display. It is not a final visual acceptance of the complete Cart page.

## Exact accepted CSS baseline

```text
File: assets/css/spatial-flow.css
Uploaded name: spatial-flow(10).css
Size: 813,887 bytes
Logical lines: 27,215
SHA256: 7f55a49bfd82f3c2e9fc5db9b5a37b209ac4bad9f6c0b4f99dcabe23a73643ae
Opening braces: 4,127
Closing braces: 4,127
Opening comments: 405
Closing comments: 405
CSS parser errors: 0
```

Marker counts:

```text
R2 START / END：1 / 1
FIX1 START / END：1 / 1
FIX2 START / END：1 / 1
FIX3 START / END：1 / 1
Cart Notice START：1
```

The uploaded file exactly matches the predicted FIX3 result.

## FIX3 screenshot result

Confirmed:

```text
- one monetary value per Cart item card
- first item quantity 2 produces a $66.00 line subtotal
- remaining item subtotals are $36.00 and $12.00
- Order Summary subtotal is $114.00
- Shipping is $8.99
- Total is $122.99
- Cart updated notice is readable
- quantity controls remain visible
- Coupon controls remain visible
- no horizontal overflow
```

This proves the remaining value is the real line subtotal.

## Final visual acceptance correction

Focused screenshots supplied after FIX3 confirm additional blocking defects:

```text
1. Order Summary trust-icon shells overlap or intrude into text on desktop and mobile
2. mobile remove controls display two × glyphs
3. desktop and mobile product thumbnails do not visually fill their allocated frames
4. desktop textual Remove action is covered by dynamic metadata
5. broader strict-1:1 proportions, spacing and typography remain incomplete
```

Therefore the earlier non-blocking classification of trust-icon alignment, item density and spacing is withdrawn.

Authoritative record:

```text
project2-progress/STEP_4E_B2_R5_A1_FINAL_VISUAL_GAP_AND_OWNERSHIP_AUDIT.md
```

## Unchanged PHP baseline

```text
functions.php
Version: 2.7.8
Size: 550,884 bytes
Lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
```

## Next rule

```text
- no additional append-only Cart visual snippet
- perform R5-A1 audit with no code changes
- fold all confirmed visual corrections into one canonical in-place R2 replacement
- validate that canonical block before deleting historical Cart CSS
```

No claim of `Completed 1:1` is permitted before canonical replacement, historical cleanup, backend-editability validation and final regression all pass.