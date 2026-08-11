# Step 4F · Product Packaging Strict 1:1 Visual Parity V1 Prepared

Date: 2026-08-11
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Scope

Runtime functionality has passed. This correction is visual/content parity only.

Explicitly excluded:

```text
- shared Checkout max width / shell frame
- 7fr / 5fr global column ratio
- global 80px column gap
- page gutters / overall width refinement
- Order Summary product-row cleanup
- shipping/payment/order business logic
- Packaging grouping/fee/session/order authority
```

The user's later overall-width/final geometry plan remains untouched.

## Repository reference differences addressed

Reference comparison identified the following live omissions/mismatches independent of global page width:

```text
- Standard Packaging detail helper copy
- Gift Packaging detail helper copy
- separate-packaging button open/close text parity
- workspace helper-copy parity
- Keep Together result note
- Custom item-centric intro full copy
- Custom Items header / 01-02-03 guidance
- Custom active-package heading / guidance
- Gift Packaging fee rule note below package results
- production-safe saved-state reassurance below Step 02 actions
- soft divider strengths inside Packaging
- Separate expanded Standard/Gift selector radio visual
- accepted B desktop Custom slot height / package heading details
```

## Current accepted live baselines

```text
functions.php
603,618 bytes
SHA256 aa3ff53e0358ee53c95883a24db735d952ce10d3ec9b55ed26a0fbf964d996aa

woocommerce/checkout/form-checkout.php
32,944 bytes
SHA256 a24dfe55faf50de56ff9eeb9e330195fbde2239ad5d60a31021292fe6d770be1

assets/js/checkout-safe5.js
55,288 bytes
SHA256 13fcd3799f6552685fc1baa14149fb13d6c17ce43068ea89ee771e968a5e516f

assets/css/checkout-safe5.css
127,509 bytes
SHA256 781440a52393f49e783486c80b68adc70d0f16bf5ace9c8c79eff6ba3b9245f9
```

## Offline-built V1 targets

```text
functions.php
607,140 bytes
11,605 logical lines
SHA256 7b4d84c84887265b06c04f33c43f60a9c9d48adf52564324f84d9512f0bc3eab
LF / no final newline
php -l PASS

woocommerce/checkout/form-checkout.php
36,184 bytes
653 logical lines
SHA256 28d8aeba51496ca1a95a1e1ccd0b12a85d71103e1dfaa759ccf02baba66cd208
CRLF / no final newline
php -l PASS

assets/js/checkout-safe5.js
56,572 bytes
1,697 logical lines
SHA256 496f5af965939c4f838a64a306761d4f151ab88c1acbe4b3980b884687ef0448
CRLF / no final newline
node --check PASS

assets/css/checkout-safe5.css
133,885 bytes
4,373 logical lines
SHA256 5221bfd175a5425cb34eb732b64a67c3d2595d1de1332cf0e02fa7e873a4d6e7
CRLF / no final newline
braces 516 / 516
comments 24 / 24
tinycss2 parse errors 0
```

## CSS target re-audit correction

Before manual delivery, the generated CSS diff was re-audited against the canonical static sources. One broad internal replacement had incorrectly softened the Packaging panel's outer bottom divider. That was corrected before installation instructions were issued.

Final V1 CSS now preserves the reference-strength outer panel divider while using `line-soft` only for the intended internal surfaces:

```text
- Packaging panel outer bottom divider: reference line strength retained
- item-to-item internal dividers: softened to reference line-soft
- expanded tier-switch divider: softened to reference line-soft
- Standard/Gift internal divider: softened to reference line-soft
- package details divider: softened to reference line-soft
```

The corrected CSS identity above supersedes the earlier prepared value `133,879 / 5002a16b...`.

## Change ownership

```text
functions.php:
- cache version 2.7.9 -> 2.7.10
- edits only inside existing SAFE5 Product Packaging Runtime Ownership for new/adjusted editable presentation copy

form-checkout.php:
- Packaging presentation DOM only
- no Step 01, Shipping native owner, Step 03 payment owner or Summary owner changes

checkout-safe5.js:
- existing initPackaging() owner only
- state/fee/grouping business semantics unchanged
- presentation visibility/text parity only

checkout-safe5.css:
- all changes remain inside existing SAFE5 Product Packaging Visual Ownership START/END block
- no new FIX block appended
- global shell geometry untouched
```

## Deferred item

Order Summary product-row divider/thumbnail visual cleanup remains recorded for a later Summary-specific pass.

Status: PREPARED / pending manual installation and runtime visual acceptance.
