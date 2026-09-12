# Project 2 · Step 4D-REOPEN · Remaining Hero / Summary back-audit PASS and closure · 2026-09-12

## Basis

This result combines:
- the fresh desktop and 390px live screenshots supplied during the current Hero / Summary back-audit;
- the corrected current source ownership for Hero editorial metadata;
- the now-accepted Hero Gallery runtime batch;
- the previously isolated mismatch list from the fresh back-audit.

## Fresh back-audit result

The previously identified concrete Hero / Summary defects were:

```text
1. Gallery interaction language drift:
   large-image round arrows + `1 / N` counter did not match the target editorial language.

2. Hero public identity ownership drift:
   native WooCommerce SKU was being exposed as the public editorial identifier.
```

Both defects are now resolved:

```text
Gallery
- large-image round arrows removed
- `1 / N` removed
- four-thumbnail viewport retained
- thumbnail numbering retained
- >4-image navigation handled by subtle thumbnail-window controls
- variable-product reset synchronization accepted
- desktop + 390px runtime accepted

Hero public identity
- `_sf_piece_reference` now owns public Reference / Piece Code
- WooCommerce SKU remains inventory / operations data
- empty Reference remains hidden
- no fake fallback is generated
```

## Remaining Summary-side audit

The fresh screenshots and current implementation support PASS for the remaining Summary surfaces:

```text
- desktop Hero/Summary two-column composition
- mobile one-column responsive composition
- title hierarchy
- optional subtitle placement
- live WooCommerce price ownership
- shipping note placement
- Placement Suggestion composition and editable ownership
- short description / excerpt hierarchy
- visual variation controls
- quantity + Add to Cart geometry
- Wishlist / Share utility actions
- three-column desktop Trust Strip
- responsive Trust Strip behavior
- no reported horizontal overflow
```

WooCommerce state remains authoritative. In particular, Add to Cart being disabled before required variation selection is valid production behavior and is not treated as a strict-reference defect.

## Closure

```text
Hero Gallery: USER / RUNTIME ACCEPTED / CLOSED
Remaining Hero / Summary strict back-audit: PASS
Hero / Summary overall: ACCEPTED / CLOSED for the current Single Product back-audit
Single Product page overall: still Not done
```

This closure protects the current Hero / Summary implementation from further speculative changes. Reopen only with new concrete evidence.

## Next stop

Continue downward through the historical-PASS back-audit:

```text
Product Attributes
→ Section 01 / The Piece
→ Section 02
→ section transitions
```

Gift CTA / Closing Editor's Note remains paused until the historical-PASS back-audit is complete.
