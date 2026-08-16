# Project 2 · Crypto V0.3.0 Transfer Button Typography Reopen

Date: 2026-08-16
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User-reported regression

The accepted V0.3.0 Crypto Workspace has one newly reported 1:1 visual defect:

```text
Button label: I HAVE COMPLETED THE TRANSFER
Problem: font size does not match the accepted/reference 1:1 target.
```

This is a presentation regression only unless later inspection proves otherwise.

## Ownership

The affected surface belongs to the plugin-owned V0.3.0 Crypto order-pay Workspace, not to the theme-owned WooCommerce Step 04 Order Result/status matrix.

Do not repair this by adding a theme-side payment selector/presentation layer or by reopening the accepted main Step 03 architecture.

## Execution decision

```text
1. Record/reopen the defect now so it cannot be lost.
2. Continue the already-open Step 04 production Order Result/status-matrix implementation as a separate bounded batch.
3. After Step 04 implementation, and before final Checkout closure, execute one isolated V0.3.0 Workspace typography micro-fix.
4. Re-test the button at desktop and mobile reference widths as a strict 1:1 visual regression.
5. Keep payment behavior, Workspace authorization, transaction verification, invoice logic, and V0.2.9 backend/security invariants unchanged.
```

## Status

```text
V0.3.0 functional/security acceptance: remains CLOSED / accepted
V0.3.0 visual parity: REOPENED for one bounded typography defect
Step 03 theme architecture: remains CLOSED / accepted
Step 04 work: continues independently
Checkout final closure: blocked until this visual defect is corrected and re-accepted
```
