# Step 4F · Product Packaging · Live Install Part A · functions.php

Date: 2026-08-09
Status: MANUAL INSTALL PART A READY · USER ACTION REQUIRED

## Continuous preview rule

During active static development the canonical preview entry is:

```text
https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/main/preview/spatial-flow-v1.html
```

Commit-SHA preview URLs are historical snapshots only.

## Exact submitted baseline

```text
functions.php
580,074 bytes
10,966 logical lines
SHA256 978b9cc033e5ab241127bde5d77e843d4b85dd08722148a703fbf2cf3d105c58
LF
no final newline
SPATIAL_FLOW_CHILD_VERSION = 2.7.8
```

## Part A changes

Exactly two edits are authorized:

1. bump `SPATIAL_FLOW_CHILD_VERSION` from `2.7.8` to `2.7.9` for SAFE5 CSS/JS cache busting;
2. insert the bounded `SAFE5 Product Packaging Runtime Ownership` block immediately after the unique marker:

```text
/* === SAFE5 Checkout Backend Copy Ownership END === */
```

Both anchors were verified to occur exactly once in the submitted file.

## Runtime responsibilities added

- backend-editable Gift Packaging fee, default $9 per non-empty Gift package;
- backend switch for Standard name personalization, default enabled;
- backend-editable Packaging presentation copy;
- real Woo cart assignment-unit model, including quantity-aware units;
- fixed Package 01..N slot model derived from assignment-unit count;
- together / separate / custom normalization;
- exactly one package assignment per unit;
- Woo session persistence during `update_order_review`;
- final checkout state synchronization;
- Woo fee calculation from active Gift groups only;
- structured order packaging state and fulfillment plan metadata;
- readable line-item Product packaging metadata;
- private order note for fulfillment;
- Packaging session cleanup after cart empty / Thank You.

Product Packaging remains inside one shipment and does not create a shipping method.

## Exact Part A target identity

After only Part A is installed correctly:

```text
functions.php
603,520 bytes
11,574 logical lines
SHA256 537cec4b7fb1dd72494bab9b656002e151c29110351a205d921d749b33e4c150
LF
no final newline
SPATIAL_FLOW_CHILD_VERSION = 2.7.9
PHP syntax: passed
```

Delta from submitted baseline:

```text
+23,446 bytes
+608 logical lines
```

## Safety gate

Do not browser-test after Part A alone. The live Packaging feature is a coordinated four-file unit and will not be runtime-tested until Parts A-D are installed and source-audited.

If either search anchor does not match exactly once, stop instead of guessing.
