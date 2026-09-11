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
12. PROJECT2_STEP_RECORDING_POLICY.md
13. PROJECT2_RUNTIME_TEST_BATCHING_POLICY.md
14. PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
15. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
16. PROJECT2_CSS_MAINTENANCE_POLICY.md
17. PROJECT2_MANUAL_REPLACEMENT_AND_FILE_SIZE_AUDIT_POLICY.md
18. PROJECT2_VERIFIED_FULL_FILE_REPLACEMENT_POLICY.md
19. PROJECT2_CROSS_WINDOW_OWNERSHIP_HANDOFF_POLICY.md
20. project2-progress/STEP_4F_CHECKOUT_FINAL_CLOSURE_COMPLETED_1_TO_1_20260903.md
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
- Section 03 · Care & Ritual implementation contract is frozen.
- The returned Section 03 three-file source set has passed source inspection.
- Corrected functions.php is byte-identical to the previously validated bounded correction candidate.
- Section 03 desktop runtime / structure checkpoint passed using backend-entered test values.
- Section 03 390px mobile runtime / visual checkpoint passed: one-column stack, correct unit order, no visible horizontal overflow, no clipped framing, and normal transition into Complete The Room.
- The reference-faithful i. / ii. / iii. markers were judged visually awkward by the user, but the user explicitly deferred that refinement until after Section 03 acceptance.
- Section 03 is SOURCE VALIDATED, DESKTOP RUNTIME VALIDATED and MOBILE RUNTIME VALIDATED, but NOT YET FULLY USER ACCEPTED.
```

Current Section 03 source identity for corrected `functions.php`:

```text
bytes: 622,421
logical lines: 11,891
SHA256: 805b701cfdbeca27982bf20725922b4013281e512cd53494672230fb73fb9706
child version: 2.7.39
PHP syntax: PASS
```

Current Section 03 runtime gate:

```text
Completed:
1. Product Data → General → Section 03 fields: explicit test content entered and saved.
2. Desktop: heading + three columns + backend-to-frontend persistence verified.
3. 390px mobile: one-column editorial stack and no framing/overflow regression verified.

Pending:
4. Clear Everyday / Seasonal / Repair bodies and save: verify the entire Section 03 disappears.
5. Restore desired content afterward if needed.
6. Record final Section 03 PASS / FAIL / user acceptance in GitHub.
7. After Section 03 closure, optionally revisit i. / ii. / iii. numbering as a separate bounded visual refinement.
```

Do not fabricate Section 04 / review content. Section 04 remains real WooCommerce reviews only.

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
Section 03 · Care & Ritual
SOURCE GATE: PASS
DESKTOP RUNTIME / STRUCTURE: PASS
390px MOBILE RUNTIME / VISUAL: PASS
EMPTY-CONTENT DISAPPEARANCE: PENDING
FULL USER ACCEPTANCE: PENDING
```

Exact next action:

```text
clear all three Section 03 body fields (Everyday / Seasonal / Repair)
→ save/update the product
→ reload the live Single Product page
→ verify the entire Section 03 block disappears with no empty heading/numbering/frame left behind
→ record PASS / FAIL in GitHub
→ restore desired content if needed
→ record final Section 03 user acceptance
→ only then revisit the deferred numbering refinement or advance to the next Single Product remediation item
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
