# Step 4F — Crypto Refresh Status rediscovery and transition-style decision — 2026-09-03

## User observation
During final Checkout/Payment review, the user reconfirmed that the three recently repaired Checkout transient states are visually acceptable, but raised two Crypto Workspace questions:

1. The plugin-owned `Preparing your Crypto Payment` bootstrap/loading surface looks attractive enough that it could be considered as inspiration for the main Step03 submit transition; however the user is unsure whether changing the main Checkout transition is justified.
2. The V0.3.0 Workspace `REFRESH STATUS` control appears visually inert when clicked, creating uncertainty about whether it does anything.

## Historical source-of-truth recheck
This exact Refresh Status concern was already diagnosed in the accepted V0.3.0 BIG BATCH B cycle on 2026-08-16.

Recorded runtime evidence on order #3618:

```text
2 user clicks
-> 2 payment-status fetch requests
-> both HTTP 200
-> initiator: project2-crypto-workspace.js?ver=0.3.0:85
```

Therefore the accepted conclusion remains:

```text
click binding: PASS
request dispatch: PASS
REST endpoint: PASS at that check
one request per click: PASS
```

The no-visible-change behavior occurs when the server returns the same `waiting_payment` truth. It was explicitly classified as a non-blocking UX-feedback omission, not a broken refresh path.

## Current interpretation
The control is a manual server-state resynchronization/recovery action, not a full browser reload. When server payment/order truth has not changed, the rendered Workspace can remain visually identical even though the read request succeeded.

Because the current V0.3.0 plugin baseline was revalidated during the 2026-09-02 typography correction and only presentation CSS was changed, there is no new evidence that this previously accepted functional path has regressed.

## Transition-style decision
Do not replace the main Checkout Step03 processing transition with the Crypto Workspace bootstrap merely for visual uniformity.

Reason:
- main Checkout `Processing payment…` is a gateway-agnostic submit lock before/while WooCommerce creates/submits the order;
- Crypto `Preparing your Crypto Payment` is a plugin-owned destination-page bootstrap after the Woo order-pay boundary, while the plugin creates/restores the server invoice;
- these are different semantic phases and different owners;
- making the main Step03 transition Crypto-like would either over-specialize a generic Checkout state or require gateway-conditional transition logic without a clear product benefit.

Current recommendation: keep both states distinct.

## UX polish recommendation
The only worthwhile follow-up is small feedback for `REFRESH STATUS`, for example:

```text
REFRESH STATUS
-> REFRESHING… while request is in flight
-> UP TO DATE briefly if server state is unchanged
-> normal state transition if server truth changed
```

This should be frontend-only and must not alter the accepted backend/security/payment-status contract. Do not implement without first fingerprinting the currently installed `assets/project2-crypto-workspace.js` against the accepted V0.3.0 baseline SHA256 `95272796a655a017a03bae8244b3caf657407171d6f63224f2bb3c0b5a9b9ca7`.
