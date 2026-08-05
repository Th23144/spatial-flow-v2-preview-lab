# Step 4F · Master Manual Acceptance Checklist

Date: 2026-08-04  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. User decision and execution model

The user intends to use one complete checklist rather than receive isolated micro-tests one at a time.

Important boundary:

```text
The checklist is issued now in full, but a batch becomes executable only after its owning implementation group is complete and marked Ready for acceptance.
Testing future groups against the current old implementation would produce invalid evidence.
```

Interaction rule:

```text
- before a batch begins, provide the full batch procedure once
- the user may complete the batch and report all results in one response
- do not split one batch into separate turns unless a defect blocks it
- when a defect appears, stop only that batch, repair the smallest owner and rerun that batch
- source/static checks are handled by the assistant and are not counted as user manual tests
```

## 2. Global preparation for every visual/functional batch

Use:

```text
browser zoom: 100%
cache: Ctrl+F5 after source changes
Checkout URL: /checkout-2-2/
real WooCommerce cart and dynamic data
no stale tab after a deployment/change
```

Viewport set:

```text
Desktop: 1366 × 768
Phone A: 390 × 844
Phone B: 360 × 800
```

Evidence rules:

```text
- preserve viewport width and relevant browser/device toolbar where practical
- capture full relevant surface, not only a cropped success message
- keep order number, status, total and payment method visible when testing orders
- redact order keys, nonces, transaction hashes and private payment credentials
- do not record full order authorization key from /crypto-pay/
```

General fail conditions:

```text
horizontal overflow
clipped labels/buttons/gateway content
hidden native WooCommerce controls
one action generating multiple orders
server notice hidden or duplicated
static text claiming payment/order success without server status
mobile content touching the viewport edge contrary to the accepted V2 gutter
backend editability broken
```

## 3. Batch 1 · D2B1 native-field functional closure

Availability:

```text
Executable now.
```

Preparation:

```text
- Step 01 Address active
- Ship to a Different Address unchecked
- use one test product in cart
```

Procedure:

1. In Email enter `test@` while other required fields remain complete.
2. Click `Continue to Shipping`.
3. Confirm Step 01 remains active and one clear invalid-email notice appears.
4. Replace the email with a valid test email.
5. Fill all required Billing values.
6. Change Country once and confirm its State/Region behavior still works.
7. Confirm every Billing field appears once.
8. Confirm Optional note has no blank orphan surface.
9. Enter a short Order note.
10. Click `Continue to Shipping`.
11. Confirm Step 02 opens.
12. Return to Step 01 and confirm entered Billing values and Order note remain present.

Pass criteria:

```text
malformed email blocked
one readable notice
valid native fields advance to Step 02
values persist after back navigation
no duplicate Billing/Shipping fields
Optional-note wrapper remains stable
```

Evidence:

```text
one screenshot for invalid-email state
one screenshot after returning from Step 02 showing retained values
brief statement: all required values retained / any value lost
```

## 4. Batch 2 · D2B2 Step-01 final field-surface visual acceptance

Availability:

```text
Executable only after D2B2 field/icon styling is installed and source-audited.
```

For each viewport 1366, 390 and 360 inspect:

### Intro and progression

```text
Step-01 kicker and heading match V2
01 Address active
02/03/04 hierarchy correct
no overflow or edge contact
```

### Contact panel

```text
Contact · 01 label
Where Should We Write? heading
supporting copy
Email label, required marker, icon, input height, border and padding
focus state remains readable
```

### Delivery panel

```text
Delivery address · 01 label
heading and supporting copy
First/Last name alignment
Country/Region native control
Address lines
City/Postcode/State/Phone order
field icons aligned and not blocking text
required/optional wording correct
Ship to a Different Address remains usable
```

### Optional note

```text
heading and supporting copy
one Order notes field
textarea height and padding
no empty wrapper or duplicate textarea
```

### Action controls

```text
Continue to Shipping primary hierarchy
Return to cart secondary hierarchy
correct mobile order
adequate touch target
same accepted outer gutter as panels
```

Pass criteria:

```text
strict V2 hierarchy and spacing
native controls remain usable
no clipping, overflow, duplicate fields or orphan surfaces
```

Evidence:

```text
three full Step-01 screenshots: 1366, 390, 360
```

## 5. Batch 3 · Step-02 Shipping acceptance

Availability:

```text
Executable only after Step-02 V2 migration is installed.
```

Procedure:

1. Complete valid Step 01 and enter Step 02.
2. Confirm only the configured worldwide flat-rate method appears.
3. Confirm displayed rate is `$8.99`.
4. Confirm Order Summary subtotal + shipping = total.
5. Click Back to Address; confirm entered values persist.
6. Return to Shipping; confirm the same rate remains selected.
7. Click Continue to Payment.
8. Repeat visual inspection at 1366, 390 and 360.

Inspect:

```text
heading, method card, selected state, price alignment
Back to Address and Continue to Payment
summary placement and mobile order
no fake or duplicated shipping method
no requirement that the amount change when address changes under the current global-flat-rate configuration
```

Pass criteria:

```text
one real native method
$8.99 displayed consistently
values and method persist
buttons navigate correctly
V2 geometry matches at all three widths
```

Evidence:

```text
Step-02 screenshot at 1366, 390 and 360
brief confirmation that Back/Continue and value persistence passed
```

## 6. Batch 4 · Step-03 Payment acceptance

Availability:

```text
Executable only after Step-03 V2 migration is installed.
```

Procedure:

1. Enter Step 03 using valid Address and Shipping data.
2. Confirm every currently enabled WooCommerce gateway renders dynamically.
3. Switch through every available gateway.
4. Confirm each gateway's native description/payment box opens and closes correctly.
5. Confirm provider fields, if any, remain usable and are not clipped.
6. Confirm Terms/Privacy text and links remain visible.
7. Confirm native `Place Order` appears exactly once.
8. Attempt without Terms and confirm one visible rejection notice.
9. Select the normal test gateway and verify the page is ready to submit.
10. Select Crypto and confirm its native description remains intact.
11. Inspect at 1366, 390 and 360.

Pass criteria:

```text
all enabled gateways dynamic
switching works
native fields/nonces preserved
one Place Order only
Terms rejection visible once
no clipping or horizontal overflow
V2 visual hierarchy matches
```

Evidence:

```text
one screenshot per gateway family where the visible payment box differs
one Terms-error screenshot
full Step-03 screenshot at 1366, 390 and 360
```

## 7. Batch 5 · Order Summary, coupon and trust acceptance

Availability:

```text
Executable only after Order Summary/trust migration is installed.
```

Procedure:

1. Use a cart with at least one product; two products are preferable for row-spacing inspection.
2. Confirm product image, title, attributes, quantity and line price are readable.
3. Confirm subtotal, `$8.99` shipping and total are mathematically correct.
4. Open coupon control.
5. Submit an empty code; confirm one clear error.
6. Submit an invalid code; confirm server-backed error appears once.
7. Submit a valid test coupon when available; confirm totals update.
8. Remove the coupon through the available native flow and confirm totals restore.
9. Reapply or repeat once to confirm no duplicate notice/control.
10. Confirm trust surfaces match V2 and contain no false payment-success claim.
11. On desktop, scroll and confirm sticky behavior does not collide with Header/Footer or run beyond the viewport.
12. On 390/360, confirm Summary follows the form and remains inside the accepted gutter.

Pass criteria:

```text
real WooCommerce data and totals
coupon lifecycle remains server-backed
notices appear once
safe desktop sticky behavior
correct mobile order
no clipping/overflow
```

Evidence:

```text
summary screenshot before coupon
invalid-coupon screenshot
valid-coupon screenshot if a valid test coupon exists
desktop sticky-state screenshot
390 and 360 summary screenshots
```

## 8. Batch 6 · R1 end-to-end closure

Availability:

```text
Executable after all R1 visual subgroups are implemented and separately source-audited.
```

Normal gateway path:

1. Complete Address → Shipping → Payment.
2. Use the normal test gateway.
3. Accept Terms.
4. Click Place Order once.
5. Confirm direct transition to the WooCommerce result page, with no Review input page.
6. Record order number, total, payment method and status.
7. Open WooCommerce Orders and confirm only one new order exists.

Crypto path:

1. Start a fresh cart/order.
2. Complete Address → Shipping → Payment.
3. Select Pay with Crypto and accept Terms.
4. Click Place Order once.
5. Confirm one on-hold order is created.
6. Confirm redirect reaches `/crypto-pay/` with authorized order context.
7. Stop before invoice generation unless the active batch explicitly includes Crypto invoice testing.

Visual closure:

```text
full-page Step 01, Step 02 and Step 03 at 1366 × 768
full-page Step 01, Step 02 and Step 03 at 390 × 844
full-page Step 01, Step 02 and Step 03 at 360 × 800
```

Pass criteria:

```text
three-step flow only
server-owned Step 04
one order per submit
normal and Crypto redirects intact
strict V2 visual match across widths
```

## 9. Batch 7 · R2 notice and error ownership matrix

Availability:

```text
Executable only after R2 notice ownership consolidation is installed.
```

Run in one session:

```text
missing required Billing field
malformed email
missing/unavailable shipping method when a safe test setup exists
empty coupon
invalid coupon
expired coupon when a test code exists
Terms not accepted
no payment method selected, when the UI permits clearing selection
provider/server-declined error where safely reproducible
repeated updated_checkout
repeated checkout_error
```

For every case confirm:

```text
notice text is server/native where applicable
notice appears once
notice is positioned near the owning Step
notice remains visible after scroll
notice does not become a vertical one-character column
notice remains readable at 1366, 390 and 360
```

Evidence:

```text
one screenshot per distinct notice-owner family; identical repeated cases may be grouped
```

## 10. Batch 8 · R3 backend-editable Checkout copy

Availability:

```text
Executable only after R3 Customizer/theme-mod mapping is installed.
```

Procedure:

1. Export or record current Checkout theme-mod values before editing.
2. Open the relevant Customizer section.
3. Change one field at a time: title, kicker, intro, step labels, panel headings/copy, summary/coupon/trust copy as exposed.
4. Publish.
5. Refresh Checkout and confirm only the intended text changed.
6. Restore the original value.
7. Test one blank value and confirm a safe fallback appears.
8. Confirm dynamic product, price, shipping, gateway, validation and status data never become static editable copy.

Pass criteria:

```text
all intended presentation copy editable
saved values persist
blank fallback safe
commerce truth remains native/dynamic
no second admin system introduced
```

Evidence:

```text
Customizer before/after screenshots for each control group
front-end before/after screenshot for each group
```

## 11. Batch 9 · R4 Step-04 result-status matrix

Availability:

```text
Executable only after R4 server-status mapping is installed.
```

Use existing/test orders where possible and avoid fake URL status switching.

Required states:

```text
processing
completed
pending
on-hold unpaid normal order
on-hold unpaid Crypto order
failed with WooCommerce recovery/pay URL where available
cancelled
refunded if supported
Sandbox Crypto success after payment_complete()
```

For each state verify:

```text
headline and body match the real server status
no unpaid/failed/cancelled order claims preparation or shipment
real order number/date/email/total/items/addresses remain correct
gateway-specific thank-you output remains present
recovery/support link is safe and state-appropriate
guest order access works with the real order key
```

Evidence:

```text
one full result-page screenshot per state
order-admin screenshot showing the matching real status
```

## 12. Batch 10 · R5 historical CSS cleanup regression

Availability:

```text
Executable after each bounded R5 cleanup set is complete; final pass after R5 closure.
```

Check:

```text
Checkout Step 01/02/03 at 1366, 390 and 360
native notices still visible
no stale Review surface
no full-width shell regression
Cart unchanged
Shop archive unchanged
Single Product unchanged
Header unchanged
Footer unchanged
Thank You/result layout unchanged except authorized R4 behavior
```

Pass criteria:

```text
Checkout remains accepted
all protected Project-2 surfaces remain visually/operationally unchanged
```

Evidence:

```text
Checkout screenshots at three widths
one representative screenshot each for Cart, Shop, Single Product, Header/Footer and result page
```

## 13. Batch 11 · R6 Crypto V0.2.5 legacy regression and decision

Availability:

```text
Executable after R4/R5 and before any separately authorized plugin upgrade.
```

Run:

```text
Step-03 Crypto gateway render
single on-hold order creation
/crypto-pay/ authorization
invoice creation
invoice reuse on refresh/re-entry
invalid transaction hash rejection
receiver mismatch rejection
amount mismatch rejection
old transaction rejection
unconfirmed/not-found behavior
Sandbox success exactly once
order becomes Processing after simulated success
canonical WooCommerce Step 04 result
unpaid/on-hold result uses Pending semantics
```

Security/evidence rules:

```text
redact order key and transaction hash
never expose private keys or wallet seed
confirm no QR, wallet connection, countdown or auto-monitoring is falsely presented in V0.2.5
```

Decision after regression:

```text
Option A: keep V0.2.5 legacy path for this release
Option B: open a separate plugin-upgrade ownership/migration plan
```

## 14. Batch 12 · R7 full commerce regression

Availability:

```text
Executable after R1–R6 are accepted.
```

One consolidated operational matrix:

### Customer fields

```text
guest checkout
required fields
malformed email
country/state
ship-to-different-address
browser refresh/back
Order notes persistence
```

### Shipping/totals

```text
current single $8.99 method
subtotal/shipping/tax/total refresh
selected method persistence
multi-rate/address-driven cases only when such methods actually exist
```

### Coupon

```text
empty
invalid
expired where available
valid
remove
reapply
notice ownership
```

### Gateways

```text
all enabled gateways render
switching
provider fields/nonces
missing selection
provider error where available
successful redirect
```

### Order safety

```text
one click → one order
double-click protection
processing overlay
server validation
stock reduction/status behavior
order notes stored in admin
emails where the environment permits
```

### Crypto/result

```text
V0.2.5 accepted path or separately approved upgraded path
Sandbox success
unpaid/on-hold
invalid proof cases
canonical result
status semantics
```

Pass criteria:

```text
no operational regression across the complete WooCommerce path
```

## 15. Batch 13 · R8 final strict 1:1 acceptance

Availability:

```text
Executable only after R7 passes.
```

Comparison conditions:

```text
browser zoom 100%
same viewport for live and static reference
fresh page load
real dynamic WooCommerce data
full-page screenshot
```

Required viewport/surfaces:

```text
1366 × 768: Step 01, Step 02, Step 03, notices, processing, result states
390 × 844: same surface family
360 × 800: same surface family
all enabled gateway families
Crypto legacy/approved state
Confirmed, Pending/on-hold, Failed and Cancelled results
complete mobile flow including Footer
backend copy editability already proven
```

Final acceptance questions:

```text
Does geometry match the accepted V2 reference?
Does typography match?
Do spacing and hierarchy match?
Is responsive composition equivalent?
Are differences limited to real dynamic commerce data, accessibility and documented production-safe corrections?
Is WooCommerce still authoritative?
Are all controls visible and usable?
Are notices unique and readable?
Is backend copy editable?
Did R7 pass?
Does the user explicitly approve?
```

Only when every answer is yes may the status change to:

```text
Checkout: Completed 1:1
```

Otherwise:

```text
Checkout: Not done
```

## 16. Current stop point

```text
Ship-to-different-address expansion: passed
Ship-to-different-address collapse: user-confirmed passed
Batch 1 remaining actions: malformed-email regression + valid Step-01 advance/value persistence
Future batches: execute only after their owning implementation is Ready for acceptance
Checkout: Not done
```
