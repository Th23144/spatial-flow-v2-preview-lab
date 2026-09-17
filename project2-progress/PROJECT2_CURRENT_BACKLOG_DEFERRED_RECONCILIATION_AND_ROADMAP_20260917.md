# Project 2 — Current Backlog / Deferred Reconciliation / Roadmap

Date: 2026-09-17
Repository: Th23144/spatial-flow-v2-preview-lab

## Purpose

Reconcile the user's older saved deferred-project table with later authoritative Project-2 closures and the current 2026-09-17 Shop work.

Precedence rule remains:
later explicit user decision / later runtime closure > older deferred table / older status snapshot.

This file is the current backlog/deferred interpretation and does not rewrite historical records.

## A. Old deferred-table items that are NO LONGER open blockers

### Single Product

- Story Behind: no longer pending as an old module. Section 02 was deliberately redefined as Editorial Reading and is USER/RUNTIME REVALIDATED/CLOSED.
- Care Ritual: implemented as Section 03 / Care & Ritual and CLOSED.
- Quiet Notes / Reviews: intentionally omitted for the current version by explicit product decision; CLOSED, not an open strict-1:1 defect.
- Closing Editor's Note / large bottom gift CTA: resolved by explicit omission/product-architecture decision; CLOSED.
- Related Products / product metadata presentation: USER/RUNTIME ACCEPTED/CLOSED.
- Single Product whole page: Completed 1:1 as of 2026-09-12.
- Missing real product imagery/editorial metadata on some products is catalog/data population truth, not a reason to fabricate content and not a reopened Single Product template blocker.

### Main shared shell

- Main-site Header V2: USER ACCEPTED / CLOSED.
- Main-site Footer V2: USER ACCEPTED / CLOSED.
- Old Footer backend-editability uncertainty is superseded by later source/runtime/user closure.
- Blog Header/Footer remains separate and is NOT covered by the Main-site closures.

### Cart / Checkout / Thank You

- Cart remains Completed 1:1.
- Checkout remains Completed 1:1.
- Thank You / WooCommerce Order Result remains Completed 1:1.
- Older proposals for broad Checkout/Step04 reconstruction are superseded by the later final closure unless new concrete regression evidence appears.

### Temporary Site Hygiene

- Temporary inactive-plugin cleanup is PASS / CLOSED.
- Active-plugin replacement and broader source consolidation were intentionally deferred to Final Deep Cleanup.

## B. Still-open explicit deferred / later items

### 1. Shop Custom Studio signature feature — NEW / BLOCKING FINAL SHOP CLOSURE

The old rotating single-product Editor's Pick is frozen.

User decision:
The most important permanent Shop feature is the site's Custom Studio / Bracelet DIY capability.

Future target:
- reinterpret the large featured Shop block as Custom Studio / DIY Signature Feature;
- do not bind it to one WooCommerce product's short description/material/placement;
- use a proper Custom Studio content/pricing owner or explicit backend-editable bridge;
- primary CTA enters DIY;
- secondary CTA explains How it works / materials / editorial context;
- price appears only if a real pricing owner can supply truthful data;
- mobile must be re-designed because the old decision to hide Editor's Pick on mobile is no longer suitable for a core DIY entry.

Status:
DEFERRED / FROZEN.
Shop must remain Not done until this module is implemented and runtime accepted.

### 2. Cart mobile removed-item Notice copy/rhythm

Open deferred polish item:
- current native long-product-title removed-item Notice can wrap poorly on narrow phones;
- approved future visible-copy direction: Item removed. Undo?;
- preserve native Woo removal/restore lifecycle.

Status:
OPEN / NON-BLOCKING for existing Cart Completed 1:1 state.

### 3. Checkout / Step04 future non-blocking items

Still deferred but do not reopen Checkout:
- Step04 status-icon micro visual polish;
- conditional Step02 no-method / real multi-rate regression when such configuration exists;
- future Crypto evolution: rate lock, QR, expiry/countdown, monitoring, WalletConnect, multi-asset/network;
- Crypto Workspace feature-flag production exposure decision;
- WPCode 1706 收款页 remains DISABLED and retained until a later cleanup decision.

### 4. Menu-system admin explanation / hygiene education

Still owed from the post-Footer plan:
- Appearance → Menus → Edit Menus;
- Manage Locations;
- menu object vs menu location vs page/custom-link item;
- current main/blog owner mapping and safe naming/reorganization rules.

This is an admin-operations task, not a page 1:1 blocker.

### 5. Global / Final Deep Cleanup

Deferred until page/function mainline is stable:
- active plugin KEEP / REPLACE WITH SOURCE / MERGE / REMOVE classification;
- plugin-to-source replacement where justified;
- WPCode consolidation;
- Project2-CLEAN-CSS global consolidation;
- remaining unscoped/legacy CSS cleanup including historical related-products rules;
- CSS/JS/PHP consolidation;
- DB/options/transients/Cron/Action Scheduler residue cleanup;
- quarantine/backups final disposition;
- final site-size/redundancy cleanup;
- full regression and release.

## C. Shop items that are NOT separate deferred blockers anymore

### Product-card Editorial Place Note

Historical blocker no longer exists because real product-owned fields now exist:
- _sf_material
- _sf_piece_reference
- _sf_placement

Shop card template support for editorial subline/placement now exists.
If individual products lack those values, that is catalog data completeness, not a reason to fabricate content.

Therefore:
not a separate deferred engineering item.
It remains part of the current Shop card/runtime review.

### Product images / metadata completeness

Missing image/editorial metadata on specific products remains truthful data state.
It may be cleaned/populated later as catalog work, but it does not justify fake visual content.

## D. Current strict-1:1 unfinished page/system inventory

### Current active page
- Shop archive — Not done.

### Main-site pages still Not done
- Home
- Wishlist
- Track Order
- Account
- Search
- 404
- About Us
- Services
- FAQ / Help
- Contact
- Utility / policy pages

### Blog / Journal still Not done
- Blog Header/Footer independent branch
- Blog Home
- Blog Issue
- Blog Article

### Protected completed
- Main-site Header V2
- Main-site Footer V2
- Single Product
- Cart
- Checkout
- Thank You / WooCommerce Order Result

## E. Revised execution order

### Phase 1 — Finish current Shop work except frozen Custom Studio module

Continue current Shop strict review after the frozen feature block:
1. Product section heading / cards
2. Pagination
3. Closing editorial note
4. Product Contact Band transition / explicit retain-remove decision if needed
5. mobile pass for the non-frozen Shop surfaces
6. regression checks for filters/sorting/Wishlist/product links/pagination and protected pages

At the end of Phase 1:
Shop remains Not done because Custom Studio Signature Feature is still deferred.

### Phase 2 — Continue main page-build mainline
1. Home
2. Wishlist
3. Track Order
4. Account
5. Search
6. 404
7. About Us
8. Services
9. FAQ / Help
10. Contact
11. Utility / policy pages

### Phase 3 — Blog / Journal family
1. Blog Header/Footer
2. Blog Home
3. Blog Issue
4. Blog Article

### Phase 4 — Deferred-feature closure checkpoint
Priority order:
1. Shop Custom Studio / DIY Signature Feature — required before Shop can close
2. Cart mobile removed-item Notice polish
3. Menu-system admin explanation
4. Checkout/Crypto future-item decision only where the user wants to bring them into the current release

After Custom Studio passes:
run full Shop desktop/mobile regression and only then decide Shop Completed 1:1.

### Phase 5 — Final Deep Cleanup
Run plugin-to-source / WPCode / Project2-CLEAN-CSS / CSS-JS-PHP / DB-cron cleanup and final full-site regression/release.

## Current stop point

Do NOT resume Shop implementation until this reconciliation is shown to the user.

After user review:
resume Shop below the frozen Custom Studio block, starting with Product Section / Cards audit.
