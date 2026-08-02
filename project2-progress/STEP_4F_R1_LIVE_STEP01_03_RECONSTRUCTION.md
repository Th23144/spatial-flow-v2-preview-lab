# Step 4F · R1 Live Step 01–03 Reconstruction

Date: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authorization

User instruction:

```text
不需要补 on-hold 证据就开始 R1
```

Decision:

```text
Additional on-hold screenshot: not required
R0: closed with explicit evidence boundary
R1: authorized
Checkout: Not done
```

## 2. Atomic R1 scope

Only these three coupled runtime files may change:

```text
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
```

Prohibited in R1:

```text
functions.php
assets/js/spatial-flow.js
assets/css/spatial-flow.css
woocommerce/checkout/thankyou.php
WPCode
CartFlows
WooCommerce page ID / URL / shortcode
Spatial Flow Crypto Pay Trial V0.2.5
payment gateway configuration
```

## 3. Locked delivery method

Authoritative policy:

```text
PROJECT2_MANUAL_REPLACEMENT_AND_FILE_SIZE_AUDIT_POLICY.md
```

R1 must be delivered as:

```text
exact target file
→ exact old code to search
→ expected unique match count
→ exact replacement code
→ expected byte/line delta
→ user saves manually
→ actual byte/line/hash verification
→ syntax/parser validation
→ stop before next part
```

Prohibited:

```text
- replacement ZIP deployment
- whole-file overwrite
- broad unanchored replacement
- proceeding when match count differs
- skipping before/after file-size review
```

## 4. Verified R0 baseline

| File | Bytes | Lines | SHA256 |
|---|---:|---:|---|
| `woocommerce/checkout/form-checkout.php` | 9,140 | 278 | `5ffb8eab32114354a7c40e2613bc03ccbcf72275217d6f50f5eca9ce35668b5f` |
| `assets/js/checkout-safe5.js` | 24,463 | 780 | `45e5abf27de3f676bed64c44a0568a9135e0c1442a790f6fb890d7fbcbe681d0` |
| `assets/css/checkout-safe5.css` | 20,936 | 599 | `6316615551f3f732933881f07fa6c1c128a1a013aa4de3e5afce22dff471313a` |

Atomic rollback boundary remains all three files, but implementation is applied as manual bounded replacements rather than full-file deployment.

## 5. First generated candidate — audit result

A full candidate was generated internally for diffing and syntax review. It must not be deployed.

| File | Candidate bytes | Byte delta | Candidate lines | Line delta | Review |
|---|---:|---:|---:|---:|---|
| `form-checkout.php` | 9,107 | -33 (-0.36%) | 269 | -9 (-3.24%) | plausible, still requires anchored decomposition |
| `checkout-safe5.js` | 24,010 | -453 (-1.85%) | 624 | -156 (-20.0%) | major line reduction; requires function-by-function removal audit |
| `checkout-safe5.css` | 34,593 | +13,657 (+65.23%) | 986 | +387 (+64.61%) | blocked; unexplained material growth |

Diff line counts:

```text
form-checkout.php: +123 / -132
checkout-safe5.js: +423 / -579
checkout-safe5.css: +719 / -332
```

### Candidate decision

```text
project2-checkout-r1-candidate-20260802.zip
```

is withdrawn as a deployment artifact.

```text
- do not overwrite runtime files with it
- do not use its complete files as manual copy targets
- retain only as an internal diff/audit reference
```

The CSS candidate is specifically blocked because a 65.23% size increase is inconsistent with a controlled page-specific reconstruction until every added block is classified as replacement, genuinely new structure, or duplication.

## 6. Locked R1 functional outcome

Replace:

```text
Information
→ Shipping
→ Payment
→ Review
```

with:

```text
01 Contact / Address
→ 02 Shipping
→ 03 Payment
```

Required behavior:

```text
- remove Review as a live input/navigation step
- keep native WooCommerce billing/contact output in Step 01
- keep native WooCommerce shipping fields/rates in Step 02
- keep native WooCommerce dynamic payment gateways in Step 03
- keep the real .place-order / #place_order inside Step 03
- remove JavaScript relocation of .place-order
- remove the rule requiring Step 4 before submission
- preserve native WooCommerce checkout submit, nonce, AJAX, gateway fields and redirects
- preserve the server-backed coupon path
- preserve V0.2.5 legacy /crypto-pay/ handoff
- preserve early client validation only as a non-authoritative UX guard
```

## 7. Required re-planning before the first user edit

R1 is now divided into manual parts:

```text
R1-A: template navigation and Review DOM removal
R1-B: JavaScript step-count and Review/Place-Order relocation removal
R1-C: minimal CSS conversion from four-step to three-step
R1-D: approved static visual migration in bounded selector groups
```

Rules:

```text
- R1-A/B/C establish the correct functional three-step shell first
- R1-D visual work begins only after functional structure is stable
- CSS must not jump directly from 20,936 bytes to 34,593 bytes
- every CSS group requires exact START/END anchors and a stated size delta
- no browser acceptance is claimed until all coupled functional parts are applied
```

## 8. Current execution point

```text
R1 authorization: recorded
Manual replacement and file-size policy: locked
First full candidate: audited and blocked from deployment
Runtime source modification: none
Next: prepare R1-A exact anchored manual replacement
R2: blocked
Checkout: Not done
```
