# Project 2 · Resume Index

Last updated: 2026-08-16
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Read these first

```text
1. PROJECT2_RESUME_INDEX.md
2. PROJECT2_STEP_RECORDING_POLICY.md
3. PROJECT2_RUNTIME_TEST_BATCHING_POLICY.md
4. PROJECT2_STRICT_1_TO_1_ACCEPTANCE_POLICY.md
5. PROJECT2_VERIFIED_FULL_FILE_REPLACEMENT_POLICY.md
6. PROJECT2_CROSS_WINDOW_OWNERSHIP_HANDOFF_POLICY.md
7. PROJECT2_MOBILE_DESIGN_REVIEW_POLICY.md
8. PROJECT2_CSS_MAINTENANCE_POLICY.md
9. PROJECT2_MANUAL_REPLACEMENT_AND_FILE_SIZE_AUDIT_POLICY.md
10. project2-progress/STEP_4F_FULL_REPOSITORY_DOCUMENT_INHERITANCE_COMPLETE_20260816.md
11. project2-progress/STEP_4F_SELECTED_PAYMENT_THEME_ROLLBACK_VALIDATION_20260816.md
12. project2-progress/STEP_4F_CRYPTO_V030_BIG_BATCH_B_FINAL_ACCEPTED_20260816.md
13. project2-progress/PAYMENT_WINDOW_STANDALONE_HANDOFF_V030_FINAL_ACCEPTED_20260816.md
14. project2-progress/STEP_4F_STEP04_ORDER_RESULT_FULL_AUDIT_AND_IMPLEMENTATION_GATE_20260816.md
15. project2-progress/STEP_4F_STEP04_STRICT_1_TO_1_IMPLEMENTATION_LOCK_20260816.md
16. project2-progress/STEP_4F_STEP04_STRICT_1_TO_1_SOURCE_STATIC_CANDIDATE_2715_20260816.md
17. project2-progress/STEP_4F_CRYPTO_V030_TRANSFER_BUTTON_TYPOGRAPHY_REOPEN_20260816.md
18. project2-progress/STEP_4F_STEP04_WHOLE_FILE_DEPLOYMENT_WITHDRAWN_20260816.md
```

Historical precedence:

```text
later explicit correction/rejection/rollback
> later formal runtime/source/user acceptance
> later standing policy
> older policy/plan/candidate/snapshot
```

## Mandatory execution rule

```text
meaningful Project-2 action
→ record start/state/result in GitHub
→ only then advance
```

For one coherent runtime acceptance batch, give the user the entire safe checklist at once. Split only when a genuine destructive/safety dependency requires it.

## Deployment method precedence

The user explicitly authorised a later exception on 2026-08-16:

```text
Verified complete-file replacement is allowed when and only when
PROJECT2_VERIFIED_FULL_FILE_REPLACEMENT_POLICY.md passes every gate.
```

This later policy supersedes the older blanket prohibition on whole-file delivery **only for batches that prove**:

```text
exact live-base SHA match
+ candidate generated from that exact base
+ full-diff authorised-scope audit
+ timestamped rollback backup
+ published candidate SHA
+ post-replacement SHA identity
+ syntax/parser/structure PASS
+ whole-batch rollback on any failure
```

If any gate cannot be satisfied, fall back to the older manual anchored replacement policy.

This changes deployment mechanics only; strict 1:1 remains mandatory.

## Binary page status

```text
Header: Completed 1:1
Footer: Completed 1:1
Shop archive: Completed 1:1
Single Product: Completed 1:1
Cart: Completed 1:1
Checkout: Not done
```

Checkout remains `Not done` until Step 04 production result acceptance and the reopened V0.3.0 transfer-button typography 1:1 defect are both closed.

## Locked Checkout progression

```text
01 Contact / Address
→ 02 Shipping
→ 03 Payment
→ 04 server-authoritative Order Result / Thank You / Receipt
```

No Review/fifth input step.

## Accepted Checkout contracts

```text
Step 01 Address: accepted
Step 02 Shipping: accepted
Product Packaging: FINAL ACCEPTED / CLOSED
Step 03 native Woo dynamic payment structure/function: accepted
Order Summary / Coupon / Trust normal flow: accepted
normal non-Crypto order flow: accepted
Checkout normal desktop/mobile regression: accepted
```

Step 03 final architecture:

```text
Woo eligible gateways
→ native selected gateway/payment_box/provider controls
→ native Terms/privacy
→ exactly one native Place Order
```

Theme remains gateway-agnostic.

The rejected theme-side Selected Payment experiment was byte-exact rolled back and is permanently closed.

## Crypto payment state

```text
Spatial Flow Crypto Pay Trial V0.3.0: FINAL ACCEPTED
V0.2.9 backend/security invariants: retained/accepted
V0.3.0 order-pay customer Workspace: accepted
Feature Flag rollback bridge: PASS
normal gateway isolation: PASS
local Project 2 Crypto Workspace final state: OFF
```

Important: OFF is runtime exposure control. It does not mean V0.3.0 was rejected.

Payment window standalone continuation:

```text
project2-progress/PAYMENT_WINDOW_STANDALONE_HANDOFF_V030_FINAL_ACCEPTED_20260816.md
```

## Reopened V0.3.0 visual-only defect

User reported that the V0.3.0 Workspace button:

```text
I HAVE COMPLETED THE TRANSFER
```

has incorrect typography/font sizing and does not meet strict 1:1.

Status:

```text
functional/security acceptance: remains CLOSED/PASS
visual typography parity: REOPENED
fix timing: immediately after Step 04 runtime acceptance
Checkout cannot close until this visual defect passes desktop/mobile 1:1
```

Record:

```text
project2-progress/STEP_4F_CRYPTO_V030_TRANSFER_BUTTON_TYPOGRAPHY_REOPEN_20260816.md
```

## Step 04 visual truth

The only current Thank You static-reference trio in `preview/` is:

```text
preview/spatial-flow-thank-you-v1.html
preview/spatial-flow-thank-you-v1.css
preview/spatial-flow-thank-you-v1.js
```

No later Thank You v2/v3 static reference exists.

The user explicitly reconfirmed strict 1:1 on 2026-08-16.

Therefore:

```text
static Step-04 reference = visual truth
WooCommerce order = data/status truth
```

Production implementation may recompose live markup/CSS wherever required to match the reference. Existing live visual deviations are not protected merely because they are already implemented.

Header/Footer remain their separately accepted global 1:1 implementation and are not duplicated from the standalone preview shell.

## Step 04 production state matrix

```text
processing -> confirmed / fulfilment in progress
completed -> completed
pending -> payment pending
on-hold -> payment confirmation pending
failed -> retry/support
cancelled -> cancelled
refunded -> refunded
custom/unknown -> neutral server-status fallback
```

Browser/query/session values may not manufacture these states.

## Current verified live rollback baseline

```text
functions.php
609,465 bytes
11,657 logical lines
version 2.7.13
SHA256 62b13f9acb69838bae1543a196e3bd4497faf02e1f30f04f197f7c0fb6575631

woocommerce/checkout/thankyou.php
23,174 bytes
341 logical lines
SHA256 6556ba6faf6fd6d687b69e5d38cd2910dd89805405d842dc27a2caab4fec7cfa

assets/css/spatial-flow.css
577,717 bytes
20,284 logical lines
SHA256 4d54dcfc1bee2f55bbdd93df1e31cc0e155d6b9cdff917f141086bc25a2bb4b3
```

## Step 04 candidate 2.7.15

The existing full-file candidate remains an **internal comparison artifact** until it is explicitly requalified under `PROJECT2_VERIFIED_FULL_FILE_REPLACEMENT_POLICY.md`.

```text
functions.php
612,015 bytes
11,691 logical lines
version 2.7.15
SHA256 e1b4842345d7ccfa5057f4dc568dbd1705cf13f86606b78c81c009c3a521891f
php -l PASS

woocommerce/checkout/thankyou.php
43,716 bytes
579 logical lines
SHA256 4aee09c6f26420c388d15da9a4a12fe247b49a70bdb065725f5d705553ab90cc
php -l PASS

assets/css/spatial-flow.css
587,216 bytes
20,639 logical lines
SHA256 cba94f9615248a86f8d8d23b806621ed04f7b664e8c3a47727036510a33efef9
CSS braces/comments PASS
```

Candidate properties previously established:

```text
- reconstructs live Step04 with the reference result-* composition
- CSS replaces only the existing Step5F block; prefix/suffix byte-identical
- functions.php changes only version + Step5F Customizer/helpers
- Woo thank-you and gateway hooks preserved
- all production statuses server-driven
- no prototype_result / sessionStorage / browser state switching
- no update_status / payment_complete / Place Order in theme
- no hardcoded spatial_flow_crypto / USDT / TRON in theme
- same-order Woo payment recovery used where needs_payment() is true
```

Before this candidate may be reissued for complete-file deployment, the new VFR policy requires a formal manifest, authorised full-diff boundary audit, rollback package/backup method, and postflight verifier.

### Backend editability

Legacy `sf_order_received_*` theme mods remain stored for rollback/history but no longer override strict-reference copy.

Step04 V3 uses:

```text
sf_order_result_v3_*
```

with strict-reference defaults and backend editable state/common copy.

Legacy saved Shop/Contact URLs remain safe fallback values until new V3 URLs are explicitly saved.

## Current exact stop point

```text
Step 04 audit: COMPLETE
Strict 1:1 lock: ACTIVE
fresh live source identity: VERIFIED
Step 04 candidate 2.7.15: INTERNAL SOURCE/STATIC CANDIDATE ONLY
previous blind whole-file deployment instruction: WITHDRAWN
verified full-file replacement policy: ACTIVE
runtime deployment: NOT YET PERFORMED
runtime/status/visual acceptance: NOT YET STARTED
Crypto transfer-button typography defect: OPEN / DEFERRED UNTIL AFTER STEP04
Checkout: Not done
```

## Exact next action

Requalify the Step 04 2.7.15 candidate under `PROJECT2_VERIFIED_FULL_FILE_REPLACEMENT_POLICY.md`:

```text
1. prove current live SHA values equal the candidate base
2. record complete authorised diff boundaries for all three files
3. create a baseline/candidate manifest
4. prepare timestamped backup + automatic abort/rollback verification method
5. publish candidate SHA values
6. only then reissue complete candidate files for deployment
```

If any gate fails, fall back to anchored manual replacement.

After postflight identity/syntax PASS, run one consolidated Step04 runtime batch at:

```text
1366 desktop
390 mobile
360 mobile
```

After Step04 closes, immediately fix and re-accept the V0.3.0 `I HAVE COMPLETED THE TRANSFER` typography before declaring Checkout complete.

## Hard boundaries

```text
- strict 1:1 visual parity is mandatory
- preserve WooCommerce order/payment authority
- preserve backend editability
- no browser-authoritative result state
- no fifth Checkout input step
- no duplicate order/invoice
- no theme-side Crypto gateway registry
- exactly one native Place Order remains in Step03
- no unverified whole-file deployment
- verified whole-file replacement allowed only under the VFR policy
- manual anchored replacement is mandatory fallback when VFR gates fail
- no append-only CSS patch pile
- Product Packaging remains closed
- V0.3.0 remains accepted payment baseline
- Step03 must not be reopened for Step04 visual work
- Checkout remains Not done until Step04 + reopened Crypto typography defect both close
```
