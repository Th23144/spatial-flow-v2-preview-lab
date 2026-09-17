# STEP_SHOP_V2_FULL_VISUAL_PROBLEM_INVENTORY_FREEZE_20260917

Date: 2026-09-17
Project: Spatial Flow V2 / 项目二换皮工程
Surface: Main-site Shop archive

## Status

AUDIT EXPANDED / IMPLEMENTATION FROZEN

The user correctly rejected the prior narrow interpretation of the remaining Shop problems. The current page is not blocked by only a few local defects. It still has a page-wide visual-system mismatch relative to the approved static reference.

No further Shop code changes should be issued until the full problem inventory is consolidated.

## User-approved exception that remains locked

The current production Shop is intentionally wider than the static reference. The user prefers the wider production width. Do not shrink the production Shop back to the reference width.

This is a controlled approved divergence and must not be counted as a defect.

## Current confirmed problem families

### 1. Canvas / surface color system

The static reference uses the following visual system:

```text
paper/background: #f6f1eb
secondary surface: #ede7df
line: #d9d1c4
ink: #1f1916
soft text: #4a423d
muted text: #8a807a
terracotta: #a8745c
bluestone: #4a5d5a
```

The current production screenshot is visually dominated by pure white. The Shop controlled CSS defines the correct reference variables but does not currently make the real Shop runtime canvas inherit them as one continuous surface. Transparent sections therefore reveal a white underlying Astra/WooCommerce/site-content surface.

This affects Breadcrumb, Hero, toolbar, Editor's Pick, products, pagination and closing note simultaneously.

### 2. Surface ownership / cascade ambiguity

The codebase contains older global product-card and WooCommerce rules in addition to the later Shop controlled rebase. Strict 1:1 cannot be validated only by reading the controlled block; the effective cascade must be checked for desktop and mobile.

Known examples include older generic `.sf-product-card` / `.woocommerce ul.products li.product` styling and older mobile product-card hotfixes. The controlled Shop block overrides many of these, but the audit must verify the actual winner for every important property rather than assuming it.

### 3. Typography system consistency

The reference uses Cormorant Garamond for editorial serif and Inter for sans/microcopy. The Shop implementation historically mixed JetBrains Mono into breadcrumb, filter, meta, price-label, section microcopy and other small text.

Some of those locations were changed in the recent batch, but the complete Shop still needs a typography-family audit. Strict acceptance must check:

- font family;
- size;
- weight;
- line-height;
- letter spacing;
- italic usage;
- text transform;
- line length.

### 4. Hero

The large structural geometry already tracks the reference reasonably closely, but strict acceptance still requires screenshot-level comparison of:

- kicker color / position;
- H1 scale and optical weight;
- Hero meta hierarchy;
- meta label family and emphasis;
- right-column lede / body / signoff rhythm;
- divider tone;
- vertical balance between left and right columns.

### 5. Toolbar / filters / sort

The functional architecture is preserved and must remain WooCommerce-owned. Visual review still needs to resolve:

- overall tone against the correct beige canvas;
- filter microtype;
- active underline contrast;
- plus-sign spacing;
- sort-label and select relationship;
- desktop baseline alignment;
- mobile overflow / wrapping / density;
- active-filter chips as an approved production extension rather than a static-reference element.

### 6. Editor's Pick

The main grid ratio is close to the reference, but strict review remains required for:

- image treatment and hover behavior;
- stamp typography;
- terracotta kicker;
- heading optical scale;
- subtitle/body/place-note hierarchy;
- place-note rule color;
- footer line;
- price label family;
- price scale;
- View Piece button geometry;
- Ghost / Studio-note control;
- whitespace distribution in the right column.

The mobile Editor's Pick remains intentionally hidden by prior user-approved production decision.

### 7. Product section heading

The front-end section kicker was removed, but the remaining heading/count still needs strict alignment for:

- top spacing;
- baseline alignment;
- heading scale;
- count microtype;
- line color / transition into the grid.

### 8. Product grid and product-card editorial structure

The grid geometry is broadly close on desktop, but the card layer remains one of the largest visual differences.

Audit items:

- image surface tone;
- image aspect and true rendered height;
- Wishlist placement / visual weight;
- View piece hover overlay;
- title scale;
- editorial meta visibility and fallback behavior;
- price hierarchy;
- placement note visibility;
- line treatment;
- vertical rhythm across cards with different data completeness;
- behavior when `_sf_material`, `_sf_piece_reference`, `_sf_placement` are empty;
- whether placeholder imagery visually matches the reference surface.

The new Shop card template reuses the existing product-editable fields instead of fabricating content.

### 9. Missing product data vs template defects

A strict visual audit must separate template defects from missing catalog content. Many production products currently lack product imagery and/or the editorial product fields used by the static card design. This makes the page look less complete even when the template supports the layer.

Do not fabricate data merely to make the screenshot look like the reference.

### 10. Desktop pagination

The recent batch changed the structure toward left / center / right. It still requires runtime visual validation for:

- left Previous presence and contrast;
- center page-number spacing;
- active circle size;
- right Next placement;
- divider tone;
- desktop horizontal balance;
- first/last-page disabled treatment.

### 11. Closing editorial note

The structure now follows the static two-column concept more closely, but screenshot-level review remains required for:

- left copy line length;
- italic bluestone emphasis;
- right copy width;
- gap between columns;
- button scale and position;
- vertical spacing before the contact band.

### 12. Contact-band transition

The contact/newsletter component is not the same thing as the static Shop closing note and visually introduces a large rounded beige card before the CLOSED footer.

The audit must decide its status precisely:

- retained production extension;
- whether its color, spacing and transition can coexist with the Shop reference visual language;
- whether it causes a visual break between Shop canvas and the CLOSED Footer.

Do not reopen the Footer itself.

### 13. Mobile-specific visual system

The mobile page must be audited separately. It is not enough to inherit desktop acceptance.

Known approved divergence:

- two-column ordinary mobile product grid remains;
- Editor's Pick remains hidden on mobile.

Still unresolved:

- white canvas vs reference palette;
- Hero density and vertical rhythm;
- filter/sort density;
- card image ratio and effective CSS winner;
- card title/body/price hierarchy inside narrow columns;
- wishlist visual scale;
- missing editorial meta / placement data;
- pagination legibility;
- closing-note rhythm;
- contact-band scale and footer transition.

### 14. Effective-CSS audit requirement

Before the next implementation batch, the Shop audit must inspect not only the Step 4C controlled block but all older global selectors that can still match Shop markup. Strict 1:1 changes must be based on effective cascade ownership, not source-block intention.

## Execution freeze

Do not issue another code-edit batch yet.

Next action is to consolidate a complete visual Delta Matrix from:

1. static reference source;
2. current desktop screenshot;
3. current mobile screenshot;
4. latest uploaded CSS;
5. current archive-product.php / content-product.php;
6. approved production divergences;
7. missing-data conditions.

Only after that matrix is complete should remediation be sequenced.
