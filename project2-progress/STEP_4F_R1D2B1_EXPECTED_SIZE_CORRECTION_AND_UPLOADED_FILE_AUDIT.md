# Step 4F · R1-D2B1 Expected-Size Correction and Uploaded-File Audit

Date: 2026-08-04  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Trigger

The user reported that all three pre-replacement baselines matched the issued baseline, but the resulting files differed substantially from the issued post-replacement size/line/hash targets.

Uploaded post-replacement files:

```text
form-checkout(1).php
checkout-safe5(1).js
checkout-safe5(1).css
```

Decision:

```text
Stop runtime validation.
Audit uploaded files before any refresh or further edit.
Do not blame the user replacement until byte-level reconstruction is complete.
```

## 2. Reconstruction method

The exact current pre-D2B1 baselines were reconstructed from:

```text
project2-checkout-r1-v2-flow-audited-20260802.zip
```

Then every accepted modification after that package was reapplied in sequence:

```text
- Step-03 trust-card layout correction
- BACK TO ADDRESS copy correction
- D1 Intro/progress migration
- D1 mobile gutter correction
- D2A mobile order/surface foundation
- scoped box-sizing normalization
- SAFE5 direct-shell specificity correction
```

The reconstructed files exactly reproduced the authoritative D2B1 pre-change baselines:

| File | Bytes | Lines | SHA256 |
|---|---:|---:|---|
| `form-checkout.php` | 7,925 | 240 | `14e58b22966d1c3cb6c713157e5475eb43de102bc271a4e620ddfe14a4da17ec` |
| `checkout-safe5.js` | 20,744 | 671 | `7b2906a3be0823cc5055db409fe20cc498878d71d479809c7e812174530ae0df` |
| `checkout-safe5.css` | 24,022 | 688 | `5c174617e71e1f3b9c2a3319c23c270efbcadbe819f3183ebead42529f99c23b` |

The issued D2B1 replacements were then applied programmatically to those exact reconstructed baselines and compared against the uploaded files.

## 3. Audit result

The uploaded PHP and JavaScript files match the prescribed D2B1 transformations exactly, byte for byte under their installed CRLF/no-terminal-newline format.

The uploaded CSS also matches the prescribed transformations. The only generated-comparison discrepancy was one extra blank line in the audit reconstruction boundary; the uploaded file follows the actual manual replacement result and contains no extra unintended CSS block.

Classification:

```text
User replacement accuracy: passed
Unexpected unrelated edit: not found
Duplicate D2B1 insertion: not found
Missed D2B1 replacement: not found
Previous post-replacement size targets: incorrect and revoked
```

## 4. Correct installed file results

All three uploaded files use:

```text
Line endings: CRLF
Terminal newline: absent
```

Correct file results:

| File | Bytes | Lines | SHA256 |
|---|---:|---:|---|
| `form-checkout.php` | 9,847 | 287 | `81e81fb9d35e0aa41311686c51d0bae276bfc017f042d5b633ad41724c82bfa2` |
| `checkout-safe5.js` | 24,682 | 819 | `7dc849b92771b2dc3092f4faea77022b4dd558b9695df59edd59b521b75b9dde` |
| `checkout-safe5.css` | 26,979 | 817 | `42e45a5fe4ecfd78b976c43efef47dd974a3c8e7b2f67b2a70001ccb586c3b1c` |

Correct deltas from the verified pre-D2B1 baseline:

| File | Byte delta | Line delta | Growth |
|---|---:|---:|---:|
| PHP | +1,922 | +47 | 24.25% |
| JavaScript | +3,938 | +148 | 18.98% |
| CSS | +2,957 | +129 | 12.31% |

The previously issued targets are invalid:

```text
PHP: 9,667 bytes / 266 lines / 5fdf...
JS: 23,834 bytes / 757 lines / 0a05...
CSS: 26,921 bytes / 809 lines / e08e...
```

They must not be used for acceptance or rollback decisions.

## 5. Static integrity validation

Uploaded files passed:

```text
PHP syntax: pass
JavaScript syntax: pass
CSS parser errors: 0
CSS braces: 112 / 112
CSS comments: 13 / 13
```

Marker audit:

```text
- one recomposeAddressFields() implementation
- one Contact mount
- one Delivery mount
- one Optional-note mount
- one updated_checkout recomposition hook
- one country_to_state_changed recomposition hook
- one Step-01 panel-composition CSS block
- old single Step-01 Contact-card template anchor absent
```

## 6. Safety boundary

This audit proves:

```text
- the user performed the issued replacements correctly
- the files are syntactically valid
- the size mismatch came from incorrect assistant calculations
- no accidental duplicate or unrelated source edit was found
```

It does not yet prove runtime behavior. D2B1 still requires browser validation for:

```text
- Contact / Delivery / Optional note rendering
- exactly one instance of every field ID
- country/state control behavior
- Ship to a Different Address expansion
- malformed-email blocking
- Step 01 → Step 02 navigation
- 360px and desktop layout
```

## 7. Current stop point

```text
Incorrect expected-size gate: revoked
Uploaded D2B1 source audit: passed
Rollback: not required
Further source edit: prohibited until runtime screenshot
Next bounded action: refresh Step 01 at 360px and capture Contact through Optional note
R1-D2B1 runtime acceptance: pending
Checkout: Not done
```
