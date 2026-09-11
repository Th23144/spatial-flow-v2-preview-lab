# Project 2 · Step 4D REOPEN · Section 04 Reviews / No-account policy · 2026-09-11

## User decision
The user confirmed that using real WooCommerce Reviews is acceptable for the Single Product reviews area.

The storefront currently has no customer account/login feature, and there is no current plan to add account functionality to the product store.

## Product rule
Section 04 must therefore use WooCommerce's real review system without introducing a customer-account dependency.

Do not create, require, or visually imply a My Account / login / registration flow merely to support product reviews.

## Implementation constraints
- WooCommerce remains the source of truth for product review data.
- Review count, rating aggregate, review rows, reviewer metadata, dates, and moderation state must remain dynamic; do not hardcode fake review data into the live theme.
- Guest review submission is allowed as the intended account-free path, subject to the store's WordPress/WooCommerce discussion and review settings.
- The WordPress setting that requires users to be registered/logged in before commenting must not be treated as a design requirement for this project.
- Name/email collection, moderation, anti-spam, rating requirements, and verified-owner policy are operational settings and must remain compatible with an account-free storefront.
- If a verified-purchaser-only flow is later desired, it must still avoid requiring a customer account; WooCommerce's order/review mechanisms should be used rather than adding account infrastructure.
- Do not fabricate Section 04 review content for the live implementation merely to match the static reference.

## Scope boundary
This decision does not authorize development of customer accounts, login, registration, account dashboards, wishlists tied to accounts, or other identity features.

It also does not by itself mark Section 04 or Single Product as complete.

## Current status
Decision recorded. Single Product overall remains `Not done`.

## Next action
Continue the bounded Single Product remediation audit and, when Section 04 is reached/confirmed as the next unresolved item, design and implement it against real WooCommerce review data under this no-account constraint.