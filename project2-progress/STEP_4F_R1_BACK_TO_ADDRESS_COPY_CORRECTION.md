# Step 4F · R1 Back to Address Copy Correction

Date: 2026-08-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Defect

The live Step-02 back control currently reads:

```text
← Back to information
```

The locked V2 flow is:

```text
Address → Shipping → Payment → Confirmed
```

Therefore the correct label is:

```text
← Back to address
```

This is a visible operation-copy mismatch and must be corrected before R1 closure.

## 2. Exact target

```text
woocommerce/checkout/form-checkout.php
```

Current installed baseline:

```text
Bytes: 7,787
Lines: 237 displayed logical lines / 236 LF delimiters
SHA256: c1fc8ca89b17744660fc5c2de893debae89e7141d4661ad6d5cb846b429756e8
Newline format: CRLF
```

## 3. Anchored manual replacement

Search exactly:

```html
← Back to information
```

Expected matches:

```text
1
```

Stop if the result is not exactly one match.

Replace with:

```html
← Back to address
```

## 4. Expected integrity result

The replacement shortens the file by four ASCII bytes and does not change line count or structure.

```text
Expected bytes: 7,783
Expected lines: unchanged
Expected SHA256: 7a5d620a6f5526b76a83877f2ee8abb55e6f28f66595609e51dd695935adee2f
```

No PHP tag, hook, selector, data attribute or navigation target changes.

## 5. Validation

After saving:

```text
- PHP syntax must remain valid
- Step 02 must display BACK TO ADDRESS
- clicking it must return to Step 01 Address
- no other runtime file changes
```

## 6. Status

```text
Correction: issued
Runtime application: pending user edit
R1: open
Checkout: Not done
```
