# PROJECT 2 · Blog Search redesign — concepts 01 / 02 / 03 all rejected

Date: 2026-10-09

## Actual user feedback (authoritative)
- Concept01: “这份差点意思” — NOT accepted.
- Concept02: “原创我没意见，但你不能把字体什么都变了吧？结构也是一塌糊涂” — NOT accepted.
- Concept03: “不行，还是很差” — NOT accepted.
Do not present any as approved; do not map any of them to production.

## Root-cause diagnosis
Attempt 01 borrowed Archive-inspired decoration (including a search result sidebar); attempt 02 independently recreated font dimensions, disrupting established typography; attempt 03 reused original Archive CSS/components but ALSO replicated Archive's promotional hero and repetitive vertical shelf sections. Correct font families and CSS inclusion did not yield the right search page composition. Further cosmetic changes to these sources are not the answer.

## Direction for discussion (NOT yet user approved)
Treat Search as a **compact, task-first editorial utility page**, not another long Archive landing page. A serious revised concept should propose:
1. The shared Journal header (unchanged).
2. A restrained page heading and the search field in one obvious primary functional area, with clear focus and a real text query affordance. No oversized generic poetic masthead, giant decorative Chinese character or extra marketing paragraphs.
3. An article-led results workspace. On desktop, place primary published article results in the broad left column and secondary Topic/Page results in a lighter right-side index. On mobile, collapse into an accessible logical reading order. The columns are layout structure, **not boxes or cards**.
4. Keep the original Project3/approved Project2 palette #f4ede0 / #1a1611 / #a02d23, EB Garamond, Noto Serif SC, JetBrains Mono, actual type scale from reviewed Archive/Category. No independent heading-font system.
5. Ready/no-match states designed in the same shell; no invented server-side result paging. Real blog `/search/?q=...` splits articles (up to 9), pages (up to 6), categories (up to 12); products excluded and `?s` route separate.
6. Do not auto-build a fourth static HTML until the new layout objective is explicitly checked; stop generating speculative page variants after three rejected designs.

## Source contracts and frozen decisions
- Category/Topic 02 static design approved.
- Single Article 04 visual accepted; Afterword is optional per-post content, with **mapping-time WordPress editor educational instructions rather than public placeholder prose**. Rule in `project2-progress/LOCKED_BLOG_SINGLE_ARTICLE_AFTERWORD_EDITORIAL_CONTENT_CONTRACT_20261009.md`.
- Project3 GitHub read only. No WordPress production source changes.
