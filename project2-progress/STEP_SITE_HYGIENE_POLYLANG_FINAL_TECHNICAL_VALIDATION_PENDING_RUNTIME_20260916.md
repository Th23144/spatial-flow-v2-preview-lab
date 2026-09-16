# Site Hygiene — Polylang Final Technical Validation / Runtime Pending

Date: 2026-09-16
Target: Polylang 3.7.7
State: TECHNICAL CLEANUP PASS / RUNTIME CONFIRMATION PENDING

## Backup validation

Dedicated backup exists:

- `C:\Users\23144\Local Sites\spatialflow\app\polylang-before-cleanup-20260916.sql`
- Size: `7,651,841` bytes

## Final transient cleanup

Executed exact-name deletion for:

- `_transient_pll_languages_list`
- `_transient_timeout_pll_languages_list`

across main and blog options tables.

Result:

- Query succeeded.
- Rows affected: 1.

## Final residual option audit

The final `polylang|pll_` option scan now returns exactly one item:

- Blog: `relevanssi_polylang_all_languages`

This option is intentionally retained because it belongs to the currently active Relevanssi plugin on the blog and is not classified as Polylang-owned cleanup residue.

## Already-verified cleanup state

Prior validation in this cleanup chain established:

- Polylang plugin files quarantined.
- Polylang absent from both main-site and blog plugin lists.
- `language`, `term_language`, `post_translations`, and `term_translations` taxonomy rows removed.
- `pll_*` translation terms removed.
- Existing current menu-location assignments unchanged after cleanup.
- No protected current menu, product, page, attachment, CartFlows, WooCommerce, crypto-payment, DIY bridge, or blog Relevanssi data was intentionally removed.

## Closure gate

Do **not** mark Polylang CLOSED until user confirms runtime smoke test is normal for:

Main site:
- Home
- Header/menu navigation
- Shop
- Single Product
- Cart
- Checkout

Blog:
- Home
- Header/menu navigation
- Any article

Once the user confirms these runtime checks are normal, create a final closure record and mark Polylang `PASS / CLOSED`.
