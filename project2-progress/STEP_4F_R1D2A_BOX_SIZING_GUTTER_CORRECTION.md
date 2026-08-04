# Step 4F · R1-D2A Box-Sizing Gutter Correction

Date: 2026-08-04  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Trigger

The 360px D2A runtime screenshot confirmed that mobile body order and action order were corrected, but the expected V2 outer gutter was still visually consumed by the form, action and Order Summary surfaces.

## 2. Issued hypothesis

The responsive shell width was expected to reserve a 22px-class side gutter:

```css
width: min(calc(100% - 44px), 1180px) !important;
```

The issued hypothesis was that descendant `content-box` sizing caused padding and borders to consume that gutter.

A bounded correction added `box-sizing: border-box`, `min-width: 0` and `max-width: 100%` to the affected Checkout layout surfaces.

## 3. Runtime evidence

Authoritative runtime record:

```text
project2-progress/STEP_4F_R1D2A_BOX_SIZING_RUNTIME_FAILURE.md
```

The user supplied a new 360px screenshot after applying the correction.

Observed:

```text
- mobile body order remains correct
- action order remains correct
- no new visible overflow appears
- Address/form surface remains full-bleed or nearly full-bleed
- primary Continue action remains full-bleed or nearly full-bleed
- Order Summary surface remains full-bleed or nearly full-bleed
```

## 4. Corrected conclusion

```text
Box-sizing root-cause diagnosis: disproved / withdrawn
Box-sizing correction: did not resolve the target gutter defect
D2A body gutter: still open
```

The earlier wording `Root cause: confirmed` is no longer authoritative.

The correction does not appear to introduce visible damage, so screenshot evidence alone does not require an immediate rollback. It must not be represented as the final solution.

## 5. Applied source target

```text
File: assets/css/checkout-safe5.css
Expected post-edit state: 23,816 bytes / 682 lines
SHA256: 395ccd6d3b07e6c03e8f43eb2e812e5f942889f40fa3543f84ded1419cc77fba
```

No PHP, JavaScript, fields, WooCommerce hooks, gateways, totals, submit behavior or Crypto flow were changed.

## 6. Required next diagnostic

No additional CSS correction may be guessed from screenshots alone.

Inspect actual runtime geometry and computed cascade for:

```text
.sf-safe5-shell
.sf-safe5-main
.sf-safe5-view.is-active
.sf-safe5-section-card
.sf-safe5-actions
.sf-safe5-summary
.sf-safe5-summary-card
```

Required properties:

```text
bounding rect left / right / width
computed width / max-width
margin-left / margin-right
padding-left / padding-right
box-sizing
position / display
```

## 7. Status

```text
Correction application: confirmed by user screenshot
Runtime target result: failed
Diagnosis: withdrawn
D2A body gutter: open
D2A closure: blocked
Checkout: Not done
```
