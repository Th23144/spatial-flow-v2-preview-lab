# STEP_SHOP_V2_BATCH_B_RUNTIME_REVIEW_PARTIAL_PASS_NEEDS_HERO_BREAK_AND_CONTENT_CLEANUP_20260917

Date: 2026-09-17
Project: Spatial Flow V2 / 项目二换皮工程
Surface: Main-site Shop archive

## Status

BATCH B RUNTIME: PARTIAL PASS / NOT CLOSED

No lower-page remediation should be started from this record until the upper-page remaining deltas are resolved.

## Runtime evidence received

User supplied a fresh desktop Shop screenshot after Batch B.

## Confirmed successful changes

1. Warm beige Shop canvas remains active.
2. Hero editorial identity renders instead of plain `Shop`.
3. Hero emphasized word remains bluestone italic.
4. Hero right-column font cascade issue from the previous runtime was fixed.
5. Editor's Pick right-side fallback eyebrow `Selected piece · current edit` is gone when `_sf_piece_reference` is empty.
6. Editor's Pick now resolves product-owned data before Shop-global fallback copy:
   - `_sf_material`
   - WooCommerce short description
   - `_sf_placement`
7. Price, View Piece CTA, image and product ownership remain intact.
8. Wider production Shop container remains preserved by explicit user decision.

## Remaining Hero delta

The newly-added root-Shop `max-width: 560px` title measure is not correct for strict reference matching.

Runtime currently wraps approximately as:

```text
Objects For
The Quiet
Room.
```

The approved static reference explicitly authors the break as:

```html
Objects for<br />
the <em>Quiet</em> Room.
```

Therefore the reference is not relying on incidental CSS wrapping. The production implementation should likewise use a controlled editorial line-break owner rather than trying to force the break with an arbitrary max-width.

Also, runtime still shows capitalized `For` / `The`, proving a saved Customizer value is overriding the correct code fallback `Objects for the Quiet Room.`. This is content-state, not a CSS font defect.

## Editor's Pick runtime finding

The new ownership priority is functioning, but it exposes the real data quality of the selected product.

Runtime currently shows product-owned values resembling:

```text
Material: Product Attributes · Material
Placement: Summary · Placement Suggestion
Body: current WooCommerce short description (Chinese)
```

The strings `Product Attributes · Material` and `Summary · Placement Suggestion` are the admin field labels in the product editor, not suitable customer-facing editorial values. They must not be replaced with fabricated theme text merely to match the mockup. The selected product's actual `_sf_material` and `_sf_placement` values need content cleanup in WooCommerce product data.

The absence of a Piece Reference is handled correctly: no fake eyebrow is rendered.

## Editor's Pick title emphasis

The code now supports an explicit `Editor’s Pick Italic Word` owner. Runtime currently has no emphasized word, which is valid if the setting is empty. Do not force a fake emphasized word simply to mimic the reference product title.

## Next remediation order

1. Replace the incorrect Hero max-width line-break hack with a controlled root-Shop editorial line break matching the reference structure.
2. Correct saved `Shop Hero Title` content to lowercase `for` / `the`.
3. Keep the new Editor's Pick product-first ownership logic.
4. Treat selected-product Material / Placement values as catalog content cleanup, not CSS/template defects.
5. After upper-page runtime closes, continue to Product Section / cards / pagination / closing-note detail pass.

## Protected boundaries

- Do not alter approved wider Shop page width.
- Do not reopen Header or Footer.
- Do not fabricate product-specific editorial content.
- Do not change WooCommerce ownership of product, price, URL, short description, or product metadata.
