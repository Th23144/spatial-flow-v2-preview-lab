# Project 2 · Step 4D REOPEN · Section 04 Reviews current-version omission decision · 2026-09-11

## User decision
The user explicitly decided not to include the product-review feature/section in the current Spatial Flow storefront version.

This supersedes the prior pending decision state for Section 04.

## Product decision
For the current production target:

```text
Section 04 · Quiet Notes / Reviews: INTENTIONALLY OMITTED / NOT IMPLEMENTED
```

This is a deliberate product-architecture decision, not an implementation omission or unfinished defect.

## Scope effect
Current Single Product architecture does not require a Reviews section in order to be considered complete.

Do not implement, add, or expose the following as part of the current Project 2 Single Product scope:
- WooCommerce review listing UI,
- rating aggregate UI,
- review submission form,
- guest review form,
- review-request email workflow,
- Review your order page,
- Read all reviews interaction,
- My Account / login / registration for review purposes.

## Preserved future option
This decision does not permanently prohibit reviews.

WooCommerce review capability may be reconsidered in a later product phase if real order volume, customer feedback volume, conversion needs, or brand strategy justify it.

If reopened later:
- use real WooCommerce reviews only,
- do not fabricate reviewers, quotes, ratings, dates, counts, or verified-owner status,
- account/login must not be introduced merely to support reviews unless separately authorized by the user.

## Reference handling
The static reference contains Section 04 · Reviews, but for the current product architecture that section is an intentional exception from strict visual duplication.

Therefore future strict 1:1 audits must not classify the absence of Section 04 Reviews as a missing block or failure.

## What was intentionally NOT changed
- no PHP/CSS/JS/source implementation was changed,
- WooCommerce review capability itself was not deleted from WordPress/WooCommerce,
- no review settings were changed,
- no account feature was added,
- Section 03 accepted implementation remains untouched.

## Current status
```text
Section 03 · Care & Ritual: ACCEPTED / CLOSED
Section 04 · Reviews: CURRENT-VERSION INTENTIONAL OMISSION / CLOSED AS PRODUCT DECISION
Single Product overall: Not done
```

## Exact next action
Re-open the authoritative Single Product remediation plan and identify the next unresolved item after the now-omitted Section 04, with particular attention to the remaining Closing Gift CTA, Closing Editor's Note decision, utility controls, and whole-page strict regression.
