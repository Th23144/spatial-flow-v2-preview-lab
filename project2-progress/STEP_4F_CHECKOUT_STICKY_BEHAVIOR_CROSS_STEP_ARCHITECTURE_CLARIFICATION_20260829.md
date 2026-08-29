# Project 2 · Checkout Sticky Behavior Cross-Step Architecture Clarification · 2026-08-29

## Trigger

User paused the proposed Step04 sticky source correction and asked why Checkout Step01/Step02 right summaries actually stick while Step03/Step04 do not. User explicitly requested that Step03 be deferred until Step04 is finished.

## Source/runtime conclusion

The four Checkout steps are not all running in one identical DOM/runtime shell even though they share the same visual language.

### Step01 / Step02

The static Checkout flow contract uses the canonical `.order-summary` sidebar with:

```css
.order-summary {
  position: sticky;
  top: 136px;
}
```

Step01/Step02 remain inside the ordinary Checkout shell and, in current accepted runtime, their ancestor scroll environment allows sticky to activate. Their working sticky behavior is therefore not evidence that every later Checkout page inherits the same runtime conditions.

### Step04

Step04 is no longer the checkout form shell. It is the WooCommerce order-received/result template with a separate DOM owner:

```text
.sf-order-result-v3
  -> .result-shell
     -> .result-side
```

Its own canonical declaration exists:

```css
.result-side {
  position: sticky;
  top: 132px;
}
```

but the live Step04 diagnostic proved native sticky never activates because the first non-visible overflow ancestors are `html/body` (`overflow: hidden auto`). Intermediate Step04/Astra ancestors are otherwise visible/none.

Thus Step04 differs from Step01/Step02 primarily by page/runtime scope and ancestor overflow ownership, not by absence of `position:sticky`.

### Step03

Do not diagnose or modify Step03 in this clarification. Step03 has a different architecture boundary because normal Payment and the Crypto/order-pay Workspace are not necessarily the same runtime shell as Step01/Step02. Historical Project 2 records also include an earlier rejected Step03 theme-side Selected Payment panel experiment and an already-open Crypto V0.3.0 visual typography defect.

No source/runtime conclusion about Step03 sidebar sticky is locked here. It remains deferred by explicit user instruction until Step04 sticky behavior is finished.

## Important acceptance correction

A shared visual reference can specify sticky on all steps while production runtime still differs because CSS sticky depends on ancestor scroll/overflow context. Therefore:

```text
same `position:sticky` declaration
!=
same live sticky behavior
```

Step04 must be fixed/accepted on its own runtime page scope. Step03 must later receive its own runtime audit rather than being assumed equivalent to either Step01/02 or Step04.

## Current action boundary

```text
Step04 sticky source correction: PAUSED BY USER pending this clarification
Step04 sticky diagnosis: owner isolated, no code changed yet
Step03 sticky investigation: DEFERRED until Step04 closes
Crypto V0.3.0 typography follow-up: remains open after Step04
Checkout binary status: Not done
```
