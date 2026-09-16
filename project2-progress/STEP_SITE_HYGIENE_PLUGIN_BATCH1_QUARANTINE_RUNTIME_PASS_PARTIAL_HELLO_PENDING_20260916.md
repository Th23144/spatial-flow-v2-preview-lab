# Site Hygiene — Plugin Batch 1 Quarantine Runtime Result

Date: 2026-09-16
Scope: first low-risk globally-inactive plugin quarantine batch across Multisite.

## Backup
- `wp db export ../site-hygiene-pre-plugin-cleanup-20260916.sql`
- WP-CLI emitted a Windows `grep` warning, but export itself reported success.
- `dir` confirmed rollback SQL exists at `app/site-hygiene-pre-plugin-cleanup-20260916.sql`.
- Confirmed size: 80,496,404 bytes.

## Quarantine actions
Successfully moved out of `app/public/wp-content/plugins/`:
- `akismet`
- `woo-poly-integration`
- `sidebar-manager`
- `variation-swatches-woo`

`hello` move using directory path failed with `系统找不到指定的文件。`
Subsequent `wp plugin list` on both sites still shows `hello` inactive, so Hello Dolly has NOT yet been quarantined and remains pending. This is consistent with Hello Dolly commonly being installed as a single plugin file rather than a directory; verify actual path before moving.

## Runtime smoke test
User manually checked pages and reported all tested pages OK after the four successful quarantines.

## Plugin-list verification
Both `spatialflow.local` and `blog.spatialflow.local` no longer list the four successfully quarantined plugins.
Both still list `hello` as inactive.

## Current state
- Batch 1 runtime status for four successfully quarantined plugins: PASS.
- Batch 1 overall: PARTIAL PASS / HELLO PENDING.
- No permanent delete has been authorized or performed.
- Quarantine folder and rollback SQL must be retained.

## Next action
Read-only/FS verify the exact Hello Dolly plugin path, then quarantine that exact file and re-run both plugin lists. Do not proceed to heavier residue-bearing candidates until Batch 1 is formally closed.
