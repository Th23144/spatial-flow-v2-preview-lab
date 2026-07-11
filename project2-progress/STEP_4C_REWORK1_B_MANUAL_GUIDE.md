# Step 4C-REWORK1-B · Manual Shop CSS Replacement Guide

Last updated: 2026-07-10
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Purpose

```text
Manually replace only the old Shop visual CSS in the current local `assets/css/spatial-flow.css`.
Do not overwrite the whole file.
Do not use the generated full candidate or patch as the normal workflow.
```

## Important correction

The old Shop visual CSS was split into three ranges. All three old ranges had to be removed before the new controlled Shop block could be inserted.

## Stage 1 · Remove old Shop CSS ranges

Status:

```text
Passed.
```

The user uploaded the edited local file for verification.

Verified file:

```text
assets/css/spatial-flow.css
Size: 719,231 bytes
Lines: 24,695
SHA256: e55736867bcd0b70c2c3dd6d6547c3efba6dc6e0d74549cb5b692e6d593a45db
Opening braces: 3,780
Closing braces: 3,780
```

Removed ranges:

### Range A

```text
START: /* === Phase Shop Visual 1 START === */
END:   /* === Phase Shop Visual 2.1 FIX END === */
```

### Range B

```text
START: /* === Product Archive Visual Scope Fix START ===
END:   /* === Product Archive Visual Scope Fix END === */
```

### Range C

```text
START: /* === Project2 Step 4C-B — Shop Hero Editorial START ===
END:   /* === Project2 Step 4C-B — Shop Hero Editorial END === */
```

Verification result:

```text
Phase Shop Visual 1: 0 matches
Phase Shop Visual 2: 0 matches
Phase Shop Visual 2.1 FIX: 0 matches
Product Archive Visual Scope Fix: 0 matches
Project2 Step 4C-B — Shop Hero Editorial: 0 matches
CSS brace count is balanced.
Full CSS syntax parse returned no parse errors.
```

## Stage 2 · Insert the controlled Shop block

Status:

```text
Ready for manual insertion.
```

Block file:

```text
STEP_4C_REWORK1_B_SHOP_BLOCK.css
Size: 47,184 bytes
Lines: 1,031
SHA256: c5cfc6b5c17aa039a8b4fb3edfad7ba1dacc3cbf462e2f6007da3181c88508e9
```

The block was checked before delivery:

```text
Opening braces: 137
Closing braces: 137
CSS syntax parse errors: 0
All `.sf-shop-v2-*` selectors used by the block exist in the current uploaded `archive-product.php`.
```

Exact insertion point in the edited local CSS:

```text
Insert immediately before:
/* Step 5A-4C-R — Basic Pages Template Rebuild */
```

The nearby structure should become:

```text
/* === Project2 Step 4B-R2-B — Main Footer Dark Editorial END === */

[PASTE THE COMPLETE STEP_4C_REWORK1_B_SHOP_BLOCK.css CONTENT HERE]

/* Step 5A-4C-R — Basic Pages Template Rebuild */
```

Rules:

```text
- Paste the block once only.
- Do not append it to the end of the file.
- Do not restore any of the three deleted old Shop ranges.
- Do not change Header, Footer, Single Product, Cart, Checkout, Blog, Wishlist, PHP, or WooCommerce logic in this stage.
```

After insertion, search for:

```text
Step 4C-REWORK1-B · Shop Static 1:1 Controlled Rebase START
Step 4C-REWORK1-B · Shop Static 1:1 Controlled Rebase END
```

Expected result:

```text
Exactly one START match and exactly one END match.
```

## Stage 3 · Version bump and browser validation

After the block is inserted:

```text
1. Save `spatial-flow.css`.
2. Increase the theme asset version in `functions.php` by one revision.
3. Hard refresh `/shop/` on desktop and mobile.
4. Validate filters, sorting, wishlist, product links, pagination, Editor’s Pick, Cart, and SAFE5 Checkout regression.
```
