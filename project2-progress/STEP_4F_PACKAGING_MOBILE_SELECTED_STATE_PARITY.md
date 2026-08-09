# Step 4F · Product Packaging · Mobile Selected-State Parity

Date: 2026-08-08
Status: STATIC CANDIDATE · USER REVIEW REQUIRED
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

After Custom assignment synchronization was corrected, the user accepted the current structure/function direction and requested a visual refinement on phone.

The reference was the existing Step 02 Shipping selector on mobile: when a shipping method is selected, the entire selected card receives a subtle commerce highlight / screen-like selected surface.

The user reported that Product Packaging currently lacked the same selected-box feedback, making the mobile experience feel flatter and less obviously commerce-oriented.

## Source visual contract

The existing mobile Shipping selected state in:

```text
preview/spatial-flow-checkout-mobile-commerce-v1.css
```

uses:

```css
border-color: var(--stone);
background: linear-gradient(90deg, rgba(74, 93, 90, .12), var(--paper) 46%);
box-shadow: 0 5px 14px rgba(74, 93, 90, .08);
```

This step intentionally reuses that exact selected-surface language instead of inventing a new Packaging-only effect.

## Packaging controls receiving the mobile selected surface

At phone widths (`max-width: 720px`), the Shipping-style selected feedback is now applied to:

```text
1. Primary Standard Packaging / Gift Packaging selection
2. Together / Package separately / Custom grouping mode selection
3. Standard / Gift selection inside an expanded physical Package
4. Custom grouping product rows whose item currently belongs to that Package
```

The small Packaging identity indicators retain the established clay/ink palette. The surrounding selected commerce surface uses the same stone-tinted gradient and shadow language as Shipping.

## Custom assignment meaning remains unchanged

This is visual only.

The synchronized Custom invariant remains:

```text
one product assignment unit
= exactly one Product Packaging Group at a time
```

Selecting a product in another Package transfers ownership; it does not duplicate the item.

The new full-row selected highlight is intended to make that current ownership more obvious on mobile.

## Files changed

```text
preview/spatial-flow-checkout-packaging-v6.css
```

A temporary `spatial-flow-checkout-packaging-v7.css` was created during implementation but was not retained. The selected-state rules were consolidated into the currently referenced v6 stylesheet, and the unused v7 file was deleted to avoid repository pollution.

Commits:

```text
2227264  Match mobile packaging selected states to Shipping commerce feedback
390c809  Remove unused packaging v7 candidate after consolidating selected state
```

## Intentionally NOT changed

```text
- Packaging grouping structure
- Custom assignment synchronization
- Package fee logic
- desktop Packaging structure
- real SAFE5 Checkout
- WooCommerce Session / order metadata
- backend Packaging settings
- Step 03 Payment
- Step 04 Order Result
- Batch 6
```

## User review focus

At 390px and 360px widths verify:

```text
1. A selected Packaging card now has the same subtle commerce feedback as selected Shipping.
2. The highlight is visible but not excessively bright.
3. Standard/Gift inside a Package visibly communicates which option is active.
4. In Custom grouping, the product row currently owned by the open Package is visibly selected.
5. Moving a product to another Package transfers both data ownership and the selected-row highlight.
6. Unselected rows remain visually quiet.
7. No layout shift, clipping, or new horizontal overflow appears.
```

## Current stop point

```text
Custom assignment synchronization: implemented, under user re-test
Mobile selected-state parity: implemented, awaiting user review
Real SAFE5 Product Packaging: NOT STARTED
Batch 6: PAUSED
```

## Recording policy

This step follows `PROJECT2_STEP_RECORDING_POLICY.md`.
