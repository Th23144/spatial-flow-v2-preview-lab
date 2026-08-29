# Step 4F · Crypto V0.3.0 transfer-button typography source audit start · 2026-08-29

Step04 clean-order recovery has passed and Step04 is fully closed.

The remaining Checkout blocker is the previously reopened V0.3.0 customer Workspace button typography defect:

```text
I HAVE COMPLETED THE TRANSFER
```

## Static reference owner located

Reference HTML:

`preview/spatial-flow-checkout-crypto-invoice-v1.html`

Reference selector:

```css
.crypto-transfer-complete
```

Reference CSS:

`preview/spatial-flow-checkout-crypto-invoice-v1.css`

Locked reference typography contract:

```css
font-family: var(--mono);
font-size: 9px;
letter-spacing: .17em;
text-transform: uppercase;
```

The reference rule also owns the button geometry/background. The current reopened defect is typography-only; do not alter geometry unless runtime/source ownership proves it is required.

## Accepted live plugin baseline identity

From the FINAL ACCEPTED V0.3.0 handoff:

```text
Plugin: Spatial Flow Crypto Pay Trial
Version: 0.3.0
ZIP SHA256: d7227f52ddd4f1949b1860348b56a956f47723f3d64d5c052f34a2c1ab58fdb9
assets/project2-crypto-workspace.css SHA256: 269a9f60dbf285afef9cb8d6f39df11d4676854692e5010ca4a61b4ea538a8fe
templates/crypto-order-pay-workspace.php SHA256: 677d1bcf059853cf08d18dd2639f71b9a798cc4ae8bc0244741961d6f1ee37cd
spatial-flow-crypto-pay.php SHA256: 51bdd7de3efeea7934aa7c21665652933d2990a658bc2069cc00b490a494e19a
```

The Project-2 repository contains the static reference and audit documentation but not the accepted live plugin source files themselves.

## Required source acquisition before correction

Obtain the currently installed V0.3.0 copies of exactly these files:

```text
wp-content/plugins/spatial-flow-crypto-pay/assets/project2-crypto-workspace.css
wp-content/plugins/spatial-flow-crypto-pay/templates/crypto-order-pay-workspace.php
wp-content/plugins/spatial-flow-crypto-pay/spatial-flow-crypto-pay.php
```

Validate each against the accepted V0.3.0 fingerprints before issuing any edit.

Do not request or modify JS/backend files unless inspection proves the visual owner is elsewhere.

## Boundary

Do not alter REST, invoice creation/reuse, hash validation, settlement, payment-status, sandbox, feature flag, order-pay routing, legacy rollback, or accepted V0.2.9/V0.3.0 backend/security invariants.
