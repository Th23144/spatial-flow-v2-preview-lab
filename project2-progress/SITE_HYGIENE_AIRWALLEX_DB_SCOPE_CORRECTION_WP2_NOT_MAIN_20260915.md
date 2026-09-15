# Site Hygiene — Airwallex DB Scope Correction: `wp_2_*` is not confirmed main store

Date: 2026-09-15

## Evidence received

Local Adminer read-only queries returned:

- `SELECT DATABASE();` → `local`
- `SELECT ... FROM wp_2_posts WHERE ID = 623;` → no rows

## Conclusion

`wp_2_*` must NOT be assumed to be the main Spatial Flow ecommerce site tables. The previous hypothesis is rejected.

Because this is a WordPress Multisite install, next step is to map blog IDs/domains/paths through `wp_blogs` and site options before any Airwallex residual queries are run.

## Safety state

- Read-only audit only.
- No DELETE / UPDATE / DROP / ALTER / TRUNCATE authorized.
- No Airwallex page/options/action deletion is authorized yet.
- Database backup remains required before any later cleanup write phase.

## Next read-only mapping queries

1. `SELECT blog_id, domain, path, public, archived, spam, deleted FROM wp_blogs ORDER BY blog_id;`
2. Read `siteurl`, `home`, `blogname` from `wp_options` and `wp_2_options`.
3. Verify Page ID 623 against the table set belonging to the ecommerce main site, expected likely `wp_posts` only after the mapping confirms it.
