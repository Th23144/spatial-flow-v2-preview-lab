# Step 4F · Step04 strict parity V2 · manual CSS correction batch · 2026-08-27

## Basis

Authoritative numeric audit:

`project2-progress/STEP_4F_STEP04_STRICT_PARITY_V2_EIGHT_CAPTURE_NUMERIC_AUDIT_FAIL_20260827.md`

Commit: `9e0ed18d214e07e9b49f9dafad2e1714f85a711a`

Current accepted live baselines before this batch:

```text
assets/css/spatial-flow.css
bytes: 588629
logical lines: 20666
SHA256: 7cad3472f4ee53b672b4ce1d2d27bb2641b9b34e5541b48e39f145fcb956a8d8
brace balance: 3282 / 3282
comment balance: 275 / 275
tinycss2 errors: 0

functions.php
bytes: 612013
logical lines: 11689
SHA256: 4d5e807a75a5f5548ee69639f6bc6070eef4d1c30d80f54970d3057a7dae6125
version: 2.7.18
PHP syntax: PASS
```

## Scope

One coherent manual anchored batch only. No `thankyou.php` change.

CSS corrections inside the existing canonical Step5F block:

1. strengthen Overview `<strong>` typography ownership to 18px / 1.16;
2. own Facts `dt` font-weight at 400;
3. own Timeline `h3` font-size 23px and line-height 1.08;
4. own Address-card `h3` font-size 8px and line-height 1.55;
5. own Receipt Summary heading line-height 1.55;
6. reset leaked Result Panel max-width to none;
7. remove production-only Summary price nowrap;
8. restore <=420 final Overview item grid-column 1 / -1.

Cache version:

`2.7.18 → 2.7.19`

## Expected CSS delta

Calculated from the exact bounded old/new blocks:

```text
Part A Overview strong      +142 bytes / +1 line
Part B Result panel          +30 bytes / +1 line
Part C Facts dt              +31 bytes / +1 line
Part D Timeline h3           +22 bytes /  0 lines
Part E Address h3            +54 bytes / +1 line
Part F Summary heading       +32 bytes / +1 line
Part G Summary price         -23 bytes / -1 line
Part H Mobile last item       +2 bytes /  0 lines
------------------------------------------------
Total                       +290 bytes / +4 lines
```

Expected post-edit CSS size/line count if every anchor matches exactly:

```text
588919 bytes
20670 logical lines
```

The combined replacement snippets parse with tinycss2 with zero parser errors in isolation. Full-file parser/brace/comment validation is required after the user returns the edited source.

## Safety gate

Each old block must match exactly once. Stop on any non-1 match count. Do not append a new patch block. Do not modify `thankyou.php`.

After user returns `spatial-flow.css` and `functions.php`, validate both together before runtime testing.
