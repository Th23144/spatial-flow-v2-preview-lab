# Utility / Policy Long-form Stress Test 01

Date: 2026-09-23
Project: Spatial Flow V2 / 项目二换皮工程

## Purpose

The user asked whether the approved Utility / Policy visual system would remain attractive and readable when used by real policy pages with substantially more information.

A dedicated long-form stress-test artifact was created without changing the shorter Policy template.

## Artifact

Branch:
`temp-policy-wishlist-led-01`

File:
`temp-preview/Spatial-Flow-Policy-Longform-Stress-Test-01.html`

Scenario:
Returns & Refunds-style long policy content.

Important:
The wording is illustrative stress-test content only. It is not approved production legal copy.

## Density applied

The test includes:
- 11 policy sections
- about 2,000 visible words
- 30+ body paragraphs
- long desktop sticky contents index
- multiple bulleted and numbered lists
- secondary H4-style subheads
- multiple callout blocks
- four-column reference table
- final support route
- consecutive text-heavy sections without decorative interruption

## Design system preserved

- Header / Footer shell = 1720px
- page body = 1480px + internal padding
- Cormorant Garamond = editorial heading roles
- Inter = policy body / functional reading
- JetBrains Mono = restrained document metadata
- sage italic emphasis = #4A5D5A
- Footer trust rail retained

## Structural verification

PASS:
- HTML structure balanced
- CSS braces balanced
- JavaScript syntax valid
- 1480 / 1720 hierarchy preserved
- desktop sticky index present
- mobile index returns to normal document flow
- wide table is isolated in an overflow-x wrapper
- no fixed-width page-level element above 390px found

The policy table intentionally keeps a 620px minimum width inside its own horizontal-scroll container. This is localized table scrolling, not page-level overflow.

## Current gate

SHORT POLICY TEMPLATE = VISUAL DIRECTION ACCEPTABLE.
LONG-FORM POLICY STRESS TEST = READY FOR USER VISUAL REVIEW.

Do not lock the shared Utility / Policy system until the long-form visual review is completed.
