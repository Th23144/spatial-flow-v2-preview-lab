# Step 4E-B1-C-FIX2 · Normalize Persisted Double-Percent Count Token

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
FIX1 file validation：Passed exactly.
FIX1 browser output：%2 pieces · ready to go.
FIX2 instructions：Issued.
User manual edit：Pending.
Step 4E-B1-D：Blocked until FIX2 validation passes.
Cart page status：Not done.
```

## 1. Purpose

Normalize a count-format value returned as `%%s` back to the single literal `%s` token expected by the live-count renderer.

This handles a backend-saved value without changing the user-facing editable format or any WooCommerce calculation.

## 2. Authoritative baseline

```text
File: functions.php
Uploaded name: functions(4).php
Version: 2.7.8
Size: 550,874 bytes
Lines: 10,231
SHA256: d171d463f4b56f047a1e28cbe5b6d7b02c2fbdf4f5a716c9d5139caa90dae7c4
PHP syntax: Passed
Opening braces: 1,190
Closing braces: 1,190
Active heading hook: spatial_flow_cart_v2_heading
```

If the local file differs from this baseline, stop and provide the newest file.

## 3. Exact manual replacement

### Find exactly

```php
            foreach ( [ get_template_directory_uri(), get_stylesheet_directory_uri() ] as $theme_uri ) {
                $theme_uri = untrailingslashit( (string) $theme_uri );
                if ( '' !== $theme_uri && 0 === strpos( $value, $theme_uri ) ) {
                    $value = '%s' . substr( $value, strlen( $theme_uri ) );
                    break;
                }
            }

            return $value;
```

### Replace exactly with

```php
            foreach ( [ get_template_directory_uri(), get_stylesheet_directory_uri() ] as $theme_uri ) {
                $theme_uri = untrailingslashit( (string) $theme_uri );
                if ( '' !== $theme_uri && 0 === strpos( $value, $theme_uri ) ) {
                    $value = '%s' . substr( $value, strlen( $theme_uri ) );
                    break;
                }
            }

            $value = str_replace( '%%s', '%s', $value );

            return $value;
```

Only one line of executable PHP is added.

## 4. Expected file result

When original line endings and final-newline state are preserved:

```text
Version: 2.7.8
Size: 550,932 bytes
Lines: 10,233
SHA256: ee531433e499b07d58aa79dda50cf6e19cea08d077858db32e353a7bbde421ba
Opening braces: 1,190
Closing braces: 1,190
PHP syntax: Passed
Delta: +58 bytes / +2 lines
```

The predicted file has been simulated and passes PHP syntax validation.

## 5. Expected visible result

With the current two quantity-1 products:

```text
2 pieces · ready to go
```

The following must both be absent:

```text
http://spatialflow.local/wp-content/themes/astra
%2 pieces · ready to go
```

Then verify:

```text
- total quantity 3 → 3 pieces · ready to go
- total quantity 1 → 1 piece · ready to go
```

## 6. What must not change

```text
- SPATIAL_FLOW_CHILD_VERSION remains 2.7.8
- active heading hook remains spatial_flow_cart_v2_heading
- legacy intro function remains available for rollback
- Cart rows, remove, quantity, coupon, shipping, totals, checkout button, service cards, trust cards, and recommendations remain functional
- SAFE5 Checkout remains unchanged
- no CSS, JavaScript, or template changes
```

## 7. Independent rollback

Delete only:

```php
            $value = str_replace( '%%s', '%s', $value );
```

and its extra blank line. Do not revert the B1-C hook or the rest of FIX1.

## 8. Required evidence before B1-D

```text
- screenshot showing 2 pieces · ready to go with no leading percent sign
- quantity-change result for total 3
- singular result for total 1
- SAFE5 Checkout unchanged confirmation
- upload of the post-FIX2 functions.php
- exact size, line, hash, syntax, and brace validation
```

After validation, proceed directly to Step 4E-B1-D without another decision pause.
