# Step 4F · R1 First Candidate Detailed Diff Audit

Date: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Audit purpose

The user asked whether the withdrawn R1 ZIP was unsafe because CSS had merely been appended, and what exact problems existed in the PHP and JavaScript candidates.

This record distinguishes archive-content safety from implementation safety.

```text
Archive malware/unknown-file concern: no evidence found
Implementation/deployment safety: not acceptable for deployment
Runtime source modification: none
Checkout: Not done
```

The archive contains only the expected artifacts:

```text
README.txt
manifest.json
STEP_4F_R1.patch
theme/woocommerce/checkout/form-checkout.php
theme/assets/js/checkout-safe5.js
theme/assets/css/checkout-safe5.css
```

No binary executable, plugin installer, unknown PHP entry point or secret-bearing file was found.

## 2. CSS finding — not a bottom append, but a broad whole-file rewrite

Baseline:

```text
checkout-safe5.css
20,936 bytes
599 lines
78 unique qualified selectors
SHA256: 6316615551f3f732933881f07fa6c1c128a1a013aa4de3e5afce22dff471313a
```

Candidate:

```text
34,593 bytes
986 lines
127 unique qualified selectors
SHA256: 963c690458a9d92db974e6cc7f87802cc75b3443a000355a87125bc034364e59
```

Diff:

```text
+718 lines
-331 lines
1,049 diff lines
net +13,657 bytes (+65.23%)
net +387 lines (+64.61%)
```

Structural comparison:

```text
common byte prefix: 97 bytes
common byte suffix: 0 bytes
first major diff begins at the top of the file
```

Therefore:

```text
The candidate did NOT keep the original stylesheet and append a new block at the bottom.
It broadly rewrote the stylesheet from the first block onward.
```

Exact-selector duplicate scan:

```text
baseline duplicate selectors: 0
candidate duplicate selectors: 0
```

So the problem is not literal duplicate-selector append pollution. The problem is that a large static-reference visual layer was migrated in one broad rewrite instead of precise selector-block replacements.

Material new scope included:

```text
- new design-token set and typography variables
- new intro/hero composition
- full WooCommerce field-grid restyling
- new completed-details context card
- new order-review table styling
- expanded payment-method and native Place Order styling
- expanded coupon styling
- revised processing overlay typography
- new 1100px / 900px / 767px / 380px responsive behavior
```

This mixed R1 functional shell work with later visual-migration work that should have remained in bounded R1-D groups.

Concrete regression risks identified:

```text
1. Existing Airwallex currency-switching suppression was narrowed.
   The baseline explicitly covered conversion-rate, convert-icon and converted-amount selectors.
   The candidate retained only the broader switching/container selectors.
   This can expose previously hidden Airwallex rows when that gateway is enabled later.

2. Breakpoint ownership changed broadly:
   baseline 980px/767px/480px behavior
   → candidate 1100px/900px/767px/380px behavior.
   This changes tablet and narrow-mobile layout outside the minimum three-step conversion.

3. All Checkout billing/shipping fields were moved to a new grid and restyled in the same change.
   Dynamic WooCommerce/plugin fields were not runtime-tested under this new layout.

4. Existing visual selectors were removed or broadened while new selectors were introduced.
   This prevents clean attribution if a layout or gateway regression appears.
```

CSS decision:

```text
Not malware.
Not a simple bottom append.
Still unsafe to deploy because it is a large, mixed-scope, whole-file visual rewrite.
```

## 3. PHP template finding — intended architecture plus excessive DOM rewrite

Baseline:

```text
form-checkout.php
9,140 bytes
278 lines
SHA256: 5ffb8eab32114354a7c40e2613bc03ccbcf72275217d6f50f5eca9ce35668b5f
```

Candidate:

```text
9,107 bytes
269 lines
SHA256: fd351ad5be21f1ec100ca4991ceb09f452814162407bd0b9a7143058b7172961
```

Diff:

```text
+124 lines
-133 lines
257 diff lines against a 278-line baseline
net -33 bytes
net -9 lines
common byte prefix: 47 bytes
common byte suffix: 0 bytes
```

Intended changes correctly represented:

```text
- removed Step 04 Review navigation
- removed Review DOM blocks
- removed the Place Order relocation target
- kept woocommerce_checkout_payment() in Step 03
- preserved the real WooCommerce order-review output
```

WooCommerce authority calls/hooks were preserved exactly:

```text
woocommerce_before_checkout_form
woocommerce_checkout_before_customer_details
woocommerce_checkout_billing
woocommerce_checkout_shipping
woocommerce_checkout_payment
woocommerce_checkout_after_customer_details
woocommerce_checkout_before_order_review_heading
woocommerce_checkout_before_order_review
woocommerce_order_review
woocommerce_checkout_after_order_review
woocommerce_after_checkout_form
```

No PHP syntax error was found and no missing WooCommerce authority hook was identified.

However, the candidate also changed much more than the bounded Review removal:

```text
- replaced the full hero/intro DOM
- renamed/restructured step markup
- rewrote all Step 01–03 headings and explanatory text
- added a new completed-details context card
- rewrote summary/trust copy
- introduced new hardcoded customer-facing copy before R3 backend-editability work
```

PHP decision:

```text
No confirmed WooCommerce authority break in static review.
But 257 changed diff lines in a 278-line template is not a precise R1-A replacement.
It combines architecture, visual DOM migration and new hardcoded copy in one operation.
It must be decomposed into anchored manual parts or rebuilt as a narrowly audited package.
```

## 4. JavaScript finding — intended Review removal plus broad behavior rewrite

Baseline:

```text
checkout-safe5.js
24,463 bytes
780 lines
SHA256: 45e5abf27de3f676bed64c44a0568a9135e0c1442a790f6fb890d7fbcbe681d0
```

Candidate:

```text
24,010 bytes
624 lines
SHA256: 6ae7c10de07007767839f7a8ed097fc733d38905206d8f6a7559cce2dadaa873
```

Diff:

```text
+417 lines
-573 lines
990 diff lines against a 780-line baseline
net -453 bytes
net -156 lines (-20.0%)
common byte prefix: 527 bytes
common byte suffix: 0 bytes
```

Intended removals:

```text
fillReview()
relocatePlaceOrder()
hasValue() (unused helper)
Step-4 navigation and submit guard
```

New functions introduced:

```text
updateHero()
fieldText()
selectedText()
getShippingMethodText()
syncCompletedContext()
bindContextUpdates()
```

The candidate also broadly rewrote or reformatted:

```text
showStep()
validateStep()
notice creation and routing
shipping mirror synchronization
coupon binding
navigation binding
WooCommerce event binding
initialization
```

Maintainability finding:

```text
baseline JavaScript comment lines: 47
candidate JavaScript comment lines: 0
```

The line reduction is therefore not only the intended deletion of Review/relocation code. It also removes all explanatory comments and compresses/reworks validation, notice, coupon and event code.

No JavaScript syntax error was found. The intended native Place Order behavior is represented, but the candidate was never runtime-tested against:

```text
updated_checkout replacement
checkout_error routing
single/multiple shipping methods
coupon AJAX
terms rejection
normal bacs order
Crypto /crypto-pay/ redirect
repeat-click/duplicate-order behavior
future WooPayments/Airwallex fields
```

JavaScript decision:

```text
Not proven broken by static syntax review.
Not proven safe by runtime review.
Too much unrelated behavior changed for a bounded R1-B operation.
Must be reduced to function-level anchored changes with comments preserved.
```

## 5. Overall candidate decision

```text
project2-checkout-r1-candidate-20260802.zip
```

Status:

```text
Withdrawn from deployment.
Do not overwrite runtime files with it.
Retain only as an internal diff/audit artifact.
```

The candidate is not rejected because it contains malicious files. It is rejected because:

```text
- CSS is a broad whole-file rewrite with +65.23% size growth
- PHP changes almost the entire small template instead of one bounded DOM area
- JavaScript changes 990 diff lines and removes all comments
- functional architecture and visual migration were combined
- runtime WooCommerce/gateway regression testing was not performed
```

## 6. Safe package boundary for a future candidate

A future installation package can be considered only after all of the following are true:

```text
1. It is generated from the exact R0 source hashes.
2. Its diff is limited to approved anchored regions.
3. Every file-size and line delta is explained.
4. PHP/JS/CSS syntax and structural checks pass.
5. No unrelated selector/function/hook changes remain.
6. A manifest lists before/after hashes.
7. The R0 rollback package remains available.
8. It is first installed only on the local site and then receives full R1 browser regression.
```

Even then, no dynamic WooCommerce modification can honestly be guaranteed as absolute zero-risk before runtime testing. The correct claim can only be: source-audited, bounded, reversible and ready for local validation.

## 7. Current stop point

```text
First R1 package: detailed audit completed; deployment prohibited
Runtime source modification: none
Next: produce minimal R1-A/B/C anchored changes and re-audit size
R1-D visual migration: blocked until functional shell is stable
R2: blocked
Checkout: Not done
```
