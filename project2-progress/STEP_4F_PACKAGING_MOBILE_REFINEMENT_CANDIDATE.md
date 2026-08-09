# Step 4F · Product Packaging · Mobile Refinement Candidate

Date: 2026-08-08
Status: STATIC MOBILE CANDIDATE · USER ACCEPTANCE PENDING
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The desktop Compact Expandable Product Packaging candidate was accepted by the user.

During phone review, the user identified two mobile-specific issues:

```text
1. Opening the separate-packaging workflow felt awkward / too vertically stacked.
2. The selected-choice indicator/color felt visually inconsistent (described as a green/screen-like feel) and should match the established upper Product Packaging color system.
```

The user requested mobile optimization without changing the accepted desktop logic.

## Preserved accepted contract

No business rule or desktop interaction model changed.

Still locked:

```text
Standard Packaging = free
Gift Packaging = placeholder $9.00 per physical gift package
Standard personalization = enabled by default, future admin toggle required
Gift package = independent gift-card message
Grouping modes = Together / Separately / Custom
Custom grouping = package-centric, not item-to-package-number matrix
Generated packages = compact summaries, one package expanded at a time
Desktop Compact candidate = accepted
```

## Mobile-only changes

A new candidate stylesheet was introduced:

```text
preview/spatial-flow-checkout-packaging-v5.css
```

It imports the accepted v3 desktop contract and applies only bounded mobile overrides.

### 1. Three grouping modes remain three columns on phone

Previous mobile rule changed the three modes into three vertical rows.

This candidate keeps a compact three-column selector on phone:

```text
Together | Separate | Custom
```

Mobile cards are shorter and hide the long explanatory copy while keeping title + result/meta.

### 2. Selected-state palette aligned to Spatial Flow

The mobile grouping selector no longer relies on a system-looking selected-state treatment.

Selected state now uses:

```text
ink border
subtle clay-tinted background
clay selected dot
paper inner contrast
```

This is intended to visually align with the existing Standard / Gift Packaging color language rather than introduce a green/screen-like accent.

### 3. Expanded Package remains compact on phone

When a Package summary is opened:

```text
Standard | Gift
```

remain side by side on mobile instead of becoming two large vertical rows.

Other density reductions:

```text
- tighter workspace heading
- tighter Package summary rows
- shorter edit button
- compact item-movement rows
- shorter gift-message field
- reduced package-plan spacing
```

### 4. Touch-state cleanup

Packaging mode and Edit controls use a bounded clay-tinted tap highlight to remain visually consistent with the site palette.

## Files changed

```text
preview/spatial-flow-checkout-packaging-v5.css
preview/spatial-flow-checkout-packaging-v1.html
```

Commits:

```text
f4efa9a  Add mobile refinement layer for compact packaging candidate
042ef15  Use mobile-refined packaging candidate stylesheet
```

## Why v5 is separate for now

The accepted desktop v3 contract must not be destabilized while testing mobile refinements.

Therefore v5 currently:

```text
imports v3
+ adds bounded mobile overrides
```

If the user accepts this mobile candidate, the mobile rules should later be consolidated into the final approved Product Packaging stylesheet before live SAFE5 migration.

If rejected, rollback is narrow:

```text
restore HTML stylesheet reference from v5 back to v3
```

## Intentionally NOT changed

```text
- real SAFE5 Checkout
- WooCommerce Session
- WooCommerce fee calculation
- order metadata
- backend Packaging settings
- Step 03 Payment
- Step 04 Order Result
- Batch 6
```

## Acceptance focus

User should review at phone width, especially 390px / 360px:

```text
1. Do Together / Separate / Custom now feel compact and clear as three phone columns?
2. Does the selected choice use the correct ink/clay Spatial Flow palette with no green/screen-like feel?
3. Does opening Package 01 / 02 / 03 feel materially cleaner?
4. Do Standard / Gift remain readable side by side inside an expanded package?
5. Is there any clipping, horizontal overflow, cramped text or unusable tap target?
6. Desktop appearance must remain the previously accepted Compact candidate.
```

## Current stop point

```text
Desktop Product Packaging Compact contract: ACCEPTED
Mobile Product Packaging refinement: AWAITING USER REVIEW
Real SAFE5 Product Packaging implementation: NOT STARTED
Batch 6: PAUSED
Step 04: deferred to planned later stage
```

## Exact next action

```text
User reviews fixed-commit mobile candidate.
If accepted: mark mobile visual contract accepted and consolidate static Packaging visual contract.
If rejected: revise mobile candidate only and record the revision.
```

## Recording policy

This step follows:

```text
PROJECT2_STEP_RECORDING_POLICY.md
```

No meaningful Project 2 step is considered formally advanced without a GitHub record.
