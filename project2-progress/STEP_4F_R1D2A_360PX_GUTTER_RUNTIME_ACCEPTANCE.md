# Step 4F · R1-D2A 360px Gutter Runtime Acceptance

Date: 2026-08-04  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Evidence

User supplied a live `360px` Step-01 screenshot after applying the audited SAFE5 shell-specificity correction.

## 2. Observed result

The screenshot confirms:

```text
- Intro/progress remains intact
- Address form remains before Order Summary
- primary Continue remains before secondary Return to cart
- Address/form warm panel now sits inside a visible mobile gutter
- Continue and Return actions align to the same gutter
- Order Summary warm panel aligns to the same gutter
- no visible horizontal overflow is introduced
```

The visible spacing is consistent with the expected approximately `22px` side gutter at `360px`.

## 3. Root-cause closure

The correction targeted:

```css
body.woocommerce-checkout:not(.woocommerce-order-received) form.checkout.woocommerce-checkout > .sf-safe5-shell
```

This stronger narrow selector successfully overrides the higher-specificity legacy shared rule in `spatial-flow.css` that previously forced every direct Checkout form child to `width: 100% !important`.

Classification:

```text
Shell specificity correction: runtime passed
Mobile body gutter: passed
D2A body order: passed
D2A action order: passed
D2A: closed
```

## 4. Installed CSS state

```text
assets/css/checkout-safe5.css
24,022 bytes / 688 lines
SHA256: 5c174617e71e1f3b9c2a3319c23c270efbcadbe819f3183ebead42529f99c23b
```

## 5. Remaining D2 work

D2A does not complete strict V2 body migration. Still open:

```text
- nested Billing Details card removal/recomposition
- V2 Contact / Delivery / Optional Note structure
- input/select/textarea surface migration
- field icons and helper copy
- Order Summary internal row/typography migration
- trust surface migration
- desktop 7:5 body geometry
```

## 6. Current stop point

```text
R1-D2A: closed
Next: R1-D2B Step-01 form/panel and field-surface migration
Checkout: Not done
```
