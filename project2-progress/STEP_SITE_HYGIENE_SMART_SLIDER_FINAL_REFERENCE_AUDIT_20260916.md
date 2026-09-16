# STEP_SITE_HYGIENE_SMART_SLIDER_FINAL_REFERENCE_AUDIT_20260916

Date: 2026-09-16
Project: Spatial Flow V2 / Project 2 Site Hygiene
Scope: Smart Slider 3 final reference audit before cleanup

## Runtime/plugin state
- `smart-slider-3` is inactive on both `spatialflow.local` and `blog.spatialflow.local`.
- No Network Active instance.
- Plugin files still exist under `wp-content/plugins/smart-slider-3`.

## Smart Slider database state
Four plugin-owned tables remain:
- `wp_nextend2_smartslider3_generators`: 0 rows
- `wp_nextend2_smartslider3_sliders`: 6 rows
- `wp_nextend2_smartslider3_sliders_xref`: 5 rows
- `wp_nextend2_smartslider3_slides`: 9 rows

Existing slider records include old/demo/editorial artifacts such as:
- Tutorial Slider
- banner
- 博客 banner
- My project
- banner12
Some are published and some are in trash, but publication state inside Smart Slider does not prove current WordPress page usage.

## Current WordPress usage audit
No current non-revision `post_content` references were found for `smartslider`, `smart-slider`, `nextend`, or `[smartslider` on either site.

No current non-revision `postmeta` references were found for Smart Slider/Nextend on either site.

No sidebar placement exists:
- `widget_smartslider3` contains only `a:1:{s:12:"_multiwidget";i:1;}`
- neither site's `sidebars_widgets` references Smart Slider

No Smart Slider/Nextend WP-Cron events were found on either site.
No Smart Slider/Nextend Action Scheduler rows were found.

## Option deep-search findings
Only three option-value matches remain on the main site:
- `_site_transient_feed_9bbd59226dc36b9b26cd43f15694c5c3` — cache/transient data
- `_site_transient_update_plugins` — WordPress plugin update cache
- `wp_user_roles` — potentially contains Smart Slider/Nextend capability residue and requires exact read-only inspection before modification

The first two are cache/update metadata, not evidence of a live page dependency.
The only meaningful unresolved owner is `wp_user_roles` capability residue.

## Decision
Smart Slider is no longer part of the current front-end/page-builder execution path based on all current audits.
However, before destructive cleanup, inspect exact role capability names containing `smartslider` or `nextend`; do not edit serialized `wp_user_roles` directly.

After role-capability inspection, planned cleanup path is:
1. retain the existing full DB backup and quarantine rollback path;
2. optionally export Smart Slider's four tables separately for targeted rollback;
3. move `smart-slider-3` into quarantine;
4. remove Smart Slider role capabilities using WordPress role APIs / WP-CLI, not raw serialized SQL replacement;
5. delete `widget_smartslider3` if still present;
6. drop the four Smart Slider-owned tables;
7. leave Media Library files untouched;
8. verify zero plugin/table/option/runtime references and perform smoke test.

Status: FINAL REFERENCE AUDIT PASS; ROLE CAPABILITY INSPECTION PENDING; NOT YET CLOSED.