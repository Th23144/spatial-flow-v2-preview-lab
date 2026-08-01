# Project 2 · S4B Plugin Step-1 V0.2.6 Package Review and Correction Gate

Date: 2026-08-01  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Reviewed deliverables

```text
Spatial Flow Crypto Pay Trial V0.2.6
Package: spatial-flow-crypto-pay-trial-v0.2.6.zip
Submitted SHA256: 9555a00587d731a815fc37c27939b5644711c54766535978e8d54aaa14e72a71
Delivery report: Spatial-Flow-Crypto-Pay-Trial-V0.2.6-Step-1-Delivery-Report.md
```

Independent package SHA256:

```text
9555a00587d731a815fc37c27939b5644711c54766535978e8d54aaa14e72a71
```

Source baseline SHA256 was independently confirmed as:

```text
V0.2.5 ZIP:
41e926e96af99a0623d850189ec99ea4a58536b3f4b23be78f1eba9d21d7550f
```

The plugin ZIP itself is not committed to the Project 2 repository.

## 2. Independent structural audit

Confirmed:

```text
- plugin directory remains spatial-flow-crypto-pay
- plugin header version is 0.2.6
- SF_CRYPTO_PAY_VERSION is 0.2.6
- seven new include class skeletons exist
- all seven skeletons are inert
- all seven skeletons use direct-access protection
- no skeleton registers hooks, routes, redirects, database writes, tokens or locks
- no REST route is registered
- no order-pay hook/filter/template override is registered
- process_payment() is unchanged from V0.2.5
- existing crypto-pay-page.php is byte-identical to V0.2.5
- existing crypto-pay.js is byte-identical to V0.2.5
- existing crypto-pay.css is byte-identical to V0.2.5
- no file was removed from the V0.2.5 package
- ZIP contains no path traversal entries or symbolic-link entries
- all PHP files pass syntax validation
```

The new Workspace-token skeleton correctly records the future approved scheme:

```text
short-lived signed opaque Workspace Token
X-SF-Workspace-Token header
no raw WooCommerce Order Key in token or normal JSON
no HttpOnly Workspace Cookie implementation in the first phase
```

## 3. Confirmed bounded source changes

The existing main plugin file changed only in these categories:

```text
- version 0.2.5 → 0.2.6
- two inert constants
- safe loading of seven inert class files
- epoch option initialization inside the existing activation/upgrade routine
- one inert Gateway settings field project2_workspace_enabled
```

Existing payment, invoice, TronGrid, Sandbox, redirect, shortcode, admin-post and Thank You functions were not changed.

## 4. Upgrade-path clarification

The plugin already contains:

```php
add_action('admin_init', 'sf_crypto_pay_maybe_upgrade');
```

and calls the activation/upgrade routine when:

```text
sf_crypto_pay_db_version !== SF_CRYPTO_PAY_VERSION
```

Therefore a normal V0.2.5 → V0.2.6 update has a plugin-owned admin upgrade path that can initialize the new epoch option on the first relevant administrator request. A new always-on initialization hook is not required for this correction.

The package must not claim that the epoch option exists before the upgrade routine has actually run.

## 5. Mandatory compatibility correction

V0.2.6 currently contains:

```php
add_option(SF_CRYPTO_PAY_WORKSPACE_EPOCH_OPTION, 1, '', 'no');
```

This is not accepted for the user's WordPress 6.9.4 environment.

WordPress deprecated string autoload values:

```text
'yes'
'no'
```

starting in WordPress 6.7. The non-autoloading value must be the boolean:

```php
false
```

Required corrected line:

```php
add_option(SF_CRYPTO_PAY_WORKSPACE_EPOCH_OPTION, 1, '', false);
```

This is a compatibility/cleanliness correction only. It must not change the option name, value, upgrade behavior or payment behavior.

## 6. Artifact-integrity decision

Do not silently replace the submitted V0.2.6 ZIP while retaining the same version and filename. The submitted V0.2.6 artifact already has a recorded SHA256 and delivery report.

Authorized correction version:

```text
0.2.6.1
```

The corrected package must have a new ZIP filename and SHA256.

## 7. Exact authorized correction scope

The V0.2.6.1 diff against reviewed V0.2.6 may contain only:

```text
1. plugin header Version: 0.2.6 → 0.2.6.1
2. SF_CRYPTO_PAY_VERSION: 0.2.6 → 0.2.6.1
3. add_option(..., 'no') → add_option(..., false)
4. delivery-report text and hashes required to describe V0.2.6.1
```

No other source change is authorized.

Must remain byte-identical to V0.2.6:

```text
all seven include skeleton files
templates/crypto-pay-page.php
assets/crypto-pay.js
assets/crypto-pay.css
all other existing functions and source regions
```

## 8. Current acceptance status

```text
V0.2.6 package structural review: passed
V0.2.6 legacy-preservation review: passed
V0.2.6 PHP syntax review: passed
V0.2.6 WordPress 6.9.4 compatibility review: correction required
V0.2.6 local installation authorization: not granted
V0.2.6.1 narrow correction: authorized
Plugin Step 2: not authorized
Project 2 Checkout page modification: not authorized
Checkout: Not done
```

## 9. Required next evidence

The payment-plugin workstream must return:

```text
spatial-flow-crypto-pay-trial-v0.2.6.1.zip
V0.2.6.1 narrow-correction delivery report
new ZIP SHA256
exact diff statement against reviewed V0.2.6
PHP syntax results
confirmation that no payment path or skeleton behavior changed
```

Only after V0.2.6.1 passes package review may the user install it locally and perform the Step-1 runtime regression checklist.
