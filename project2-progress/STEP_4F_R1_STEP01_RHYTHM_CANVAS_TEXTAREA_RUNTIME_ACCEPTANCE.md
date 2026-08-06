# Step 4F · R1 Step 01 Rhythm, Canvas and Textarea Runtime Acceptance

Date: 2026-08-06  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Evidence received

The user supplied the requested consolidated runtime screenshots:

```text
1. 1366px Step 01 from Contact through actions
2. 390px complete Step 01
3. 360px complete Step 01
```

The active source under test is the accepted CSS build:

```text
assets/css/checkout-safe5.css
47,050 bytes
1,399 lines
SHA256: 404bcbc408c33cd502019a623cd1bf1c483e974690b05aa486b297790d57bd16
```

## Accepted runtime results

### Warm Checkout canvas

The previous opaque white `#main.site-main` canvas is no longer visible. The Checkout content area now uses the intended warm `#f6f1eb` background at desktop, 390px and 360px.

Result: **PASS**.

### Desktop field rhythm

The normal Step-01 field transitions now visibly retain the intended separation rather than collapsing to zero:

```text
First/Last -> Country
Country -> Street address
Address line 1 -> Address line 2
Address line 2 -> City/ZIP
City/ZIP -> State/Phone
```

The layout remains paired on desktop and no field-order regression is visible.

Result: **PASS**.

### Mobile field rhythm

The 390px and 360px screenshots show consistent single-column spacing between native field rows. The prior compressed transitions are no longer present.

Result: **PASS**.

### Order notes textarea

The Order notes textarea now renders as a multiline surface at the intended visual height on desktop and mobile, instead of the previous one-line 56px surface.

Result: **PASS**.

### Mobile shipping-address checkbox rhythm

The checkbox follows the Phone field without the previous extra 14px internal top padding. It remains aligned and unobstructed at both mobile widths.

Result: **PASS**.

## Regression review

No regression is visible in the already accepted areas:

```text
1440px shared shell geometry
7fr / 5fr desktop columns
80px desktop column gap
1040px responsive stack logic
22px mobile gutter
Country/State closed field surfaces
single-column mobile fields
field icon alignment
alternate Shipping structure
button order
Order Summary placement
horizontal overflow
```

The alternate Shipping checkbox was not expanded in this batch, but the repair did not modify its order, column, Select2, or field-ownership rules. Its previously accepted runtime evidence remains authoritative.

## Strict 1:1 items still open

This runtime acceptance closes only the audited CSS repair group. It does **not** close D2B2 because the previously recorded Step-01 copy mismatches remain:

```text
Reference: Where should we write?
Current:   Where Should We Write?

Reference: Send it to this room.
Current:   Send It To This Room.

Reference: A practical detail.
Current:   A Practical Detail.

Reference: Back to Bag
Current:   Return to cart
```

The Delivery explanatory sentence also differs from the reference wording. These items require ownership review in PHP / JavaScript / editable copy sources rather than another CSS patch.

Order Summary internals, Step 02 Shipping V2, Step 03 Payment V2, notices, and result pages remain their planned later scopes and are not failures of this batch.

## Status

```text
Step-01 rhythm repair: accepted
Warm Checkout canvas: accepted
Order notes height: accepted
Mobile checkbox rhythm: accepted
D2B2: open for strict Step-01 copy alignment
Shared R1 geometry: remains closed
Step 02 Shipping V2: blocked until D2B2 copy alignment is resolved
Checkout: Not done
```
