# Project 2 — Search03: original Archive visual inheritance rebuilt

Date: 2026-10-09
Status: **STATIC REVIEW CANDIDATE / NOT VISUALLY ACCEPTED**.

## User correction
User reviewed Search02 and said: **“原创我没意见，但你不能把字体什么都变了吧？结构也是一塌糊涂”**.

This is a strong rejection of Search02's **typographic proportions and information hierarchy** — user is not opposed to original design where there is no finished search reference, but originality must stay inside the approved editorial design system. Search01/02 are NOT approved.

### Root cause audited
Compare the actual styles of accepted Project2 Blog Archive01, Category02, Single Article04 versus Search02. All use EB Garamond / Noto Serif SC / JetBrains Mono and the original Project3 paper/ink/seal palette. However, Search02 independently overwrote many font metrics with `font:` shorthands, enlarged main heading to 127px, group headings to 38px, and result titles to 40px. Technically including the original base CSS did **not** equate to stylistic inheritance. Furthermore Search02's huge header+aside and independent results layout failed the established structure/spacing cadence.

## New Search03 candidate
- Preview: https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/d8d7417aa7b7aae9c257215fe5c6a837937cd013/temp-preview/Spatial-Flow-Journal-Search-03.html
- Branch: `temp-blog-search-editorial-aligned-03`
- File: `temp-preview/Spatial-Flow-Journal-Search-03.html`
- Pinned commit: `d8d7417aa7b7aae9c257215fe5c6a837937cd013`.

This is a **fresh rebuild from the existing Archive01 style and markup component contract**, not an additional CSS patch layered on Search02.

### Core visual contract
- Original **12,517-character** Archive main CSS kept byte-identical, plus identical font-loading links and static header/footer component scripts.
- Restore source component classes: `hero`, `kicker`, `cn-title`, `lede`, `block`, `section-head`, `shelf`, `shelf-item`, `index`, `body`, `cn-sub`, `excerpt`, `meta`, `type`, `issue`, `read`, and `empty`.
- Restore archive main title's approx 48–92px scale and its inherited EB Garamond regular weight; original `shelf-item h3` 24px and line 1.2 plus Chinese subline. Supplementary search CSS only provides functional form, search type tabs, grouping, interactions, responsive adjustments.
- Structure is a coherent task page: (1) shared nav; (2) one Archive-derived heading with an immediately associated restrained search input and quick terms; (3) a single ruled section-head for search results; (4) 3 grouped result shelves using **original Archive horizontal row geometry**; (5) ready/empty states using original Archive empty-state styling; (6) quiet archive back-link and shared footer.
- No giant decorative duplicate `尋` glyphs, no conflicting alternate typographic system, no heavyweight results sidebar, no fake product/category architecture, no extra black/white interruption bands.
- Don't blindly reproduce Archive landing's dark editorial promotion or unrelated Journal Dispatch: search is a utility entry with its own functional objective.

## Backend/source contract preserved
- Real production `/search/?q=` search groups: journal published Posts up to 9, public Pages up to 6, Category Topics up to 12; no products, no fabricated pagination.
- The working JS is **illustrative sample content only**, not production search and not a real permalink provider.
- Input suggestions, no-query state, no-match state, filter tabs, example modal work on local sample data; future production must keep WP search handlers unchanged.
- Project3 remains read-only; user WordPress child theme untouched.

## Source QA
- Candidate read back from GitHub: 53,053 characters.
- Archive original CSS 12,517 characters preserved; the 3 scripts compile.
- 1 H1, 1 section and 1 main with matching closures; no duplicate HTML IDs.
- Controlled DOM-stub interaction tests:
  - default `space`: 9 examples, 3 groups;
  - `stone`: 6 examples, 2 groups;
  - nonsense word: 0 / no-results;
  - Clear: initial empty search state;
  - sample `space` suggestion: 9 examples;
  - Topic filter: 1 example; demo dialog open and close.
- Not yet visually examined at browser widths 360/390/430/desktop. **Not yet accepted by user**.

## Next step / user gate
Compare Search03 to Archive01 and Category02 **specifically on typeface rendering, Chinese subheads, gutters, spacing and density**, then judge functional usability. Revise if needed; do not proceed to Blog 404 yet until search visually accepted or user explicitly authorizes continuation.
