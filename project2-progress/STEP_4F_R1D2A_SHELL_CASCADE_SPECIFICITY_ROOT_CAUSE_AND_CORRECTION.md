# Step 4F · R1-D2A Shell Cascade Specificity Root Cause and Correction

Date: 2026-08-04  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Evidence source

The user supplied a read-only live CSS-cascade enumeration at `360px` for:

```text
.sf-safe5-shell
```

Observed geometry:

```text
viewport: 360px
left: 0
right: 360
width: 360px
computed max-width: 100%
margin-left: 0
margin-right: 0
```

This confirms the shell itself is full viewport width. Descendant cards, actions and Order Summary are following that shell geometry.

## 2. Actual matching rules

### Legacy shared Checkout mobile rule A

Source:

```text
assets/css/spatial-flow.css?ver=2.7.8
@media (max-width: 767px)
```

Selector:

```css
body.woocommerce-checkout:not(.woocommerce-order-received) form.checkout.woocommerce-checkout > *
```

Declarations:

```css
width: 100% !important;
max-width: 100% !important;
margin-left: 0 !important;
margin-right: 0 !important;
```

### Legacy shared Checkout mobile rule B

Source:

```text
assets/css/spatial-flow.css?ver=2.7.8
@media (max-width: 767px)
```

Selector group includes:

```css
body.woocommerce-checkout:not(.woocommerce-order-received) form.checkout.woocommerce-checkout > *
```

Declarations:

```css
width: 100% !important;
max-width: 100% !important;
min-width: 0 !important;
```

### SAFE5 intended desktop shell rule

Source:

```text
assets/css/checkout-safe5.css?ver=2.7.8
```

Selector:

```css
body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-shell
```

Declarations:

```css
width: min(1180px, calc(100% - 48px)) !important;
max-width: 1180px !important;
margin: 0 auto 84px !important;
```

### SAFE5 intended mobile shell rule

Source:

```text
assets/css/checkout-safe5.css?ver=2.7.8
@media (max-width: 767px)
```

Selector group includes:

```css
body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-shell
```

Declarations:

```css
width: min(calc(100% - 44px), 1180px) !important;
max-width: 1180px !important;
```

## 3. Root cause

All competing width declarations use `!important`.

The old shared selector:

```css
body.woocommerce-checkout:not(.woocommerce-order-received) form.checkout.woocommerce-checkout > *
```

has higher specificity than:

```css
body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-shell
```

Therefore the later stylesheet load order does not rescue the SAFE5 declaration. The higher-specificity shared rule wins and forces:

```text
width: 100%
max-width: 100%
margin-left/right: 0
```

Classification:

```text
Confirmed root cause: legacy shared mobile Checkout rule in spatial-flow.css
Failure mechanism: higher specificity + !important
Prior box-sizing diagnosis: disproved as gutter root cause
```

## 4. R1 ownership decision

R1 runtime scope remains limited to:

```text
woocommerce/checkout/form-checkout.php
assets/js/checkout-safe5.js
assets/css/checkout-safe5.css
```

The broad shared rule in `spatial-flow.css` belongs to the later bounded shared-CSS cleanup phase. R1-D2A will not edit that large shared file.

Instead, the SAFE5 mobile shell selector will be strengthened only for the real direct shell child:

```css
body.woocommerce-checkout:not(.woocommerce-order-received) form.checkout.woocommerce-checkout > .sf-safe5-shell
```

This selector is more specific than the wildcard legacy rule and remains narrowly scoped to the SAFE5 shell.

## 5. Current verified baseline

```text
File: assets/css/checkout-safe5.css
Bytes: 23,816
Lines: 682
SHA256: 395ccd6d3b07e6c03e8f43eb2e812e5f942889f40fa3543f84ded1419cc77fba
```

This baseline includes the earlier scoped `box-sizing: border-box` edit. That edit is retained as a bounded V2 sizing normalization, but it is no longer classified as the gutter root-cause correction.

## 6. Exact anchored replacement

Search exactly:

```css
  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-intro,
  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-shell {
    width: min(calc(100% - 44px), 1180px) !important;
    max-width: 1180px !important;
  }
```

Expected matches:

```text
1
```

Replace with:

```css
  body.woocommerce-checkout:not(.woocommerce-order-received) .sf-safe5-intro {
    width: min(calc(100% - 44px), 1180px) !important;
    max-width: 1180px !important;
  }

  body.woocommerce-checkout:not(.woocommerce-order-received) form.checkout.woocommerce-checkout > .sf-safe5-shell {
    width: min(calc(100% - 44px), 1180px) !important;
    max-width: 1180px !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
```

## 7. Expected integrity result

```text
Bytes: 24,022
Lines: 688
Delta: +206 bytes / +6 lines
SHA256: 5c174617e71e1f3b9c2a3319c23c270efbcadbe819f3183ebead42529f99c23b
```

Static validation:

```text
CSS parse errors: 0
Braces: 92 / 92
Comments: 12 / 12
Bottom append: no
New breakpoint: no
Shared spatial-flow.css edit: no
```

Growth from current baseline:

```text
+0.86%
```

## 8. Expected runtime geometry

At `360px`:

```text
.sf-safe5-shell width: approximately 316px
left: approximately 22px
right: approximately 338px
margin-left/right: auto
```

At `390px`:

```text
.sf-safe5-shell width: approximately 346px
left/right gutter: approximately 22px
```

Expected visible effect:

```text
- Address/form warm surface remains inside the shell gutter
- Continue and Back actions remain inside the same gutter
- Order Summary remains inside the same gutter
- existing form-before-summary order remains unchanged
- no horizontal overflow is introduced
```

## 9. Current status

```text
Root cause: confirmed by live cascade evidence
Correction: source-audited and ready to issue
Runtime application: pending
D2A closure: blocked pending 360px geometry/screenshot verification
Checkout: Not done
```
