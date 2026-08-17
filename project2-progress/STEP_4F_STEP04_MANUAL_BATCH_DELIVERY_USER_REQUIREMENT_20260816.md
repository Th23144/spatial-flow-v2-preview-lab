# Step 4F · Step04 Manual Batch Delivery Requirement · 2026-08-16

## User correction

The user explicitly requires that all manual replacement instructions for the same Step04 implementation batch be delivered together in one response, rather than waiting for confirmation after each source part.

## Execution interpretation

This changes delivery cadence, not deployment safety.

For the current Step04 batch:

- keep the locked manual anchored replacement method;
- provide all required file replacements in one consolidated instruction package;
- do not use downloadable whole-file replacement bundles;
- every file change still needs exact anchors, match-count stop conditions, baseline bytes/lines/SHA256, expected deltas, and rollback boundaries;
- the user may apply all listed replacements in sequence before returning the edited live files for one consolidated source validation;
- runtime testing should follow only after that consolidated source validation passes.

## Current batch

Files in scope:

1. `functions.php` — Step5F Customizer namespace/control block plus final cache version bump.
2. `woocommerce/checkout/thankyou.php` — strict 1:1 Step04 server-authoritative status/result template transformation.
3. `assets/css/spatial-flow.css` — in-place replacement of the single owned Step5F Order Received CSS block.

No whole-file overwrite is authorised.

## Status

Instruction cadence: consolidated batch
Deployment method: manual anchored replacement
Checkout: Not done
