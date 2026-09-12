# Project 2 · Step 4D-REOPEN · Gift surface final omission decision · 2026-09-12

## Decision
After auditing the current Single Product gift-awareness surfaces against the now-complete Checkout Product Packaging capability, the current-version product decision is:

```text
Large Closing Gift CTA: OMIT
Separate Closing Editor's Note: OMIT
Additional small gift reminder: OMIT
Existing Gift Service surfaces: RETAIN
Checkout Product Packaging: remains the real packaging/personalization workflow
```

## Why
The static reference's `closing-note` is a gift-conversion block, not a second independent editorial note. The production site now has a more complete gift architecture than the original static reference:

- Checkout already owns the real Standard / Gift Packaging choice.
- Packaging and personalization are handled in the accepted checkout flow rather than on the product page.
- Single Product already exposes gift awareness before checkout through existing Gift Service surfaces.
- The per-product Product Attributes owner `_sf_gift_service` is real and backend-editable.
- Global/service-level labels and trust-strip copy remain editable through the existing Customizer owner model.
- Fresh current live screenshots show Gift Service messaging already visible in the product-area service/trust surface and again in Product Attributes.

Adding another large bottom CTA would therefore repeat an already-visible purchase context and add another major visual block to an intentionally long editorial product page.

Adding even a new small reminder is not necessary at this point because gift awareness is already represented before checkout. If future analytics or user evidence shows gift discoverability is weak, a lightweight reminder may be reconsidered then; it is not required for current completion.

## Functional ownership
Do not duplicate checkout controls on Single Product.

```text
Single Product = awareness / product-specific gift-service copy
Checkout = actual Standard vs Gift Packaging selection + personalization + fee/order truth
```

No product-page control should preselect, fake, or bypass WooCommerce checkout packaging state.

## Reference exception
The static reference's bottom `closing-note` / `Make it a gift →` block is an intentional current-version omission because the production architecture now covers the same purchase need through better-established editable/service surfaces and the Checkout packaging workflow.

This omission is therefore NOT a strict 1:1 defect.

## Closing Editor's Note clarification
There is no separate second Closing Editor's Note block to restore from the static reference. Historical wording conflated the CSS class/name `closing-note` with an editorial closing section. The actual reference block is gift-oriented.

No additional long-form closing editorial copy will be added.

## Source impact

```text
Code changes required: NONE
functions.php version bump: NONE
single-product.php change: NONE
CSS change: NONE
JS change: NONE
```

## Status

```text
Gift CTA unresolved scope: RESOLVED / INTENTIONALLY OMITTED
Closing Editor's Note unresolved scope: RESOLVED / OMITTED / NOT A SEPARATE REFERENCE BLOCK
Additional gift reminder: NOT REQUIRED
Single Product overall binary status: Not done pending final whole-page closure/regression gate
```

## Next action
Proceed to the final Single Product whole-page closure audit/regression. Recheck the complete current page as one integrated production surface, preserving all accepted explicit exceptions and product decisions, before any binary `Completed 1:1` declaration.
