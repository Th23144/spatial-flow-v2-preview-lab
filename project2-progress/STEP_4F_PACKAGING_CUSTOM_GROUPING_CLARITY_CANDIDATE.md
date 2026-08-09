# Step 4F · Product Packaging · Custom Grouping Clarity Candidate

Date: 2026-08-08
Status: STATIC CANDIDATE · USER ACCEPTANCE PENDING
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

The user accepted the overall Compact Packaging direction and considered the mobile inline-mode revision usable, but identified a deeper UX problem shared by desktop and mobile:

```text
Package separately
and
Custom grouping
```

were too visually and cognitively similar.

The existing Custom logic could technically build combinations such as:

```text
Package 01 = Product A + Product B
Package 02 = Product C
```

but this capability was not prominent. The item picker also showed products as movable from multiple package editors, which could look like the same product might be selected into multiple packages.

## Locked semantic distinction

The candidate now treats the modes as different tasks:

### Package separately

```text
One item per product package is already decided automatically.
The customer's main remaining choice is Standard vs Gift Packaging for each package.
```

### Custom grouping

```text
First decide which products share each physical product package.
Then choose Standard vs Gift Packaging for that finished package group.
```

The Custom mode must therefore visually prioritize product grouping before packaging style.

## Unique-assignment rule

This candidate makes the existing data rule explicit:

```text
One cart item allocation belongs to exactly one Product Packaging Group at a time.
Moving an item transfers its assignment.
Moving does not duplicate the item into another package.
```

This is a required live implementation rule later, not merely explanatory copy.

## Candidate interaction / visual changes

New files:

```text
preview/spatial-flow-checkout-packaging-custom-clarity-v1.js
preview/spatial-flow-checkout-packaging-v6.css
```

The HTML candidate now loads these after the accepted compact/mobile layers.

### 1. Custom plan summary

Custom mode now displays a clear current plan before package editing, for example:

```text
Package 01  Product A + Product B
Package 02  Product C
```

This makes the actual grouping result visible without opening every package.

### 2. Grouping-first package editor

When a Custom package is expanded, the order becomes:

```text
01 Choose what goes in Package XX
02 Choose the packaging style for Package XX
03 Name / Gift message when applicable
```

The item-grouping task is therefore visually above Standard / Gift selection.

### 3. Explicit ownership labels

Each item shown in the Custom item picker now states its current unique package ownership.

Examples:

```text
Assigned only to Package 01
Currently in Package 02
```

### 4. Explicit transfer actions

Generic `Move here` labels are replaced by transfer wording:

```text
Move from Package 02 → Package 01
```

This communicates that the product leaves its previous package instead of being copied into both packages.

### 5. Custom grouping color hierarchy

Custom grouping uses the existing Spatial Flow ink / clay / paper palette.
The grouping task receives a clay structural accent, while Standard / Gift remains a secondary step below it.

### 6. Mobile readability

On phone widths, Custom item rows become single-column blocks. Assignment status / move actions occupy their own full-width line to avoid the previous cramped or unclear expanded panel.

## Preserved accepted behavior

No commerce rule changed:

```text
Standard Packaging = free
Gift Packaging = placeholder $9.00 per physical gift package
Gift message belongs to the correct Gift package
Personalized name belongs to the correct Standard package
Together / Separate / Custom modes remain
Generated packages remain compact summaries by default
Only one Package editor is expanded at a time
Product packaging remains separate from courier / shipping consolidation
```

## Files changed in this candidate

```text
preview/spatial-flow-checkout-packaging-custom-clarity-v1.js
preview/spatial-flow-checkout-packaging-v6.css
preview/spatial-flow-checkout-packaging-v1.html
```

Commits:

```text
a9c514c  Add custom grouping clarity interaction layer
7f5fcfd  Clarify custom grouping hierarchy and unique item assignment
c3d628a  Wire custom grouping clarity candidate into packaging preview
```

## Intentionally NOT changed

```text
- real SAFE5 Checkout
- WooCommerce Session
- production fee calculation
- production order metadata
- backend Packaging settings
- Step 03 Payment
- Step 04 Result
- Batch 6
```

## Acceptance focus

User should test both desktop and phone:

```text
1. Is Custom grouping now visibly different from Package separately?
2. Is it obvious that Custom is for A+B / C style grouping?
3. Is it obvious that one item can belong to only one Product Package?
4. Does `Move from Package XX → Package YY` remove the duplicate-selection ambiguity?
5. Does the current-plan summary make Package 01 / 02 contents easy to understand?
6. On mobile, is the expanded Custom package readable rather than cramped?
7. Standard / Gift choice must remain available after grouping, but visually secondary to grouping in Custom mode.
```

## Current stop point

```text
Desktop Compact Packaging: accepted
Mobile inline-mode direction: provisionally usable
Custom grouping clarity candidate: awaiting user review
Real SAFE5 Packaging: NOT STARTED
Batch 6: PAUSED
```

## Next action

```text
User reviews fixed-commit Custom grouping clarity candidate.
If accepted, consolidate the final static Product Packaging visual/interaction contract before planning live SAFE5 implementation.
If rejected, revise static candidate only and record the revision.
```

## Recording policy

Governed by:

```text
PROJECT2_STEP_RECORDING_POLICY.md
```

Every meaningful Project 2 step remains repository-recorded.
