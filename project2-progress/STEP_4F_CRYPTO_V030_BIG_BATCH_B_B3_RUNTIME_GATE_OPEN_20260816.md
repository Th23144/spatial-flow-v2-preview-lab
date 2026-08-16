# Step 4F · Crypto V0.3.0 BIG BATCH B · B3 Runtime Gate Open

Date: 2026-08-16  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
B1: FINAL PASS
B2: FINAL PASS
B3: OPEN
V0.3.0 plugin candidate: KEEP
Project 2 Crypto Workspace at B3 start: ON
Paid Sandbox order #3618: PRESERVE / DO NOT USE FOR ROLLBACK PROOF
```

## B3 scope

B3 is the final BIG BATCH B runtime gate and covers only:

```text
1. create/retain a separate unpaid Crypto Workspace order while flag is ON
2. preserve that official order-pay URL and order ID
3. switch Project 2 Crypto Workspace ON -> OFF
4. reopen the same unpaid order-pay URL
5. verify bridge to legacy /crypto-pay/ for the same Woo order
6. verify no second order is created
7. create one fresh Crypto Checkout while OFF and confirm legacy route
8. verify at least one available non-Crypto Woo gateway still renders/switches normally in main Step 03
9. leave Workspace OFF after the local BIG BATCH B cycle unless a later explicit deployment decision changes that
```

No theme or plugin source edit is authorized during B3.

## B3-A — Unpaid ON-state rollback specimen

While Workspace is still ON, create one fresh disposable Crypto order through the normal Project-2 Checkout.

Expected before rollback:

```text
exactly one new WooCommerce order
unpaid / on-hold
Woo official /checkout-2-2/order-pay/{id}/ route
V0.3.0 Workspace visible
Waiting for Payment reached
```

Do not use Sandbox and do not submit a successful transaction hash on this order.

Preserve:

```text
order ID
official order-pay URL
```

## B3-B — Controlled Feature Flag rollback

Change only:

```text
Project 2 Crypto Workspace: ON -> OFF
```

Then reopen the exact preserved unpaid order-pay URL.

Expected:

```text
same WooCommerce order ID
bridge/redirect to legacy /crypto-pay/
no second Woo order
legacy invoice/payment flow visible and usable
```

The accepted rollback is a presentation/runtime bridge only. Do not delete Invoice/Transaction/Log/order data and do not downgrade V0.3.0.

## B3-C — Fresh Crypto Checkout while OFF

With Workspace still OFF, create one more fresh Crypto order via normal Checkout.

Expected:

```text
exactly one WooCommerce order
unpaid / on-hold
legacy /crypto-pay/ route
no V0.3.0 order-pay Workspace presentation
```

No real payment is required for this check.

## B3-D — Normal Woo gateway regression

Return to main Checkout Step 03 and inspect at least one currently available non-Crypto WooCommerce gateway.

Required:

```text
real eligible gateway list remains dynamic
gateway selection/switching works
native payment_box/provider fields render if the gateway owns them
native Terms/privacy remain
exactly one native Place Order remains
no Crypto-specific theme Selected Payment layer appears
no Crypto-specific button label/presentation contaminates the other gateway
```

A real external-provider charge is not required if that provider is not configured for local settlement.

## Final local state

After B3 testing, keep:

```text
Project 2 Crypto Workspace = OFF
```

This preserves the accepted immediate rollback bridge until a later deployment decision explicitly authorizes production/customer enablement.

## Evidence requested from user

Minimum result report:

```text
rollback specimen order ID
ON-state Workspace Waiting: pass/problem
flag ON -> OFF: success/problem
same preserved order-pay URL -> legacy /crypto-pay/: pass/problem
same order ID preserved: yes/no
second order created during bridge: no/yes
fresh Crypto Checkout while OFF -> legacy route: pass/problem
fresh OFF-path order count: one/multiple
non-Crypto gateway regression: pass/problem
final Workspace flag: OFF
```

Screenshots requested where practical:

```text
1. same unpaid order after OFF showing legacy /crypto-pay/
2. main Step-03 non-Crypto gateway selected
```

## Close condition

BIG BATCH B may be closed only if B3 passes and the final record explicitly confirms:

```text
V0.3.0 customer Workspace accepted
Feature Flag rollback accepted
normal Woo gateway architecture preserved
rejected theme Selected Payment layer remains absent
local final flag state OFF
```

After BIG BATCH B closure, the next Project-2 major system is the separate real Step-04 WooCommerce order-result/status matrix. A refreshed standalone payment-window handoff must also be produced for the dedicated payment-development window before that owner resumes payment-plugin work.
