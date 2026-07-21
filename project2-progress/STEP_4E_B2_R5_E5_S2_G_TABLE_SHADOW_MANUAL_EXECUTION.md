# Step 4E-B2-R5-E5-S2-G · Cart Table Shadow Manual Execution

Last updated: 2026-07-21  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
S2-F5 Test G: Passed.
Confirmed invisible-frame owner: Cart table box-shadow.
Current executable substep: S2-G exact CSS source edit.
Deployment: Not authorized until artifact validation passes.
Cart page status: Not done.
```

## 1. Exact source baseline

```text
Source alias: spatial-flow(38).css
Destination: assets/css/spatial-flow.css
Size: 700,177 bytes
Logical lines: 23,468
SHA256: 4bce679ee3c2abca6bcc0dfd4733d92d0c8b77e16b7a0bbf7d7832e305cff6b6
Braces: 3,645 / 3,645
Comments: 338 / 338
CSS parser errors: 0
Version: 2.7.8
```

## 2. Exact source owner

Locate the single canonical Cart table block:

```css
body.woocommerce-cart form.woocommerce-cart-form table.shop_table {
  display: block !important;
  width: 100% !important;
  margin: 0 !important;
  border: 0 !important;
  border-radius: 0 !important;
  overflow: visible !important;
  background: transparent !important;
}
```

The live computed-style audit showed that a broader theme rule still supplies:

```text
box-shadow: rgba(0, 0, 0, 0.02) 0px 5px 20px 0px
```

The canonical selector therefore needs an explicit in-place reset.

## 3. Authorized edit

Add exactly one declaration after the existing `background` line:

```css
  box-shadow: none !important;
```

Required final block:

```css
body.woocommerce-cart form.woocommerce-cart-form table.shop_table {
  display: block !important;
  width: 100% !important;
  margin: 0 !important;
  border: 0 !important;
  border-radius: 0 !important;
  overflow: visible !important;
  background: transparent !important;
  box-shadow: none !important;
}
```

## 4. Locked scope

Do not change:

```text
- product-row bottom divider
- heading divider
- item spacing or grid
- Order Summary
- Coupon lifecycle bridge
- PHP or JavaScript
- version 2.7.8
- cancelled FIX4 status
```

Do not append another Cart override at the end of the file. The declaration must be added inside the existing canonical Cart table block.

## 5. Expected exact edited artifact

If the edit is made exactly, without auto-formatting or other whitespace changes:

```text
Size: 700,208 bytes
Logical lines: 23,469
SHA256: 1a4daa7f09b6370ccc93cc8441ea3c45ec23d8777a049c1a6f2c8fd50720ddce
Braces: 3,645 / 3,645
Comments: 338 / 338
CSS parser errors: 0
```

The exact diff is one added line only:

```diff
   overflow: visible !important;
   background: transparent !important;
+  box-shadow: none !important;
 }
```

## 6. Validation gate

After editing:

```text
- upload the edited CSS artifact for exact validation
- do not deploy yet
- do not modify or redeploy PHP or JavaScript
- verify the new SHA256 before CSS-only deployment authorization
```

## 7. Runtime boundary after later deployment

After validation and CSS-only deployment, runtime acceptance must confirm:

```text
- Cart table computed box-shadow is none
- invisible picture-frame effect is absent on desktop and phone
- final product divider remains
- Cart quantity, Coupon, totals, Remove, Undo and checkout remain functional
```
