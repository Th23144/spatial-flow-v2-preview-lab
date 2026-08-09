# Step 4F · Product Packaging · Custom Grouping Click Bugfix

Date: 2026-08-08
Status: STATIC CANDIDATE BUGFIX · USER RECHECK REQUIRED
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

During review of the Custom Grouping clarity candidate, the user reported that the visible controls:

```text
Move from Package 02 → Package 01
Move from Package 03 → Package 01
```

appeared not to respond when clicked.

Screenshot review also showed that Custom Grouping could still open with the same three one-item packages produced by `Package separately`, making the two modes look too similar.

## Root cause 1 · MutationObserver self-trigger loop

The clarity enhancement script observed `groupsHost` mutations so it could re-apply visual clarification after the base Packaging controller re-rendered.

However, the enhancement itself used DOM mutations including:

```text
replaceWith
innerHTML
insertBefore
```

while the observer remained connected.

This created a feedback loop:

```text
observer fires
→ clarity enhancement mutates DOM
→ observer fires again
→ enhancement mutates DOM again
→ repeat
```

The move buttons were present, but the continuously re-mutating area could make interaction appear non-responsive / unstable.

## Fix 1

`preview/spatial-flow-checkout-packaging-custom-clarity-v1.js` now disconnects the observer before applying clarity DOM changes and reconnects only after the enhancement is complete.

The existing main Packaging event handler remains authoritative for actual item moves. The clarity layer does NOT create a second move implementation.

Resulting ownership remains:

```text
Main Packaging JS
→ state.assignments mutation
→ render
→ sessionStorage draft persistence

Custom clarity JS
→ explanatory labels / hierarchy only
```

## Root cause 2 · Separate → Custom inherited the Separate state

The accepted main candidate previously allowed this transition:

```text
Package separately
Package 01 = A
Package 02 = B
Package 03 = C

click Custom grouping
↓
Custom kept Package 01 / 02 / 03 unchanged
```

That made Custom initially look almost identical to Separate.

## Fix 2

When the user clicks `Custom grouping` directly from a true `Package separately` state, the clarity layer now intercepts that transition before the main bubble handler and routes it through the existing base controller states:

```text
Separate
→ Together
→ Custom
```

This intentionally reuses the main Packaging controller rather than mutating its private in-memory state from a second script.

The resulting Custom baseline becomes:

```text
Package 01 = all current products
Package 02 = empty
Package 02 = opened for editing
```

The customer can then move one or more products out of Package 01 to build combinations such as:

```text
Package 01 = A + B
Package 02 = C
```

Only if another distinct grouping is required should the customer create another group.

## Unique assignment rule

Still locked:

```text
one cart-item allocation can belong to exactly one Product Packaging Group at a time
```

`Move from Package 02 → Package 01` means transfer, never duplication.

## File changed

```text
preview/spatial-flow-checkout-packaging-custom-clarity-v1.js
```

Commit:

```text
e943871  Fix custom grouping click loop and reset custom start state
```

## Not changed

```text
- accepted desktop Compact structure
- product-packaging business rules
- Gift fee placeholder
- real SAFE5 Checkout
- WooCommerce Session / fees / order metadata
- Step 03
- Step 04
- Batch 6
```

## Recheck

User should verify:

```text
1. Open Custom grouping.
2. Open Package 01.
3. Click a Move from Package XX → Package 01 button.
4. Confirm the item visibly leaves its previous Package and appears in Package 01.
5. Confirm Current Plan updates immediately.
6. Switch Package separately → Custom grouping and confirm Custom no longer simply inherits three separate one-item packages.
7. Check both desktop and mobile.
```

## Current stop point

```text
Custom grouping clarity candidate: BUGFIX APPLIED
User recheck: PENDING
Real SAFE5 Product Packaging: NOT STARTED
Batch 6: PAUSED
```

Governed by `PROJECT2_STEP_RECORDING_POLICY.md`.
