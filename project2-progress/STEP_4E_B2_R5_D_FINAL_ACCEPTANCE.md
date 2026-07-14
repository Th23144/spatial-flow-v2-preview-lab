# Step 4E-B2-R5-D · Final Cart Acceptance

Last updated: 2026-07-13  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-B canonical replacement：Passed.
R5-C1 through R5-C4 legacy cleanup：Passed / closed.
R5-D1 exact source and ownership gate：Passed.
Current executable step：R5-D2-A active Customizer editability test.
Cart page status：Not done.
```

R5-D is an acceptance phase. It must not add routine Cart CSS, alter templates, change native WooCommerce behavior or introduce a new patch stack.

## Exact accepted code baselines

### PHP

```text
functions.php
Uploaded name: functions(12).php
Version: 2.7.8
Size: 550,884 bytes
Logical lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
Braces: 1,200 / 1,200
PHP syntax: Passed
```

### CSS

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(18).css
Size: 695,346 bytes
Logical lines: 23,305
SHA256: 316874b203f8ce4104a1a98751f9b5fd63034fb50b0cbeb9aa0c4d2d5711020e
Braces: 3,619 / 3,619
Comments: 340 / 340
CSS parser errors: 0
```

The accepted CSS is two bytes smaller than the theoretical R5-C4 result only because two empty newline characters immediately before the Checkout Visual Final marker were removed. No CSS semantics changed.

## R5-D1 · Exact source and ownership gate

Passed:

```text
- Cart Visual 1 through 1.4.1 absent
- Cart Visual 2-D through 2-D.8 absent
- Cart Visual 2-E absent
- Cart Visual 3 absent
- Canonical Cart START / END present exactly once
- Cart Notice START / END present exactly once
- no Cart template override introduced
- no Cart-specific JavaScript introduced
- native quantity, remove, Coupon, shipping, totals, checkout URL, forms and nonces remain WooCommerce-owned
- functions.php version remains 2.7.8
```

## R5-D2 · Backend editability acceptance

The gate is divided so every test is small and reversible.

### R5-D2-A · Active Customizer text sources

Open:

```text
WordPress Admin
→ Appearance
→ Customize
→ Spatial Flow Cart Page
```

Before changing anything, copy the current values of the fields below into a local note.

Temporarily edit only these text fields. Use the exact live Customizer labels shown in the current UI:

```text
Cart heading · lead text
Cart count · plural format
Order summary heading
Continue shopping button text
Trust card 1 title
Payment note
Complete block title
Complete block view-all text
```

Label mapping from the earlier audit wording:

```text
Trust item 1 title        → Trust card 1 title
Recommendation section title → Complete block title
View-all button text      → Complete block view-all text
Payment note              → Payment note
```

Use these temporary values:

```text
Cart heading · lead text: Test
Cart count · plural format: %s pieces · editability test
Order summary heading: Order summary test
Continue shopping button text: Continue shopping test
Trust card 1 title: Trust title test
Payment note: Payment note editability test
Complete block title: Complete your space test
Complete block view-all text: View all test
```

Publish once, force-refresh the Cart and verify that every temporary value appears in its corresponding visible area.

Then restore every original value from the local note, publish again and force-refresh. The final public Cart must contain no test text.

Do not change:

```text
URLs
product selectors
enable/disable switches
service-card settings
PHP
CSS
JavaScript
WooCommerce templates
version 2.7.8
```

Pass evidence:

```text
1. all eight temporary values appeared in the correct visible areas
2. all eight original values were restored
3. no test text remains after restoration
4. Cart layout and functions remain normal
```

### R5-D2-B · Product-level Cart subtitle

Blocked until R5-D2-A passes.

Planned source:

```text
WooCommerce Product data → General
Cart subtitle / product context
Meta key: _sf_cart_item_meta
```

This test will change one Cart product subtitle temporarily, verify the Cart row, then restore the original product value.

### R5-D2-C · Dynamic recommendation and fallback ownership

Blocked until R5-D2-B passes.

This gate will confirm:

```text
- current recommendations use real WooCommerce products
- product image, category, title, description, price and URL remain dynamic
- Cart products are excluded
- backend fallback product selectors remain available
- no fabricated product identity, fixed price or fixed URL appears
```

## R5-D3 · Final strict visual acceptance

Blocked until R5-D2 passes.

Required review:

```text
- desktop full-page Cart against the approved V2 direction
- production-quality phone Cart review
- heading/count hierarchy
- item-row spacing and thumbnail crop
- desktop Remove and phone SVG remove control
- quantity/subtotal/coupon alignment
- integrated Order Summary
- trust icon and copy alignment
- four real recommendation cards
- Header/Footer and no horizontal overflow
```

The static phone reference is guidance only. Production-quality mobile behavior takes priority over weak or unoptimized static decisions.

## R5-D4 · Final native Cart regression

Blocked until R5-D3 passes.

Required tests:

```text
1. change quantities and Update Cart
2. remove each product position and use Undo / Restore
3. apply a valid Coupon when available
4. submit INVALID123 and verify standard error handling
5. verify totals and shipping update
6. proceed to Checkout and return
7. open recommendation products and return
8. verify Header BAG count after Cart changes
9. verify empty-Cart behavior
10. verify SAFE5 Checkout product rows remain unchanged
```

## R5-D5 · Binary decision

Only after R5-D2, R5-D3 and R5-D4 pass:

```text
Completed 1:1
or
Not done
```

No intermediate page status is permitted.