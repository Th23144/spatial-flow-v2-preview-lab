# Final Production Reskin — Phase Start / Fresh Source Gate

Date: 2026-10-02
Project: Spatial Flow V2 / Project 2

## Authorization basis

The final cross-page consistency and inventory audit has passed.

Production mapping is now authorized for already-closed surfaces, excluding:
- About Us final design;
- Shop light-home / hybrid layer;
- Global Home;
- DIY light homepage (out of scope).

## First mandatory step

Before editing production source, obtain a FRESH snapshot of the current child theme / active owners.

Historical snippets and old uploaded CSS/PHP are not sufficient for final mapping.

Minimum source gate should identify the current owners of:
- page/template routing for task/info pages;
- Header/Footer shared shell;
- shared Spatial Flow stylesheet(s);
- shared JS;
- functions/hooks used for page-specific body classes / assets;
- any current page-specific template or shortcode owners;
- form/plugin ownership for Contact;
- YITH ownership for Wishlist;
- WooCommerce ownership for commerce-linked routes.

## Initial production mapping sequence

Recommended first batch:
1. Wishlist
2. Search
3. 404 template
4. Contact
5. Utility / Policy family
6. Services
7. FAQ
8. Track Order
9. Care Guide

Protected commerce surfaces are not to be rewritten merely to unify style:
- Single Product
- Cart
- Checkout
- Crypto Payment
- Thank You / Order Result
- accepted ordinary Shop archive

## Production rules

- preserve backend editability;
- preserve real WordPress / WooCommerce / YITH / form-plugin authority;
- preserve URLs and policy content;
- canonical in-place CSS repair, not append-only patch accumulation;
- source hash / size / syntax audit around every replacement;
- desktop + mobile runtime acceptance per surface;
- rollback path retained.

## Status

FINAL PRODUCTION RESKIN = STARTED AT SOURCE-GATE PHASE.
NO PRODUCTION FILE HAS BEEN EDITED YET.
NEXT = FRESH SOURCE CAPTURE / OWNER AUDIT.
