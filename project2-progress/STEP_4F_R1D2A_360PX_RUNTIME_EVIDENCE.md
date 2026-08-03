# Step 4F · R1-D2A 360px Runtime Evidence

Date: 2026-08-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Evidence source

User-supplied live Step-01 screenshot at 360px after applying both audited D2A CSS replacements.

```text
Route: /checkout-2-2/
Stage: Address
Candidate CSS target: 23,283 bytes / 674 lines
Checkout status: Not done
```

## 2. Confirmed successful changes

The screenshot confirms that D2A corrected the mobile content sequence:

```text
Intro / progress
→ Address form
→ Continue to Shipping
→ Return to cart
→ Order Summary
```

This matches the accepted V2 structural order for Step 01.

The screenshot also confirms:

```text
- Order Summary no longer appears before the form
- primary Continue action appears before the secondary Back action
- the two navigation controls no longer use the former pill treatment
- outer form and summary surfaces use the warm editorial color direction
- no visible horizontal overflow is introduced
- D1 Intro/progress remains intact
```

Classification:

```text
Mobile form-before-summary order: passed
Mobile primary-before-secondary action order: passed
D1 regression: none observed
```

## 3. D2A acceptance failure retained

The same screenshot does not show the expected V2 outer gutter around the body surfaces.

Visible result:

```text
- the warm Address/form outer surface remains full-bleed or nearly full-bleed
- the primary Continue action remains edge-to-edge or nearly edge-to-edge
- the Order Summary outer surface remains full-bleed or nearly full-bleed
```

Accepted V2 references preserve a clear mobile body gutter around:

```text
- form panels
- action controls
- Order Summary
```

Therefore:

```text
D2A body-order objective: passed
D2A outer-gutter objective: failed / unresolved
D2A overall: partial, not closed
```

The screenshot proves this is not a horizontal-overflow defect; it is a strict 1:1 spacing mismatch.

## 4. Expected open items that are not classified as new regressions

The following remain visibly old and are already assigned to later D2 work:

```text
- nested rounded Billing Details container
- rounded input/select/textarea surfaces
- legacy Contact Information / Billing Details copy structure
- rounded trust cards inside Order Summary
- legacy Order Summary row typography and spacing
- final V2 button colors and border treatment
```

These do not invalidate the successful D2A order correction, but they prevent overall Checkout 1:1 completion.

## 5. Next bounded action

Before D2B visual migration continues, audit the responsive width/margin cascade controlling:

```text
.sf-safe5-shell
.sf-safe5-main
.sf-safe5-section-card
.sf-safe5-actions
.sf-safe5-summary
.sf-safe5-summary-card
```

The next correction must establish the accepted mobile body gutter without changing the now-correct form/summary order or any WooCommerce behavior.

## 6. Current status

```text
R1-D1: closed
R1-D2A source application: confirmed
R1-D2A mobile order: passed
R1-D2A action order: passed
R1-D2A body gutter: failed / open
R1-D2A overall: partial
R1-D2B: blocked pending body-gutter correction
Checkout: Not done
```
