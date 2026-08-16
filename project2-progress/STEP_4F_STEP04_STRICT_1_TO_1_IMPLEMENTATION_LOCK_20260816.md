# Project 2 · Step 04 Strict 1:1 Implementation Lock

Date: 2026-08-16
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 04 production audit: COMPLETE
Step 04 implementation contract: LOCKED
Strict 1:1 requirement: RECONFIRMED BY USER
Implementation: AUTHORIZED / IN PROGRESS
```

## User directive

The user explicitly reconfirmed that Project 2 pages must be implemented as strict 1:1 visual reproductions of the accepted repository reference.

For Step 04 this means:

```text
preview/spatial-flow-thank-you-v1.html
preview/spatial-flow-thank-you-v1.css
```

remain the visual composition target.

Production WooCommerce data/status must replace static reference data without changing the accepted visual hierarchy, proportions, typography, spacing, grid, card structure, responsive behavior, or visual rhythm merely for implementation convenience.

## Precedence correction

Earlier audit language saying not to redesign the mature live Result page from scratch must NOT be interpreted as permission to preserve live visual deviations from the accepted static reference.

The correct rule is:

```text
preserve real WooCommerce ownership/data/hooks/backend editability
+
rebuild or recompose live Result markup/CSS wherever needed to match the accepted static Step-04 reference 1:1
```

Business-system preservation does not override visual 1:1.

## Source truth

Current live source baseline:

```text
woocommerce/checkout/thankyou.php
SHA256 6556ba6faf6fd6d687b69e5d38cd2910dd89805405d842dc27a2caab4fec7cfa

assets/css/spatial-flow.css
SHA256 4d54dcfc...2bb4b3

functions.php
version 2.7.13
SHA256 62b13f9acb69838bae1543a196e3bd4497faf02e1f30f04f197f7c0fb6575631
```

Reference source:

```text
preview/spatial-flow-thank-you-v1.html
preview/spatial-flow-thank-you-v1.css
preview/spatial-flow-thank-you-v1.js (static state-review behavior only; not production authority)
```

## Locked production-state matrix

```text
processing  -> confirmed / fulfilment in progress
completed   -> completed family
pending     -> payment pending / fulfilment not started
on-hold     -> payment confirmation pending / fulfilment not started
failed      -> retry/support family
cancelled   -> cancelled family
refunded    -> refunded family
unknown     -> neutral server-status fallback
```

The server/WooCommerce order state is authoritative. Browser/query/session state must not manufacture the result.

## Backend-editability rule

Existing `sf_order_received_*` Customizer values must be preserved where compatible.

New state-specific copy may add clearly named editable fields, but implementation must not delete or orphan existing saved user copy without an explicit migration decision.

## Strict visual acceptance

The Step-04 implementation cannot be marked accepted merely because status semantics are correct.

Acceptance requires visual comparison against the accepted static reference at minimum:

```text
1366 desktop
390 mobile
360 mobile
```

Review must include:

```text
page width / side margins
intro two-column composition
Step-04 progress strip
status card
order overview row
main/side grid ratio
panel spacing and borders
receipt summary proportions
Cormorant / Inter / JetBrains Mono hierarchy
font sizes / weights / line heights / letter spacing
button dimensions and placement
mobile stacking/order
no overflow or clipped content
```

## Related V0.3.0 defect

The previously reopened V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch remains a mandatory Checkout-finalization item after Step 04. It is not merged into this theme implementation batch.

## Stop point

```text
Strict 1:1 implementation lock: RECORDED
Next: compare accepted static Step-04 markup/CSS against current live Thank You markup/CSS and build one consolidated live candidate.
```
