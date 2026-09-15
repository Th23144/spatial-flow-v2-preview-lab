# STEP — Airwallex menu ID 3602 misread correction and orphan-menu re-audit — 2026-09-15

## Correction
A post-delete verification query returned:

- `wp_posts.ID = 3602`
- `post_type = shop_order_placehold`
- `post_status = draft`
- `postmeta: wt_pklist_order_language = en_US`

Therefore ID `3602` is **not** a WordPress `nav_menu_item`. Any earlier interpretation that `3602` itself was the Airwallex menu item is withdrawn.

## Safety consequence
- Do **not** delete or edit post ID 3602 as part of Airwallex cleanup.
- Existing seven production menus remain untouched.
- Before any menu cleanup write, re-audit actual `nav_menu` terms and orphaned page-type menu items after the six Airwallex Payment pages were permanently deleted.

## Next read-only checks
1. Enumerate all `nav_menu` terms still present in the database.
2. Enumerate orphaned page-type `nav_menu_item` posts whose `_menu_item_object_id` points to a missing page.
3. Only if a confirmed Airwallex orphan is found will any targeted deletion be proposed.

Status: CORRECTION RECORDED / MENU CLEANUP WRITE PAUSED / READ-ONLY RE-AUDIT REQUIRED.
