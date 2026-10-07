# Services Accepted + FAQ / Help Wishlist-led Visual Study 01

Date: 2026-09-24
Project: Spatial Flow V2 / 项目二换皮工程

## Services user decision

The user stated that the Services page is broadly fine.

Treat:
SERVICES WISHLIST-LED 01 = USER VISUALLY ACCEPTED FOR THIS DESIGN BATCH.

No production WordPress mapping has been performed.

## FAQ / Help temporary artifact

Branch:
`temp-faq-wishlist-led-01`

Artifact:
`temp-preview/Spatial-Flow-FAQ-Wishlist-Led-01.html`

## Existing functional structure retained

The old Project-2 FAQ page was read only to preserve its real support roles:
- Orders
- Shipping
- Returns
- Products
- Services
- Contact support route
- Track Order route

The old visual styling was not inherited.

## Design system applied

- Header / Footer = 1720px shell
- page body = 1480px + internal padding
- Cormorant Garamond = editorial headings
- Inter = body / functional copy
- JetBrains Mono = restrained metadata
- sage italic emphasis = #4A5D5A
- FAQ answers use native `details / summary` accordions rather than heavy cards
- left category index retains a quiet editorial structure
- dark editorial footer + trust rail
- responsive rules at 1040px / 600px

## Static verification

PASS:
- HTML structure balanced
- CSS braces balanced
- JavaScript syntax valid
- all internal category anchors resolve
- 1480 / 1720 hierarchy retained
- 5 FAQ categories
- 15 FAQ items
- native accordion semantics
- green editorial emphasis present
- footer trust rail present
- no fixed page-level widths or min-widths above 390px found

## Current gate

SERVICES = USER VISUALLY ACCEPTED.
FAQ / HELP WISHLIST-LED 01 = READY FOR USER VISUAL REVIEW.


## Production Services source audit + one-shot mapping batch — 2026-10-07

Fresh audit against the current returned production files and the accepted `temp-services-wishlist-led-01` authority found:
- `/services/` is already a native theme-owned route (`spatial_flow_services_native_template()` at template_redirect priority 21), not an Elementor-dependent presentation;
- visible Services copy is Customizer/theme-mod owned through `sf_services_*` and must remain backend-editable;
- the current production Step 5G presentation is an older rounded/card-heavy design and does not match the user-accepted Wishlist-led 01 static authority;
- the accepted authority uses the locked 1480px editorial body, Cormorant/Inter/JetBrains type system, row-based service index, four-step method list, editorial request form, and text-column service boundaries;
- no booking engine, payment flow, quote system, subscription or hidden commerce may be introduced.

Functional-owner decision:
- keep the native `/services/` route and Customizer ownership;
- keep the existing native Product Guidance request backend (`spatial_flow_product_guidance_submit`, private `sf_product_guidance` entries) as the form owner;
- the Services request form may visually expose Name / Email / Service / Context, but Name + Service + Context are composed into the existing `interest` payload and `capture_type=services`; no new storage schema or service system is created.

Prepared one-shot candidate:
- version 2.7.95 -> 2.7.96;
- replace the complete self-contained Step 5G Services PHP block only;
- replace the complete self-contained Step 5G Services CSS block only;
- current real global Header/Footer remain untouched;
- preserved existing stored `sf_services_*` theme mods where keys still apply; no settings are deleted/reset.

Candidate preflight:
- full `functions.php` PHP lint PASS;
- Services request inline JS `node --check` PASS;
- CSS braces 3575/3575;
- CSS comments 258/258;
- tinycss2 top-level parse errors 0;
- diff outside Step 5G = only version bump; no unrelated PHP/CSS drift.

Status:
**SERVICES WISHLIST-LED 01 PRODUCTION MAPPING 2.7.96 READY / USER MANUAL APPLY + RETURNED-FILE SOURCE GATE PENDING**


## Services 2.7.96 returned-file Source Gate — 2026-10-07

Returned files:
- functions(20261007-093714).php — version 2.7.96, 722,724 bytes / 15,143 file lines, SHA256 556b1e606edc90fef0e04954f2b8d1764e88487eddc676f0a630c14aa2f963c8;
- spatial-flow(20261007-093714).css — 637,804 bytes / 23,855 file lines, SHA256 3f206057f30bd4d2a3b09f046b697a28102d41609178341ba0624fb2dc284df5.

Validation:
- php -l PASS;
- child version 2.7.96 and enqueue cache version aligned;
- Step 5G PHP START/END markers exactly 1/1;
- Step 5G CSS START/END markers exactly 1/1;
- new Services renderer outputs .sf-services-native.sf-services-v2 and all v2 structural classes;
- old Services render selectors (.sf-services-hero / .sf-services-card / .sf-services-visual) are absent from current PHP and CSS;
- Services Customizer now owns toolbar, service rows/meta/CTA, method, request form copy, boundary copy, labels/placeholders and URLs through sf_services_* theme mods;
- request form reuses existing spatial_flow_product_guidance_submit owner, posts capture_type=services and composes Name / Service / Context into existing interest payload;
- existing Product Guidance handler accepts sanitized capture_type without restricting services and stores it in _sf_product_guidance_capture_type;
- Services inline JS node --check PASS;
- CSS braces 3575/3575, comments 258/258, tinycss2 errors 0;
- CSS is byte-identical to the already accepted 09:27:46 Services CSS;
- diff against 09:27:46 PHP outside version bump + Step 5G is byte-identical after normalization: no unrelated PHP drift.

Verdict:
**SERVICES 2.7.96 SOURCE GATE PASS / BACKEND EDITABILITY OWNER PASS / FRONTEND RUNTIME VISUAL GATE READY**
