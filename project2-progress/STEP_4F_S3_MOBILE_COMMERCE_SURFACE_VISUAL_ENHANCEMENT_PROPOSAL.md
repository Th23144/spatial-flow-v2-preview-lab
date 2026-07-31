# Project 2 · Checkout S3 Mobile Commerce-Surface Visual Enhancement Proposal

Date: 2026-07-31  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Current status

```text
01 Address → 02 Shipping → 03 Payment
Desktop review before enhancement: passed
390px review before enhancement: passed
360px review before enhancement: passed
Interaction and state handoff: passed
Mobile Commerce Surface direction: approved
Structure-locked implementation: complete
Post-implementation visual review: pending
Checkout page status: Not done
```

This document records the mobile-only visual concern, design decision, approval boundary and resulting structure-locked implementation.

Authoritative implementation record:

```text
project2-progress/STEP_4F_S3_MOBILE_COMMERCE_SURFACE_STRUCTURE_LOCKED_IMPLEMENTATION.md
```

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

## Approved direction

Use a mobile-only `commerce surface` system.

Preserve the editorial background and typography for:

```text
page title
step progress
introductory copy
section headings
completed-context summaries
```

Increase contrast for areas that require customer action:

```text
Step 01 text inputs, selects and textarea
Step 02 shipping-method choices
Step 03 payment-method choices
future Crypto asset/network choices
future invoice/action panels where interaction is required
```

Approved hierarchy:

```text
Page background:
retain the existing warm neutral background

Interactive group surface:
use a clearly layered warm contrasting plane
with a restrained border and compact internal padding

Individual field/control:
use a clearer paper-like fill than the group surface
with a visible focus/selected state

Selected option:
use the established dark green / stone accent through border,
radio state and restrained background shift

Primary action:
use the stone-green filled CTA on mobile
```

## What must not change

```text
page structure
step order
WooCommerce ownership
field semantics
real data and backend editability
touch-target size
approved 02 / 03 context-card architecture
Order Summary hierarchy
01 → 02 → 03 state handoff
Cryptocurrency as the only currently confirmed payment method
```

Desktop composition remains unchanged except for the explicitly approved Step 01 field icons.

## Visual-reference review outcome

Generated mobile Checkout images were approved only as a **visual-language reference**.

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

### Structural source of truth

The current repository pages remain the sole structural source of truth:

```text
preview/spatial-flow-checkout-v1.html
preview/spatial-flow-checkout-shipping-v1.html
preview/spatial-flow-checkout-payment-v1.html
```

The implementation preserves their approved:

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

### Rejected structural transfer

Do not copy generated images' altered:

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

### Additional visual exclusion

Do not introduce a decorative vertical color strip beside an active input, payment option or shipping option.

Selection must remain legible through:

```text
border
radio state
paper / stone background shift
focus outline
```

## Locked implementation principle

```text
Preserve the approved Checkout structure exactly.
Borrow only the approved Editorial Commerce visual language.
Do not redesign the page while applying the mobile visual enhancement.
```

## Approved implementation

A dedicated reversible stylesheet was added:

```text
preview/spatial-flow-checkout-mobile-commerce-v1.css
```

It is linked after the existing stylesheets on Steps 01, 02 and 03.

Step 01 icons are CSS background SVGs and therefore require no wrapper markup or added DOM elements. They appear on desktop and mobile as explicitly approved.

GitHub structure audit confirmed:

```text
new CSS files: 1
Step 01 HTML additions: 1 stylesheet link
Step 02 HTML additions: 1 stylesheet link
Step 03 HTML additions: 1 stylesheet link
HTML deletions: 0
body-structure changes: 0
field changes: 0
copy changes: 0
interaction-script changes: 0
```

## Current review gate

```text
Review desktop Step 01 icons.
Review 390px Steps 01 / 02 / 03.
Review 360px Steps 01 / 02 / 03.
Confirm no icon overlap, control shrinkage, overflow or structural regression.
```

No Phase S4 Crypto page work begins until this enhancement passes review.
