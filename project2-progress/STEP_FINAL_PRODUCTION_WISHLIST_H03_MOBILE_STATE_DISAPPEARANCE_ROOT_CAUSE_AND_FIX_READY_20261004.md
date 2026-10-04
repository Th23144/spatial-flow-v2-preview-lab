# Final Production Wishlist — H03 Mobile State Disappearance Root Cause / Fix Ready

Date: 2026-10-04
Project: Spatial Flow V2 / Project 2

## Trigger

After Desktop acceptance, user found a blocking mobile-state bug:

- Desktop Wishlist shows six saved products.
- Switching the same page into mobile width makes the six products disappear and presents the Wishlist as empty / requiring re-add.
- Switching back to Desktop makes the original six products reappear.

Mobile visual acceptance is blocked until this behavior is fixed.

## Root cause

This is NOT evidence that the six Wishlist records are actually deleted.

H03's visible authority adapter intentionally reads the hidden native YITH source using only desktop-table rows:

```js
source.querySelectorAll('table.wishlist_table tbody tr')
```

and `rebuild()` converts those rows into visible H03 items. If the row list becomes empty, H03 sets:
- collection hidden;
- empty state visible.

YITH itself has a built-in responsive Wishlist mechanism. At its mobile breakpoint (default 768px), YITH listens for resize and AJAX-replaces the Wishlist fragment with its mobile template. When the viewport returns to desktop, it swaps the desktop fragment back.

Therefore:
1. Desktop: hidden native source contains desktop `table.wishlist_table tbody tr` rows -> H03 sees six items.
2. Mobile breakpoint: YITH replaces the hidden source with its mobile template -> H03's desktop-row parser sees zero rows -> H03 falsely displays empty.
3. Back to Desktop: YITH restores desktop table -> H03 sees the six original rows again.

This exactly matches the observed reversible desktop/mobile behavior.

## Correct architectural fix

Do NOT:
- copy Wishlist state into a second localStorage/cookie system;
- fabricate a mobile Wishlist store;
- rewrite H03 to own YITH data;
- add six products again as a workaround;
- patch only CSS.

H03 already owns the visible responsive layout. The native YITH layer is hidden and exists only as state/action source.

Therefore the clean fix is to disable YITH's own responsive template swap ONLY on the H03 Wishlist page, keeping YITH's desktop table markup as one stable hidden source at every viewport.

YITH/Woo remain the real state/action owner.

## Implementation

Functions-only.

Current verified `functions.php` baseline:
- file: `functions(20261003-104138).php`
- bytes: 640,285
- logical lines: 12,261
- SHA256: `1daf5cce2d68daeb0cc37bd5d914020721615670948d0aaba75e0e62557f8aef`
- current child version: 2.7.52

Change version:
- 2.7.52 -> 2.7.53

Insert immediately after `spatial_flow_wishlist_is_page()` and before `spatial_flow_wishlist_count_from_content()`:

```php
/* H03 source contract: keep YITH's hidden native source in desktop-table markup
 * at every viewport. The visible H03 layer owns responsive presentation.
 */
if ( ! function_exists( 'spatial_flow_wishlist_disable_yith_responsive_source_swap' ) ) {
    function spatial_flow_wishlist_disable_yith_responsive_source_swap( $is_responsive ) {
        if ( spatial_flow_wishlist_is_page() ) {
            return false;
        }

        return $is_responsive;
    }
}
add_filter( 'yith_wcwl_is_wishlist_responsive', 'spatial_flow_wishlist_disable_yith_responsive_source_swap', 20 );
```

This uses YITH's documented/source-level `yith_wcwl_is_wishlist_responsive` filter.

## Expected target identity

With exact LF-preserving replacement/insertion:
- bytes: 640,866
- logical lines: 12,275
- SHA256: `25da2eee11476b0c0bdc6514022125d0dc9e91481cf7132461ad47a18f4f4e5b`
- byte delta: +581
- line delta: +14

No CSS or JS change is required for this fix.

## Runtime acceptance after source verification

Test as one responsive-state flow:

1. Desktop Wishlist: confirm six products.
2. Without adding/removing anything, switch viewport below YITH mobile breakpoint / to target mobile width.
3. Confirm same six products remain.
4. Switch back to Desktop.
5. Confirm same six remain.
6. Remove one product on mobile.
7. Confirm five remain on mobile and the same five remain after switching to Desktop.
8. Add one product through the normal YITH/Woo path and confirm the state is consistent across both viewport modes.

Only after this passes may Mobile visual review resume.

Status: ROOT CAUSE CONFIRMED / FUNCTIONS-ONLY FIX READY.
