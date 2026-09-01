# Project 2 · Step03 Gateway Card Visual Parity Reopen / History Audit · 2026-09-01

## Trigger

After Step03 sticky was formally closed, the user supplied a fresh Step03 screenshot and highlighted the native WooCommerce gateway area. The current gateway rows/payment boxes render as large bright white cards that are visually discordant with the accepted Step03 editorial reference and clearly do not satisfy the project's current strict 1:1 standard.

The user asked whether this circled region had originally been completed, never started, or intentionally deferred.

## Repository chronology

### 2026-08-07 — R1 Step03 Payment V2 acceptance

`STEP_4F_R1_STEP03_PAYMENT_V2_FUNCTIONAL_ACCEPTANCE_AND_BACKEND_COPY_PROTOCOL.md` records:

```text
source integrity: passed
installation: passed
visual runtime acceptance: passed
native multi-gateway presence: passed
functional interaction acceptance: passed
backend-editable Step-03 copy runtime acceptance: open
R1 Step-03 Payment V2: in progress
```

The functional acceptance explicitly covered real WooCommerce gateway switching and selected native `payment_box` open/close behavior. It also locked ownership boundaries:

```text
WooCommerce gateway labels
WooCommerce / gateway payment descriptions and fields
Terms / privacy text
Place Order text / submission behavior
```

These remained Woo/gateway-owned, not theme-copy-owned.

Important: this old `visual runtime acceptance: passed` was an R1-era structural/runtime acceptance. It was not a later strict micro-1:1 closure of the gateway-card skin.

### 2026-08-14 — Step03 full inheritance re-audit

`STEP_4F_STEP03_STEP04_FULL_INHERITANCE_REAUDIT_AND_EXECUTION_GATE_20260814.md` explicitly corrected the framing and stated:

- the old R1 Step03 structural/functional migration was completed;
- Step03 final strict 1:1 had NOT been proven;
- Step03 must later complete strict visual/source/computed parity as part of the full payment-system integration;
- empty/future capability zones must not render blank boxes merely to preserve a static composition;
- real eligible gateways must render through WooCommerce with gateway-family presentation adapters or safe native fallback.

The stop point in that record states:

```text
Step 03 old R1 structural/functional migration: completed
Step 03 full payment-system / Workspace / final strict closure: NOT COMPLETE
```

### Later Selected Payment correction

Subsequent Project 2 work briefly introduced a second theme-side `Selected Payment` information panel. That implementation was rejected and rolled back because native Woo selected gateway + `payment_box` must remain the payment-information owner and the duplicate panel hardcoded Crypto into the theme.

This rollback did NOT mean the existing native white gateway rows were visually complete. It only rejected a duplicate information layer.

The later transition recall audit explicitly concluded there is no source-supported evidence that the user knowingly approved deferring the white gateway-row visual mismatch. If the current rows fail strict 1:1, they must be treated as a reopened Step03 visual-parity defect.

## Current authoritative conclusion

The circled gateway region is neither "never started" nor "fully completed under the current project standard".

Correct classification:

```text
R1 structural / functional implementation: COMPLETED / previously accepted
Native Woo gateway ownership: CORRECT and must be preserved
Current gateway-card visual skin under strict 1:1: NOT COMPLETE
User-approved intentional deferral of the white-card look: NOT FOUND
Current screenshot defect: REOPENED STEP03 VISUAL-PARITY BLOCKER
```

The large white card treatment therefore cannot be carried into final Checkout closure as-is.

## Execution consequence

Because this is a larger Step03 visual blocker than the already-known Crypto transfer-button typography mismatch, Step03 gateway-host visual parity is reopened and must be resolved before the final Checkout 01-04 strict sweep.

Preserve:
- WooCommerce gateway registry/eligibility;
- native gateway labels;
- native selected `payment_box` fields/content;
- gateway-owned iframe/nonce/security UI;
- Terms/privacy;
- exactly one native Place Order;
- current Step03 adaptive sticky behavior;
- future-gateway safe fallback.

Do not reintroduce a duplicate theme-side Selected Payment panel.

## Immediate next action

Audit the current `checkout-safe5.css` Step03 payment-host rules against the authoritative Step03 Payment Host reference and the live screenshot, then prepare a bounded visual-only correction for the native gateway row / selected payment_box surfaces. The goal is to remove the large generic white-card language and bring the host into the editorial Step03 composition without changing payment semantics.

Crypto V0.3.0 transfer-button typography remains open immediately after this Step03 visual blocker closes.
