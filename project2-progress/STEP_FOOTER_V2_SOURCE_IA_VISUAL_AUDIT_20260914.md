# Project 2 · Main-site Footer V2 source / IA / visual audit · 2026-09-14

## Stage
Main-site Header is closed. Main-site Footer is reopened for production-quality / IA / visual refinement.

## Evidence reviewed
- fresh user-supplied `footer.php`;
- fresh desktop and 390px mobile Footer screenshots;
- latest uploaded `spatial-flow.css` Footer rules;
- current Project 2 page inventory / status matrix;
- historical Footer product-quality / reference records.

## Source ownership findings
The Main Footer preserves real editable owners:
- WordPress menu locations: `sf_footer_shop`, `sf_footer_journal`, `sf_footer_about`, `sf_footer_customer`, `sf_footer_legal`;
- editable copy / URLs via `spatial_flow_footer_v2_text()` and `spatial_flow_footer_v2_mod()`;
- separate Main vs Journal Footer branches.

Do not hardcode production navigation merely for visual redesign.

## Width diagnosis
The user is correct that the current Footer repeats the old constrained-width problem.
Current CSS contains a later override that forces:
- `.sf-v2-footer-shell` to `min(1180px, calc(100% - 48px))`;
- `.sf-v2-footer-grid--main` to `max-width: 1060px` on desktop;
- four desktop columns to `repeat(4, minmax(150px, 220px))`.

At the current wide desktop viewport this creates a narrow centered content island inside a full-width dark Footer and visually underuses the viewport. It is materially inconsistent with the now-approved near-full-width Header geometry.

## Visual findings
### Desktop
Strengths:
- dark editorial direction remains viable;
- centered wordmark / subtitle belongs to the brand;
- four navigation groups are readable;
- trust strip and legal region create useful hierarchy.

Weaknesses:
- overall content width is too constrained;
- brand band is too vertically isolated from navigation, creating a large empty dark zone;
- navigation columns feel like an old centered grid rather than a confident full-width footer system;
- trust card reads as a large inserted panel/card and is somewhat visually heavier than the surrounding Footer;
- bottom row is serviceable but underdeveloped relative to the approved Header;
- social / region / copyright / legal are present but the hierarchy is generic.

### Mobile
Strengths:
- single-column reading is stable;
- text remains legible;
- trust information is complete.

Weaknesses:
- all four navigation groups are expanded simultaneously in the supplied screenshot; this creates a long directory-like block rather than a refined mobile Footer;
- plus markers imply accordion ownership but the shown state lacks useful progressive disclosure;
- trust card becomes a very long stacked bordered container, increasing visual weight and scroll length;
- region, legal and social areas are stacked but feel like separate widgets rather than one composed closing section.

## IA / page-coverage findings
Current configured Main Footer shown in the screenshot exposes:
- Shop: All Products, Crystal Bracelet, Crystal Necklace, Customized Consultation;
- Journal: Journal Home, Buying Guides, Space & Energy, Secrets of Crystals;
- Services: Help & FAQ, Track Order, Care Guide, Contact Us;
- Related: About Us, Shipping Policy, Returns & Refunds;
- bottom legal: Privacy Policy, Terms & Conditions.

Confirmed Project 2 page/surface inventory additionally includes:
- Wishlist;
- Account;
- Services page itself;
- Search;
- 404;
- utility / policy family;
- Cart / Checkout / Order Result system.

Not every existing page should be exposed in the Footer. Recommended IA logic:
- DO expose Services itself somewhere in Footer, not only child/support destinations;
- Wishlist is a reasonable secondary commerce/account link if desired, but not mandatory because Saved already has a Header owner;
- Account should be included only if the live account experience is intended as a customer destination; guest checkout means it should not be given excessive weight;
- Cart should remain Header/commerce-context utility, not Footer navigation;
- Checkout must not be a permanent Footer destination;
- Search should remain Header utility, not Footer navigation;
- 404 should never be surfaced intentionally;
- policy links belong in Footer and current Privacy / Terms / Shipping / Returns coverage is directionally correct;
- do not add Accessibility / Cookie / other policy destinations unless real live pages exist.

## Fallback-risk findings in `footer.php`
The PHP fallback arrays are broader than the currently configured WordPress menus and include repeated routes / conceptual links. They are safe only as fallbacks, but final audit must verify canonical live URLs before relying on them. Examples include multiple About concepts pointing to one About route and multiple service concepts pointing to one Services route.

## Design recommendation
Do not simply widen the existing Footer by changing 1180px to 1720px. The entire desktop Footer composition should be rebalanced as one production component.

Recommended direction:
1. preserve dark editorial identity;
2. move to near-full-width shell aligned to approved Header (`calc(100% - 80px)` with a high max-width, exact value to be prototyped);
3. reduce the isolated brand-band height and integrate brand / editorial statement more tightly with navigation;
4. rebuild desktop information architecture as a mature 4–5-zone system rather than a narrow four-column island;
5. make the trust area flatter / more structural and less like an inserted rounded card;
6. compose region + legal + social into a deliberate closing line;
7. on mobile use true accordion progressive disclosure and reduce trust-card vertical weight;
8. preserve all WordPress menu / Customizer ownership.

## Exact completeness gate still needed
Code/repository evidence cannot prove every live WordPress page currently stored in the database. Before final IA lock, obtain one current WordPress Pages list or equivalent current admin page inventory if the user wants a guaranteed no-page-omission audit.

## Status
```text
Main-site Footer: Not done
Audit: COMPLETE
Source changes: NONE
Next: standalone Footer visual prototype / IA candidate before production code
```
