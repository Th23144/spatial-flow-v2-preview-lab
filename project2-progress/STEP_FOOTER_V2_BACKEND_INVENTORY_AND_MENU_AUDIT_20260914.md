# STEP_FOOTER_V2_BACKEND_INVENTORY_AND_MENU_AUDIT_20260914

Date: 2026-09-14
Project: Spatial Flow V2 / 项目二换皮工程
Subsystem: Main-site Footer V2

## Evidence supplied

Fresh screenshots supplied by user:
- WordPress Pages → All Pages (23 total / 23 published)
- Appearance → Menus → Manage Locations
- Footer Shop menu
- Footer Journal menu
- Footer About & Services menu
- Footer Customer Care menu
- Footer Legal menu
- WooCommerce → Settings → Advanced page mappings

## Readability / evidence status

The supplied screenshots are clear enough for the Footer IA / inventory audit. No retake is required for the current decision stage.

## Main-site page inventory visible in WordPress

Visible published pages include:
- Care Guide
- Cart
- Checkout
- Crypto Payment
- FAQ
- multiple Payment pages
- Privacy Policy
- Refund And Returns Policy
- Search
- Services
- Shipping Policy
- Terms & Conditions
- Track Order
- Wishlist
- Home
- Shop
- About Us
- Contact Us

The screenshots show 23 total pages / 23 published.

## WooCommerce mapping finding

WooCommerce Advanced page setup currently shows:
- Cart → assigned (Cart, ID 622)
- Checkout → assigned (Checkout, ID 623)
- My account → NOT assigned
- Terms & Conditions → assigned (Terms & Conditions, ID 3251)

Therefore the current Footer IA must NOT invent/promote an Account entry as though a live Woo My Account destination is currently configured.

## Menu-location ownership

Confirmed current assignments:
- Spatial Flow Primary Menu → Main Header Menu
- Spatial Flow Mobile Menu → Main Mobile Menu
- Footer V2 Main — Shop Column → Main Footer Shop Menu
- Footer V2 Main — Journal Column → Main Footer Journal Menu
- Footer V2 Main — About & Services Column → ABOUT & SERVICES
- Footer V2 Main — Customer Care Column → CUSTOMER CARE
- Footer V2 Main — Legal Bottom Links → Footer Legal Menu

Blog Footer V2 locations are currently unassigned and remain outside the current Main-site Footer V2 task.

## Current Footer menu contents

### Shop
- All Products
- Crystal Bracelet
- Crystal Necklace
- Customized Consultation

These are custom links in WordPress.

### Journal
- Journal Home
- Buying Guides
- Space & Energy
- Secrets of Crystals

These are custom links in WordPress.

### ABOUT & SERVICES menu (assigned to Footer V2 Main — About & Services Column)
- Help & FAQ
- Track Order
- Care Guide
- Contact Us

### CUSTOMER CARE menu (assigned to Footer V2 Main — Customer Care Column)
- About Us
- Shipping Policy
- Returns & Refunds

### Legal
- Privacy Policy
- Terms & Conditions

## Important semantic-admin finding

The live contents of the two middle/footer support menus are semantically misnamed/misaligned relative to their registered location labels:
- `ABOUT & SERVICES` currently contains support/service destinations (FAQ, Track Order, Care Guide, Contact)
- `CUSTOMER CARE` currently contains About Us + policy destinations

The frontend can still look intentional because Footer heading copy is separately editable, but the WordPress admin ownership model is confusing and should be clarified after Footer V2 is complete.

Do not arbitrarily rename/delete/reassign these during the visual build without a deliberate migration plan.

## Current IA consequences

1. Services page exists and is a real landing page. Footer should include an explicit Services / Services Overview destination.
2. My Account should not be added as a live Footer destination at this stage because WooCommerce has no My Account page assigned.
3. Search / Cart / Checkout / 404 should not be added to Footer simply because pages exist.
4. Policy coverage already includes Shipping, Returns/Refunds, Privacy, Terms.
5. Wishlist is optional and should not be added merely for completeness; Saved already exists as a Header utility.
6. Shop Footer labels should be reconciled with the now-approved Header/Mega taxonomy language rather than maintaining a divergent vocabulary.

## Additional post-Footer task requested by user

After Main-site Footer V2 is fully repaired and user-accepted, insert an explicit separate step before moving on:

`WordPress Appearance → Menus / Edit Menus full explanation and cleanup guide`

This step must explain in plain language:
- what a WordPress menu is
- what a menu location is
- why there are many locations
- the difference between menu name vs menu location vs menu item
- how custom links differ from page links
- what the checkboxes in Menu Settings mean
- what Manage Locations does
- which current Spatial Flow menus own Header / Mobile / each Footer column / Blog Footer
- which current names are misleading
- what can safely be renamed/reorganized vs what must not be deleted
- a recommended final clean admin naming system

User explicitly states this area has remained confusing despite understanding most other settings. This education/cleanup step must not be forgotten.

## Current next action

Proceed with Main-site Footer V2 IA lock + standalone HTML visual prototype before production code changes.

No screenshot retake required for the current design decision stage.
