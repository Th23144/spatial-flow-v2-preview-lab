# Step 4F · Packaging Visual Hierarchy Pass

Date: 2026-08-08

## Why this pass exists

The Product Packaging business logic is now understandable, but the candidate still felt too much like a configuration/admin panel because it used too many nested boxes, repeated tier choices visually, and gave the basic packaging choice and advanced grouping workflow equal visual weight.

## Locked direction for this visual pass

The information architecture remains:

```text
Basic choice
- Standard Packaging
- Gift Packaging

Advanced only when needed
- Keep everything together
- Package every item separately
- Choose which items go together

Generated physical packages
- Package 01 / 02 / ...
- each package chooses Standard or Gift
- package-specific name or gift message
```

The visual hierarchy changes to:

```text
basic choice = primary customer decision
advanced grouping = secondary workflow
package details = tertiary result/editor
```

## Visual corrections

- removed card-inside-card treatment from Standard / Gift rows
- Standard and Gift remain stacked, one full-width row each
- selection is expressed by subtle background, type hierarchy and rules instead of heavy boxes
- selected tier detail expands naturally below the selected row
- inputs use editorial underline treatment instead of boxed form controls
- "separate items" becomes a lightweight secondary action rather than a large dark CTA
- when advanced grouping is open, the basic Standard / Gift rows are visually de-emphasized
- grouping modes become a three-row editorial decision list rather than three equal cards
- custom assignment uses lightweight package buttons only when needed
- generated Package 01 / 02 / ... sections are separated by horizontal rules rather than nested containers
- package tier choices, item membership and optional personalization remain visible but visually quieter

## Business logic unchanged

No pricing, grouping semantics or data model were changed by this pass.

```text
Standard = free
Gift = provisional $9 per non-empty gift package
same-order package grouping does not create separate shipments
separate mode auto-creates one package per item
custom mode supports arbitrary grouping
```

## Acceptance status

```text
Logic: provisional accepted
Outcome-first grouping: provisional accepted
Visual hierarchy pass: READY FOR USER REVIEW
Live SAFE5/Woo implementation: NOT STARTED
Batch 6: PAUSED
```
