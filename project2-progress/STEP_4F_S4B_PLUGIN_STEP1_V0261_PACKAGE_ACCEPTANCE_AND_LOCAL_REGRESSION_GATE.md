# Project 2 · S4B Plugin Step-1 V0.2.6.1 Package Acceptance and Local Regression Gate

Date: 2026-08-01  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Reviewed deliverables

```text
Spatial Flow Crypto Pay Trial V0.2.6.1
Package: spatial-flow-crypto-pay-trial-v0.2.6.1.zip
Submitted SHA256: bddceb858a5314cf679b5c00929d22ff8972cb22e32c7d87a4395c3acb8aa8b2
Delivery report: Spatial-Flow-Crypto-Pay-Trial-V0.2.6.1-Narrow-Correction-Delivery-Report.md
```

Independent ZIP SHA256:

```text
bddceb858a5314cf679b5c00929d22ff8972cb22e32c7d87a4395c3acb8aa8b2
```

Input V0.2.6 SHA256 independently matched the recorded baseline:

```text
9555a00587d731a815fc37c27939b5644711c54766535978e8d54aaa14e72a71
```

The plugin ZIP is not committed to the Project 2 repository.

## 2. Exact package-diff result

The V0.2.6 and V0.2.6.1 ZIPs contain the same eleven source files.

Only this file changed:

```text
spatial-flow-crypto-pay/spatial-flow-crypto-pay.php
```

The exact source diff contains only the three authorized replacements:

```text
Plugin Header Version: 0.2.6 → 0.2.6.1
SF_CRYPTO_PAY_VERSION: 0.2.6 → 0.2.6.1
add_option(..., 'no') → add_option(..., false)
```

The other ten files are byte-identical to the reviewed V0.2.6 package.

## 3. Independent structural and syntax checks

Confirmed:

```text
- ZIP root remains spatial-flow-crypto-pay/
- no files were added or removed
- no path-traversal entry exists
- no symbolic-link entry exists
- all nine PHP files pass php -l
- no REST route was introduced
- no order-pay hook or template override was introduced
- no Workspace Token, CSRF, advisory lock or Workspace implementation was introduced
- process_payment() remains unchanged
- legacy template, CSS and JS remain unchanged
- Feature Flag remains inert and default-off
```

## 4. Package decision

```text
V0.2.6.1 package integrity: passed
V0.2.6.1 narrow-correction scope: passed
WordPress 6.9.4 autoload compatibility correction: passed
Static PHP syntax: passed
Local installation: authorized
Plugin Step 2: not authorized
Project 2 Checkout source modification: not authorized
Checkout: Not done
```

V0.2.6.1 is the authoritative Step-1 package. V0.2.6 must not be installed as the current test baseline.

## 5. Required local regression sequence

Before installation:

```text
- preserve the working V0.2.5 ZIP
- make a local site/database backup
- keep the V0.2.6.1 ZIP hash available for verification
```

Install or upgrade to V0.2.6.1, then verify in order:

```text
1. plugin activates without Fatal error
2. displayed plugin version is 0.2.6.1
3. existing Gateway remains enabled with its prior settings
4. Project 2 Crypto Workspace setting exists
5. the new setting is off before testing the old path
6. normal Crypto Checkout creates an order
7. the order enters on-hold
8. redirect still goes to the existing /crypto-pay/ page
9. Generate Payment Invoice still works
10. Sandbox administrator button is still available when Sandbox is enabled
11. Sandbox success changes the order to processing
12. canonical WooCommerce Thank You page loads
13. expected order notes are present
14. turning the new Feature Flag on does not change the path in V0.2.6.1
15. turning it off again also leaves the path unchanged
16. sf_crypto_workspace_token_epoch exists with value 1 after the plugin upgrade routine runs
17. no WordPress 6.9.4 deprecation notice is produced for add_option() autoload
18. epoch does not increment automatically in this version
```

Where practical, repeat the established negative checks:

```text
RECEIVER_MISMATCH
OLD_TRANSACTION
TX_FOUND_NO_TOKEN_LOGS
TRON address-format normalization
```

## 6. Pass/fail rule

Step 1 passes local runtime only when the old V0.2.5 payment path remains operational and the new inert setting causes no behavioral change.

Any failure in activation, Gateway settings preservation, on-hold creation, old redirect, Invoice generation, Sandbox processing, Thank You or order notes blocks Step 2.

## 7. Rollback

If a blocking regression occurs:

```text
deactivate V0.2.6.1
restore the preserved V0.2.5 plugin package
reactivate V0.2.5 on the WooCommerce main site only
run one old-path Checkout and Sandbox smoke test
```

No database schema migration was added. The inert Feature Flag setting and epoch option do not require database cleanup for rollback.

## 8. Current stop point

```text
Plugin Step 1 package: accepted for local installation
Local old-path runtime regression: required next
Plugin Step 2: blocked until user reports regression results
S4A gateway-specific adaptation: not started
S5 Invoice / Waiting: not started
Live Checkout modification: not started
Checkout: Not done
```
