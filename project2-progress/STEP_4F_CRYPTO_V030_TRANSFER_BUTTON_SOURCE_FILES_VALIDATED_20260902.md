# Step 4F · Crypto V0.3.0 transfer-button source files validated · 2026-09-02

The user supplied the three currently installed files requested by the prior source-acquisition gate:

```text
wp-content/plugins/spatial-flow-crypto-pay/assets/project2-crypto-workspace.css
wp-content/plugins/spatial-flow-crypto-pay/templates/crypto-order-pay-workspace.php
wp-content/plugins/spatial-flow-crypto-pay/spatial-flow-crypto-pay.php
```

## Fingerprint validation

All three exactly match the FINAL ACCEPTED V0.3.0 fingerprints already recorded in the repository:

```text
project2-crypto-workspace.css
SHA256 269a9f60dbf285afef9cb8d6f39df11d4676854692e5010ca4a61b4ea538a8fe

crypto-order-pay-workspace.php
SHA256 677d1bcf059853cf08d18dd2639f71b9a798cc4ae8bc0244741961d6f1ee37cd

spatial-flow-crypto-pay.php
SHA256 51bdd7de3efeea7934aa7c21665652933d2990a658bc2069cc00b490a494e19a
```

## Important source finding

The installed V0.3.0 CSS already contains the transfer button rule:

```css
.sf-p2-crypto-transfer-complete {
  ...
  font-family: var(--sf-p2-mono);
  font-size: 9px;
  letter-spacing: .17em;
  text-transform: uppercase;
}
```

The Workspace root defines:

```css
--sf-p2-mono: "JetBrains Mono", ui-monospace, "SF Mono", monospace;
```

Therefore the source file already matches the locked static reference values for size, tracking and uppercase transform, and it points to the intended mono stack through the Workspace-local variable.

This means the previously reported live visual mismatch must not be "fixed" by blindly changing the source values. The next step is a live computed-style / font-resolution audit on `.sf-p2-crypto-transfer-complete` and its first label `<span>` to determine whether the mismatch is caused by runtime override, inherited child styling, actual font availability/loading, synthetic fallback, or another cascade/runtime factor.

## Boundary

No plugin source edits are authorized yet.
Do not alter button geometry/background or backend/payment logic.
