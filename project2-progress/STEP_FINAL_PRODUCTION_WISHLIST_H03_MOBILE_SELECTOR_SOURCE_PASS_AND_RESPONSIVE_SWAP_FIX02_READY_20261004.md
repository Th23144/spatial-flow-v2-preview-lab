# Final Production Wishlist — H03 Mobile Selector Source PASS / Responsive Swap Fix02 Ready

Date: 2026-10-04
Project: Spatial Flow V2 / Project 2

## Correction to previous runtime status

The previous record that marked mobile runtime state as PASS is withdrawn.

User clarified that after switching between desktop and mobile widths, the saved Wishlist items do not immediately remain available. A browser refresh is still required for the six products to return.

Therefore:
- initial-load mobile rendering after refresh works;
- breakpoint transition without refresh is still broken;
- Wishlist mobile runtime is NOT closed.

## Selector affordance source gate

Returned files:
- `functions(20261004-104548).php`
- `spatial-flow(20261004-104548).css`

### functions.php
- bytes: 640,866
- logical lines: 12,275
- SHA256: `0d53a94de25bbef22dfbf0e6e5f42c3e65cf611f4f853838cb329496f8629257`
- version: 2.7.54
- PHP syntax: PASS

### spatial-flow.css
- bytes: 610,831
- logical lines: 21,721
- SHA256: `776760cf5f96c1f27b693063d7d90f787edaa4709e72add9670a22dc222e56e0`
- opening braces: 3,413
- closing braces: 3,413
- brace delta: 0

Both files exactly match the previously simulated selector-affordance targets.

## Refined root cause

The first fix correctly used YITH's `yith_wcwl_is_wishlist_responsive` filter, but its page condition depended on `spatial_flow_wishlist_is_page()`.

That helper begins with conditional query tags such as `is_singular()`.

YITH builds and localizes `yith_wcwl_l10n.is_wishlist_responsive` while registering scripts during WordPress `init`. At that time the main query has not yet been resolved, so page conditional tags are not reliable and the filter can return the original `true`.

YITH's frontend script then keeps its resize listener active. On crossing its mobile media query, it AJAX-swaps the native Wishlist fragment between desktop and mobile templates.

H03 still reads only desktop table rows from its hidden native source. The swap therefore recreates the false-empty state until a full page refresh rebuilds the source.

This exactly matches the user's clarified behavior:
- refreshed desktop: items present;
- cross breakpoint: source swaps and H03 loses rows;
- refreshed mobile: items present again;
- cross back: same issue can recur.

## Correct Fix02

Keep the existing architecture:
- YITH/Woo own state and actions;
- H03 owns visible responsive presentation;
- hidden source should stay in desktop-table markup.

Make the page detector safe before the main query:
1. after the `wp` action, use the normal `spatial_flow_wishlist_is_page()`;
2. before the query is available, detect the `/wishlist/` request path from `REQUEST_URI`;
3. for YITH AJAX calls originating from the Wishlist page, also detect `HTTP_REFERER`.

Then use this early-safe detector inside `spatial_flow_wishlist_disable_yith_responsive_source_swap()`.

No CSS or JS change is required for Fix02.

## Fix02 baseline

Current functions baseline:
- `functions(20261004-104548).php`
- 640,866 bytes
- 12,275 logical lines
- SHA256 `0d53a94de25bbef22dfbf0e6e5f42c3e65cf611f4f853838cb329496f8629257`
- version 2.7.54

Expected Fix02 target:
- 641,971 bytes
- 12,307 logical lines
- SHA256 `c65af1fc79fe8407477e109b35fe6e3ac16e2e095371cce881af30939010ed91`
- version 2.7.55
- PHP syntax PASS

## Runtime acceptance after Fix02

Do not refresh during the core breakpoint test:

1. hard-refresh once on desktop Wishlist;
2. confirm current saved items;
3. resize/cross to mobile width WITHOUT refresh;
4. confirm the same items remain immediately;
5. resize/cross back to desktop WITHOUT refresh;
6. confirm the same items remain immediately.

Then run one mutation test on mobile:
- remove one item;
- confirm H03 updates;
- cross to desktop without refresh;
- confirm the reduced state is preserved.

Wishlist global completion remains blocked until this passes.

Status: SELECTOR SOURCE PASS / MOBILE RUNTIME REOPENED / FIX02 READY.
