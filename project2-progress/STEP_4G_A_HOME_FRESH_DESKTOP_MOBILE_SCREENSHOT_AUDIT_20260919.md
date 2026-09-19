# Step 4G-A — Home fresh desktop/mobile screenshot audit

Date: 2026-09-19
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Evidence received

Fresh live Home screenshots supplied by the user:
- desktop full-page;
- phone full-page.

Reference:
- `preview/spatial-flow-v1.html`.

Shared Header/Footer remain protected and are not reopened by this audit.

## High-level finding

The current Home is not a minor visual drift from the canonical reference. It is a different information architecture.

Current live Home modules observed:
1. commerce-style crystal-jewelry Hero with stats + image mosaic;
2. trust badges;
3. category card section;
4. featured collection product cards;
5. dark curated-set / bundle block;
6. intention / energy-selection block;
7. brand-philosophy split card;
8. newsletter / guidance form;
9. shared Footer.

Canonical reference Home body:
1. TOC strip;
2. Section 01 Cover Story / editorial Hero;
3. Section 02 In This Issue / Journal cards;
4. Section 03 Manifesto spread;
5. Section 04 The Index / product edit;
6. Section 05 Where They Live / room placements;
7. Dispatch / newsletter;
8. shared Footer.

Therefore Home requires a structural body rebuild/recomposition rather than another incremental styling patch.

## Desktop visual diagnosis

- Current Hero is compact commerce landing-page language; reference Hero is large editorial cover-story language.
- Reference TOC strip is absent.
- Current categories/trust areas have no direct 1:1 reference equivalents.
- Reference Journal section is absent from the live body.
- Current brand-philosophy block is the closest semantic owner for the reference Manifesto, but geometry/composition differs materially.
- Current Featured Collection has real dynamic product cards and can potentially become the reference Index section.
- Current dark curated-set block has no direct reference equivalent; it may be retired or its real data reused elsewhere only after source audit.
- Current intention cards semantically overlap with the reference Where They Live concept, but current language is purpose/goal based instead of room/placement based.
- Current newsletter/guidance block is the closest existing owner for Dispatch but currently reads as lead capture/product guidance, not the editorial Dispatch composition.
- Current overall desktop is much more card-heavy, rounded and commerce-oriented than the open editorial reference.

## Mobile visual diagnosis

- Current phone layout preserves the same commerce architecture and becomes very vertically dense.
- Hero actions/stats/images stack into a compact e-commerce first screen rather than the reference editorial cover.
- Category and product card stacks dominate the page length.
- Dark curated-set block remains a self-contained card island.
- Intention and philosophy sections remain card-based.
- Newsletter/guidance section is boxed/form-heavy.
- Reference phone language should instead inherit the editorial section hierarchy from the canonical Home reference, with independent mobile production-quality spacing.

## Existing backend ownership evidence

Current/latest available theme sources confirm existing editable/dynamic Home owners:
- `spatial_flow_home_mod()`;
- `spatial_flow_home_featured_products()` using real WooCommerce products;
- `spatial_flow_home_space_cards()`;
- `sf_home_*` Customizer controls;
- existing dynamic bundle/set owners;
- existing newsletter/product-guidance owners.

The rebuild must preserve/reuse these owners where semantically valid. It must not hardcode commerce data or destroy backend editability.

## Tentative semantic reuse map — pending current template source audit

- Reference Cover Story -> existing Hero copy/media owners, likely expanded with missing editorial metadata owners if needed.
- Reference In This Issue -> no verified current Home article owner found yet; likely needs real WordPress/Journal post source, not hardcoded sample cards.
- Reference Manifesto -> reuse current brand/philosophy editable owners where possible.
- Reference The Index -> reuse `spatial_flow_home_featured_products()` / real WooCommerce data.
- Reference Where They Live -> potentially reuse `spatial_flow_home_space_cards()`, but current purpose-based semantics must be audited before remapping.
- Reference Dispatch -> reuse existing product-guidance/newsletter/contact infrastructure only if functional semantics remain truthful.

## Gate before implementation

Do not edit Home yet.

Need the current production source owner for `/`:
- current Home template PHP file;
- current latest `functions.php`;
- current latest `assets/css/spatial-flow.css`;
- any Home-specific JS/template-part if the Home template references one.

Once the exact owner is identified:
1. source audit;
2. exact owner/editability map;
3. current-vs-reference strict delta matrix;
4. bounded structural implementation batches.

Status:
HOME FRESH VISUAL AUDIT COMPLETE / STRUCTURAL REBUILD REQUIRED / CURRENT TEMPLATE SOURCE OWNER REQUIRED.
