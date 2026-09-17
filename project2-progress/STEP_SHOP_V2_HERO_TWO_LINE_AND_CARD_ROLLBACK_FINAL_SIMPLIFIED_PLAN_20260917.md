# Shop V2 — Hero two-line correction implementation plan simplified

Date: 2026-09-17

## Supersedes

This record supersedes the prior implementation-ready note that proposed adding a new Customizer field for the Hero line break.

## Final bounded approach

Do NOT add another Customizer field.

Keep the existing backend-editable owners:
- Shop Hero Title
- Shop Hero Italic Word

For the root Shop only:
- use the configured italic word as the anchor;
- insert one safe <br> before the word immediately preceding that italic word;
- then apply the existing <em> emphasis;
- allow only br + em in H1 output.

With the current backend values:
- Title: Objects for the Quiet Room.
- Italic word: Quiet

Output becomes:
Objects for
the Quiet Room.

This preserves backend editability without adding UI clutter.

## CSS correction

- remove the root-Shop max-width: 560px workaround;
- add text-transform: none !important to the Shop Hero H1 owner.

## Product-card rollback

Restore direct _sf_material / _sf_piece_reference / _sf_placement behavior.
Remove only the recently added placeholder-suppression logic.

## Candidate validation

- content-product.php candidate PHP syntax: PASS
- archive-product.php candidate PHP syntax: PASS
- CSS braces/comments balanced
- generated default Hero markup verified:
  Objects for <br>the <em>Quiet</em> Room.

## Batch boundary

This batch does NOT yet change products-per-page.
12-products-per-page remains the next step after source + runtime acceptance of this rollback/Hero correction.

Status:
FINAL IMPLEMENTATION READY / SOURCE VALIDATION REQUIRED AFTER USER APPLIES.
