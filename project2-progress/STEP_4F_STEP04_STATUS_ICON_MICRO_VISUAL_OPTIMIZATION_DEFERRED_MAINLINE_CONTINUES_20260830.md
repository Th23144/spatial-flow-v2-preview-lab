# Project 2 · Step04 Status Icon Micro Visual Optimization Deferred; Mainline Continues · 2026-08-30

## User decision

The user chose the second option: do not branch into the small Step04 status-icon visual optimization now. Continue the mainline and retain the icon issue as a deferred micro-visual task.

## Deferred micro-visual item

Step04 left status-mark system:
- keep current checkmark family unless later review finds a regression;
- keep current refunded/return-arrow family unless later review finds a regression;
- revisit ellipsis/waiting mark and X/failure/cancel mark because the user considers them visually weak even in the static Step04 reference;
- Step03 payment-status mark is the preferred visual-language reference for the later redesign;
- this is not a current strict 1:1 blocker because the Step04 static reference itself contains the weak marks;
- later work should remain symbol-level only unless evidence requires broader change: preserve card geometry, state logic, responsive structure and backend/server truth.

## Mainline immediate next action

Do not modify source.

Complete the already-open Step04 full-state regression by running the two representative desktop sticky runtime checks in one batch:
1. Failed — represents the tall BACS/recovery summary family.
2. Refunded — represents the tall refund-ledger summary family.

If both pass, formally close Step04 and move to the deferred Step03 sidebar sticky issue.
