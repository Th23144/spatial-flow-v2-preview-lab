# Project 2 · Step04 Strict 1:1 Delta Audit COMPLETE + Correction Batch Gate · 2026-08-26

## Status

Step04 strict 1:1 delta audit is complete enough to issue one coherent manual anchored correction batch.

No production file is modified by this record.

## Authoritative visual reference

- `preview/spatial-flow-thank-you-v1.html`
- `preview/spatial-flow-thank-you-v1.css`
- shared shell: `preview/spatial-flow-checkout-flow-v1.css`

Accepted global production Header/Footer remain outside Step04 body parity except where inherited page-frame spacing creates visible Step04 transition defects.

## Current live source baseline

`assets/css/spatial-flow.css`

```text
bytes: 587216
logical lines: 20639
SHA256: cba94f9615248a86f8d8d23b806621ed04f7b664e8c3a47727036510a33efef9
brace balance: 3281 / 3281
comment balance: 275 / 275
```

`functions.php`

```text
bytes: 612013
logical lines: 11689
SHA256: 568a904d67e2b2ed2c099b8c64e6b15a0f59c344d8f59253083bba742940f741
version: 2.7.15
```

## Deterministic strict-parity deltas

### Delta 01 — host wrapper vertical whitespace survives

Earlier Order Received CSS owns `.entry-content > .woocommerce` with desktop `padding: 58px 0 76px` and mobile `padding: 34px 0 54px`. The Step5F block only reset left/right padding. Astra/host bottom spacing can also survive because `#primary` was only reset on the top side.

Visible result: white band below the accepted live header and an oversized white transition before the accepted footer.

Correction: make the Step5F host-reset block authoritative on all four margin/padding sides for the Order Received page.

### Delta 02 — Result panel collides with production Woo/Astra `.woocommerce-order-details`

The static reference `.result-panel` is a transparent editorial section with only vertical spacing and a bottom rule. The live `Your Order Receipt` section also carries the production class `.woocommerce-order-details`; the supplied screenshots show an opaque white surface not present in the static reference.

Exact external theme declaration is outside the uploaded project CSS, but ownership is isolated to the production Woo/Astra class collision. The Step5F canonical owner currently does not neutralize background/padding/radius/shadow/overflow at sufficient specificity.

Correction: make `body.woocommerce-order-received .sf-order-result-v3 .result-panel` authoritative for the complete static-reference panel surface.

### Delta 03 — global Checkout `table.shop_table` radius beats the Step5F receipt table

Earlier project CSS contains:

```css
.woocommerce-cart table.shop_table,
.woocommerce-checkout table.shop_table {
  border-radius: 22px !important;
  overflow: hidden;
  background: #fff;
}
```

Current Step5F uses `.sf-order-result-v3 .result-order-table` with `border-radius: 0 !important`, but the earlier selector has higher specificity because it includes the `table` element plus two classes. Therefore the global 22px radius can win even though Step5F appears later.

Correction: raise the canonical receipt-table selector specificity within the existing Step5F block and explicitly restore `overflow: visible`.

### Delta 04 — legacy Order Received address typography beats the strict-reference address rule

Earlier project CSS contains:

```css
body.woocommerce-order-received .woocommerce-customer-details address {
  color: rgba(33, 26, 22, .68);
  font-size: 14px;
  line-height: 1.75;
}
```

Current strict reference requires 11px / `var(--soft)`. The legacy selector has higher specificity than `.sf-order-result-v3 .result-address-card address`, so the old 14px rule survives on the live Billing/Shipping address text.

Correction: raise Step5F address specificity and explicitly own margin/padding/border/color/font-size/font-style/line-height.

## Items source-matched to reference and not changed in this batch

The current Step5F source already matches the approved static reference for the core geometry below; no speculative change is authorized until the first correction batch removes the deterministic cascade blockers:

- result intro `1.02fr / .98fr`, 72px gap
- result shell `1.42fr / .82fr`, 72px gap
- desktop title/lede/status sizes
- five-column overview target geometry
- 3-column payment facts
- 3-column timeline
- address-card grid and surface
- receipt-summary width/padding/sticky target
- 1120 / 780 / 420 result breakpoints
- project-integrated 1040 / 720 gutter breakpoints

After the deterministic blockers are corrected, strict 1:1 re-screenshots must determine whether any residual typography or geometry delta remains.

## Internal correction candidate validation

A bounded internal candidate was generated from the accepted live CSS using only four anchored replacements inside the existing Step5F canonical block.

Expected corrected CSS fingerprint:

```text
bytes: 587405
logical lines: 20635
SHA256: 307958483ead674b91799908d5e64b3a4407154cc0fd1d394354dac4fdc013f8
brace balance: 3281 / 3281
comment balance: 275 / 275
tinycss2 parse errors: 0
```

Expected net delta:

```text
+189 bytes
-4 logical lines
```

A final cache-busting version change `2.7.15 -> 2.7.16` is also required after the CSS replacements; byte and line count remain unchanged for `functions.php`.

## Mandatory next action

Deliver the entire manual anchored correction batch at once:

1. CSS host wrapper reset
2. CSS result-panel authority reset
3. CSS result-order-table specificity reset
4. CSS customer-address specificity reset
5. functions.php version 2.7.15 -> 2.7.16

Then user returns both edited files once for source validation.

Do not request intermediate conversational confirmation between these same-batch replacements unless a required search match count is not exactly one.

After source validation, re-capture only:

- Confirmed desktop
- Confirmed mobile 390px
- Pending desktop
- Pending mobile 390px

for strict 1:1 reacceptance.
