# Site Hygiene — Smart Slider 3 partial cleanup + role capability correction

Date: 2026-09-16

## Current state
Smart Slider 3 cleanup has been mostly completed successfully.

Completed successfully:
- Dedicated backup created: `../smart-slider3-before-cleanup-20260916.sql`
- Backup size confirmed: 101,572 bytes
- `smart-slider-3` plugin directory moved into `../plugin-quarantine-20260916/`
- Main-site `widget_smartslider3` option deleted
- Four Smart Slider tables dropped:
  - `wp_nextend2_smartslider3_generators`
  - `wp_nextend2_smartslider3_sliders`
  - `wp_nextend2_smartslider3_sliders_xref`
  - `wp_nextend2_smartslider3_slides`
- Table zero-residual verification returned no rows
- `widget_smartslider3` zero-residual verification returned no rows
- Plugin no longer appears in either site plugin list
- Blog-site role-capability audit returned no Smart Slider / Nextend capability residue

## Correction required
The attempted commands:

`wp --url=spatialflow.local role remove-cap administrator smartslider smartslider_config smartslider_edit smartslider_delete`

and the equivalent blog command failed because this WP-CLI installation does not provide a `role remove-cap` subcommand.

Therefore the main-site administrator role still contains exactly these four residual capabilities:
- `smartslider`
- `smartslider_config`
- `smartslider_edit`
- `smartslider_delete`

These capabilities are historical Smart Slider residue and are not evidence of a live dependency. The blog-site role audit is already zero.

## Next gate
Use the WordPress role API through `wp eval` to remove only those four capabilities from the main-site administrator role, then re-run the read-only capability audit. Do not alter any other administrator capability.

Smart Slider 3 is not yet marked CLOSED until this final capability cleanup and runtime smoke test pass.
