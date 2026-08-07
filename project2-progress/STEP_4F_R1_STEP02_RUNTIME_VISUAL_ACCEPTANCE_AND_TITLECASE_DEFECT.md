# Step 4F · R1 Step-02 Shipping V2 Runtime Visual Acceptance and Intro Title-Case Defect

Date: 2026-08-07  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Trigger

After the coordinated four-file Step-02 Shipping V2 source unit was installed, the user supplied runtime screenshots for:

```text
Desktop / 1366-class Step 02
Mobile / 390-class Step 02
Mobile / 360-class Step 02
```

This record separates visually accepted behavior from remaining blockers. It does not yet close Step 02.

## Visual/runtime structure accepted from supplied screenshots

The installed Step-02 unit is active and materially matches the locked implementation architecture:

```text
- Step indicator correctly shows Step 02 of 04.
- Step 01 is marked complete and Step 02 active.
- Step-02-specific Intro copy is being loaded.
- Step-02-specific supporting paragraph is present.
- Shipping panel uses Shipping · 02 / How should it travel? hierarchy.
- the current real WooCommerce shipping rate is rendered as a structured selectable Shipping card.
- current real store label and $8.99 price remain WooCommerce-derived; prototype shipping method names/prices are not visible.
- Before it leaves. context card is present.
- context card displays the user's actual Step-01 delivery/contact values rather than prototype Alex Morgan data.
- desktop layout keeps Shipping on the left and context + Order Summary on the right.
- mobile layout is context -> Shipping -> Continue -> Back -> Order Summary.
- 390/360 screenshots show no visible horizontal overflow, clipping, card overlap or fixed-height shipping-list collapse.
- current one-method presentation is structurally compatible with the previously accepted count-agnostic source implementation.
```

The existing Order Summary styling is not judged as a Step-02 blocker because full Summary visual migration remains a separately scoped later acceptance group.

## Strict 1:1 defect found

The Step-02 Intro heading is visually rendered as:

```text
Choose The Journey.
```

The accepted static authority is:

```html
Choose the <em>journey</em>.
```

Therefore the live rendering incorrectly capitalizes `The` (and visibly capitalizes the italic journey word at sentence position through inherited heading text transformation).

Reference authority:

```text
preview/spatial-flow-checkout-shipping-v1.html
<h1 class="checkout-title">Choose the <em>journey</em>.</h1>
```

The PHP/backend default is already sentence-case:

```text
Choose the <em>journey</em>.
```

The defect is therefore presentation cascade, not backend copy ownership.

### Required bounded repair

Add a Checkout-only override to the existing SAFE5 Intro heading selector:

```css
text-transform: none !important;
```

This must affect the SAFE5 Checkout Intro heading only and must not reopen shared site typography.

## Functional/runtime items not yet accepted from screenshots alone

Screenshots cannot prove the following and these remain pending:

```text
1. Edit address returns to Step 01.
2. Back to Address returns to Step 01.
3. Step-01 email/name/address/phone values remain intact after returning.
4. returning again to Step 02 rehydrates Before it leaves. correctly.
5. Continue to Payment enters Step 03.
6. Step 02 -> Step 01 -> Step 02 Intro switches and restores correctly.
7. WooCommerce totals remain stable through navigation/recalculation.
8. backend Step-02 copy controls change the live Step-02 presentation and blank values fall back to defaults.
```

Multi-rate runtime is not required from the current one-rate store configuration before this immediate visual acceptance can proceed; it remains a shipping regression requirement when a multi-rate configuration is available. The source-level count-agnostic architecture has already been accepted.

## Current status

```text
Step-02 coordinated install: visually active
Desktop Step-02 structure: accepted subject to title-case repair
390 mobile structure: accepted subject to title-case repair
360 mobile structure: accepted subject to title-case repair
Dynamic current real shipping rate card: visually accepted
Before it leaves. context card: visually accepted
Intro title strict 1:1 capitalization: OPEN
Step-02 navigation/data-persistence runtime checks: pending
Step-02 backend editability runtime check: pending
R2 ugly notice defect: retained
Step 02: not yet closed
Checkout: Not done
```
