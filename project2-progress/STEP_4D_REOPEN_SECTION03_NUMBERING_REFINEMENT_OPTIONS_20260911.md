# Project 2 · Step 4D REOPEN · Section 03 numbering visual refinement options · 2026-09-11

## Current project stage
Single Product reopened remediation. `Section 03 · Care & Ritual` implementation itself is already **ACCEPTED / CLOSED**.

This record covers only the deferred visual treatment of the reference-faithful `i. / ii. / iii.` markers.

## Trigger
During desktop and 390px runtime review, the user explicitly judged the `i. / ii. / iii.` markers visually awkward / not coordinated, but chose to finish Section 03 acceptance first and plan the numbering adjustment afterward.

The Section 03 acceptance baseline must remain protected while this refinement is decided.

## Accepted baseline that must not regress
- backend-editable Section 03 fields remain unchanged
- desktop remains a three-unit editorial layout
- 390px remains a one-column editorial stack
- unit order remains Everyday → Seasonal → Repair
- all three body fields empty => entire Section 03 disappears
- Section 03 remains after Section 02 and before Related Products / future Section 04
- no WooCommerce product/cart/checkout/payment ownership changes

## Visual diagnosis
The original static reference uses tiny Roman numerals above each care unit. In the live implementation this is structurally faithful, but the markers can read as isolated residual symbols rather than intentional hierarchy, especially on mobile where each numeral occupies its own line above an already self-explanatory unit heading.

This is therefore a design refinement, not a functional defect.

## Candidate directions

### Option A · Keep Roman numerals, integrate them into the heading line
Example:
`i.  The Everyday.`
`ii. The Seasonal.`
`iii. The Repair.`

Intent:
- preserves the editorial Roman-number character
- removes the orphaned floating-number feeling
- reduces vertical fragmentation on mobile
- smallest conceptual departure from the reference

Risk:
- still carries a slightly literary / decorative convention that may remain unnecessary

### Option B · Replace Roman numerals with 01 / 02 / 03
Example:
`01  The Everyday.`
`02  The Seasonal.`
`03  The Repair.`

Intent:
- stronger contemporary editorial-system language
- visually aligns better with the page-level `SECTION · 03` numbering system
- immediately legible on desktop and mobile
- easier to tune with mono typography without looking accidental

Risk:
- departs more clearly from the literal static reference

### Option C · Remove unit numbers entirely
Example:
`The Everyday.`
`The Seasonal.`
`The Repair.`

Intent:
- cleanest and quietest composition
- unit names already provide sufficient differentiation
- removes all redundant micro-hierarchy

Risk:
- loses one layer of editorial rhythm from the reference
- the three columns may feel slightly less structured on desktop

### Option D · Convert numbering into a subtle rule/index accent
Example concept:
`01 ─────  The Everyday.`
with the number reduced in contrast and visually joined to a short rule / heading system rather than floating alone.

Intent:
- keeps the editorial index idea while making it visibly intentional
- can become a stronger branded detail than either plain Roman or plain Arabic numerals

Risk:
- highest redesign scope of the four options
- needs a separate desktop/mobile visual check because it changes composition rather than only text style

## Current recommendation
**Option B is the strongest default candidate** for this live page because it keeps a structured editorial hierarchy while aligning with the existing `SECTION · 03` system and avoiding the isolated-symbol appearance seen in the accepted runtime screenshots.

Option C is the strongest alternative if the user prefers maximum quietness / minimalism.

## What is intentionally NOT changed
No PHP, CSS, template, backend field, WooCommerce behavior, or accepted Section 03 runtime state is changed by this options record.

## User acceptance status
Decision pending. No implementation is authorized until the user chooses a direction.

## Current stop point
`SECTION 03 NUMBERING REFINEMENT — VISUAL DIRECTION DECISION PENDING`

## Exact next action
Present Options A–D against the accepted desktop/mobile behavior and obtain the user's preferred direction. After the user chooses, record that decision before issuing any source edit or implementation instruction.
