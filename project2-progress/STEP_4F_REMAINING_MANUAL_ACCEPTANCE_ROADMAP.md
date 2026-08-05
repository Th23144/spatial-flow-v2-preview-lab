# Step 4F · Remaining Manual Acceptance Roadmap

Date: 2026-08-04  
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

## 2. Fixed remaining count

From the current stop point until Checkout can qualify for Project 2 `Completed 1:1`:

```text
13 manual acceptance batches remain
```

Breakdown:

```text
R1 remaining: 6 batches
R2–R8 remaining: 7 batches
Total: 13 batches
```

## 3. R1 remaining manual batches

### Batch 1 · D2B1 native-field functional closure

One combined test session:

```text
- malformed email remains blocked after field movement
- valid Step 01 values advance to Step 02
- moved values remain present
- no duplicate Billing/Shipping fields appear
- Optional note wrapper remains stable
```

### Batch 2 · D2B2 Step-01 field-surface visual acceptance

After field/icon styling is implemented:

```text
- Contact panel
- Delivery panel
- Optional note panel
- field labels, inputs, selects, textarea, icons and spacing
- desktop 1366
- mobile 390
- mobile 360
```

### Batch 3 · Step-02 Shipping acceptance

After Step-02 V2 migration:

```text
- one worldwide $8.99 method renders correctly
- Back to Address and Continue to Payment work
- customer/address values persist
- Shipping layout matches accepted V2 reference
- desktop 1366 / mobile 390 / mobile 360
```

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

## 4. R2–R8 manual batches

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

### Batch 8 · R3 backend-editable Checkout copy

One Customizer session:

```text
change and publish each mapped Checkout copy field
confirm only intended live text changes
confirm blank value uses safe fallback
confirm shipping/payment/order truth remains dynamic
```

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

## 5. Interaction rule from this point

```text
- do not ask the user to perform isolated micro-tests when they can be safely combined
- before each batch, provide the whole batch procedure once
- user may report the complete batch in one response
- if a defect appears, stop only the affected batch, fix the smallest owner and rerun that batch
- do not advance groups without explicit user authorization
```

## 6. Current stop point

```text
Ship-to-different-address expansion: passed
Ship-to-different-address collapse: user-confirmed passed
Next manual acceptance: Batch 1, combined D2B1 native-field functional closure
Remaining manual acceptance batches: 13
Checkout: Not done
```
