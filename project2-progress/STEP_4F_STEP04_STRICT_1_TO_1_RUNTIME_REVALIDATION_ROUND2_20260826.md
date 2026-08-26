# Step 4F · Step04 Strict 1:1 Runtime Revalidation Round 2 · 2026-08-26

## Evidence received

User supplied four new live production captures after the 2.7.16 cascade-fix batch:

- Confirmed / Processing desktop full-page
- Confirmed / Processing mobile full-page
- Pending desktop full-page
- Pending mobile full-page

Current accepted source baseline remains:

- `functions.php` version `2.7.16`
- `assets/css/spatial-flow.css` SHA256 `307958483ead674b91799908d5e64b3a4407154cc0fd1d394354dac4fdc013f8`

## Round-2 review result

The deterministic cascade blockers identified in the prior audit are visibly corrected:

1. the large legacy white transition band below the live header is removed;
2. the Step04 host wrapper no longer introduces the old top/bottom padding band;
3. `Your Order Receipt` no longer renders as the old large white Woo/Astra card surface;
4. the receipt table presents as the flat square reference table rather than the legacy 22px rounded checkout table;
5. billing/shipping address typography now visually follows the smaller strict-reference treatment;
6. desktop main/summary composition, overview, facts, timeline and address grids remain coherent;
7. 390px mobile collapse remains coherent: single-column overview/facts, timeline/addresses stack, and summary moves below main content.

No new deterministic CSS-owner defect is established from these four captures.

## Important strict-acceptance boundary

These four live captures still include the logged-in WordPress admin toolbar, while the approved static reference does not. Also, strict 1:1 policy requires same-viewport comparison against the actual approved static reference, not visual plausibility alone.

Therefore the correct status is:

```text
Step04 source/cascade correction: PASS
Step04 round-2 structural visual regression: PASS
Step04 strict 1:1 final acceptance: PENDING PAIRED SAME-VIEWPORT REFERENCE COMPARISON
```

This is not a request to rerun the 17 runtime tests and not a request for more source changes.

## Mandatory next action

Capture the approved static reference and the live page under the same public-view conditions:

- no WordPress admin toolbar (logged-out/incognito public view)
- same browser zoom = 100%
- same desktop viewport for both reference and live
- same mobile viewport 390x844 for both reference and live

Required paired evidence:

1. Confirmed reference desktop + Confirmed live desktop
2. Confirmed reference mobile + Confirmed live mobile
3. Pending reference desktop + Pending live desktop
4. Pending reference mobile + Pending live mobile

Reference URLs:

- Confirmed: `https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/main/preview/spatial-flow-thank-you-v1.html`
- Pending: `https://raw.githack.com/Th23144/spatial-flow-v2-preview-lab/main/preview/spatial-flow-thank-you-v1.html?prototype_result=pending`

Production deviations that are explicitly allowed and should not be scored as visual failure by themselves:

- real WooCommerce order values/items/totals/addresses;
- gateway-owned Thank You output such as bank details;
- accepted site-wide live header/footer content where Project 2 already closed those global components;
- required production state/copy differences for Completed/Failed/Cancelled/Refunded beyond the two S7 reference states.

Do not mark Step04 Completed 1:1 until the paired comparison is accepted.
