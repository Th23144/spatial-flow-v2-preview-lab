# Site Hygiene — Airwallex option-name cleanup result

Date: 2026-09-15

## Result

The user executed the guarded `wp_options` cleanup targeting only rows whose **option_name itself contains `airwallex`**.

Observed result:

- Pre-delete `SELECT ... WHERE option_name LIKE '%airwallex%'` → **0 rows**.
- `DELETE FROM wp_options WHERE option_name LIKE '%airwallex%'` → **0 rows affected**.
- Post-delete verification query → **0 rows**.
- Adminer displayed `deleted_rows = -1` for the session variable based on `ROW_COUNT()`; this is not used as authoritative evidence because the actual DELETE result and both pre/post SELECTs show zero matching rows.

## Interpretation

There are currently no main-site `wp_options` rows whose key name itself contains `airwallex`.

Earlier residual audit results that matched `option_value LIKE '%airwallex%'` therefore belong to generic/shared WordPress/WooCommerce cache/config rows whose **values** contain historical Airwallex references. Those must not be bulk-deleted by key-name logic and will be handled separately and conservatively.

## Safety

No `wp_options` rows were deleted by this step.

Next bounded cleanup target: Action Scheduler records owned by the exact hook `airwallex_check_pending_transactions`, previously audited as 257 actions and 767 related logs.
