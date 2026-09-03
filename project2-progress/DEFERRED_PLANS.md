# Project 2 · Deferred Plans / Backlog

Last updated: 2026-09-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

This file records deferred, optional, unresolved or later-regression work that must not be lost.

Important 2026-09-03 correction:

```text
Header: Not done
Footer: Not done
Shop: Not done
Single Product: Not done
```

The user explicitly reopened these surfaces. Therefore older language saying their deferred items are automatically non-blocking no longer controls the current binary page status.

Authoritative correction:

```text
project2-progress/PROJECT2_USER_REOPEN_HEADER_FOOTER_SHOP_SINGLE_PRODUCT_20260903.md
```

---

## 1. Single Product whole-page reopen backlog

Reference:

```text
preview/spatial-flow-product-v1.html
```

Known state:

```text
The Piece: implemented and previously accepted
Story Behind: deferred
Care Ritual: deferred
Quiet Notes / Reviews: deferred
Closing Editor's Note: unresolved audit item
whole long-page strict 1:1 status: REOPENED
```

### 1.1 Story Behind

```text
Step 4D-LATER-STORY · Story Behind optional editorial module
```

Do not fabricate maker/origin/location/story content. A future implementation must use real product-specific editable data where content exists.

### 1.2 Care Ritual

```text
Step 4D-LATER-CARE-RITUAL · Care Ritual optional usage guide module
```

Must not merely duplicate Trust Strip/Product Attributes care text. If retained, use a genuine operational data model.

### 1.3 Quiet Notes / Reviews

```text
Step 4D-LATER-REVIEWS · Verified WooCommerce Reviews editorial display
```

Use real approved/verified WooCommerce reviews only. If none exist, hide or use a truthful review-entry path. Never fabricate quotes, names, ratings or dates.

### 1.4 Closing Editor's Note

The static reference contains a Closing Editor's Note section. Historical Project-2 records do not provide a sufficiently clean final decision proving that this section was either implemented or explicitly/validly deferred at whole-page closure.

It must be included in the new Single Product whole-page audit.

### 1.5 Whole-page closure question

The old page closure coexisted with multiple deferred long-form reference sections. The user has now explicitly questioned that conclusion. The new audit must decide which sections are legitimately optional operational deviations and which are actual strict-reference omissions.

Until then:

```text
Single Product: Not done
```

---

## 2. Shop reopen backlog

Reference:

```text
preview/spatial-flow-shop-v1.html
```

### 2.1 Per-product Editorial Place Note

Historical Shop rework intentionally did not fake the reference's per-product place note because the product-card template lacked a dedicated real backend source.

If implemented, use a backend-editable per-product field (historically suggested example: `_sf_placement`) and dynamic output from `content-product.php`.

Do not hardcode reference/sample place-note text.

### 2.2 Other user-recorded Shop adjustments

The user explicitly states Shop still has additional adjustments. Some may exist only in the user's own notes and were not fully captured in GitHub. Capture them during the fresh Shop audit rather than guessing.

Current status:

```text
Shop: Not done
```

---

## 3. Header / Footer reopened work

### Header

User explicitly says Header still requires adjustment. Exact remaining details are not fully available in GitHub.

```text
Header: Not done
```

### Footer

User explicitly says Footer still requires adjustment.

Existing menu/theme_mod helper ownership demonstrates preservation intent, but final actual backend-editability/visual closure must be revalidated rather than inferred from source presence.

```text
Footer: Not done
```

---

## 4. CSS cleanup backlog

### Single Product CSS consolidation — historical completed cleanup

`Step 4D-CLEAN1` itself passed as a bounded cleanup action. That does not mean the reopened Single Product page is currently complete.

### Global CSS consolidation — deferred

```text
Project2-CLEAN-CSS · Global CSS consolidation pass
```

Known historical owners include Footer Dark Editorial, Shop rework remnants/overlap, related-products repair rules and other old Project-2 patches. Run only after page-specific visual work is stable enough.

---

## 5. Checkout / Step04 future items

Checkout and Thank You / Order Result remain:

```text
Checkout: Completed 1:1
Thank You / Order Result: Completed 1:1
```

Deferred/non-blocking items remain:

```text
Step04 status-icon micro polish
conditional Step02 no-method / true multi-rate regression
future Crypto quote/rate lock, QR, expiry, monitoring, WalletConnect, multi-asset/network
Crypto Workspace rollout flag decision
```

WPCode 1706 `收款页`:

```text
DISABLED
DO NOT DELETE during current cleanup horizon
```

---

## 6. Current remaining page backlog

```text
Header
Footer
Home
Shop
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

Protected completed surfaces:

```text
Cart
Checkout
Thank You / Order Result
```

Current recommended next step:

```text
Step 4D-REOPEN-A · Single Product whole-page strict 1:1 re-audit
```

Recommended after that: Header → Footer → Shop → Home, unless the user explicitly changes the order.
