# Step 4F · Product Packaging · Live Install Part A · functions.php

Date: 2026-08-09
Status: PART A USER EDIT VERIFIED · TARGET IDENTITY CORRECTED

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

Exactly two edits were authorized:

1. bump `SPATIAL_FLOW_CHILD_VERSION` from `2.7.8` to `2.7.9` for SAFE5 CSS/JS cache busting;
2. insert the bounded `SAFE5 Product Packaging Runtime Ownership` block immediately after the unique marker:

```text
/* === SAFE5 Checkout Backend Copy Ownership END === */
```

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

## Correction to previously published target

The previously recorded target (`603,520 bytes / 11,574 lines / SHA256 537cec...`) was incorrect. The user noticed the mismatch before proceeding.

The uploaded edited file was audited directly. Removing the inserted Packaging block and reverting version `2.7.9` to `2.7.8` reconstructs the original baseline byte-for-byte and reproduces the original SHA256 exactly:

```text
978b9cc033e5ab241127bde5d77e843d4b85dd08722148a703fbf2cf3d105c58
```

Therefore the user did not make an insertion mistake. The prior target arithmetic/hash was wrong.

## Verified Part A target identity

The correct identity for the exact Part A code supplied to the user is:

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

Delta from submitted baseline:

```text
+23,544 bytes
+613 logical lines
```

Structural verification:

```text
SAFE5 Checkout Backend Copy Ownership END: 1 match
SAFE5 Product Packaging Runtime Ownership START: 1 match
SAFE5 Product Packaging Runtime Ownership END: 1 match
```

Part A is therefore accepted as source-correct. Do not edit it merely to chase the earlier incorrect target size.

## Safety gate

Do not browser-test after Part A alone. The live Packaging feature is a coordinated four-file unit and will not be runtime-tested until Parts A-D are installed and source-audited.
