# Step 4F · Step04 A/B Test — Group A Consolidated Manual Package

Date: 2026-08-16
Official user-execution timer start: 2026-08-16 19:59 -0700

## Method A
Historical manual anchored replacement, delivered as one consolidated package.

The earlier single-line Part instruction is excluded from timing.

## Starting baselines

functions.php
- 609,465 bytes
- 11,657 logical lines
- SHA256 62b13f9acb69838bae1543a196e3bd4497faf02e1f30f04f197f7c0fb6575631

woocommerce/checkout/thankyou.php
- 23,174 bytes
- 341 logical lines
- SHA256 6556ba6faf6fd6d687b69e5d38cd2910dd89805405d842dc27a2caab4fec7cfa

assets/css/spatial-flow.css
- 577,717 bytes
- 20,284 logical lines
- SHA256 4d54dcfc1bee2f55bbdd93df1e31cc0e155d6b9cdff917f141086bc25a2bb4b3

## Manual Parts

1. functions.php version line: 2.7.13 -> 2.7.15. Expected delta 0 bytes / 0 lines.
2. functions.php canonical Step5F controls block: replace inclusive START/END-owned block. Expected delta +2,550 bytes / +34 lines.
3. thankyou.php header/comment through ABSPATH guard. Expected delta +82 bytes / +3 lines.
4. thankyou.php body from `spatial_flow_thankyou_text` helper through EOF. Expected delta +20,460 bytes / +235 lines.
5. spatial-flow.css canonical Step5F block: replace inclusive START/END-owned block. Expected delta +9,499 bytes / +355 lines.

All five Parts are performed in one pass. No intermediate upload is required.

## Target fingerprints

functions.php
- 612,015 bytes
- 11,691 logical lines
- SHA256 e1b4842345d7ccfa5057f4dc568dbd1705cf13f86606b78c81c009c3a521891f

woocommerce/checkout/thankyou.php
- 43,716 bytes
- 579 logical lines
- SHA256 4aee09c6f26420c388d15da9a4a12fe247b49a70bdb065725f5d705553ab90cc

assets/css/spatial-flow.css
- 587,216 bytes
- 20,639 logical lines
- SHA256 cba94f9615248a86f8d8d23b806621ed04f7b664e8c3a47727036510a33efef9

## Validation after user completion

The user uploads the three modified test copies once. Consolidated validation checks bytes, logical lines, SHA256, byte-identical candidate identity, PHP syntax, CSS brace/comment structure, and absence of extra or missing changes.

## Safety

TEST COPIES ONLY. This A/B comparison does not modify live Project2 theme files.

Status: A-GROUP CONSOLIDATED PACKAGE DELIVERED / TIMER STARTED.
