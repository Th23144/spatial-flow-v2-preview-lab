# Site Hygiene — Airwallex DB site mapping confirmed — 2026-09-15

## Confirmed Multisite mapping

Read-only Adminer evidence confirms:

- `wp_blogs.blog_id = 1` → `spatialflow.local`
- `wp_blogs.blog_id = 2` → `blog.spatialflow.local`
- `wp_options` has `home/siteurl = http://spatialflow.local`
- `wp_2_options` has `home/siteurl = http://blog.spatialflow.local`

Therefore:

- Main ecommerce site `spatialflow.local` uses unnumbered `wp_*` tables.
- Journal/blog subsite `blog.spatialflow.local` uses `wp_2_*` tables.

Previous `wp_2_posts WHERE ID=623` empty result is expected because page 623 belongs to the main ecommerce site.

## Next step

Run one bounded, read-only Airwallex residual audit against the main-site `wp_*` tables only:

1. verify Checkout page ID 623 in `wp_posts`;
2. enumerate Payment/Airwallex pages with content-length/hash evidence;
3. enumerate page meta without exposing values;
4. inspect menu-item references to candidate pages;
5. inspect `wp_options` names/sizes only for Airwallex references;
6. inspect Airwallex-named tables;
7. inspect Action Scheduler references if main-site scheduler tables exist;
8. inspect WordPress cron for Airwallex references.

No mutation is authorized. Only `SELECT` and `SHOW` statements are permitted until an explicit cleanup plan is approved.
