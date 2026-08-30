# Project 2 · Step03 Adaptive Sticky 2.7.22 Returned Source Validation Start · 2026-08-30

## Trigger

User returned the three manually edited production source files for the accepted Step03 adaptive sticky correction batch:

- `functions.php`
- `assets/css/checkout-safe5.css`
- `assets/js/checkout-safe5.js`

## Validation scope

Validate the returned files before any browser/runtime acceptance:

1. exact version bump to 2.7.22;
2. expected adaptive Step03 CSS selectors and no obvious duplicate insertion;
3. expected adaptive Step03 JS functions/bindings and no duplicate insertion;
4. PHP syntax;
5. JS syntax;
6. CSS parse/braces/comments;
7. current bytes / logical lines / SHA256;
8. compare the returned source against the planned correction boundaries;
9. confirm no unrelated Woo gateway/payment/order logic was altered in this batch where verifiable from the returned source.

No runtime test result is accepted until this source validation completes.
