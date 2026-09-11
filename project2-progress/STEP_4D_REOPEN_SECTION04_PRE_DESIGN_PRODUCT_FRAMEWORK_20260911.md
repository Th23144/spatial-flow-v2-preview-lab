# Project 2 · Step 4D REOPEN · Section 04 pre-design product framework · 2026-09-11

## Current project stage

```text
Step 4D-REOPEN · Single Product remediation
Section 03: accepted / closed
Section 04: pre-design product/framework decision
Single Product overall: Not done
```

## Why this record exists
The user explicitly requested that Section 04 not be designed or implemented yet. Before deciding whether the existing static-reference block is suitable or whether a different reference block should be found, the user wants to understand the finished product framework, what the system will do, and how customers/admin will operate it.

This is a product/UX planning gate, not implementation authorization.

## Existing static reference evidence
`preview/spatial-flow-product-v1.html` currently contains an editorial Reviews block with:
- `Section · 04`
- heading `Quiet notes from people wearing it.`
- aggregate line (`4.9` / review-count editorial copy)
- a `Read all` control
- three displayed review excerpts in a desktop three-column grid
- reviewer/byline/date presentation
- footer explanatory copy
- a `Write a letter about yours` control
- responsive collapse to a one-column reviews list

The static sample review names, quotes, dates, ratings, counts and editorial statements are reference-only mock content and must not be copied as production review data.

## Standing account constraint
The storefront has no customer account/login feature and there is no current plan to add one.

Section 04 must therefore remain compatible with guest checkout and must not introduce My Account / login / registration as a dependency.

## Product-system layers that must be decided before visual implementation

### 1. Product-page display layer
Potential final behavior:
- show only real approved WooCommerce review data;
- show truthful aggregate rating/count when ratings exist;
- show a bounded number of review excerpts on the product page;
- `Read all reviews` should reveal or navigate to the full approved review set without requiring an account;
- reviewer email must never be exposed publicly;
- verified-purchase labeling, if enabled, must come from WooCommerce truth rather than theme copy;
- no reviews means no fabricated content: either hide the review-content body/whole section or show a truthful empty state, depending on later user decision.

### 2. Review-submission layer
Two viable no-account architectures remain open for user selection:

#### Model A · Public guest review form
- `Write a review` is available from the product page;
- guest enters name/email, rating if enabled/required, and review text;
- submission uses WooCommerce/WordPress review/comment ownership;
- moderation/spam settings apply;
- verified-owner labeling can be shown only when WooCommerce can truthfully match the reviewer to a purchase;
- advantage: easiest and most direct;
- tradeoff: non-buyers can potentially submit unless verified-owner-only restrictions are enabled.

#### Model B · Post-purchase review invitation
- public product page primarily displays approved reviews;
- after an order is completed, WooCommerce sends a review-request email;
- the customer follows the order-specific review link and reviews purchased products;
- this path works with guest orders and does not require account creation;
- advantage: strongest fit with a no-account storefront and a real-buyer review policy;
- tradeoff: review entry is primarily post-purchase/email-driven rather than an always-open public form.

A hybrid model is possible but should not be adopted by default because it adds UX and moderation complexity without a confirmed need.

## Recommended starting architecture for discussion
Do not freeze this without user approval.

Recommended product framework:

```text
Product page
→ Section 04 displays approved real reviews only
→ show latest/selected 3 excerpts when enough reviews exist
→ Read all reviews expands the remaining reviews in-place or opens a dedicated review view
→ no account/login UI

Completed guest order
→ WooCommerce review-request email after the configured delay
→ customer opens order-specific review page
→ rates/reviews purchased product(s)
→ submission enters normal moderation flow
→ approved review becomes visible in Section 04
```

This architecture lets the storefront remain fully account-free while still collecting genuine post-purchase reviews.

## Backend/admin operation
WooCommerce remains the data owner.

Expected merchant workflow:
- product reviews enabled globally/per product;
- moderation occurs in the native WooCommerce/WordPress review management surface;
- admin can approve/unapprove/reply/edit/spam/trash according to native capability;
- Section 04 front-end presentation reads approved review data dynamically;
- theme does not maintain a duplicate custom review database.

## Visual-reference decision is intentionally deferred
The user has not yet decided whether the existing Section 04 editorial block is the right final visual shell.

Before looking for another block/reference, first decide:
1. public guest form vs post-purchase invitation as the primary review-entry path;
2. zero-review behavior: hide Section 04 vs truthful empty state;
3. `Read all` interaction: in-page expansion vs separate review view;
4. whether ratings/stars remain visually prominent or are visually restrained inside the editorial presentation;
5. whether `Write a review` remains a visible product-page CTA under the selected submission model.

## What is intentionally NOT changed
- no source/theme implementation;
- no Section 04 HTML/CSS/PHP changes;
- no WooCommerce settings changed;
- no account/login/registration work;
- no static reference accepted/rejected yet;
- no fake reviews created.

## User acceptance status
Pre-design framework explanation requested. Final Section 04 architecture and visual shell are NOT YET ACCEPTED.

## Current stop point

```text
Section 04 · Quiet Notes / Reviews
PRE-DESIGN PRODUCT FRAMEWORK: UNDER DISCUSSION
IMPLEMENTATION: NOT STARTED
VISUAL REFERENCE DECISION: PENDING
```

## Exact next action
Explain the end-to-end customer/admin experience to the user, compare the viable no-account review architectures, then obtain the user's product-flow decision before choosing/replacing the visual review block or editing live source.