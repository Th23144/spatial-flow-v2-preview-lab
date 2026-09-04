# Step 4D-REOPEN-A · Single Product whole-page strict 1:1 re-audit · 2026-09-03

## Trigger
The user explicitly reopened Single Product after reviewing the project inventory and recalling that the page still has omissions, deferred sections and additional adjustments. The user requested a repository-first audit before supplying their own current adjustment list. No source modification is authorized in this step.

Current binary status remains:

```text
Single Product: Not done
```

## Audit basis

Primary static visual reference:

```text
preview/spatial-flow-product-v1.html
```

Historical implementation/closure sources reviewed include:

```text
project2-progress/STEP_4D_SYNC_MANIFEST.md
project2-progress/STEP_4D_CLEAN1_AUDIT.md
project2-progress/PROGRESS_LOG.md
project2-progress/DEFERRED_PLANS.md
project2-progress/PROJECT2_USER_REOPEN_HEADER_FOOTER_SHOP_SINGLE_PRODUCT_20260903.md
project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
```

This is a repository/history audit only. It does not claim that the current live WordPress page still visually matches the historical accepted state; current live evidence will be requested only after the user supplies their own adjustment list and the combined remediation scope is frozen.

## 1. Static reference structure that must be accounted for

The product reference contains a complete long-form page system, including:

```text
- breadcrumb / editorial masthead context
- product Hero / main two-column product area
- real-product gallery presentation
- summary hierarchy / SKU / subtitle / price / options / quantity / Add to Cart
- Placement Suggestion
- Trust Strip
- Product Attributes
- Section 01 / The Piece editorial body
- Section 02 / The Story Behind
- Section 03 / Care & Ritual
- Section 04 / Quiet Notes / Reviews
- Section 05 / Related Products / Complete The Room
- Closing Editor's Note
- shared Footer
```

The shared Header/Footer shells are now separately reopened globally and should not be treated as evidence that the Single Product body itself is incomplete; they will be audited in their own phases.

## 2. Historically implemented / passed Single Product scope

The Step 4D sync manifest records prior passes for:

```text
Step 4D-Interrupt · Add-to-cart success feedback
Step 4D-1-A · desktop Hero framework
Step 4D-1-B · Summary typography / spacing
Step 4D-Control-A · backend field mapping audit
Step 4D-Control-B · remove Product Story residue + repair Product Attributes field source
Step 4D-Control-C · backend-editable Product Attributes headings
Step 4D-1-C · Gallery details
Step 4D-1-C-MOBILE1 · mobile gallery main-image fill
Step 4D-1-D · Product Attributes visual polish
Step 4D-1-D-FIX1 · Quantity gap + Attributes divider repair
Step 4D-1-E · Related Products / Complete The Room visual polish
Step 4D-1-F · The Piece editorial section
Step 4D-1-F-FIX5 · The Piece nested editor markup / drop cap
Step 4D-1-G · historical full-page regression
```

Historical regression coverage also included:

```text
- desktop layout
- mobile layout
- simple product
- variable product
- gallery / thumbnails / arrows / counter
- quantity stepper
- Add to Cart feedback
- Header Bag count
- The Piece visible/hidden states
- Product Attributes backend fields
- Related Products layout
- Cart / Checkout entry from product page
```

These are valuable protected implementations. Reopening the page does NOT mean they should be rebuilt by default. They must first be checked for present-day drift or conflicts.

## 3. Backend-editability/data ownership historically established

Historical Step 4D records identify these editable owners:

Customizer/global presentation sources:

```text
- Product Attributes eyebrow
- Product Attributes section heading
- Material card title
- Suitable Space card title
- Care & Maintenance card title
- Gift Service card title
- Placement Suggestion title
- Trust Strip titles/texts
```

Per-product sources:

```text
- Summary · Placement Suggestion
- Product Attributes · Material
- Product Attributes · Suitable Space
- Product Attributes · Care & Maintenance
- Product Attributes · Gift Service
- WooCommerce long description / the_content for The Piece
```

Therefore any new rework should preserve this owner model unless there is a concrete reason to improve it. Static sample product truth must not replace WooCommerce/product-meta truth.

## 4. Explicitly deferred sections

Historical Step 4D intentionally did NOT implement the following reference sections:

```text
Story Behind
Care Ritual
Quiet Notes / Reviews
```

The reason was not a technical inability. The project intentionally avoided fabricated editorial/user content.

### Story Behind
Must not invent maker, source, origin, location or design-history claims. If retained in the production page, it needs real product-specific editable data and a truthful hidden/empty state.

### Care Ritual
Must not simply duplicate Product Attributes / Trust Strip care copy. If retained, it needs a distinct operational content model such as richer usage/maintenance guidance with editable defaults/overrides.

### Quiet Notes / Reviews
Must use real approved WooCommerce reviews. Fake quotes, names, ratings, locations or dates are forbidden. If no reviews exist, the correct production behavior may be hide/empty/review-entry UI rather than sample content.

Because the user has reopened the whole page, these deferrals are no longer automatically treated as harmless to binary page completion. Each must receive a fresh explicit keep/defer/implement decision before final closure.

## 5. Confirmed unresolved reference gap

### Closing Editor's Note
The static reference contains a separate Closing Editor's Note after the long-form product/recommendation sequence.

Repository history does not provide a sufficiently clean record proving that this section was either:

```text
- implemented and accepted; or
- explicitly and validly deferred at final whole-page closure.
```

Therefore this is a real audit gap and must be included in the combined remediation decision.

Do not assume it must be copied literally. First decide its production purpose and editable owner; if kept, it should use real/editorial editable content rather than hardcoded sample prose.

## 6. Technical cleanup/risk items found in historical records

### 6.1 Unscoped related-products CSS
`Step 4D-CLEAN1` explicitly found older unscoped `.sf-related-products` repair rules elsewhere in `spatial-flow.css` and left them untouched because their impact could extend beyond Single Product.

This is not proof of a present visual bug, but it is a known CSS ownership/cleanup risk. During the eventual live-source audit, inspect whether these rules still overlap the canonical Single Product related-products styling before adding new overrides.

### 6.2 Legacy Product Story must not be resurrected blindly
Old `.sf-product-story-*` CSS was deliberately removed. Story Behind, if implemented now, should receive a deliberate current data/structure owner; do not restore the old legacy panel simply because the new reference contains a story section.

### 6.3 The Piece drop-cap contract
The accepted implementation uses the explicit `.sf-product-v2-piece__dropcap` wrapper. Do not restore CSS `::first-letter` behavior unless a later evidence-based redesign explicitly supersedes this contract.

## 7. What repository evidence does NOT prove today

This audit cannot establish from repository history alone that the current live page still has:

```text
- exact desktop 1:1 geometry today
- exact ~390px mobile 1:1 geometry today
- no later CSS/global-shell regression
- current live Placement Suggestion / Trust Strip / Attributes content correctness
- current backend screens/fields still behave exactly as expected
- current Related Products visual state is still conflict-free
```

Those require current live evidence and current server source, but they should be requested only after the user's own adjustment list is merged with this audit so manual work is batched once.

## 8. Repository-side preliminary classification

### Preserve first / historically strong

```text
Hero/Summary owner model
Gallery functionality and mobile fill behavior
WooCommerce options/quantity/Add to Cart behavior
Placement Suggestion editable ownership
Trust Strip editable ownership
Product Attributes editable ownership
The Piece / the_content owner model and empty state
Related Products / Complete The Room dynamic-product behavior
```

These may still need visual adjustment, but should not be rewritten without evidence.

### Explicit decision required

```text
Story Behind — implement vs continue legitimate defer
Care Ritual — implement vs continue legitimate defer
Quiet Notes / Reviews — real Woo review implementation vs truthful empty/defer model
Closing Editor's Note — implement/defer/remove decision was historically unresolved
```

### Technical audit required later

```text
current live desktop/mobile parity
current live backend editability
current server single-product.php/functions.php/spatial-flow.css owners
legacy/unscoped .sf-related-products rules
later global CSS drift affecting product page
```

## 9. Current stop point

Repository-side Step 4D-REOPEN-A audit is complete enough to wait for the user's supplement.

Do NOT request files, screenshots or tests yet.
Do NOT modify Single Product source yet.

Next action:

```text
User supplies their own current Single Product adjustment/cleanup list
→ merge with this repository audit
→ produce one authoritative combined remediation inventory
→ decide which long-form sections are required vs legitimately deferred
→ only then request the complete current-live evidence/source batch once
→ bounded implementation + regression
```

This sequencing is intentional to avoid making the user repeat screenshots/uploads/tests that could have been requested together.
