# Step 4F · R1 Step-01 Validation Priority and R2 Notice Visual Defect

Date: 2026-08-06  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User report

During the final post-installation Step-01 functional regression, the user reported two observations:

1. Entering `abc` in Email while the other required address fields are empty correctly prevents advancement, but the visible message prioritizes an empty required field rather than the malformed Email value.
2. The current error-notice presentation is visually very poor.

## Observation 1 classification

```text
Classification: expected first-invalid-field priority
Functional failure: no
```

The current SAFE5 validation sequence first checks missing WooCommerce required fields, then browser/native format validity, then the extra email-format guard. When multiple invalid conditions exist at once, the first missing required field becomes the focused and announced error.

This does not mean malformed Email is accepted. It means the malformed-email case has not yet been isolated because other required failures exist earlier in the same validation pass.

Required isolated proof:

```text
Fill every other required Step-01 field with valid data.
Leave Email as abc.
Click Continue to Shipping.
Expected: remain on Step 01 and receive the invalid-email message.
```

No code change is authorized for validation priority in the current group.

## Observation 2 classification

```text
Classification: confirmed visual-quality defect
Owner: R2 notice/error ownership matrix and presentation
Current D2B2 field-surface owner: no
```

The remaining-manual-acceptance roadmap already assigns missing-field, malformed-email, coupon, Terms, payment and server/gateway notices to R2 as one combined desktop/mobile ownership and readability matrix.

The user’s visual feedback is now a mandatory R2 acceptance item:

```text
- replace the visually poor generic error presentation with a Checkout-consistent notice surface
- preserve one-message ownership
- preserve correct owning-step placement
- keep desktop and mobile readable
- do not hide WooCommerce/server error truth
```

This defect is deferred by ownership, not dismissed.

It does not block D2B2 functional closure as currently described because the notice is visible and the user reported visual quality, not unreadability, overlap, clipping or blocked interaction. If later evidence shows the notice obscures fields or prevents use, it becomes an immediate blocker.

## Remaining D2B2 functional gate

```text
1. With all other required fields valid, malformed Email remains blocked on Step 01.
2. Correcting Email allows Step 01 to reach Step 02.
3. Back to Address returns to Step 01 with entered values and field composition intact.
```

## Status

```text
Required-field priority observation: accepted as expected behavior
Malformed-email isolated proof: pending
Ugly error notice: recorded as confirmed R2 visual defect
Immediate notice redesign: not started
Backend editability: accepted
D2B2: open for remaining isolated functional regression
Step 02 Shipping V2: blocked
Checkout: Not done
