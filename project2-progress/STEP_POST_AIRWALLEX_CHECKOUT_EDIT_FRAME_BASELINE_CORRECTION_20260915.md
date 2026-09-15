# Post-Airwallex Checkout Edit-Frame Baseline Correction — 2026-09-15

## Trigger
The user caught that the previously prepared Checkout edit-frame patch had been based on the wrong `checkout-safe5.css` baseline and reiterated the standing manual-replacement requirement.

## Canonical current Local file
The newly uploaded live file is authoritative for the next patch:

- file: `checkout-safe5.css`
- bytes: `150258`
- logical lines: `4942`
- SHA256: `c91ffeda26bd26d7d8a949b0a503fcf032315ea93e08fe49f7bf9e25dcdf2f72`

This matches the earlier accepted Source Gate identity from the Airwallex cleanup chain.

## Correction
The previously generated replacement file based on a smaller `checkout-safe5.css` baseline must NOT be used.

The Checkout edit-frame correction must be performed as a manual bounded replacement against the canonical 150,258-byte live file. The assistant must output the exact replacement block in chat with indentation preserved; do not substitute a generated whole-file download for the manual replacement workflow.

## Current target
In the canonical file, the Step03 edit-button presentation block is around logical lines 2324–2349 and currently covers:

- `.sf-safe5-context-address-edit`
- `.sf-safe5-context-section__edit`

The runtime markup confirms these are real `<button type="button">` controls for `Edit address →` and Shipping Method `Edit →`. The bounded fix should neutralize inherited Astra/Woo button chrome while preserving the intended address top divider and native button behavior.

## Standing execution rule reaffirmed
- manual replacement
- exact old block → exact new block
- preserve indentation
- verify returned source before runtime acceptance
- no whole-file replacement unless the verified full-file gate is explicitly chosen later

Status: BASELINE CORRECTED / READY FOR MANUAL PATCH.
