# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-09-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Authoritative read order

For a new Project-2 window, read in this order:

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_ACTIVE_STOP_POINT_20260816.md
3. PROJECT2_DOCS_INDEX.md
4. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
5. PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
6. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
7. PROJECT2_STEP_RECORDING_POLICY.md
8. PROJECT2_RUNTIME_TEST_BATCHING_POLICY.md
9. PROJECT2_CSS_MAINTENANCE_POLICY.md
10. PROJECT2_MANUAL_REPLACEMENT_AND_FILE_SIZE_AUDIT_POLICY.md
11. PROJECT2_VERIFIED_FULL_FILE_REPLACEMENT_POLICY.md
12. PROJECT2_CROSS_WINDOW_OWNERSHIP_HANDOFF_POLICY.md
13. project2-progress/STEP_4F_FULL_REPOSITORY_DOCUMENT_INHERITANCE_COMPLETE_20260816.md
14. project2-progress/STEP_4F_CHECKOUT_FINAL_CLOSURE_COMPLETED_1_TO_1_20260903.md
15. project2-progress/PROJECT2_POST_CHECKOUT_PAGE_INVENTORY_RECONCILIATION_20260903.md
```

Do not use older plan/snapshot text to override a later explicit correction or final acceptance.

## Current binary page status

```text
Main-site Header: Completed 1:1
Main-site Footer: Completed 1:1
Shop archive: Completed 1:1
Single Product: Completed 1:1
Cart: Completed 1:1
Checkout: Completed 1:1
Thank You / WooCommerce Order Result: Completed 1:1

Home: Not done
Wishlist: Not done
Track Order: Not done
Account: Not done
Search: Not done
404: Not done
About Us: Not done
Services: Not done
FAQ / Help: Not done
Contact: Not done
Utility / policy pages: Not done
Blog Header/Footer branch: Not done
Blog home: Not done
Blog issue: Not done
Blog article: Not done
```

Authoritative full matrix:

```text
project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
```

## Completed commerce chain

```text
Shop
→ Single Product
→ Cart
→ Checkout Step01 Address
→ Step02 Shipping + Product Packaging
→ Step03 Payment
→ Crypto Workspace where applicable
→ Step04 WooCommerce Order Result / Thank You
```

All of the above is closed at the Project-2 1:1 layer.

Do not reopen the completed commerce chain without new concrete evidence of a visual, functional, data-truth, backend-editability, mobile, payment or security regression.

## Checkout retained boundaries

```text
WPCode 1706 `收款页`: DISABLED / DO NOT DELETE during current cleanup horizon
No Review/fifth Checkout input step
Exactly one native WooCommerce Place Order
WooCommerce remains transaction/status authority
Theme remains gateway-agnostic
```

Final Checkout correction chain and non-blocking future items are documented in:

```text
PROJECT2_RESUME_INDEX.md
PROJECT2_ACTIVE_STOP_POINT_20260816.md
project2-progress/STEP_4F_CHECKOUT_FINAL_CLOSURE_COMPLETED_1_TO_1_20260903.md
```

## Explicit deferred / backlog items

Keep these deferred unless the user explicitly reopens them:

```text
Single Product optional Story Behind module
Single Product optional Care Ritual module
Single Product real WooCommerce Reviews / Quiet Notes module
Step04 status-icon micro visual polish
conditional Step02 no-method / true multi-rate regression
future Crypto product/payment evolution
Crypto Workspace rollout flag choice
Project2-CLEAN-CSS global historical CSS consolidation
```

Detailed backlog:

```text
project2-progress/DEFERRED_PLANS.md
```

## Current next implementation task

Recommended next page:

```text
Home
```

Static visual truth:

```text
preview/spatial-flow-v1.html
```

First executable step is read-only, not implementation:

```text
Step 4G-A · Home current live source + ownership audit
```

Before changing Home source, verify:

```text
- actual WordPress page/template owning `/`
- Home-specific PHP/template/shortcode/page-builder ownership
- Home-specific CSS/JS ownership
- current backend-editable copy/media/menu/product sources
- exact live-vs-static structural/visual delta
```

Then define one bounded implementation plan. Do not start by appending broad CSS.

## Core execution rules

```text
meaningful Project-2 action
→ record it in GitHub
→ then advance

new user-uploaded current-server file
→ treat as the live source baseline
→ inspect size/lines/structure
→ compare with static reference
→ issue exact bounded replacement
→ validate returned file before runtime testing
```

Backend editability remains a hard boundary. Preserve `theme_mod`, options, menus, shortcodes, template parts, WooCommerce dynamic output and real data sources wherever they already exist.
