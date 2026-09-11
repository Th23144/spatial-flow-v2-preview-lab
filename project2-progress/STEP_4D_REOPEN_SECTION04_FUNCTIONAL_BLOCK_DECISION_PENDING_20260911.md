# Project 2 · Step 4D REOPEN · Section 04 Review Functional Block Decision Pending · 2026-09-11

## Current stage
Step 4D-REOPEN · Single Product remediation.

## User feedback
The user is specifically undecided about whether product reviews should have a dedicated functional block / interaction module, rather than only the editorial review-display section already present in the static reference.

The user wants to understand the product/interaction consequences before choosing the final review architecture.

## Current interpretation
There are two distinct concerns that should not be conflated:

1. Review presentation / reading layer
   - the existing static reference already provides an editorial Section 04 visual treatment for showing reviews.
   - production content must come from real WooCommerce Reviews only.

2. Review functionality / interaction layer
   - submission, expanded reading, post-purchase review flow, empty state, moderation-related entry points, and any guest-review UI are functional concerns not fully solved by the static display reference.

## Decision status
No final decision yet on whether a separate visible review functional block should exist on the product page.

No implementation is authorized by this record.

## Guardrails
- do not replace the existing Section 04 display concept merely because a functional module may be needed.
- do not introduce customer accounts/login/registration.
- do not fabricate review content.
- keep WooCommerce as the review source of truth.
- avoid adding a heavy generic review form/card that damages the product-page editorial visual language.

## Next action
Discuss the functional-block options concretely with the user and distinguish:
- no separate product-page functional block; review acquisition handled post-purchase,
- lightweight product-page action that opens/expands review functionality,
- fully visible inline review module.

Only after the user chooses the intended interaction model should a visual/reference search or implementation begin.
