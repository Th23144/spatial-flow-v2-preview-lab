# Final Production Contact — H01 Manual Anchored Batch Ready

Date: 2026-10-05
Project: Spatial Flow V2 / Project 2

## Delivery rule

Per Project 2 manual replacement policy, the H01 Contact production mapping is issued as one coherent two-file batch with bounded manual anchors.

No whole-file replacement is authorized.

## functions.php operations

Baseline:
- 651,069 bytes
- 12,475 logical lines
- SHA256 `c2fffb501948d5a054464d784f6b2515ac21cfde707c0478ac3c7fb30ea0cdfc`
- version 2.7.59

Operations:
1. version 2.7.59 -> 2.7.60;
2. extend Contact admin-detail variables with `_sf_contact_order_number`;
3. add Order Number row in Contact Message details;
4. sanitize optional `order_number` during submission;
5. persist `_sf_contact_order_number`;
6. replace only the visible `spatial_flow_main_contact_render_page()` owner region and add bounded Contact body class before the existing page-content replacement function;
7. replace only the Contact Customizer `$fields = array(...)` owner with H01 presentation-copy fields while preserving modal/error controls.

Key exact block metrics:
- metabox variable block: 550 -> 650 bytes; 7 -> 8 lines;
- metabox Reason/Message segment: 432 -> 660 bytes; 8 -> 12 lines;
- handler variable block: 671 -> 807 bytes; 6 -> 7 lines;
- saved meta block: 499 -> 574 bytes; 7 -> 8 lines;
- render/body-class region: 8,738 -> 13,954 bytes; 110 -> 175 lines;
- Customizer field array: 4,576 -> 5,780 bytes; 47 -> 58 lines.

Expected whole target:
- 658,028 bytes
- 12,558 logical lines
- SHA256 `d1c2da1a42c861dd0b93329801535555ca31d63feaaf00c7702b228cb70dd1cc`
- PHP syntax PASS

## CSS operation

Baseline:
- 621,146 bytes
- 22,260 logical lines
- SHA256 `c15755a3d2b28aa249d69ded21f3534d229911ca74e6cc3d0ef2a6d3d0dd3a5c`

Replace inclusively from:
`/* === Spatial Flow Step 5B-3: Main Contact Us Native Capture START === */`

through:
`/* === Spatial Flow Step 5B-3: Main Contact Us Native Capture END === */`

Both anchors must match exactly once.

Old block:
- 8,730 bytes
- 421 lines
- SHA256 `076032ae673c8e0e81146ef21e60bf9663515306067d2af32c5f3411547c14cc`

New canonical H01 block:
- 14,932 bytes
- 685 lines
- SHA256 `478ef639084957d5716982e635c1852cdf36be43b1d48a809051774a344a5b6d`

Expected whole target:
- 627,348 bytes
- 22,524 logical lines
- SHA256 `7f961606a49bc3d38134556ad481f74452d8845a0cea7ccda5909c30c8ea1a0b`
- braces 3543 / 3543
- CSS parse errors 0

## Source guard

If any exact old block / START-END anchor does not match the expected count, stop before saving that file.

After both files are edited, return both modified local files together.

Do not runtime-test Contact before Combined Source Gate passes.

Status: MANUAL H01 BATCH READY.
