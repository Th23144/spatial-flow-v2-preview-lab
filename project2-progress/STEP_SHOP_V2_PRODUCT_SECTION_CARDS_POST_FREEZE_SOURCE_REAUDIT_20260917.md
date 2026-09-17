# Shop V2 — Product Section / Cards post-freeze source re-audit

Date: 2026-09-17

## Scope

Resume Shop strict review below the frozen Custom Studio / former Editor's Pick block.

Audited:
- current uploaded archive-product.php
- current uploaded content-product.php
- current Shop controlled CSS
- preview/spatial-flow-shop-v1.html reference

No production code change in this record.

## Source findings

### Product section shell

Current archive source already owns:
- editable section title
- real showing range / total count
- WooCommerce native loop
- four-column desktop grid
- native pagination wrapper

Current CSS already matches the reference's major desktop geometry:
- 4 columns
- 56px row gap
- 40px column gap
- 32px grid top padding
- 80px grid bottom padding
- section title left / count right

Approved wider Shop frame remains protected.

### Product card structure

Current content-product.php already implements the intended reference hierarchy with real data:

- 4:5 media
- YITH Wishlist production extra
- desktop View piece → quick reveal
- product title
- editorial subline from _sf_material + _sf_piece_reference
- real Woo price
- optional _sf_placement note

Current CSS already matches the reference's main card treatment:
- no image zoom
- 4:5 image owner
- Cormorant italic editorial subline
- Inter price
- Cormorant italic blue placement note with top rule and ↳ marker
- desktop quick-action reveal
- mobile quick action hidden
- approved two-column phone layout retained

### Important remaining data-hygiene defect

The selected Black Myth product previously exposed stored values that are clearly editor-label / placeholder-like strings:

- Product Attributes · Material
- Summary · Placement Suggestion

Editor's Pick gained explicit suppression for these exact placeholders, but current content-product.php does NOT apply the same suppression before building card editorial meta / placement.

Therefore those values can leak into ordinary Shop cards and appear as if they were genuine editorial product copy.

This is a real bounded card-output defect and should be corrected in content-product.php before runtime card acceptance.

### Section-title emphasis

The static sample uses an italic emphasized word in the section title (The full <em>edit</em>), while the current section title is a backend-editable plain text value.

Do not auto-hardcode an emphasis word yet. The live title is intentionally editable and may be The Quiet Archive or another phrase. Treat emphasis as a later micro-detail decision only if runtime review shows it is needed.

## Decision

Do NOT rebuild Product Section / Cards.

Next implementation should be a narrow content-product.php hygiene fix only:
- suppress the two known placeholder-like Material / Placement values;
- retain category fallback when real Material + Reference are empty;
- retain real Placement when non-placeholder;
- no CSS change.

After that:
- source validate content-product.php;
- runtime-check desktop cards / hover;
- then proceed directly to Pagination.

## Status

PRODUCT SECTION / CARDS SOURCE RE-AUDIT: PASS WITH ONE BOUNDED DATA-HYGIENE FIX REQUIRED.
