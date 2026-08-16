# Step 4F · Crypto V0.3.0 B1 · Refresh Status Diagnostic Gate

Date: 2026-08-16
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Context

B1 runtime evidence for order #3618 is broadly normal, but the user reports that the visible `REFRESH STATUS` button appears to do nothing when clicked.

The accepted V0.2.9 backend contract defines:

```text
GET /wp-json/sf-crypto/v1/orders/{order_id}/payment-status
```

as a read-only/idempotent status operation used only at bounded interaction points including page load, focus recovery, post-Invoice, post-Hash, post-Sandbox and explicit user Refresh. There is no timed polling loop.

## Evidence boundary

The screenshot proves the Refresh Status control renders and appears interactable.

The current user observation alone cannot distinguish among:

```text
A. click handler never fires / no network request
B. request fires and returns 2xx with unchanged waiting state, but UI gives no acknowledgement
C. request fires but returns auth/REST/server error
D. request is blocked/aborted before completion
```

No source modification is authorized until this distinction is made.

## Source availability note

Project-2 repository records the V0.3.0 candidate identity, hashes, architecture and handoff, but the plugin source package itself is not stored as ordinary repository source.

Current File Library search located the standalone V0.3.0 handoff but did not surface the V0.3.0 ZIP/source asset as an inspectable file.

Therefore the next highest-confidence diagnostic is direct runtime Network evidence from the already-open local order-pay Workspace.

## One-action runtime diagnostic

On the same unpaid order #3618:

1. Open browser Developer Tools.
2. Open `Network`.
3. Clear existing requests.
4. Filter for `payment-status` (or `sf-crypto`).
5. Click `REFRESH STATUS` exactly once.
6. Observe whether a new request appears.

Record one of:

```text
A — NO REQUEST
No new payment-status request appears.
Likely frontend binding/selector/event problem.

B — 2xx REQUEST
A payment-status request appears and returns 200/2xx.
Backend action works; defect is missing user-visible refresh feedback / state acknowledgement if state is unchanged.

C — 4xx REQUEST
Request appears but returns 401/403/404/409/429 etc.
Diagnose token/auth/route/state contract from exact response.

D — 5xx/FAILED
Request appears but fails/aborts/returns server error.
Diagnose REST/runtime failure from exact response.
```

## Required evidence

Return only:

```text
request appeared: yes/no
status code: if any
request URL or endpoint tail
response body/error text: if non-2xx
```

A screenshot of the Network row is acceptable and preferable if convenient.

## Stop rule

Do not click Sandbox success and do not proceed to B2 until this diagnostic is recorded and the Refresh Status acceptance point is resolved.
