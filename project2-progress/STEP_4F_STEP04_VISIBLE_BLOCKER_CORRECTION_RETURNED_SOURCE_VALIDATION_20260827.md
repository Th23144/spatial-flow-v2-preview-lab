# Step 4F · Step04 visible-blocker correction · returned-source validation · 2026-08-27

## Result

**SOURCE VALIDATION PASS.**

The user returned the three manually edited live-source files after the consolidated visible-blocker correction batch. All three match the intended bounded changes and pass structural/syntax validation.

## Returned source fingerprints

### `assets/css/spatial-flow.css`

```text
bytes: 588629
logical lines: 20666
SHA256: 7cad3472f4ee53b672b4ce1d2d27bb2641b9b34e5541b48e39f145fcb956a8d8
brace balance: 3282 / 3282
comment balance: 275 / 275
tinycss2 errors: 0
```

Expected delta from accepted 2.7.17 CSS baseline:

```text
+136 bytes
+5 logical lines
```

Validated bounded correction:

- `body.woocommerce-order-received #main.site-main` is included exactly once in the Step5F page-frame reset;
- the reset therefore owns `margin:0` and `padding:0` for the proven white-band wrapper;
- `body.woocommerce-order-received #main.site-main { background:#f6f1eb !important; }` exists exactly once;
- no second Step5F owner block was added.

### `woocommerce/checkout/thankyou.php`

```text
bytes: 43932
logical lines: 584
SHA256: 69ea915ddbe1e3f6132715d9bfd0bf1dfde6725eca545d7c39f4916162e087fb
PHP syntax: PASS
```

Expected delta from accepted template baseline:

```text
+217 bytes
+5 logical lines
```

Validated gateway-output gate:

```php
$payment_content = '';
$show_gateway_payment_content = $order->needs_payment() || 'on-hold' === $status;
```

The gateway-specific hook remains present exactly once and is executed only when the gate is true. The general `woocommerce_thankyou` hook remains present exactly once and is still captured independently. Default `woocommerce_order_details_table` remove/restore handling remains preserved.

Expected semantics after runtime recheck:

```text
needs_payment() = true → gateway payment instructions may render
on-hold            → gateway payment instructions may render
processing         → gateway payment instructions hidden
completed          → gateway payment instructions hidden
cancelled          → gateway payment instructions hidden
refunded           → gateway payment instructions hidden
```

### `functions.php`

```text
bytes: 612013
logical lines: 11689
SHA256: 4d5e807a75a5f5548ee69639f6bc6070eef4d1c30d80f54970d3057a7dae6125
PHP syntax: PASS
SPATIAL_FLOW_CHILD_VERSION: 2.7.18
```

`2.7.17` is absent from the active version define; `2.7.18` occurs exactly once in the define.

## Acceptance boundary

This record accepts **source correctness only**. It does not yet declare the two visible runtime blockers fixed.

Next runtime gate is intentionally narrow:

1. hard-refresh a Step04 page and verify the white horizontal band below the accepted header is gone;
2. verify a Cancelled order no longer shows `Our Bank Details` / other gateway-specific payment instructions;
3. verify an On-hold BACS order still shows the bank-transfer instructions.

Do not rerun the 17-step matrix or the eight computed-parity captures until this narrow visible-blocker gate passes.
