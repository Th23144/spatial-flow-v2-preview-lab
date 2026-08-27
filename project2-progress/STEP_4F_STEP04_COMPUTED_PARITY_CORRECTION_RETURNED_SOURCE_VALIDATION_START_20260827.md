# Project 2 · Step 4F · Step04 Computed-Parity Correction Returned-Source Validation START · 2026-08-27

User returned the two live-site files after applying the previously issued manual anchored correction batch:

- `functions.php`
- `assets/css/spatial-flow.css`

## Validation objective

Validate the returned files before any further runtime test:

1. exact bytes / logical lines / SHA256;
2. `SPATIAL_FLOW_CHILD_VERSION` target value;
3. PHP syntax;
4. CSS brace / comment balance and parser errors;
5. exact presence of the intended Step04 correction rules;
6. compare returned fingerprints against the previously predicted post-edit fingerprints;
7. stop if any material delta or missing/duplicate replacement is detected.

## Previously predicted post-edit fingerprints

### `functions.php`

- bytes: 612,013
- logical lines: 11,689
- SHA256: `c93ddf3ea896ff32d4904a8ef41e0a85923e1dc49a09542e99989a89faf67b3b`
- version: 2.7.17

### `assets/css/spatial-flow.css`

- bytes: 588,493
- logical lines: 20,661
- SHA256: `e1cf15a54e9d34e3ae1fea144398f4ef9187227e3aff23b16863bf6fdc9708bc`
- expected braces: 3281 / 3281
- expected comments: 275 / 275
- expected parser errors: 0

No source modifications are authorised during this validation step.
