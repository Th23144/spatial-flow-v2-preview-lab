# Step 4E-B1-C-FIX1 · Repair Cart Count Placeholder Handling

Last updated: 2026-07-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Step 4E-B1-C hook switch：Applied in browser.
B1-C visual validation：Failed because %s was expanded to the parent-theme URI.
Step 4E-B1-C-FIX1 instructions：Issued.
User manual edit：Pending.
Step 4E-B1-D：Blocked until FIX1 browser + file validation pass.
Cart page status：Not done.
```

## 1. Purpose

Correct only the Cart settings helper so the editable singular/plural count formats preserve the literal `%s` token instead of allowing WordPress `get_theme_mod()` to interpret it as a theme-directory placeholder.

The correction also repairs an already saved count format that starts with the current parent-theme or child-theme URI.

## 2. Authoritative working baseline

The last uploaded and validated B1-B file was:

```text
Version: 2.7.8
Size: 550,221 bytes
Lines: 10,215
SHA256: e6bb2759bb3ac25ef12a2379ba29995243fe8554f2e93b3fd82b3b4c29158578
Braces: 1,187 / 1,187
PHP syntax: Passed
```

The B1-C operation changed only this hook callback:

```php
spatial_flow_cart_visual_2_intro
```

to:

```php
spatial_flow_cart_v2_heading
```

Therefore the derived post-B1-C baseline is:

```text
Version: 2.7.8
Size: 550,217 bytes
Lines: 10,215
SHA256: dae763ce72595d168f5fb93324124a4a53a2aaf5861341c3958e4fb9f0b0a6fb
Braces: 1,187 / 1,187
```

If the exact helper block below is not found once, stop and upload the current `functions.php` instead of improvising.

## 3. Exact manual replacement

### Find exactly

```php
if ( ! function_exists( 'spatial_flow_cart_visual_2_setting' ) ) {
    function spatial_flow_cart_visual_2_setting( $key ) {
        $defaults = spatial_flow_cart_visual_2_defaults();
        return get_theme_mod( $key, $defaults[ $key ] ?? '' );
    }
}
```

### Replace exactly with

```php
if ( ! function_exists( 'spatial_flow_cart_visual_2_setting' ) ) {
    function spatial_flow_cart_visual_2_setting( $key ) {
        $defaults = spatial_flow_cart_visual_2_defaults();
        $default  = $defaults[ $key ] ?? '';

        if ( in_array( $key, [ 'sf_cart_count_singular', 'sf_cart_count_plural' ], true ) ) {
            $value = (string) get_theme_mod( $key, str_replace( '%s', '%%s', (string) $default ) );

            foreach ( [ get_template_directory_uri(), get_stylesheet_directory_uri() ] as $theme_uri ) {
                $theme_uri = untrailingslashit( (string) $theme_uri );
                if ( '' !== $theme_uri && 0 === strpos( $value, $theme_uri ) ) {
                    $value = '%s' . substr( $value, strlen( $theme_uri ) );
                    break;
                }
            }

            return $value;
        }

        return get_theme_mod( $key, $default );
    }
}
```

## 4. Expected file result

When the file matches the derived post-B1-C baseline and line endings remain unchanged:

```text
Version: 2.7.8
Size: 550,874 bytes
Lines: 10,231
SHA256: d171d463f4b56f047a1e28cbe5b6d7b02c2fbdf4f5a716c9d5139caa90dae7c4
Opening braces: 1,190
Closing braces: 1,190
PHP syntax: Passed
Delta from post-B1-C: +657 bytes / +16 lines
```

## 5. Why this fix is scoped correctly

```text
- Only the two Cart count-format setting keys receive special handling.
- The literal default `%s` is escaped to `%%s` only while passing through get_theme_mod().
- WordPress converts `%%s` back to the literal `%s`, leaving it available for the live-count renderer.
- Saved custom values remain backend-editable.
- A previously saved value beginning with the current parent-theme or child-theme URI is normalized back to `%s`.
- All other Cart settings continue through the original get_theme_mod() behavior.
- No WooCommerce quantity, totals, coupon, shipping, checkout, payment, order, email, CSS, JavaScript, or template logic changes.
```

## 6. Expected visible result

For the current screenshot with two quantity-1 Cart items:

```text
2 pieces · ready to go
```

The parent-theme directory URL must disappear.

Additional required check:

```text
- change one product quantity from 1 to 2
- update the Cart
- the line must become 3 pieces · ready to go
- reduce the Cart to exactly one total item
- the singular format must display 1 piece · ready to go
```

The heading may still look visually unfinished because final Cart CSS work has not started.

## 7. What must not change

```text
- SPATIAL_FLOW_CHILD_VERSION remains 2.7.8
- active heading hook remains spatial_flow_cart_v2_heading
- old intro function remains in the file for rollback
- Cart rows, remove, quantity, coupon, totals, shipping, checkout button, service cards, trust cards, and recommendations remain functional
- SAFE5 Checkout remains unchanged
- no CSS or JavaScript changes
```

## 8. Independent rollback

Replace only the expanded `spatial_flow_cart_visual_2_setting()` block with its original six-line implementation shown in the Find section.

Do not change the B1-C heading hook while rolling back FIX1.

## 9. Evidence required before B1-D

```text
- screenshot showing the numeric live count with no theme URI
- quantity-change test result
- singular-count test result
- SAFE5 Checkout unchanged confirmation
- upload of the post-FIX1 functions.php
- exact hash/size/line/syntax/brace validation
```

After validation, proceed directly to Step 4E-B1-D without another decision pause.