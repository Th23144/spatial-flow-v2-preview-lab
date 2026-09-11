# Project 2 · Resume Index

Last updated: 2026-09-11  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Read these first

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_ACTIVE_STOP_POINT_20260816.md
3. PROJECT2_DOCS_INDEX.md
4. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
5. project2-progress/PROJECT2_USER_REOPEN_HEADER_FOOTER_SHOP_SINGLE_PRODUCT_20260903.md
6. project2-progress/STEP_4D_REOPEN_A_SINGLE_PRODUCT_WHOLE_PAGE_REAUDIT_20260903.md
7. project2-progress/STEP_4D_REOPEN_A_SINGLE_PRODUCT_FINAL_REMEDIATION_PLAN_20260904.md
8. project2-progress/STEP_4D_REOPEN_SECTION03_CARE_RITUAL_IMPLEMENTATION_SPEC_20260910.md
9. project2-progress/STEP_4D_REOPEN_SECTION03_RETURNED_SOURCE_REAUDIT_PASS_20260910.md
10. project2-progress/STEP_4D_REOPEN_SECTION03_DESKTOP_RUNTIME_ACCEPTANCE_20260911.md
11. project2-progress/STEP_4D_REOPEN_SECTION03_MOBILE_RUNTIME_ACCEPTANCE_20260911.md
12. project2-progress/STEP_4D_REOPEN_SECTION03_EMPTY_CONTENT_ACCEPTANCE_AND_CLOSURE_20260911.md
13. project2-progress/STEP_4D_REOPEN_SECTION03_NUMBERING_REFINEMENT_DECISION_C_20260911.md
14. project2-progress/STEP_4D_REOPEN_SECTION03_OPTION_C_RUNTIME_REFERENCE_CORRECTION_20260911.md
15. project2-progress/STEP_4D_REOPEN_SECTION03_BORDER_1TO1_RETURNED_SOURCE_AUDIT_PASS_20260911.md
16. project2-progress/STEP_4D_REOPEN_SECTION03_OPTION_C_FINAL_RUNTIME_ACCEPTANCE_20260911.md
17. project2-progress/STEP_4D_REOPEN_SECTION04_WOOCOMMERCE_REVIEWS_NO_ACCOUNT_POLICY_20260911.md
18. project2-progress/STEP_4D_REOPEN_SECTION04_REVIEWS_OMITTED_CURRENT_VERSION_DECISION_20260911.md
19. project2-progress/STEP_4D_REOPEN_RELATED_PRODUCTS_STRICT_1TO1_REOPEN_20260911.md
20. project2-progress/STEP_4D_REOPEN_RELATED_PRODUCTS_STRICT_1TO1_EXECUTION_START_20260911.md
21. project2-progress/STEP_4D_REOPEN_RELATED_PRODUCTS_STRICT_1TO1_SOURCE_MAP_AND_EDIT_DELTA_20260911.md
22. project2-progress/STEP_4D_REOPEN_RELATED_PRODUCTS_RETURNED_SOURCE_AUDIT_START_20260911.md
23. project2-progress/STEP_4D_REOPEN_RELATED_PRODUCTS_RETURNED_SOURCE_AUDIT_PASS_20260911.md
24. project2-progress/STEP_4D_REOPEN_RELATED_PRODUCTS_REFERENCE_CODE_IMPLEMENTATION_DELTA_20260911.md
25. project2-progress/STEP_4D_REOPEN_RELATED_PRODUCTS_FINAL_RUNTIME_ACCEPTANCE_AND_CLOSURE_20260911.md
26. PROJECT2_STEP_RECORDING_POLICY.md
27. PROJECT2_RUNTIME_TEST_BATCHING_POLICY.md
28. PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
29. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
30. PROJECT2_CSS_MAINTENANCE_POLICY.md
31. PROJECT2_MANUAL_REPLACEMENT_AND_FILE_SIZE_AUDIT_POLICY.md
32. PROJECT2_VERIFIED_FULL_FILE_REPLACEMENT_POLICY.md
33. PROJECT2_CROSS_WINDOW_OWNERSHIP_HANDOFF_POLICY.md
34. project2-progress/STEP_4F_CHECKOUT_FINAL_CLOSURE_COMPLETED_1_TO_1_20260903.md
```

Historical precedence:

```text
later explicit user correction/reopen
> later formal runtime/source/user acceptance
> standing policy
> older plan/snapshot/pass record as historical evidence
```

## Current binary page status

Completed:

```text
Cart: Completed 1:1
Checkout: Completed 1:1
Thank You / WooCommerce Order Result: Completed 1:1
```

Current `Not done` includes:

```text
Main-site Header
Main-site Footer
Home
Shop archive
Single Product
Wishlist
Track Order
Account
Search
404
About Us
Services
FAQ / Help
Contact
Utility / policy pages
Blog Header/Footer branch
Blog home
Blog issue
Blog article
```

The user explicitly reopened Header, Footer and Shop on 2026-09-03 and stated they still require adjustment. The user also reopened Single Product because its whole-page completion was uncertain and further adjustments/omissions remained.

## Reopened-surface evidence

### Single Product

Repository-side whole-page re-audit is recorded in:

```text
project2-progress/STEP_4D_REOPEN_A_SINGLE_PRODUCT_WHOLE_PAGE_REAUDIT_20260903.md
```

Authoritative remediation direction is recorded in:

```text
project2-progress/STEP_4D_REOPEN_A_SINGLE_PRODUCT_FINAL_REMEDIATION_PLAN_20260904.md
```

Historical classification at reopen time:

```text
Historically implemented/passed:
- Hero / Summary
- Gallery + mobile fill behavior
- Placement Suggestion editable ownership
- Trust Strip editable ownership
- Product Attributes editable ownership
- The Piece via WooCommerce long description / the_content
- Related Products / Complete The Room

Historically deferred:
- Story Behind
- Care Ritual
- Quiet Notes / Reviews

Historically unresolved:
- Closing Editor's Note
- whole long-page current strict 1:1 status
- present-day desktop/mobile/backend/source drift
- unscoped legacy .sf-related-products CSS ownership risk
```

Do not read those historical deferred/unresolved labels as the current stop point. Later dated remediation records supersede them where applicable.

Current later state:

```text
- B5 Hero metadata / subtitle / shipping-note work is closed after backend-to-frontend verification on desktop and 390px mobile.
- Section 03 · Care & Ritual source gate passed.
- Section 03 desktop runtime / structure passed.
- Section 03 390px mobile runtime / visual passed.
- Section 03 hide-when-all-three-bodies-empty behavior passed; the user confirmed the entire section disappeared.
- Section 03 · Care & Ritual implementation milestone was accepted and closed.
- The user later selected refinement Option C: remove i. / ii. / iii. unit numbering entirely.
- Option C source edit passed and live screenshots confirmed the numbering removal.
- A strict-reference audit then identified border drift: Section 03 top border, Related Products top border, and mobile per-unit separator borders were not present in the static reference.
- The bounded correction removed those extra borders while retaining the single Section 03 bottom divider.
- Returned `functions.php` v2.7.41 and corrected `spatial-flow.css` passed whole-file source diff / syntax / structure audit.
- Fresh desktop and 390px live screenshots pass: no Section 03 top border, no mobile per-unit separator borders, one bottom divider only, no duplicate Related Products top border, numbering remains absent.
- Therefore Section 03 Option C + strict-reference border refinement is USER / RUNTIME ACCEPTED and CLOSED.
- Section 04 · Quiet Notes / Reviews was reconsidered as a product-level feature decision.
- The user explicitly decided that the current storefront version will not include the Reviews feature/section.
- Section 04 is therefore an INTENTIONAL CURRENT-VERSION OMISSION, not an unfinished implementation gap.
- The static reference's Reviews section is an explicit exception from strict 1:1 duplication for the current product architecture.
- WooCommerce review capability is not deleted and may be reconsidered later, but no review UI/workflow is authorized now.
- Before proceeding to Gift CTA, the user supplied fresh reference-vs-live screenshots and explicitly reopened Related Products because it materially diverged from the static reference.
- Related Products was rebuilt toward the static editorial composition using real WooCommerce image/title/price/permalink data plus optional product-specific editorial metadata.
- Desktop geometry was corrected to the reference 1440px container with 56px internal left/right gutters, yielding approximately 302px-wide four-column product images with 40px gaps.
- The heading now renders as `Pieces of a similar weight.` and the `View the full edit →` action is present.
- Framed Woo-style cards / category labels / Explore buttons were removed in favor of the reference-style open editorial product presentation.
- The initial SKU mapping was corrected: WooCommerce SKU remains an inventory/operations identifier, while a separate public `_sf_piece_reference` field now owns the front-end Spatial Flow Reference / Piece Code.
- Optional Edition remains owned by `_sf_piece_edition`; optional Placement Note remains owned by `_sf_placement`; empty fields are hidden and no fake values are fabricated.
- The user-provided desktop evidence confirms the reference-style `VIEW PIECE →` image interaction works.
- The user-provided 390px mobile evidence confirms the one-column layout, optional placement-note composition, long-title wrapping and no horizontal overflow.
- The user explicitly confirmed mobile navigation is one-tap: the first tap on a Related Products image navigates directly to the product page; the visible `VIEW PIECE →` state is only transient tap/focus feedback, not a two-tap defect.
- Therefore Related Products / `Pieces of a similar weight.` is USER / RUNTIME ACCEPTED and CLOSED.
- This closure does not mark the whole Single Product page Completed 1:1.
- Because the user explicitly identified earlier historical PASS areas that may still contain strict-reference drift, the next step is a fresh top-to-bottom back-audit of already-implemented Single Product surfaces before any Gift CTA / Closing Editor's Note implementation resumes.
```

Protected accepted Section 03 baseline before Option C refinement:

```text
functions.php bytes: 622,421
logical lines: 11,891
SHA256: 805b701cfdbeca27982bf20725922b4013281e512cd53494672230fb73fb9706
child version: 2.7.39
PHP syntax: PASS
```

Current accepted Section 03 refined source:

```text
functions.php bytes: 622,421
logical lines: 11,891
SHA256: 1f83346ca54910c2972dac1e3c6514022b54199ec03bfb21431a548c23f160ee
child version: 2.7.41
PHP syntax: PASS

spatial-flow.css bytes: 605,895
logical lines: 21,392
SHA256: 7c4eba175f6b77eec3dc225879a39465d86cbcb2e604c92a4b19fd87eae48b27
brace balance: 3358 / 3358
comment balance: 280 / 280

accepted live behavior:
- numbering absent
- no Section 03 top border
- no mobile per-unit separator borders
- no Related Products top border
- one Section 03 bottom divider retained
- desktop three-column layout retained
- mobile one-column stack retained
- previously accepted all-three-bodies-empty full-section hide behavior remains protected because its predicate/save/render logic was untouched by the bounded visual refinements
```

Section 03 closure / refinement records:

```text
project2-progress/STEP_4D_REOPEN_SECTION03_EMPTY_CONTENT_ACCEPTANCE_AND_CLOSURE_20260911.md
project2-progress/STEP_4D_REOPEN_SECTION03_NUMBERING_REFINEMENT_DECISION_C_20260911.md
project2-progress/STEP_4D_REOPEN_SECTION03_OPTION_C_RUNTIME_REFERENCE_CORRECTION_20260911.md
project2-progress/STEP_4D_REOPEN_SECTION03_BORDER_1TO1_RETURNED_SOURCE_AUDIT_PASS_20260911.md
project2-progress/STEP_4D_REOPEN_SECTION03_OPTION_C_FINAL_RUNTIME_ACCEPTANCE_20260911.md
```

Section 04 current-version product decision:

```text
Section 04 · Quiet Notes / Reviews: INTENTIONALLY OMITTED / CLOSED AS PRODUCT DECISION
```

Do not classify the missing Reviews block as a strict 1:1 defect in the current Single Product target. If Reviews are reopened in a future phase, use real WooCommerce review data only and do not fabricate review content.

Related Products current strict-1:1 state:

```text
Related Products / Pieces of a similar weight.: USER / RUNTIME ACCEPTED / CLOSED
Desktop runtime/visual acceptance: PASS
390px mobile runtime/visual acceptance: PASS
Desktop hover VIEW PIECE →: PASS
Mobile one-tap navigation: PASS
Public Reference / Piece Code ownership: PASS
WooCommerce native SKU separation: PASS
```

Latest accepted ownership / runtime notes:

```text
functions.php child version: 2.7.44
Reference / Piece Code meta: _sf_piece_reference
WooCommerce native SKU: inventory / operations only for this Related Products presentation
Edition meta: _sf_piece_edition
Placement meta: _sf_placement
empty optional editorial fields: hidden; never fabricate values
```

Closure record:

```text
project2-progress/STEP_4D_REOPEN_RELATED_PRODUCTS_FINAL_RUNTIME_ACCEPTANCE_AND_CLOSURE_20260911.md
```

### Shop

The prior controlled rework deliberately left the static product-card Editorial Place Note unimplemented because a real backend-editable per-product source was not yet available. A future implementation must use dynamic product data, not hardcoded sample copy.

### Footer

Editable footer sources/menu ownership are preserved, but the user's historical audit notes that final actual backend-editability validation was not sufficiently evidenced. User also explicitly says Footer remains incomplete.

### Header

User explicitly says Header remains incomplete. Some remaining adjustments may exist only in the user's own notes; do not invent them.

## Checkout final protected state

Checkout remains closed and is not affected by the reopen above.

```text
01 Address
→ 02 Shipping
→ 03 Payment
→ 04 server-authoritative WooCommerce Order Result / Thank You
```

Protected closure includes Product Packaging, gateway host, Step01 FOUC, AJAX white-wash fixes, Terms notice, Processing Payment, mini-cart Checkout notice, Crypto transfer typography and Refresh Status feedback.

WPCode 1706 `收款页` remains:

```text
DISABLED
DO NOT DELETE during current cleanup horizon
```

## Current exact stop point

The previously announced Home audit remains suspended while the reopened Single Product remediation is active.

Current step:

```text
Step 4D-REOPEN · Single Product remediation
```

Current sub-state:

```text
Section 03 · Care & Ritual core implementation: ACCEPTED / CLOSED
Option C numbering removal + strict-reference border refinement: USER / RUNTIME ACCEPTED / CLOSED
Section 04 · Reviews: CURRENT-VERSION INTENTIONAL OMISSION / CLOSED AS PRODUCT DECISION
Related Products / Pieces of a similar weight.: USER / RUNTIME ACCEPTED / CLOSED
Gift CTA / Closing Editor's Note: STILL PAUSED
Single Product historical-PASS back-audit: NEXT
Single Product overall binary page status: Not done
```

Exact next action:

```text
re-read the authoritative Single Product whole-page re-audit and final remediation plan
→ compare the current live Single Product from the top against preview/spatial-flow-product-v1.html
→ re-check historically passed surfaces (Hero / Summary, Gallery, Placement Suggestion, Trust Strip, Product Attributes, Section 01 / The Piece, Section 02 and transitions) for actual present-day strict 1:1 drift
→ preserve later explicit product decisions (Section 03 numbering Option C; Reviews omitted)
→ record each discovered mismatch before editing
→ do not resume Gift CTA / Closing Editor's Note until this back-audit is complete
```

Recommended order after Single Product:

```text
1. Main-site Header strict re-audit
2. Main-site Footer strict re-audit
3. Shop strict re-audit
4. Home strict 1:1 work
```

This order can be changed by a later explicit user instruction.

## Execution boundaries

```text
- user's fresh server-current uploads are the live source baseline
- audit before editing
- preserve backend editability
- preserve WordPress/WooCommerce/plugin authority
- prefer canonical in-place replacement over append-only patches
- do not fabricate dynamic/editorial content
- do not reopen Cart/Checkout/Thank You without new concrete evidence
- mobile remains an independent production-quality state
- batch foreseeable manual work only after the combined remediation scope is frozen
- every meaningful action/state/result must be recorded in GitHub before the next meaningful action begins
```
