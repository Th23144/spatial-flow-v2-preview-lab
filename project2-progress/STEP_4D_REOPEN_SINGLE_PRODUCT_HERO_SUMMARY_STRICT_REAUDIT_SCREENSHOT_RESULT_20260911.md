# Project 2 · Step 4D-REOPEN · Single Product Hero / Summary strict re-audit screenshot result · 2026-09-11

## Current stage

Step 4D-REOPEN · Single Product historical-PASS back-audit.

Single Product overall binary status remains:

```text
Not done
```

## Evidence reviewed

Fresh user-supplied current live/local screenshots:
- desktop full-page screenshot including the complete Hero / Summary, Product Attributes and lower Single Product sections;
- 390px mobile upper-page screenshot covering Gallery, Summary, options, cart, utility actions, Trust Strip, Product Attributes and Section 01/02 transition;
- 390px mobile lower-page screenshot covering Section 03, accepted Related Products and Footer transition.

Reference authority:

```text
preview/spatial-flow-product-v1.html
```

Current source evidence reviewed:

```text
woocommerce/single-product.php
assets/css/spatial-flow.css
```

## Fresh result

The current Hero / Summary must NOT be treated as strict 1:1 complete yet.

### PASS / materially aligned

The fresh screenshots confirm the following current areas are materially aligned with the reference direction and do not need to be reopened merely because of historical uncertainty:

- desktop Hero uses the intended two-column composition;
- gallery main media is 4:5;
- four thumbnails render below the main media;
- desktop Summary hierarchy is present: editorial meta → title → subtitle → price/shipping → Placement Suggestion → excerpt → variations → quantity/Add to Cart → utility actions → Trust Strip;
- variation controls are visually flattened rather than enclosed in a large white card;
- quantity/Add to Cart remain WooCommerce-authoritative;
- Wishlist / share utility actions are present;
- Trust Strip is three-column on desktop and stacks on mobile;
- Product Attributes remain an open information band rather than a large framed card;
- 390px Hero/Summary stacks into one column without visible horizontal overflow;
- long real product/variation content wraps without a clear structural break.

### STRICT 1:1 FAIL — Gallery control language

The static reference Gallery does NOT use the current live gallery chrome.

Reference behavior / composition:

```text
- top-left editorial badge: e.g. `No. 07 · One of one`
- bottom-right hint: `Click thumb to view`
- four thumbnails numbered `01 / 02 / 03 / 04`
- active thumbnail outline
- no large round previous/next arrow controls
- no `1 / 4` pill/counter as the primary gallery label
```

Current live screenshots/source instead show:

```text
- round previous / next buttons over the main image
- bottom-left `1 / 4` counter
- no reference-style top-left badge
- no reference-style bottom-right hint
- no visible 01 / 02 / 03 / 04 thumbnail numbering
```

Therefore Gallery remains reopened inside Hero / Summary and the Hero / Summary block cannot be accepted strict 1:1 yet.

### OWNERSHIP / SEMANTIC DRIFT — Hero editorial identity

Current `single-product.php` still builds the top Hero editorial metadata from WooCommerce native SKU:

```text
WooCommerce SKU → `SKU · ...`
```

A later accepted product-ownership decision for Related Products established:

```text
WooCommerce SKU = inventory / operations identity
_sf_piece_reference = public Spatial Flow Reference / Piece Code
```

The user also stated that current test products do not yet have real production SKU values.

Therefore the Hero metadata ownership is now inconsistent with the later accepted product architecture and must be explicitly corrected/decided during this back-audit. Do not fabricate a public code when `_sf_piece_reference` is empty.

## Not classified as defects in this audit

The following are intentionally NOT treated as strict-reference defects:

1. A disabled/grey Add to Cart state before required WooCommerce variation selection. The reference is static; live WooCommerce purchase-state authority must be preserved.
2. A different number or naming of real variation groups from the static sample. Real product data may legitimately differ; only the visual treatment is compared.
3. Main-site Header differences. Header is a separately reopened Project 2 surface and is not part of this bounded Hero / Summary decision.
4. Section 03 numbering, because the user explicitly selected Option C to remove it.
5. Reviews, because the user explicitly omitted Reviews for the current storefront version.

## Source files potentially affected by the next correction

Likely owners, subject to source mapping before edit instructions:

```text
woocommerce/single-product.php
assets/css/spatial-flow.css
existing gallery JS owner (must be located before changing gallery controls)
```

`functions.php` should only be touched if a version/cache bump or metadata ownership implementation requires it after source mapping.

## What is intentionally NOT authorized yet

No live source edit is authorized by this record alone.

Do not:
- delete gallery navigation logic before locating its JS owner;
- hardcode reference sample values such as `No. 07 · One of one`;
- force a default variation merely to make Add to Cart look active;
- alter WooCommerce variation/cart behavior;
- resume Gift CTA / Closing Editor's Note work.

## Acceptance state

```text
Hero / Summary strict re-audit: FAIL / CORRECTION REQUIRED
Gallery visual-control language: REOPENED
Hero public identity ownership: REOPENED / DECISION-CORRECTION REQUIRED
Desktop frame / general Summary hierarchy: PASS FOR CURRENT AUDIT
390px stacking / no-overflow state: PASS FOR CURRENT AUDIT
User acceptance of corrected Hero / Summary: PENDING
```

## Current stop point

```text
HERO / SUMMARY STRICT 1:1 CORRECTION PLANNING
```

## Exact next action

```text
locate the current gallery JavaScript owner and all gallery-control CSS/markup ownership
→ map the minimum reference-faithful replacement for arrows/counter vs badge/hint/thumb numbers
→ map Hero metadata from Woo SKU to public Reference / Piece Code without fake fallback
→ record the bounded implementation delta
→ only then issue manual source-edit instructions
```

Gift CTA / Closing Editor's Note remain paused.
