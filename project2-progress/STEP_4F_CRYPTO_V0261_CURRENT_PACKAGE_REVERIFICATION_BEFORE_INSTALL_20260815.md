# Step 4F · Crypto Pay V0.2.6.1 Current Package Re-verification Before Install

Date: 2026-08-15
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. User-supplied current intent

The user confirmed the live site is still running:

```text
Spatial Flow Crypto Pay Trial V0.2.5
```

The user is preparing to replace it with the latest available package:

```text
Spatial Flow Crypto Pay Trial V0.2.6.1
```

The user supplied the exact ZIP intended for installation so it could be independently reviewed before replacement.

No live plugin installation or runtime change was performed by this audit.

## 2. Supplied package identity

Supplied ZIP SHA256:

```text
bddceb858a5314cf679b5c00929d22ff8972cb22e32c7d87a4395c3acb8aa8b2
```

This exactly matches the repository's previously accepted authoritative V0.2.6.1 package hash recorded in:

```text
project2-progress/STEP_4F_S4B_PLUGIN_STEP1_V0261_PACKAGE_ACCEPTANCE_AND_LOCAL_REGRESSION_GATE.md
```

Therefore the newly supplied ZIP is byte-identical at archive level to the previously reviewed authoritative V0.2.6.1 package.

## 3. Independent package checks repeated

Archive result:

```text
11 files
single root: spatial-flow-crypto-pay/
no path traversal entries
no symbolic-link entries
```

PHP syntax check:

```text
all 9 PHP files: PASS
```

Version markers:

```text
Plugin Header Version: 0.2.6.1
SF_CRYPTO_PAY_VERSION: 0.2.6.1
```

## 4. Workspace implementation boundary reconfirmed from source

The supplied V0.2.6.1 package contains the planned Project-2 class skeleton files:

```text
class-sf-crypto-pay-invoice-service.php
class-sf-crypto-pay-rest-controller.php
class-sf-crypto-pay-order-guard.php
class-sf-crypto-pay-payment-service.php
class-sf-crypto-pay-workspace.php
class-sf-crypto-pay-workspace-token.php
class-sf-crypto-pay-response.php
```

However each remains an inert Step-1 placeholder whose `bootstrap()` returns `false`.

Source audit confirms the package still does NOT implement:

```text
register_rest_route
before_woocommerce_pay_form integration
woocommerce_locate_template Workspace replacement
real X-SF-Workspace-Token issuance/validation
order-scoped advisory locking
real Project-2 order-pay Workspace
real REST invoice/status/hash operations
```

The `project2_workspace_enabled` Gateway setting exists, but the source itself states it is an experimental switch to remain disabled until the Workspace implementation and regression review are complete.

## 5. Legacy payment path remains authoritative in V0.2.6.1

`process_payment()` remains the legacy behavior:

```text
WooCommerce order
→ update status to on-hold
→ redirect to /crypto-pay/ page
→ pass order_id + WooCommerce order key
```

No Project-2 Workspace redirect is present.

Therefore installing V0.2.6.1 does NOT complete Step 03, does NOT connect S5/S6 to real server state, and does NOT replace the current `/crypto-pay/` payment path.

## 6. Installation decision boundary

Package-integrity decision:

```text
V0.2.6.1 package identity: PASS
Archive safety/structure: PASS
PHP syntax: PASS
Matches previously accepted authoritative package: YES
Suitable for the previously authorized local Step-1 installation/regression gate: YES
```

This is not a production Workspace acceptance.

Before replacement, preserve the known-working V0.2.5 package and current site/database rollback point.

After replacing V0.2.5 with V0.2.6.1, the required immediate objective is OLD-PATH REGRESSION ONLY:

```text
- plugin activates
- displayed version = 0.2.6.1
- existing Gateway settings remain
- Project 2 Crypto Workspace setting exists and remains OFF
- normal Crypto Checkout creates one order
- unresolved order becomes on-hold
- redirect still enters legacy /crypto-pay/
- Generate Payment Invoice still works
- Sandbox success still reaches processing
- canonical WooCommerce Thank You/result still loads
- expected order notes remain
- enabling/disabling the inert Workspace flag causes no path change in V0.2.6.1
- sf_crypto_workspace_token_epoch exists with value 1 after upgrade routine
```

Any failure in the old payment path blocks later plugin Step-2 work.

## 7. Current project consequence

```text
Live site before user replacement: V0.2.5
Supplied intended replacement: authoritative V0.2.6.1 confirmed
V0.2.6.1 real Workspace capability: NOT IMPLEMENTED
03 real Crypto Workspace integration: NOT COMPLETE
Step-04 full Woo status matrix: NOT COMPLETE
Batch 7: remains paused
```

## 8. Current stop point

The user may proceed with the already-authorized local V0.2.6.1 replacement/regression step using this verified ZIP.

Do not start Project-2 live Workspace integration merely because V0.2.6.1 is installed.

Next evidence required after user replacement:

```text
V0.2.6.1 installed successfully
+ old-path regression results
```

Only after that regression passes should the project decide and authorize the next Crypto plugin development phase required for the real Step-03 Workspace.
