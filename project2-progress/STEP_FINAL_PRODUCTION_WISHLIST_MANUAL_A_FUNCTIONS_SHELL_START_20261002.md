# Final Production Wishlist — Manual Step A / functions.php Shell Start

Date: 2026-10-02
Project: Spatial Flow V2 / Project 2

## User confirmation

User did NOT install or overwrite the previously generated v2.7.51 package.

Therefore the fresh uploaded v2.7.50 child-theme source remains the untouched production baseline.

## Step A scope

Target:
`functions.php`

Purpose:
Update only the Wishlist production shell / editable page copy owner needed to support the accepted Wishlist Harmonized visual structure.

This step does NOT touch:
- CSS;
- JS;
- YITH data ownership;
- WooCommerce product/cart ownership;
- Header / Footer;
- any other page.

## Required protocol

Before user edit:
- calculate current bytes / logical lines / SHA256;
- identify one exact anchored old block;
- confirm expected match count;
- prepare one complete replacement block;
- calculate expected bytes / lines / SHA256 after replacement;
- provide rollback text.

After user edit:
- user returns modified functions.php;
- verify exact bytes / lines / SHA256 / PHP syntax;
- only then proceed to Wishlist CSS step.

## Status

WISHLIST MANUAL STEP A = ACTIVE.
NO SOURCE FILE HAS BEEN MODIFIED BY USER YET.
