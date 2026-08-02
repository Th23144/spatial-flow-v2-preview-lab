# Project 2 · Documentation Index & Synchronized Status Map

Last updated: 2026-08-02  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Authoritative read order

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_DOCS_INDEX.md
3. PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
4. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
5. PROJECT2_CSS_MAINTENANCE_POLICY.md
6. PROJECT2_MANUAL_REPLACEMENT_AND_FILE_SIZE_AUDIT_POLICY.md
7. project2-progress/PROJECT2_PAGE_STATUS_MATRIX.md
8. project2-progress/STEP_4F_LIVE_CHECKOUT_BOUNDED_RECONSTRUCTION_PLAN.md
9. project2-progress/STEP_4F_R0_BASELINE_CAPTURE_AND_ROLLBACK.md
10. project2-progress/STEP_4F_R0_CONFIGURATION_SNAPSHOT.md
11. project2-progress/STEP_4F_R0_FUNCTIONAL_SMOKE_TEST.md
12. project2-progress/STEP_4F_R1_LIVE_STEP01_03_RECONSTRUCTION.md
13. project2-progress/STEP_4F_CHECKOUT_STATIC_FLOW_COMPLETION_PLAN.md
```

## Page status

```text
Main-site Header: Completed 1:1
Main-site Footer: Completed 1:1
Shop archive: Completed 1:1
Single Product: Completed 1:1
Cart: Completed 1:1
Checkout: Not done
```

## Locked Checkout architecture

```text
01 Contact / Address
02 Shipping
03 Payment
04 Order Confirmed / Thank You / Receipt
```

Step 04 is WooCommerce-owned result truth. It is not Review and never requests payment again.

## R0 closure

```text
R0 file/config/smoke baseline: completed and closed
Runtime source changes during R0: none
```

Authoritative records:

```text
project2-progress/STEP_4F_R0_BASELINE_CAPTURE_AND_ROLLBACK.md
project2-progress/STEP_4F_R0_CONFIGURATION_SNAPSHOT.md
project2-progress/STEP_4F_R0_FUNCTIONAL_SMOKE_TEST.md
```

## R1 delivery policy

Project 2 implementation must use manual anchored replacement and mandatory before/after file-size auditing.

```text
exact old code
→ expected match count
→ exact replacement code
→ expected byte/line delta
→ user saves manually
→ actual byte/line/hash validation
→ syntax/parser validation
→ stop
```

Prohibited by default:

```text
replacement ZIP deployment
complete-file overwrite
unanchored broad replacement
skipping file-size review
routine append-only CSS patching
```

Authoritative policy:

```text
PROJECT2_MANUAL_REPLACEMENT_AND_FILE_SIZE_AUDIT_POLICY.md
```

## R1 candidate audit

The first complete R1 candidate is not approved for deployment.

| File | Baseline | Candidate delta | Decision |
|---|---|---:|---|
| `form-checkout.php` | 9,140 bytes / 278 lines | -33 bytes / -9 lines | decompose into anchored parts |
| `checkout-safe5.js` | 24,463 bytes / 780 lines | -453 bytes / -156 lines | function-by-function audit required |
| `checkout-safe5.css` | 20,936 bytes / 599 lines | +13,657 bytes / +387 lines | blocked; +65.23% growth |

The artifact:

```text
project2-checkout-r1-candidate-20260802.zip
```

is withdrawn as a deployment method and must not be applied.

## R1 sequence

```text
R1-A template navigation and Review DOM removal
R1-B JavaScript three-step conversion and relocation removal
R1-C minimal CSS functional conversion
R1-D bounded approved visual migration
```

Every part must include exact anchors, expected match count, expected size delta, actual size/hash check, syntax validation and an independent rollback.

## Current execution point

```text
Ownership audit: closed
Bounded reconstruction plan: accepted
R0: closed
R1: authorized
First complete R1 candidate: blocked from deployment
Runtime source modification: none
Next: R1-A manual replacement instructions
R2: blocked
Checkout: Not done
```

## Locked boundaries

```text
- preserve WooCommerce and gateway authority
- preserve backend editability
- no fifth Checkout step
- no fake/browser-authoritative success
- no duplicate order or invoice
- no whole-file replacement package
- mandatory file-size review
- no append-only CSS patch pile
- V0.2.6.1/Workspace integration remains deferred
- one bounded part at a time
- Checkout remains Not done
```
