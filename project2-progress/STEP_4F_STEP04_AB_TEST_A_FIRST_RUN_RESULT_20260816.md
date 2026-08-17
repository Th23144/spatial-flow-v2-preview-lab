# Step 4F · Step04 A/B Test — Method A First Run Result

Date: 2026-08-16
Method: A / historical manual anchored replacement
User-reported execution time: 5 minutes

## Uploaded result audit

### assets/css/spatial-flow.css
- bytes: 587,216
- lines: 20,639
- SHA256: `cba94f9615248a86f8d8d23b806621ed04f7b664e8c3a47727036510a33efef9`
- exact target identity: PASS
- brace count: 3283 / 3283
- comment count: 275 / 275

### woocommerce/checkout/thankyou.php
- bytes: 43,715
- lines: 579
- SHA256: `47f5b9e4e1bdd063eb7c0dddc8b6b8ce7e3e726ab394abcb660a5c91ca6f68ee`
- PHP syntax: PASS
- target expected bytes: 43,716
- target SHA256: `4aee09c6f26420c388d15da9a4a12fe247b49a70bdb065725f5d705553ab90cc`
- difference: exactly one missing final newline at EOF
- logic/code-content mismatch: none detected

### functions.php
- bytes: 612,013
- lines: 11,689
- SHA256: `568a904d67e2b2ed2c099b8c64e6b15a0f59c344d8f59253083bba742940f741`
- PHP syntax: PASS
- target expected bytes: 612,015
- target expected lines: 11,691
- target SHA256: `e1b4842345d7ccfa5057f4dc568dbd1705cf13f86606b78c81c009c3a521891f`
- difference: exactly two missing blank lines after the Step 5F END marker and before Step 5E-B START
- logic/code-content mismatch: none detected

## A-method first-run score

```text
User execution time: 5 minutes
Manual replacement Parts: 5
Initial upload round: 1
Exact-target files on first upload: 1 / 3
Logic/syntax errors: 0
Whitespace-only identity differences: 2
Rework required: YES — one correction round
```

The whitespace differences are still counted because the A/B experiment locked byte/SHA-identical output as the common final correctness criterion.

Status: A FIRST RUN VALIDATED / MINOR REWORK REQUIRED.
