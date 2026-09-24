# Project 2 — Task / Information Pages Master Regression Audit

Date: 2026-09-24
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User instruction

Do NOT begin WordPress production mapping yet.

Before mapping:
1. inventory every page in the current design batch;
2. provide repository old-reference preview links and external-AI ZIP counterpart names where they exist;
3. perform a unified regression audit across all accepted/current candidates;
4. reconcile the current local WordPress page inventory and identify any omitted page.

## Current batch — 8 design surfaces

| Surface | Current visual authority | Repository old reference | External AI ZIP counterpart |
|---|---|---|---|
| Wishlist | corrected Harmonized 02 / sage-accent commit `08a5368839eaa31992cb8ab5cc7e47a3b2c46253` | `preview/spatial-flow-wishlist-v1.html` | `Spatial-Flow-Wishlist-Edition-03.html` |
| Search | `temp-search-green-italic-03/temp-preview/Spatial-Flow-Search-Harmonized-01.html` | `preview/spatial-flow-search-v1.html` | `Spatial-Flow-Search.html` |
| 404 | `temp-404-wishlist-led-01/temp-preview/Spatial-Flow-404-Wishlist-Led-01.html` | `preview/spatial-flow-404-v1.html` | `Spatial-Flow-404.html` |
| Contact | `temp-contact-wishlist-led-01/temp-preview/Spatial-Flow-Contact-Wishlist-Led-01.html` | `preview/spatial-flow-contact-v1.html` | `Spatial-Flow-Contact.html` |
| Utility / Policy | `temp-policy-wishlist-led-01/temp-preview/Spatial-Flow-Policy-Longform-Reading-03-Final.html` | `preview/spatial-flow-utility-policy-v1.html` | `Spatial-Flow-Policy-System.html` |
| Services | `temp-services-wishlist-led-01/temp-preview/Spatial-Flow-Services-Wishlist-Led-01.html` | `preview/spatial-flow-services-v1.html` | NONE |
| FAQ / Help | `temp-faq-wishlist-led-01/temp-preview/Spatial-Flow-FAQ-Wishlist-Led-01.html` (Pass 04 typography state) | `preview/spatial-flow-faq-v1.html` | NONE |
| Track Order | `temp-track-order-wishlist-led-01/temp-preview/Spatial-Flow-Track-Order-Wishlist-Led-06.html` | `preview/spatial-flow-track-order-v1.html` | NONE |

External source batch:
`Spatial-Flow-Site-Pages.zip`

External batch additionally contained:
- `Spatial-Flow-Account.html`
- `Spatial-Flow-About.html`

Account remains optional / no live Woo My Account assignment.
About remains an intentionally separate brand-expression candidate and was not accidentally omitted from this batch.

## Unified static regression — common checks

Across the current 8-surface batch, the current candidates were checked for:
- 1480px body system;
- 1720px Header / Footer shell;
- Cormorant Garamond / Inter / JetBrains Mono roles;
- headline sage-italic treatment vs muted supporting italics;
- functional form typography;
- HTML/body balance;
- CSS brace balance;
- JavaScript syntax;
- duplicate IDs;
- broken internal anchors;
- mobile breakpoints;
- page-level hard-width / min-width overflow risk;
- native/details/form semantics where applicable.

### Batch-wide pass findings

PASS:
- all non-Wishlist current candidate files have balanced HTML/CSS and valid JavaScript syntax;
- no duplicate IDs or unresolved in-page anchors were found;
- all current candidates use the intended 1480 body system;
- all current candidates use the 1720 Header/Footer shell;
- 404 / Contact / Services / FAQ / Track Order functional controls use Inter-family functional typography;
- FAQ question titles now use the established site product-title font family/weight relationship rather than generic UI typography;
- Policy Reading 03 retains localized 620px table min-width inside its own overflow wrapper rather than causing page-level overflow;
- Policy Reading 03 has all six right-side chapter rails and all six chapter rules after final cleanup;
- no page-level fixed-width/min-width overflow risk above 390px was found outside the intentional Policy table wrapper.

## Findings requiring attention before production mapping

### A. Wishlist — visual is accepted, repository authority is not normalized

The user-approved sage-accent correction exists at commit:
`08a5368839eaa31992cb8ab5cc7e47a3b2c46253`

The main accepted artifact path still points to the earlier pre-sage state.

Also, the large standalone Wishlist HTML still contains legacy/dead CSS for old `.site-head` / `.site-foot` components even though active markup uses `.sf-header` / `.sf-footer`.

Assessment:
- visual defect: NO new defect identified;
- mapping risk: YES — exact authoritative source must be pinned/promoted before implementation;
- cleanup: remove/ignore inactive legacy CSS during production extraction rather than carrying it forward.

### B. Search — medium-breakpoint consistency needs one explicit visual gate

Search currently contains:
- 1040px rules that already change shell width / mark treatment;
- active navigation collapse at 960px.

Therefore 961–1040px can temporarily combine desktop navigation with partially mobile Header geometry.

Assessment:
- desktop / 390px states already accepted;
- static source indicates a plausible 1024px composition drift;
- before production mapping, perform a dedicated 1024px visual check and, if confirmed, align the active Header transition to the shared 1040px system.

This is the only new page-level visual-risk finding from the unified code audit.

### C. Policy family — design coverage is broader than the single sample, exact live-copy fit is not yet proven

The reusable Utility / Policy family is intended to cover:
- Privacy Policy
- Terms & Conditions
- Shipping Policy
- Refund / Returns Policy
- similar future long-form utility content if needed

Reading 03 proves a long-form Returns / Refunds composition.

However, exact current live Privacy / Terms / Shipping copy was not injected into the prototype during this design batch.

Assessment:
- visual system: PASS;
- long-form stress direction: PASS after Reading 03;
- exact per-live-page content fit: must be checked when fresh WordPress content is audited before mapping;
- do not rewrite legal/policy copy merely to fit the design.

### D. Minor non-blocking implementation-consistency notes

- Services / Track Order do not currently carry the same explicit `prefers-reduced-motion` block used by some sibling prototypes.
- Services native `select` remains browser-native in the static prototype.

These are not current visual blockers, but should be normalized in production implementation.

## Page-by-page current audit verdict

| Surface | Current verdict |
|---|---|
| Wishlist | Visual PASS; canonical-source cleanup required before mapping |
| Search | PASS at accepted states; 1024px breakpoint recheck required |
| 404 | PASS; no new issue found |
| Contact | PASS; no new issue found |
| Utility / Policy | PASS as final visual system; exact live-copy fit still to be checked per policy page |
| Services | PASS; no new visual issue found |
| FAQ / Help | PASS after typography Pass 04 |
| Track Order | PASS after Breathing Pass 06 |

## Local WordPress page inventory reconciliation

Freshest explicit full WordPress Pages inventory evidence:
2026-09-14:
- 23 total pages / 23 published.

Named pages in that inventory:
1. Care Guide
2. Cart
3. Checkout
4. Crypto Payment
5. FAQ
6. Privacy Policy
7. Refund And Returns Policy
8. Search
9. Services
10. Shipping Policy
11. Terms & Conditions
12. Track Order
13. Wishlist
14. Home
15. Shop
16. About Us
17. Contact Us
plus six Airwallex-generated pages titled `Payment`.

2026-09-15:
- all six Airwallex `Payment` pages were permanently deleted;
- orphan Page-menu audit returned zero dangling items.

Therefore, assuming no later Page creation/deletion not captured in the repository:

`23 - 6 = 17 current published WordPress pages`.

This inference exactly matches the 17 named non-Airwallex pages above.

### Coverage classification of the inferred 17 current pages

Covered by the current task/information design batch:
- Wishlist
- Search
- Contact Us
- Services
- FAQ
- Track Order
- Privacy Policy -> Utility/Policy family
- Refund And Returns Policy -> Utility/Policy family / Reading 03
- Shipping Policy -> Utility/Policy family
- Terms & Conditions -> Utility/Policy family

Covered elsewhere / separate completed commerce flow:
- Cart
- Checkout
- Crypto Payment (Checkout Step-03 / Crypto Workspace ownership)

Different active/frozen main-site workstream:
- Home
- Shop

Intentionally separate, not accidentally omitted:
- About Us
  - external candidate exists: `Spatial-Flow-About.html`
  - remains a separate brand-expression design decision

### Confirmed omitted support page

`Care Guide`

Evidence:
- it is a real published WordPress Page;
- it is exposed in current Footer support navigation;
- no `preview/spatial-flow-care-guide-v1.html` exists in the repository;
- it was not included in the external AI ZIP;
- it was not included in the current 8-page design batch;
- no Completed 1:1 closure exists for it.

Therefore:
CARE GUIDE = TRUE CURRENT PAGE-COVERAGE GAP.

Do not silently treat it as Policy, FAQ or Services without first inspecting its real content/role.

## 404 / Account clarification

404:
- has a design surface in the batch;
- is not expected to appear as a normal WordPress Page row because it is a 404 route/template.

Account:
- external design candidate exists;
- WooCommerce My Account page was explicitly unassigned in the last backend inventory;
- it should not be counted as a missing live WordPress page.

## Exact completeness limitation

Repository evidence can strongly reconstruct the current count as 17, but cannot prove that no WordPress Page was added/deleted after the last captured admin inventory.

For guaranteed final no-omission closure, obtain one fresh:
`WordPress Admin -> Pages -> All Pages`
inventory screenshot/list before production mapping.

Until then:
- current evidence-based expected count = 17;
- confirmed coverage gap = Care Guide;
- intentionally separate unresolved page = About Us.

## Current gate

NO PRODUCTION MAPPING.

Current sequence:
1. user manually compares current vs old references;
2. Search 1024px visual recheck;
3. resolve whether Care Guide joins this batch;
4. decide whether About Us should be finalized now or remain separate;
5. obtain a fresh WordPress Pages inventory for exact 17-page confirmation;
6. only after this master audit closes may production mapping be discussed.
