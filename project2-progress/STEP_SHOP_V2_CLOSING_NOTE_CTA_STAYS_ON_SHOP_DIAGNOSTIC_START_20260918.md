# Shop V2 — Closing Note CTA stays on Shop: diagnostic START

Date: 2026-09-18

## Runtime result

After removing the duplicate lower product-contact-band, the Shop bottom layout is visually correct.

However, clicking the remaining Write to the editors CTA does not leave Shop; the browser remains on the Shop page.

## Current source state

archive-product.php resolves the CTA URL in this order:

1. theme mod: sf_shop_v2_closing_button_url
2. fallback helper reading sf_product_contact_url with /contact/ default
3. final home_url('/contact/') fallback

The rendered anchor uses the resolved value directly.

No repository evidence was found for a JS click interceptor specifically targeting:
- .sf-shop-v2-closing-note__btn
- Shop closing-note clicks

## Working diagnosis

Most likely one of the stored theme-mod URL owners currently contains the Shop URL (or another same-page URL), so the source-level fallback never reaches /contact/.

Do not patch the template again until the actual stored values are read.

## Required read-only check

Inspect:
- sf_shop_v2_closing_button_url
- sf_product_contact_url
- home_url('/contact/')
- actual WordPress Contact page ID/status/permalink if present

Then classify whether the issue is:
A. wrong stored Customizer URL;
B. missing/incorrect Contact page;
C. unexpected redirect/routing behavior.

Status:
DIAGNOSTIC START / NO CODE CHANGE.