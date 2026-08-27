# Project 2 · Step 4F · Step04 White-Band Owner Diagnostic PASS + Gateway Output Fix Gate · 2026-08-27

## User evidence

The user returned the targeted production wrapper-chain diagnostic from the current Cancelled Step04 order-received page at 1920×991, DPR 1.

The diagnostic proves the visible white horizontal band owner and confirms the previously isolated gateway-output defect.

## White-band owner: PROVEN

Key runtime geometry:

```text
#primary top: 166px
#main.site-main top: 166px
article.ast-article-single top: 186px
.sf-order-result-v3 top: 186px
```

Computed style on `#main.site-main`:

```text
padding-top: 20px
padding-bottom: 44px
background-color: rgb(255,255,255)
```

At y=168–184 the `elementsFromPoint()` stack is topped by:

```text
main#main.site-main
background: rgb(255,255,255)
padding-top: 20px
```

At y=188 the Step04 root begins and owns the beige `#f6f1eb` surface.

Therefore the visible 20px white horizontal band is not a screenshot artifact, admin-bar artifact, breadcrumb margin, or Step04 root margin. It is the Astra/page-level `#main.site-main` top padding plus white background that Step5F did not yet own.

The same `#main.site-main` also has 44px bottom padding, so the correction should own both top and bottom padding for the order-received route.

## Correct CSS scope

Only on `body.woocommerce-order-received`, add `#main.site-main` to the existing Step5F page-frame reset selector so it receives:

```text
width:100%
max-width:none
margin:0
padding:0
```

Also explicitly set the Step04 page-level `#main.site-main` background to `#f6f1eb`.

Do not touch the accepted global header itself.

## Cancelled gateway payment instructions: source owner already proven

Current `woocommerce/checkout/thankyou.php` always captures:

```php
do_action( 'woocommerce_thankyou_' . $payment_method, $order->get_id() );
```

and renders `$payment_content` whenever non-empty. This allows BACS `Our Bank Details` to remain visible on terminal states such as Cancelled.

Required behavior:

```text
show gateway-specific payment instructions only when:
- WooCommerce says the same order still needs payment; OR
- order status is on-hold (manual/offline gateway instructions may remain actionable)

hide gateway-specific payment instructions for:
- processing
- completed
- cancelled
- refunded
- any other state that neither needs payment nor is on-hold
```

General `woocommerce_thankyou` output must remain preserved because non-payment extensions may still legitimately render there.

## Manual correction gate

Next action is one consolidated manual anchored batch only:

1. `assets/css/spatial-flow.css` — own `#main.site-main` on Step04 and remove the 20px/44px white wrapper padding;
2. `woocommerce/checkout/thankyou.php` — state-gate only gateway-specific payment instructions while preserving the general Thank You hook;
3. `functions.php` — cache/version bump `2.7.17 → 2.7.18`.

Do not rerun the eight computed-parity captures until these two visible blockers are source-validated and visually rechecked first.
