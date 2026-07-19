# Step 4E-B2-R5-E5-FIX1 · Runtime Rejection + FIX2

Last updated: 2026-07-19  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Runtime result

```text
Deployed artifact: spatial-flow(31).css
Source validation: Passed.
Runtime frame removal: Failed / still perceptible.
Notice redesign: not closed by this result.
Current executable phase: R5-E5-FIX2 remove the BlockUI wash completely while preserving native blocking and the restrained loader.
Cart page status: Not done.
```

## Authoritative static reference comparison

Reference:

```text
preview/spatial-flow-cart-v1.html
```

The static Cart establishes the following visual ownership:

```text
- one uninterrupted #f6f1eb page canvas
- 7fr / 5fr Cart columns with an 80px gap
- the left .cart-items owner has no background, border, padding, radius or shadow
- each .cart-item is transparent and uses only a bottom divider
- the right .cart-sidebar is the only intentionally filled Cart surface
- no loading panel, wash, card or full-form rectangle exists in the reference
```

The current Canonical Cart desktop owner already matches the static left-column structure:

```text
form.woocommerce-cart-form: transparent / borderless / zero padding / zero radius / no shadow
shop_table: transparent / borderless
cart item rows: transparent with only a bottom divider
```

Therefore the normal Cart form, accepted 7fr / 5fr geometry, 80px gap, product-row rules and coupon behavior must not be rebuilt. The remaining mismatch is the visible BlockUI surface during refresh.

## Exact reason

The FIX1 source still explicitly paints the complete rectangular BlockUI bounds:

```css
background: rgba(246, 241, 235, .78) !important;
opacity: 1 !important;
```

for the Cart form, and:

```css
background: rgba(237, 231, 223, .78) !important;
opacity: 1 !important;
```

for Cart totals.

FIX1 changed the native white wash to warm colors, but did not eliminate the rectangular wash itself. Therefore the user can still perceive the form boundary as a picture frame during update.

This is not a width defect and does not justify rolling back the accepted 7fr / 5fr geometry.

## Static-aligned FIX2 correction

Start from the exact validated `spatial-flow(31).css` artifact.

Inside `Native Cart loading state`, replace only these two declarations:

```css
background: rgba(246, 241, 235, .78) !important;
```

with:

```css
background: transparent !important;
```

and:

```css
background: rgba(237, 231, 223, .78) !important;
```

with:

```css
background: transparent !important;
```

Keep the overlay elements, `opacity: 1`, pointer blocking, restrained 18px spinner and all notice rules unchanged.

This is the closest production-safe translation of the static reference: WooCommerce still blocks duplicate input while updating, but it no longer paints a surface that does not exist in the approved static Cart.

## Predicted exact artifact

```text
Size: 697,616 bytes
Logical lines: 23,387
SHA256: 2fa292d96e7e35a3d633dbe5bd8334e73fdb2432bbd6c8e6576a1424e170f55d
Braces: 3,636 / 3,636
Comments: 337 / 337
CSS parser errors: 0
Line endings: LF
Final newline: present
```

## Runtime gate

```text
1. no rectangular wash appears over the Cart form during quantity update
2. no rectangular wash appears over Order Summary during refresh
3. native update blocking remains functional
4. only the small restrained loader remains visible
5. normal Cart surface remains transparent and borderless
6. editorial notice and native Undo remain functional
7. live counts, geometry, breadcrumb, recommendations, Header and Footer remain unchanged
8. phone loading state has no overflow or flash panel
```