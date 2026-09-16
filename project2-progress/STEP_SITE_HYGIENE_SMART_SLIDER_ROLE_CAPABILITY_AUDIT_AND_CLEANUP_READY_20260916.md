# Site Hygiene — Smart Slider role capability audit and cleanup readiness — 2026-09-16

## Scope
Smart Slider 3 (`smart-slider-3`) cleanup readiness after cross-site dependency audit.

## Newly confirmed role residue
Read-only WP role audit on the main site found four Smart Slider capabilities on the `administrator` role:

- `smartslider`
- `smartslider_config`
- `smartslider_edit`
- `smartslider_delete`

All four are granted (`1`).

## Prior evidence carried forward
- Smart Slider 3 is inactive on both `spatialflow.local` and `blog.spatialflow.local`.
- No current non-revision post content references Smart Slider / Nextend.
- No current non-revision postmeta references Smart Slider / Nextend.
- No sidebar widget assignment references Smart Slider.
- `widget_smartslider3` contains only the empty multiwidget marker: `a:1:{s:12:"_multiwidget";i:1;}`.
- No Smart Slider / Nextend WP-Cron events.
- No Smart Slider / Nextend Action Scheduler actions.
- Smart Slider owns four remaining database tables:
  - `wp_nextend2_smartslider3_generators` — 0 rows
  - `wp_nextend2_smartslider3_sliders` — 6 rows
  - `wp_nextend2_smartslider3_sliders_xref` — 5 rows
  - `wp_nextend2_smartslider3_slides` — 9 rows
- Historical slider records include `Tutorial Slider`, `banner`, `博客 banner`, and `My project`; these are database artifacts, not current front-end references.

## Decision
Smart Slider is cleanup-ready, subject to preserving a dedicated backup of its four tables before destructive database cleanup.

Role residue must be removed through the WordPress role API / WP-CLI role commands, not by editing serialized `wp_user_roles` directly.

The generic update/feed transients that happened to contain Smart Slider text are not treated as Smart Slider-owned live dependencies and are not targeted for manual deletion.

## Planned cleanup sequence
1. Export the four Smart Slider tables to a dedicated SQL backup.
2. Move `smart-slider-3` into the existing quarantine directory.
3. Remove the empty `widget_smartslider3` option.
4. Remove Smart Slider capabilities from administrator roles on both sites.
5. Drop the four Smart Slider-owned tables.
6. Verify zero plugin/table/option/role/Cron/Action Scheduler residue.
7. Run main-site and blog smoke tests.

No Media Library attachment deletion is authorized by this cleanup step.
