# Project2 · Search04 display regression — white/gray blocks inside Inquiry list
Date: 2026-10-10 (user local).
Status: Code fix in static preview; **user visual recheck pending**. No production WP changes.

## User's screenshot
Three white/default native button-looking rectangles appeared on the dark right half of The Inquiry, with black system text and poorly aligned counts. The screen reader label 'Search public Journal content' was incorrectly visible above search input. User asked: 这是什么东西？ Screenshot's red border is user annotation.

## Exact root cause
The section was `<section class="block band-dark" id="search-snapshot">`, but the CSS selectors used `.search-snapshot .anchor-pieces button`. The class selector never matched the HTML element (ID versus class mismatch). Browser native button backgrounds then remained visible, producing the pale blocks and unstyled system text. This is an implementation/QA error, not an intended design.
Furthermore the real Project3 reference uses `<a>` links in `.anchor-pieces` rather than buttons; the copied archive base CSS styles links. The `.sr-only` utility was not declared for the visual preview even though it was used on the search label.

## Fix committed
Preview: https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/bb5391d8240a7264c6f5bcbb7c1e333eb23c5231/temp-preview/Spatial-Flow-Journal-Search-04.html
Branch: temp-blog-search-project3-inspired-04
Source: temp-preview/Spatial-Flow-Journal-Search-04.html
Commit: bb5391d8240a7264c6f5bcbb7c1e333eb23c5231

- Add `search-snapshot` class to dark section, while preserving the ID for Javascript.
- Restore native `<a href="#search-shelf" data-scope>` links for Articles, Topics and Pages using real Project3 `.anchor-pieces a` typography and layout.
- Intercept links with `preventDefault` for existing dynamic result-type filter and scroll behavior.
- Restore correct paper-colored type, vermilion count metadata and bilingual subtitle contrast.
- Add `.sr-only` accessible-label style so the search field's label is available to screen readers but visually hidden.
- Keep original Project3 Archive CSS 12,517 characters unchanged and all other sections intact.

## QA and gate
Re-fetched exact committed file. Three scripts syntax PASS; matching class selector verified; 3 anchors, 0 old category buttons; unique IDs. Simulated search space 9 total (6 articles, 1 topic, 2 pages); clicking Topics prevents default and filters to 1; care yields 5 examples; clear hides the dark panel and shows ready state.
Still no real headless browser screenshot of full HTML (can't download GitHub source into local chromium environment); user visual QA must confirm the rendering. Do not mark page as visually accepted. Main WordPress theme is untouched.

User previously rejected Search01–03; do not treat as baselines. Article04 Afterword's locked editor-teaching mapping note remains binding.