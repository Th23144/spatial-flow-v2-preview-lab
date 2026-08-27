# Step 4F · Step04 visible-blocker correction · returned-source validation · 2026-08-27

## State

Validation started.

User returned the three manually edited live-source candidates after the consolidated correction batch:

- `assets/css/spatial-flow.css`
- `woocommerce/checkout/thankyou.php`
- `functions.php`

Validation scope:

1. exact bytes / logical lines / SHA256;
2. CSS brace/comment/parser sanity;
3. PHP syntax;
4. white-band owner correction (`#main.site-main` reset + Step04 background);
5. gateway-specific Thank You output state gate;
6. preservation of the general `woocommerce_thankyou` hook path;
7. cache/version bump to `2.7.18`.

No runtime PASS is declared in this start record. Runtime recheck remains blocked until source validation completes.
