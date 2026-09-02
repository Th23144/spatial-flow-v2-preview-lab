# Step 4F · Crypto V0.3.0 transfer-button selector fix returned source diff PASS · 2026-09-02

## Returned file
`assets/project2-crypto-workspace.css`

## Baseline
Accepted V0.3.0 baseline SHA256:
`269a9f60dbf285afef9cb8d6f39df11d4676854692e5010ca4a61b4ea538a8fe`

Returned candidate SHA256:
`6cf307b92524e577e64d281b44460241246f441ff3c1b1263f438baaa1bc8ca0`

Returned size:
`22,237 bytes`

## Exact diff result
The returned file differs from the accepted V0.3.0 baseline by exactly one selector edit at the transfer-complete button rule:

```diff
-.sf-p2-crypto-transfer-complete {
+.sf-p2-crypto-workspace .sf-p2-crypto-transfer-complete {
```

No property/value changes were introduced in that rule. No other CSS lines changed.

## Intended cascade effect
The previous runtime audit proved the generic rule:

```css
.sf-p2-crypto-workspace button,
.sf-p2-crypto-workspace input { font: inherit; }
```

was winning over the button typography rule, producing live `Inter 14px` instead of the locked reference `JetBrains Mono 9px`.

The selector change raises specificity from one class to two classes so the existing locked typography declarations can win without adding `!important` or changing geometry.

## Boundary
- No PHP change.
- No JS change.
- No backend/payment/security behavior change.
- No button geometry/background change.
- Typography values remain exactly: `var(--sf-p2-mono) / 9px / .17em / uppercase`.

## Status
Returned source diff: PASS.

Next: runtime + visual acceptance on the live Crypto Workspace. Verify computed button/label typography and user visual parity before final closure.
