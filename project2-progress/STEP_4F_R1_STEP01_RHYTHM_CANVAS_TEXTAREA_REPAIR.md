# Step 4F · R1 Step 01 Rhythm, Canvas and Textarea Repair

Date: 2026-08-06  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Authority

The user-supplied 1365px runtime diagnostic proved the current live CSS is loaded and identified the final cascade owners for the reopened Step-01 strict 1:1 defects.

## Pre-change baseline

```text
assets/css/checkout-safe5.css
46,623 bytes
1,387 lines
SHA256: db5ffd815f7bc033cf82e3c8fb8c06a700796e7eb5a79f740be69509e7a68882
CRLF
no final newline
```

## Bounded changes

Six anchored replacements in `assets/css/checkout-safe5.css` only:

```text
A. Add a Checkout-only warm background override for #main.site-main.
B. Promote the desktop native form-row 18px rule to the full Checkout-only customer-details selector.
C. Promote the desktop Order notes textarea height to an ID-backed selector.
D. Promote the mobile native form-row 11px rule to the full Checkout-only customer-details selector.
E. Promote the mobile Order notes textarea height to an ID-backed selector.
F. Correct the mobile native shipping-address checkbox to 8px margin-top and zero top padding.
```

No file-end append and no new media query.

## Expected post-change integrity

```text
assets/css/checkout-safe5.css
47,050 bytes
1,399 lines
SHA256: 404bcbc408c33cd502019a623cd1bf1c483e974690b05aa486b297790d57bd16
CRLF
no final newline
```

Expected structural checks:

```text
replacement A: 1
replacement B: 1
replacement C: 1
replacement D: 1
replacement E: 1
replacement F: 1
CSS braces balanced
comments unchanged
new breakpoint count: 0
PHP change: 0
JavaScript change: 0
```

## Runtime acceptance batch

After source integrity passes and the file is installed, request one consolidated batch:

```text
1. 1366px Step 01 from Contact through actions
2. 390px complete Step 01
3. 360px complete Step 01
```

The same batch checks:

```text
18px desktop field rhythm
11px mobile field rhythm
112px desktop Order notes textarea
94px mobile Order notes textarea
warm #f6f1eb Checkout canvas
mobile checkbox spacing
no width/column regression
no Select2 or alternate-Shipping regression
```

## Not included

```text
Step-01 copy/capitalization alignment
Astra wrapper top/bottom spacing
Order Summary internals
Step 02 Shipping V2
Step 03 Payment V2
PHP / JavaScript / WooCommerce logic
```

## Status

```text
Repair definition: complete
User replacement: pending
D2B2: open
Step 02 Shipping V2: blocked
Checkout: Not done
```
