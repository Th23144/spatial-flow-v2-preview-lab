# Step 4F · Checkout Context Panel Architecture Approval and Static Implementation

Last updated: 2026-07-31  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Cart: Completed 1:1
Checkout: Not done
Static Checkout flow: in design and interaction completion
Live WordPress / WooCommerce source edit: none
```

## 1. User-approved architecture

The contextual confirmation information remains visible on Steps 02 and 03, but it must not compete with the current step's primary task.

The approved desktop Checkout remains a strict two-column page:

```text
Left: current-step workspace
Right: contextual confirmation card + Order Summary
```

The right column is a vertical stack:

```text
Before it leaves.
Order summary
```

The product summary moves downward naturally to make room for the confirmation card. The page-wide two-column proportions, header, intro and current-step workspace remain unchanged.

## 2. Step 02 Shipping contract

Step 02's primary task is choosing a shipping method.

The right-side `Before it leaves.` card displays only information already completed in Step 01:

```text
DELIVER TO
- recipient name
- complete street address
- city / region / postcode
- country
- Edit address action

CONTACT
- email
- phone when available
```

Step 02 must not display `SHIPPING METHOD` in this confirmation card because the user has not yet committed the current selection by continuing to Step 03.

The Order Summary may preview the currently selected shipping cost and resulting total. This is a price preview, not a claim that the shipping step is complete.

## 3. Step 03 Payment contract

After the user submits Step 02 and enters Step 03, the selected shipping method becomes completed context.

The same `Before it leaves.` component displays:

```text
Left column:
DELIVER TO
complete address
Edit address

Right upper section:
CONTACT
email / phone

Right lower section:
SHIPPING METHOD
confirmed method
estimate
price
Edit shipping
```

`Edit address` returns to Step 01. `Edit shipping` returns to Step 02.

## 4. Mobile internal-grid rule

The Step 03 mobile confirmation card retains the same internal information architecture as desktop:

```text
left: Deliver to
right upper: Contact
right lower: Shipping Method
```

It is not replaced by three full-width horizontal rows. The internal two-column grid is compressed responsively at 390px and 360px, with safe wrapping for email and address content.

Step 02 mobile uses the same grid but omits the Shipping Method section entirely.

The mobile flow order is:

```text
Before it leaves.
→ current Step 02 / Step 03 workspace
→ Order Summary
```

## 5. Current payment-method truth

Cryptocurrency is the only confirmed currently enabled payment capability at this planning point.

Therefore the first Step 03 static page must show Cryptocurrency as the current available gateway entry and must not present unconfirmed Card, Apple Pay, Google Pay, PayPal or Bank Transfer options as active production methods.

Future gateway types remain an architectural capability, not visible current behavior.

## 6. Static implementation group authorized by this approval

```text
A. Update preview/spatial-flow-checkout-shipping-v1.html
   - remove the large address block from the left workspace
   - add right-column Before it leaves. card
   - Address + Contact only
   - keep Order Summary below it

B. Create preview/spatial-flow-checkout-payment-v1.html
   - Step 03 active
   - Address + Contact + confirmed Shipping Method
   - current Cryptocurrency entry only
   - no real payment or order creation

C. Update shared static CSS and JavaScript
   - responsive context grid
   - Step 02 draft shipping preview
   - Step 02 submission commits shipping to the prototype session
   - Step 03 reads the committed shipping selection
   - connect Step 02 → Step 03 and Step 03 → Step 02
```

## 7. Boundaries

```text
- No real WooCommerce order is created.
- No live blockchain is queried.
- No wallet address or credential is embedded.
- No production payment method is fabricated.
- No live PHP, theme CSS, theme JavaScript, template or database is modified.
- Checkout remains Not done.
```
