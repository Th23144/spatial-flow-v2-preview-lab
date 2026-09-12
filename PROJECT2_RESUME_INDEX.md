# Project 2 · Resume Index

Last updated: 2026-09-12  
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
26. project2-progress/STEP_4D_REOPEN_HERO_GALLERY_RUNTIME_ACCEPTANCE_AND_CLOSURE_20260912.md
27. project2-progress/STEP_4D_REOPEN_HERO_SUMMARY_REMAINING_BACKAUDIT_PASS_AND_CLOSURE_20260912.md
28. project2-progress/STEP_4D_REOPEN_SECTION01_FRESH_RUNTIME_ACCEPTANCE_AND_CLOSURE_20260912.md
29. project2-progress/STEP_4D_REOPEN_SECTION02_FRESH_RUNTIME_REVALIDATION_AND_CLOSURE_20260912.md
30. PROJECT2_STEP_RECORDING_POLICY.md
31. PROJECT2_RUNTIME_TEST_BATCHING_POLICY.md
32. PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
33. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
34. PROJECT2_CSS_MAINTENANCE_POLICY.md
35. PROJECT2_MANUAL_REPLACEMENT_AND_FILE_SIZE_AUDIT_POLICY.md
36. PROJECT2_VERIFIED_FULL_FILE_REPLACEMENT_POLICY.md
37. PROJECT2_CROSS_WINDOW_OWNERSHIP_HANDOFF_POLICY.md
38. project2-progress/STEP_4F_CHECKOUT_FINAL_CLOSURE_COMPLETED_1_TO_1_20260903.md
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
- The fresh Hero / Summary back-audit then reopened the historical Gallery presentation because the live page still used large-image round arrows and a `1 / N` counter that were not aligned with the target editorial language.
- The user approved a production enhancement for future products with more than four images: remove large-image navigation controls, retain a fixed four-thumbnail viewport, and show subtle thumbnail-window previous/next controls only when the product has more than four gallery images.
- Hero public identity ownership was also corrected so `_sf_piece_reference` is the public editorial Reference / Piece Code; native WooCommerce SKU is no longer exposed as that public identifier in the Hero.
- The Gallery source gate passed after removing two stale CSS overrides and correcting variation-reset synchronization.
- The user then confirmed the bounded Gallery runtime batch is normal: four-image state, five-image one-step thumbnail-window navigation, image 05 selection, variable-product reset back to image/thumbnail/window 01, desktop behavior, and 390px mobile behavior all pass.
- A later fresh width sweep found a real 768–1024px regression: a stale `height: min(76vw, 640px)` rule caused the 4:5 Gallery container to expose a large blank area below the image.
- That tablet-only height cap was removed; the 4:5 container remains authoritative and the image now fills it with `width: 100%`, `height: 100%`, and `object-fit: cover`.
- Fresh 1024px runtime evidence confirms the blank area is gone and the Gallery controls/thumbnails remain intact.
- Therefore Hero Gallery remains USER / RUNTIME ACCEPTED / CLOSED across desktop, 768–1024px tablet, and 390px mobile.
- The remaining Summary-side fresh back-audit found no additional concrete defect after the isolated Hero issues above were resolved.
- Current title hierarchy, optional subtitle, live Woo price, shipping note, Placement Suggestion, excerpt, visual variation controls, quantity + Add to Cart geometry, Wishlist / Share, Trust Strip, desktop composition and mobile stack are accepted for the current product state.
- WooCommerce state remains authoritative; for example, Add to Cart being disabled before required variation selection is valid behavior and is not a strict-reference defect.
- Therefore Hero / Summary overall is ACCEPTED / CLOSED for the current Single Product back-audit.
- Product Attributes was re-audited against the static reference. Desktop four-column behavior remained valid, but the 390px layout had drifted to a 1×4 list with separator rules instead of the reference 2×2 editorial grid.
- The bounded mobile correction restored Product Attributes to `repeat(2, minmax(0, 1fr))` with a 24px gap and removed the list-style per-item separators/padding.
- Fresh 390px evidence confirms the 2×2 geometry, no horizontal overflow, and a clean transition into Section 01.
- `functions.php` child version is now 2.7.46 for the combined tablet Gallery + mobile Product Attributes correction batch.
- Section 01 / `The piece, slowly.` was then fresh-audited against the reference and the existing accepted dynamic ownership.
- Source structure remains correct: desktop 5fr / 7fr composition, 80px gap, left mono editorial aside, Material / Edition / Made / Studio rows, WooCommerce long-description ownership, 88px drop cap, and bilingual pull-quote styling.
- Fresh desktop evidence confirms the editorial left/right composition, drop cap, body paragraphs, pull quote, and Product Attributes → Section 01 → Section 02 transitions.
- Fresh 390px evidence confirms the single-column stack, contained drop cap, centered pull quote, clean paragraph wrapping, no horizontal overflow, and clean Section 02 entry.
- Therefore Section 01 / The Piece fresh historical-PASS back-audit is USER / RUNTIME ACCEPTED / CLOSED.
- Section 02 / Editorial Reading was then fresh-audited against its accepted product architecture and reference-derived visual language.
- The explicit product decision remains authoritative: Section 02 is an editable Editorial Reading block rather than fabricated Maker Biography.
- Fresh desktop evidence confirms the paper-deep section treatment, Section 02 heading hierarchy, 5fr / 7fr image-copy composition, 4:5 image, lead/context hierarchy, accepted fixed-height internal narrative reading area, metadata row, and clean transition into Section 03.
- The visible desktop narrative scrollbar is intentional and remains the previously user-approved desktop treatment, not a defect.
- Fresh 390px evidence confirms the one-column stack, correct heading wrap, full-width 4:5 image, long-form collapsed preview, soft fade + centered `↓ CONTINUE READING` affordance, visible metadata row outside the collapsed narrative, no horizontal overflow, and clean Section 03 entry.
- The previously accepted mobile expanded / `COLLAPSE ↑` interaction remains preserved; the latest bounded Gallery / Product Attributes corrections did not modify Section 02 interaction ownership and there is no new regression evidence.
- Therefore Section 02 / Editorial Reading fresh historical-PASS back-audit is USER / RUNTIME REVALIDATED / CLOSED.
- Product Attributes → Section 01 → Section 02 → Section 03 historical-PASS back-audit is now complete.
- This closure does not mark the whole Single Product page Completed 1:1.
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
functions.php child version: 2.7.46
Reference / Piece Code meta: _sf_piece_reference
WooCommerce native SKU: inventory / operations only; not the Hero or Related public editorial reference
Edition meta: _sf_piece_edition
Placement meta: _sf_placement
Section 01 Material: _sf_material
Section 01 Made: _sf_piece_made
Section 01 Studio: _sf_piece_studio
empty optional editorial fields: hidden; never fabricate values
```

Hero / Summary current accepted state:

```text
Hero Gallery: USER / RUNTIME ACCEPTED / CLOSED
Hero / Summary overall: ACCEPTED / CLOSED for current back-audit
large-image round prev/next controls: removed
large-image 1 / N counter: removed
CLICK THUMB TO VIEW hint: accepted
thumbnail numbering: accepted
visible thumbnail viewport: fixed at four
>4 images: subtle thumbnail-window prev/next controls
navigation behavior: one-thumbnail sliding window
variation reset: restores image 01 + active thumbnail 01 + thumbnail viewport 01 02 03 04
768–1024px image fill: PASS
public Hero Reference ownership: _sf_piece_reference
WooCommerce SKU as public Hero identifier: removed
desktop: PASS
390px mobile: PASS
```

Fresh back-audit closures:

```text
Product Attributes mobile 2×2: USER / RUNTIME ACCEPTED / CLOSED
Section 01 / The Piece: USER / RUNTIME ACCEPTED / CLOSED
Section 02 / Editorial Reading: USER / RUNTIME REVALIDATED / CLOSED
Product Attributes → Section 01 transition: PASS
Section 01 → Section 02 transition: PASS
Section 02 → Section 03 transition: PASS
Historical-PASS back-audit below Hero / Summary: COMPLETE
```

Closure records:

```text
project2-progress/STEP_4D_REOPEN_RELATED_PRODUCTS_FINAL_RUNTIME_ACCEPTANCE_AND_CLOSURE_20260911.md
project2-progress/STEP_4D_REOPEN_HERO_GALLERY_RUNTIME_ACCEPTANCE_AND_CLOSURE_20260912.md
project2-progress/STEP_4D_REOPEN_HERO_SUMMARY_REMAINING_BACKAUDIT_PASS_AND_CLOSURE_20260912.md
project2-progress/STEP_4D_REOPEN_SECTION01_FRESH_RUNTIME_ACCEPTANCE_AND_CLOSURE_20260912.md
project2-progress/STEP_4D_REOPEN_SECTION02_FRESH_RUNTIME_REVALIDATION_AND_CLOSURE_20260912.md
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
Hero Gallery: USER / RUNTIME ACCEPTED / CLOSED
Hero / Summary overall: ACCEPTED / CLOSED
Product Attributes fresh back-audit: USER / RUNTIME ACCEPTED / CLOSED
Section 01 / The Piece fresh back-audit: USER / RUNTIME ACCEPTED / CLOSED
Section 02 / Editorial Reading fresh back-audit: USER / RUNTIME REVALIDATED / CLOSED
Historical-PASS back-audit below Hero / Summary: COMPLETE
Gift CTA / Closing Editor's Note: NEXT
Single Product overall binary page status: Not done
```

Exact next action:

```text
re-read the authoritative Single Product final remediation plan for the still-unresolved forward scope
→ audit the current static-reference target and current live/source ownership for Gift CTA / Closing Editor's Note
→ preserve all accepted Hero / Summary, Product Attributes, Section 01, Section 02, Section 03, Reviews-omission and Related Products decisions
→ record the concrete Gift CTA / Closing Editor's Note target and ownership before any edit
→ do not mark Single Product Completed 1:1 until that unresolved forward scope is explicitly resolved and runtime accepted
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