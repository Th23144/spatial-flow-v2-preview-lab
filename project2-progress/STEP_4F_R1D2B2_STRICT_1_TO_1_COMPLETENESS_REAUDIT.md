# Step 4F · R1-D2B2 Strict 1:1 Completeness Re-audit

Date: 2026-08-05  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Trigger

After the native Street address / Apartment gap fix, the user correctly warned that the live Checkout remains materially distant from strict 1:1 and requested a detailed audit of whether the complete D2B2 boundary is actually finished.

The answer is:

```text
Address-line gap fix: passed
D2B2 complete strict 1:1: not passed
D2B2 remains open
Step 02 Shipping V2 remains blocked
Checkout: Not done
```

No additional screenshot is required before correcting the defects listed below. The supplied desktop and mobile runtime evidence is sufficient to prove they exist.

## 2. Visual authority

Authoritative sources:

```text
preview/spatial-flow-checkout-v1.html
preview/spatial-flow-checkout-flow-v1.css
preview/spatial-flow-checkout-mobile-commerce-v1.css
project2-progress/STEP_4F_S3_FINAL_STATIC_CHECKOUT_AND_MOBILE_COMMERCE_SURFACE_ACCEPTANCE.md
```

Relevant reference geometry:

```text
desktop form grid: two equal columns with 22px horizontal gap
First name / Last name: paired
Town / City / Postcode / ZIP: paired
State / Province / Phone: paired
full-width fields: Email, Country, Street address
form-row bottom gap: 18px desktop / 11px mobile
checkbox row: simple two-column checkbox + copy, no extra internal separator
mobile delivery fields: one column
native select affordance remains visible
mobile controls must not be obscured by floating site controls
```

## 3. Confirmed complete inside D2B2

The current runtime evidence confirms:

```text
- Contact, Delivery address and Optional note remain separate semantic groups
- desktop sections are editorial rule-separated surfaces, not nested rounded cards
- mobile sections use the accepted warm editorial surface
- square field surfaces are installed
- thin line icons are installed
- Email and Order notes span the intended width
- First name / Last name are paired on desktop
- fields collapse to one column on mobile
- field heights and field-label hierarchy are materially aligned with the reference
- visible focus treatment exists
- address-line 1 / address-line 2 are now separated
- native fields remain single instances
- no horizontal overflow is visible in the submitted evidence
```

## 4. Remaining D2B2 blockers

### Blocker A · Desktop field grid is incomplete

The live desktop screenshot shows these as full-width stacked rows:

```text
Town / City
ZIP Code
State
Phone
```

The accepted static Step-01 grid requires:

```text
Town / City | Postcode / ZIP
State       | Phone
```

This is a D2B2 field-geometry defect, not a later Step-02 task.

The same explicit grid treatment must also apply to the native alternate Shipping fields when `Ship to a different address?` is expanded.

### Blocker B · Country / State select affordance is incomplete

In the submitted closed-state screenshots, Country and State visually read like plain text inputs because a dropdown caret/arrow is not visibly present.

D2B2 explicitly owns native Country/State surface integration. The closed-state affordance must be visible and the Select2/native dropdown open state must be visually audited after correction.

### Blocker C · Native shipping-address checkbox row has an extra separator

The live checkbox row currently has a dedicated top rule/padding treatment. The accepted static reference uses a simple checkbox-and-copy row without that extra internal separator.

The native WooCommerce wording/semantics may remain different because field ownership must stay native, but the visual row treatment must match the accepted reference rhythm.

### Blocker D · Mobile floating back-to-top control obscures form fields

The supplied mobile screenshot shows the fixed black back-to-top control overlapping the right side of the State field.

This is not acceptable under strict 1:1 or basic form usability. On Checkout mobile views, the control must be repositioned or suppressed so it cannot cover any input, select, textarea, checkbox or action.

### Blocker E · Alternate Shipping visual state is not fully closed

The alternate Shipping field set has been functionally proven and a desktop expanded state was previously shown, but strict D2B2 closure still requires the corrected field grid, select affordance and mobile no-overlap treatment to apply to that native field set as well.

This is not a request for another isolated pre-fix test. It is part of the post-fix consolidated acceptance batch.

## 5. Necessary WooCommerce differences that are not defects

The following differences from the static prototype are allowed only because the live page must preserve WooCommerce authority:

```text
- native `Ship to a different address?` semantics instead of the prototype billing-copy text
- dynamic country-specific labels such as `ZIP Code`
- dynamic required markers such as State being required for the United States
- native Address line 2 field even though the static prototype does not show it
- real Select2/native country-state controls
- real values, products, totals and checkout events
```

These allowed differences do not authorize different geometry, spacing, typography, visibility or obstruction.

## 6. D2B2 repair boundary

The next repair remains bounded to Step-01 visual ownership.

Expected owners:

```text
assets/css/checkout-safe5.css
possibly the Checkout-only back-to-top selector owner if it lives in shared CSS
```

No change is authorized to:

```text
WooCommerce field IDs/names/order values
field cloning or replacement
Step 02 shipping logic
Step 03 payment logic
Order Summary/Coupon/Trust
Crypto plugin
Place Order ownership
```

The repair should be issued as one audited group, not as several conversational micro-fixes.

## 7. Consolidated post-fix evidence

After all D2B2 blockers above are corrected, request one batch:

```text
1. 1366px complete Step 01
2. 390px complete Step 01
3. 360px complete Step 01
4. desktop Country or State dropdown open
5. mobile Country or State dropdown open
6. desktop alternate Shipping fields expanded
7. mobile alternate Shipping fields expanded
```

The same batch verifies:

```text
- desktop field pairs
- address-line gap
- visible select caret
- dropdown surface
- checkbox rhythm
- alternate Shipping geometry
- no floating-control overlap
- mobile gutter
- no duplicate fields
- no clipping or horizontal overflow
```

Do not split this batch into isolated tests unless a real defect is found.

## 8. Wider Checkout status

The user's statement that the complete Checkout remains far from strict 1:1 is correct.

Even after D2B2 closes, the following remain outstanding:

```text
Step 02 Shipping V2 migration
Step 03 Payment V2 migration
Order Summary / Coupon / Trust migration
error-state ownership and duplication cleanup
backend-editable copy
Step 04 result-state semantics
legacy CSS cleanup
Crypto full regression
full commerce regression
final 1366 / 390 / 360 strict 1:1 acceptance
```

## 9. Stop point

```text
Address-line gap fix runtime evidence: passed
D2B2 strict completeness: failed / open
Next action: prepare one bounded D2B2 completion repair for Blockers A-E
Step 02 Shipping V2: not started
Checkout: Not done
```
