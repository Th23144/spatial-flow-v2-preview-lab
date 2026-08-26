# Project 2 · Step 04 Runtime Acceptance Reissued · Detailed · 2026-08-26

User stated that several days had passed and they no longer remembered what the 17 runtime checks were or how to perform them.

This record reissues the full Step04 runtime acceptance package in one consolidated batch, with detailed operational instructions. No code change is made by this step.

Current source state remains the already-accepted Step04 manual deployment:
- functions.php 2.7.15 source validation PASS
- woocommerce/checkout/thankyou.php source validation PASS
- assets/css/spatial-flow.css source validation PASS

Runtime acceptance is still OPEN.

## Execution policy

Do not split this same-batch runtime acceptance into repeated wait-for-response substeps. The user may complete the entire checklist and return one consolidated evidence package.

## Safety boundaries

- Use local/test WooCommerce orders only.
- For Refunded status semantics, change the order status only; do not press the actual WooCommerce Refund action and do not trigger a real payment-provider refund.
- Do not create arbitrary real blockchain TXIDs.
- Do not create a real Crypto transaction solely to test the Thank You gateway hook. Use an existing accessible Crypto order if available; otherwise record runtime unavailable.
- Preserve and reuse the same order/order-received URL where practical so the matrix proves server-authoritative status changes without duplicate-order creation.

## Required matrix

0. Baseline preparation and viewport/cache conditions.
1. Processing semantics.
2. Completed semantics.
3. Pending payment semantics.
4. On-hold semantics.
5. Failed semantics.
6. Cancelled semantics.
7. Refunded semantics.
8. Same-order recovery CTA behavior.
9. prototype_result URL-tampering resistance.
10. Real WooCommerce order-data fidelity.
11. Duplicate-rendering audit.
12. Gateway hook preservation with an existing Crypto order when available.
13. Processing desktop strict 1:1.
14. Processing mobile strict 1:1.
15. Pending desktop strict 1:1.
16. Pending mobile strict 1:1.
17. Additional-state visual-system check for Completed / On-hold / Failed / Cancelled / Refunded.

Note: historical wording called this a 17-step package while numbering 0-17. The operational package contains 18 numbered entries including preparation item 0. Preserve this numbering to avoid changing the previously issued checklist.

## Acceptance evidence package

Preferred screenshots:
- Processing desktop full page
- Processing mobile full page
- Pending desktop full page
- Pending mobile full page
- Completed desktop first screen
- On-hold desktop first screen
- Failed desktop first screen
- Cancelled desktop first screen
- Refunded desktop first screen

Text results:
- Recovery CTA: PASS / FAIL
- prototype_result tamper: PASS / FAIL
- Gateway hook: PASS / FAIL / unavailable
- Any mismatch in real Woo data or duplicate sections

Checkout remains `Not done` until this Step04 runtime acceptance closes and the reopened Crypto V0.3.0 transfer-button typography mismatch is fixed and accepted.
