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


## H01A Reading 03 Typography + Component Parity Batch — 2026-10-06

Reason:
Desktop runtime comparison against the accepted static authority showed that the previous typography correction moved the production page away from Reading 03 by enlarging/heavier-weighting many labels and by replacing mono editorial metadata with Inter.

Correction strategy:
- return all directly mappable typography metrics to the accepted Reading 03 source values
- preserve current production renderer/content ownership
- preserve shell/index/document/rail architecture
- map current Chapter 04 step markup to Reading 03 restrained table-row language
- map current Chapter 05 note markup to Reading 03 quiet-note language
- do not alter route, Customizer, legal copy ownership, Header/Footer or other pages

Batch files:
1. functions.php: cache-busting version only, 2.7.70 -> 2.7.71
2. assets/css/spatial-flow.css: replace the complete H01A block from START marker through END marker

Replacement fragment preflight:
- 17,197 UTF-8 bytes
- 803 physical lines
- braces 121 / 121
- comments 15 / 15
- tinycss2 top-level parse errors: 0

Standing batch rule observed:
Both files are being issued together in the same chat response.

Status:
H01A READING03 PARITY BATCH READY / RETURNED-FILE SOURCE GATE PENDING.


## H01A Reading 03 Parity returned-file Source Gate — 2026-10-06

Returned files:
- functions(20261006-083521).php
- spatial-flow(20261006-083522).css

functions.php:
- 663,401 bytes
- 12,645 physical lines
- SHA256 `a2ef24d7e52df4d9b0a8f9ab87c1746dc85fdcc3e664806038b44aa4d0a36ad6`
- PHP lint PASS
- version `2.7.71`
- diff against accepted 2.7.70 file: exactly one changed line, version constant only

CSS whole file:
- 630,652 bytes
- 22,683 physical lines
- SHA256 `f469041ce64b3e46530679de77b6fd11f83330c7d7f607999e0668d62b86b85e`
- trailing LF present
- braces 3561 / 3561
- comments 252 / 252
- tinycss2 top-level parse errors: 0

H01A block:
- START marker 1
- END marker 1
- lines 15,573 through 16,375
- 803 physical lines
- 17,203 UTF-8 bytes for the inclusive marker block as measured from the returned whole file
- SHA256 `bf89f9007996da0de45de7598b1089a4afbd794c75982baf3f8fe70f2a79e85f`
- braces 121 / 121
- comments 15 / 15
- all CSS diffs versus the prior accepted typography file are confined to the H01A block; outside-block diff count 0
- prior heavier typography signatures are absent from H01A
- Reading 03 parity signatures for base type, Contents, metadata, lede, headings, marginalia, mobile body size are present
- Chapter 04 step rows use the restrained ruled-row mapping
- Chapter 05 notes use the quiet-note italic serif mapping
- H01A closes immediately before FAQ Step 5K
- later Step 5K SAFE2 Refund top-gap neutralizer remains preserved

Note:
The earlier preflight note listed 17,197 bytes for the replacement fragment. The returned whole-file measurement is 17,203 bytes. This six-byte discrepancy is a preflight accounting mismatch only; structural validation, parser validation, target-range diff containment and the delivered CSS signatures all pass. No user correction is required for that discrepancy.

Verdict:
**H01A READING 03 PARITY SOURCE GATE PASS**

Next:
Runtime desktop comparison against the accepted static authority. Do not mark visual acceptance until the live screenshot is compared directly with the authority.

Status:
H01A READING03 PARITY SOURCE PASS / RUNTIME VISUAL ACCEPTANCE PENDING.


## H01A Chapter 05 correction returned-file Source Gate — 2026-10-06

Returned files:
- functions(20261006-085824).php
- spatial-flow(20261006-085824).css

functions.php:
- 663,401 bytes
- 12,645 physical lines
- SHA256 `b6ad4f1f5d7aefc5519316f7bda28176df83ca3476985e70d3c1801d2b343dfa`
- PHP lint PASS
- version `2.7.72`
- diff against accepted 2.7.71 file: exactly one changed line, version constant only

CSS whole file:
- 630,897 bytes
- 22,698 physical lines
- SHA256 `54e570445dc200f4dab1df84cb7caa2f62e0a8c87d168a7da09e2ea0a4b00f17`
- trailing LF present
- braces 3563 / 3563
- comments 252 / 252
- tinycss2 top-level parse errors: 0

Diff audit versus accepted 2.7.71 parity CSS:
- all changes remain inside the H01A Refund Reading 03 block
- outside-block diff count 0
- Chapter 05 note mapping changed from quiet-note/callout styling to continuous Reading 03 subsection styling
- note paragraphs returned to Inter 15px / 300 / 1.78 with no italic callout treatment
- note separators removed
- mobile H4 margin cascade corrected for step/note headings
- mobile note body corrected to 14px / 1.76
- H01A END marker remains immediately before FAQ Step 5K
- no Header/Footer/FAQ/commerce changes

Verdict:
**H01A CHAPTER 05 CORRECTION SOURCE GATE PASS**

Next:
Desktop runtime re-check focused on Chapter 05 continuity, then 1024 and 390–430 responsive acceptance if desktop is visually accepted.

Status:
H01A SOURCE PASS / DESKTOP RUNTIME RE-CHECK PENDING.


## H01A Typography correction returned-file Source Gate — 2026-10-06

Returned files:
- functions(20261006-092812).php
- spatial-flow(20261006-092812).css

functions.php:
- 663,401 bytes
- 12,644 newline-terminated lines / no trailing LF
- SHA256 `12908cedbadd861b7022242d14efdbd6c5041fee87e12cae2fedee64c90b3886`
- PHP lint PASS
- version `2.7.73`
- diff against accepted 2.7.72 file: exactly one changed line, version constant only

CSS whole file:
- 630,995 bytes
- 22,697 newline characters / trailing LF present
- SHA256 `02716c52b575c64c8fe7679f2a7e0459adbfb58ee1131eb82a3d531f092f4508`
- braces 3563 / 3563
- comments 252 / 252
- tinycss2 top-level parse errors: 0

Diff audit against accepted 2.7.72 CSS:
- 16 diff hunks
- all diff hunks are inside the H01A Refund Reading 03 block
- outside-block diff count 0
- H01A block remains unique: START 1 / END 1
- Contents title 22 -> 25
- Contents rows 10 -> 11, 48 -> 54, track 24/10 -> 30/12
- document metadata 9/1.5/.10 -> 10/1.6/.08
- ordinary reading copy now directly locks Inter 300 at 15.5/1.74
- body h4 10 -> 11
- lists now directly lock Inter 300 at 14.5/1.68
- chapter marginalia label 10 -> 11 with 18ch max width
- Chapter 04 step heading/body enlarged and direct-font-locked
- Chapter 05 subheading 10 -> 11
- final text links 10 -> 11
- mobile reading / step / note body sizes increased to 15 / 14 / 15 as specified
- no structural, width, rail, Header/Footer, FAQ or commerce changes

Verdict:
**H01A TYPOGRAPHY CORRECTION SOURCE GATE PASS**

Next:
Runtime screenshot verification. This batch is intentionally expected to produce visible changes in Contents, metadata, body readability, chapter marginalia and step copy. If the live page still appears unchanged, stop CSS tuning and diagnose runtime font/resource/loading state instead.

Status:
H01A TYPOGRAPHY SOURCE PASS / RUNTIME VISUAL VERIFICATION PENDING.


## H01A Contents-only parity correction batch — 2026-10-06

Reason:
Same-viewport 1920x991 screenshot comparison showed the production left Contents index was visibly larger/heavier than the accepted Reading 03 authority. Previous passes incorrectly broadened the scope into whole-page typography.

Locked scope:
- change ONLY the left Contents index typography/density
- do NOT change body copy
- do NOT change document metadata
- do NOT change right chapter rail
- do NOT change Chapter 04/05
- do NOT change shell widths or layout

Batch:
1. functions.php: version 2.7.73 -> 2.7.74 only
2. spatial-flow.css:
   - Contents heading 25px -> 22px
   - Contents item grid 30px/12px -> 24px/10px
   - min-height 54px -> 48px
   - item font 11px -> 10px
   - letter-spacing .08em -> .075em
   - 9px mono numbering unchanged

Authority:
These values are the final .longform-v2 overrides in Spatial-Flow-Policy-Longform-Reading-03-Final.html, not the larger base Policy values.

Acceptance:
Source gate first, then same-viewport screenshot comparison. Do not mark visual PASS unless the Contents index visually matches the authority hierarchy/density.

Status:
H01A CONTENTS-ONLY PARITY BATCH READY / SOURCE GATE PENDING.


## H01A Contents-only parity returned-file Source Gate — 2026-10-06

Returned files:
- functions(20261006-100436).php
- spatial-flow(20261006-100436).css

functions.php:
- 663,401 bytes
- 12,645 logical lines
- SHA256 `563dafd106add5a729eaa2089680412d66f636002f8f7eda797f66248cb219d0`
- PHP lint PASS
- version `2.7.74`
- diff against accepted 2.7.73 file: exactly one changed line, version constant only

CSS whole file:
- 630,996 bytes
- 22,697 newline characters / trailing LF present
- SHA256 `d853d7a1a7bafdb31661d4194bc53743d6247fcce2dea7b9fb7bd2d3a5e70240`
- braces 3563 / 3563
- comments 252 / 252
- tinycss2 top-level parse errors: 0

Diff audit against accepted 2.7.73 CSS:
- exactly two CSS rule groups changed, both inside the H01A Contents index
- Contents heading: 25px -> 22px
- Contents item grid: 30px -> 24px number track
- Contents item gap: 12px -> 10px
- Contents item min-height: 54px -> 48px
- Contents item font: 11px -> 10px
- Contents item tracking: .08em -> .075em
- 9px mono numbering unchanged
- no body-copy change
- no metadata change
- no right chapter-rail change
- no Chapter 04/05 change
- no layout-width or responsive change
- no outside-H01A change

Verdict:
**H01A CONTENTS-ONLY PARITY SOURCE GATE PASS**

Next:
Same-viewport runtime screenshot comparison focused only on the left Contents index. Do not broaden scope until this region is visually accepted.

Status:
H01A CONTENTS SOURCE PASS / SAME-VIEWPORT VISUAL ACCEPTANCE PENDING.


## H01A Contents color-weight root cause identified — 2026-10-06

Runtime at 1920x991 showed Contents dimensions now match the Reading 03 override more closely, but item text still renders too black/heavy.

Root cause:
- scoped generic rule `.sf-refund-policy-page.sf-policy-h01 a { color: inherit; }` has specificity 0-2-1
- intended Contents rule `.sf-policy-h01-index a { color: var(--sf-policy-h01-muted); }` has specificity 0-1-1
- therefore the generic scoped anchor rule wins despite appearing earlier
- Contents links inherit the page ink color instead of muted gray, making Inter 400 appear materially heavier than the static authority

Correction batch:
- functions.php version 2.7.74 -> 2.7.75 only
- strengthen only the Contents link selector to `.sf-refund-policy-page.sf-policy-h01 .sf-policy-h01-index a`
- likewise strengthen the Contents hover selector
- keep Reading 03 size metrics unchanged
- do not change font family or font weight yet

Status:
H01A CONTENTS COLOR-SPECIFICITY FIX READY / SOURCE GATE PENDING.


## H01A Full-page Parity Final Batch — 2026-10-06

Authority:
`temp-preview/Spatial-Flow-Policy-Longform-Reading-03-Final.html`

Locked scope:
- preserve Header/Footer
- preserve route, Customizer, legal-copy ownership and all sf_refund_* fields
- preserve accepted Contents dimensions/color fix
- remove visual body kickers from reading chapters
- move reading breaks to Reading 03 positions: after chapter 02 and after chapter 05
- map Chapter 04 process steps to a Reading 03 table-like ruled-row pattern within the reading column (not full document width)
- map Chapter 06 to a Reading 03 contact-route composition with real CTA copy on the left and existing real actions on the right
- restore residual typography values to final Reading 03 metrics
- normalize document metadata so nested bold tags no longer create unintended dark emphasis

Files in the same manual batch:
1. functions.php
   - version 2.7.75 -> 2.7.76
   - replace the contiguous chapter 02–06 renderer block with the parity block
2. assets/css/spatial-flow.css
   - targeted H01A rule replacements only
   - no append-only patching

Preflight:
- replacement PHP chapter 02–06 fragment wrapped for parser check: `php -l` PASS
- planned CSS correction fragment: braces 29/29, tinycss2 top-level parse errors 0

Important correction from prior audit:
The Reading 03 Chapter 04 table remains inside the reading column. The production mapping therefore uses a three-column ruled-row pattern (number / title / description) in the reading column, rather than inventing a full-document-width component.

Expected runtime result:
- editorial reading chapters no longer show UI-like kickers
- long-form rhythm breaks occur in the same semantic locations as the static authority
- Chapter 04 becomes a true scannable anchor instead of a stacked process component
- Chapter 06 closes as one integrated support route
- residual enlarged typography from earlier mistaken passes is removed

Status:
H01A FULL-PAGE PARITY FINAL BATCH READY / RETURNED-FILE SOURCE GATE PENDING.


## H01A Full-page Parity Final Batch returned-file Source Gate — 2026-10-06

Returned files:
- functions(20261006-105831).php
- spatial-flow(20261006-105832).css

functions.php:
- version 2.7.76
- 667,281 bytes
- 12,732 physical lines
- SHA256 `0cb56e1dad5e2629b982be3b89466af995715091c42145e03bdf346375caba53`
- PHP lint PASS
- Reading break instances: exactly 2
  - after chapter 02: continued
  - after chapter 05: final section
- Chapter 06 integrated contact-route markup present
- existing sf_refund_* content ownership preserved

CSS whole file:
- 631,650 bytes
- 22,736 physical lines
- trailing LF present
- SHA256 `19cafdbf4af6fd2b1275b97cddc1805a55400bb883ddb034152257f78b054f4b`
- braces 3570 / 3570
- comments 252 / 252
- tinycss2 top-level parse errors: 0

H01A final-batch verification:
- accepted Contents specificity fix preserved
- reading-section body kickers hidden
- document metadata bold reset to inherit/inherit
- body copy restored to Reading 03 15px/1.78 baseline
- right rail label restored to 10px/16ch
- Chapter 04 three-column ruled-row mapping present
- Chapter 05 body baseline restored
- Chapter 06 integrated copy/links contact route present
- mobile Step H4/P grid-column mapping present
- mobile note body 14px/1.76 present
- mobile contact-route links left-aligned

Verdict:
**H01A FULL-PAGE PARITY FINAL BATCH SOURCE GATE PASS**

Next:
Desktop runtime visual comparison against Reading 03 authority. No more source edits unless runtime comparison finds a concrete remaining mismatch.

Status:
H01A FULL-PAGE PARITY SOURCE PASS / DESKTOP RUNTIME VISUAL ACCEPTANCE PENDING.


## H01A desktop runtime visual gate — duplicate Chapter 06 found — 2026-10-06

Runtime screenshot after the full-page parity source pass exposed a concrete renderer defect:
- Chapter 06 renders twice
- two identical `id="sf-policy-h01-6"` sections exist in functions.php
- first occurrence is the new integrated contact-route version
- second occurrence is the old pre-batch Chapter 06 block left behind after the manual replacement

Correction:
- functions.php only
- version 2.7.76 -> 2.7.77
- delete the second/old Chapter 06 block in full
- no CSS changes

Acceptance requirement:
- exact `id="sf-policy-h01-6"` occurrence count must be 1
- final runtime screenshot must show one Chapter 06 and one right-rail 06 only

Status:
H01A DESKTOP VISUAL GATE FAIL — DUPLICATE CHAPTER 06 / ONE-FILE CLEANUP READY.


## H01A duplicate Chapter 06 cleanup Source Gate — 2026-10-06

Returned file:
- functions(20261006-121500).php

Verification:
- version 2.7.77
- 665,555 bytes
- 12,716 physical lines
- SHA256 `ebf75690f282640d675a8757b7b8e2c51061958f26d348e4cf33dacd5265b063`
- PHP lint PASS
- exact `id="sf-policy-h01-6"` count: 1
- exact integrated `sf-policy-h01-contact-route__copy` count: 1
- exact `continued` reading break count: 1
- exact `final section` reading break count: 1

Diff against 2.7.76:
- version constant only: 2.7.76 -> 2.7.77
- old duplicate Chapter 06 block deleted in full
- no other changes

Verdict:
**H01A DUPLICATE CHAPTER 06 CLEANUP SOURCE GATE PASS**

Next:
Refresh runtime and verify that only one Chapter 06 / one right-rail 06 remains. Then continue the full-page desktop visual acceptance.

Status:
H01A SOURCE CLEAN / DESKTOP RUNTIME RECHECK PENDING.
