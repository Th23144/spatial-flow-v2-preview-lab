# Airwallex residual cleanup — Payment pages deleted, verify orphan menu item

Date: 2026-09-15

## User-confirmed action

The six Airwallex-generated `Payment` pages were permanently deleted through WordPress admin.

## Current next gate

Before touching any current menu, verify whether the previously observed historical nav-menu item still exists:

- menu item ID: `3602`
- previously referenced page ID: `3260`
- previous target slug: `airwallex_payment_method_card`
- previous historical menu relation name: `MAIN`

The active WordPress menu UI currently exposes only the seven known current menus; `MAIN` is not present there. Therefore no current menu should be edited for this cleanup step.

## Safety rule

Run read-only SQL first. If WordPress page deletion already removed the orphan menu item, no manual menu cleanup is needed. If menu item `3602` remains, perform a later bounded cleanup only for that exact historical object after inspecting its remaining post/postmeta/term relationships.
