# Step 4F · Strict 1:1 Acceptance Lock

Date: 2026-08-05  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User directive

The user explicitly re-asserted:

```text
严格的 1:1
```

This is a hard acceptance condition for the live Checkout reconstruction.

## Meaning of strict 1:1

The following are insufficient:

```text
functionally correct
visually similar
overall close
acceptable at a glance
no obvious overflow
```

A subgroup may close only when its live surface matches the accepted repository reference in all relevant details, including:

```text
structure
field order
field grouping
component geometry
width and height
spacing and rhythm
typography and hierarchy
border treatment
corner treatment
icons
alignment
responsive behavior
mobile gutter
focus / selected / expanded states
```

Real WooCommerce data, native controls, accessibility requirements and documented security corrections may differ only where technically necessary and explicitly recorded.

## Current consequence

The D2B2 address-line defect remains blocking:

```text
#billing_address_1_field
#billing_address_2_field
```

The two native inputs currently touch without the reference spacing. This is not accepted as a minor cosmetic variance.

Therefore:

```text
D2B2: reopened
Step 01: not closed
Step 02 Shipping V2 migration: blocked
Checkout: Not done
```

## Review rule

Before any future subgroup is marked passed:

```text
compare against the accepted static source, not memory
inspect both the overall composition and small local details
do not infer that a screenshot is passed merely because functionality works
record any visible mismatch before moving to the next subgroup
```

## Authority

The accepted static Checkout artifacts remain the visual authority:

```text
preview/spatial-flow-checkout-v1.html
preview/spatial-flow-checkout-shipping-v1.html
preview/spatial-flow-checkout-payment-v1.html
preview/spatial-flow-checkout-flow-v1.css
preview/spatial-flow-checkout-context-v1.css
preview/spatial-flow-checkout-mobile-commerce-v1.css
```

No live Checkout section may be classified as `Completed 1:1` until this strict standard and all functional gates are satisfied.
