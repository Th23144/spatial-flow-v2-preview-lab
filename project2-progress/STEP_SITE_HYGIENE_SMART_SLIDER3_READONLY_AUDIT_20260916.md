# Site Hygiene — Smart Slider 3 Read-only Audit

Date: 2026-09-16

## Scope
Smart Slider 3 (`smart-slider-3`) only. No plugin file movement, table deletion, option deletion, media deletion, cron deletion, or other write action has been performed in this audit step.

## Activation state
- Main site (`spatialflow.local`): inactive
- Blog site (`blog.spatialflow.local`): inactive
- Network active: no

## Plugin files
`wp-content/plugins/smart-slider-3` exists.

## Smart Slider database tables
Read-only counts:
- `wp_nextend2_smartslider3_generators`: 0 rows
- `wp_nextend2_smartslider3_sliders`: 6 rows
- `wp_nextend2_smartslider3_sliders_xref`: 5 rows
- `wp_nextend2_smartslider3_slides`: 9 rows

A first slider-list query using `status` failed because this installed schema does not have a `status` column. No data was modified by that failed SELECT.

## Current content references
A cross-site search of non-revision `post_content` for `smartslider`, `smart-slider`, `nextend`, or Smart Slider shortcode syntax returned zero rows.

This is useful evidence, but it is not sufficient by itself to conclude that Smart Slider is unused because references can also exist in widgets, `postmeta` (for example builder data), theme mods, or other serialized settings.

## Options
Cross-site option search found only:
- Main site: `widget_smartslider3` — 30 bytes
- Blog site: no matching Smart Slider / Nextend option found

The 30-byte widget option has not yet been decoded/inspected, so it must not be deleted yet.

## Scheduled activity
- Main-site WP-Cron search for `smartslider|nextend`: zero matches
- Blog-site WP-Cron search for `smartslider|nextend`: zero matches
- Action Scheduler search for `smartslider|nextend`: zero matches

## Current conclusion
Smart Slider 3 appears dormant at runtime, but it still owns six slider records and nine slide records plus one widget option. Before deciding whether to purge its database tables or only quarantine the plugin, perform one final reference audit covering:
1. Actual slider table schema and slider titles/aliases
2. `widget_smartslider3` serialized value
3. `sidebars_widgets` references
4. Non-revision `postmeta` / builder-data references on both sites
5. Theme-mod / option references containing Smart Slider or Nextend identifiers

## Status
`READ-ONLY AUDIT — FINAL REFERENCE CHECK REQUIRED`
