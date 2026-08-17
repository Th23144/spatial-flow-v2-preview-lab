# Step 4F · Step04 Manual Deployment Source Validation PASS · 2026-08-16

## Scope

Validate the three live files returned by the user after applying the consolidated manual anchored Step04 deployment batch.

Files reviewed:

- `functions.php`
- `woocommerce/checkout/thankyou.php`
- `assets/css/spatial-flow.css`

This validation is source/integrity validation only. Runtime behavior and strict 1:1 visual acceptance remain open.

## Result

**SOURCE VALIDATION: PASS**

No rollback is required.

### `functions.php`

Returned live file:

```text
bytes: 612013
logical lines: 11689
SHA256: 568a904d67e2b2ed2c099b8c64e6b15a0f59c344d8f59253083bba742940f741
PHP syntax: PASS
SPATIAL_FLOW_CHILD_VERSION: 2.7.15
```

Expected internal candidate:

```text
bytes: 612015
logical lines: 11691
SHA256: e1b4842345d7ccfa5057f4dc568dbd1705cf13f86606b78c81c009c3a521891f
```

The returned file differs from the internal candidate only by two empty lines between the Step5F END marker and the following Step5E-B Track Order START marker. No PHP statement, hook, function, version, setting, or adjacent code differs. This is a formatting-only difference and is accepted; the user does not need to add the empty lines back.

Verified:

```text
Step5F START count: 1
Step5F END count: 1
spatial_flow_order_result_v3_copy(): 1
spatial_flow_order_result_v3_url(): 1
Customizer hook priority 54: 1
2.7.15 version marker: 1
2.7.13 version marker: 0
```

### `woocommerce/checkout/thankyou.php`

Returned live file:

```text
bytes: 43715
logical lines: 579
SHA256: 47f5b9e4e1bdd063eb7c0dddc8b6b8ce7e3e726ab394abcb660a5c91ca6f68ee
PHP syntax: PASS
```

Expected internal candidate:

```text
bytes: 43716
logical lines: 579
SHA256: 4aee09c6f26420c388d15da9a4a12fe247b49a70bdb065725f5d705553ab90cc
```

The only difference is the final trailing LF/newline after the closing `</div>`. There is no source-content difference. This formatting-only difference is accepted; the user does not need to add a final newline manually.

Verified standard status families exist:

```text
processing
completed
pending
on-hold
failed
cancelled
refunded
unknown/custom neutral fallback
```

Verified production boundaries:

```text
prototype_result: 0
sessionStorage: 0
update_status: 0
payment_complete(...) mutation call: 0
hardcoded spatial_flow_crypto gateway: 0
hardcoded USDT: 0
hardcoded TRON: 0
woocommerce_before_thankyou hook: present
woocommerce_thankyou_{gateway} hook: present
woocommerce_thankyou general hook: present
$order->needs_payment(): present
$order->get_checkout_payment_url(): present
```

### `assets/css/spatial-flow.css`

Returned live file exactly matches the audited strict-reference candidate:

```text
bytes: 587216
logical lines: 20639
SHA256: cba94f9615248a86f8d8d23b806621ed04f7b664e8c3a47727036510a33efef9
trailing newline: yes
```

Structural validation:

```text
{ : 3283
} : 3283
/* : 275
*/ : 275
tinycss2 parse errors: 0
Step5F Result START count: 1
Step5F Result END count: 1
old .sf-order-received-page--v2 selector count: 0
new .sf-order-result-v3 selector occurrences: 182
```

The CSS owner block was replaced in place; no second Step04 visual layer was appended.

## Integrity conclusion

The manual anchored deployment is accepted at source level.

The small hash/size differences in `functions.php` and `thankyou.php` are fully explained by whitespace-only differences and do not represent an implementation divergence.

Do not ask the user to modify whitespace solely to force the internal candidate SHA.

## Current state

```text
Step04 source deployment: PASS
Step04 PHP syntax: PASS
Step04 CSS structural/parser validation: PASS
Step04 runtime matrix: NOT YET ACCEPTED
Step04 strict 1:1 visual acceptance: NOT YET ACCEPTED
Checkout binary status: Not done
```

## Mandatory next action

Run the Step04 runtime/status/strict-1:1 validation as one consolidated test batch. Do not split the runtime package into per-status conversational rounds.

At minimum validate:

- Processing / confirmed
- Completed
- Pending
- On hold
- Failed
- Cancelled
- Refunded
- same-order recovery CTA where `needs_payment()` is true
- gateway-specific/general Thank You hook output is not duplicated or lost
- desktop strict-reference parity for Confirmed and Pending
- mobile strict-reference parity for Confirmed and Pending
- real Woo order number/date/email/total/items/address/payment/shipping values
- no browser/query state can manufacture a paid status

After Step04 runtime/visual acceptance closes, return to the already reopened Crypto V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch before Checkout may be marked Completed 1:1.
