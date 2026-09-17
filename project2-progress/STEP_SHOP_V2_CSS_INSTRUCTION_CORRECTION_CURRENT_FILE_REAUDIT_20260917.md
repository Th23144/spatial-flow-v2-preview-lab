# STEP_SHOP_V2_CSS_INSTRUCTION_CORRECTION_CURRENT_FILE_REAUDIT_20260917

Date: 2026-09-17
Project: Spatial Flow V2 / 项目二换皮工程
Surface: Main-site Shop archive

## Status

INSTRUCTION CORRECTION / CURRENT USER FILE RE-AUDITED

The previous manual CSS instructions were too fragmented and ambiguous. Several requested replacements referred to selectors that appear multiple times in the full stylesheet or did not include the exact source block to replace. The user correctly stopped before guessing.

## Current uploaded state re-audit

Files reviewed:

- `functions.php` — current version already bumped to `2.7.48`.
- `woocommerce/archive-product.php` — Breadcrumb root fix, `Arrange by`, total-pages state, section-kicker removal, pagination shell, and closing-kicker removal are already present.
- `woocommerce/content-product.php` — Shop card editorial fields / quick label / placement output are already present.
- `assets/css/spatial-flow.css` — most of the requested Shop strict-calibration changes are already present.

## Confirmed CSS changes already present

Inside the unique controlled block:

```text
/* === Step 4C-REWORK1-B · Shop Static 1:1 Controlled Rebase START === */
...
/* === Step 4C-REWORK1-B · Shop Static 1:1 Controlled Rebase END === */
```

The current file already contains:

- Breadcrumb Inter 11px treatment;
- Hero kicker / meta / signoff calibration;
- filter Inter 12px treatment;
- `Arrange by` sort styling;
- Editor’s Pick image zoom removal;
- Editor’s Pick stamp / kicker calibration;
- Editor’s Pick primary button calibration;
- Editor’s Pick Ghost button calibration;
- section H2 margin normalization;
- product-image zoom removal;
- new pagination composition;
- Closing Note inline-flow correction;
- Closing Button calibration;
- mobile sort / quick-action / pagination adaptations.

These areas must NOT be edited again from the previous instruction set.

## Remaining incomplete area from the interrupted batch

The user stopped during CSS-F. Current source still retains the older product-card text/bottom rules and section-count microtype.

The next manual instruction must therefore be narrow and deterministic:

1. replace the exact current `sf-shop-v2-section-head p` block only;
2. replace the exact contiguous product-card block beginning at the current scoped `.sf-product-card__body p` selector and ending at the current scoped `.sf-product-card__bottom .button` rule;
3. do not touch any other Shop CSS until a fresh runtime screenshot is reviewed.

## Process correction

Future manual CSS instructions must use:

```text
UNIQUE ANCHOR / CURRENT SOURCE BLOCK
→ exact full OLD block
→ exact full NEW block
```

If a selector has multiple matches in the full file, instructions must explicitly constrain the edit to the controlled Shop block or provide the exact surrounding source context. The user must never be asked to guess which match to edit.

No production source was modified by this repository record.
