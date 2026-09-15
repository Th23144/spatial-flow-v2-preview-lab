# Airwallex Residual Cleanup — MAIN menu UI correction and cleanup sequence

Date: 2026-09-15

## User correction / evidence
The current WordPress Appearance → Menus dropdown has already been shown repeatedly and contains exactly seven current editable menus:
- ABOUT & SERVICES
- CUSTOMER CARE
- Footer Legal Menu
- Main Footer Journal Menu
- Main Footer Shop Menu
- Main Header Menu
- Main Mobile Menu

There is no editable menu named `MAIN` in the current WordPress UI.

## Database evidence already established
A read-only database query found one historical `nav_menu_item` relation:
- menu item ID: `3602`
- referenced page ID: `3260`
- target slug: `airwallex_payment_method_card`
- related menu term name returned by the DB join: `MAIN`

## Correction
The prior instruction to find and edit `MAIN` in the WordPress menu UI is withdrawn. The UI evidence had already established that `MAIN` is not a current editable menu.

The DB relation is now treated as a stale / historical menu relationship candidate, not as a current user-managed menu.

## Safer cleanup order
1. Do not modify any of the seven current menus.
2. Permanently delete the six confirmed Airwallex `Payment` pages through WordPress admin, not direct SQL.
3. After deletion, run a targeted read-only verification for menu item `3602` and its relationship.
4. If WordPress core cleanup removes the stale menu item automatically, no DB menu deletion is needed.
5. If item `3602` remains, remove only that proven orphan/stale nav-menu object and its associated metadata/term relationship in a later bounded DB cleanup step.
6. Continue Airwallex options, Action Scheduler, and source cleanup only after this verification.

## Safety
- Do not delete or rename any of the seven current menus in this step.
- Do not delete a `MAIN` menu term by assumption.
- Do not use broad SQL deletes against nav menus.
