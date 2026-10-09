# Project2 · Single Article 04 — Restore BOTH editorial afterword and original reading invitation

Date: 2026-10-09.

## LATER USER-APPROVED SEMANTIC LOCK — READ THIS FIRST

After this visual candidate, user expressly approved the neutral **Afterword / 后记** editorial content model: it is *part of each article's actual content, not a piece of mandatory decoration*. Optional per WordPress post, real author/editor attribution, no content → no module, not a repeated templated slogan, and distinct from original Reading Invitation. The label `A Note from the Editors` in Concept04 is **visual placeholder only**, not a hard-coded production rule.

**Authoritative locked contract:** [LOCKED_BLOG_SINGLE_ARTICLE_AFTERWORD_EDITORIAL_CONTENT_CONTRACT_20261009.md](./LOCKED_BLOG_SINGLE_ARTICLE_AFTERWORD_EDITORIAL_CONTENT_CONTRACT_20261009.md).


## User feedback and root cause
User first selected ONLY Article02's Editor Afterword as its desirable innovation. Assistant produced Article03 based on Article01, keeping the afterword but **replacing** rather than *retaining alongside* Article01's original "Some questions deserve a longer shelf" public reading invitation. User then shared a screenshot of the original band, asking "那01版本的这个呢？". Their question exposed an unapproved removal.

## Independent design distinction
- Editor Afterword (02): **reflective closure** of the article and editorial voice, placed just after footnotes/before author.
- Original Article01 Support Band: **navigation gateway** into open article archive and subject paths, placed after 3 related article links/before Dispatch.
- They are visually related but genuinely different editorial functions. Retain both in Article04 and examine entire long-page rhythm; this is not an automatic acceptance of unnecessary feature clutter. If duplicate-feeling remains in browser, reevaluate positions/copy instead of deleting without signoff.

## New review candidate
https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/e61b90c1430955713a23b8aea656649abe772b9e/temp-preview/Spatial-Flow-Journal-Single-Article-04.html

Branch: `temp-blog-single-article-04-both-blocks`
Path: `temp-preview/Spatial-Flow-Journal-Single-Article-04.html`
Pinned commit: `e61b90c1430955713a23b8aea656649abe772b9e`.

Changes relative to Article03:
1. Restore Article01's original Support Band markup and links after three related article cards and before Journal Dispatch, with a distinctive `public-reading-invite` class for local spacing (not a global overlay).
2. Keep Article02 Editorial Afterword untouched, positioned immediately following main essay and before author.
3. Replace previous emergency 108px/74px padding-bottom on related cards with normal padding because spacing belongs at the restored invitation: desktop Support Band margin top/bottom 85px/95px, mobile 64px/72px. Original article main CSS is unchanged.
4. Original CSS creates one CTA arrow with ::after, so remove the duplicate inline arrow from button label.
5. Preserve the original two pull quotes, article reading sidebar, mobile TOC, author, previous/next, related cards, inert Dispatch, and original paper footer.
6. No production WordPress or Project3 repo changes.

## Source-level QA
Candidate read back from pinned commit, 72,525 characters. Original source CSS remains 22,788 characters; 4 CSS blocks balanced, 3 JS scripts passed syntax compilation; H1 count 1; in-page targets valid and IDs unique; 1 Editor Afterword and 1 original invitation; 3 related links; correct content order:
Footnotes → Editor Afterword → Author → Previous/Next → Related 3 → Original Reading Invitation → Dispatch → Footer.
Actual Chrome screenshots and runtime behavior are NOT verified by this source gate; user visual acceptance pending.

Status: **Static preview / WAITING USER VISUAL REVIEW**. Prior v01-v03 retained for version comparison, no production code edits.
