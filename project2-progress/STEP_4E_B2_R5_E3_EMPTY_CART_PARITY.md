# Step 4E-B2-R5-E3 · Empty-Cart Wrapper and State Parity

Last updated: 2026-07-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Final status

```text
R5-E2 synchronized live counts：Passed / closed.
R5-E3 wrapper/grid-span correction：Passed.
R5-E3 desktop transition-to-empty：Passed.
R5-E3 desktop direct-empty：Passed.
R5-E3 phone transition-to-empty：Passed.
R5-E3 phone direct-empty：Passed.
Return to Shop：Passed.
Undo during transition：Passed.
Non-empty Cart smoke regression：Passed.
R5-E3：Passed / closed.
Current executable step：R5-E4-A strict geometry measurement audit.
Cart page status：Not done.
```

Final runtime record:

```text
project2-progress/STEP_4E_B2_R5_E3_FINAL_RUNTIME_VALIDATION.md
```

## Purpose

The phase unified these two states:

```text
A. Cart becomes empty after removing the final product.
B. Browser directly opens a Cart that was already empty.
```

## Structural correction

The original direct-empty defect occurred because `.wc-empty-cart-message` is the direct CSS-grid child, while only its nested `.cart-empty` element previously received full-grid ownership.

Inside the existing Canonical Cart full-grid selector list, this line was added:

```css
body.woocommerce-cart .wc-empty-cart-message,
```

That correction removed the direct-load left-column confinement and fake right-side column on desktop and phone.

## Phone alignment correction history

### FIX1

```css
body.woocommerce-cart .cart-empty,
body.woocommerce-cart .return-to-shop {
  text-align: center !important;
}
```

Result:

```text
Failed at runtime.
The wrapper was correct, but the native empty message remained visually left-aligned.
```

### FIX2

```css
body.woocommerce-cart .cart-empty {
  display: flex !important;
  justify-content: center !important;
  text-align: center !important;
}

body.woocommerce-cart .return-to-shop {
  text-align: center !important;
}
```

Result:

```text
Passed at runtime.
```

## Final accepted artifact

```text
assets/css/spatial-flow.css
Deployed artifact: spatial-flow(22).css
Size: 695,622 bytes
Logical lines: 23,316
SHA256: 7186d10195843ba30448c898abf04d55b842b57a157ef0a0e2672897ede9b8ed
Braces: 3,621 / 3,621
Comments: 340 / 340
CSS parser errors: 0
```

## Final accepted runtime result

```text
- desktop transition-to-empty and direct-empty layouts match
- phone transition-to-empty and direct-empty layouts match
- phone empty-Cart message is centered
- Return to Shop is centered and usable
- native Undo works
- Header BAG reaches (0)
- restored non-empty Cart remains normal
- no horizontal overflow reported
```

No WooCommerce template override, PHP change, JavaScript change or hardcoded empty-Cart markup was introduced.

R5-E3 remains closed unless a later geometry or notice change causes a regression.