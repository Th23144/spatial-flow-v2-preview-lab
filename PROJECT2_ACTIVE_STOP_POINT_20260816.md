# Project 2 · Active Stop Point · 2026-08-28

This file is the current execution override for the active Step-04 implementation gate.

## Current authoritative stop point

```text
Step 04 production audit: COMPLETE
Step 04 Strict 1:1 visual contract: LOCKED
Step04 runtime/status matrix: MOSTLY ACCEPTED; one clean recovery sanity check remains
Step04 visible blocker A white band: CLOSED — runtime PASS
Step04 visible blocker B cancelled gateway instructions: CLOSED — runtime PASS; On-hold preserved
Step04 strict-parity V2 eight captures: RECEIVED AND NUMERICALLY AUDITED
Step04 strict-parity V2 result: FAIL — deterministic CSS/cascade deltas identified
Step04 bounded computed-parity 2.7.19 correction batch: APPLIED BY USER
Step04 2.7.19 returned-source validation: PASS EXACT
Step04 unchanged reference JSON baseline: REUSED
Step04 next action: hard refresh 2.7.19 and rerun only four production computed-parity JSON captures
Checkout binary status: Not done
```

## Current accepted live source fingerprints

### `functions.php`

```text
bytes: 612013
logical lines: 11689
SHA256: f36e767387f0306eeae6744c6d17d99f4451999916f1c8d87df6797a183a736c
PHP syntax: PASS
SPATIAL_FLOW_CHILD_VERSION: 2.7.19
```

### `woocommerce/checkout/thankyou.php`

```text
bytes: 43932
logical lines: 584
SHA256: 69ea915ddbe1e3f6132715d9bfd0bf1dfde6725eca545d7c39f4916162e087fb
PHP syntax: PASS
```

### `assets/css/spatial-flow.css`

```text
bytes: 588919
logical lines: 20670
SHA256: cc7d4a91ede6ff9297e0a7c6f03e4f079d2705798d567895de86034fc120b3b2
brace balance: 3282 / 3282
comment balance: 275 / 275
tinycss2 errors: 0
```

The returned 2.7.19 CSS is byte-for-byte identical to an independently reconstructed candidate produced by applying only the issued A-H bounded replacements to the accepted previous baseline. Actual CSS delta is exactly `+290 bytes / +4 logical lines`.

## 2.7.19 correction targets now in source

```text
1. Overview strong -> 18px / 1.16 / weight 400 with stronger Woo selector
2. Result panel -> max-width none
3. Facts dt -> weight 400
4. Timeline h3 -> 23px / 1.08
5. Address h3 -> 8px / 1.55 / .18em
6. Receipt Summary heading -> line-height 1.55
7. Summary price -> production-only nowrap removed
8. <=420 Overview final item -> grid-column 1 / -1
```

Authoritative validation record:

`project2-progress/STEP_4F_STEP04_COMPUTED_PARITY_2719_RETURNED_SOURCE_VALIDATION_PASS_20260828.md`

Commit:

`923845e4639b156c1ba4184b8d59201a50dd9686`

## Prior strict-parity V2 audit

Authoritative record:

`project2-progress/STEP_4F_STEP04_STRICT_PARITY_V2_EIGHT_CAPTURE_NUMERIC_AUDIT_FAIL_20260827.md`

Commit:

`9e0ed18d214e07e9b49f9dafad2e1714f85a711a`

The eight-capture environment was valid: desktop reference/production matched viewport conditions and mobile reference/production matched `390×844 / DPR3 / visualViewport scale 1`.

Confirmed reference is paired to Processing production. Pending reference may be paired to On-hold production only for the shared Pending-family visual contract; state-copy/gateway-content differences are excluded.

## Reference JSON reuse decision

The static Step04 reference page has not changed since the prior strict-parity V2 reference captures, so the four reference JSON files remain authoritative and must be reused rather than regenerated.

Authoritative record:

`project2-progress/STEP_4F_STEP04_2719_REFERENCE_JSON_REUSE_AND_PRODUCTION_ONLY_RERUN_20260828.md`

Commit:

`a7e921e63e9b36f9808cf25268f42db30ff8fb97`

## Dynamic differences excluded from strict CSS parity

Do not force these to match static reference values:

```text
- static reference product count vs real Woo order product count
- real product title/meta wrapping
- different real totals rows, fees, refund ledger or shipping rows
- actual Payment Facts values/order where driven by Woo data
- real product image vs static placeholder
- state-appropriate On-hold gateway output
- copy-length-dependent heights
- table column widths driven by real content
```

## Runtime/status evidence already accepted

```text
Processing / confirmed state semantics: PASS
Completed state semantics: PASS
Pending state semantics: PASS
On-hold state semantics: PASS
Failed state semantics: PASS
Cancelled state main copy: PASS
Cancelled gateway-output appropriateness: PASS
Refunded state semantics: PASS
browser/query prototype_result cannot manufacture paid state: PASS
real Woo data rendering / server-authoritative status: PASS
no duplicate native Woo order-details table: PASS
gateway hook preservation and state-appropriate rendering: PASS
```

## Strict 1:1 method

Strict parity remains CODE-FIRST:

```text
1. source/reference contract
2. runtime getComputedStyle / getBoundingClientRect
3. numeric selector/property diff
4. owner/cascade isolation
5. screenshots only as residual evidence
```

Step04 strict 1:1 remains FAIL/PENDING until the 2.7.19 production-side runtime rerun proves the deterministic deltas have converged and any remaining differences are either corrected or documented as permitted production-only deviations.

## Mandatory next action

Do NOT rerun the full 17-step matrix and do NOT regenerate unchanged reference JSON files.

Hard refresh actual production Step04 and verify `spatial-flow.css?ver=2.7.19` is loaded. Then capture only these four production JSON files with the same diagnostic script and viewport conditions:

```text
1. Processing Production Desktop
2. Processing Production Mobile 390×844
3. Pending-family Production Desktop
4. Pending-family Production Mobile 390×844
```

Pair them against the retained prior reference JSON files:

```text
Confirmed Reference Desktop
Confirmed Reference Mobile 390×844
Pending Reference Desktop
Pending Reference Mobile 390×844
```

The next audit must first verify the eight corrected deterministic properties, then enumerate residual computed/geometric deltas. Do not make further source edits before this rerun.

## Refund-ledger correction

Order #3621 entered `Refunded`, so WooCommerce created a real refund ledger object. Changing only its status later does not remove that refund object. #3621 remains unsuitable for the remaining clean payable-amount/recovery sanity check.

After strict visual parity closes, perform only one clean-order recovery sanity check with a fresh order that was never Refunded.

## Explicit deployment boundary

Do NOT instruct whole-file replacement for `functions.php`, `thankyou.php`, or `spatial-flow.css` under the default workflow. Continue manual anchored replacement unless the user explicitly changes that decision.

## Crypto visual follow-up

After Step04 strict 1:1 computed parity and the clean recovery sanity check close, fix/revalidate the V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography mismatch before Checkout may be marked Completed 1:1.
