# Step 4F · R1-D2B2 Address-Line Spacing Defect and Reopen

Date: 2026-08-05  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. User-reported evidence

Before authorizing the Step-02 Shipping migration, the user supplied a desktop runtime screenshot and identified that the two native address inputs are visually attached.

Affected native rows:

```text
#billing_address_1_field
#billing_address_2_field
```

Visible defect:

```text
- Street address and Apartment / suite input borders directly touch
- the intended vertical field-row spacing is absent
- the two independent WooCommerce fields read as one stacked compound control
```

The second address line may correctly omit a separate visible label under WooCommerce conventions, but it must still retain independent vertical spacing.

## 2. Acceptance correction

The previous consolidated D2B2 runtime acceptance missed this defect.

Corrected classification:

```text
D2B2 source integrity: passed
D2B2 general visual migration: substantially installed
D2B2 address-line spacing: failed
D2B2 overall: reopened
Step-02 Shipping V2 migration: blocked
Checkout: Not done
```

The prior acceptance record remains historical evidence but is superseded on this point by this defect record.

## 3. Scope boundary

Authorized next work is limited to the smallest owner of spacing between the two native address rows.

```text
Allowed owner: assets/css/checkout-safe5.css
Do not change PHP
Do not change JavaScript
Do not clone or restructure WooCommerce fields
Do not start Step 02
```

The screenshot proves the visual defect but does not independently prove the final winning selector or computed margin source. Root cause must not be overstated until the applicable CSS ownership is isolated.

## 4. Required closure

```text
- restore a clear V2-consistent vertical gap between Address line 1 and Address line 2
- preserve both native IDs, values and icons
- preserve desktop and mobile layouts
- verify no new gap regression on other fields
```

One corrected desktop screenshot and one corrected phone-width screenshot may close this defect together; do not split it into additional micro-tests.

## 5. Current stop point

```text
D2B2: reopened for one address-line spacing defect
Step 02: not started
Next action: isolate and issue one bounded CSS correction
```
