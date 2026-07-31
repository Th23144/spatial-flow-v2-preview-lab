# Project 2 · Checkout S3 Mobile Commerce-Surface Visual Enhancement Proposal

Date: 2026-07-31
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Current status

```text
01 Address → 02 Shipping → 03 Payment
Desktop review: passed
390px review: passed
360px review: passed
Interaction and state handoff: passed
Checkout page status: Not done
```

This document records a newly observed mobile-only visual concern after S3 functional and responsive acceptance. It does not reopen desktop S3 and does not authorize source changes by itself.

## User-observed issue

On desktop, the editorial minimalism, large whitespace and text-led composition feel intentional and balanced.

On mobile, the same language is compressed into a long sequence of headings, labels and text. The resulting impression can become closer to an electronic publication or reading page than a commerce checkout.

The user proposed strengthening the contrast of the areas in which customers enter or choose information so that the interactive commerce surfaces are more immediately recognizable.

## Design diagnosis

The issue is not insufficient decoration across the whole page. It is insufficient differentiation between:

```text
editorial content
completed-order context
interactive commerce controls
primary transaction actions
```

A blanket high-contrast background applied to every section would risk making the mobile page heavy, fragmented and inconsistent with the established Spatial Flow language.

## Recommended direction

Use a mobile-only `commerce surface` system.

Preserve the editorial background and typography for:

```text
page title
step progress
introductory copy
section headings
completed-context summaries
```

Increase contrast only for areas that require customer action:

```text
Step 01 text inputs, selects and textarea
Step 02 shipping-method choices
Step 03 payment-method choices
future Crypto asset/network choices
future invoice/action panels where interaction is required
```

Recommended hierarchy:

```text
Page background:
retain the existing warm neutral background

Interactive group surface:
use a clearly lighter or slightly deeper warm contrasting plane
with a restrained border and compact internal padding

Individual field/control:
use an even clearer fill than the group surface
with a visible focus/selected state

Selected option:
use the established dark green/stone accent through border,
radio state or a narrow accent edge rather than filling the entire screen

Primary action:
retain the existing dark filled CTA
```

## What should not change

```text
desktop composition
page structure
step order
WooCommerce ownership
field semantics
real data and backend editability
touch-target size
approved 02/03 context-card architecture
Order Summary hierarchy
```

## Proposed visual intensity

The goal is not a loud or saturated checkout. The target is:

```text
editorial shell + unmistakable commerce controls
```

The contrast should be strong enough that a customer can immediately identify where to type, choose and pay, while the page still belongs to Spatial Flow.

## Rejected broad approach

Do not apply one contrasting rectangle to every text block, summary and section. That would:

```text
create excessive card stacking
make the mobile page visually heavy
reduce the distinction between read-only and interactive content
weaken the editorial identity instead of balancing it
```

## Visual-reference review outcome

The later generated mobile Checkout images were approved only as a **visual-language reference**.

They are explicitly **not** an approved replacement page structure and must not be treated as a new static specification.

### Approved visual qualities to borrow

```text
warmer and more layered neutral surfaces
clearer distinction between page background and commerce controls
stronger but restrained input, shipping-option and payment-option boundaries
dark green / stone primary CTA treatment
more visible product thumbnails, prices and totals as commerce signals
compact mobile rhythm and stronger transactional hierarchy
subtle decorative linework only where it does not compete with information
```

### Structural elements that remain authoritative

The current approved repository pages remain the sole structural source of truth:

```text
preview/spatial-flow-checkout-v1.html
preview/spatial-flow-checkout-shipping-v1.html
preview/spatial-flow-checkout-payment-v1.html
```

The implementation must preserve their approved:

```text
01 Address content and field sequence
02 Shipping information hierarchy and interaction flow
03 Payment information hierarchy and interaction flow
02 / 03 Before it leaves. context-card architecture
03 Address + Contact + confirmed Shipping Method grid
Order Summary ownership and placement
01 → 02 → 03 linked state handoff
Cryptocurrency as the only currently confirmed payment method
```

### Rejected structural transfer from generated images

Do not copy the generated images' altered:

```text
header or step-navigation construction
field grouping or field order
page-section order
context-card layout
shipping-option structure
payment-option inventory
CTA wording or transaction semantics
Order Summary structure
product data
spacing measurements merely because they appear in the image
```

The generated images may guide color, surface depth, border weight, typography contrast and visual rhythm only.

### Additional visual exclusion

Do not introduce a decorative vertical color strip beside the active payment or shipping option merely to imitate a reference image. Selection should remain legible through the approved border, radio state, background shift or another restrained state treatment.

## Locked implementation principle

```text
Preserve the approved Checkout structure exactly.
Borrow only the approved Editorial Commerce visual language.
Do not redesign the page while applying the mobile visual enhancement.
```

Any future implementation proposal must be demonstrated against the actual 01, 02 and 03 repository structures before source changes are authorized.

## Recommended next decision gate

Before implementation, prepare a mobile-only structural-faithful visual comparison using the actual Checkout pages:

```text
01 Address — current approved structure + proposed visual language
02 Shipping — current approved structure + proposed visual language
03 Payment — current approved structure + proposed visual language
```

The comparison must not alter the content hierarchy, section order, field sequence or approved interaction model.

## Implementation boundary

```text
No source edit approved yet.
No desktop rule changes.
No broad global card treatment.
No change to the approved S3 interaction flow.
No structural transfer from generated images.
```
