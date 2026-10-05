# Final Production Search — H01 Returned Source Diff Audit

Date: 2026-10-05
Project: Spatial Flow V2 / Project 2

## Returned files

- `global-search(1).php`
- `functions(20261005-021148).php`
- `spatial-flow(20261005-021148).css`

## Result

### CSS
Exact target match:
- 611,696 bytes
- 21,793 logical lines
- SHA256 `6bd0ba12f4a5eeb67296408d2cb191281d01d0d7eed0d9d0d5a124df4b59f846`
- braces 3438 / 3438
- comments 239 / 239

CSS = PASS.

### functions.php
Returned:
- 644,212 bytes
- 12,340 logical lines
- SHA256 `e5d19dafb8fa4bf2b73c16dcde9cdc714b645cfea48c6cc081580459ffc2c1c0`
- version 2.7.56
- PHP syntax PASS

Expected:
- 644,206 bytes
- 12,339 logical lines
- SHA256 `ed1ba9d79c9020a8ba6069267bf80a160cb2a1f388c281d841ca4e1f7b2c6db9`

Exact diff consists of only two deviations:
1. one extra blank line between the closing brace of `spatial_flow_global_search_defaults()` and the next `spatial_flow_global_search_mod()` owner;
2. Customizer label uses `Journal site page result label` but verified target uses `Journal page result label`.

The second difference originated from the assistant's manual replacement text and is an assistant delivery transcription error. Removing `site ` (-5 bytes) plus one extra LF (-1 byte) yields the exact expected -6 byte / -1 line correction.

### global-search.php
Returned:
- 17,391 bytes
- 288 logical lines by splitlines
- SHA256 `6a6d17d8d2ffdf4f7e950dbf57b3984b220d07b5ec482d4c567b58d9d34b226d`
- PHP syntax PASS

Expected:
- 17,391 bytes
- 287 logical lines
- SHA256 `df3f752f39e59e501b3ee19c53949a7692b59330f15a6ba4ae8939e910f7d54e`

Exact diff consists only of newline placement:
1. one extra blank line before `$product_count`;
2. missing trailing LF after final `get_footer();`.

These cancel in total byte size but change line count/SHA.

## Correction batch

functions.php:
- delete exactly one of the two blank lines immediately after the closing brace of `spatial_flow_global_search_defaults()`;
- replace:
  `'journal_page_label' => 'Journal site page result label',`
  with:
  `'journal_page_label' => 'Journal page result label',`

global-search.php:
- delete exactly one of the two blank lines immediately before `$product_count`;
- add exactly one LF/newline after the final `get_footer();` at EOF.

CSS:
- no change.

## Expected post-correction identities

functions.php:
- 644,206 bytes
- 12,339 logical lines
- SHA256 `ed1ba9d79c9020a8ba6069267bf80a160cb2a1f388c281d841ca4e1f7b2c6db9`

global-search.php:
- 17,391 bytes
- 287 logical lines
- SHA256 `df3f752f39e59e501b3ee19c53949a7692b59330f15a6ba4ae8939e910f7d54e`

CSS remains exact target.

Status: CSS PASS / PHP FUNCTION + TEMPLATE TINY SOURCE CORRECTIONS REQUIRED / RUNTIME BLOCKED.
