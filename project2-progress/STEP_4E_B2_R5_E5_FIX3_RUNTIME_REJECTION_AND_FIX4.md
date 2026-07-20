# Step 4E-B2-R5-E5-FIX3 · Runtime Rejection / FIX4 Cancelled

Last updated: 2026-07-20  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Deployed artifact: spatial-flow(34).css
Coupon / Apply / Update de-boxing: Passed.
Implied left-column frame removal: Failed.
Previously proposed FIX4: Cancelled before execution.
Reason: FIX4 would reinterpret the approved static Cart instead of reproducing it strictly.
Current executable phase: R5-E5-S1 strict static-to-native ownership rebase.
Cart page status: Not done.
```

## User correction

The user explicitly rejected the speculative FIX4 direction and restated the governing requirement:

```text
The real Cart must reproduce the approved static Cart strictly 1:1.
The approved static Cart has no invisible frame.
Do not solve the defect by inventing a different Cart composition.
```

The user did not execute FIX4. No FIX4 artifact exists and no rollback is required.

## Why the prior FIX4 was wrong

The proposed FIX4 would have:

```text
- removed the terminal divider from the final product row
- changed the native utility row into a compact left-aligned group
```

That is not a literal translation of the approved static source.

The authoritative static source states:

```text
preview/spatial-flow-cart-v1.html
```

Its structure is explicit:

```text
- .cart-page is 7fr / 5fr with an 80px gap
- .cart-items contains only .cart-item articles
- every .cart-item has border-bottom: 1px solid var(--border-soft)
- the right .cart-sidebar is the only intentionally filled Cart surface
- the static markup contains no Coupon / Apply Coupon / Update Cart footer row
```

Therefore:

```text
1. Removing the final item divider is not strict 1:1.
2. Keeping the native actions row under the left product column, even in a smaller form, is still non-reference structure.
3. Additional CSS micro-adjustments cannot make a non-reference footer row become the reference product-only left column.
```

## Correct strict-1:1 conclusion

Preserve the static-owned geometry exactly:

```text
- keep the product-row divider
- keep 7fr / 5fr
- keep the 80px gap
- keep the uninterrupted warm canvas
- keep the product-only left visual plane
- keep the filled Order Summary surface on the right
```

The native-only WooCommerce controls must remain functional under the Project 2 policy, but they must no longer define the default left-column composition.

This requires a controlled source/DOM ownership adaptation, not another CSS-only restyling pass.

## Next phase · R5-E5-S1

Before issuing any new artifact, audit the current real Cart source ownership for:

```text
- native quantity form and Update Cart submit ownership
- native Coupon input/button ownership
- notice and nonce ownership
- safe relocation or conditional rendering points
- AJAX/fragment replacement behavior
- desktop and phone re-initialization requirements
```

Target production translation:

```text
- default left column visually reproduces only the static cart-item stack
- final product divider remains exactly as the reference
- quantity changes continue through native WooCommerce submission
- Coupon remains usable through a narrow, documented native-only adaptation outside the static product plane
- no hardcoded products, prices, totals, shipping or coupon behavior
```

No manual CSS edit is authorized until this ownership audit is complete.

## Current baseline

```text
spatial-flow(34).css
Size: 698,076 bytes
Logical lines: 23,406
SHA256: 3e6b0d6fa292681cee1c2936e744314b4347a0bcc82ea3e7cd911d5cac1969ce
Braces: 3,638 / 3,638
Comments: 337 / 337
CSS parser errors: 0
Line endings: LF
Final newline: present
```

Do not apply the cancelled predicted FIX4 artifact:

```text
SHA256: 6377f0686c9b7a992c440e0c855bfa409cdcd45359f33695f896fa048d5f6737
Status: cancelled / must not be created or deployed
```