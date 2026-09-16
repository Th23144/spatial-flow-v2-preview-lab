# Site Hygiene — Plugin Batch 1 Quarantine Closed — 2026-09-16

## Scope
First low-risk cross-site inactive plugin isolation batch.

## Plugins isolated from `wp-content/plugins`
- `akismet`
- `hello` (single-file plugin `hello.php`)
- `woo-poly-integration`
- `sidebar-manager`
- `variation-swatches-woo`

## Safety state
- Pre-cleanup DB snapshot created: `app/site-hygiene-pre-plugin-cleanup-20260916.sql`
- Snapshot verified present: 80,496,404 bytes
- Plugins moved to rollback quarantine outside web root: `app/plugin-quarantine-20260916/`
- No permanent plugin deletion was performed.

## Verification
- `wp plugin list` on `spatialflow.local`: all five names absent.
- `wp plugin list` on `blog.spatialflow.local`: all five names absent.
- User runtime smoke test across both sites: PASS.
- No white screen, PHP fatal, or obvious layout/runtime regression reported.

## Status
**BATCH 1 = PASS / CLOSED (QUARANTINED, NOT PERMANENTLY DELETED)**

Keep the DB snapshot and quarantine directory until the broader Site Hygiene plugin phase is closed.
