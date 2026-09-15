# Airwallex cleanup — residual menu reference not visible in current selected menu

Date: 2026-09-15

## Current state

User attempted Step 1 of Airwallex cleanup in WordPress Appearance > Menus but could not find the residual menu item.

Screenshot shows the currently selected menu is `ABOUT & SERVICES`, which is not the database-identified legacy menu that holds the Airwallex reference.

## Database evidence from prior read-only audit

The residual nav menu item is associated with menu name `MAIN` and references an Airwallex Payment page (`airwallex_payment_method_card`).

## Safety decision

Do not remove anything from `ABOUT & SERVICES` or any of the 7 currently understood production menus.

Next action:
1. Try selecting menu `MAIN` from the menu-selector dropdown at the top of Appearance > Menus.
2. If `MAIN` is not present in the dropdown, stop UI deletion and run a focused read-only SQL query to inspect the nav menu term/item relationship so the orphan/legacy menu can be handled safely.

No deletion performed yet.
