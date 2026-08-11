# Step 4F · Product Packaging · Runtime QA Entry

Date: 2026-08-11  
Status: A-D SOURCE ACCEPTED · RUNTIME QA STARTED · BATCH 6 STILL PAUSED

## Source gate passed

The coordinated live Product Packaging source set is source-audited:

- Part A `functions.php`: ACCEPTED
- Part B `woocommerce/checkout/form-checkout.php`: ACCEPTED
- Part C `assets/js/checkout-safe5.js`: ACCEPTED
- Part D `assets/css/checkout-safe5.css`: ACCEPTED

Accepted Part D identity:

```text
118,905 bytes
3,818 logical lines
SHA256 3f16c8cb31ab33be64257e36dee1b085e4ca76b313aa980d76a5e83348a077bd
CRLF
no final newline
braces 454 / 454
comments 24 / 24
CSS parser errors 0
```

Do not reopen source editing unless runtime QA produces a concrete defect.

## Runtime QA objective

Validate Product Packaging as a real WooCommerce Step-02 capability, not merely as a visual reproduction.

The runtime acceptance must prove:

1. Shipping remains native and functional.
2. Product Packaging appears after Shipping and before the existing Step-02 actions.
3. Standard/Gift top-level selection works in Together mode.
4. Standard optional name works when enabled.
5. Gift optional message works.
6. Separate creates one automatic product package per assignment unit.
7. Custom starts all units in Package 01 with remaining slots empty.
8. Custom item-centric assignment transfers unique ownership; no item can belong to two packages.
9. Empty package slots do not render as physical package rows and do not charge a fee.
10. Standard/Gift tier belongs to each active package group.
11. Gift fee is Woo/server-backed and equals configured fee × non-empty Gift groups.
12. Woo Order Summary and total update after fee-affecting changes.
13. Packaging state survives normal Woo `update_checkout` refreshes within Checkout.
14. Step 02 → Step 03 remains intact; payment gateway / terms / Place Order ownership is unchanged.
15. Desktop and mobile remain usable with no clipping, horizontal overflow or rejected B2-style over-compression.
16. Order persistence is tested only after the UI/totals checks pass: the created Woo order must preserve the Packaging plan and line-item assignment metadata.

## Manual QA sequence

Use a cart containing at least three assignment units. Preferred coverage:

- Product A ×1
- Product B ×1
- Product C ×1

or a cart where one product quantity is >1 so quantity-unit splitting is also exercised.

### QA-1 · Baseline / Together Standard

- Enter Checkout normally through the real customer flow.
- Complete Step 01.
- Enter Step 02.
- Confirm Shipping remains present and selectable.
- Confirm Product Packaging is directly below Shipping.
- Confirm Standard is selected for the single Together package by default.
- Confirm Gift fee is absent from Woo totals.
- Enter a Standard personalized name and confirm typing does not cause repeated disruptive Checkout refreshes.

### QA-2 · Together Gift

- Change the top package to Gift.
- Confirm Gift message field appears.
- Confirm Woo Order Summary gains exactly one Gift Packaging fee.
- Confirm total changes by exactly the configured per-package fee.
- Return to Standard and confirm the fee disappears.

### QA-3 · Separate

- Open separate packaging options.
- Choose `Package separately`.
- Confirm there is one active physical package row per assignment unit.
- Confirm each active package initially inherits the intended tier without duplicate membership.
- Change only one package to Gift.
- Confirm exactly one Gift fee is charged.
- Change a second package to Gift.
- Confirm exactly two Gift fees are charged.
- Open Details for Standard and Gift packages and verify their respective metadata inputs.

### QA-4 · Custom B semantics

- Choose `Custom grouping`.
- Confirm all assignment units start in Package 01.
- Confirm Package 02/03/etc exist as assignment targets but empty packages do not render as physical package rows.
- Move B to Package 02.
- Confirm B leaves Package 01 and appears only in Package 02.
- Move C to Package 03.
- Confirm A remains P1, B P2, C P3.
- Move B back to P1 and confirm P2 disappears as an active package row if empty.
- Confirm no `+ New package` control exists.

### QA-5 · Fee truth / update_checkout

- In Custom mode, set one non-empty package Gift: expect one fee.
- Set a second non-empty package Gift: expect two fees.
- Empty one of those Gift packages by moving its last item away: expect its fee to disappear.
- Change Shipping method if multiple methods exist, or otherwise trigger a normal Woo checkout refresh/address recalculation.
- Confirm Packaging assignments and active package tiers remain intact after refresh.

### QA-6 · Step continuity

- With a non-trivial Packaging plan active, click Continue to Payment.
- Confirm Step 03 loads normally.
- Confirm selected payment gateway behavior is unchanged.
- Confirm Terms/Privacy and the single native Place Order remain unchanged.
- Navigate Back to Step 02 and confirm Packaging state is still present.

### QA-7 · Mobile

Test at least 390px and 360px widths:

- Standard/Gift remain vertically readable.
- grouping modes are vertical, not three compressed phone columns.
- Custom item rows keep original-B spacing/readability.
- package assignment buttons remain tappable.
- active package rows do not overflow horizontally.
- Standard/Gift package-tier buttons and Details remain usable.
- no bottom/right clipping and no new horizontal page scroll.

### QA-8 · Order persistence (only after QA-1 through QA-7 pass)

Create one test order using a non-trivial Packaging plan, preferably:

```text
P1: A + B · Gift · message
P2: C · Standard · personalized name
```

Then verify in WooCommerce:

- charged Gift Packaging fee matches one non-empty Gift package;
- order contains `_sf_safe5_packaging_state`;
- order contains `_sf_safe5_packaging_plan`;
- order note contains the Product Packaging plan;
- order line items show Product packaging assignment metadata;
- payment/order status behavior remains normal for the selected test gateway.

## Stop conditions

Stop and report before proceeding if any of the following occurs:

- Checkout fatal/PHP error;
- Step 02 cannot reach Step 03;
- Woo total differs from Gift-group truth;
- assignments duplicate or disappear;
- Packaging state resets on `updated_checkout`;
- payment owner/Place Order changes unexpectedly;
- mobile becomes clipped or horizontally scrollable.

## Progress boundary

Passing source audit does NOT close Product Packaging.

Required sequence remains:

```text
A-D source audit ✅
→ Product Packaging runtime QA (CURRENT)
→ Packaging acceptance / corrections
→ Batch 6
→ Batch 7
→ Batch 9 Step 04
```
