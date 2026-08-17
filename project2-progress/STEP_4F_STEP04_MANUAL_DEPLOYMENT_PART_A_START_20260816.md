# Step 4F · Step04 Manual Deployment · Part A Start · 2026-08-16

## User confirmation

The user explicitly confirmed that none of the previously withdrawn whole-file candidates were applied.

Therefore the verified live Step04 baseline remains unchanged at the accepted 2.7.13 source state.

## Locked deployment method

Proceed only by the repository-mandated manual anchored replacement workflow.

Do not instruct whole-file replacement for:

- `functions.php`
- `woocommerce/checkout/thankyou.php`
- `assets/css/spatial-flow.css`

Generated 2.7.15 complete candidates remain internal diff/audit artifacts only.

## Current action

Start Step04 manual deployment Part A by deriving the first bounded replacement from the verified live baseline and the internally audited strict-1:1 candidate.

Before user-facing code is issued, verify:

- exact current baseline fingerprint
- exact old anchor/block
- expected unique match count
- exact replacement block
- expected byte and logical-line delta
- syntax/parser impact
- exact rollback/reverse replacement

## Current binary status

```text
Step04 production audit: COMPLETE
Strict 1:1 visual contract: LOCKED
Whole-file overwrite instruction: WITHDRAWN
User confirmed withdrawn files were NOT applied
Manual deployment: STARTED
Checkout: Not done
```
