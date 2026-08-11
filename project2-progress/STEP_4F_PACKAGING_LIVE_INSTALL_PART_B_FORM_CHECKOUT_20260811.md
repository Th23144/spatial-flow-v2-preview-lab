# Step 4F · Product Packaging · Live Install Part B · form-checkout.php

Date: 2026-08-11  
Status: MANUAL INSTALL PART B READY · PART A ACCEPTED · USER ACTION REQUIRED

## Accepted prerequisite

Part A `functions.php` supplied by the user has been source-audited and accepted.

Accepted Part A identity:

```text
functions.php
603,618 bytes
11,579 logical lines
SHA256 aa3ff53e0358ee53c95883a24db735d952ce10d3ec9b55ed26a0fbf964d996aa
LF
no final newline
SPATIAL_FLOW_CHILD_VERSION = 2.7.9
PHP syntax: passed
```

## Part B submitted baseline

```text
woocommerce/checkout/form-checkout.php
19,685 bytes
381 logical lines
SHA256 5b285cd74e4f0aacca5339d8a9095ab23a1be1b5c4f248d5bedc83ed2b146572
LF
no final newline
PHP syntax: passed
```

## Exact Part B edits

Part B makes exactly two bounded edits to the submitted template.

1. After the existing `$sf_safe5_heading_allowed` declaration, add the Packaging template-state bootstrap variables. These read the Part A runtime helpers and prepare real cart assignment units, persisted Packaging state, Gift fee, Standard personalization capability, slot count and JSON state.
2. Inside Step 02, insert the accepted Product Packaging UI immediately after the existing Shipping card and immediately before the unique `.sf-safe5-actions` block whose first button has `data-sf-safe5-prev="1"`.

The existing native Shipping card, Step 02 navigation, Step 03 payment mount, terms, gateways and `#place_order` remain untouched.

## Product Packaging UI introduced

The Step 02 template now provides:

```text
- one hidden authoritative Woo checkout field: sf_safe5_packaging_state
- Standard Packaging primary row
- Gift Packaging primary row with live backend Gift fee
- optional Standard name field when enabled by backend setting
- Gift card message field
- explicit product-packaging-vs-shipment boundary note
- separate-packaging entry control
- Together / Separate / Custom grouping controls
- accepted item-centric B Custom source rows generated from the real Woo cart units
- Package slots remain automatic; no customer + New package action
- active-package settings mount for JS to render only non-empty packages
```

## Exact target identity

The exact Part B patch was applied offline to the submitted baseline and syntax-checked.

```text
woocommerce/checkout/form-checkout.php
30,810 bytes
540 logical lines
SHA256 a94ade89159333b636f86da303794aaf62cfebde911794634577a3716c5aa228
LF
no final newline
PHP syntax: passed
```

Delta:

```text
+11,125 bytes
+159 logical lines
```

## Safety gate

Do not browser-test after Part B. Parts C (`assets/js/checkout-safe5.js`) and D (`assets/css/checkout-safe5.css`) are still required before runtime testing.

If either Part B search anchor does not match exactly once, stop instead of guessing.

Continuous static preview remains:

```text
https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/main/preview/spatial-flow-v1.html
```

Commit-SHA preview URLs remain historical snapshots only.
