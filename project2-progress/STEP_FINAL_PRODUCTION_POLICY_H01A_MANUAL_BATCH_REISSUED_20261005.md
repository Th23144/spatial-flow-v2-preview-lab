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
- replacement payload: 17,029 UTF-8 bytes
- 221 replacement lines

CSS canonical H01 block:
- 14,278 UTF-8 bytes
- 696 lines
- braces 109 / 109
- comments balanced
- tinycss2 top-level parse errors: 0

These are **fragment-level checks**, not whole-file Source Gate.

## Required post-edit gate

After the user performs the manual anchored replacements, the returned whole files must be checked for:
- exact version 2.7.70
- PHP syntax
- CSS braces/comments/parse
- byte size / logical lines / SHA256
- anchor uniqueness
- old Step 5I + SAFE2 presentation blocks absent
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

Status: H01A MANUAL ANCHORED BATCH REISSUED / WHOLE-FILE SOURCE GATE PENDING.
