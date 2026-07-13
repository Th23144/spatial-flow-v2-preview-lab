# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-07-13  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Authoritative read order

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
4. PROJECT2_CSS_MAINTENANCE_POLICY.md
5. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
6. project2-progress/STEP_4E_B_MANUAL_EXECUTION.md
7. project2-progress/STEP_4E_B2_R5_B3_LIVE_CASCADE_DIAGNOSIS.md
8. project2-progress/STEP_4E_B2_R5_B2_MOBILE_REMOVE_BLACK_GLYPH.md
9. project2-progress/STEP_4E_B2_R5_B1_MOBILE_REMOVE_CONTRAST.md
10. project2-progress/STEP_4E_B2_R5_B_CANONICAL_REPLACEMENT.md
11. project2-progress/STEP_4E_B2_R5_A1_AUDIT_COMPLETE.md
12. project2-progress/STEP_4E_B2_R5_CART_CSS_CONSOLIDATION_PLAN.md
13. project2-progress/STEP_4E_B2_R4_NATIVE_FUNCTIONAL_REGRESSION.md
14. project2-progress/STEP_4E_B2_R3_FIX3_VALIDATION.md
15. project2-progress/STEP_4E_B2_R2_FIX2_VALIDATION.md
16. project2-progress/STEP_4E_B2_R1_CART_CSS_DEPENDENCY_REAUDIT.md
17. project2-progress/STEP_4E_B2_A1_ROLLBACK_VALIDATION.md
18. project2-progress/STEP_4E_B2_A1_FAILURE_AND_ROLLBACK.md
19. project2-progress/STEP_4E_B1_H_VALIDATION.md
20. project2-progress/STEP_4E_B0_MANUAL_MAP.md
21. project2-progress/STEP_4E_CART_REWORK_AUDIT.md
22. project2-progress/STEP_4E_A3_PHP_SOURCE_AUDIT.md
23. project2-progress/STEP_4E_B1_B2_IMPLEMENTATION.md
24. project2-progress/PROGRESS_LOG.md
```

Current Cart records supersede earlier ZIP/full-file instructions, the failed deletion-first plan, the temporary R2/FIX stack, blind color/weight corrections for the remove glyph, and any earlier wording that treated structural gates as final strict-1:1 acceptance.

## 2. Current authoritative files

| File | Role | Status |
|---|---|---|
| `PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md` | Mobile quality/usability outrank literal replication of weak static phone layouts. | Active. |
| `PROJECT2_CSS_MAINTENANCE_POLICY.md` | Replacement/merge/delete priority and anti-append-only rule. | Active. |
| `project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md` | Binary page status map. | Current. |
| `project2-progress/STEP_4E_B_MANUAL_EXECUTION.md` | Current Cart protocol, baselines and active gate. | Authoritative / R5-B3 active. |
| `project2-progress/STEP_4E_B2_R5_B3_LIVE_CASCADE_DIAGNOSIS.md` | Live post-load diagnosis for the disappearing mobile remove glyph. | Current executable operation / no code change. |
| `project2-progress/STEP_4E_B2_R5_B2_MOBILE_REMOVE_BLACK_GLYPH.md` | Forced black pseudo-glyph correction and failure record. | Applied locally / visually failed. |
| `project2-progress/STEP_4E_B2_R5_B1_MOBILE_REMOVE_CONTRAST.md` | In-place shell contrast correction. | Applied locally. |
| `project2-progress/STEP_4E_B2_R5_B_CANONICAL_REPLACEMENT.md` | Canonical replacement and exact validation record. | Applied exactly / strict gate open. |
| `project2-progress/STEP_4E_B2_R5_A1_AUDIT_COMPLETE.md` | Visual discrepancy and CSS ownership audit. | Passed as audit. |
| `project2-progress/STEP_4E_B2_R5_CART_CSS_CONSOLIDATION_PLAN.md` | Canonical validation and staged legacy deletion plan. | Active. |
| `project2-progress/STEP_4E_B2_R4_NATIVE_FUNCTIONAL_REGRESSION.md` | Native Cart interaction validation before canonical replacement. | Passed; targeted recheck remains required. |
| `project2-progress/STEP_4E_B2_A1_ROLLBACK_VALIDATION.md` | Exact restored-file metrics after rejected deletion-first attempt. | Passed exactly. |

## 3. Page-status rule

Only two statuses are valid:

```text
Completed 1:1
Not done
```

A page becomes `Completed 1:1` only after implementation, strict desktop review, production-quality mobile review, functional regression, backend-editability validation and required CSS cleanup all pass.

For mobile, `Completed 1:1` means faithful to the V2 design language while remaining production-quality on real phone widths.

## 4. Current page-level summary

### Completed 1:1

```text
- Main-site Header
- Main-site Footer
- Shop archive
- Single Product
```

### Not done

```text
- Blog Header/Footer branch
- Home
- Cart
- Checkout
- Thank You
- Wishlist
- Track Order
- Account
- Search
- 404
- About Us
- Services
- FAQ / Help
- Contact
- Utility / policy pages
- Blog home
- Blog issue
- Blog article
```

A later mobile aesthetic re-audit remains scheduled for Shop archive and Single Product. A concrete defect will reopen the relevant page.

## 5. Current Cart status

```text
Step 4E-A Cart audit：Complete
Step 4E-B0 manual map：Complete
Step 4E-B1-A through B1-H：Passed
Step 4E-B2-A1 deletion：Rejected and rolled back exactly
Step 4E-B2-R1 dependency re-audit：Complete
Step 4E-B2-R2 / FIX1 / FIX2 / FIX3：Temporary takeover sequence complete
Step 4E-B2-R4 native functional regression：Passed before canonical replacement
Step 4E-B2-R5-A1 visual-gap and ownership audit：Complete
Step 4E-B2-R5-B canonical in-place replacement：Applied exactly
Step 4E-B2-R5-B1 shell contrast correction：Applied locally
Step 4E-B2-R5-B2 forced black glyph：Applied locally / visually failed
Observed：black × flashes during hard refresh and disappears after final load
Current：R5-B3 live cascade / post-load ownership diagnosis
Further blind CSS edits：Frozen
Historical Cart CSS cleanup：Blocked
Cart：Not done
```

The flash proves the canonical pseudo-element can render. The current blocker is no longer classified as a simple color or font-weight defect. The final stylesheet/state/position owner must be identified from the fully loaded page.

## 6. Current code states

### PHP baseline — unchanged

```text
functions.php
Uploaded name: functions(12).php
Version: 2.7.8
Size: 550,884 bytes
Lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
PHP syntax: Passed
Braces: 1,200 / 1,200
```

### Last exactly validated CSS baseline

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(11).css
Size: 811,826 bytes
Logical lines: 27,089
SHA256: 11e4c7b25cdf4c8beaf420dc4b5da1b0801a611679d4f85019bb1228d17d0b1e
Braces: 4,074 / 4,074
Comments: 413 / 413
CSS parse errors: 0
Canonical START / END: 1 / 1
Old R2 / FIX markers: 0
Cart Notice START: 1
```

Expected local state after R5-B1 and R5-B2, pending upload verification:

```text
Size: 812,142 bytes
Logical lines: 27,098
SHA256: de6ddce6c42cf9fc50fb583caa3d3f5ea46931f75f4d805cdf74ab158f61196d
Braces: 4,074 / 4,074
Comments: 413 / 413
CSS parser errors: 0
```

## 7. R5-B3 evidence gate

After the glyph disappears on the fully loaded phone Cart, provide:

```text
1. selected native <a class="remove"> element in DevTools
2. all matched `a.remove::after` rules in Styles
3. final Computed values/source links for content, display, visibility, opacity,
   color, -webkit-text-fill-color, font-size, position, transform and z-index
4. current spatial-flow.css after R5-B2
```

No further CSS correction is authorized until the exact active rule/source is identified.

## 8. CSS debt inventory

Historical Cart visual stack remains temporarily present:

```text
15 blocks
117,141 bytes
3,798 logical lines
456 rule/media-query brace pairs
```

The temporary R2/FIX stack no longer exists; it has been replaced by one canonical block. Historical cleanup remains required but cannot begin until the complete corrected canonical gate passes.

## 9. Correct execution sequence

```text
R5-B3 live cascade diagnosis
→ bounded correction of the identified final owner
→ exact file + strict desktop/mobile + native-function R5-B validation
→ R5-C staged historical deletion
→ R5-D backend editability + final acceptance
```

## 10. Maintenance rule

```text
- update STEP_4E_B_MANUAL_EXECUTION.md after each accepted, failed or reopened Cart substep
- update PROJECT2_PAGE_STATUS_MATRIX.md only when a page changes between Not done and Completed 1:1
- preserve backend editability and dynamic WooCommerce sources
- prohibit routine append-only Cart visual fixes
- make corrections inside the canonical block or the proven conflicting owner by bounded replacement
- clean historical Cart CSS only after canonical visual ownership is proved
- apply the mobile design-quality policy to all remaining pages
```