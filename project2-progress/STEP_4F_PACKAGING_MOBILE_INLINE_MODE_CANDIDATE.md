# Step 4F · Product Packaging · Mobile Inline-Mode Candidate

Date: 2026-08-08
Status: STATIC MOBILE CANDIDATE · USER ACCEPTANCE PENDING
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user rejected the previous phone refinement and clarified the desired relationship between the three grouping choices and the package setup that appears after choosing one.

Required phone behavior:

```text
Keep together
  ↳ its result/setup appears directly below Keep together

Package separately
  ↳ its generated Package 01 / 02 / 03 rows appear directly below Package separately

Custom grouping
  ↳ its custom package manager and package rows appear directly below Custom grouping
```

The result must not be rendered as one detached shared editor after all three grouping choices.

## Desktop boundary

The accepted desktop Compact Product Packaging contract is preserved.

Desktop still uses:

```text
three compact grouping columns
↓
shared result area below the selector
```

The inline ownership change applies only at phone breakpoint (`max-width: 760px`).

## Mobile interaction revision

### 1. Restore vertical grouping choices

The rejected three-column phone selector was removed.

Phone returns to three clear stacked choices:

```text
Keep together
Package separately
Custom grouping
```

### 2. Put the result under the selected choice

The packaging JavaScript now detects the phone breakpoint and wraps each grouping option with its own inline result host.

Only the selected mode receives generated content.

Examples:

```text
[ Package separately · selected ]
  Package 01 · Edit
  Package 02 · Edit
  Package 03 · Edit

[ Custom grouping ]
```

Switching to Custom moves the generated custom setup under Custom instead.

### 3. Preserve compact Package rows

Generated package rows remain collapsed summaries by default.

Only the Package whose `Edit` control is opened reveals:

```text
Standard / Gift
item movement controls when Custom
name OR gift-card message
```

At most one Package detail is expanded at a time.

### 4. Palette alignment

Selected grouping state uses only established Spatial Flow values:

```text
ink border
subtle clay-tinted selected surface
clay selection dot
paper contrast
```

No green/system-looking selected accent is intended.

### 5. Standard / Gift inside Package

On phone, Standard and Gift remain side-by-side when a Package is expanded rather than becoming two large stacked rows.

## Files changed

```text
preview/spatial-flow-checkout-packaging-v1.js
preview/spatial-flow-checkout-packaging-v5.css
```

Implementation commits:

```text
71a73d6  Inline mobile packaging results beneath selected grouping mode
13ba037  Place mobile package setup beneath selected grouping option
```

Previous rejected mobile candidate record was also updated to prevent accidental reuse:

```text
bdec43e  Mark first mobile packaging refinement rejected
```

## Intentionally NOT changed

```text
- accepted desktop Product Packaging Compact visual contract
- Product Packaging business model
- Standard = free
- Gift = placeholder $9 per physical gift package
- real SAFE5 Checkout
- WooCommerce Session / fee calculation / order metadata
- backend packaging settings
- Step 03 Payment
- Step 04 Result
- Batch 6
```

## Acceptance focus

Review primarily at 390px and 360px.

Check:

```text
1. Do the three phone grouping choices read naturally again as stacked options?
2. Does the selected option now clearly own the package setup immediately beneath it?
3. When switching Separate -> Custom -> Together, does the result move with the selected mode rather than remain detached below all three?
4. Do Package 01 / 02 / 03 remain compact?
5. Does Edit still open only one Package at a time?
6. Are Standard / Gift readable side-by-side in an opened Package?
7. Is the selected palette consistent with the upper Standard / Gift product-packaging section?
8. Desktop must remain the previously accepted Compact contract.
```

## Current stop point

```text
Desktop Packaging Compact: ACCEPTED
First mobile refinement: REJECTED
Mobile inline-mode candidate: AWAITING USER REVIEW
Real SAFE5 Packaging: NOT STARTED
Batch 6: PAUSED
Step 04: deferred
```

## Recording policy

This step is governed by `PROJECT2_STEP_RECORDING_POLICY.md`. Any acceptance, rejection, revision, or next implementation step must be recorded in GitHub before it is treated as formal progress.