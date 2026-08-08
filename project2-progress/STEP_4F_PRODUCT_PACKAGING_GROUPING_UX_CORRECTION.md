# Step 4F · Product Packaging Grouping UX Correction

Date: 2026-08-08
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User-observed defect

The previous advanced Product Packaging Groups candidate asked the customer to create package containers manually and then assign items through persistent `Package 01 / Package 02` dropdowns.

This was misleading because the customer thinks in outcomes:

```text
keep everything together
package every item separately
some items together / some items separately
```

The old UI instead forced the customer to calculate how many package containers had to be created. For an order containing three items, a customer wanting three separate product packages had to understand that they needed to add two more package containers. This is implementation logic, not customer logic.

## Corrected UX rule

The customer chooses the desired packaging result first. The interface creates the required number of product packages automatically.

Advanced grouping now begins with three explicit choices:

```text
1. Keep everything together
   -> 1 product package

2. Package every item separately
   -> automatically create one product package per cart item
   -> no repeated Add package action

3. Choose which items go together
   -> custom grouping mode
   -> start with usable package groups
   -> customer assigns each item through visible package buttons
   -> + New package is available only when an additional group is actually needed
```

## Removed misleading behavior

The following is no longer the normal grouping workflow:

```text
Add product package
Add product package again
then discover how many containers were needed
then use unlabeled / persistent package dropdowns for every item
```

Persistent per-item package dropdowns are removed from the package cards.

## Custom grouping presentation

When custom grouping is selected, each item is shown with explicit package targets:

```text
Item A -> Package 01 / Package 02 / + New package
Item B -> Package 01 / Package 02 / + New package
Item C -> Package 01 / Package 02 / + New package
```

This makes the action semantic explicit: the customer is choosing where the item goes, not configuring an abstract container count.

## Package type remains independent

After grouping is resolved, every generated product package can independently use:

```text
Standard Packaging
or
Gift Packaging
```

Gift fees remain provisional at `$9.00` per non-empty Gift Packaging Group.

## Commerce boundary unchanged

This UX correction does not change the previously locked business model:

```text
Product Packaging != courier / transport packaging
```

Multiple product packages may still travel together inside one outer shipping parcel to the same address.

## Implementation status

Static candidate files updated:

```text
preview/spatial-flow-checkout-packaging-v1.js
preview/spatial-flow-checkout-packaging-v3.css
```

Live SAFE5 / WooCommerce implementation remains NOT STARTED.
Batch 6 remains PAUSED until Product Packaging static acceptance is complete.
