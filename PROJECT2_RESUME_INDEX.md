# Project 2 · Resume Index

Last updated: 2026-09-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Read these first

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_ACTIVE_STOP_POINT_20260816.md
3. PROJECT2_DOCS_INDEX.md
4. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
5. project2-progress/PROJECT2_USER_REOPEN_HEADER_FOOTER_SHOP_SINGLE_PRODUCT_20260903.md
6. PROJECT2_STEP_RECORDING_POLICY.md
7. PROJECT2_RUNTIME_TEST_BATCHING_POLICY.md
8. PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
9. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
10. PROJECT2_CSS_MAINTENANCE_POLICY.md
11. PROJECT2_MANUAL_REPLACEMENT_AND_FILE_SIZE_AUDIT_POLICY.md
12. PROJECT2_VERIFIED_FULL_FILE_REPLACEMENT_POLICY.md
13. PROJECT2_CROSS_WINDOW_OWNERSHIP_HANDOFF_POLICY.md
14. project2-progress/STEP_4F_CHECKOUT_FINAL_CLOSURE_COMPLETED_1_TO_1_20260903.md
```

Historical precedence:

```text
later explicit user correction/reopen
> later formal runtime/source/user acceptance
> standing policy
> older plan/snapshot/pass record
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

The user explicitly reopened Header, Footer and Shop on 2026-09-03 and stated they still require adjustment. The user also reopened Single Product because its whole-page completion is uncertain and further adjustments/omissions remain.

## Reopened-surface evidence

### Single Product

Repository-backed unresolved/deferred scope:

```text
The Piece: implemented
Story Behind: deferred
Care Ritual: deferred
Quiet Notes / Reviews: deferred
Closing Editor's Note: present in the static reference and requires explicit closure decision/audit
whole long-page strict 1:1 completion: must be re-audited
```

Do not fabricate Story/Review content merely to fill the reference.

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

The previously announced Home audit is suspended.

Current recommended next step:

```text
Step 4D-REOPEN-A · Single Product whole-page strict 1:1 re-audit
```

Recommended order after that:

```text
1. Single Product whole-page strict re-audit
2. Main-site Header strict re-audit
3. Main-site Footer strict re-audit
4. Shop strict re-audit
5. Home strict 1:1 work
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
```
