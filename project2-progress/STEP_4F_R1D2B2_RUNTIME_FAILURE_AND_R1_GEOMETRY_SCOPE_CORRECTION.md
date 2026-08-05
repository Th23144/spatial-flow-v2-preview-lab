# Step 4F · R1-D2B2 Runtime Failure and R1 Geometry Scope Correction

Date: 2026-08-05  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Evidence received

The user supplied the requested seven runtime screenshots in order:

```text
1. 1366px full Step 01
2. 390px full Step 01
3. 360px full Step 01
4. desktop Country dropdown open
5. mobile Country dropdown open
6. desktop Ship to a Different Address expanded
7. mobile Ship to a Different Address expanded
```

## 2. Passed items

The batch confirms:

```text
- desktop Billing City | ZIP and State | Phone pairing now renders
- phone widths return Billing fields to one column
- Country and State closed controls show a visible chevron
- the non-reference divider above Ship to a Different Address is removed
- the Astra scroll-to-top control no longer covers Checkout fields
- phone Billing/Shipping fields remain inside the mobile gutter
- desktop/mobile address-line spacing remains fixed
- mobile expanded Shipping remains one column and does not duplicate
```

## 3. Blocking failures

### A. Desktop and mobile Select2 dropdown surface failure

Screenshots 4 and 5 show a severe failure:

```text
- dropdown/search/results surface is transparent or not painted as an opaque layer
- option text overlaps Street address, City, ZIP and State controls underneath
- desktop dropdown visually crosses into the Order Summary region
- mobile options overlap multiple form rows and become difficult to distinguish
- stacking and isolation are not acceptable
```

Installed CSS root cause:

```text
--sf-safe5-paper, --sf-safe5-soft, --sf-safe5-stone and related variables are declared on .sf-safe5-checkout.
The open Select2/SelectWoo dropdown is appended outside that element.
The dropdown rules therefore reference unresolved custom properties without fallbacks.
The open dropdown also lacks an explicit Checkout-safe stacking layer.
```

D2B2 cannot close until the dropdown has:

```text
- opaque background
- correct border/search/results surfaces
- explicit z-index
- readable selected/highlighted states
- no visual bleed-through on desktop or phone
```

### B. Desktop expanded Shipping field pairing failure

Screenshot 6 shows:

```text
Town / City occupies the left half of one row with the right half empty.
State and ZIP Code are paired on the next row.
```

This does not match the accepted Step-01 field rhythm. The reason is the native Shipping DOM order differs from the Billing order, so column-only CSS placement is insufficient.

Required accepted result:

```text
Town / City | ZIP Code
State       | Phone, when a Shipping phone field exists
```

When no native Shipping phone field exists, State may remain full width or occupy the next accepted row, but ZIP must pair with City rather than State.

## 4. D2B2 classification

```text
D2B2 closed-control styling: partially passed
D2B2 mobile one-column behavior: passed
D2B2 Select2 open state: failed
D2B2 desktop expanded Shipping geometry: failed
D2B2 overall: open
Step 02 Shipping V2: blocked
Checkout: Not done
```

## 5. User's additional overall-layout observation

The user's statement that page layout, width and spacing remain far from strict 1:1 is valid.

The accepted static reference currently defines the shared Checkout shell approximately as:

```text
max width: 1440px
horizontal page padding: 56px
desktop column gap: 80px
main/summary ratio: 7fr / 5fr
shell vertical padding: 58px top / 96px bottom
```

The installed live shell currently uses:

```text
max width: 1180px
width: calc(100% - 48px)
desktop column gap: 30px
columns: 1.36fr / 0.92fr
bottom margin rather than the reference shell padding geometry
```

Therefore the visible overall width/gap/spacing mismatch is real, not subjective.

## 6. Scope correction

Not every overall geometry issue belongs to D2B2.

```text
D2B2 owns:
- Step-01 field grid and row geometry
- field surfaces/icons/labels
- Country/State closed and open states
- alternate Shipping field presentation
- Step-01 panel/action behavior at desktop and phone widths

Shared R1 shell geometry owns:
- overall max width
- main/summary column ratio
- inter-column gap
- shell top/bottom spacing
- page-level frame alignment shared by Steps 01–03

Summary subgroup owns:
- Order Summary internal card/item/totals/trust geometry
- sticky behavior
```

The shared shell mismatch had been accepted too early. It must be reopened inside R1 and corrected before R1 can close. It should be fixed before Step 02/03 final visual acceptance so those later steps are built on the correct shared frame.

## 7. Correct next sequence

```text
1. Fix the two remaining D2B2 blockers:
   - Select2 open dropdown isolation/stacking
   - desktop expanded Shipping row pairing
2. Re-test only those repaired states.
3. Close D2B2 when they pass.
4. Reopen and correct the shared R1 shell geometry against the accepted static reference.
5. Then proceed to Step 02 Shipping V2 migration.
```

## 8. Stop point

```text
D2B2: open
Shared R1 shell geometry: reopened as outstanding
Step 02 Shipping V2: not started
Checkout: Not done
```
