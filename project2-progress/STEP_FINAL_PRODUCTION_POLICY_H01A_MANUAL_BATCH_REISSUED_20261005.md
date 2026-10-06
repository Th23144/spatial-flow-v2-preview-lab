# Final Production Policy Family — H01A Manual Anchored Batch Reissued

Date: 2026-10-05
Project: Spatial Flow V2 / Project 2

## Why this record exists

The repository already contained:

- `STEP_FINAL_PRODUCTION_POLICY_FAMILY_MAPPING_START_AND_SOURCE_GATE_20261005.md`
- `STEP_FINAL_PRODUCTION_POLICY_H01A_REFUND_READING03_MANUAL_BATCH_READY_20261005.md`

The earlier H01A record preserved the architecture decision and a previously verified candidate identity, but the actual candidate files / full replacement blocks were not persisted.

The current continuation therefore does **not** pretend the old target hashes can be reproduced from the record alone.

H01A has been rebuilt from the same accepted authority against the same confirmed baseline, and a new manual anchored batch is being issued.

## Confirmed baseline

`functions(20261005-133338).php`
- 658,030 bytes
- 12,558 logical lines
- version `2.7.69`
- prior confirmed SHA256 `2eb7ac7e103e4d8f015fb96955328003f41d2d79d953f22d01019a3e9c6b325b`

`spatial-flow(20261005-133337).css`
- 628,207 bytes
- prior confirmed SHA256 `4e1dfdccb176c48ee530a9e8c03e538a061615b3d2366831ab3543b3e1b3a4bd`

## Locked H01A scope

Preserve:
- route `/refund-returns-policy/`
- `spatial_flow_refund_returns_native_template()`
- `spatial_flow_refund_customizer()`
- all existing `sf_refund_*` content/link owners
- real policy meaning/copy ownership
- Header/Footer
- later Refund top-gap neutralizer unless runtime proves it obsolete

Change only:
1. `SPATIAL_FLOW_CHILD_VERSION` 2.7.69 -> 2.7.70
2. replace `spatial_flow_render_refund_returns_page()` presentation block and add the H01 title-emphasis helper
3. replace the old Step 5I Refund CSS block **together with** Step 5I SAFE2 with one canonical H01 presentation owner

Do not change:
- Customizer registration
- template_redirect
- Privacy / Shipping / Terms yet
- Services / FAQ / Track Order / Care Guide

## Rebuilt H01A architecture

The renderer maps existing fields into Reading 03 roles:

- hero kicker/title/text -> policy intro
- hero primary/secondary actions -> compact toolbar
- breadcrumb current label -> document identity
- hero card title/text -> document lede
- hero mini fields -> document metadata
- overview + policy card 1 -> Chapter 01
- policy card 2 -> Chapter 02
- policy card 3 -> Chapter 03
- process + four steps -> Chapter 04
- conditions + four notes -> Chapter 05
- CTA + existing actions -> Chapter 06

The stored breadcrumb-home field remains untouched but is not rendered because Reading 03 has no breadcrumb row.

## Presentation ownership

New inner presentation owner:
`.sf-policy-h01-*`

Route wrapper retained:
`.sf-refund-policy-page`

The renderer no longer uses the old generic `.sf-policy-page` card owner, preventing the historical generic policy system from re-owning Refund.

## Fragment verification before manual delivery

PHP replacement fragment:
- standalone parser wrapper: PASS
- `php -l`: PASS

The earlier unpersisted CSS fragment metrics are superseded by the user-facing reissued CSS replacement below.

## Returned functions.php acceptance — 2026-10-05

User returned:
`functions(20261006-055325).php`

Verified:
- 663,401 bytes
- 12,645 logical lines
- SHA256 `40b6417159f6cc4c33212f93233e5667f6c8f208c5c8a8a1a6ded0d98dece96d`
- version `2.7.70`
- PHP syntax PASS
- `spatial_flow_policy_h01_title_html` token count 4: expected helper guard + definition + two renderer calls
- old `sf-policy-page sf-refund-policy-page` wrapper count 0
- `spatial_flow_render_refund_returns_page()` definition count 1
- `spatial_flow_refund_returns_native_template()` owner count 1
- `spatial_flow_refund_customizer()` owner count 1
- new H01 wrapper count 1

Verdict:
**functions.php H01A PASS**

## User-facing CSS replacement — reissued after PHP acceptance

Replacement file:
`H01A_spatial-flow_css_replacement.css`

This is the canonical replacement payload for the inclusive range:
- START: `/* === Spatial Flow Step 5I: Refund / Returns Policy Native Page START === */`
- END: `/* === Spatial Flow Step 5I SAFE 2: Refund Policy Layout Conflict Hotfix END === */`

Replacement payload verification:
- 16,257 UTF-8 bytes
- 766 logical lines
- SHA256 `785fe00261404ad0ecc8997360dfc234e64c211bc902b8a1bc455c3f673c34a6`
- braces 116 / 116
- comments 14 / 14
- tinycss2 top-level parse errors 0

The later Refund/Astra top-gap neutralizer outside this old Step 5I + SAFE2 range remains in place for H01A runtime unless later testing proves it unnecessary.

## Required post-edit gate

After the CSS replacement is applied, the returned **complete H01A batch** must contain both:
- accepted `functions.php`
- edited `assets/css/spatial-flow.css`

Then check:
- exact version 2.7.70
- PHP syntax
- CSS braces/comments/parse
- byte size / logical lines / SHA256
- anchor uniqueness
- old Step 5I + SAFE2 presentation blocks absent
- canonical H01 CSS owner present once
- native template / Customizer ownership unchanged

Only then proceed to Refund runtime testing.

## Runtime sequence after Source Gate

Refund / Returns:
- desktop
- 1024
- 390–430 mobile
- 360 only if pressure appears

Then, and only after H01A runtime acceptance:
H01B -> Privacy / Shipping / Terms reusable WP-content presentation layer.

## User-corrected multi-file delivery rule

This is a standing Project 2 execution rule, not a one-window preference:

- If one implementation step touches multiple files, issue **all files / all manual edit operations for that step together as one coherent batch**.
- Do not make the user finish and return file A before revealing file B when A and B belong to the same implementation step.
- The returned-file Source Gate is also performed on the complete batch.
- Only split a step when there is a real technical dependency that makes simultaneous editing unsafe; if that happens, state the dependency explicitly.
- This rule must be carried across windows and takes precedence over conversational convenience.

The previous H01A delivery that sent functions.php before the CSS was a process error. It is corrected here so later windows do not repeat it.

Status: H01A FUNCTIONS PASS / CSS MANUAL REPLACEMENT PENDING / COMBINED WHOLE-FILE SOURCE GATE PENDING.


## CSS returned-file Source Gate — 2026-10-06

User returned:
`spatial-flow(20261006-073926).css`

Whole-file verification:
- 629,705 bytes
- 22,646 physical lines
- SHA256 `c19efa63fac28512d9337414fed4461d64cb8dc988837092d904fe38e8e35a41`
- trailing LF present
- braces 3556 / 3556
- comments 251 / 251
- tinycss2 top-level parse errors: 0

H01A owner verification:
- new H01A START marker: 1
- new H01A END marker: 1
- old Step 5I START marker: 0
- old Step 5I SAFE2 END marker: 0
- replacement payload including trailing LF: 16,257 bytes
- replacement payload SHA256: `785fe00261404ad0ecc8997360dfc234e64c211bc902b8a1bc455c3f673c34a6`
- replacement payload matches the issued user-facing CSS exactly

Target-region integrity:
- baseline whole CSS: 628,207 bytes
- old inclusive Step 5I + SAFE2 region including following LF: 14,759 bytes
- new H01A region including following LF: 16,257 bytes
- exact expected delta: +1,498 bytes
- returned whole CSS: 629,705 bytes = exact expected whole-file size
- old region 675 lines -> new region 766 lines = +91 lines
- returned file line delta matches exactly
- boundary before replacement remains `Project2 Header V2 Production — Attached Shop Mega END`
- boundary after replacement remains `Spatial Flow Step 5K: FAQ / Help Native Rebuild START`

Preserved later owner:
- `Spatial Flow Step 5K SAFE 2: FAQ Sticky + Refund Top Gap Hotfix` remains present
- Refund/Astra top-gap neutralizer remains active pending runtime review

## H01A combined Source Gate

Accepted functions.php:
- `functions(20261006-055325).php`
- version 2.7.70
- PHP syntax PASS
- SHA256 `40b6417159f6cc4c33212f93233e5667f6c8f208c5c8a8a1a6ded0d98dece96d`

Accepted CSS:
- `spatial-flow(20261006-073926).css`
- CSS structural/parse gate PASS
- SHA256 `c19efa63fac28512d9337414fed4461d64cb8dc988837092d904fe38e8e35a41`

Verdict:
**H01A COMBINED SOURCE GATE PASS**

Next:
Runtime acceptance on `/refund-returns-policy/` at desktop -> 1024 -> 390–430 -> 360 only if pressure appears.

Status: H01A SOURCE PASS / RUNTIME ACCEPTANCE PENDING.


## H01A Typography correction Source Gate — 2026-10-06

User returned:
`spatial-flow(20261006-080532).css`

Purpose:
Correct the whole-page typography hierarchy after desktop runtime review showed that Reading 03 had been transferred too literally as micro-editorial typography: too many 9–10px labels, excessive mono usage, body copy too light/gray, and weak section hierarchy.

Verified whole file:
- 629,730 bytes
- 22,649 physical lines
- SHA256 `65b3e703af67abc893898b6aa0a3593cae700720448ed98680378870b4c59c04`
- trailing LF present
- braces 3556 / 3556
- comments 251 / 251
- tinycss2 top-level parse errors: 0

Diff audit against accepted pre-typography file `spatial-flow(20261006-073926).css`:
- 20 diff hunks
- every hunk is inside the H01A Refund Reading 03 block
- no changes outside the H01A block
- all requested typography corrections are present
- desktop/base font weight increased
- kicker / toolbar / Contents / metadata / lede / chapter headings / body / lists / chapter rail / steps / action links corrected
- mono reduced from descriptive labels where inappropriate
- mobile H01 body copy corrected from 14px to 15px
- structure, widths, sticky Contents, chapter rail layout and responsive architecture were not changed

Verdict:
**H01A TYPOGRAPHY SOURCE GATE PASS**

Next:
Runtime visual re-check of the Refund / Returns page, with emphasis on whole-page readability and hierarchy rather than only the previously circled Contents + metadata areas.

## Standing delivery-format rule added from user correction

For Project 2 manual code delivery:
- Default to putting the complete replacement code and instructions directly in the chat.
- Do not require the user to download txt/zip/helper files unless the user explicitly asks for a downloadable artifact.
- This works together with the standing multi-file batch rule: when a step touches multiple files, provide every file's edits together in the same chat response.

Status: H01A SOURCE PASS / TYPOGRAPHY CORRECTION PASS / RUNTIME RE-CHECK PENDING.
