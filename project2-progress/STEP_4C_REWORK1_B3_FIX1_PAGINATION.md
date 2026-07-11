# Step 4C-REWORK1-B3-FIX1 · Shop Pagination Horizontal Layout

Last updated: 2026-07-10
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
In progress.
```

## Bug

The desktop Shop pagination renders page numbers vertically in a tall left-aligned column instead of as one centered horizontal row.

Screenshot evidence supplied by the user shows:

```text
1
2
3
4
5
```

stacked vertically between the product grid and the closing editorial note.

## Root cause

The controlled Shop CSS correctly styles:

```css
ul.page-numbers
```

as a flex row, but a later rule in the same Shop block uses the broad selector:

```css
nav.woocommerce-pagination .page-numbers
```

That selector matches both:

```text
- the parent `<ul class="page-numbers">`
- each child `<a class="page-numbers">` / `<span class="page-numbers">`
```

As a result, the parent `<ul>` also receives the 44px item width/height and `inline-flex` item styling intended only for links/spans. The list collapses and the page items stack vertically.

## Correct fix

Narrow the item selector so it targets only pagination links and spans:

```css
nav.woocommerce-pagination a.page-numbers,
nav.woocommerce-pagination span.page-numbers
```

Also explicitly normalize the parent list and list items:

```text
- horizontal flex direction
- width: 100%
- auto height
- zero list padding
- `li` width auto / flex none
```

## Scope

```text
CSS only.
No PHP changes.
No WooCommerce pagination logic changes.
No backend-editable content changes.
No product, cart, checkout, payment, or order logic changes.
```

## Process correction

The overall Shop rework must not be marked Passed until this pagination bug is fixed and rechecked.

The previous `Next step: Pending user instruction` state was also incorrect. The assistant should continue the documented Project 2 sequence and only ask the user to choose when there is a genuine product/visual decision point.
