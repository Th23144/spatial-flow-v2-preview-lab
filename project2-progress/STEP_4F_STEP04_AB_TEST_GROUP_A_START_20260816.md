# Project 2 · Step 04 A/B deployment-method experiment · Group A start

Date: 2026-08-16
Local start time: 19:45 -0700
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Purpose

Measure the traditional manual anchored-replacement workflow against the later verified automated Patch workflow under controlled conditions.

## Group A method

Traditional manual anchored replacement.

```text
same verified 2.7.13 baseline copies
→ exact old-code search
→ expected unique match count
→ manual replacement
→ save
→ return-source verification
→ next part
```

## Controlled variables

- Group A and Group B start from the same verified 2.7.13 baseline copies.
- Neither group touches the live site during the experiment.
- Both groups must produce the exact same Step 04 2.7.15 target files.
- Final bytes / lines / SHA256 must be identical to the accepted internal candidate.
- Preparation time before the user starts a method is excluded from user-operation timing.
- Record user-operation elapsed time, number of manual edits, validation round trips, mistakes/rework, and subjective effort.

## Baseline

```text
functions.php
609,465 bytes
11,657 logical lines
SHA256 62b13f9acb69838bae1543a196e3bd4497faf02e1f30f04f197f7c0fb6575631

woocommerce/checkout/thankyou.php
23,174 bytes
341 lines
SHA256 6556ba6faf6fd6d687b69e5d38cd2910dd89805405d842dc27a2caab4fec7cfa

assets/css/spatial-flow.css
577,717 bytes
20,284 lines
SHA256 4d54dcfc1bee2f55bbdd93df1e31cc0e155d6b9cdff917f141086bc25a2bb4b3
```

## Target

```text
functions.php
612,015 bytes
11,691 logical lines
SHA256 e1b4842345d7ccfa5057f4dc568dbd1705cf13f86606b78c81c009c3a521891f

woocommerce/checkout/thankyou.php
43,716 bytes
579 lines
SHA256 4aee09c6f26420c388d15da9a4a12fe247b49a70bdb065725f5d705553ab90cc

assets/css/spatial-flow.css
587,216 bytes
20,639 lines
SHA256 cba94f9615248a86f8d8d23b806621ed04f7b664e8c3a47727036510a33efef9
```

## Start state

```text
Group A: STARTED
Live site: untouched
Next action: issue Group A Part A manual anchored replacement against a test copy.
```
