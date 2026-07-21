# Step 4E-B2-R5-E6 · Final Strict Cart Acceptance Execution

Last updated: 2026-07-21  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E5-S2-G CSS deployment and runtime acceptance: Passed / closed.
Invisible Cart picture-frame defect: Resolved.
Current stage: R5-E6-A equivalent-condition visual evidence capture.
Source changes authorized: None.
Cart page status: Not done.
```

## 1. Acceptance contract

Authoritative visual source:

```text
preview/spatial-flow-cart-v1.html
```

Strict acceptance policy:

```text
PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
```

Mobile review policy:

```text
PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
```

`Completed 1:1` requires strict desktop geometry and typography, production-quality phone behavior, real WooCommerce data and functions, and retained backend editability. Similarity or general visual consistency is insufficient.

## 2. Locked deployed artifacts

```text
functions.php
Size: 557,249 bytes
Logical lines: 10,414
SHA256: 5bd9f8b307d1b59eaa92bf31d3640e2d4ba48bca4de7a640b705d5e75f9ef00b
Version: 2.7.8

assets/js/spatial-flow.js
Size: 78,143 bytes
Logical lines: 2,242
SHA256: 7442ee92167ae383b933c6db0281f14ea56a75733339818c3e4858d77d52651b

assets/css/spatial-flow.css
Size: 700,208 bytes
Logical lines: 23,469
SHA256: 1a4daa7f09b6370ccc93cc8441ea3c45ec23d8777a049c1a6f2c8fd50720ddce
```

No file edit, deployment or version bump is authorized during evidence capture.

## 3. Static Cart contract to verify

### Desktop

```text
maximum frame: 1440px
reference side gutters: 48px
main layout: 7fr / 5fr
grid row and column gap: 80px
main content alignment: start
Order Summary: filled secondary surface
left product plane: transparent / no enclosing table shadow
product rows: bottom divider retained
recommendation section: four columns at desktop
```

The 80px grid gap controls both the column separation and the vertical rhythm between title, count rule, and the product/Summary row.

### Phone

```text
common review width: 390px
narrow fallback: 360px
no horizontal overflow
no clipped or overlapping controls
readable real dynamic text
usable quantity, Coupon, Remove, Undo and checkout controls
product row and recommendation flow remain visually professional
Footer remains complete and usable
```

The product-row bottom divider remains part of the approved design unless a later clean evidence review identifies a concrete production-quality defect.

## 4. R5-E6-A visual evidence matrix

Capture the approved static source and the clean live Cart under equivalent conditions:

```text
A1. Static desktop full page: 1366 × 768 CSS px
A2. Live desktop full page: 1366 × 768 CSS px
A3. Static phone full page: 390 × 844 CSS px
A4. Live phone full page: 390 × 844 CSS px
A5. Static narrow phone full page: 360 × 800 CSS px
A6. Live narrow phone full page: 360 × 800 CSS px
```

Required conditions:

```text
browser page zoom: 100%
same viewport for each static/live pair
page fully loaded
no stale cache
no Console test styles
no inspector highlighting or red rectangles
no open modal, menu, Coupon or validation state
same Cart item quantity/data state within each live screenshot set
full-page capture including Header, Cart, recommendations and Footer
```

Real product titles, prices, shipping, images and recommendation identities may differ from sample data, but their slots and visual geometry must match.

## 5. R5-E6-B functional regression gate

After the visual evidence passes or any visual deviation is resolved, reconfirm:

```text
1. quantity minus and plus
2. Header BAG count
3. Your Bag piece count
4. Subtotal and Total
5. valid Coupon
6. invalid Coupon and visible error state
7. remove item
8. Undo / Restore
9. shipping and Change address
10. checkout URL and navigation
11. empty Cart direct-entry path
12. no horizontal overflow after AJAX replacements
```

Native WooCommerce ownership, nonces and calculation behavior must remain intact.

## 6. R5-E6-C backend editability gate

Reconfirm the previously closed ownership guarantees:

```text
- active Cart heading/count/trust copy remains backend-editable where designed
- product title, price, image, URL, quantity, variation and subtotal remain WooCommerce-owned
- product-level subtitle remains backend-editable
- recommendation identity, title, price, image and URL remain WooCommerce-owned
- recommendation exclusion/fallback controls remain backend-editable
- no Cart template override exists
```

## 7. Decision rule

Only two final statuses are valid:

```text
Completed 1:1
Not done
```

The page may be marked `Completed 1:1` only after:

```text
R5-E6-A visual evidence: Passed
R5-E6-B functional regression: Passed
R5-E6-C backend editability: Passed
no unresolved strict-reference deviation remains
```

## 8. Current execution boundary

Execute R5-E6-A only. Return the six clean full-page screenshots before any source edit or final status decision.
