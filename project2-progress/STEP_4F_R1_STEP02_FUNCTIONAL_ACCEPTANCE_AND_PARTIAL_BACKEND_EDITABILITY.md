# Step 4F · R1 Step-02 Functional Acceptance + Partial Backend Editability

Date: 2026-08-07  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

After installing the Step-02 Shipping V2 coordinated patch and the one-line intro title-case CSS repair, the user completed the requested Step-02 functional regression checks.

The user reported that all requested functional checks passed. However, for the Step-02 backend-editability/fallback check, only part of the title fields were tested; the full Step-02 copy-control set was not exhaustively tested at runtime.

## Accepted runtime behavior

User-confirmed passed:

```text
- Step-02 intro title casing now matches the strict reference (`Choose the journey.`).
- Edit address returns to Step 01.
- Back to Address returns to Step 01.
- previously entered checkout data is retained.
- re-entering Step 02 keeps the `Before it leaves.` context synchronized.
- Continue to Payment enters Step 03 normally.
- Step 01 <-> Step 02 intro switching works.
```

The previously accepted desktop 1366 / mobile 390 / mobile 360 Step-02 layout remains the visual baseline.

## Backend-editability status

Source-level coverage is already accepted for the Step-02 SAFE5 copy controls in the existing single `Spatial Flow Checkout Page` Customizer area.

Runtime testing is only partial.

The user explicitly reported that only part of the Step-02 title controls were tested and not all Step-02 editable fields were exercised.

Therefore:

```text
Step-02 backend copy source ownership: accepted
Step-02 backend copy runtime behavior: partially accepted
Full Step-02 backend-editability runtime acceptance: pending
```

Do not infer that untested controls have passed merely because they share the same getter/control architecture.

## Remaining backend runtime acceptance

A minimal final runtime batch should exercise representative controls across each Step-02 copy type rather than blindly testing every field individually.

Required representative coverage:

```text
1. heading field containing <em> markup
   - e.g. Step 02 Intro title or Shipping panel title
2. textarea field
   - e.g. Step 02 Intro description or Shipping panel description
3. plain text action/label
   - e.g. Edit address / Deliver to / Contact / Continue to Payment
4. no-method fallback text
   - source exists; runtime condition may be tested later if no-shipping state is practical
5. clear saved test values and confirm default fallback returns
```

If representative heading + textarea + plain-text controls save, render, and clear back to defaults correctly, the shared Customizer/getter architecture can be accepted for the ordinary Step-02 fields. The no-method fallback may remain a condition-specific regression case if producing a no-shipping state would disturb the current store setup.

## Dynamic shipping architecture

No change to the previously accepted requirement:

```text
- frontend remains count-agnostic
- WooCommerce remains shipping-method authority
- future additional WooCommerce shipping methods should appear dynamically
- current one-rate configuration is not an architectural limit
```

## Deferred defect

The previously reported ugly checkout validation notice remains deferred to R2 notification/error visual unification and is not closed by this record.

## Status

```text
Step-02 visual migration: accepted for current 1366 / 390 / 360 baseline
Step-02 functional navigation/data persistence: accepted
Step-02 intro switching: accepted
Step-02 backend editability source: accepted
Step-02 backend editability runtime: PARTIAL / still open
Step-02 full close: NOT YET
R2 ugly notice defect: retained
Checkout: Not done
```
