# STEP_SHOP_V2_EDITOR_PICK_MANUAL_PATCH_INDENTATION_AND_DUPLICATION_CORRECTION_20260917

Date: 2026-09-17
Project: Spatial Flow V2 / 项目二换皮工程
Surface: Main-site Shop / Editor's Pick

## Status

MANUAL PATCH CORRECTION REQUIRED

The previous Editor's Pick manual replacement instruction was not safe enough for direct copy/paste. The user's resulting `archive-product.php` contains mixed spaces/tabs in the new logic block and, more importantly, the old Editor's Pick markup remained below the newly inserted markup, creating a duplicated render block.

## Confirmed state from the user's current uploaded files

### `archive-product.php`

- PHP syntax still parses.
- The new Editor's Pick logic exists.
- The new `.sf-shop-v2-editor-pick__main` / `.sf-shop-v2-editor-pick__body` markup exists.
- The old Editor's Pick title/body/place/footer markup also still exists directly below it.
- Indentation in the newly added PHP logic is inconsistent: leading spaces and tabs are mixed.

Therefore the correct recovery is not another small indentation patch. Replace the entire Editor's Pick render block in one operation using a fully normalized block.

### `spatial-flow.css`

The new Editor's Pick selectors are structurally present once each and the CSS structure is balanced:

```text
{ = 3554
} = 3554
/* = 276
*/ = 276
```

No additional CSS rewrite is required solely for indentation recovery.

## Recovery rule

Replace exactly from:

```php
<?php if ( $sf_shop_editor_pick_should_show ) : ?>
```

through the matching Editor's Pick:

```php
<?php endif; ?>
```

immediately before:

```php
<section class="sf-section sf-container sf-shop-v2-products">
```

with one fully normalized block. Do not patch the duplicated inner markup line-by-line.

## Validation requirement

After replacement:

```text
PHP syntax must pass.
`.sf-shop-v2-editor-pick__copy` markup count = 1.
`.sf-shop-v2-editor-pick__footer` markup count = 1.
`.sf-shop-v2-editor-pick__eyebrow` markup count = 1.
```

Do not proceed to runtime visual review until this source cleanup passes.
