# Post-Footer — WordPress Menu UI Naming and Pages Selector Explanation — 2026-09-15

## User clarification
The user now understands the seven active Main-site menus shown in Appearance → Menus, but finds their names/parenthetical labels misleading and asked whether they can be renamed. The user also asked for a concrete explanation of Add menu items → Pages, including View All / All Pages.

## Key distinction
In the menu selector, an entry such as:
`Main Mobile Menu (Spatial Flow Mobile Menu)`
contains two different concepts:
- `Main Mobile Menu` = the user-created menu name. This can be renamed in WordPress without changing the assigned location.
- `(Spatial Flow Mobile Menu)` = the registered theme menu-location display label. This is defined by theme code and is not renamed from the menu-name field.

The stable menu-location keys should be preserved even if human-facing labels are cleaned up later.

## Recommendation
Do not perform isolated ad-hoc renames that leave the menu name and parenthetical location label semantically inconsistent. In the later cleanup pass, rename both the WordPress menu names and, where appropriate, only the human-facing registered location labels while preserving the existing location keys and assignments.

## Pages selector explanation
`Appearance → Menus → Add menu items → Pages` is only a picker for Page-type content that can be added to the menu currently being edited. It is not the current menu and does not mean every listed page is already linked from the site navigation.

Tabs:
- Recent = recently available/recent Page items for selection.
- View All = shows all eligible Page items available to add.
- Search = searches Page titles to find a Page to add.

A Page becomes a menu item only after it is checked and `Add to Menu` is clicked, after which it appears in the right-side Menu Structure.

`Pages → All Pages` is the master page-management list in WordPress. It manages the Page objects themselves. By contrast, `Menus → Add menu items → Pages → View All` is only a selector that references those Page objects for navigation.

Duplicate `Payment` entries in the Pages picker indicate multiple actual WordPress Page records with the same title; they do not mean there are multiple Payment links in the current menu. These duplicates remain subject to the planned dependency audit before deletion.