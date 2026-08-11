# Step 4F · Product Packaging · Live Install Part B · form-checkout.php

Date: 2026-08-11  
Status: PART B SOURCE-AUDITED · ACCEPTED · DO NOT BROWSER-TEST YET

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

## Part B original baseline

```text
woocommerce/checkout/form-checkout.php
19,685 bytes
381 logical lines
SHA256 5b285cd74e4f0aacca5339d8a9095ab23a1be1b5c4f248d5bedc83ed2b146572
CRLF
no final newline
PHP syntax: passed
```

The earlier Part-B note incorrectly labelled this baseline as LF. The previously recorded coordinated SAFE5 baseline identified this template as CRLF; the user's installed Part-B file also preserves CRLF throughout.

## Authorized edits

Part B makes two bounded template changes:

1. after `$sf_safe5_heading_allowed`, add the Packaging template-state bootstrap variables that read the accepted Part-A runtime helpers;
2. inside Step 02, insert the accepted Product Packaging UI after the native Shipping card and before the existing Step-02 navigation actions.

No Step-01, native Shipping source, Step-03 payment mount, Order Summary, coupon, terms, gateway or place-order ownership is intentionally replaced.

## User-installed Part B identity

The user supplied the manually edited file for source-level audit.

```text
form-checkout.php
32,100 bytes
618 logical lines
617 newline characters
SHA256 3d264ad071333d2a0b2436964c33d6509fbf6148d739a5f2a0b42699c299a085
CRLF throughout
no final newline
PHP syntax: passed
```

The size is larger than the earlier compact offline reference (`30,810 bytes / 540 logical lines`) because the manual tutorial intentionally expanded the Packaging markup over more lines for safer editing. That compact reference is NOT an acceptance target for the user's formatted install.

## Source audit performed

### PHP / file integrity

```text
php -l: PASSED
CRLF count: 617
LF count: 617
final newline: none
opening checkout form: 1
closing checkout form: 1
```

### Existing Woo / SAFE5 ownership preserved

Verified exactly one of each critical owner remains:

```text
woocommerce_checkout_shipping() action source: 1
shipping mirror mount: 1
Step 01 view: 1
Step 02 view: 1
Step 03 view: 1
Continue to Step 02: 1
Continue to Step 03: 1
woocommerce_checkout_payment(): 1
woocommerce_order_review(): 1
woocommerce_before_checkout_form: 1
woocommerce_after_checkout_form: 1
woocommerce_checkout_before_customer_details: 1
woocommerce_checkout_after_customer_details: 1
```

The original baseline shows Step 02 as native Shipping followed directly by the Step-02 actions, and Step 03 retains the native `woocommerce_checkout_payment()` mount. The installed Packaging section is located exactly between those two Step-02 owners.

### Packaging bootstrap / runtime compatibility

Verified template calls correspond to functions present in accepted Part A, including:

```text
spatial_flow_safe5_packaging_copy
spatial_flow_safe5_packaging_units
spatial_flow_safe5_packaging_get_state
spatial_flow_safe5_packaging_gift_fee
spatial_flow_safe5_packaging_standard_name_enabled
```

### Packaging DOM contract

Verified:

```text
Packaging section card: 1
hidden authoritative sf_safe5_packaging_state field: 1
Standard primary card: 1
Gift primary card: 1
primary tier inputs: 2
Together grouping control: 1
Separate grouping control: 1
Custom grouping control: 1
real-cart unit foreach: 1
Custom item rows mount: 1
active non-empty package settings mount: 1
```

HTML hierarchy was also parsed after neutralizing PHP blocks. The Packaging section is a direct Step-02 child, after Shipping and before the existing Step-02 actions; Step 03 still contains its payment mount.

## Audit conclusion

```text
Part B manual edit: ACCEPTED
manual copy/paste corruption found: NO
PHP syntax error: NO
Packaging duplicated: NO
Step 01 damaged: NO evidence
Shipping owner damaged: NO evidence
Step 02 navigation damaged: NO evidence
Step 03 payment owner damaged: NO evidence
Order Summary owner damaged: NO evidence
```

Part B is therefore accepted as the current live-install source baseline.

## Safety gate

Do NOT browser-test yet.

Parts C (`assets/js/checkout-safe5.js`) and D (`assets/css/checkout-safe5.css`) are still required before runtime testing. Part C must be built against this accepted Part-B DOM contract rather than against the earlier compact-line-count reference.

Continuous static preview remains:

```text
https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/main/preview/spatial-flow-v1.html
```

Commit-SHA preview URLs are historical snapshots only.
