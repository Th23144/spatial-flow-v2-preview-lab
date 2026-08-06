# Step 4F · R1-D2B2 Select2 Computed-Style Diagnostic

Date: 2026-08-06  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Evidence supplied

The user executed the requested live DOM/computed-style diagnostic while the Billing Country menu was open.

Key runtime facts:

```text
body has woocommerce-checkout and does not have woocommerce-order-received
open Select2 containers: 2
dropdowns: 1
expected DOM selector matches: 1
result options: 250
```

Actual body-level open container:

```text
class: select2-container select2-container--default select2-container--open
parent: BODY
position: absolute
width: 0px
z-index: auto
background: transparent
```

Actual dropdown:

```text
class: select2-dropdown select2-dropdown--below
parent: body-level open Select2 container
width: 610.797px
right: -610.797px
z-index: 98
background/background-color: transparent
```

Actual results/options/first option:

```text
all remain transparent
options max-height: 200px
250 native country options are present
```

## 2. Confirmed conclusion

The live DOM is standard Select2 and the intended DOM selector is structurally correct:

```css
body.woocommerce-checkout:not(.woocommerce-order-received)
  .select2-container--open
  .select2-dropdown
```

However, the computed style proves the intended runtime declarations are not winning:

```text
expected z-index: 100000
computed z-index: 98

expected opaque #faf7f3 background
computed background: transparent
```

Therefore the failure is no longer attributable to an incorrect Select2 DOM assumption.

The remaining possibilities are:

```text
A. the browser/runtime stylesheet does not contain the latest dropdown block despite the local source file being correct; or
B. another loaded rule with equal/higher cascade priority and !important overrides the new block.
```

A screenshot or another guessed CSS patch cannot distinguish A from B.

## 3. Required next diagnostic

Inspect the live CSSOM and loaded stylesheet response to determine:

```text
- which checkout-safe5.css URL/version is actually loaded
- whether the loaded stylesheet contains the z-index: 100000 and #faf7f3 dropdown signatures
- every live CSS rule matching the body-level open container, dropdown, results, options and first option
- selector text, source stylesheet URL, rule order, declared value and !important priority
```

After this single diagnostic, issue one anchored correction:

```text
- cache/version correction if the latest block is absent; or
- exact selector/order correction if a competing rule is identified.
```

## 4. Status

```text
D2B2 Select2 open state: failed
DOM selector assumption: validated
Latest local source integrity: passed
Runtime cascade owner: unresolved pending CSSOM evidence
No further blind CSS patch authorized
Shared R1 geometry: open
Step 02: blocked
Checkout: Not done
```
