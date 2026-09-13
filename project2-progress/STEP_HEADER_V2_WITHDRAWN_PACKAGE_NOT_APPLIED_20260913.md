# Project 2 · Header V2 withdrawn package not applied · 2026-09-13

## Current project stage
Main-site Header production-quality / IA / interaction refinement remains active.

## User confirmation
The user confirmed that the previously generated `SPATIAL_FLOW_HEADER_V2_2.7.47_PATCH.zip` package was **not applied** to the live/server child theme.

## Current live state
Therefore the production theme remains on the pre-package baseline:
- child-theme implementation is still the existing 2.7.46 live state;
- no Header V2 production source has been installed;
- no rollback is required;
- no runtime acceptance may be inferred from the withdrawn package.

## Important correction preserved
The withdrawn package must not be used for deployment. The reason remains:
1. the package was advanced before the required deployment gates were satisfied;
2. whole-file ZIP replacement is not the default live-edit method for this project;
3. the production specification incorrectly reassigned Main mobile PRIMARY ownership away from the independent `sf_mobile` menu owner.

## Current stop point
Do not modify the live server yet.

## Exact next action
Correct the Header V2 production implementation specification first, preserving:
- `sf_primary` as the desktop primary navigation owner;
- `sf_mobile` as the independent Main mobile navigation owner;
- the accepted grouped / progressive mobile UX as a rendering and hierarchy redesign, not an ownership takeover;
- existing WooCommerce taxonomy, Search, Wishlist, Bag and backend editability authority.

After the corrected specification is recorded, implementation must proceed using bounded manual replacements unless a future full-file replacement batch is separately requalified under the verified whole-file replacement policy.

## Deferred item
The separate WordPress Page Inventory + Menu Admin Hygiene Audit remains deferred until Header implementation is stabilized.
