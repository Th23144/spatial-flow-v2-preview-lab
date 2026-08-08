# Step 4F · Packaging Copy Clarity Correction

Date: 2026-08-08

## User feedback

The stacked-row layout is accepted as the correct structural direction, but the packaging copy was difficult to understand.

## Correction rule

Customer-facing packaging copy must explain the decision in ordinary commerce language before exposing any advanced grouping behavior.

Do not lead with internal/model terms such as:

```text
presentation
eligible product packages
product packaging groups
stored separately
candidate model semantics
```

The primary decision must answer:

```text
What is this option?
How much does it cost?
What is included?
When should I choose it?
What extra field becomes available?
```

## Current customer-facing model

### Standard Packaging

```text
Free / Included
Best for personal orders
Protective everyday packaging
Items are packed together when suitable
Optional name on package at no extra cost
```

Selected detail:

```text
Add a name (optional)
Name on package
```

### Gift Packaging

```text
+$9.00 per gift package (provisional)
For gifts
Upgraded gift presentation
Gift card included
```

Selected detail:

```text
Add a gift message (optional)
Message for the card
```

### Separate packaging entry

Do not call the entry `Product Packaging Groups` in the customer-facing primary flow.

Use direct language:

```text
Want some items packaged separately?
Choose which items go together, then choose Standard or Gift Packaging for each package.
[ Separate items into packages ]
```

Inside the advanced editor:

```text
Set up separate packages.
Move each item into the package it belongs in.
Each package can use Standard or Gift Packaging.
```

## Fee explanation

Use a concrete example instead of model terminology:

```text
Gift Packaging is $9 per gift package.
Two items in one gift package = one $9 fee.
Two separate gift packages = two fees.
```

## Boundary explanation

Keep the distinction from courier packaging short and concrete:

```text
This choice is for the packaging around your products inside the shipping box.
It does not create a separate shipment.
```

## Status

```text
Layout direction: stacked rows / one packaging option per row
Copy clarity correction: implemented in static candidate
User acceptance: pending
Live SAFE5 / WooCommerce implementation: not started
Batch 6: paused
```
