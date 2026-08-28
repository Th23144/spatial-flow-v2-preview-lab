# Project 2 · Step04 2.7.20 Returned Source Validation START · 2026-08-28

User returned the two manually edited files for the final micro-parity batch:

- `functions.php` candidate with version target `2.7.20`
- `assets/css/spatial-flow.css` candidate with Parts A-E applied

Validation scope before any further runtime testing:

```text
1. bytes / logical lines / SHA256
2. functions.php version ownership and old-version absence
3. PHP syntax lint
4. CSS brace/comment balance
5. CSS parser errors
6. exact presence of the five intended bounded edits
7. compare actual fingerprints against the predicted 2.7.20 candidate
```

No runtime JSON rerun and no further source edit should occur until this source validation is complete.
