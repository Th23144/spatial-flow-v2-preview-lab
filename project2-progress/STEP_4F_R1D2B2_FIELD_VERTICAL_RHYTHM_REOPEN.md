# Step 4F · Reopen R1-D2B2 for Step 01 Field Vertical Rhythm

Date: 2026-08-06  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User evidence

The user supplied a side-by-side comparison:

```text
Figure 1: accepted Checkout reference page
Figure 2: current live Step 01 page after shared R1 shell geometry correction
```

The comparison exposes a remaining strict 1:1 mismatch inside the Step 01 native field grid.

## Confirmed mismatch

The live page compresses the vertical distance between several consecutive field rows. The most visible cases are:

```text
First name / Last name -> Country / Region
Country / Region -> Street address
Town / City / ZIP -> State / Phone
```

In the reference, each field row has a clearly separated label/control rhythm before the next row begins. In the live page, the next row label sits substantially closer to the preceding control, producing a vertically compressed form.

The already-fixed Address line 1 / Address line 2 gap is a separate special case and does not prove the whole field-grid rhythm is correct.

## Correct scope classification

```text
Owner: R1-D2B2 Step 01 field geometry / vertical rhythm
Not owned by: shared R1 shell width and column geometry
Not owned by: Step 02 Shipping V2
```

The shared shell group changed:

```text
page max width
column ratio
inter-column gap
outer shell padding
responsive breakpoints and gutters
```

It did not own the internal vertical spacing between WooCommerce field rows.

## Status correction

The previous D2B2 closure omitted this strict visual check. Therefore:

```text
Shared R1 shell geometry: remains completed and closed
R1-D2B2 field vertical rhythm: reopened as one bounded defect
Step 02 Shipping V2: blocked until this defect is corrected
Checkout: Not done
```

## Interaction with page width

The field-row spacing is vertical and is controlled independently from the shared horizontal frame. Correcting the outer shell width does not automatically enlarge the field-row margin.

The shared width correction is already installed and accepted. A subsequent field-rhythm correction must be measured against that final width, so there is no later width phase that should compound the vertical spacing.

Text wrapping may change a section's total height at different widths, but fixed field-row spacing values must remain independently aligned to the reference.

## Required next action

Do not blindly add another margin rule, because the current stylesheet already contains nominal field-row margin declarations. First determine why those declarations are not producing the reference track spacing in the live CSS Grid.

Then apply one bounded correction in `assets/css/checkout-safe5.css` and validate:

```text
1. 1366px Step 01 field area
2. 390px Step 01 field area
3. 360px Step 01 field area
```

The correction must preserve:

```text
accepted shared shell geometry
field heights and icons
Billing desktop pairing
phone single-column behavior
Address line 1 / line 2 gap
Select2 open and closed states
alternate Shipping expansion
```
