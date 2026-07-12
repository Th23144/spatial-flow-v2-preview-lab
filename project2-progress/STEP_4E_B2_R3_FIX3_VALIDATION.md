# Step 4E-B2-R3-FIX3 · Mobile Duplicate Unit Price Validation

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
FIX3 exact file validation：Passed exactly.
Mobile duplicate unit price：Resolved.
Quantity / Update Cart subtotal behavior：Passed by screenshot and user confirmation.
Horizontal overflow：No.
Native functional regression：Passed.
Cart page status：Not done.
Next step：Step 4E-B2-R5-A CSS ownership and cleanup audit.
```

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

## Mobile screenshot result

The supplied mobile screenshot shows:

```text
- one monetary value per Cart item card
- first item quantity is 2 and its remaining line subtotal is $66.00
- second item subtotal is $36.00
- third item subtotal is $12.00
- Order Summary subtotal is $114.00
- Shipping is $8.99
- Total is $122.99
- Cart updated notice is readable
- quantity controls and circular remove controls remain visible
- Coupon controls remain visible
- Order Summary, buttons and trust rows remain complete
- recommendation cards remain single-column
- no horizontal overflow
```

This confirms the remaining value is the real line subtotal, not a hidden or duplicated unit-price display.

## Non-blocking visual observations

```text
- the mobile Order Summary title still uses a light inset title strip inside the beige panel
- product name and metadata density remain compact on narrow screens
- the final spacing between recommendations and Footer is somewhat generous
```

These are not grounds for another append-only patch. They must be considered during the controlled consolidation/replacement phase.

## Unchanged PHP baseline

```text
functions.php
Version: 2.7.8
Size: 550,884 bytes
Lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
```

## Next rule

No additional Cart CSS snippet may be appended merely for visual refinement.

The next operation is an audit-only step that maps current R2 ownership against the legacy Cart stack before any replacement or deletion is issued.