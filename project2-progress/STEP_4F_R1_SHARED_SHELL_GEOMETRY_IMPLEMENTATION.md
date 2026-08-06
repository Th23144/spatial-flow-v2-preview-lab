# Step 4F · R1 Shared Checkout Shell Geometry Implementation

Date: 2026-08-06  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Starting point

```text
R1-D2B2: completed and closed
Shared R1 shell geometry: reopened and next
Step 02 Shipping V2: blocked until shared geometry passes
Checkout: Not done
```

Active source baseline:

```text
assets/css/checkout-safe5.css
46,139 bytes
1,371 lines
SHA256: aa8a43d56c5fc23c11a43f0709fe5c267d00687c10e2021a2fe8bad3228c005b
CRLF
no final newline
```

## 2. Authoritative reference geometry

The accepted Checkout reference defines:

```text
max width: 1440px
desktop horizontal gutter: 56px
desktop columns: 7fr / 5fr
desktop inter-column gap: 80px
shell padding: 58px top / 56px sides / 96px bottom
<=1040px horizontal gutter: 38px
<=1040px one-column shell gap: 42px
phone horizontal gutter: 22px
phone Intro: 38px top / 36px bottom
phone Shell: 38px top / 68px bottom
```

Reference source:

```text
preview/spatial-flow-checkout-flow-v1.css
```

## 3. Current live mismatch

Before this correction, the installed shell uses:

```text
max width: 1180px
width: calc(100% - 48px)
columns: 1.36fr / 0.92fr
gap: 30px
bottom margin: 84px
no reference top shell padding
stack breakpoint: 980px
phone Intro gap: 28px
phone Intro bottom padding: 34px
```

The Intro desktop geometry already uses the accepted 1440px / 56px / 80px values and is not redesigned.

## 4. Bounded implementation

Only `assets/css/checkout-safe5.css` changes.

Four anchored replacements:

```text
A. Replace the desktop .sf-safe5-shell geometry with the 1440px / 7fr:5fr / 80px / 58-56-96 reference geometry.
B. Move the shared one-column breakpoint from 980px to 1040px and apply the 38px gutter plus 42px shell gap.
C. Replace the former phone width-calc gutter workaround with full-width box-sized Intro/Shell plus exact 22px inner padding.
D. Align the phone Intro gap and vertical padding to 34px / 38px / 36px.
```

No changes to:

```text
PHP
JavaScript
WooCommerce field ownership
Step 01 field surfaces
Select2 dropdown rules
Shipping field presentation
Step 02
Step 03
Summary internals
Coupon
Trust
Crypto
```

## 5. Reconstructed target integrity

```text
46,623 bytes
1,387 lines
SHA256: db5ffd815f7bc033cf82e3c8fb8c06a700796e7eb5a79f740be69509e7a68882
Braces: 169 / 169
Comments: 17 / 17
CSS parser errors: 0
CRLF
no final newline
```

## 6. Runtime acceptance batch

After source audit and active-theme replacement, one consolidated batch is required:

```text
1. 1366px full Step 01 from Intro through actions and Summary
2. 390px full Step 01
3. 360px full Step 01
4. 1024px or equivalent tablet view showing the one-column transition
```

Acceptance checks:

```text
- Intro and Shell share the same reference frame
- desktop columns use the 7fr / 5fr relationship
- desktop inter-column gap is 80px
- shell begins 58px below the Intro divider
- shell bottom spacing is 96px
- phone content uses a true 22px gutter
- phone Intro and Shell vertical spacing match the reference
- tablet switches to one column at the accepted breakpoint
- no horizontal overflow
- previously accepted D2B2 field/dropdown/Shipping states remain intact
```

## 7. Status

```text
Shared R1 shell geometry implementation: prepared
Source installation: pending
Runtime acceptance: pending
Step 02 Shipping V2: blocked
Checkout: Not done
```
