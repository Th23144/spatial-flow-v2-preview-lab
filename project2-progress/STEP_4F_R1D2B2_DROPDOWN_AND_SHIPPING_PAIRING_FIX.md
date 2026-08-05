# Step 4F · R1-D2B2 Dropdown and Shipping Pairing Fix

Date: 2026-08-05
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Current baseline

```text
assets/css/checkout-safe5.css
44,163 bytes
1,297 lines
SHA256: f03ebf5fd4f3e3cd01ccdad121d98349b1e116c386ce347294e6d39b1a99e5c1
CRLF
no final newline
```

## Confirmed blockers

1. Select2/SelectWoo dropdown is appended outside `.sf-safe5-checkout`; inherited custom properties therefore resolve incorrectly and the menu becomes transparent/bleeds through. The open container also lacks a reliable Checkout-safe stacking layer.
2. Native Shipping DOM order is City → State → Postcode, unlike the intended visual pairing. Column assignment alone produces City | blank and State | Postcode.

## Bounded implementation

Only `assets/css/checkout-safe5.css` changes.

- Replace the desktop field-pair block with separate Billing rules plus explicit Shipping visual order.
- Pair Shipping City with Postcode.
- Place Shipping State on the next full-width row when no native Shipping phone exists.
- Pair Shipping State with Phone only when `#shipping_phone_field` exists.
- Replace the open Select2 surface block with literal fallback colors, opaque results surfaces, explicit z-index/isolation, and readable selected/highlighted states.

No PHP, JavaScript, WooCommerce field ownership, Step 02, Step 03, Summary, or Crypto changes.

## Reconstructed target

```text
45,647 bytes
1,355 lines
SHA256: 419f37c5f106ed740e46f0daf3e0367f101d0993f16b5cce25f3ab22ff9bf965
Braces: 167 / 167
Comments: 17 / 17
CSS parse errors: 0
CRLF
no final newline
```

## Focused runtime evidence after source audit

```text
1. Desktop Country dropdown open
2. Phone Country dropdown open
3. Desktop different-shipping-address expanded, including City/Postcode/State and Optional note start
4. Phone different-shipping-address expanded over the same range
```

No full seven-image rerun unless these focused states expose a new real defect.

## Shared geometry boundary

The overall Checkout frame mismatch is separate from these two D2B2 blockers but remains inside R1. After D2B2 closes, shared max width, grid ratio, inter-column gap, and vertical shell spacing must be corrected before Step 02 final visual migration.

Status:

```text
D2B2: open
Shared R1 geometry: open
Step 02: blocked
Checkout: Not done
```
