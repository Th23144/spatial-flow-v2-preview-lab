# Policy Long-form Stress Test 01 FAIL + Reading Mode 02

Date: 2026-09-23
Project: Spatial Flow V2 / 项目二换皮工程

## User decision on Long-form Stress Test 01

The user described the first long-form stress test as “怪怪的”.

Interpretation:
LONG-FORM STRESS TEST 01 = FAIL as a final visual solution.

Reason exposed by the test:
- 11-item sticky contents list became documentation-like
- every section repeated the same large-serif / green-italic / divider pattern
- long content became componentized rather than continuous
- green italic emphasis was overused
- the page increasingly resembled documentation rather than a Spatial Flow policy page

The short Standard Policy template remains visually acceptable.

## Reading Mode 02

New artifact:
`temp-preview/Spatial-Flow-Policy-Longform-Reading-02.html`

Branch:
`temp-policy-wishlist-led-01`

### Core changes

- same 1720 Header / Footer shell
- same 1480 page body
- long reading column constrained to about 820px
- intentional negative space retained to the right on wide screens
- contents reduced to 6 major sections
- major article sections = 6
- most long-form subheads moved to restrained Inter
- editorial Cormorant retained only for major anchors
- sage-green italic is no longer repeated through every section
- ordinary text flows continuously without a divider after every section
- only two quiet reading breaks used across the document
- callout-card rhythm removed from the long body
- table remains isolated in its own horizontal-scroll wrapper
- mobile contents enters normal flow and uses two columns at phone width

### Static verification

PASS:
- HTML structure balanced
- CSS braces balanced
- JavaScript syntax valid
- all internal anchor targets resolve
- 1480 / 1720 hierarchy retained
- long reading lane = 820px
- policy contents = 6 items
- 1040px / 600px responsive rules present
- no fixed page-level width over 390px
- table retains intentional 620px min-width only inside overflow-x wrapper

## Current gate

STANDARD POLICY = visual direction acceptable.
LONG-FORM 01 = FAIL / retained only as pressure-test evidence.
LONG-FORM READING 02 = READY FOR USER VISUAL REVIEW.

Do not proceed to Services until user decides whether Reading Mode 02 solves the long-policy problem.
