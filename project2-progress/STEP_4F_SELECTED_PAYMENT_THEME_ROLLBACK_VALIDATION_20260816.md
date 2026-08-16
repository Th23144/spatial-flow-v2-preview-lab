# Step 4F · Selected Payment Theme Rollback Validation

Date: 2026-08-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Selected Payment theme experiment: REJECTED / ROLLED BACK
User manual rollback: COMPLETED
Returned-source validation: PASS
Rollback identity: BYTE-EXACT PASS
V0.3.0 Crypto plugin rollback: NO
Project 2 Crypto Workspace: remains OFF
```

## Scope

This validation covers only the four Project-2 child-theme files changed by the rejected theme-side `Selected Payment` experiment:

```text
functions.php
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
```

The user manually removed the complete immediately preceding Selected-Payment theme delta and returned all four files for validation.

No earlier accepted Step-03 work was supposed to be removed. Spatial Flow Crypto Pay Trial V0.3.0 was explicitly outside this rollback.

## Authoritative restore target

The restore target was inherited from:

```text
project2-progress/STEP_4F_FULL_REPOSITORY_DOCUMENT_INHERITANCE_COMPLETE_20260816.md
```

Expected identities:

| File | Bytes | Logical lines | SHA256 |
|---|---:|---:|---|
| `functions.php` | 609,465 | 11,657 | `62b13f9acb69838bae1543a196e3bd4497faf02e1f30f04f197f7c0fb6575631` |
| `woocommerce/checkout/form-checkout.php` | 37,981 | 674 | `c7af24d516ff9ca90c6cabddc546b709362a27dd91548201e58e4258f7d68f9e` |
| `assets/js/checkout-safe5.js` | 59,007 | 1,768 | `b672ab9c643bc0e4008b0bb9215c0fdc6a2c777c9a18d3f2a1be48ff2cbe5af0` |
| `assets/css/checkout-safe5.css` | 148,983 | 4,855 | `c1f5835297adf28f2509c9138f785007fd9b180d52bd83643c298fe3a999f87a` |

Expected child-theme version:

```text
SPATIAL_FLOW_CHILD_VERSION = 2.7.13
```

## Returned-source result

All four returned files match the restore target exactly.

| File | Actual bytes | Actual logical lines | Actual SHA256 | Result |
|---|---:|---:|---|---|
| `functions.php` | 609,465 | 11,657 | `62b13f9acb69838bae1543a196e3bd4497faf02e1f30f04f197f7c0fb6575631` | PASS |
| `woocommerce/checkout/form-checkout.php` | 37,981 | 674 | `c7af24d516ff9ca90c6cabddc546b709362a27dd91548201e58e4258f7d68f9e` | PASS |
| `assets/js/checkout-safe5.js` | 59,007 | 1,768 | `b672ab9c643bc0e4008b0bb9215c0fdc6a2c777c9a18d3f2a1be48ff2cbe5af0` | PASS |
| `assets/css/checkout-safe5.css` | 148,983 | 4,855 | `c1f5835297adf28f2509c9138f785007fd9b180d52bd83643c298fe3a999f87a` | PASS |

`functions.php` reports:

```text
SPATIAL_FLOW_CHILD_VERSION = 2.7.13
```

## Syntax / integrity validation

```text
functions.php: php -l PASS
form-checkout.php: php -l PASS
checkout-safe5.js: node --check PASS
checkout-safe5.css: exact accepted-baseline SHA/bytes/lines PASS
```

Because the CSS file is byte-identical to the accepted restore target, no new CSS parse/cascade delta exists in this rollback result.

## Rejected Selected-Payment residue search

The four returned files were searched for the rejected implementation markers:

```text
sf-safe5-payment-selected-panel: 0
selected payment: 0
data-sf-safe5-payment-selected: 0
spatial_flow_crypto: 0
```

Result:

```text
No rejected theme-side Selected Payment implementation residue detected.
No Crypto-specific gateway registry was left in the Project-2 theme files.
```

## Architecture after rollback

Step 03 is restored to the accepted gateway-agnostic WooCommerce host:

```text
real eligible WooCommerce gateways
→ native selected gateway / payment_box
→ native gateway fields / iframe / nonce
→ native Terms/privacy
→ exactly one native Place Order
```

The Project-2 theme does not hardcode `spatial_flow_crypto` as a selected-payment presentation owner.

## Intentionally unchanged

```text
Spatial Flow Crypto Pay Trial V0.3.0 candidate: KEEP
V0.2.9 backend/security accepted contract: KEEP
Product Packaging: CLOSED / unchanged
Batch-6 normal Step-03 Woo structure/function: CLOSED / unchanged
Project 2 Crypto Workspace feature flag: OFF
Legacy /crypto-pay/ rollback path: preserved
```

## Acceptance decision

```text
SOURCE ROLLBACK VALIDATION: PASS
BYTE-EXACT RESTORE: PASS
THEME SELECTED-PAYMENT EXPERIMENT: CLOSED AS REJECTED
```

This closes the rollback gate. It does not itself constitute V0.3.0 customer Workspace runtime acceptance.

## Current stop point

The only authorized next project action is:

```text
Open the consolidated Spatial Flow Crypto Pay Trial V0.3.0
Project-2 Crypto Workspace BIG BATCH B controlled runtime acceptance cycle.
```

The feature flag must remain OFF until the runtime acceptance procedure explicitly reaches the controlled-enable step.
