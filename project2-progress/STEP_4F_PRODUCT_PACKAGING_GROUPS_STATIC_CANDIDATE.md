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

## Candidate behavior

The candidate keeps Shipping as Step 02 and inserts Product Packaging after the shipping-method block and before the existing Continue to Payment action.

Default path stays lightweight:

```text
Standard packaging included
Compatible products share one product package by default
Personalized name is available by default
[ Customize packaging ]
```

The advanced workspace appears only when the user chooses to customize packaging.

The candidate supports:

```text
- create multiple Product Packaging Groups
- assign different purchased products to different product packages
- choose Standard or Gift independently per package
- Standard tier = free
- Standard tier = personalized-name input enabled in this candidate
- Gift tier = provisional $9.00 fee per non-empty Gift Packaging Group
- Gift tier = independent gift-card message per package
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

B. Default simplicity
- ordinary customer sees Standard packaging included without being forced into a complex editor
- Customize packaging is understandable

C. Terminology
- product packaging is not confused with courier / transport packaging

D. Grouping interaction
- Add product package is understandable
- item assignment between Package 01 / 02 / ... is understandable
- package grouping feels flexible enough for multiple gifts / mixed standard + gift orders

E. Packaging tiers
- Standard vs Gift choice is clear
- personalized name on Standard feels correctly placed
- Gift message belongs to the correct Gift package

F. Fee semantics
- one non-empty Gift package = one provisional $9 fee
- multiple non-empty Gift packages = multiple fees
- Summary change is understandable

G. Mobile
- no horizontal overflow
- package controls remain usable
- checkout actions remain reachable
```

## Acceptance status

```text
Product Packaging specification: provisional accepted
Static candidate: CREATED
User visual/interaction acceptance: PENDING
Live SAFE5/Woo implementation: NOT STARTED
Batch 6: PAUSED
Checkout: Not done
```

Only after the candidate is accepted should the live implementation unit be constructed against the latest verified four-file SAFE5 baseline.
