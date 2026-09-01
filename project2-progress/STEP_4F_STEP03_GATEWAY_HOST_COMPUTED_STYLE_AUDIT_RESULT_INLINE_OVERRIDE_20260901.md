# Project 2 · Step03 Gateway Host Computed-Style Audit Result — Inline Override Proven · 2026-09-01

## Trigger

User returned the one-pass runtime diagnostic requested by:

`project2-progress/STEP_4F_STEP03_GATEWAY_HOST_LIVE_COMPUTED_STYLE_AUDIT_START_20260901.md`

Diagnostic id:

`SF_STEP03_GATEWAY_HOST_COMPUTED_STYLE_AUDIT_20260901`

Viewport:

- 1920 × 991
- DPR 1
- scale 1

## Runtime result

### Host layers are not the visual culprit

`#payment`

- background: transparent
- border: 0
- border-radius: 0
- box-shadow: none
- padding: 0

`ul.payment_methods`

- background: transparent
- border: 0
- border-radius: 0
- box-shadow: none
- padding: 0

This proves the large rounded/bright payment surfaces are not coming from the `#payment` or `ul.payment_methods` host itself.

### Gateway row effective appearance

Selected BACS `li.wc_payment_method` computes to:

- padding: 12px
- background: `rgb(250, 250, 250)`
- border: `1px solid rgb(237, 237, 237)`
- border-radius: 14px
- margin-bottom: 10px
- box-shadow: none

The unselected Spatial Flow Crypto row computes to the same rounded light-gray row surface.

### Selected payment box effective appearance

Selected BACS `.payment_box` computes to:

- margin-top: 10px
- padding: 12px
- background: `rgb(255, 255, 255)`
- border: `1px solid rgb(237, 237, 237)`
- border-radius: 12px
- box-shadow: none

## Cascade proof / actual winning source

The intended `checkout-safe5.css?ver=2.7.22` rules are present in the live page. They currently intend, on desktop:

- gateway row padding 18px
- border-radius 0
- background `rgba(250, 247, 243, 0.35)`
- payment box margin-top 14px
- padding 15px 16px
- border-radius 0
- background `var(--sf-safe5-soft)`

However, the runtime matched-rule audit found a later/stronger stylesheet with no external `href`, reported as:

`inline/style`

It contains `!important` declarations for the exact affected selectors.

For gateway rows:

```css
body.woocommerce-checkout #payment .wc_payment_method
```

Winning declarations include:

```css
margin: 0 0 10px !important;
padding: 12px !important;
background: rgb(250, 250, 250) !important;
border: 1px solid rgb(237, 237, 237) !important;
border-radius: 14px !important;
```

For payment boxes:

```css
body.woocommerce-checkout #payment .payment_box
```

Winning declarations include:

```css
margin-top: 10px !important;
padding: 12px !important;
background: rgb(255, 255, 255) !important;
border: 1px solid rgb(237, 237, 237) !important;
border-radius: 12px !important;
```

## Conclusion

The visual mismatch is now causally proven.

The canonical SAFE5 desktop payment-host rules are **not** failing because of selector weakness against Astra. They are being deliberately overridden by a separate inline stylesheet using `!important`.

Therefore:

- do **not** add stronger `!important` patches to `checkout-safe5.css`;
- do **not** rewrite `#payment` or `ul.payment_methods`;
- do **not** alter WooCommerce gateway structure or payment logic;
- first identify the owner/source of the anonymous inline stylesheet and remove/correct the obsolete override at its actual source.

## Repository search result

A repository code search for the exact live selector / override signature did not locate the winning inline rule in the tracked source corpus. This increases the likelihood that the rule is generated from a live-only WordPress source such as an inline-style owner, Customizer/Additional CSS, WPCode-like snippet, `wp_add_inline_style`, theme/plugin generated style, or dynamically inserted `<style>` element.

The exact origin is **not yet proven** and must not be guessed.

## Next required one-pass runtime audit

Identify the DOM owner of the `inline/style` stylesheet that contains the two winning selectors above.

Capture at minimum:

- stylesheet index
- owner node tag
- owner node `id`
- owner node `class`
- owner node attributes
- parent node identity
- relevant stylesheet rule text
- beginning/end or bounded text content of the owner `<style>` element
- whether the style element already exists in initial DOM or appears dynamically

No implementation source modification before this owner is identified.
