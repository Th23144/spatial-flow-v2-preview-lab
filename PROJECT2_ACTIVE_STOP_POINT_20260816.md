# Project 2 · Active Stop Point · 2026-09-03

> Historical filename retained for cross-window compatibility. This content is the current authoritative stop point.

## Current authoritative state

```text
Main-site Header: Completed 1:1
Main-site Footer: Completed 1:1
Shop archive: Completed 1:1
Single Product: Completed 1:1
Cart: Completed 1:1
Checkout: Completed 1:1
Thank You / WooCommerce Order Result: Completed 1:1

Current next page: Home
Home binary status: Not done
Current executable step: Step 4G-A · Home current live source + ownership audit
Source modification authorized: NO — audit first
```

Authoritative inventory reconciliation:

```text
project2-progress/PROJECT2_POST_CHECKOUT_PAGE_INVENTORY_RECONCILIATION_20260903.md
project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
```

## Completed Checkout chain retained

The final Checkout closure included more than happy-path screenshots. The following are all closed:

```text
Step01 Address
Step02 Shipping
Product Packaging
Step03 Payment
Order Summary / Coupon / Trust
Step03 native gateway-host presentation
Step01 full-refresh native-field FOUC
Order Summary AJAX white wash
Step03 Payment AJAX white wash
Crypto V0.3.0 transfer-button typography
Step03 Terms/validation notice presentation
Processing Payment transient presentation + submit lock
direct mini-cart -> Checkout carried success-notice flash
Crypto Refresh Status manual acknowledgement
Step04 full WooCommerce status/result family
final desktop + current 390px mobile regression sweeps
```

Checkout architecture remains:

```text
01 Address
→ 02 Shipping
→ 03 Payment
→ 04 server-authoritative WooCommerce Order Result / Thank You
```

No Review/fifth input step. Exactly one native WooCommerce Place Order.

## WPCode 1706 boundary

```text
1706 — 收款页
DISABLED
DO NOT DELETE during the current cleanup horizon
```

Enabling it can restore the rejected rounded/light legacy Step03 gateway-card override.

## Remaining `Not done` pages/page families

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

Older records describing Wishlist, Track Order, About Us, Services, FAQ or Search as rebuilt/passed are implementation history only; no later strict binary closure was found. Under the user's rule, if strict 1:1 was not completed, it remains `Not done`.

## Explicit deferred / non-blocking work

Do not reopen completed pages merely because these remain deferred:

```text
Single Product Story Behind optional module
Single Product Care Ritual optional module
Single Product real WooCommerce Reviews / Quiet Notes
Step04 status-icon micro visual polish
conditional Step02 no-method / true multi-rate regression
future Crypto rate lock / QR / expiry / monitoring / WalletConnect / multi-asset/network
Crypto Workspace rollout flag
Project2-CLEAN-CSS global CSS consolidation
```

Detailed backlog:

```text
project2-progress/DEFERRED_PLANS.md
```

## Current next action — Home

Recommended next implementation system:

```text
Step 4G · Home strict 1:1 rework
```

Static visual truth:

```text
preview/spatial-flow-v1.html
```

Do **not** start by editing CSS/PHP.

First execute:

```text
Step 4G-A · Home current live source + ownership audit
```

Audit requirements:

```text
1. identify the actual WordPress page/template owning `/`;
2. identify current Home PHP/template/shortcode/page-builder ownership;
3. identify Home CSS and JavaScript owners;
4. inventory current backend-editable Home copy/media/menu/product/category sources;
5. compare current live Home structure against `preview/spatial-flow-v1.html`;
6. classify each delta as visual, structural, dynamic-data, backend-editability or native-function ownership;
7. only then define the bounded implementation plan.
```

The user should not be asked to make source changes until this audit has identified the current live owner files.

## Execution rules retained

```text
- user's newly uploaded server-current file is the live source baseline
- inspect size/lines/structure before edits
- prefer anchored/in-place canonical replacement over append-only patches
- backend editability is mandatory
- preserve WordPress/WooCommerce/plugin real data and behavior
- record meaningful steps in GitHub before advancing
- issue an entire safe runtime test batch at once; do not surprise the user with foreseeable extra rounds afterward
```

Do not reopen Header/Footer/Shop/Single Product/Cart/Checkout/Thank You without new concrete regression evidence.
