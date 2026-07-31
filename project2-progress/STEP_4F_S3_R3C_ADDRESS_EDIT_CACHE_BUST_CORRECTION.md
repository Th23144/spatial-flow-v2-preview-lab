# Step 4F · S3-R3C · Step 03 Address Edit Cache-Bust Correction

Date: 2026-07-31

## User-observed issue

The approved `Edit address →` control was still rendered in the `Before it leaves.` title row instead of at the bottom of the address column, even though the Shipping Method text rhythm change had appeared.

## Root cause

The current repository HTML already places `.context-address-edit` after the address value, and the current Step-03 CSS already keeps it in normal document flow at the bottom of the address column. RawGit/browser delivery was still using the earlier cached context stylesheet that absolutely positioned the control in the title row.

## Exact correction

Only the Step-03 HTML stylesheet reference was cache-busted:

```html
spatial-flow-checkout-context-v1.css?v=20260731-0504
```

No layout, text, spacing, payment, Order Summary, Step 02, WordPress or WooCommerce behavior was changed in this correction.

## Locked result

- `Edit address →` remains at the bottom of the address column.
- Shipping Method text spacing remains the already-approved compressed version.
- Checkout remains `Not done`.
- Live Checkout remains untouched.
