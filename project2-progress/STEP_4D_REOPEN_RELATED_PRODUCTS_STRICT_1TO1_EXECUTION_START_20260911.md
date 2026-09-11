# Project 2 · Step 4D REOPEN · Related Products strict 1:1 execution start · 2026-09-11

## Current project stage
Step 4D-REOPEN · Single Product remediation.

Section 03 is accepted/closed. Section 04 Reviews is intentionally omitted for the current version by explicit user decision. Gift CTA remains paused while earlier Single Product surfaces are re-audited for true strict 1:1 fidelity.

## User instruction
The user explicitly authorized starting the Related Products correction after comparing the static reference against the current live page and confirming the current live Related Products block is not strict 1:1.

## Governing target
Reference: `preview/spatial-flow-product-v1.html`.

Target characteristics to audit and restore where supported by real dynamic data:
- heading direction `Pieces of a similar weight.`
- `View the full edit →` utility link
- four-column open editorial product presentation on desktop
- 4:5-ish portrait image treatment
- no enclosing white-card / framed-card surface
- product title beneath image
- WooCommerce SKU when available
- existing editable edition metadata when available
- dynamic WooCommerce price
- existing editable placement/editorial note when available
- no fabricated fallback product data
- mobile must be independently production-quality

## Hard boundaries
- keep WooCommerce as source of truth for related-product identity, image, title, permalink and price
- do not hardcode recommendation products
- do not fabricate SKU / edition / placement text
- preserve existing backend-editable `_sf_piece_edition` and `_sf_placement` ownership if present
- audit before issuing manual edits
- prefer bounded in-place edits rather than append-only CSS patches
- do not touch Section 03 accepted behavior, Reviews omission, checkout/cart/payment ownership, or unrelated product-page sections

## Current status
AUDIT / SOURCE-MAP PHASE STARTED.
No live source modification is authorized yet.

## Exact next action
Inspect the current Related Products template/CSS/data ownership, compare it line-by-line with the static reference, freeze the final dynamic target structure, then record the bounded implementation delta before any code instructions are issued.