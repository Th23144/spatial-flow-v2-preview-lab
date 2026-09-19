# Shop V2 — Mobile Pagination Compact V3 accepted and implementation ready

Date: 2026-09-19
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User decision

The user accepted the Compact V3 phone pagination study with five center pagination tokens:

`可以，就这样，开始`

## Accepted composition

Phone only:
- keep Previous on the left;
- keep Next page on the right;
- keep the center pagination cluster on the same single row;
- show a maximum of five center pagination tokens around the current page;
- retain the current dark circular active-page treatment;
- use tighter 26px number tokens and restrained gaps;
- remove the rejected two-row/tall pagination layout;
- reduce pagination vertical height back to a compact editorial rhythm.

Desktop pagination remains unchanged.
Closing Note Mobile Centered V3 remains unchanged.

## Source constraint

WooCommerce owns the actual pagination markup and may emit an ellipsis token near the first/last page instead of every skipped numeric link.

Therefore the CSS-only phone implementation keeps WooCommerce as owner and selects up to five existing center tokens around the current page.

Expected edge behavior with the current eight-page archive:
- first page: 1 2 3 4 …
- second page: 1 2 3 4 5
- middle pages: five centered neighbor tokens
- second-last page: 4 5 6 7 8
- last page: … 5 6 7 8

This preserves native link ownership and avoids fabricating non-clickable page numbers.

## Bounded CSS implementation

Replace only the current max-width:767px Shop pagination override:
- nav padding 40/54 -> compact 28/30;
- ul 74px two-row box -> 30px single-row box;
- numeric token 30px -> 26px;
- Prev/Next labels 9px -> 8px;
- hide non-selected center li elements on phone;
- reveal current +/-2 plus edge compensation to maintain five center tokens where the native Woo markup provides them.

No PHP or JS change.

## Hard boundaries

Do not modify:
- functions.php pagination label filter;
- archive-product.php;
- desktop pagination;
- Shop product cards;
- Closing Note;
- Header / Footer;
- filter/sort;
- DIY / Custom Studio.

Status:
COMPACT V3 FIVE-TOKEN PHONE PAGINATION ACCEPTED / CSS IMPLEMENTATION READY.
