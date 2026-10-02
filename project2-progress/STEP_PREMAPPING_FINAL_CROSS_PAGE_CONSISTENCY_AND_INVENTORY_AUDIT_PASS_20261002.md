# Pre-mapping Final Cross-page Consistency and Inventory Audit — PASS

Date: 2026-10-02
Project: Spatial Flow V2 / Project 2

## 1. Care Guide vs Policy / task-info visual system

Current accepted Care Guide authority:
- desktop: Care Guide 07.0
- mobile: Care Guide 07 Mobile Optimized

Current Policy authority:
- `temp-policy-wishlist-led-01/temp-preview/Spatial-Flow-Policy-Longform-Reading-03-Final.html`

Code-level cross-page comparison confirms:

### Shared global shell
- Header width: `min(1720px, calc(100% - 80px))`
- Footer inner width: `min(1720px, calc(100% - 80px))`
- same Header markup/class family:
  - `.site-head`
  - `.site-head__in`
  - `.nav-main`
  - `.mark`
  - `.nav-util`
  - `.mobile-nav`
- same footer component family:
  - `.sf-footer`
  - `.sf-footer__inner`
  - `.sf-footer__brand`
  - `.sf-footer__grid`
  - `.sf-footer__trust`
  - `.sf-footer__bottom`

### Shared task / information body system
- Care Guide: `--max: 1480px`
- Policy: `--max: 1480px`
- Search: `--max: 1480px`
- Contact: `--max: 1480px`
- Services: `--max: 1480px`
- FAQ: `--max: 1480px`
- Track Order: `--max: 1480px`
- 404: `--max: 1480px`

Shared horizontal padding:
`clamp(22px, 4.2vw, 64px)`

### Shared typography
- editorial/display: Cormorant Garamond
- body/function: Inter
- restrained metadata: JetBrains Mono

### Shared palette
Core tokens match:
- paper `#F6F1EB`
- ink `#1F1916`
- clay `#A8745C`
- clay-deep `#8B5D49`
- sage `#4A5D5A`
- identical mute / faint / rule logic

Minor non-blocking token drift:
- Care Guide `paper2 = #EEE7DF`
- Policy / Search / Contact `paper2 = #EDE7DF`

This is a one-channel neutral difference and does not create a different-site visual identity.
Normalize to the canonical shared token during production extraction if the shared stylesheet owns this surface; do not reopen the accepted Care Guide static composition merely for this one-value difference.

### Intentional page-specific differences
Policy:
- long-form reading rail / table behavior;
- additional 1240 / 820 responsive gates.

Care Guide:
- illustrated teaching modules;
- mobile-specific 760 / 430 / 360 responsive tuning.

These differences reflect page function and do not conflict with the shared site system.

## Consistency verdict

PASS.

Care Guide does NOT look structurally detached from the Policy / task-info family.

No width mismatch exists:
- task/info body = 1480 system;
- global Header/Footer = 1720 system.

No cross-page redesign is required before mapping.

## 2. Main-site page inventory

Fresh confirmed main-site WordPress Pages inventory remains 17:

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

Clarifications:
- 404 is a route/template, not a WordPress Page.
- Account is not currently assigned as a live WooCommerce My Account page.
- DIY light homepage is explicitly outside Project 2 scope.

## 3. Current coverage

Closed / accepted visual or production authority:
- Care Guide
- Cart
- Checkout
- Crypto Payment
- FAQ
- Privacy Policy -> accepted Policy structural system
- Refund And Returns Policy -> accepted Policy structural system
- Search
- Services
- Shipping Policy -> accepted Policy structural system
- Terms & Conditions -> accepted Policy structural system
- Track Order
- Wishlist
- Shop ordinary archive / non-frozen scope
- Contact Us
- 404 route/template
- Main Header
- Main Footer
- Single Product
- Thank You / Woo result family

Policy note:
The four real policy pages still own their real live copy, dates, URLs, SEO, Woo assignments and legal meaning. Exact live-copy fit must be checked during source-backed production mapping; this is not a missing design page.

## 4. Remaining design surfaces

The practical Project 2 visual backlog is exactly:

1. About Us
   - strategy / narrative planning substantially complete;
   - final visual / motion / HTML not complete.

2. Shop light homepage / Shop Landing + Product Archive hybrid
   - deferred / frozen design branch;
   - ordinary Shop archive remains protected and closed.
   - this is not a separate WordPress Page row; it is a future presentation layer for the Shop destination.

3. Global / overall Home
   - deferred;
   - final design not complete.

Explicitly excluded:
- DIY light homepage.

No hidden fourth unfinished main-site page was found.

## 5. Final mapping gate

PRE-MAPPING CONSISTENCY AUDIT = PASS.

Production mapping may begin for the already-closed task/info batch while the three deferred visual surfaces remain excluded.

Required first production step:
fresh current WordPress / child-theme source capture before any edit.

No live source should be edited from historical snapshots.
