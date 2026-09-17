# STEP_SHOP_V2_FULL_DETAIL_DELTA_AUDIT_PASS1_SOURCE_FINDINGS_20260917

Date: 2026-09-17
Project: Spatial Flow V2 / 项目二换皮工程
Surface: Main-site Shop archive

## Status

FULL-DETAIL DELTA AUDIT — PASS 1 SOURCE FINDINGS

No production source edits are made by this record.

The user-approved wider Shop width is protected and excluded from remediation.

## Important finding

The current Shop is not uniformly far from the reference at the structural level. Several major desktop geometry values already match the static source because the July controlled rebase copied them directly. The remaining strict-1:1 work is therefore dominated by micro-detail, hierarchy, content-slot, typography, interaction presentation and responsive differences rather than a complete rebuild.

## Major desktop geometry already matching the static reference

### Hero
Current source:
- grid: `1.1fr / 1fr`
- gap: `96px`
- align-items: end
- padding-top: `64px`
- padding-bottom: `80px`
- bottom border retained
- title: `clamp(56px, 7vw, 104px)`, weight 300, line-height .95, tracking -.015em

These values mirror the static source. Width itself is a user-approved deviation and must not be changed.

### Toolbar
Current desktop source retains:
- 32px filter gap
- text-like controls
- active terracotta underline
- WooCommerce sorting ownership

Interaction ownership is preserved; existing JS closes sibling filter details, outside-click closes, Escape closes.

### Editor's Pick
Current desktop source retains:
- grid: `5fr / 7fr`
- gap: `80px`
- padding: `80px 0`
- 4/5 media ratio
- stamp at 24px / 24px
- copy padding `40px 0`
- open editorial treatment rather than framed card

Mobile hiding remains a previously approved production deviation and is protected.

### Product grid
Current desktop source retains:
- 4 columns
- `56px 40px` row/column gap
- `32px 0 80px` grid padding
- 4/5 image ratio
- open, unframed product-card treatment

### Closing note
Current desktop source retains:
- 1fr / 1fr
- 80px gap
- `80px 0 120px` padding
- open editorial surface

## Confirmed strict deltas / audit targets

### A. Breadcrumb hierarchy / root-Shop duplication
The archive template always outputs `Home / Shop / {archive title}`. On the root Shop where archive title is `Shop`, this can become `Home / Shop / Shop`. The static reference uses a meaningful third context, not a duplicate. Root-Shop breadcrumb logic requires a controlled correction while preserving taxonomy/archive contexts.

### B. Micro typography family mismatch
The static reference uses the sans family (`Inter`) for breadcrumb, filter labels and utility microcopy. The current controlled Shop CSS uses `JetBrains Mono` for multiple micro labels. This is a strict typographic delta even where font-size / letter-spacing are close.

### C. Hero content-slot hierarchy
Current root Shop uses dynamic archive title (`Shop`) and editable kicker/body metadata. Dynamic content is allowed, but geometry and hierarchy must be checked independently. The current screenshot therefore cannot be considered a visual match merely because the CSS grid values match.

### D. Product section header extra kicker
Current template renders a separate `section_kicker` above the editable section title. The static source exposes one main heading plus count. This extra visual layer is a structural strict delta unless explicitly approved later.

### E. Product-card content hierarchy is incomplete
Current `content-product.php` outputs:
- category names
- product title
- price
- YITH Wishlist

It does not output the static reference's complete editorial hierarchy:
- hover `View piece →` surface
- editorial secondary line
- per-product placement / place note

Existing backend owners now make a non-fabricated implementation possible:
- `_sf_material`
- `_sf_piece_reference`
- `_sf_placement`

Empty values must remain hidden; no sample content may be invented.

### F. Product-card utility treatment
YITH Wishlist is production-required and may remain as a controlled deviation from the static reference. Its visual integration still requires detailed audit so the icon does not distort the card geometry.

### G. Product images / placeholders
Placeholder media materially weakens visual fidelity but is a content/media-quality issue, not a template defect. Do not fabricate product imagery during the Shop template pass.

### H. Pagination presentation
Current pagination is a centered WooCommerce page-number row. The historical pagination fix only corrected vertical stacking. The static reference has a left previous action, centered page numbers, and right next action. WooCommerce pagination URLs/state must remain native; presentation can be adapted without replacing pagination logic.

### I. Mobile-specific approved deviations
Protected decisions:
- Editor's Pick hidden on mobile to expose products earlier.
- ordinary mobile product grid remains two columns; only very narrow layouts may collapse further according to accepted production behavior.

These are not to be reopened merely because the static preview differs.

## Next audit pass

Before any code change, continue with screenshot + source comparison for:

1. Breadcrumb micro-spacing and type.
2. Hero kicker/title/meta/lede/body/signoff line metrics.
3. Toolbar baseline, spacing, sort control geometry and dropdown-panel presentation.
4. Editor's Pick typography / price / buttons / baseline alignment.
5. Product section heading/count.
6. Product-card complete anatomy.
7. Pagination geometry.
8. Closing note typography/button.
9. Contact-band transition.
10. 1100px / 767px / 390px responsive behavior.

Only after the full Delta Matrix is complete should the Shop remediation batch be edited.
