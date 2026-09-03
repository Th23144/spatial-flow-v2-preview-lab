# Project 2 · Resume Index

Last updated: 2026-09-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Read these first

For a new Project-2 window, read in this order:

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_ACTIVE_STOP_POINT_20260816.md
3. PROJECT2_DOCS_INDEX.md
4. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
5. PROJECT2_STEP_RECORDING_POLICY.md
6. PROJECT2_RUNTIME_TEST_BATCHING_POLICY.md
7. PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
8. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
9. PROJECT2_CSS_MAINTENANCE_POLICY.md
10. PROJECT2_MANUAL_REPLACEMENT_AND_FILE_SIZE_AUDIT_POLICY.md
11. PROJECT2_VERIFIED_FULL_FILE_REPLACEMENT_POLICY.md
12. PROJECT2_CROSS_WINDOW_OWNERSHIP_HANDOFF_POLICY.md
13. project2-progress/STEP_4F_FULL_REPOSITORY_DOCUMENT_INHERITANCE_COMPLETE_20260816.md
14. project2-progress/STEP_4F_CHECKOUT_FINAL_CLOSURE_COMPLETED_1_TO_1_20260903.md
15. project2-progress/PROJECT2_POST_CHECKOUT_PAGE_INVENTORY_RECONCILIATION_20260903.md
```

The historical corpus remains in `project2-progress/`. Do not delete history merely because newer records supersede old stop points.

## Historical precedence

```text
later explicit correction/rejection/rollback
> later formal runtime/source/user acceptance
> later standing policy
> older policy/plan/candidate/snapshot
```

Older Checkout or page-status files may correctly say `Not done` at their historical point. They do not override newer final closure records.

## Mandatory execution rule

```text
meaningful Project-2 action
→ record start/state/result in GitHub
→ only then advance
```

For one coherent user runtime batch, provide the complete safe checklist up front. Do not add foreseeable extra screenshot/test rounds after the user has already finished the batch.

## Current binary page status

Completed:

```text
Main-site Header: Completed 1:1
Main-site Footer: Completed 1:1
Shop archive: Completed 1:1
Single Product: Completed 1:1
Cart: Completed 1:1
Checkout: Completed 1:1
Thank You / WooCommerce Order Result: Completed 1:1
```

Still `Not done`:

```text
Home
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

User rule retained: if strict 1:1 was not actually completed, mark the page `Not done`. Older partial pass/rebuild history is not enough.

Authoritative matrix:

```text
project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
```

## Checkout final protected state

Checkout is closed. Architecture:

```text
01 Contact / Address
→ 02 Shipping
→ 03 Payment
→ 04 server-authoritative WooCommerce Order Result / Thank You / Receipt
```

Protected contracts:

```text
Step01 Address: PASS / CLOSED
Step02 Shipping: PASS / CLOSED
Product Packaging: FINAL ACCEPTED / CLOSED
Step03 Payment: PASS / CLOSED
Order Summary / Coupon / Trust: PASS / CLOSED
normal non-Crypto order flow: PASS
Crypto V0.3.0 Workspace: PASS / CLOSED
Step04 full result/status family: FINAL PASS / CLOSED
final desktop sweep: PASS
current 390px mobile regression sweep: PASS
transient/error-state closure: PASS
```

Final correction chain included:

```text
Step03 WPCode 1706 legacy gateway-card override
Step01 native-field refresh FOUC
Order Summary AJAX white wash
Step03 Payment AJAX white wash
Crypto transfer-button typography
Step03 Terms/validation notice visual
Processing Payment transient visual
mini-cart -> Checkout carried success-notice flash
Crypto Refresh Status visible acknowledgement
```

Do not reopen these without new concrete runtime evidence.

### WPCode 1706

```text
1706 — 收款页
DISABLED
DO NOT DELETE during current cleanup horizon
```

### Crypto Refresh Status final UX

Manual click:

```text
REFRESH STATUS
→ REFRESHING…
→ UP TO DATE
→ REFRESH STATUS
```

Focus-triggered recovery refresh remains silent.

## Explicit deferred / non-blocking items

These do not reopen completed pages:

```text
Single Product optional Story Behind
Single Product optional Care Ritual
Single Product real WooCommerce Reviews / Quiet Notes
Step04 status-icon micro visual polish
conditional Step02 no-method / true multi-rate cases
future Crypto rate lock / QR / expiry / monitoring / WalletConnect / multi-asset/network
Crypto Workspace rollout flag choice
Project2-CLEAN-CSS global CSS consolidation
```

Detailed backlog:

```text
project2-progress/DEFERRED_PLANS.md
```

## Current exact stop point

The post-Checkout inventory reconciliation is complete.

Current next page:

```text
Home
```

Current page status:

```text
Home: Not done
```

Static visual truth:

```text
preview/spatial-flow-v1.html
```

Current executable step:

```text
Step 4G-A · Home current live source + ownership audit
```

Source modification is **not yet authorized**. Audit first.

The Home audit must determine:

```text
- actual WordPress page/template owning `/`
- current Home PHP/template/shortcode/page-builder owner
- Home-specific CSS/JS owners
- existing backend-editable Home copy/media/menu/product/category sources
- live-vs-static structural and visual delta
- protected native/dynamic behavior
```

Only after that audit should a bounded Home implementation plan be issued.

## Source-baseline rule

If the user uploads a fresh file copied from the current server, treat that upload as the current live source baseline.

Before asking the user to edit:

```text
inspect bytes / logical lines / structure
verify exact owner and anchors
compare against static reference
state allowed scope
state rollback
```

After the user returns a modified file, source-audit it before runtime testing.

## Implementation boundaries

```text
- preserve WordPress/WooCommerce/plugin authority
- preserve backend editability
- do not hardcode dynamic commerce truth
- prefer canonical in-place replacement over append-only CSS
- do not reopen completed Header/Footer/Shop/Product/Cart/Checkout/Thank You without new evidence
- mobile is an independent production-quality responsive state
```
