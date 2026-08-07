# Step 4F · R1 Step-02 Backend Editability Runtime Test Protocol

Date: 2026-08-07  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Purpose

The Step-02 Shipping V2 visual and functional runtime checks are already accepted, but the user only partially exercised the Step-02 Customizer controls. This protocol provides an explicit, repeatable, field-by-field runtime test so the backend-editability requirement cannot be accidentally marked complete from partial coverage.

This is a **runtime test only**. No source file changes are required.

## Existing accepted state

Already accepted before this protocol:

```text
- Step-02 1366 / 390 / 360 visual structure
- `Choose the journey.` title-case repair
- Edit address -> Step 01
- Back to Address -> Step 01
- entered checkout data persists
- re-entering Step 02 resynchronizes `Before it leaves.`
- Continue to Payment -> Step 03
- Step 01 <-> Step 02 Intro switching
- source-level Step-02 backend copy ownership
```

Still pending:

```text
Full normal-state Step-02 backend-copy runtime coverage
```

## Admin location

Use the existing single Checkout Customizer section:

```text
WordPress Admin
-> Appearance / 外观
-> Customize / 自定义
-> Spatial Flow Checkout Page
```

Do not create or use another settings system.

## Test setup

Use two browser tabs.

```text
Tab A = WordPress Customizer / Spatial Flow Checkout Page
Tab B = live Checkout page /checkout-2-2/
```

In Tab B, enter valid Step-01 values and reach Step 02 before beginning the copy test. The exact customer data is not important; it only needs to be valid enough to enter Shipping.

## Full normal-state Step-02 field batch

Change the following visible Step-02 controls in **one batch**. These values are intentionally obvious and temporary.

| Customizer control | Temporary test value | Expected live location |
| --- | --- | --- |
| Step 02 label | `SHIP TEST` | top progress bar under `02` |
| Step 02 Intro title | `Journey <em>TEST</em>.` | large Step-02 H1 |
| Step 02 Intro description | `STEP02 INTRO DESCRIPTION TEST` | italic paragraph beside/below large H1 |
| Step 02 card small label | `SHIPPING TEST · 02` | small kicker above Shipping panel title |
| Step 02 card title | `How should it <em>TEST</em>?` | main Shipping panel H2 |
| Step 02 card description | `STEP02 SHIPPING DESCRIPTION TEST` | paragraph above real shipping methods |
| Step 02 confirmation card title | `Before it <em>TESTS</em>.` | `Before it leaves.` context-card title |
| Step 02 confirmation edit button | `EDIT ADDRESS TEST →` | top-right of context card |
| Step 02 delivery address label | `DELIVER TO TEST` | left context-card column label |
| Step 02 contact label | `CONTACT TEST` | right context-card column label |
| Back to Address button text | `← BACK TEST` | Step-02 secondary/back button |
| Continue to Payment button text | `PAYMENT TEST →` | Step-02 primary button |

### Heading-field rule

The three heading controls above intentionally contain `<em>...</em>`.

Allowed behavior:

```text
Journey <em>TEST</em>.
```

should render as:

```text
Journey TEST.
```

with only `TEST` italicized.

Do not use other HTML tags. The SAFE5 heading sanitizer is intentionally restricted to `<em>` only.

## Batch A — Save and render test

1. In Tab A, locate each of the 12 controls above.
2. Replace its current value with the corresponding temporary test value.
3. Recheck the values before publishing. In particular, ensure the `<em>` opening and closing tags are typed exactly with ASCII `<` and `>` characters.
4. Click **Publish / 发布** once.
5. Wait until the Customizer shows the published/saved state.
6. Go to Tab B.
7. Perform `Ctrl + F5`.
8. If the refresh returns Checkout to Step 01, use valid Step-01 values and click `Continue to Shipping` again.
9. Inspect Step 02 from top to bottom.

### Batch A pass criteria

All 12 visible controls must appear in their expected live locations.

Check specifically:

```text
Top progress 02          -> SHIP TEST
Large Intro H1           -> Journey TEST. (TEST italic)
Intro description        -> STEP02 INTRO DESCRIPTION TEST
Shipping kicker          -> SHIPPING TEST · 02
Shipping panel H2        -> How should it TEST? (TEST italic)
Shipping description     -> STEP02 SHIPPING DESCRIPTION TEST
Context title            -> Before it TESTS. (TESTS italic)
Context edit action      -> EDIT ADDRESS TEST →
Context address label    -> DELIVER TO TEST
Context contact label    -> CONTACT TEST
Back button              -> ← BACK TEST
Primary button           -> PAYMENT TEST →
```

The real shipping method name/price and customer address/contact values must **not** be replaced by the test copy. Those remain WooCommerce/customer-data owned.

## Batch B — Navigation persistence while custom copy is active

Before clearing the temporary copy:

1. Click `EDIT ADDRESS TEST →`.
2. Confirm it returns to Step 01.
3. Confirm previously entered fields remain populated.
4. Click the Step-01 Continue button to return to Step 02.
5. Confirm the 12 temporary Step-02 strings are still visible.
6. Confirm `Before it ...` customer data is still synchronized.
7. Click `← BACK TEST` and repeat the same Step-01 return check.
8. Return to Step 02 again.
9. Click `PAYMENT TEST →`.
10. Confirm Step 03 opens normally.
11. Return to Step 02 using the existing Step-03 back navigation.

### Batch B pass criteria

Changing backend copy must not alter navigation behavior, WooCommerce field state, shipping selection, totals, or Step-02 context synchronization.

## Batch C — Clear-to-default fallback test

After Batch A and B pass:

1. Return to Tab A.
2. Clear **all 12 temporary test fields** so the inputs are empty.
3. Do not type the defaults manually. They must be genuinely empty so the SAFE5 getter fallback is tested.
4. Click **Publish / 发布** once.
5. Wait for the saved state.
6. Return to Tab B and perform `Ctrl + F5`.
7. Reach Step 02 again.
8. Verify the defaults have returned automatically.

Expected defaults:

```text
Step 02 label                  Shipping
Step 02 Intro title            Choose the journey.
Step 02 Intro description      Select the delivery pace that fits this order. The final amount updates before payment begins.
Step 02 card small label       Shipping · 02
Step 02 card title             How should it travel?
Step 02 card description       Available delivery methods are calculated by WooCommerce for this address and cart. Final availability and cost remain store-controlled.
Confirmation card title        Before it leaves.
Confirmation edit action       Edit address →
Delivery address label         Deliver to
Contact label                  Contact
Back button                    ← Back to Address
Primary button                 Continue to Payment →
```

For the three heading defaults, the designated word should retain italic styling:

```text
journey
travel
leaves
```

### Batch C pass criteria

All 12 empty saved controls must resolve to the SAFE5 default/fallback strings above. No field may render blank.

## Conditional field — no-method fallback

`Step 02 no-method fallback` is intentionally excluded from the normal-state batch because the current store has a valid shipping method.

Do **not** disable or break the current shipping configuration merely to test this text.

Its source ownership is already accepted. Runtime verification can remain a condition-specific regression test for a future legitimate no-shipping scenario.

The expected default is:

```text
Shipping will be calculated after your address is entered.
```

## Final acceptance rule

Step-02 backend editability may be marked runtime-complete only after:

```text
Batch A: all 12 visible controls save and render correctly
Batch B: navigation / data / WooCommerce ownership remain intact
Batch C: clearing all 12 controls restores defaults automatically
```

The no-method fallback may remain deferred as a condition-specific regression case without blocking Step-02 closure.

## Evidence requested from user

The user does not need to capture every control individually.

For efficient proof, provide:

```text
Screenshot 1: Step-02 top area showing SHIP TEST + Journey TEST + Intro test + Shipping panel test copy
Screenshot 2: context card + buttons showing Before it TESTS / EDIT ADDRESS TEST / labels / BACK TEST / PAYMENT TEST
Then report whether navigation/data checks in Batch B passed.
After clearing values, report `defaults restored`, and provide one Step-02 screenshot if any default is wrong.
```

## Status

```text
Protocol created: yes
Source changes required: no
Current Step-02 backend runtime status: PARTIAL
Next action: execute Batch A -> Batch B -> Batch C
Checkout: Not done
```
