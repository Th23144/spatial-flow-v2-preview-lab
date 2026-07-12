# Step 4E-B2-R3-A · Mobile Current-Baseline Audit

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Desktop FIX2：Passed exactly.
Initial mobile structure audit：Passed.
Initial mobile detail decision：Incorrectly accepted.
User-reported defect：Confirmed from submitted screenshot.
Horizontal overflow：No.
Mobile FIX3 required：Yes.
Next executable step：Step 4E-B2-R3-FIX3.
Cart page status：Not done.
```

## Purpose

Inspect the real mobile Cart produced by the accepted `spatial-flow(9).css` baseline before introducing a bounded mobile correction layer.

The project safety rule remains:

```text
- inspect the actual mobile output first
- do not guess defects from desktop evidence
- do not delete old Cart CSS
- use one independently reversible selector group for one bounded defect
```

## Exact baseline

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(9).css
Size: 813,392 bytes
Logical lines: 27,205
SHA256: caacee43d3cd938ed19674beae6bb7e570d891963bde410f4f8aa272a397c4b8
Braces: 4,125 / 4,125
Comments: 403 / 403
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

## Submitted mobile evidence

The user supplied one full mobile Cart screenshot containing:

```text
- mobile Header
- Your Bag heading and live count
- three Cart product cards
- visible quantity controls and circular remove controls
- Coupon / Apply Coupon / Update Cart
- full-width Order Summary
- Proceed to Checkout and Continue Shopping
- four trust rows
- recommendation heading and four recommendation cards
- complete mobile Footer
```

The user explicitly reported:

```text
Horizontal overflow：No.
```

## Corrected visual audit result

### Structure passed

```text
- one-column mobile Cart flow is stable
- product cards remain inside the viewport
- circular remove actions remain visible
- quantity controls remain visible
- Coupon controls stack without clipping
- Order Summary is full-width and non-sticky
- recommendations are single-column with no half-card exposure
- Footer remains intact
- no horizontal page overflow
```

### Detail defect confirmed

Each mobile Cart item shows two monetary lines beneath the quantity control:

```text
unit price
subtotal
```

With quantity 1 the values are identical, so the UI appears to duplicate the price.

This was visible in the original screenshot and should have been caught during the first audit. The earlier statement that no mobile FIX3 was justified is withdrawn.

## Root cause

An older mobile Cart rule re-enables `td.product-price` using a selector more specific than the global R2 hide rule. Desktop FIX2 already uses a stronger selector to suppress the same cell, but FIX2 is scoped to desktop only.

The mobile correction must hide only the unit-price cell and retain the subtotal cell.

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
Step 4E-B2-R3-FIX3 · Mobile duplicate unit-price removal
Instruction：project2-progress/STEP_4E_B2_R3_FIX3_MOBILE_DUPLICATE_PRICE.md
Snippet：project2-progress/snippets/STEP_4E_B2_R3_FIX3_MOBILE_DUPLICATE_PRICE.css
```

No historical Cart CSS may be deleted before FIX3 validation and final acceptance.