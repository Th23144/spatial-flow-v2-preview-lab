# Step 4F · R1-D1 390px Runtime Evidence

Date: 2026-08-03  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Evidence source

User-supplied live Step-01 mobile screenshot at 390px after applying the audited R1-D1 Intro/progress replacements.

```text
Route: /checkout-2-2/
Stage: Address
Visual group under review: R1-D1 Intro + progress only
Checkout status: Not done
```

## 2. R1-D1 observations

The screenshot confirms:

```text
- the Checkout Intro becomes a single-column mobile composition
- the kicker displays Secure checkout · Step 01 of 04
- the large low-weight serif Checkout title remains readable
- the explanatory copy remains visible in serif italic styling
- all four stages remain visible: 01 Address / 02 Shipping / 03 Payment / 04 Confirmed
- no stage label is clipped or hidden
- the former rounded progress cards do not return
- Address remains the active stage
- Confirmed remains visible and pending
- no visible horizontal page overflow is present in the supplied screenshot
```

Classification:

```text
R1-D1 390px Intro layout: passed
R1-D1 390px progress containment: passed
R1-D1 390px four-label retention: passed
R1-D1 360px: pending
```

## 3. Strict-V2 mismatch discovered outside D1 scope

The same screenshot also shows the live mobile body order as:

```text
Intro / progress
→ Order Summary
→ Address form
```

The accepted Step-01 V2 reference markup is:

```text
Intro / progress
→ Address form
→ Order Summary
```

The current reversal is caused by the existing live responsive rule that places `.sf-safe5-summary` at `order: -1` below the desktop breakpoint. It was not introduced by R1-D1, but it is incompatible with the accepted reference order and must be removed or replaced in the next bounded body-layout migration.

Classification:

```text
Mobile Order Summary-before-form order: strict-V2 mismatch
Owner: R1-D2 form/panel/Order Summary migration
D1 result: not invalidated because body order was outside D1 scope
Overall Checkout 1:1: not achieved
```

## 4. Other body observations retained for D2

The screenshot confirms the following areas still use the pre-D1 SAFE5 treatment and remain open:

```text
- rounded Order Summary container and trust cards
- rounded Address/contact panels
- existing field surface treatment
- current mobile action-button treatment
```

These are not D1 failures. They are mandatory R1-D2 work.

## 5. Current decision

```text
R1-D1 desktop: passed
R1-D1 390px: passed for Intro/progress scope
R1-D1 360px: pending
R1-D2: blocked until 360px D1 check
R1-D2 must correct mobile body order to form before Order Summary
Checkout: Not done
```
