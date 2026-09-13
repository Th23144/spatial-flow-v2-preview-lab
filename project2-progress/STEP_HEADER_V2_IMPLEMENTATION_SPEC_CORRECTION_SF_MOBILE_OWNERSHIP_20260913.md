# Project 2 · Header V2 implementation-spec correction · preserve `sf_mobile` ownership · 2026-09-13

## Current project stage
Main-site Header production-quality / IA / interaction refinement.

## Why this correction exists
The previously locked Header V2 production specification incorrectly proposed using `sf_primary` as the Main mobile `PRIMARY` source and using `sf_mobile` only for selected support links. That conflicts with the already-audited current ownership model and with the user's standing backend-editability requirement.

The user did NOT apply the withdrawn 2.7.47 ZIP. Live source therefore remains on the verified 2.7.46 baseline and no rollback is required.

## Corrected ownership contract

### Desktop
- `sf_primary` remains the authoritative editable owner for Main-site desktop primary navigation.
- Desktop keeps the four-item top-level architecture currently configured: Shop / Journal / Services / About Us, unless the user later changes the WordPress menu itself.
- Search / Saved / Bag remain utility actions outside the WordPress primary menu.

### Mobile / tablet drawer
- `sf_mobile` remains the authoritative editable owner for Main-site mobile navigation.
- Do NOT silently replace it with `sf_primary`.
- The visual grouping/progressive navigation layer may reorganize presentation, but its route labels / destinations must continue to be sourced from the assigned `sf_mobile` menu wherever those destinations exist.
- `sf_primary` remains only the existing fallback if no `sf_mobile` menu is assigned, matching the current source behavior.
- The separate WordPress menu/page hygiene audit remains deferred; current `sf_mobile` items are not deleted in this Header implementation step.

### Checkout
- Checkout should not be surfaced in the redesigned permanent mobile root UI.
- This is a presentation-layer decision only for the Header drawer; it does not delete the Checkout page or change WooCommerce routing.
- Because the underlying `sf_mobile` menu remains editable, the implementation should filter/hide Checkout from this drawer presentation without mutating database menu records.

### Shop progressive disclosure
- Mobile Shop may enter a dedicated explorer panel.
- Product categories and taxonomy branches remain WooCommerce-data driven.
- Back / Close / reset behavior is a front-end interaction layer only and does not change menu/database ownership.

## Deployment correction
The withdrawn whole-file ZIP remains INTERNAL / DO NOT APPLY.

User-facing deployment returns to the Project 2 default:

```text
bounded manual replacement
→ exact live file
→ exact old code anchor
→ expected match count
→ exact replacement
→ save
→ user returns changed file
→ source identity / size / syntax verification
→ record PASS / FAIL
→ only then next bounded Part
```

No multi-file whole-file overwrite is authorized for this Header step.

## Current source baseline
Verified current live baseline remains:

```text
header.php
11,328 bytes
172 lines
SHA256 84bd757eb6cdfe779065ad739fd6968a297ae612b49d554feecf9032866f3224
PHP PASS

functions.php
622,810 bytes
11,895 lines
SHA256 42c46cb5dd6090cef4bed911dfc628eb8aeebe976e8d9dbeb153a1bc5b9f4ec7
version 2.7.46
PHP PASS

assets/css/spatial-flow.css
604,681 bytes
21,411 lines
SHA256 03826efb91e476d8093077e6d6477e71e4a82175bca2bd261dcf9ea45b58c9b0

assets/js/spatial-flow.js
84,769 bytes
2,482 lines
SHA256 173785ea4d92b7bb5310e56d69cb839d62b4cde24b7583abea5ca6ce8f570454
node --check PASS
```

## Corrected implementation order
To minimize transient live breakage, implementation will be incremental and dependency-safe:

1. `functions.php` — backend-editable Main Header copy ownership only (safe independent Part).
2. Verify returned `functions.php` source / size / SHA / PHP syntax before any next edit.
3. Then prepare the next bounded owner Part for dynamic Shop/mobile navigation helpers while preserving `sf_mobile`.
4. Markup / CSS / JS will be ordered so that new behavior is not activated before its dependencies exist.
5. Runtime visual testing begins only after all relevant source Parts pass their source gates.

## What is intentionally NOT changed by this correction
- no live file edited yet;
- no menu database record changed;
- no Footer work;
- no Shop archive work;
- no Checkout / Cart / Single Product changes;
- no Journal Header redesign;
- no page/menu-admin cleanup yet.

## Current stop point
Corrected specification is now authoritative over the superseded 2026-09-13 production spec wherever they conflict.

## Exact next action
Issue **Part H1** as one bounded manual change in current `functions.php`: add backend-editable ownership for the currently hardcoded Main Header issue line, editorial line, and logo subtitle in the existing `Spatial Flow 页眉页尾设置` Customizer section. Do not touch Header markup yet.