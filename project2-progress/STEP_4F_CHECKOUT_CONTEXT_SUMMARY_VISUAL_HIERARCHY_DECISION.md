# Step 4F · Checkout Context Summary Visual Hierarchy Decision

Last updated: 2026-07-30  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Cart: Completed 1:1
Checkout: Not done
Current static review: Step 02 Shipping
Current source edit authorized: None
```

## 1. User-observed issue

The Step 02 Shipping page currently places a large delivery-address confirmation panel above the shipping-method selector.

The information is operationally useful because the customer should verify the delivery address before selecting a shipping method.

However, the current visual treatment gives this context block too much prominence:

```text
- large section height
- its own editorial heading
- strong top-of-column placement
- substantial whitespace
- panel treatment comparable to the actual Shipping task
```

This causes the previous-step context to compete with the current page's primary task.

The same risk applies to Step 03 Payment, where delivery address and shipping method must remain visible but must not visually outrank payment selection.

## 2. Design principle

Previous-step data should remain visible as verification context, but it must not become the visual hero of the current step.

```text
Current-step task = primary hierarchy
Previous-step confirmation = secondary hierarchy
Order Summary = persistent transactional reference
```

Therefore the correct solution is not to remove the context summaries. It is to reduce their visual weight.

## 3. Rejected extremes

### Remove the summaries entirely

Rejected because this would make it harder for the customer to verify the delivery address and shipping method before progressing.

### Keep the current full editorial panel

Rejected as the likely final direction because it competes with the Shipping or Payment task and creates the impression that the previous step remains the current page's main content.

## 4. Recommended direction

Replace the large contextual panel with a compact verification strip inside the left workspace.

### Step 02 Shipping

```text
Delivery details
Alex Morgan · 123 Quiet Way, Apt 4B · Brooklyn, NY 11201
[ Edit ]
```

Then immediately begin the primary Shipping section:

```text
How should it travel?
[ Shipping method choices ]
```

### Step 03 Payment

Use two compact rows:

```text
Deliver to
Alex Morgan · Brooklyn, NY 11201
[ Edit ]

Shipping
Standard tracked delivery · 5–7 business days · Free
[ Edit ]
```

Then immediately begin:

```text
Choose how to pay
[ Dynamic payment methods ]
```

## 5. Visual rules

The compact verification area should:

```text
- have no large editorial headline
- avoid a full-height card treatment
- use one or two concise rows
- use smaller type than the current-step heading
- use a light divider or subtle background only
- keep Edit visible but visually quiet
- remain inside the left main workspace
- never become a third desktop column
```

Recommended desktop height:

```text
Step 02 single-row context: approximately 72–96px
Step 03 two-row context: approximately 112–144px
```

The current Step 02 context block is substantially taller than this and should be treated as a prototype hierarchy issue rather than the final approved composition.

## 6. Mobile behavior

On mobile, the context summary may use a compact collapsed disclosure:

```text
Delivery details                           Edit
Alex Morgan · Brooklyn, NY 11201
```

Step 03 may use:

```text
Delivery and shipping                     Edit
Alex Morgan · Standard tracked delivery
```

It should not require opening a modal to verify the basic summary.

## 7. Decision status

```text
Recommended direction: Keep the summaries, reduce them to compact verification strips
User approval: Pending
Source change: Not authorized yet
Step 02 visual acceptance: Pending this decision
Step 03 implementation: Not started
```

Do not modify Step 02 or begin Step 03 until the user confirms this hierarchy direction.
