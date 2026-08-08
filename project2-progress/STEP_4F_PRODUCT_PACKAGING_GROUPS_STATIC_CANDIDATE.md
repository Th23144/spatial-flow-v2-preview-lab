# Step 4F · Product Packaging Groups Static Candidate

Date: 2026-08-08  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Why this gate exists

Product Packaging Groups is a new Project 2 commerce requirement that did not exist in the previously accepted Step-02 Shipping reference.

Project 2 remains a strict reference-led migration. Therefore the live SAFE5 Checkout must not receive a new visual/interaction module that has no accepted repository reference.

The correct sequence is:

```text
1. preserve the previously accepted Step-02 reference unchanged
2. create an isolated Product Packaging Groups Step-02 candidate
3. user visually / interactively reviews the candidate
4. refine candidate if required
5. only after acceptance, translate the accepted candidate into the real SAFE5 + WooCommerce commerce data chain
```

This avoids inventing the live UI during implementation and protects the strict 1:1 workflow.

## Candidate files

The original accepted Shipping reference remains untouched:

```text
preview/spatial-flow-checkout-shipping-v1.html
```

New isolated candidate:

```text
preview/spatial-flow-checkout-packaging-v1.html
preview/spatial-flow-checkout-packaging-v1.css
preview/spatial-flow-checkout-packaging-v1.js
```

## Candidate revision 1 · user visual feedback

The first candidate made Standard Packaging visible by default but hid Gift Packaging behind `Customize packaging`.

The user explicitly rejected that presentation and required:

```text
Standard Packaging and Gift Packaging must both be visible directly in Step 02.
The customer should immediately understand that two packaging tiers exist.
Grouping is an advanced customization, not the gate for discovering Gift Packaging.
```

Therefore the candidate was revised on 2026-08-08.

The new hierarchy is:

```text
Product Packaging

[ Standard Packaging · $0.00 ]
[ Gift Packaging · +$9.00 ]

selected tier metadata
- Standard -> optional personalized name
- Gift -> optional gift card message

Need different packaging for different products?
[ Customize product groups ]
```

The two packaging tiers are now first-class, immediately visible choices.

`Customize product groups` remains available only for orders where different purchased units need different presentation or separate product packages.

## Candidate behavior

The candidate keeps Shipping as Step 02 and inserts Product Packaging after the shipping-method block and before the existing Continue to Payment action.

Default flow:

```text
1. customer sees Standard and Gift side by side on desktop
2. Standard is selected initially
3. selecting Gift immediately changes the visible metadata field to Gift card message
4. Gift fee is reflected in the static Order Summary preview
5. customer may continue without entering the advanced grouping editor
```

Advanced flow:

```text
Customize product groups
-> package-group editor opens
-> create multiple Product Packaging Groups
-> assign purchased products to groups
-> choose Standard or Gift independently per group
-> each Gift group owns its own gift message
```

The candidate supports:

```text
- Standard tier visible immediately
- Gift tier visible immediately
- Standard tier = free
- Standard tier = personalized-name input enabled by default in this candidate
- Gift tier = provisional $9.00 fee per non-empty Gift Packaging Group
- Gift tier = independent gift-card message
- create multiple Product Packaging Groups
- assign different purchased products to different product packages
- choose Standard or Gift independently per package
- multiple product packages can remain inside one courier / transport parcel
- Order Summary preview updates Gift Packaging fees and estimated total
- candidate state is persisted in the existing static checkout sessionStorage prototype state
```

## Explicit boundary

Product Packaging is NOT transport packaging.

```text
separate Product Packaging Groups
!=
separate shipments
```

The candidate explicitly tells the customer that separate product packages may still travel together in one outer parcel to the same address.

## Deliberate candidate limitation

The accepted data-model requirement still includes quantity allocation for same-line quantities, for example:

```text
Bracelet A x3
-> quantity 2 in Package 01
-> quantity 1 in Package 02
```

The current static visual candidate demonstrates multi-product grouping rather than a dedicated quantity-split control because the reference basket contains three separate Qty-1 lines.

The later live data model must still support quantity allocation. Static acceptance of this visual candidate must NOT be interpreted as permission to reduce the durable model to product-ID-only assignment.

## What has NOT been changed

```text
- no live/local WordPress theme file changed
- no functions.php changed
- no form-checkout.php changed
- no checkout-safe5.js changed
- no checkout-safe5.css changed
- no WooCommerce Session state added yet
- no WooCommerce fee calculation added yet
- no order meta added yet
- no Checkout admin setting added yet
- no Crypto plugin changed
- no Step 04 changed
- Batch 6 remains paused
```

## User acceptance checklist

Review at least desktop and mobile widths and check:

```text
A. Placement
- Product Packaging belongs naturally after Shipping and before Continue to Payment

B. Tier visibility
- Standard and Gift are both visible without opening another control
- their free/paid distinction is immediately understandable
- selected state is clear but not visually heavy

C. Default simplicity
- ordinary customer can choose Standard or Gift and continue without opening grouping
- grouping feels secondary rather than mandatory

D. Terminology
- product packaging is not confused with courier / transport packaging

E. Metadata
- Standard personalized name feels correctly placed
- Gift card message appears when Gift is selected

F. Grouping interaction
- Customize product groups is understandable
- Add product package is understandable
- item assignment between Package 01 / 02 / ... is understandable
- package grouping feels flexible enough for multiple gifts / mixed standard + gift orders

G. Fee semantics
- one non-empty Gift package = one provisional $9 fee
- multiple non-empty Gift packages = multiple fees
- Summary change is understandable

H. Mobile
- Standard and Gift stack cleanly
- no horizontal overflow
- package controls remain usable
- checkout actions remain reachable
```

## Acceptance status

```text
Product Packaging specification: provisional accepted
Static candidate: REVISED AFTER USER FEEDBACK
Standard/Gift direct visibility: IMPLEMENTED IN CANDIDATE
User visual/interaction acceptance: PENDING
Live SAFE5/Woo implementation: NOT STARTED
Batch 6: PAUSED
Checkout: Not done
```

Only after the revised candidate is accepted should the live implementation unit be constructed against the latest verified four-file SAFE5 baseline.
