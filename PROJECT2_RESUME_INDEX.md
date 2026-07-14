# Project 2 · Resume Index

Last updated: 2026-07-13  
Repository: `Th23144/spatial-flow-v2-preview-lab`

Use this as the top-level entry point when resuming Project 2 from a new ChatGPT window.

## Read these first

```text
PROJECT2_RESUME_INDEX.md
PROJECT2_DOCS_INDEX.md
PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
PROJECT2_CSS_MAINTENANCE_POLICY.md
project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
project2-progress/STEP_4E_B_MANUAL_EXECUTION.md
project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
project2-progress/STEP_4E_B2_R5_C4_VALIDATION.md
project2-progress/STEP_4E_B2_R5_B5_VALIDATION.md
project2-progress/STEP_4E_B2_R5_CART_CSS_CONSOLIDATION_PLAN.md
```

`PROJECT2_DOCS_INDEX.md` is the synchronized authority for the complete read order and for identifying older records that have been superseded.

## Binary page-status rule

Only these statuses are valid:

```text
Completed 1:1
Not done
```

A page cannot become `Completed 1:1` until implementation, backend editability, strict desktop review, production-quality mobile review, functional regression and required cleanup all pass.

## Current completed pages

```text
Main-site Header：Completed 1:1
Main-site Footer：Completed 1:1
Shop archive：Completed 1:1
Single Product：Completed 1:1
```

Shop archive and Single Product still have a scheduled later mobile aesthetic re-audit. A concrete defect reopens the relevant page.

## Current active page

```text
Page：Cart
Status：Not done
Phase：Step 4E-B2-R5-D final acceptance
Current executable step：R5-D2-A active Customizer editability test
```

## Cart sequence completed

```text
Step 4E-A audit：Complete
Step 4E-B0 exact manual map：Complete
Step 4E-B1-A through B1-H：Passed
Step 4E-B2-A1 deletion-first attempt：Rejected and rolled back exactly
Step 4E-B2-R1 dependency re-audit：Complete
Step 4E-B2-R2 / FIX1 / FIX2 / FIX3：Historical temporary takeover complete
Step 4E-B2-R4 native functional regression：Passed
R5-A1 visual-gap and ownership audit：Complete
R5-B canonical replacement and B1–B5 validation：Passed
R5-C1 through R5-C4 historical Cart CSS deletion：Passed / closed
R5-D1 exact source and ownership gate：Passed
```

## Current exact code baselines

### PHP

```text
functions.php
Uploaded name: functions(12).php
Version: 2.7.8
Size: 550,884 bytes
Logical lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
PHP syntax: Passed
Braces: 1,200 / 1,200
```

### CSS

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(18).css
Size: 695,346 bytes
Logical lines: 23,305
SHA256: 316874b203f8ce4104a1a98751f9b5fd63034fb50b0cbeb9aa0c4d2d5711020e
Braces: 3,619 / 3,619
Comments: 340 / 340
CSS parser errors: 0
```

The scheduled legacy Cart Visual 1, 2-D, 2-E and 3 ranges are all removed. Canonical Cart and Cart Notice remain.

## Current operation

Follow only:

```text
project2-progress/STEP_4E_B2_R5_D_FINAL_ACCEPTANCE.md
```

Current operation is a reversible backend-editability test. Do not edit PHP, CSS, JavaScript, templates, URLs, product selectors or version 2.7.8.

## Remaining Cart sequence

```text
R5-D2-A active Customizer editability
→ R5-D2-B product-level Cart subtitle editability
→ R5-D2-C dynamic recommendation ownership
→ R5-D3 strict desktop and production-quality mobile visual acceptance
→ R5-D4 final native Cart regression
→ R5-D5 binary Cart status decision
```

## Project rules that remain active

```text
- no ZIP or blind complete-file replacement
- no Cart template override
- no routine append-only Cart CSS patching
- use small bounded and independently reversible operations
- preserve WooCommerce native behavior and backend editability
- do not copy weak static mobile decisions blindly
- do not mark Cart Completed 1:1 before the complete R5-D gate passes
```