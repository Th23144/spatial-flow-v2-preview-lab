# Step 4F · Crypto Plugin Step 2A · V0.2.7 Final Local Acceptance

Date: 2026-08-15
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Spatial Flow Crypto Pay Trial V0.2.7
Plugin Step 2A: FINAL ACCEPTED / CLOSED
Plugin Step 2B: may begin
Project 2 live Step-03 theme modification: still not authorized
```

## Source acceptance already established

The returned V0.2.7 package had already passed Project-2 source review before installation.

Authoritative ZIP SHA256:

```text
aa2075c78e5e788bc4bb2e5d111325b122bacea91835819a509a77b19bae7184
```

Step-2A implemented only the authorized security foundation:

```text
Order Guard
scoped on-hold payable-status support
Workspace Token scheme B
Guest / Customer / Manager binding
30-minute token lifetime
order / gateway / status / feature-epoch binding
feature-epoch invalidation on real flag changes
internal verified order-pay context primitives
```

No Step-2B customer-visible Workspace or REST behavior was included.

## User local regression result

The user reports the complete requested V0.2.7 local regression as PASS.

Confirmed PASS:

```text
plugin installation / activation
version = 0.2.7
existing Gateway settings preserved
Feature Flag setting preserved
legacy Crypto Checkout still creates exactly one order
Crypto order remains on-hold
legacy /crypto-pay/ still opens
legacy Invoice flow remains functional
legacy transaction-hash path remains functional
existing negative verification behavior remains functional
Sandbox remains functional
Sandbox success still reaches processing
WooCommerce result / Thank You remains functional
order notes remain functional
```

## Feature epoch runtime acceptance

The requested transition sequence also passed:

```text
initial OFF epoch = 1
OFF → ON = 2
save again while ON = 2
ON → OFF = 3
save again while OFF = 3
```

This proves in the local WordPress/WooCommerce runtime that:

```text
real flag transition increments exactly once
same-value save does not increment
unrelated re-save does not reset the option
```

Final local state after testing:

```text
project2_workspace_enabled = no / OFF
sf_crypto_workspace_token_epoch = 3
```

## Step-2A route regression acceptance

The user also confirmed that temporarily enabling the Feature Flag in V0.2.7 still preserved the legacy route:

```text
Checkout
→ one Crypto order
→ on-hold
→ /crypto-pay/
```

No premature Workspace page appeared.

The Feature Flag was restored to OFF after the test.

## Final decision

```text
Plugin Step 2A V0.2.7: FINAL PASS
legacy rollback path: preserved
Feature epoch behavior: proven in real local runtime
real order-pay Workspace: not implemented yet
REST / Invoice service / Payment service integration: not implemented yet
Project-2 S5/S6 live UI integration: not implemented yet
```

Proceed to bounded Plugin Step 2B only.
