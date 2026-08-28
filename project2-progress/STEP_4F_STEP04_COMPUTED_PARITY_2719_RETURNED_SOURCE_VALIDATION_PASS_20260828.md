# Step 4F · Step04 computed parity 2.7.19 returned-source validation — PASS

The user returned both manually edited files from the bounded computed-parity correction batch. Validation is complete.

## `functions.php`

```text
bytes: 612013
logical lines: 11689
SHA256: f36e767387f0306eeae6744c6d17d99f4451999916f1c8d87df6797a183a736c
SPATIAL_FLOW_CHILD_VERSION: 2.7.19 exactly once
2.7.18 definition count: 0
PHP syntax: PASS
```

The returned file is byte-for-byte identical to an independently reconstructed candidate produced by applying only the issued `2.7.18 -> 2.7.19` bounded replacement to the previously accepted 2.7.18 baseline.

## `assets/css/spatial-flow.css`

```text
bytes: 588919
logical lines: 20670
SHA256: cc7d4a91ede6ff9297e0a7c6f03e4f079d2705798d567895de86034fc120b3b2
brace balance: 3282 / 3282
comment balance: 275 / 275
tinycss2 errors: 0
```

Actual delta versus the accepted previous baseline (`588629 bytes / 20666 logical lines`) is exactly:

```text
+290 bytes
+4 logical lines
```

This matches the issued correction batch exactly.

## Parts A-H exact replacement verification

All eight old bounded blocks were uniquely present in the accepted previous baseline. Applying the issued A-H replacements in order generated a candidate with the exact same bytes and SHA256 as the returned file.

Verified corrections:

1. Overview strong ownership: authoritative `18px / 1.16 / weight 400` with stronger Woo-specific selector.
2. Result panel: `max-width: none !important` restored.
3. Payment Facts `dt`: `font-weight: 400 !important` restored.
4. Timeline heading: authoritative `23px / 1.08` restored.
5. Address heading: authoritative `8px / 1.55 / .18em` restored.
6. Receipt Summary heading: authoritative `line-height: 1.55` restored.
7. Summary price: production-only `white-space: nowrap` removed.
8. <=420 Overview final row: `grid-column: 1 / -1` restored to reference behavior.

Note: the final-row selector now legitimately appears in two responsive scopes because the <=780 reference-compatible rule already existed and the <=420 override was corrected to match it. This is expected, not duplicate patch pollution.

## Result

Returned-source validation: **PASS EXACT**.

No further source edits are authorized before runtime computed-style verification.

## Next action

Hard refresh production so `spatial-flow.css?ver=2.7.19` is loaded, then rerun the same eight Step04 computed-parity JSON captures as one batch. The next audit should first verify that the deterministic deltas corrected above have converged to the reference values, then enumerate any remaining computed-style/geometric differences.
