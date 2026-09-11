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
16. PROJECT2_STEP_RECORDING_POLICY.md
17. PROJECT2_RUNTIME_TEST_BATCHING_POLICY.md
18. PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
19. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
20. PROJECT2_CSS_MAINTENANCE_POLICY.md
21. PROJECT2_MANUAL_REPLACEMENT_AND_FILE_SIZE_AUDIT_POLICY.md
22. PROJECT2_VERIFIED_FULL_FILE_REPLACEMENT_POLICY.md
23. PROJECT2_CROSS_WINDOW_OWNERSHIP_HANDOFF_POLICY.md
24. project2-progress/STEP_4F_CHECKOUT_FINAL_CLOSURE_COMPLETED_1_TO_1_20260903.md
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
- Option C source edit passed and the live screenshots confirm the numbering is removed successfully.
- A later strict-reference audit found border drift around Section 03 / Related Products and on mobile unit separators.
- Static reference supports Section 03 bottom border only; the live CSS had added a Section 03 top border, Related Products top border, and mobile per-unit top borders.
- The bounded border correction has now returned and passed whole-file source diff / syntax / structure audit.
- Final desktop + 390px runtime confirmation of the corrected border state is still pending before the Option C refinement can be closed.
```

Protected accepted Section 03 baseline before Option C refinement:

```text
functions.php bytes: 622,421
logical lines: 11,891
SHA256: 805b701cfdbeca27982bf20725922b4013281e512cd53494672230fb73fb9706
child version: 2.7.39
PHP syntax: PASS
```

Current Option C + strict-reference border-correction source:

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

numbering output remains removed
Section 03 top border removed
mobile per-unit separator borders removed
Related Products top border removed
Section 03 bottom border retained
runtime confirmation of this corrected state: PENDING
```

Section 03 closure / later refinement records:

```text
project2-progress/STEP_4D_REOPEN_SECTION03_EMPTY_CONTENT_ACCEPTANCE_AND_CLOSURE_20260911.md
project2-progress/STEP_4D_REOPEN_SECTION03_NUMBERING_REFINEMENT_DECISION_C_20260911.md
project2-progress/STEP_4D_REOPEN_SECTION03_OPTION_C_RUNTIME_REFERENCE_CORRECTION_20260911.md
project2-progress/STEP_4D_REOPEN_SECTION03_BORDER_1TO1_RETURNED_SOURCE_AUDIT_PASS_20260911.md
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
Section 03 · Care & Ritual core implementation: ACCEPTED / CLOSED
Option C numbering removal: LIVE / NUMBERING VISUALLY PASS
Strict 1:1 border correction: SOURCE PASS / RUNTIME PENDING
Single Product overall binary page status: Not done
```

Exact next action:

```text
install/use the validated 2.7.41 functions.php + corrected spatial-flow.css
→ desktop runtime recheck: no Section 03 top border, one bottom divider only
→ 390px runtime recheck: no per-unit separator borders, spacing preserved
→ confirm Option C numbering remains absent
→ record user/runtime acceptance
→ only then close the Option C refinement and resume the next unresolved Single Product item
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
