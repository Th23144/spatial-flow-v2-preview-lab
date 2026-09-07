# Step 4D — Manual Code Snippet Indentation Delivery Rule — 2026-09-07

## User feedback
During B3.1 manual edits, replacement snippets were logically correct but some snippets did not preserve the indentation level required by their actual insertion context. This forced the user to add leading spaces manually.

## Locked delivery rule
For every future manual code replacement in Project 2:

- The assistant must inspect the surrounding source context before giving a snippet.
- Every replacement block must include the exact leading indentation needed at the target location.
- Nested PHP/HTML blocks must be delivered already aligned with the surrounding file.
- Do not give a column-0 "bare" snippet when the target lives inside a function, loop, conditional, template block, or other nested scope.
- If replacing a whole top-level CSS rule/block, column-0 selectors remain correct; declaration indentation must still match the file style.
- The user should be able to paste the replacement directly without performing manual indentation cleanup.

## Current B3.1 returned-source audit note
The returned `functions.php` and `single-product.php` are syntactically valid, but manual formatting drift is visible in the newly edited save-field array and Section 01 template block. The returned CSS B3.1 block itself is structurally balanced and top-level indentation is valid.

This is a workflow correction, not a product/runtime change.
