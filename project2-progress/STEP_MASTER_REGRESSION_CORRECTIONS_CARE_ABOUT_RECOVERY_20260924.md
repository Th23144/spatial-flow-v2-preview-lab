# Project 2 — Master Regression Corrections + Care/About Recovery

Date: 2026-09-24
Repository: `Th23144/spatial-flow-v2-preview-lab`

## User visual findings — accepted as valid

1. Search:
   - browser-native search cancel X appeared on hover/focus;
   - this must not coexist with the designed Clear control.

2. Contact:
   - `KEEP THE REAL OWNER.` was visually acceptable as a label;
   - but it sat inline with the following sentence and read like a sentence abruptly changing type;
   - label should be its own line.

3. Policy:
   - `READING TEST.` had the same inline-label problem;
   - label should be its own line above the editorial paragraph.

4. FAQ:
   - question titles had the correct font family/weight character after Pass 04;
   - their scale was too large relative to same-level text elsewhere;
   - reduce size only; preserve font family/weight/tracking character.

## Corrections applied

Search:
- native WebKit search cancel button hidden;
- custom Clear remains.

Contact:
- `.context-note strong` now block-level with 7px separation below.

Policy:
- `.policy-lede strong` now block-level with 8px separation below.

FAQ:
- desktop question title: 21px -> 18px;
- mobile question title: 20px -> 17px;
- Cormorant Garamond / weight 500 / -0.005em relationship retained.

All four files pass:
- HTML/body balance;
- CSS brace balance;
- JavaScript syntax;
- duplicate-ID check;
- internal-anchor check.

## Repository old-reference correction

Earlier statements that Services / FAQ / Track Order had no old repository reference were incorrect.

The V1 static references already existed and are listed in the historical Project 2 source inventory:
- `preview/spatial-flow-wishlist-v1.html`
- `preview/spatial-flow-search-v1.html`
- `preview/spatial-flow-404-v1.html`
- `preview/spatial-flow-contact-v1.html`
- `preview/spatial-flow-utility-policy-v1.html`
- `preview/spatial-flow-services-v1.html`
- `preview/spatial-flow-faq-v1.html`
- `preview/spatial-flow-track-order-v1.html`
- `preview/spatial-flow-about-v1.html`

These are old V1 static visual references, not newly created pages and not automatically the currently accepted design authority.

## Wishlist canonical cleanup

The user-approved sage-accent Wishlist state was promoted to:
`main/preview/spatial-flow-wishlist-harmonized-v1.html`

Cleanup performed:
- promoted accepted sage headline emphasis into main authority;
- removed 36 unused legacy Header/Footer-related CSS rules from the standalone accepted HTML;
- active `.sf-header` / `.sf-footer` shell remains intact;
- HTML/CSS/JS checks pass;
- no old `.site-head` / `.site-foot` shell rules remain in canonical accepted artifact.

Current canonical Wishlist commit:
`f86fbb84ebc532ab0ef004d8776ebe3baf1f5df2`

## Search 1024px finding — clarified

This is not a confirmed desktop visual bug.

It is a breakpoint-consistency risk:
- current shared pages switch Header behavior at 1040px;
- Search still contains a legacy navigation-collapse threshold at 960px;
- therefore 961–1040px can combine a compacted shell with desktop navigation.

No production mapping is involved.
Do not blindly change it until a 1024px visual check confirms whether the mixed state is actually undesirable.

## Policy clarification

The approved Policy / Utility result is a STRUCTURAL TEMPLATE / VISUAL SYSTEM.

It is not authoritative policy content.

Production use must:
- preserve current Privacy Policy copy;
- preserve current Terms & Conditions copy;
- preserve current Shipping Policy copy;
- preserve current Refund And Returns Policy copy;
- preserve URLs, WooCommerce assignments, dates, SEO and legal meaning;
- only map the accepted visual hierarchy around those live contents.

## WordPress Pages inventory — now confirmed fresh

User supplied a fresh WordPress Pages screenshot on 2026-09-24.

Confirmed:
- 17 total pages;
- 17 published.

Visible pages:
1. Care Guide
2. Cart
3. Checkout
4. Crypto Payment
5. FAQ
6. Privacy Policy
7. Refund And Returns Policy
8. Search
9. Services
10. Shipping Policy
11. Terms & Conditions
12. Track Order
13. Wishlist
14. Home
15. Shop
16. About Us
17. Contact Us

Therefore the earlier 17-page inference is now directly confirmed by current admin evidence.

Crypto Payment:
- user explicitly states current page is satisfactory;
- DO NOT reopen.

## Care Guide — recovered real content model

Current theme Customizer already defines editable Care Guide content owners.

Real content families include:
- Hero;
- Care Index / note;
- 4 Care Principles;
- Gentle Cleaning;
- Jewelry / Crystal Objects / Home Pieces / Unsure;
- Natural Materials;
- Placement Notes: Bedroom / Desk / Entryway;
- Need Help CTA.

Conclusion:
Care Guide should NOT simply reuse the legal Policy template.
It is a practical editorial/instructional guide with its own information architecture.

New temporary candidate:
- branch: `temp-care-guide-wishlist-led-01`
- file: `temp-preview/Spatial-Flow-Care-Guide-Wishlist-Led-01.html`

The candidate uses the real existing Care Guide default content model and the current Wishlist-led visual system.

## About Us — scope correction

The user correctly rejected leaving About Us outside harmonization merely because it has more brand-expression weight.

Current decision:
About Us must also be harmonized.

External About structure retained from project history:
- strong Hero;
- ticker / moving editorial line;
- sticky section index;
- long-form position / principles / studio sections;
- CTA;
- scroll reveal / active index behavior.

New temporary candidate:
- branch: `temp-about-wishlist-led-01`
- file: `temp-preview/Spatial-Flow-About-Harmonized-01.html`

This candidate uses:
- current 1720 Header/Footer;
- 1480 body system;
- current font roles;
- sage headline emphasis;
- external About's preserved structural ideas;
- existing Spatial Flow About content lineage.

Exact external ZIP file bytes are not currently stored in the repository; if the original `Spatial-Flow-About.html` is supplied again later, perform a source-level diff against this harmonized candidate rather than restarting the design.

## Current gate

NO PRODUCTION MAPPING.

Current visual-review queue:
1. recheck Search native-X removal;
2. recheck Contact label break;
3. recheck Policy label break;
4. recheck FAQ reduced question scale;
5. review Care Guide candidate vs external-AI alternative;
6. review About Harmonized 01;
7. later perform Search 1024px tablet-state visual check;
8. only after the visual batch closes, discuss production mapping.
