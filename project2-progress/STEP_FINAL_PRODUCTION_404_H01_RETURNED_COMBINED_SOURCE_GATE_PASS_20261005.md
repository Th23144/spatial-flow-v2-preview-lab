# Final Production 404 — H01 Returned Combined Source Gate PASS

Date: 2026-10-05
Project: Spatial Flow V2 / Project 2

## Returned files

- `404.php`
- `functions(20261005-033958).php`
- `spatial-flow(20261005-033958).css`

## CSS

Returned identity:
- 621,021 bytes
- 22,253 logical lines
- SHA256 `95b0750cc849e0fad96c560cc52890ad2ae5f050ae9b2f3493725e09cbc66a22`
- braces 3505 / 3505
- comments 241 / 241
- top-level CSS parse errors 0

This is byte-identical to the precomputed H01 CSS target.

CSS = PASS.

## functions.php

Returned identity:
- 651,069 bytes
- 12,475 logical lines
- SHA256 `1e05ac597d4fb506797ef0df86ca601afb0424d875123b719aad6f06f260ef9b`
- version `2.7.58`
- PHP syntax PASS

Advertised precomputed target was:
- 650,975 bytes
- 12,466 logical lines
- SHA256 `a55a7821f0fb37b96cdc78ef184a33580c46beea3116a60ee67266be23b49943`

Exact diff audit against the pre-edit baseline and internal candidate shows:
- outside the authorized 404 insertion, the only existing-source change is `2.7.57 -> 2.7.58`;
- the 404 owner is inserted at the correct unique anchor before Step 5P-B;
- the returned owner contains the same keys, defaults, Customizer fields, sanitizers, and hook as the intended candidate;
- the source delta versus the internal candidate is presentation-only:
  1. `$textarea_fields` is expanded from one line to multiple lines;
  2. a trailing comma is present after the final `note` item;
  3. one blank line appears before `add_action`.

These differences are semantically equivalent and came from the user-facing manual code block formatting, not from an unauthorized logic change.

functions.php = PASS and is rebaselined to the returned identity above.

## 404.php

Returned identity:
- 8,158 bytes
- 149 logical lines
- SHA256 `8f7d7eddaf83cf1e178517c34337b5b8198ae4269db16cf204527e418df14b0e`
- CRLF line endings
- no trailing newline
- PHP syntax PASS

Advertised precomputed target was:
- 7,483 bytes
- 109 logical lines
- SHA256 `ff90d02ce3b9c624651f5fbb7ec968a346dc300bf72b13ec5cfe580f312c000f`

Full diff against the internal candidate proves:
- all non-whitespace source characters are identical;
- differences are only CRLF vs LF and expanded HTML/PHP line formatting from the user-facing manual code block;
- route owners, form method/action, q= field, text-presentation arrows, copy keys, native header/footer calls, and recovery links are unchanged.

404.php = PASS and is rebaselined to the returned identity above.

## Gate result

Combined Source Gate = PASS.

The previously advertised exact hashes for functions.php and 404.php are withdrawn because they corresponded to a more compact internal candidate than the actual user-facing manual code block. The user did not make an incorrect logic edit.

Current accepted local source baselines:
- `404.php`: SHA256 `8f7d7eddaf83cf1e178517c34337b5b8198ae4269db16cf204527e418df14b0e`
- `functions.php`: SHA256 `1e05ac597d4fb506797ef0df86ca601afb0424d875123b719aad6f06f260ef9b`
- `spatial-flow.css`: SHA256 `95b0750cc849e0fad96c560cc52890ad2ae5f050ae9b2f3493725e09cbc66a22`

No further source correction is required before runtime.

## Next runtime gate

Use a deliberately nonexistent MAIN-SITE URL and verify in one batch:
1. native 404 page appears instead of Astra parent fallback;
2. Header/Footer are the existing production owners;
3. Search submits to main-site `/search/?q=...`;
4. Return Home works;
5. Shop works;
6. Journal crosses to the Journal site correctly;
7. Support opens FAQ;
8. desktop visual comparison against accepted 404 authority;
9. 1024 regression;
10. 390–430 mobile review and overflow check.

Status: COMBINED SOURCE PASS / RUNTIME READY.
