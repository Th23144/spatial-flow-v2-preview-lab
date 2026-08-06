# Step 4F · R1 Shared Shell Geometry Runtime Acceptance and Close

Date: 2026-08-06  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Evidence received

The user supplied one consolidated runtime batch in the requested order:

```text
1. 1366px full Step 01
2. 1024px full Step 01
3. 390px full Step 01
4. 360px full Step 01
```

## Runtime acceptance

### 1366px

The evidence confirms:

```text
- Checkout remains a two-column layout
- Intro and Shell share the same outer reference frame
- main and Order Summary use the intended 7fr / 5fr balance
- the inter-column separation reflects the 80px reference gap
- the Shell uses the corrected desktop top/side/bottom spacing
- expanded alternate Shipping fields remain geometrically stable
- no horizontal overflow or clipping is visible
```

### 1024px

The evidence confirms:

```text
- the layout switches to one column at the corrected <=1040px breakpoint
- the main form precedes Order Summary
- the shared 38px horizontal gutter is present
- the form/actions and Order Summary align to the same frame
- the expected separation between the main area and Summary is present
- no horizontal overflow is visible
```

### 390px and 360px

The evidence confirms:

```text
- Intro and Shell use the accepted 22px internal gutter
- the Intro divider and content align to the shared phone frame
- the Shell uses the accepted 38px top and 68px bottom spacing
- main content, actions and Order Summary share the same horizontal frame
- mobile field geometry remains single-column
- D2B2 field, Select2 and alternate Shipping behavior are not regressed
- no horizontal overflow or field clipping is visible
```

## Classification

The shared R1 shell geometry correction is accepted and closed.

Accepted scope:

```text
- 1440px desktop frame
- 7fr / 5fr desktop columns
- 80px desktop gap
- 58px / 56px / 96px desktop Shell padding
- <=1040px single-column transition
- 38px tablet gutter
- 42px tablet main/Summary separation
- 22px phone gutter
- 38px / 36px phone Intro vertical rhythm
- 38px / 68px phone Shell vertical rhythm
```

This acceptance is limited to the shared page frame. It does not classify the complete Checkout or the internal Order Summary, Shipping, Payment, notice, result-page, Crypto, or final regression scopes as complete.

## Next bounded group

Proceed to Step 02 Shipping V2 migration.

The next group must preserve:

```text
- WooCommerce-owned shipping rate and amount
- current $8.99 runtime rate
- Back to Address behavior
- Continue to Payment behavior
- shared accepted R1 shell geometry
- desktop / 1024 / 390 / 360 responsive frame
```

## Status

```text
R1-D2B2: completed and closed
Shared R1 shell geometry: completed and closed
Step 01 visual/geometry foundation: completed
Step 02 Shipping V2: next, not started
Checkout: Not done
```
