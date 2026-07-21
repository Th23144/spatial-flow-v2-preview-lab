# Step 4E-B2-R5-E5-S2-E Runtime Rejection · S2-F Geometry Diagnostic

Last updated: 2026-07-21  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Result

```text
S2-E CSS-only deployment: Confirmed by user screenshots and incognito-browser test.
S2-E white rounded surface removal: Passed.
S2-E strict visual acceptance: Failed.
Residual defect: the Cart item area still reads as an implied rectangular picture frame.
Cache explanation: Rejected; user reproduced in an incognito browser.
Cart page status: Not done.
Current executable substep: S2-F zero-source live geometry diagnostic.
```

## 1. What S2-E actually fixed

The new runtime screenshot confirms that the following phone item-card surface is gone:

```text
- white/paper fill
- four-sided border
- 18px radius
- mobile shadow
- 16px inset card padding
- 16px card margin/gap
```

Therefore the deployed CSS is materially different from the prior rounded-card screenshot. The remaining defect is not the same filled card surface.

## 2. Current exact deployed CSS candidate

```text
Source alias: spatial-flow(38).css
Destination: assets/css/spatial-flow.css
Size: 700,177 bytes
Logical lines: 23,468
SHA256: 4bce679ee3c2abca6bcc0dfd4733d92d0c8b77e16b7a0bbf7d7832e305cff6b6
Version: 2.7.8
```

## 3. Source-level finding after S2-E

Inside the Canonical Cart block, all traditional surface owners are already reset:

```text
form.woocommerce-cart-form
- padding: 0
- border: 0
- border-radius: 0
- background: transparent
- box-shadow: none

table.shop_table
- border: 0
- border-radius: 0
- background: transparent

tr.woocommerce-cart-form__cart-item
- border: 0
- border-radius: 0
- background: transparent
- box-shadow: none

td
- border: 0
- border-radius: 0
- background: transparent
- box-shadow: none
```

No additional white fill, radius or shadow owner remains in the canonical item surface.

## 4. Remaining implied-frame geometry

The phone screenshot still creates a rectangular visual band through aligned geometry rather than a painted card:

```text
Upper edge:
.sf-cart-v2-heading has a full-width bottom divider.

Lower edge:
tr.woocommerce-cart-form__cart-item has a full-width bottom divider.

Vertical body:
The item row inherits 28px vertical padding from the canonical base row.
The mobile rule changes the grid but does not replace that base row padding.
The real one-line-item state has less editorial content than the three-item static sample, leaving a larger quiet zone before the final divider.
```

On a one-line-item phone Cart, the heading divider and final product divider align to the same content width. Together with the retained vertical breathing room, they read as the top and bottom edges of an invisible rectangle even though the pixels inside use the same page background.

## 5. Static-reference constraint

The authoritative static source contains both:

```text
- heading/count bottom divider
- product-row bottom divider
```

The project also explicitly requires the final product divider to remain.

Therefore another blind deletion is not authorized. The next operation must isolate which boundary or spacing causes the user's rejected perception while retaining the final divider and avoiding another speculative patch.

## 6. S2-F zero-source live diagnostic

No source file is modified in S2-F. Use browser DevTools only, one temporary toggle at a time, and restore each test before the next.

### Test A — upper heading divider

Temporarily disable only:

```css
body.woocommerce-cart .sf-cart-v2-heading {
  border-bottom: 1px solid var(--sf-cart-border) !important;
}
```

Question:

```text
Does the invisible picture-frame perception disappear while the final product divider remains?
```

### Test B — inherited row bottom spacing

Restore Test A. Temporarily add/change on the phone cart row:

```css
padding-bottom: 0 !important;
```

Question:

```text
Does moving the retained final divider directly toward the content remove the frame perception?
```

### Test C — lower product divider, diagnostic only

Restore Test B. Temporarily disable only the cart-row `border-bottom`.

Question:

```text
Does the frame perception disappear only when the lower line is removed?
```

Test C is diagnostic only. The final implementation may not remove the final product divider without a new explicit acceptance-policy decision.

## 7. Locked boundaries

```text
- Do not edit or upload CSS during S2-F.
- Do not modify PHP or JavaScript.
- Do not change version 2.7.8.
- Do not append another Cart override.
- Do not execute cancelled FIX4.
- Record which single DevTools test removes the perceived frame before authoring S2-G.
```

## 8. Next decision

```text
Test A succeeds → S2-G targets heading-divider ownership while retaining final product divider.
Test B succeeds → S2-G targets phone item rhythm/padding while retaining both dividers.
Only Test C succeeds → reconcile the user's visual acceptance with the locked final-divider requirement before editing source.
No test succeeds → inspect another live DOM owner; do not guess.
```
