# Step 4D Reopen B5 — Product Subtitle backend-to-frontend verification PASS — 2026-09-09

## Verification evidence
User edited the WooCommerce product field `Hero · Product subtitle` and refreshed the real Single Product page.

The entered value rendered directly beneath the product title and above the WooCommerce price, proving the field is genuinely backend-editable and wired to the intended frontend Hero position.

## Result
PASS for the Product Subtitle backend-to-frontend mapping only.

This does NOT close B5 overall.

## Remaining B5 items
1. Rebuild Hero top metadata to match the reference structure more closely. Current live output still shows duplicated category information (`100 / BRACELETS` plus a second standalone `BRACELETS`) instead of the reference-style single metadata line.
2. Verify Shipping / fulfilment override behavior separately: product override value should replace the global default; clearing the override should restore the global default.
3. Final visual acceptance of the Hero after metadata reconstruction.

## Acceptance policy note
Any backend-editable field is not considered complete until the user has been shown its backend location, has edited it, and the corresponding frontend output has been verified.
