# Shop V2 — Closing Note CTA routing diagnosis RESULT

Date: 2026-09-18

## WP-CLI evidence

Read-only runtime output:
- sf_shop_v2_closing_button_url = empty
- sf_product_contact_url = #
- home_url('/contact/') = http://spatialflow.local/contact/
- get_page_by_path('contact') = NOT_FOUND

## Root cause

The CTA does not leave Shop because the fallback chain stops at sf_product_contact_url.

The current archive logic treats any non-empty sf_product_contact_url as valid. The stored value is exactly #, so the rendered href becomes #. Clicking it keeps the browser on the same Shop page.

Additionally, the template's final /contact/ fallback is stale or invalid for the current database because no published page exists at slug contact.

## Classification

Primary cause: B — stale/invalid shared URL owner.
Secondary issue: C — /contact/ fallback target does not exist.

## Next read-only step

Before changing code or database, identify the real current Contact page/slug in WordPress.

Search published/draft pages whose post_title or post_name contains contact.

After the real destination is confirmed, repair the owner rather than hardcoding a guess.

Status:
ROOT CAUSE CONFIRMED / AWAITING REAL CONTACT PAGE LOOKUP.