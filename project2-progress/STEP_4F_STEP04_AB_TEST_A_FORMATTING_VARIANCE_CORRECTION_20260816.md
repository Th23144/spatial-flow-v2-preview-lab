# Step 4F · Step04 A/B Test — Formatting Variance Correction

Date: 2026-08-16

## Correction

The first A-group validation treated two whitespace-only differences as required rework:

- two blank lines missing between Step5F END and the next block in `functions.php`;
- one final EOF newline missing in `thankyou.php`.

These differences have no functional or semantic impact on PHP execution, WooCommerce behavior, Step04 logic, or strict 1:1 rendering.

## Fair A/B scoring rule

For the A/B workflow comparison, whitespace-only formatting variance is recorded separately and does **not** count as a functional error or required rework when all of the following are true:

- intended code replacements are complete;
- no authorised code is missing;
- no unauthorised code is added/changed;
- PHP/CSS structure and syntax pass;
- runtime/visual behavior would be unchanged.

Exact byte/SHA identity remains useful as an audit signal, but meaningless whitespace differences must not distort the speed comparison.

## A-group result correction

Official A-group manual result:

- user execution time: 5 minutes
- functional/logic replacement errors: 0
- functional rework: 0
- CSS target identity: exact PASS
- `functions.php`: intended code PASS; whitespace-only variance recorded
- `thankyou.php`: intended code PASS; EOF-newline-only variance recorded

Status: A-GROUP MANUAL EXECUTION PASS FOR WORKFLOW COMPARISON.
