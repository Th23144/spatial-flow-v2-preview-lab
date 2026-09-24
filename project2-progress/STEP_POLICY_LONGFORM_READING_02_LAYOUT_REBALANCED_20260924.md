# Policy Long-form Reading 02 Layout Rebalance

Date: 2026-09-24
Project: Spatial Flow V2 / 项目二换皮工程

## User-approved action

The user asked to begin fixing the previously diagnosed Long-form Reading 02 layout imbalance.

## Fix applied

The global 1480 body wrapper and 1720 Header / Footer shell were not changed.

The internal long-form grid was returned to the geometry already proven by the accepted short Policy template:

- sidebar: 230px
- document column: flexible, capped at 900px
- gap: clamp(52px, 7vw, 110px)
- removed the empty third grid track that was accumulating space only on the right
- removed the 820px desktop cap that was unnecessarily shrinking the document
- tablet breakpoint uses 210px sidebar + flexible document
- single-column document is explicitly centered with auto side margins

## What remains intentionally different from the short template

Only long-form reading behavior remains different:
- 6 major contents items
- quieter continuous body flow
- fewer green-italic accents
- restrained Inter subheads
- limited reading breaks
- long table inside localized horizontal-scroll wrapper

## Static verification

PASS:
- short and long templates now share the same desktop grid geometry
- no third empty column remains
- long-form document max width restored to 900px
- mobile / single-column document explicitly centered
- HTML balanced
- CSS balanced
- JavaScript syntax valid
- 1480 / 1720 hierarchy unchanged
- no page-level fixed-width overflow found
- 620px table minimum width remains intentionally localized inside overflow-x wrapper

Status:

LONG-FORM READING 02 = LAYOUT REBALANCED / READY FOR USER VISUAL REVIEW.
