# Step 4F · Product Packaging · Runtime QA1 Structure + Visual Correction

Date: 2026-08-11  
Status: RUNTIME QA1 FAILED · ROOT CAUSE CONFIRMED · BOUNDED CORRECTION READY

## User-observed failure

The first real SAFE5 browser pass showed two blocking problems:

1. selecting `Package separately` did not reveal the Package 01 / 02 / 03 package rows shown by the accepted static reference;
2. the live Product Packaging panel did not match the accepted reference hierarchy, color treatment, panel geometry, grouping-mode typography or package-row presentation.

The user correctly stopped the broader runtime checklist. No acceptance is recorded.

## Root cause 1 · hidden package rows in Separate mode

Accepted Part-B markup placed:

```text
[data-sf-safe5-packaging-active-groups]
```

inside:

```text
[data-sf-safe5-packaging-custom]
```

The Part-C controller intentionally sets the Custom-only host hidden whenever grouping mode is not `custom`.

Result:

```text
Package separately
→ package rows are rendered
→ parent Custom host is hidden
→ customer sees no Package 01 / 02 / 03 rows
```

Correction: move the active-groups mount outside the Custom-only host while keeping it inside the Packaging workspace.

## Root cause 2 · Separate and Custom presentation were incorrectly unified

The accepted static contract is mode-specific:

### Package separately

Uses compact package-centric summary rows:

```text
Package 01 | item | Standard/Gift summary | Edit
```

Opening `Edit` reveals package-level Standard/Gift selection and its metadata field.

### Custom grouping · accepted B

Uses item-centric allocation first:

```text
Item A  [01] [02] [03]
Item B  [01] [02] [03]
Item C  [01] [02] [03]
```

Then only non-empty packages render compact package-style rows with direct Standard/Gift + Details controls.

The first live controller used one `renderActiveGroups()` presentation for both modes. That is not the accepted reference contract.

Correction: retain one authoritative state model but branch the presentation by grouping mode:

- Separate → compact summary + Edit;
- Custom → accepted B item-centric assignment + non-empty style rows.

## Root cause 3 · live visual ownership did not reproduce the accepted panel contract

The generic SAFE5 `.sf-safe5-section-card` desktop owner is a rounded white card. The accepted static Packaging reference is a flat checkout panel with a bottom rule, matching the broader Step-02 editorial composition.

The first live CSS did not neutralize that generic card owner on Packaging desktop.

In addition, grouping buttons did not fully neutralize inherited theme button typography, so uppercase/letter-spacing leaked into the mode labels.

Correction stays inside the existing Product Packaging CSS START/END owner:

- Packaging desktop becomes a flat panel with bottom rule;
- header becomes the accepted two-column title/intro composition;
- boundary note returns to the light outlined `↳` treatment;
- grouping intro and mode title/meta/copy hierarchy are explicit;
- all grouping typography explicitly neutralizes inherited uppercase/letter-spacing;
- Separate package rows reproduce compact summary + Edit;
- Custom package rows keep accepted item-centric B behavior;
- mobile remains the accepted breathable vertical mode layout.

No new tail FIX block is authorized.

## Files in correction

Unchanged:

```text
functions.php
```

Precisely corrected inside existing owners:

```text
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
```

## Submitted correction baselines

```text
form-checkout.php
32,100 bytes
SHA256 3d264ad071333d2a0b2436964c33d6509fbf6148d739a5f2a0b42699c299a085

checkout-safe5.js
51,307 bytes
SHA256 385bba50fdfa65ddfdef9cfa9b0b8febfd8c1681b524da469238cbf711141dd9

checkout-safe5.css
118,905 bytes
SHA256 3f16c8cb31ab33be64257e36dee1b085e4ca76b313aa980d76a5e83348a077bd
```

## Offline corrected candidates

The correction was applied locally to the submitted files before issuing the manual replacement tutorial.

Checks completed:

```text
form-checkout.php: php -l PASSED
checkout-safe5.js: node --check PASSED
checkout-safe5.css: braces balanced
checkout-safe5.css: comments balanced
checkout-safe5.css: tinycss2 top-level parse errors = 0
```

The candidate keeps the same Woo session / fee / order metadata authority from Part A. Payment, Shipping, Coupon, Step navigation, Terms and `#place_order` are not part of this correction.

## Runtime QA after install

Do not resume the old compressed 1-7 checklist.

After the correction is installed, give the user one complete but clearly separated test batch. Each item must state:

```text
- action
- expected result
```

Do not require one-message-per-test-item gating.

Batch 6 remains paused until Product Packaging runtime QA and dedicated acceptance are complete.
