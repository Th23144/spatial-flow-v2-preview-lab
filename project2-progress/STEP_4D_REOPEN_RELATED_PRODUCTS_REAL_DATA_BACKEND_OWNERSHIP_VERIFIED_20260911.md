# Project 2 · Step 4D-REOPEN · Related Products real-data backend ownership verified

Date: 2026-09-11

## Verification result

Fresh current `functions.php` confirms that the required Related Products metadata already has backend ownership and save handling.

### WooCommerce native SKU

Use the normal WooCommerce product SKU field under Product data → Inventory.

Related Products reads the real WooCommerce SKU via `get_sku()`.

### Spatial Flow product fields

The following custom fields are rendered inside WooCommerce Product data → General by `spatial_flow_product_story_admin_fields()`:

- `_sf_placement`
  - admin label: `Summary · Placement Suggestion`
- `_sf_piece_edition`
  - admin label: `Section 01 · Edition`

The custom field group is introduced as `Spatial Flow product detail fields`.

The field renderer is hooked to:

```text
woocommerce_product_options_general_product_data
```

The save handler `spatial_flow_save_product_story_admin_fields()` includes both `_sf_placement` and `_sf_piece_edition` and is hooked to:

```text
woocommerce_process_product_meta
```

Therefore no new admin UI, meta key or source edit is required for this real-data completion step.

## Data-truth rule

Do not copy static-reference sample data into real products unless it is actually true for that product.

- SKU: use the real operational SKU.
- Edition: enter only when the item is genuinely editioned / limited / numbered.
- Placement: enter a truthful product-specific editorial placement sentence.

If a real product has no edition concept, leave `Section 01 · Edition` empty. The Related Products template is already designed to omit the missing field rather than fabricate it.

## Test scope

For the currently visible four related products, enter truthful values where applicable, update each product, then refresh the source product page and verify:

1. SKU line appears where SKU exists.
2. `Edition of N` appears where Edition begins with a number.
3. Placement note appears below the price where `_sf_placement` exists.
4. Missing real data remains omitted without placeholders.
5. Hover on a desktop product image shows `View piece →`.

No source-file modification is authorized in this step.
