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

## Recommended next decision gate

Before implementation, prepare a mobile-only visual comparison for one representative section using the actual Checkout language:

```text
Option A — current minimal surface
Option B — recommended warm commerce surface
Option C — stronger high-contrast commerce surface
```

The preferred candidate should then be applied consistently to Step 01 fields, Step 02 shipping choices and Step 03 payment choices through bounded mobile selectors only.

## Implementation boundary

```text
No source edit approved yet.
No desktop rule changes.
No broad global card treatment.
No change to the approved S3 interaction flow.
```
