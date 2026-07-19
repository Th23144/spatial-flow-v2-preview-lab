# Step 4E-B2-R5-E4-D · A1–A3 Partial Validation

Last updated: 2026-07-18  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
A1 breadcrumb defaults：Passed.
A2 breadcrumb Customizer controls：Passed.
A3 product-level recommendation exclusion field/save logic：Passed.
Current executable step：A4 breadcrumb renderer → A5 recommendation qualification → CSS B1–B4.
Deployment：Not authorized before full edited PHP/CSS validation.
Cart page status：Not done.
```

## Uploaded PHP artifact

```text
Uploaded name: functions(16).php
Version: 2.7.8
Size: 553,377 bytes
Logical lines: 10,319
SHA256: ee759dcff385708f5cbec341fcea52b9803fa85489579b81c9b586ee96b54c26
Braces: 1,209 / 1,209
PHP syntax: Passed
Line endings: LF
Final newline: absent, matching baseline
```

## Exact full-file diff from functions(15).php

Only the intended A1–A3 changes exist:

```text
A1
- add sf_cart_breadcrumb_home default
- add sf_cart_breadcrumb_current default

A2
- add Cart breadcrumb · home text Customizer control
- add Cart breadcrumb · current text Customizer control

A3
- add Exclude from Cart recommendations checkbox
- save _sf_cart_recommendation_excluded as yes/no
- reformat only the existing subtitle save expression inside the same bounded function
```

No A4 or A5 code exists yet:

```text
spatial_flow_cart_v2_breadcrumb occurrences: 0
image-ready recommendation gate occurrences: 0
24 / 8 enlarged candidate limits: 0
generated fallback marketing sentence: still 1 occurrence
```

## Corrected final PHP target

Because A3 was implemented through the safer whole-block replacement, the earlier provisional final PHP metrics are superseded.

After applying the exact A4 and A5 instructions to this accepted `functions(16).php` artifact, the expected final PHP result is:

```text
Size: 555,129 bytes
Logical lines: 10,365
SHA256: b101b33f6a327c53a2714855ec212bc6b973b3ea815acf619f832d2f407de458
Braces: 1,215 / 1,215
PHP syntax: Passed
Version: 2.7.8
Final newline: absent
```

## CSS target remains unchanged

Applying B1–B4 exactly to `spatial-flow(25).css` is expected to produce:

```text
Size: 697,699 bytes
Logical lines: 23,389
SHA256: 1699ee8bfc66ab2dd4c9229b04f61be8ec92386493ac33665275bc9d91638e66
Braces: 3,633 / 3,633
Comments: 341 / 341
CSS parser errors: 0
```

Upload both completed files for exact validation before deployment.