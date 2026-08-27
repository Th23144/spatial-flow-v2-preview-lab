# Step 4F · Step04 Computed Parity Correction Manual Batch · 2026-08-26

## Basis

The code-first computed audit of the eight user-supplied same-viewport JSON captures failed strict 1:1 due to deterministic CSS deltas. This batch is limited to those CSS-owned deltas and does not change WooCommerce business logic, status mapping, payment hooks, or `thankyou.php` semantics.

## Accepted input fingerprints

### `assets/css/spatial-flow.css`
- bytes: 587405
- logical lines: 20635
- SHA256: `307958483ead674b91799908d5e64b3a4407154cc0fd1d394354dac4fdc013f8`
- braces: 3281 / 3281
- comments: 275 / 275
- tinycss2: 0 errors

### `functions.php`
- bytes: 612013
- logical lines: 11689
- SHA256: `ef28d7c51ec8e03649b75a2f1183420e14d1a9c139568353f9509673739770ed`
- version: 2.7.16
- PHP syntax: PASS

## Manual correction scope

The user will receive one consolidated manual anchored replacement package covering:

1. explicit Step04 root 16px font size;
2. result title transform ownership;
3. lede / authority paragraph margin ownership;
4. status heading / copy margin and transform ownership;
5. Woo order-overview inherited font metrics;
6. receipt panel root Inter/16px/1.55 ownership;
7. panel heading transform ownership;
8. panel-copy margin and Inter ownership;
9. receipt table Inter/16px/1.55 ownership;
10. table footer Inter/400 ownership and total serif/400 ownership;
11. timeline heading/copy margin and transform ownership;
12. summary state heading/copy ownership;
13. summary heading explicit 31px serif ownership;
14. summary item title transform ownership;
15. summary note bottom-margin removal;
16. result-action line-height 1.55 (reference inherited value);
17. cache version 2.7.16 → 2.7.17.

Each exact old block must match once. Stop if any count differs.

## Internally validated post-edit candidate

### CSS expected result
- bytes: 588493
- logical lines: 20661
- SHA256: `e1cf15a54e9d34e3ae1fea144398f4ef9187227e3aff23b16863bf6fdc9708bc`
- delta: +1088 bytes / +26 logical lines
- braces: 3281 / 3281
- comments: 275 / 275
- tinycss2 errors: 0

### functions expected result
- bytes: 612013
- logical lines: 11689
- SHA256: `c93ddf3ea896ff32d4904a8ef41e0a85923e1dc49a09542e99989a89faf67b3b`
- version: 2.7.17
- PHP syntax: PASS

## Mandatory post-edit gate

User should apply all bounded replacements in one work session and return only the two edited files once. Validate exact fingerprints and parsers before any browser re-test.

After source validation, rerun the same eight computed parity diagnostic captures. Do not rerun the full 17-step status matrix.
