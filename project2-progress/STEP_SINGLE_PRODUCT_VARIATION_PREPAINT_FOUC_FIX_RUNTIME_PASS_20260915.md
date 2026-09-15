# Step — Single Product Variation Prepaint FOUC Fix — Runtime PASS — 2026-09-15

## Context

A historical visual regression was found on the current WooCommerce Single Product page: during hard refresh / first paint, the native WooCommerce variation table could briefly appear before the Spatial Flow visual variation UI took over.

This was a narrow reopen of the already-completed Single Product page. It did not reopen the page architecture, WooCommerce ownership, pricing, stock, variation logic, Add to Cart, gallery, Checkout, or other completed areas.

## Current-source files used

- `woocommerce/single-product.php`
- `assets/css/spatial-flow.css`

The fix was prepared against the current Local runtime files supplied on 2026-09-15, not against an older repository snapshot.

## Implemented fix

1. Variable products with Spatial Flow visual variation data receive a server-rendered prepaint class on the product-options wrapper.
2. CSS hides the native WooCommerce `table.variations` during this prepaint phase using the same accessibility-preserving offscreen technique already used after `.sf-visual-variations-ready`.
3. Existing Spatial Flow JS remains the normal runtime owner and continues to add `.sf-visual-variations-ready` after building the visual controls.
4. A 2500 ms fallback removes the prepaint class if the visual variation ready state is not reached, allowing the native WooCommerce variation form to return instead of leaving purchase controls permanently hidden.
5. WooCommerce native variation form, select fields, pricing/stock lifecycle, reset behavior, and Add to Cart ownership remain intact.

## Source Gate before runtime test

- PHP lint: PASS
- CSS brace balance: PASS
- No full-file replacement was used; user performed the instructed manual bounded replacements with indentation preserved.

## Runtime validation

User reported **PASS** after applying both manual replacements.

Observed acceptance result:

- Refresh-time native WooCommerce variation dropdown flash no longer appears.
- Visual variation UI still loads normally.
- No new reported regression in variation selection, price/stock behavior, Add to Cart, reset/clear, or layout.

## Status

**Single Product native variation first-paint / FOUC regression = CLOSED / PASS.**

This closure does not alter the existing overall Single Product `Completed 1:1` status; it closes only the narrow historical refresh regression discovered during the post-Airwallex regression pass.

## Immediate project state

Both post-Airwallex historical regressions found on 2026-09-15 are now closed:

1. Checkout Step03 `EDIT ADDRESS` / Shipping `EDIT` transparent button-chrome regression — PASS / CLOSED.
2. Single Product native WooCommerce variation first-paint FOUC regression — PASS / CLOSED.

The normal Project 2 mainline may now resume at **Site Hygiene**, beginning with the remaining plugin / legacy WordPress cleanup sequence under the established discover → read-only audit → ownership/dependency check → backup → cleanup → regression → GitHub record policy.
