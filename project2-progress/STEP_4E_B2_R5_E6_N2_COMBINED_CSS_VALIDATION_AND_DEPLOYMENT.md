# Step 4E-B2-R5-E6-N2 · Combined CSS Validation and Deployment Gate

Last updated: 2026-07-24  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
Uploaded artifact: spatial-flow(41).css
Combined N2-A + N2-B validation: Passed.
Approved direction: Option A.
Authorized source operation: replace assets/css/spatial-flow.css only.
PHP change: None.
JavaScript change: None.
Template change: None.
Version change: None; remains 2.7.8.
Deployment: Authorized after this validation.
Runtime acceptance: Not executed yet.
Cart page status: Not done.
```

## 1. Exact validated artifact identity

```text
Size: 701,572 bytes
Logical lines: 23,504
SHA256: fbe26aee2be439099ccaf61a998d6a8695b74174cb046f07a4677887f99d7f81
Opening / closing braces: 3,648 / 3,648
Opening / closing comments: 337 / 337
CSS parser errors: 0
Final newline: present
Encoding: UTF-8
```

Every value matches the locked expected combined N2 artifact exactly.

## 2. Exact baseline and diff proof

The combined artifact was compared against the already validated N2-A artifact:

```text
N2-A input file size: 700,240 bytes
N2-A logical lines: 23,470
N2-A SHA256: f9978ff54a6b3d9f3e4b46274082f35b4d85fc27fbda9f8822d1c8ec748c2e72
```

The comparison confirms:

```text
- all bytes before the old Step 4E Cart Notice Toast block are identical
- all bytes after the old Step 4E Cart Notice Toast block are identical
- the only changed range is the complete marked Notice block
- no append-only patch was added at the end of the file
- no unrelated selector or declaration changed outside the replacement range
```

Block measurements:

```text
Old Notice block: 3,587 characters
New Option A Notice block: 4,917 characters
New Notice block SHA256: d63b33a37abb8ad03125f85d15d26a4807e96f8e3df2cef25f5287b6562a6eb6
```

## 3. Marker and ownership validation

```text
Old `Step 4E Cart Notice Toast START` marker count: 0
Old `Step 4E Cart Notice Toast END` marker count: 0
New approved Option A START marker count: 1
New approved Option A END marker count: 1
```

Confirmed ownership boundaries:

```text
- Cart page scope only
- native WooCommerce `.woocommerce-message` lifecycle preserved
- native WooCommerce `.woocommerce-info` lifecycle preserved
- native `.restore-item` URL / nonce / action preserved
- `.wc-forward` added-to-cart message suppression preserved
- no global `.woocommerce-error` rewrite added
- no PHP, JavaScript or WooCommerce template ownership change
```

## 4. N2-A Coupon status preservation

The visible Order Summary Coupon status rule is byte-for-byte unchanged from the validated N2-A artifact:

```css
.sf-cart-summary-coupon__status {
  min-height: 0 !important;
  margin: 11px 0 0 !important;
  color: rgba(31, 25, 22, .72) !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  line-height: 1.55 !important;
}
```

Selector integrity remains:

```text
`.sf-cart-summary-coupon__status`: present
`.sf-cart-summary-coupon__status:empty`: present once
`.sf-cart-summary-coupon__status.is-error`: present once
`.sf-cart-summary-coupon__status.is-success`: present once
```

## 5. Authorized manual deployment

Deploy only the validated uploaded artifact:

```text
Source artifact: spatial-flow(41).css
Destination: assets/css/spatial-flow.css
Required destination SHA256 after replacement:
fbe26aee2be439099ccaf61a998d6a8695b74174cb046f07a4677887f99d7f81
```

Before replacement, retain the current deployed CSS as rollback:

```text
Current deployed source: spatial-flow(39).css
Current deployed SHA256:
1a4daa7f09b6370ccc93cc8441ea3c45ec23d8777a049c1a6f2c8fd50720ddce
```

Deployment constraints:

```text
- replace the complete destination CSS file
- do not merge or append the new block manually again
- do not edit functions.php
- do not edit assets/js/spatial-flow.js
- do not edit WooCommerce templates
- do not change version 2.7.8
- do not execute cancelled FIX4
- do not deploy the intermediate N2-A-only artifact
```

## 6. Post-deployment gate

After the destination file has the required SHA256, stop source editing and begin runtime acceptance in bounded groups:

```text
1. deployment identity / clean page-load confirmation
2. Family 1 Cart update success Notice visual and lifecycle acceptance
3. Family 2 Shipping costs updated Notice visual and lifecycle acceptance
4. removed-item Restore / Undo Notice acceptance
5. Family 3 valid / invalid Coupon status acceptance
6. desktop 1366px and mobile 390px / 360px overflow and composition revalidation
7. binary Cart decision
```

No runtime or final 1:1 pass is recorded by this document. Cart remains `Not done` until all remaining gates pass.