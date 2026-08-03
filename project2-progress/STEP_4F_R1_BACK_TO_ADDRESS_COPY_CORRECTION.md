# Step 4F · R1 Back to Address Copy Correction

Date: 2026-08-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Defect

The live Step-02 back control previously read:

```text
← Back to information
```

The locked V2 flow is:

```text
Address → Shipping → Payment → Confirmed
```

Required correction:

```text
← Back to address
```

## 2. Exact target

```text
woocommerce/checkout/form-checkout.php
```

Pre-edit installed baseline:

```text
Bytes: 7,787
Lines: 237 displayed logical lines / 236 LF delimiters
SHA256: c1fc8ca89b17744660fc5c2de893debae89e7141d4661ad6d5cb846b429756e8
Newline format: CRLF
```

## 3. Applied anchored replacement

Old text:

```html
← Back to information
```

New text:

```html
← Back to address
```

Expected replacement count:

```text
1
```

The correction changes visible copy only. It does not modify PHP hooks, selectors, data attributes, navigation targets or WooCommerce authority.

## 4. Expected integrity result

```text
Expected bytes: 7,783
Expected lines: unchanged
Expected SHA256: 7a5d620a6f5526b76a83877f2ee8abb55e6f28f66595609e51dd695935adee2f
```

A post-edit file upload or machine hash was not supplied in this turn, so the expected hash is retained as the audit target rather than falsely recorded as independently measured.

## 5. Runtime acceptance

User confirmation:

```text
通过
```

Accepted runtime behavior:

```text
- Step 02 displays BACK TO ADDRESS
- the control returns to Step 01 Address
```

## 6. Status

```text
Correction: applied
Visible V2 copy: passed by user confirmation
Back navigation: passed by user confirmation
Independent post-edit hash measurement: not supplied
R1: remains open for remaining interaction and visual gates
Checkout: Not done
```
