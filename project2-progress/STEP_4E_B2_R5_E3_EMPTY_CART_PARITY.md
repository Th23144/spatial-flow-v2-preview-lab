# Step 4E-B2-R5-E3 · Empty-Cart Wrapper and State Parity

Last updated: 2026-07-15  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E2 synchronized live counts：Passed / closed.
R5-E3 wrapper/grid-span correction：Passed.
R5-E3 desktop transition-to-empty：Passed.
R5-E3 desktop direct-empty：Passed.
R5-E3 phone transition-to-empty：Failed only on horizontal message alignment.
R5-E3 phone direct-empty：Failed only on horizontal message alignment.
Return to Shop：Passed.
Undo during transition：Passed.
Non-empty Cart smoke regression：Passed.
Current executable step：R5-E3-FIX1 mobile empty-Cart centering.
Cart page status：Not done.
```

Current fix record:

```text
project2-progress/STEP_4E_B2_R5_E3_FIX1_MOBILE_EMPTY_CENTERING.md
```

## Purpose

Make these two states use the same stable full-width empty-Cart composition:

```text
A. Cart becomes empty after removing the final product.
B. Browser directly opens a Cart that was already empty.
```

The original structural defect occurred because `.wc-empty-cart-message` is the direct CSS-grid child, while only its nested `.cart-empty` element previously received full-grid ownership.

## Accepted structural artifact

```text
Uploaded/server artifact: spatial-flow(20).css
Size: 695,392 bytes
Logical lines: 23,306
SHA256: 19701ba3ee9944784939bef50dc94d81ccefba46e4df6be279edabc3c03c22e8
Braces: 3,619 / 3,619
Comments: 340 / 340
CSS parser errors: 0
```

Inside the existing Canonical Cart full-grid selector list, this one line was added:

```css
body.woocommerce-cart .wc-empty-cart-message,
```

That correction successfully removed the direct-load left-column confinement and fake right-side column on desktop and phone.

## Runtime result

The user confirmed every R5-E3 check passed except phone horizontal alignment.

Passed:

```text
- desktop transition-to-empty
- desktop direct fresh empty load
- phone full-width wrapper parity
- Return to Shop
- native Undo
- BAG (0)
- non-empty Cart smoke regression
- no horizontal overflow reported
```

Remaining defect:

```text
On both phone empty-Cart states, “Your cart is currently empty.” remains left-aligned instead of centered.
```

The two supplied phone screenshots confirm this is now an alignment-only defect, not a grid-span/state-parity defect.

## R5-E3-FIX1 exact operation

Modify only:

```text
assets/css/spatial-flow.css
```

Current baseline is `spatial-flow(20).css`.

Inside the existing Canonical Cart `@media (max-width: 767px)` block, add this bounded rule immediately after `.sf-cart-v2-heading__count`:

```css
  body.woocommerce-cart .cart-empty,
  body.woocommerce-cart .return-to-shop {
    text-align: center !important;
  }
```

Expected result:

```text
Size: 695,511 bytes
Logical lines: 23,311
SHA256: d36326b8efac681ad6b9e3d31af63fe60221527fac26dee344803b3cd5fa6aee
Braces: 3,620 / 3,620
Comments: 340 / 340
CSS parser errors: 0
```

No desktop rule, template, PHP, JavaScript, Cart Notice or R5-E4 geometry rule may be changed in FIX1.

## Final R5-E3 validation after FIX1

```text
1. Phone transition-to-empty message centered.
2. Phone direct-empty message centered.
3. Return to Shop remains centered and usable.
4. Undo remains functional.
5. BAG remains (0).
6. Re-added non-empty Cart remains normal.
```

Do not begin R5-E4 until R5-E3-FIX1 is explicitly accepted.
