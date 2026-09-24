# Task / Information Pages — Design First, Mapping Second

Date: 2026-09-23
Project: Spatial Flow V2 / 项目二换皮工程

## Decision

After Wishlist Harmonized visual baseline was accepted, do NOT immediately begin production mapping for Wishlist.

First finish / lock the remaining task-oriented and information-oriented page design baselines, then move into production mapping as one coordinated stage.

## Design-first scope

Current priority:
- Search
- 404
- Contact
- Utility / Policy

Then perform light harmonization of retained early Project-2 previews:
- Services
- FAQ / Help
- Track Order

Wishlist visual baseline is already locked:
- `preview/spatial-flow-wishlist-harmonized-v1.html`

Account remains optional / future-only.
About remains a separate brand-expression candidate and is not required to block this task-page batch.

## Why

These pages share:
- the accepted Main Header / Footer shell;
- typography / spacing / color system;
- utility-page interaction language;
- responsive rules.

Locking the visual system across the batch first avoids repeated implementation churn and prevents page-by-page drift.

## Production sequence after visual lock

### Batch A — lower-risk content / utility pages
- 404
- Utility / Policy
- Services
- FAQ / Help
- Contact

### Batch B — functional task pages
- Search
- Track Order

### Batch C — commerce-integrated page
- Wishlist

Wishlist is implemented last because it must preserve YITH Wishlist + WooCommerce ownership and has the highest dynamic/state integration risk among this batch.

## Mapping rule

Before implementation of each page:
- audit the current live WordPress/WooCommerce DOM / template / shortcode / plugin owner;
- map accepted static design regions to real dynamic owners;
- preserve backend editability;
- do not hardcode data currently owned by WordPress, WooCommerce, YITH or other live plugins.

## Status

WISHLIST DESIGN = LOCKED.
TASK / INFORMATION PAGE VISUAL BATCH = CONTINUE.
PRODUCTION MAPPING = DEFER UNTIL THIS VISUAL BATCH IS LOCKED.
