# STEP — Site Hygiene / Airwallex menu layer closed; options cleanup start — 2026-09-15

## Verified menu facts
- `wp_terms` + `wp_term_taxonomy` shows exactly 7 `nav_menu` terms on the main site:
  - ABOUT & SERVICES
  - CUSTOMER CARE
  - Footer Legal Menu
  - Main Footer Journal Menu
  - Main Footer Shop Menu
  - Main Header Menu
  - Main Mobile Menu
- There is no database `nav_menu` named `MAIN`.
- Query for page-type nav menu items whose target page no longer exists returned **0 rows** after permanent deletion of the six Airwallex Payment pages.
- Therefore the menu layer is clean and requires no manual or database deletion.
- Prior interpretation of an apparent `MAIN` / menu-item relationship was erroneous and is superseded by the direct nav-menu term query and orphan-menu-item query.

## Airwallex cleanup state
- Six Airwallex Payment pages have been permanently deleted through WordPress admin.
- Existing seven production menus must not be modified for Airwallex cleanup.
- Next bounded write step is removal of `wp_options` rows whose **option_name itself contains `airwallex`**.
- Do **not** delete generic WooCommerce/transient options merely because their option_value mentions Airwallex. Those will be handled separately as cache/config hygiene only if warranted.
- Action Scheduler cleanup remains pending after options cleanup.
