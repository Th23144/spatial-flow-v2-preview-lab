# Step 4F · Product Packaging Four-File Install / Geometry Diagnostic Entry

Date: 2026-08-11
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Installed source set

User confirms the four validated Product Packaging files have now all been replaced on the real local Checkout runtime:

- `functions.php`
- `woocommerce/checkout/form-checkout.php`
- `assets/js/checkout-safe5.js`
- `assets/css/checkout-safe5.css`

Latest validated identities before install:

```text
functions.php
607,140 bytes
SHA256 7b4d84c84887265b06c04f33c43f60a9c9d48adf52564324f84d9512f0bc3eab

form-checkout.php
36,184 bytes
SHA256 28d8aeba51496ca1a95a1e1ccd0b12a85d71103e1dfaa759ccf02baba66cd208

checkout-safe5.js
56,572 bytes
SHA256 496f5af965939c4f838a64a306761d4f151ab88c1acbe4b3980b884687ef0448

checkout-safe5.css
133,885 bytes
SHA256 5221bfd175a5425cb34eb732b64a67c3d2595d1de1332cf0e02fa7e873a4d6e7
```

## Current decision

Do not immediately continue micro-adjusting Packaging typography/spacing.

First run an overall Checkout geometry diagnostic at the same viewport as the accepted static Step 02 reference. The purpose is to determine whether a remaining shared frame mismatch is materially distorting visual 1:1 judgment and should therefore be corrected before further Packaging micro-detail work.

This is a sequencing decision, not a new hard policy. The user clarified that the previously later width/geometry stage was remembered project sequencing, not an absolute prohibition against moving it earlier when doing so improves 1:1 convergence.

## Reference geometry re-check

Current canonical static Checkout reference still declares:

```text
max frame: 1440px
desktop gutter: 56px
checkout columns: minmax(0, 7fr) / minmax(360px, 5fr)
desktop gap: 80px
shell padding: 58px 56px 96px
intro: same 1440px frame, 80px gap, 54px 56px 48px padding
```

The current live SAFE5 CSS also contains those nominal shared shell values. Therefore the next diagnostic must distinguish:

1. nominal CSS values already matching but runtime width still altered by WordPress/Astra/container ancestry or viewport conditions;
2. no shared-frame mismatch, in which case Packaging internal visual refinement should continue;
3. a residual reference/live geometry mismatch that justifies bringing the remaining width/geometry pass forward.

## Status

```text
Packaging runtime functionality: PASS
Packaging Visual Parity V1 source install: COMPLETE
Strict 1:1 visual acceptance: OPEN
Geometry diagnostic: CURRENT
Order Summary item-line cleanup: RECORDED / LATER
Batch 6: PAUSED until Packaging acceptance
```
