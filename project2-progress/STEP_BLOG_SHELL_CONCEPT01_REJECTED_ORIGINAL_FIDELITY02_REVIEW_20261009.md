# Project 2 · Blog Shell Visual Authority Correction — 2026-10-09

## User judgment
The user explicitly rejected `Blog Header + Footer Concept 01` as extremely ugly and fundamentally different from the original Ink & East visual references. **Status REJECTED**. It must never be treated as design authority, mapped into production, or polished further.

## Root cause
Concept 01 was a generic simplified brand/editorial layout: conventional large hero, placeholder image, ordinary three-card row, and dark ecommerce-like footer. It eliminated the unique original design composition (full-height two-column magazine cover, photography and plate, Chinese typographic footnotes, vermilion seal, oversized colophon, issue-table system, and original paper footer). The failure was structural, not color/spacing.

## Corrected Source-of-Truth
Project 3 repo **read only**: `Th23144/ink-east-planning`
Visual reference: `preview/ink-east-v1.html`.
Supporting inline visual-component sources: `preview/shared/ink-east-public-nav.js` and `preview/shared/ink-east-footer.js`.
The source-native `apps/web` prototype is function-first visually provisional V0, therefore NOT the target art direction.

## Replacement concept (PREVIEW ONLY)
Project 2 temporary branch `temp-blog-original-fidelity-02`
File `temp-preview/Spatial-Flow-Journal-Original-Fidelity-02.html`
Preview: https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/temp-blog-original-fidelity-02/temp-preview/Spatial-Flow-Journal-Original-Fidelity-02.html

Changes from original:
- Preserves exact original 44,191-byte main CSS `<style>` block, fully unchanged (source-string equality checked).
- Preserves original full-screen photography-driven cover and the editorial colophon, table-of-contents, article feature cards, full-bleed quote and category-spine layout.
- Inlines adapted copies of original navigation and footer scripts; no relative JS script dependencies.
- Changes public-facing branding to Spatial Flow Journal and normalizes navigational anchors to the static preview.
- Removes sections requiring old platform functions: reader letter service, membership/reading room, custom ebook studio, fictional newsletter form; keeps 5 actual visual `section` elements in place of 9.
- The original footer paper-based wordmark and multi-column colophon presentation remain; changed content/links are illustrative and must be mapped to actual WP menus later.
- Other illustrative magazine/body text is NOT approved production content. Real WordPress articles remain authoritative during production mapping.

## Verification limits
- Both source and candidate files retrieved from their respective GitHub branches.
- Visual CSS byte-for-byte same; source 9 sections vs adapted 5.
- Candidate contains no old platform-only section markup.
- File created in Project 2 **temporary review branch only** and read back from GitHub.
- Browser screenshot and live WordPress runtime for revised 02 have NOT yet been verified: don't assert visual acceptance, cross-browser QA, or 1:1 completion.

## Status and next step
Concept 01 — REJECTED.
Original Fidelity 02 — READY FOR USER VISUAL REVIEW.
No production code modifications. Project 3 repository was accessed read-only.
Review design before any code mapping; adapt the actual WP Header/Footer only after user approval.
