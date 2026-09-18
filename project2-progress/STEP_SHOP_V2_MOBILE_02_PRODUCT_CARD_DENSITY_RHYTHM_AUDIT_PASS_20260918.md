# Shop V2 — Mobile 02 Product Card density / rhythm audit PASS

Date: 2026-09-18

## Scope

Review the current ordinary-mobile Shop product cards after Mobile 01 Filter / Sort closure.

Evidence:
- fresh full mobile Shop runtime screenshot supplied by the user;
- current uploaded spatial-flow.css (2026-09-18 14:27:30);
- current Shop controlled-rebase rules;
- existing Project-2 approved divergence: ordinary mobile Shop product grid stays two columns and only falls to one column below ~360px;
- static Shop reference card hierarchy.

## Findings

### 1. Grid density

PASS.

Current production:
- ordinary mobile: 2 columns;
- <=480px gap: 30px row / 16px column;
- <=360px: 1 column.

This matches the previously approved production divergence and should not be reverted to the static reference's <=480px one-column rule.

### 2. Image geometry

PASS.

The final Shop controlled block owns a true 4:5 image frame. Earlier historical fixed-height mobile image rules are superseded by the later Shop-scoped 4:5 owner.

Runtime screenshot shows:
- consistent image proportions;
- no image-height mismatch between real photos and placeholders;
- no visible crop regression;
- no card-frame/shadow regression.

### 3. Product-title density

PASS.

Desktop title owner remains 22px Cormorant; <=480px Shop-specific override reduces it to 16px for the approved two-column phone layout.

The runtime screenshot shows long titles wrapping naturally without colliding with the adjacent column.

Do not reintroduce the much older 12px three-line clamp from Phase 2.5; the later Shop controlled-rebase owner intentionally supersedes it.

### 4. Editorial meta / price / placement rhythm

PASS.

Current card hierarchy remains:
- title;
- optional editorial meta;
- real Woo price;
- optional placement note with top rule.

The first product is intentionally richer because its backend editorial fields are populated; other products are not required to fabricate equivalent content.

Row-height differences caused by optional product-owned metadata are acceptable in this open editorial grid and should not be normalized with fake minimum content or forced bottom anchoring.

### 5. Wishlist production extra

PASS / protected.

The wishlist heart is a production feature absent from the static mockup but already accepted as a real-site extra. In the fresh screenshot its size/offset does not obstruct product imagery or text.

### 6. Quick action

PASS.

Desktop hover quick action remains available; mobile does not depend on hover quick-action for navigation. Product-card link behavior remains the real navigation owner.

## Decision

No Product Card CSS change is justified in Mobile 02.

Changing card height, forcing equal internal text blocks, shrinking typography further, or collapsing optional editorial fields would reduce readability or constrain real product data without fixing a demonstrated defect.

## Next step

Mobile 03 — Pagination spacing / density / endpoint controls.

Status:
MOBILE 02 PRODUCT CARDS PASS / CLOSED / NO CODE CHANGE.
MOBILE 03 STARTED.