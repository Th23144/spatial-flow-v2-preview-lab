# Project 2 · Step 4D REOPEN · Section 03 Option C final runtime acceptance · 2026-09-11

## Current stage
Step 4D-REOPEN · Single Product remediation

Bounded refinement: Section 03 · Care & Ritual · Option C numbering removal + strict-reference border correction.

## Evidence received
The user returned fresh live screenshots after installing the source-validated `functions.php` v2.7.41 and corrected `spatial-flow.css`:
- desktop screenshot covering Section 03 through the beginning of Related Product Navigation
- 390px-class mobile screenshot covering Section 03 through the beginning of Related Product Navigation

## Desktop runtime review
PASS.

Observed live state:
- `i. / ii. / iii.` numbering remains absent
- Section 03 has no top border
- three-column desktop layout remains intact
- unit titles and care body copy remain intact
- Section 03 ends with one divider line
- Related Products no longer contributes a second top border
- therefore the prior double-line / extra-line drift is removed

## Mobile runtime review
PASS.

Observed live state:
- numbering remains absent
- Section 03 has no top border
- unit stack remains one column
- the former per-unit separator borders between Everyday / Seasonal / Repair are gone
- spacing remains readable and intentional after separator removal
- Section 03 ends with one divider line before Related Product Navigation
- no visible horizontal overflow, clipped corner, or structural collapse is present in the supplied viewport

## Empty-content behavior
The all-three-bodies-empty behavior was already runtime-accepted earlier: the user confirmed that the entire Section 03 disappeared when all three care bodies were cleared.

The subsequent Option C and border-correction source audits established bounded deltas only:
- removal of the number output span / number CSS
- removal of three visual `border-top` declarations
- asset version bumps

The Section 03 content predicate, backend fields, save logic, loop, and full-section conditional were not changed. Therefore the previously accepted empty-content behavior remains protected; no redundant destructive re-entry test is required for this visual-only closure.

## Acceptance result
```text
Option C numbering removal: USER / RUNTIME ACCEPTED
Strict 1:1 border correction: USER / RUNTIME ACCEPTED
Section 03 final refined state: CLOSED
```

This closes only the bounded Section 03 refinement. It does **not** mark the full Single Product page `Completed 1:1`.

## Files / subsystem affected
- `assets/css/spatial-flow.css`
- `functions.php` only for asset versioning
- previously accepted `woocommerce/single-product.php` Option C number-output removal remains protected

## Intentionally not changed
- WooCommerce data ownership
- Section 03 backend editability
- Section 03 title/body content model
- all-three-bodies-empty visibility logic
- Section 02
- Related Products content/source ownership
- Section 04 reviews
- any later Single Product section

## Current stop point
Section 03 · Care & Ritual, including the later Option C visual refinement, is now accepted and closed.

Single Product overall binary status remains:

```text
Not done
```

## Exact next action
Resume the authoritative Single Product remediation plan at the next unresolved item after Section 03. Do not fabricate Section 04 review content; Section 04 remains real WooCommerce reviews only. Review the existing remediation plan / current source before issuing the next implementation step.