# Step 4F · Crypto Plugin V0.2.6.1 Local Regression Partial Acceptance

Date: 2026-08-15
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User-reported result

The user replaced the live/local Spatial Flow Crypto Pay Trial V0.2.5 package with the reviewed authoritative V0.2.6.1 ZIP and completed the requested compatibility regression.

Reported PASS:

- plugin activates and reports V0.2.6.1
- Gateway settings remain present
- Project 2 Crypto Workspace setting is present
- legacy Checkout Crypto submission still creates only one order
- unresolved Crypto order remains on-hold
- legacy `/crypto-pay/` route still opens
- Invoice creation still works
- Sandbox success still reaches processing / WooCommerce result
- order notes / legacy flow remain normal
- toggling the Project 2 Crypto Workspace checkbox does not activate a new Workspace route; legacy `/crypto-pay/` remains authoritative

Pending only:

- direct verification of WordPress option `sf_crypto_workspace_token_epoch`

## Important source clarification

The final V0.2.6.1 source initializes the option only when absent:

`add_option( SF_CRYPTO_PAY_WORKSPACE_EPOCH_OPTION, 1, '', false );`

and explicitly defers automatic epoch increments until a later authorized Workspace-token implementation step.

Therefore the expected V0.2.6.1 runtime value is `1`, including after the current inert feature-flag toggle test.

This corrects any earlier wording that implied V0.2.6.1 should increment the epoch when the checkbox changes. That behavior belongs to a later Workspace implementation phase, not this Step-1 package.

## Current stop point

V0.2.6.1 compatibility regression: provisionally passed except one read-only option-value check.

No Step-03 live Workspace implementation is implied by this upgrade.

Next action: read `sf_crypto_workspace_token_epoch` from the current WordPress site without modifying it. If the value is `1`, close the V0.2.6.1 local-regression gate and proceed to the Plugin Step-2 / real Workspace planning gate.