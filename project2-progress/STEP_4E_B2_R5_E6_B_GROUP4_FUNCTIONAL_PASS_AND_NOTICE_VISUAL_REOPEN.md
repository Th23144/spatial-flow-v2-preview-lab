# Step 4E-B2-R5-E6-B · Group 4 Functional Pass and Notice Visual Reopen

Last updated: 2026-07-21  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
B9 Shipping / Change address functional lifecycle: Passed.
Desktop address calculator usability: Passed.
390px address calculator usability: Passed.
Shipping destination update and persistence: Passed.
Cart notice visual acceptance: Failed / reopened.
Current visual defect set:
1. Cart update success notice.
2. Shipping costs updated success notice.
Source changes authorized: None pending exact runtime/source ownership audit.
Cart page status: Not done.
```

## 1. Group 4 functional confirmation

User-confirmed and screenshot-supported behavior:

```text
- Change address opens in Order Summary without redirecting.
- Country/region, city and postcode controls remain visible and usable.
- Update submits successfully through native WooCommerce behavior.
- Shipping destination changes and is reflected in Order Summary.
- Shipping and Total remain mathematically consistent.
- Quantity, Header BAG, Your Bag count and product Subtotal remain unchanged.
- Updated destination survives refresh.
- Address calculator remains contained at 390px without horizontal overflow, clipping or checkout-control overlap.
```

Therefore B9 is functionally passed.

## 2. Reopened visual defect

After the address update, WooCommerce renders:

```text
Shipping costs updated.
```

The live notice appears as a large white rounded floating bar with a shadow-like separated surface across the Cart content frame.

This is visually inconsistent with the accepted Cart language:

```text
- warm uninterrupted canvas
- quiet editorial typography
- thin structural dividers
- minimal UI chrome
- no floating pill/toast/admin-notice treatment
```

The user also reconfirmed the earlier unresolved visual complaint for the Cart update success notice. Both states belong to the same Cart notice system and must be audited together.

## 3. Historical continuity

The repository already records that Cart notice treatments must not look like:

```text
- alert box
- toast
- admin notice
- banner
- floating white capsule
- generic design-system status component
```

The required direction remains:

```text
- no filled panel
- no enclosing rounded rectangle
- no drop shadow
- no circular icon
- message aligned with existing Cart text rhythm
- optional thin divider only when needed
- native WooCommerce behavior preserved
- mobile one-column and overflow-safe
```

## 4. Notice states now in scope

Minimum confirmed runtime states:

```text
A. Cart quantity/update success feedback.
B. Shipping costs updated feedback.
```

The next audit should also inspect whether the same owner affects:

```text
- Coupon applied/removed success feedback
- item restored feedback
- other native Cart success messages
```

This is an ownership audit, not authorization to broadly restyle every WooCommerce notice globally.

## 5. Current decision

```text
Group 4 functional result: Passed.
Group 4 visual result: Failed because of success-notice presentation.
Do not mark the Cart final acceptance complete.
Do not dismiss the new notice as a minor issue.
Do not change the address calculator fields or native shipping lifecycle.
```

## 6. Next executable substep

```text
R5-E6-B-N1 exact runtime/source ownership audit for Cart success notices.
```

The audit must determine:

```text
- exact DOM class/markup for Cart updated and Shipping costs updated
- which existing CSS rule produces the white rounded surface
- whether both states share one owner
- whether AJAX replacement changes wrapper position or class
- bounded selector strategy that preserves errors, Undo and native WooCommerce ownership
```

No source edit is authorized until this audit is complete.

## 7. Locked deployed artifacts

```text
functions.php
SHA256: 5bd9f8b307d1b59eaa92bf31d3640e2d4ba48bca4de7a640b705d5e75f9ef00b
Version: 2.7.8

assets/js/spatial-flow.js
SHA256: 7442ee92167ae383b933c6db0281f14ea56a75733339818c3e4858d77d52651b

assets/css/spatial-flow.css
SHA256: 1a4daa7f09b6370ccc93cc8441ea3c45ec23d8777a049c1a6f2c8fd50720ddce
```

## 8. Boundaries

```text
- no source edit yet
- no temporary permanent CSS append
- no PHP or JavaScript change
- no template override
- no version bump
- address calculator remains untouched
- cancelled FIX4 remains cancelled
- Cart remains Not done
```
