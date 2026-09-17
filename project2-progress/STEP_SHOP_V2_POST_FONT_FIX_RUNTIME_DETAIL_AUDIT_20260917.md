# STEP_SHOP_V2_POST_FONT_FIX_RUNTIME_DETAIL_AUDIT_20260917

Date: 2026-09-17
Project: Spatial Flow V2 / 项目二换皮工程
Surface: Main-site Shop archive

## Status

POST-FONT-FIX RUNTIME DETAIL AUDIT COMPLETE

Shop remains:

```text
Not done
```

No production source edit is authorized by this audit record.

## User-confirmed correction

The Hero right-column lede/signoff font ownership issue is fixed after excluding `.sf-shop-v2-lede` and `.sf-shop-v2-signoff` from the generic Hero paragraph selector.

This confirms the prior problem was cascade ownership, not missing font loading.

## Protected deviation

Keep the current wider Shop content width. Do not shrink the page back to the static reference shell.

## Remaining runtime deltas after the font fix

### A. Hero identity / title detail

1. Current runtime title renders `Objects For The Quiet Room.` while the static reference identity is `Objects for the Quiet Room.`. The current root Shop owner is backend-editable, so this should be corrected through the owned Hero title value rather than hard-coded CSS text transforms.
2. Current title wraps as `Objects For The` / `Quiet Room.`. The reference composition wraps more editorially as `Objects for` / `the Quiet Room.`. Since the wider page shell is intentionally preserved, solve this with Hero-title measure/max-width rather than shrinking the global container.
3. Preserve the existing `Quiet` bluestone italic emphasis.
4. Breadcrumb currently inherits the same title text, so fixing the Hero title value also fixes breadcrumb capitalization.

### B. Editor's Pick content hierarchy / ownership

1. The right eyebrow currently falls back to `Selected piece · current edit`, proving `_sf_piece_reference` is empty for the selected product.
2. Subtitle/body/place still render generic fallback/override copy in runtime rather than clearly product-specific editorial information.
3. Current archive logic checks global theme-mod overrides before product `_sf_material`, product short description, and `_sf_placement`; therefore old/global Shop copy can mask the per-product owner. This conflicts with the project preference for real per-product editorial ownership.
4. The static reference supports an emphasized word in the Editor's Pick title (`h2 em`), but the current PHP outputs the title with `esc_html()`, so no controlled inline emphasis is possible. If strict visual parity requires this layer, add a dedicated backend-editable emphasis owner rather than allowing arbitrary HTML.
5. The Studio Note ghost button remains absent when its URL is empty. Do not fabricate a dead URL. Treat this as content/data completeness unless a real note destination is assigned.

### C. Product-card data completeness vs template correctness

1. Product-card structural support now exists for editorial meta and placement.
2. Many live products still have missing `_sf_material`, `_sf_piece_reference`, `_sf_placement`, and/or image data; therefore many cards visually collapse to title/price-only states.
3. This is not a reason to fabricate copy. Keep template and catalog-data gaps separately classified.
4. WooCommerce placeholder imagery remains visually cooler/lighter than the reference's warm editorial image field. Audit the placeholder asset/background separately before changing global product image behavior.

### D. Product section / grid

1. Desktop section heading / count geometry and 4-column grid are now close to the static numeric contract: 40px heading, 11px count, 4 columns, 56px x 40px gaps, 32/80 grid padding.
2. Remaining product-card differences should be judged from runtime rows: actual image treatment, wishlist visual weight, title/meta/price/placement rhythm, and incomplete-data collapse states.
3. Do not re-open global width.

### E. Pagination

1. Current pagination has the required left/center/right structure but still needs optical review for disabled Previous/Next contrast, horizontal balance, active-circle scale, and the relation to the separator lines.
2. Preserve WooCommerce URLs/state ownership.

### F. Closing Note

1. Current two-column composition is structurally close.
2. Runtime right-side text is visually much lighter/smaller than the left editorial statement; confirm typography ownership and line length against the static reference before closure.
3. Contact Band below it is a production extension, not part of the original static Shop reference. Keep it, but later tune the transition only; Footer remains CLOSED.

### G. Mobile

1. Keep the approved production deviations: two-column product grid and hidden Editor's Pick.
2. Hero title currently becomes very compact; after desktop title measure/case correction, independently recheck mobile wrapping.
3. Product-card incomplete-data states are more obvious on mobile because the two-column cards are narrow.
4. Re-audit pagination and Closing Note after the desktop corrections, not before.

## Next remediation priority

Do not touch all remaining details at once.

Next high-value batch should be:

```text
1. Hero title capitalization + controlled title measure/wrap
2. Editor's Pick per-product owner precedence
3. Editor's Pick optional title emphasis owner
4. Re-run desktop runtime comparison
```

Then proceed to product cards / pagination / Closing Note / mobile final pass.
