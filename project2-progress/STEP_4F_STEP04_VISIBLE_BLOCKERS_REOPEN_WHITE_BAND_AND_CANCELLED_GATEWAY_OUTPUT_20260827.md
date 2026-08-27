# Project 2 · Step 4F · Step04 Visible Blockers Reopened · 2026-08-27

## Trigger

User supplied current desktop screenshots before rerunning the planned eight computed-parity captures and correctly identified two visually obvious unresolved problems.

The eight-capture rerun is therefore PAUSED. Strict 1:1 must not be declared or re-tested as a final gate while these visible blockers remain.

## Blocker A — white horizontal band below accepted header

Current production screenshot shows a clearly visible white horizontal band between the accepted global header and the beige Step04 Order Result surface.

Current Step5F CSS explicitly resets these order-received descendants:

- `.site-content .ast-container`
- `#primary`
- `.entry-content`
- `.entry-content > .woocommerce`

but the canonical Step5F owner does not yet prove ownership of every parent wrapper above `.entry-content`, including possible Astra wrappers such as `.site-content`, `#main` / `.site-main`, article / `.ast-article-single`.

Do not guess the CSS owner. Before patching, run one targeted wrapper-chain computed diagnostic on the current production Step04 page and capture top/bottom/height, margins, padding, background and display for the wrapper chain from `#page` through `.sf-order-result-v3` / breadcrumb.

This targeted diagnostic replaces the planned eight-capture rerun for now.

## Blocker B — cancelled order still displays BACS bank details

Current cancelled-order screenshot visibly shows `Our Bank Details` inside the receipt summary. This is a semantic/business-state defect, not merely a visual mismatch.

The Step04 source currently captures gateway-specific output through:

```php
do_action( 'woocommerce_thankyou_' . $payment_method, $order->get_id() );
```

and later renders `$payment_content` whenever it is non-empty, regardless of terminal order state.

The cancelled state contract itself says the order is closed and fulfilment must not continue, so actionable bank-transfer instructions must not be shown on a cancelled order.

Required correction direction:

- preserve WooCommerce gateway hooks;
- do not delete gateway integration;
- separate gateway-specific payment instructions from general Thank You hook output;
- show gateway-specific payment instructions only while payment is still genuinely relevant (for example `needs_payment()` and the on-hold/manual-confirmation family);
- suppress gateway-specific payment instructions for paid/terminal states such as processing, completed, cancelled and refunded;
- keep general non-payment Thank You output preserved unless runtime evidence proves it is also the source of the payment instruction.

This reopens the previous generic `gateway-owned Thank You output preservation` acceptance as a state-appropriateness check: hook preservation remains required, but preservation does not mean terminal states may display stale payment instructions.

## Current acceptance state

```text
Step04 functional/status matrix: previously mostly accepted, but terminal-state gateway-output appropriateness is REOPENED
Step04 strict 1:1: FAIL / OPEN
Eight computed-parity rerun: PAUSED
Checkout binary status: Not done
```

## Next action

1. Run one targeted wrapper-owner diagnostic for the white band.
2. Use that result to identify the exact CSS owner.
3. Issue one consolidated manual anchored correction batch covering:
   - the confirmed white-band owner in `assets/css/spatial-flow.css`;
   - state-gated gateway-specific output in `woocommerce/checkout/thankyou.php`;
   - cache/version bump in `functions.php`.
4. Validate returned source fingerprints/syntax.
5. Recheck the two visible blockers first.
6. Only after both blockers pass, resume the eight computed-parity captures.

No whole-file overwrite. No full 17-step matrix rerun.