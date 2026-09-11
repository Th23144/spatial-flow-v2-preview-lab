# Project 2 · Step 4D REOPEN · Section 03 numbering B/C local HTML previews · 2026-09-11

## Current project stage
Single Product reopened remediation · Section 03 post-acceptance bounded visual refinement.

Section 03 · Care & Ritual itself is already ACCEPTED / CLOSED. This step does not reopen its functional acceptance; it only compares the deferred numbering treatment.

## User request
The user wants to see both previously shortlisted alternatives before choosing:
- **Option B**: replace `i. / ii. / iii.` with `01 / 02 / 03` and place the number inline with each care-unit heading.
- **Option C**: remove numbering entirely and keep only the care-unit headings and body copy.

The user explicitly requested **no images**.

## Preview method
Three standalone local HTML preview files were generated outside the repository so the repository is not polluted by disposable comparison artifacts:
- `section03-numbering-b-vs-c.html` — side-by-side B/C comparison
- `section03-option-b.html` — B only
- `section03-option-c.html` — C only

Each preview includes:
- the accepted Section 03 background / typographic direction
- desktop three-column composition
- an embedded 390px mobile simulation
- no product images or decorative image assets

These HTML files are comparison artifacts only. They are **not** live WordPress code, are **not** committed into this repository, and do not modify the accepted Section 03 implementation.

## What was intentionally NOT changed
- no `functions.php` change
- no `woocommerce/single-product.php` change
- no `assets/css/spatial-flow.css` change
- no WooCommerce data or behavior change
- no Section 03 backend field, save logic, hide-empty rule, desktop/mobile acceptance state, or other Single Product section changed

## Acceptance status
Visual decision pending user review.

## Current stop point
`SECTION 03 NUMBERING REFINEMENT — B vs C local HTML comparison ready; awaiting user choice`

## Exact next action
User reviews the HTML comparison, then explicitly chooses B, C, or requests another bounded variation. Only after a direction is selected should an implementation delta be prepared and recorded.
