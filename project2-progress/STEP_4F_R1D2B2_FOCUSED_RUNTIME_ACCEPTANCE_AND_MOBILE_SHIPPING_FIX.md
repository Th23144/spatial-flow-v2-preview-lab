# Step 4F · R1-D2B2 Focused Runtime Acceptance and Mobile Shipping Fix

Date: 2026-08-06  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Evidence received

The user supplied the remaining three focused runtime screenshots:

```text
1. phone Country dropdown open
2. desktop Ship to a Different Address expanded
3. phone Ship to a Different Address expanded
```

## Accepted states

### Phone Country dropdown

Passed:

```text
- opaque dropdown/search/results surface
- selected option uses dark green highlight
- text is readable
- underlying form fields do not bleed through
- menu remains inside the phone viewport
```

### Desktop expanded Shipping

Passed:

```text
- one native Shipping field set
- First name | Last name
- Country full width
- Address line 1 and line 2 remain separated
- Town / City | ZIP Code
- State occupies the next full-width row because no native Shipping Phone field exists
- Optional note follows the Shipping fields
```

The NVIDIA overlay visible in the screenshot is an operating-system overlay, not a Checkout defect.

## Blocking failure

### Phone expanded Shipping geometry

Failed:

```text
- Shipping First name remains wide while Last name collapses into a narrow second implicit column
- Country and address rows occupy only the left portion of the panel
- Town / City remains wide while ZIP collapses into a narrow second implicit column
- the phone layout is not a true one-column form
```

Root cause:

```text
The mobile parent grid is changed to one explicit column, but the more-specific desktop Shipping field rules still assign some native rows to grid column 2. CSS Grid therefore creates an implicit second column. The existing generic mobile reset has lower specificity and cannot override those rules because both use !important.
```

## Bounded correction

Only `assets/css/checkout-safe5.css` changes.

Replace the current generic mobile City/Postcode/State/Phone reset with:

```text
- Billing City/Postcode/State/Phone remain reset to one column
- every native Shipping row receives an exact high-specificity grid-column: 1 / -1 override
- all Shipping rows receive width/max-width: 100%
- desktop visual order City → ZIP → State remains intact
```

Reconstructed target:

```text
46,139 bytes
1,371 lines
SHA256: aa8a43d56c5fc23c11a43f0709fe5c267d00687c10e2021a2fe8bad3228c005b
Braces: 168 / 168
Comments: 17 / 17
CSS parser errors: 0
CRLF
no final newline
```

## Required evidence after source audit

Only one focused screenshot is required:

```text
phone Ship to a Different Address expanded from the checkbox through Shipping State and Optional note start
```

## Status

```text
D2B2 phone dropdown: passed
D2B2 desktop expanded Shipping: passed
D2B2 phone expanded Shipping: failed, bounded fix prepared
D2B2 overall: open
Shared R1 shell geometry: open
Step 02 Shipping V2: blocked
Checkout: Not done
```
