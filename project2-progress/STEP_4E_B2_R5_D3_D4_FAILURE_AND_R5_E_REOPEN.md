# Step 4E-B2-R5-D3/D4 · Final Acceptance Failure and R5-E Reopen

Last updated: 2026-07-14  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-D2 backend editability / dynamic ownership：Passed / remains valid.
R5-D3 final strict visual acceptance：Failed.
R5-D4 final native Cart regression：Failed.
R5-D5 binary completion decision：Blocked.
Current executable phase：R5-E1 exact source and state-ownership re-audit.
Cart page status：Not done.
```

The previous R5-B canonical implementation and R5-C historical cleanup are not rolled back. Their cleanup result remains valid. However, the final screenshots and interaction tests prove that the accepted Cart presentation is not yet a strict 1:1 result and still contains reproduced functional/state defects.

## User-supplied evidence

### Defect 1 · Header BAG and Your Bag count remain stale after Cart AJAX/state changes

Reproduction:

```text
- change a product quantity and update Cart
- or remove / restore a product
- Header BAG count does not update immediately
- Your Bag live piece count does not update immediately
- both values become correct only after a manual page refresh
```

Impact:

```text
R5-D4 quantity/update：Failed.
R5-D4 Header BAG synchronization：Failed.
R5-D3 live-count behavior：Failed.
```

Preliminary ownership finding:

```text
- spatial_flow_cart_v2_heading() reads WC()->cart->get_cart_contents_count() only when PHP renders the heading
- the accepted ownership gate records no Cart-specific JavaScript
- no validated fragment/event owner currently refreshes both Header BAG and the custom heading count after WooCommerce updates the Cart DOM
```

This is a reproduced functional defect and therefore permits a narrowly scoped fragment/event correction after exact source inspection. It does not authorize a broad Cart JavaScript rewrite.

### Defect 2 · Fresh empty-Cart load and transition-to-empty state use different layouts

Observed states:

```text
A. Cart becomes empty after removing the final product:
   - native empty message and Return to Shop are centered across the page
   - the remove/Undo notice remains visible above
   - overall empty layout is visually coherent

B. Browser enters an already-empty Cart directly:
   - empty message remains constrained to the left portion of the content frame
   - Return to Shop is offset into a separate position
   - large unused right-side space appears
   - the direct-load state does not match state A
```

Impact:

```text
R5-D4 empty-Cart behavior：Failed.
R5-D3 desktop visual acceptance：Failed.
```

Preliminary CSS finding:

```text
The direct empty state is likely inheriting non-empty Cart parent/grid constraints without an explicit fresh-empty-state owner. The exact winning selector must be identified in the current spatial-flow.css before any correction.
```

### Defect 3 · Desktop content frame remains materially narrower than the approved V2 Cart direction

The approved static Cart source defines:

```text
--max: 1440px
--gutter: 48px
Cart main grid: 7fr / 5fr
Desktop gap: 80px
```

The supplied desktop full-page screenshot shows the Cart body using a substantially narrower legacy-like central frame. Products, Order Summary and the four recommendation cards occupy too little of the available desktop canvas.

Clarification:

```text
1366px is a viewport-review threshold, not the literal required content width.
At wide desktop viewports, the V2 source permits a 1440px maximum frame with 48px side gutters.
```

Impact:

```text
R5-D3 desktop strict 1:1 visual acceptance：Failed.
The current Cart is structurally usable but remains visibly far from the approved V2 proportions.
```

### Additional blocking visual gap · Cart update/remove notice is not design-aligned

The current Cart notice / Undo treatment is functional, but the pill shell, icon/button proportions and overall visual language do not match the approved editorial Cart direction.

Impact:

```text
R5-D3 strict visual acceptance：Failed.
The separate Cart Notice owner must be refined in place rather than covered by another late append.
```

### Overall user decision

```text
The Cart remains a large distance from 1:1.
Unmentioned checks were reported as normal.
No completion claim is permitted.
```

## R5-E remediation sequence

### R5-E1 · Exact source and state-ownership re-audit

Required current server-source files:

```text
1. functions.php
2. assets/css/spatial-flow.css
3. assets/js/spatial-flow.js
4. header.php, or the actual current header template-part that renders BAG count
```

Audit outputs:

```text
- exact Header BAG markup/function owner
- exact Your Bag count markup/function owner
- WooCommerce events/fragments currently available after quantity/remove/restore
- direct-empty and transition-empty DOM/class differences
- exact winning desktop width/container selectors
- exact Cart Notice block boundary
- exact in-place replacement boundaries and independent rollback data
```

No code change is authorized before E1 is complete.

### R5-E2 · Synchronized live counts

Goal:

```text
Header BAG and Your Bag count update immediately after quantity update, remove and Undo/Restore, without a manual refresh.
```

Constraints:

```text
- preserve WooCommerce as source of truth
- no hardcoded count
- no polling
- no complete Cart JavaScript rewrite
- use one bounded fragment/event owner
- Header structure remains unchanged
```

### R5-E3 · Empty-Cart state normalization

Goal:

```text
Fresh direct empty Cart and transition-to-empty Cart render the same stable full-width empty-state composition.
```

Constraints:

```text
- preserve native WooCommerce empty message and Return to Shop link
- preserve native Undo behavior during transition state
- no Cart template override
- no hardcoded empty-Cart page
```

### R5-E4 · Desktop width and strict visual rebase

Goal:

```text
Rebase the accepted Canonical Cart owner toward the actual V2 frame:
- desktop max frame up to 1440px
- 48px reference gutters where viewport permits
- 7fr / 5fr composition
- approximately 80px desktop separation when safe
- recommendation grid uses the available width
- production-quality phone behavior remains protected
```

This must be an in-place Canonical Cart replacement/merge. Do not append another general visual patch.

### R5-E5 · Cart Notice refinement

Goal:

```text
Replace the current notice styling inside the existing Cart Notice owner with a restrained editorial non-blocking treatment consistent with the Cart page.
```

Constraints:

```text
- preserve WooCommerce notice text, links and Undo action
- preserve accessibility and click behavior
- no fake toast content
- do not globally alter Checkout/Thank You notices
```

### R5-E6 · Final acceptance rerun

Required after all four defects are corrected:

```text
- desktop full-page screenshot
- phone full-page screenshot
- immediate BAG + Your Bag count synchronization
- direct empty and transition-to-empty parity
- quantity/update, remove/Undo, Coupon, shipping/totals, Checkout, recommendations
- empty Cart restoration
- SAFE5 Checkout regression
- final exact PHP/CSS/JS baselines
- binary Cart status decision
```

## Freeze

Until the current server files are supplied and R5-E1 completes:

```text
- do not append CSS
- do not modify Cart JavaScript blindly
- do not patch the Header count independently
- do not change empty-Cart templates
- do not change the Cart page to Completed 1:1
```
