# Step 4E-B1-C-FIX3 · Put Live Count Below Heading

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
FIX2 file validation：Passed exactly.
FIX2 count-format output：Passed for current quantity 2.
V2 reference order：Not matched.
FIX3 instructions：Issued.
User manual edit：Pending.
Step 4E-B1-D：Blocked until FIX3 validation passes.
Cart page status：Not done.
```

## 1. Purpose

Match the approved V2 Cart heading order:

```text
Your Bag.
2 pieces · ready to go
```

The current renderer outputs the count paragraph before the h1. This step changes only the order of those two existing markup blocks. It does not change count logic, wording, hooks, settings, CSS, JavaScript, WooCommerce calculations, or Checkout.

## 2. Authoritative baseline

```text
File: functions.php
Uploaded name: functions(5).php
Version: 2.7.8
Size: 550,932 bytes
Lines: 10,233
SHA256: ee531433e499b07d58aa79dda50cf6e19cea08d077858db32e353a7bbde421ba
PHP syntax: Passed
Opening braces: 1,190
Closing braces: 1,190
```

If the local file differs from this baseline, stop and supply the newest file.

## 3. Exact manual replacement

### Find exactly

```php
        <section class="sf-cart-v2-heading" aria-labelledby="sf-cart-v2-heading-title">
            <?php if ( '' !== $count_text ) : ?>
                <p class="sf-cart-v2-heading__count"><?php echo esc_html( $count_text ); ?></p>
            <?php endif; ?>
            <?php if ( '' !== $lead || '' !== $emphasis ) : ?>
                <h1 id="sf-cart-v2-heading-title" class="sf-cart-v2-heading__title">
                    <?php if ( '' !== $lead ) : ?><span><?php echo esc_html( $lead ); ?></span><?php endif; ?>
                    <?php if ( '' !== $emphasis ) : ?><em><?php echo esc_html( $emphasis ); ?></em><?php endif; ?>
                </h1>
            <?php endif; ?>
        </section>
```

This exact block must occur once.

### Replace exactly with

```php
        <section class="sf-cart-v2-heading" aria-labelledby="sf-cart-v2-heading-title">
            <?php if ( '' !== $lead || '' !== $emphasis ) : ?>
                <h1 id="sf-cart-v2-heading-title" class="sf-cart-v2-heading__title">
                    <?php if ( '' !== $lead ) : ?><span><?php echo esc_html( $lead ); ?></span><?php endif; ?>
                    <?php if ( '' !== $emphasis ) : ?><em><?php echo esc_html( $emphasis ); ?></em><?php endif; ?>
                </h1>
            <?php endif; ?>
            <?php if ( '' !== $count_text ) : ?>
                <p class="sf-cart-v2-heading__count"><?php echo esc_html( $count_text ); ?></p>
            <?php endif; ?>
        </section>
```

## 4. Expected file result

Because the same markup is only reordered:

```text
Version: 2.7.8
Size: 550,932 bytes
Lines: 10,233
SHA256: ef3f2e437ebbb9cbdbc1b44da20187e92bc491183ceab3e1267249308e70160c
Opening braces: 1,190
Closing braces: 1,190
PHP syntax: Passed
Delta: 0 bytes / 0 lines
```

The predicted file was simulated and passed PHP syntax validation.

## 5. Expected visible result

The heading block must read in this order:

```text
Your Bag.
2 pieces · ready to go
```

At this stage, only semantic/DOM order is being corrected. Final font size, vertical spacing, horizontal alignment, and complete 1:1 styling remain part of the later Cart CSS rebase.

## 6. What must not change

```text
- SPATIAL_FLOW_CHILD_VERSION remains 2.7.8
- active hook remains spatial_flow_cart_v2_heading
- count-format normalization remains present once
- Cart rows, remove, quantity, coupon, shipping, totals, checkout button, service cards, trust cards, and recommendations remain functional
- SAFE5 Checkout remains unchanged
- no CSS, JavaScript, template, or database changes
```

## 7. Independent rollback

Replace the new block with the original block from section 3. No other code needs to be reverted.

## 8. Required evidence before B1-D

```text
- screenshot showing Your Bag. above the live count
- current quantity 2 still displays correctly
- confirmation that Cart functions remain normal
- confirmation that SAFE5 Checkout remains unchanged
- upload of the post-FIX3 functions.php
- exact size, line, hash, syntax, and brace validation
```

After validation, proceed directly to Step 4E-B1-D without another decision pause.