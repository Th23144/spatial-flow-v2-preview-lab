# Project 2 · Step04 Runtime Partial Review + Refund Ledger Correction · 2026-08-26

## Scope reviewed

User supplied runtime evidence covering:
- Step04 Pending page / receipt and summary
- order-pay recovery page
- Step04 Processing / Confirmed desktop full-page capture
- Step04 Processing / Confirmed mobile full-page capture
- question about Test 11 duplicate Woo order tables
- question about Test 12 gateway hook preservation
- unexpected 0.00 total after changing an order to Refunded and later back to Pending/Processing

## Test 11 — duplicate order-details rendering

Result: PASS from supplied Step04 screenshots.

The Step04 page contains:
- one canonical detailed `Your Order Receipt` table in the main column
- one deliberately separate compact `Receipt Summary` in the side column

The side summary is part of the accepted S7 composition and is not a duplicate Woo default `order_details` table.
No second native Woo order-details table or duplicated billing/shipping block is visible in the supplied Step04 evidence.

## Test 12 — gateway hook meaning

Purpose: verify gateway/plugin-owned Thank You output survives the custom Step04 template and is rendered once, without the native Woo order-details table duplicating.

The supplied Pending screenshot already shows a gateway-owned `Our Bank Details` block inside the Step04 summary area. This is evidence that generic gateway Thank You output is being preserved.

Classification:
- generic gateway-hook preservation: PASS from current evidence
- Crypto-specific Thank You hook: not yet runtime-verified in this batch unless the user opens an existing Crypto order-received result and confirms its plugin-owned notice/output appears exactly once
- no new real Crypto transfer is required for this check

## Refund / 0.00 finding — expected WooCommerce ledger behavior, not Step04 arithmetic defect

User changed the same test order to `Refunded`, then later changed status back to `Pending payment` / `Processing`. The Step04 page and order-pay page continued to show:
- `Refund -$29.99`
- `Order fully refunded.`
- effective total `0.00`

WooCommerce core explains this behavior. Current WooCommerce `wc_order_fully_refunded()` is hooked to `woocommerce_order_status_refunded`; when the order enters Refunded, core creates a WC refund object for the remaining refundable amount with reason `Order fully refunded.`. The hook does not perform a gateway refund by itself, but it does mutate the WooCommerce order/refund ledger. Changing the order status back later does not delete that refund object.

Therefore:
- Step04 is correctly reading WooCommerce's mutated order ledger.
- order-pay is correctly reading the same ledger.
- the old test order is no longer valid for clean Pending/Processing amount/recovery tests.
- prior test instruction to cycle one reusable order through Refunded and then back to other states was incorrect test design and is withdrawn.

Corrected runtime method:
- use one clean reusable order for Processing / Completed / Pending / On-hold / Failed / Cancelled / recovery / URL tamper checks
- use a separate disposable order for Refunded, and perform Refunded last
- after a disposable order has entered Refunded, do not reuse it for later amount/recovery assertions
- no database/refund-object deletion is required just to continue acceptance; create a fresh local test order instead

## Test 13 / 14 supplied evidence

Processing / Confirmed desktop and mobile screenshots were supplied.

Visual inspection result:
- desktop composition follows the accepted S7 family: intro, 4-step progress, status panel, five-item overview, detailed receipt, payment facts, timeline, addresses, side receipt summary
- mobile composition collapses correctly to one-column flow, moves receipt summary below main content, and shows no obvious horizontal page overflow or clipped controls in the supplied full-page capture
- this matches the static responsive contract where the result intro/shell collapse below 1120px, receipt summary becomes static, and below 420px the overview/payment facts become one column

However, the screenshots were produced from the same order after it had already entered Refunded. They visibly contain `Refund -$29.99`, `Order fully refunded.` and net total `0.00` while the status presentation is Processing/Confirmed. That is a contaminated test fixture, not a valid clean Processing financial state.

Therefore:
- Test 13 desktop structural/visual composition: provisional PASS, but clean evidence must be retaken before final strict 1:1 closure
- Test 14 mobile structural/responsive composition: provisional PASS, but clean evidence must be retaken before final strict 1:1 closure
- only the canonical clean Processing desktop/mobile and clean Pending desktop/mobile screenshots need to be retaken on a fresh order; there is no need to rerun the entire 17-test batch from zero

## Current status

```text
Step04 source validation: PASS
Test 11 duplicate rendering: PASS
Test 12 generic gateway hook: PASS
Test 12 Crypto-specific hook: pending/unavailable until old Crypto result is checked
Refund 0.00 behavior: explained by WooCommerce refund object creation; not a Step04 defect
Single-order-through-Refunded test method: WITHDRAWN
Test 13 Processing desktop: provisional visual PASS; clean-order retake required for final closure
Test 14 Processing mobile: provisional visual PASS; clean-order retake required for final closure
Step04 final runtime acceptance: NOT YET CLOSED
Checkout: Not done
```
