# Step 4E-B2-R5-E6-B · Group 4 Functional Pass and Deferred Notice Visual Issues

Last updated: 2026-07-21  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
B9 Shipping / Change address functional lifecycle: Passed.
Desktop address calculator usability: Passed.
390px address calculator usability: Passed.
Shipping destination update and persistence: Passed.
Known Cart notice visual issues: Recorded / deferred.
Current executable group: R5-E6-B Group 5 Checkout navigation.
Source changes authorized: None.
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

Therefore B9 is functionally passed and closed.

## 2. Known notice visual issues

Two success-notice states are currently known to look visually mismatched with the Cart page:

```text
1. Cart quantity/update success feedback.
2. Shipping costs updated feedback.
```

The live `Shipping costs updated.` state appears as a large white rounded floating bar. The user also reconfirmed the earlier complaint about the Cart update success notice.

These are recorded visual defects, but they do not invalidate the already-passed address/shipping functionality.

## 3. Attribution correction

The user did **not** prescribe a final replacement design and did not say that notices must become an "editorial text response".

Accurate ownership of statements:

```text
- User requirement: the current notice presentation looks visually mismatched and needs later review.
- Earlier assistant/window proposal: reduce the notice toward a quieter editorial treatment.
- Approved final design direction: Not decided.
```

No historical assistant proposal may be treated as a user-approved requirement.

## 4. Sequencing decision

The notice visual issues are intentionally deferred so they do not interrupt the current R5-E6 functional regression plan.

```text
- record the defects now
- do not perform the notice ownership audit now
- do not author CSS/PHP/JavaScript changes now
- complete Groups 5, 6 and 7 first
- complete R5-E6-C backend editability confirmation
- then schedule a separate notice visual review and solution-selection step before the final Cart binary decision
```

The assistant is responsible for prioritizing and sequencing user-reported issues rather than automatically interrupting the active test plan.

## 5. Deferred review scope

When the deferred notice work begins, first inspect actual runtime ownership for:

```text
- Cart quantity/update success feedback
- Shipping costs updated feedback
- Coupon applied/removed feedback
- item restored feedback
- other native Cart success messages
```

The later review must distinguish:

```text
- user-observed visual defects
- assistant-generated design options
- final treatment explicitly approved by the user
```

No solution is preselected by this document.

## 6. Current execution gate

Continue the existing plan with:

```text
R5-E6-B Group 5: Checkout navigation
```

Do not modify:

```text
- notice presentation
- address calculator
- functions.php
- assets/js/spatial-flow.js
- assets/css/spatial-flow.css
- WooCommerce templates
- version 2.7.8
```

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
- no source edit
- no temporary permanent CSS append
- no PHP or JavaScript change
- no template override
- no version bump
- cancelled FIX4 remains cancelled
- Cart remains Not done
```
