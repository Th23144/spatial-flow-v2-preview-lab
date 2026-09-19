# Step 4G — Spatial Flow global Home deferred; Shop becomes light commerce-home destination

Date: 2026-09-19
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User understanding confirmed

The user summarized the new architecture as:

- the overall/global Spatial Flow Home does not need to be designed now;
- the active design target is the ecommerce site's "light homepage";
- this target is a hybrid of Shop Landing + Product Archive.

This understanding is correct.

## Architecture decision

For current Project 2 scope:

### Global Home
- deferred;
- not required for current ecommerce reskin closure;
- should later be treated as a broader Spatial Flow brand/experience portal;
- no further Home mockups or production edits now.

### Shop
- becomes the primary commercial destination;
- should combine a restrained landing layer with the real product archive;
- must not become a full conventional ecommerce homepage;
- must not collapse into a bare WooCommerce product grid.

Expected responsibilities:
1. brief commercial/editorial opening;
2. current edit / merchandising context;
3. selective category / room / discovery paths;
4. Custom Studio entry as a signature capability;
5. real WooCommerce filter/sort/product grid/pagination;
6. concise lower-page editorial/brand note.

### Studio
- remains a signature product experience/tool;
- future integration should avoid a redundant full standalone marketing homepage.

## Immediate implication

The next design task is NOT Home.

The next design task is:
`Shop Landing + Product Archive Hybrid`

Use the already completed Shop archive as the structural base and evolve only the upper/feature layers needed to make it function as the ecommerce site's light homepage.

Status:
GLOBAL HOME DEFERRED / SHOP HYBRID COMMERCIAL DESTINATION = ACTIVE DESIGN TARGET.
