# Step 4F · Remaining Manual Acceptance Roadmap

Date: 2026-08-07  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Purpose

The user requested one complete statement of all remaining manual tests rather than receiving them one micro-check at a time.

Counting rule:

```text
- count acceptance batches, not individual clicks or screenshots
- do not split one batch into multiple conversational turns unless a defect blocks completion
- source edits and static checks are not counted as user manual tests
- defect re-tests are not included in the fixed base count because they only occur if a defect is found
```

## 2. Current remaining count

The original roadmap contained 13 batches. Since then, the following have been completed:

```text
Batch 1 · D2B1 native-field functional closure
Batch 2 · D2B2 Step-01 field-surface visual acceptance
Batch 3 · Step-02 Shipping acceptance
Batch 8 · R3 backend-editable Checkout copy
```

Current remaining count until Checkout can qualify for Project 2 `Completed 1:1`:

```text
9 manual acceptance batches remain
```

Breakdown:

```text
R1 remaining: 3 batches
R2–R8 remaining: 6 batches
Total: 9 batches
```

## 3. Completed manual batches

### Batch 1 · D2B1 native-field functional closure — Completed

Accepted:

```text
- malformed email remains blocked after field movement
- valid Step 01 values advance to Step 02
- moved values remain present
- no duplicate Billing/Shipping fields appear
- Optional note wrapper remains stable
```

### Batch 2 · D2B2 Step-01 field-surface visual acceptance — Completed

Accepted:

```text
- Contact panel
- Delivery panel
- Optional note panel
- field labels, inputs, selects, textarea, icons and spacing
- desktop 1366
- mobile 390
- mobile 360
- backend-owned strict Step-01 copy and fallback behavior
```

### Batch 3 · Step-02 Shipping acceptance — Completed

Accepted:

```text
- current real WooCommerce shipping method renders through the SAFE5 dynamic mirror
- Step-02 Intro and Shipping surfaces match the accepted V2 direction
- Before it leaves. shows actual Step-01 address/email/phone
- Edit address and Back to Address return to Step 01
- customer/address values persist
- re-entering Step 02 resynchronizes the context card
- Continue to Payment opens Step 03
- Step 01 <-> Step 02 Intro switching works
- desktop 1366 / mobile 390 / mobile 360
- Step-02 backend-editable presentation copy passes full normal-state runtime coverage
- clearing tested Step-02 Customizer values restores defaults automatically
```

Conditional regressions retained without blocking Batch 3 closure:

```text
- no-method fallback runtime when a legitimate no-shipping condition exists
- true multi-rate runtime when WooCommerce later exposes multiple simultaneous methods
```

Source architecture for multiple methods is already accepted as count-agnostic and WooCommerce-authoritative.

### Batch 8 · R3 backend-editable Checkout copy — Completed early

Accepted:

```text
- one coherent Spatial Flow Checkout Page Customizer section
- mapped SAFE5 presentation copy changes the intended live surface
- Intro label survives JavaScript step composition
- empty values use safe defaults
- WooCommerce commerce truth remains dynamic
- no second Checkout backend system introduced
```

## 4. R1 remaining manual batches

### Batch 4 · Step-03 Payment acceptance

After Step-03 V2 migration:

```text
- all enabled native gateways render dynamically
- gateway switching works
- native payment boxes/nonces remain usable
- Terms behavior remains correct
- Place Order appears once
- Payment layout matches accepted V2 reference
- desktop 1366 / mobile 390 / mobile 360
```

### Batch 5 · Order Summary / coupon / trust acceptance

After summary migration:

```text
- product rows, subtotal, shipping and total update correctly
- coupon open/apply/error/remove behavior remains native/server-backed
- trust surfaces match V2
- sticky behavior is safe on desktop
- summary follows the form on mobile
- no clipping or horizontal overflow
```

### Batch 6 · R1 final end-to-end acceptance

One consolidated R1 closure session:

```text
- valid Address → Shipping → Payment flow
- malformed email and Terms rejection remain visible
- normal test gateway creates one order only
- duplicate-order check
- Crypto creates one on-hold order and reaches /crypto-pay/
- full live comparison at 1366×768, 390×844 and 360×800
```

## 5. R2–R8 remaining manual batches

### Batch 7 · R2 notice/error ownership matrix

One combined matrix:

```text
missing required field
malformed email
invalid/expired coupon
Terms not accepted
no payment method
server/gateway error where available
repeated updated_checkout / checkout_error
notice appears once and remains readable on desktop/mobile
```

The user has already reported that the current Step-01 error presentation is visually poor. That defect is mandatory R2 scope and is not dismissed by Step-01 or Step-02 closure.

### Batch 9 · R4 Step-04 result-status matrix

One status acceptance matrix using existing/test orders where possible:

```text
processing / completed
pending
on-hold unpaid Crypto
failed with recovery URL where available
cancelled
refunded if supported
Sandbox Crypto success
native gateway-specific output
guest access
```

### Batch 10 · R5 historical CSS cleanup regression

After bounded shared-CSS cleanup:

```text
Checkout remains accepted at 1366/390/360
Cart remains unchanged
Shop remains unchanged
Single Product remains unchanged
Header/Footer remain unchanged
native notices remain visible
```

### Batch 11 · R6 Crypto V0.2.5 legacy regression and decision

One Crypto matrix:

```text
Step-03 gateway render
single on-hold order creation
/crypto-pay/ authorization
invoice creation/reuse
invalid hash
receiver mismatch
amount mismatch
old transaction handling
Sandbox success exactly once
canonical WooCommerce Step 04
Pending semantics for unpaid/on-hold
```

Then the user selects:

```text
Option A: keep V0.2.5 legacy path for this release
Option B: separately authorize plugin upgrade planning
```

### Batch 12 · R7 full commerce regression

One final operational matrix covering:

```text
guest fields and browser refresh/back
shipping/totals
coupon lifecycle
all enabled gateways
single-order safety and duplicate-click protection
order notes and stock behavior
Crypto path
result semantics
emails where the environment permits
```

Evidence already produced in earlier groups may be reused only when no later owning change could invalidate it; otherwise the affected case is rerun inside this batch.

### Batch 13 · R8 final strict 1:1 acceptance

Final user approval session:

```text
1366×768
390×844
360×800
Step 01
Step 02
Step 03 for enabled gateway families
notices and processing state
Crypto state
Confirmed / Pending / Failed / Cancelled result states
complete mobile flow and Footer
backend copy editability confirmed
```

Only after explicit user approval may status become:

```text
Checkout: Completed 1:1
```

## 6. Interaction rule from this point

```text
- do not ask the user to perform isolated micro-tests when they can be safely combined
- before each batch, provide the whole batch procedure once
- user may report the complete batch in one response
- if a defect appears, stop only the affected batch, fix the smallest owner and rerun that batch
- do not advance groups without explicit user authorization
```

## 7. Current stop point

```text
R1 Step-01 D2B1: completed
R1 Step-01 D2B2: completed and closed
R1 Step-02 Shipping V2: completed and closed
SAFE5 backend editability: accepted for Step 01 and normal-state Step 02 surfaces
Conditional no-method / true multi-rate runtime cases: retained as later regressions only
Known ugly notice presentation: retained as R2 visual defect
Next bounded implementation group: Step 03 Payment V2 migration
Next manual acceptance after implementation: Batch 4
Remaining manual acceptance batches: 9
Checkout: Not done
```
