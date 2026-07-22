# Step 4E-B2-R5-E6-N2-A · Coupon Status CSS Manual Execution

Last updated: 2026-07-22  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
Approved Notice direction: Option A.
Current bounded operation: Family 3 visible Coupon status only.
Family 1 / Family 2 Notice band edit: Not authorized in this substep.
PHP change: No.
JavaScript change: No.
Deployment: Not authorized before uploaded-artifact validation.
Cart page status: Not done.
```

## Locked baseline

```text
Server path: assets/css/spatial-flow.css
Uploaded alias: spatial-flow(40).css
Size: 700,208 bytes
Logical lines: 23,469
SHA256: 1a4daa7f09b6370ccc93cc8441ea3c45ec23d8777a049c1a6f2c8fd50720ddce
Opening / closing braces: 3,645 / 3,645
Opening / closing comments: 338 / 338
CSS parser errors: 0
```

## Exact operation

Find the unique complete range beginning with:

```css
body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__status {
```

and ending after:

```css
body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__status.is-success {
  color: var(--sf-cart-ink) !important;
}
```

Replace that complete range with:

```css
body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__status {
  min-height: 0 !important;
  margin: 11px 0 0 !important;
  color: rgba(31, 25, 22, .72) !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  line-height: 1.55 !important;
}

body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__status:empty {
  display: none !important;
}

body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__status.is-error {
  color: var(--sf-cart-clay) !important;
}

body.woocommerce-cart .cart-collaterals .sf-cart-summary-coupon__status.is-success {
  color: var(--sf-cart-ink) !important;
}
```

## Expected N2-A artifact

If the replacement is performed exactly on the locked UTF-8/LF baseline:

```text
Size: 700,240 bytes
Logical lines: 23,470
SHA256: f9978ff54a6b3d9f3e4b46274082f35b4d85fc27fbda9f8822d1c8ec748c2e72
Opening / closing braces: 3,645 / 3,645
Opening / closing comments: 338 / 338
CSS parser errors: 0
Final newline: present
```

## Boundaries

```text
- do not edit the Step 4E Cart Notice Toast block yet
- do not append CSS at the end of the file
- do not modify the hidden native p.coupon-error-notice
- do not modify JavaScript lifecycle mirroring
- do not modify PHP or templates
- do not deploy before exact validation
- do not change version 2.7.8
- cancelled FIX4 remains cancelled
```

## Next gate

Upload the edited CSS artifact. Validate exact hash, syntax, selector scope and diff. Only after N2-A passes may N2-B replace the page-level Cart Notice block.
