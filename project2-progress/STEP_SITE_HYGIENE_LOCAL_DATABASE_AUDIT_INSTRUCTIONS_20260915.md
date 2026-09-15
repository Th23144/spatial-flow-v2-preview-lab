# Site Hygiene — Local database audit instructions correction (2026-09-15)

## Context
The current Spatial Flow environment uses Local for WordPress development, not a hosted phpMyAdmin workflow.

## Correction
Database audit instructions must therefore use Local's own Database/Adminer access path and remain read-only until explicit deletion approval.

## Current evidence package requested from the user
The user may send the non-database evidence in one batch:
- full current child-theme ZIP;
- Installed Plugins screenshots covering the complete list;
- WPCode snippets list screenshots.

Database audit should then be performed against the Local site database using read-only SQL only.

## Safety boundary
Until a later explicit cleanup decision, only SELECT/SHOW queries are authorized. Do not run DELETE, UPDATE, DROP, TRUNCATE, ALTER, REPLACE, INSERT, or direct option/post modifications.

## Multisite note
The project is a WordPress Multisite installation. Do not assume the site table prefix or blog/site table number. First identify the main site's posts/options/postmeta tables by verifying the known Checkout page ID 623. If ID 623 does not resolve to the current Checkout page in the selected posts table, stop and re-identify the correct site tables before continuing.
