# Shop V2 — Frozen feature centered reset source validation: one residual duplicate

Date: 2026-09-18

## File validated

User-uploaded current spatial-flow.css after restoring the frozen legacy Editor's Pick to the earlier centered adaptive presentation.

## Validation

Structural checks:
- braces balanced: 3550 / 3550;
- comments balanced: 276 / 276;
- intended centered block is present:
  - display:flex !important;
  - flex-direction:column;
  - justify-content:center;
  - align-items:stretch !important;
  - __main max-width:none;
  - footer margin-top:34px;
- no later Editor's Pick __main or __footer override was found.

## Residual issue

Immediately before the intended centered flex block, one obsolete duplicate rule still remains:

body.post-type-archive-product.woocommerce-shop .sf-shop-v2-editor-pick__copy {
  display: grid !important;
  grid-template-rows: auto minmax(40px, 1fr) auto;
  align-items: start !important;
  min-width: 0;
  min-height: 100%;
  padding: 40px 0 !important;
}

The later flex rule currently wins because it has the same specificity and comes later, so runtime should still use the centered layout. However the obsolete grid rule is dead/conflicting code and should be removed now rather than carried forward.

## Decision

Delete only the obsolete grid duplicate above.
Keep the immediately following flex-centered rule unchanged.

After deletion:
- source is clean for the temporary frozen-feature reset;
- desktop runtime can be checked once;
- then proceed to Mobile 01 Filter / Sort review.

Status:
CONDITIONAL PASS — ONE OBSOLETE DUPLICATE RULE TO DELETE.