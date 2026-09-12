# Project 2 · Step 4D-REOPEN · Gift CTA / Closing Note reference + source audit · 2026-09-12

## Sources reviewed
- `preview/spatial-flow-product-v1.html`
- `project2-progress/STEP_4D_REOPEN_A_SINGLE_PRODUCT_WHOLE_PAGE_REAUDIT_20260903.md`
- `project2-progress/STEP_4D_REOPEN_A_SINGLE_PRODUCT_FINAL_REMEDIATION_PLAN_20260904.md`
- latest user-returned current `woocommerce/single-product.php`
- current accepted Product Packaging / checkout architecture from project records

## Important terminology correction
The static reference does **not** contain two separate bottom blocks named `Gift CTA` and `Closing Editor's Note`.

It contains one final block after Related Products:

```html
<section class="closing-note">
  ... gift-oriented headline ...
  ... gift-packaging explanation ...
  <a class="btn-dark">Make it a gift →</a>
</section>
```

Therefore the historical audit label `Closing Editor's Note` was an interpretation of the CSS class/comment `closing-note`, not evidence of a second editor-authored long-form section.

The reference's actual `closing-note` is the **gift-oriented closing conversion block itself**.

## Current source state
The latest user-returned `woocommerce/single-product.php` ends after Related Products and then closes the main/product wrapper and calls the Woo shop footer.

Therefore:

```text
Reference gift-oriented closing block: PRESENT IN REFERENCE
Current production template: ABSENT
Separate Closing Editor's Note block: NOT PRESENT IN REFERENCE
```

## Product architecture consequence
Do not add two separate closing sections.

Recommended current architecture:

```text
Related Products
→ one Closing Gift CTA block
→ Footer
```

A separate Editor's Note should be formally omitted unless the user later defines a distinct purpose for it. Adding another long-form editorial block would duplicate the narrative jobs already owned by Section 01 and Section 02.

## Gift CTA truth / backend-editability boundary
The production site already has a real Product Packaging flow in checkout, including Gift Packaging. The closing CTA must connect to that real capability and must not imply a fake one-click gift state.

Current Product page already has a per-product `_sf_gift_service` field used in Product Attributes, but the final closing conversion block is better treated primarily as a global gift-service presentation because the checkout packaging system is global/service-level behavior.

Recommended ownership:
- global editable CTA headline;
- global editable supporting copy;
- global editable button label;
- actual CTA target should lead the customer back to the real product purchase/options flow, with copy explaining that Gift Packaging is selected during checkout;
- no hardcoded claim such as a specific wrapping material, hand lettering, Lisbon packing studio, included card, etc. unless those operational claims are actually true and intentionally configured.

Optional product gating may later use real product gift eligibility if such an authoritative field exists; do not infer eligibility solely from static reference prose.

## Interaction recommendation
A universal product-page CTA cannot safely auto-add the current product and jump directly to checkout because variable products may require option selection.

Therefore the safest cross-product behavior is:

```text
Make it a gift / Choose gift options
→ native anchor back to the real Product Options / Add to Cart area
→ customer chooses required variation/quantity and adds the item normally
→ Gift Packaging is selected in the existing checkout packaging step
```

This preserves WooCommerce authority and works for simple and variable products without fake state or custom cart mutation.

## Visual target
Follow the reference composition:
- max-width / horizontal rhythm aligned with the product page;
- two columns on desktop;
- left large serif statement with restrained italic/bluestone emphasis;
- right compact supporting copy + dark rectangular CTA;
- one bottom divider before footer;
- collapse cleanly to one column on mobile;
- no rounded white card frame.

## Current classification

```text
Closing Gift CTA: REQUIRED / MISSING
Separate Closing Editor's Note: NO DISTINCT REFERENCE BLOCK; RECOMMEND FORMAL OMISSION
Current code edit status: NOT STARTED
```

## Next action
Ask the user to confirm the corrected architecture:

```text
ONE closing Gift CTA block only
NO separate Editor's Note block
```

If approved, freeze exact editable fields, CTA anchor target and desktop/mobile CSS before issuing one bounded implementation batch.
