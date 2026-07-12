# Step 4E-B2-R3-A · Mobile Current-Baseline Audit

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Desktop FIX2：Passed exactly.
Initial mobile structure audit：Passed.
Initial mobile detail acceptance：Corrected after user review.
Duplicate unit-price defect：Resolved by FIX3.
Horizontal overflow：No.
Current mobile visual result：Passed.
Next executable step：Step 4E-B2-R5-A CSS ownership and cleanup audit.
Cart page status：Not done.
```

## Baselines

Pre-FIX3 audit baseline:

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(9).css
Size: 813,392 bytes
Logical lines: 27,205
SHA256: caacee43d3cd938ed19674beae6bb7e570d891963bde410f4f8aa272a397c4b8
```

Current accepted baseline:

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(10).css
Size: 813,887 bytes
Logical lines: 27,215
SHA256: 7f55a49bfd82f3c2e9fc5db9b5a37b209ac4bad9f6c0b4f99dcabe23a73643ae
Braces: 4,127 / 4,127
Comments: 405 / 405
CSS parse errors: 0
```

Unchanged PHP:

```text
functions.php
Version: 2.7.8
Size: 550,884 bytes
Lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
```

## Corrected audit history

The original mobile screenshot proved the main one-column structure was stable but also showed both the unit-price cell and subtotal cell. The first audit failed to call out that duplicate-looking price. The user correctly reopened the visual audit.

FIX3 then added one phone-only stronger selector that hides only `td.product-price` while retaining `td.product-subtotal`.

## Current mobile result

The post-FIX3 screenshot confirms:

```text
- one-column Cart flow remains stable
- product cards stay inside the viewport
- circular remove controls remain visible
- quantity controls remain visible
- one monetary value remains per item card
- quantity 2 produces a $66.00 line subtotal
- Coupon controls stack without clipping
- Order Summary remains complete
- recommendations remain single-column
- Footer remains intact
- no horizontal overflow
```

## Non-blocking observations

```text
- mobile product names and metadata are compact
- Order Summary still uses a light inset title strip
- bottom spacing before Footer is slightly generous
```

These are logged for the consolidation phase. They do not justify another appended visual patch.

## Mobile design-quality rule

The V2 static references are guidance, not automatic mobile authority.

```text
1. preserve native WooCommerce behavior and real dynamic data
2. prevent overflow, clipping, overlap and unusable controls
3. preserve the Spatial Flow visual language
4. use professional judgment for spacing, readability, hierarchy and touch targets
5. follow the static mobile reference only where it is actually well designed
```

A later focused mobile aesthetic re-audit remains required for Shop archive and Single Product.

## Next step

```text
Step 4E-B2-R5-A · Cart CSS ownership and cleanup audit
Instruction：project2-progress/STEP_4E_B2_R5_CART_CSS_CONSOLIDATION_PLAN.md
Mode：no code changes
```

No further Cart visual snippet may be appended as routine refinement.