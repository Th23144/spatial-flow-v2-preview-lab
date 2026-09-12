# Project 2 · Main-site Header IA design + WordPress menu-admin hygiene scope · 2026-09-12

## Trigger
The user approved proceeding with the Header production-quality redesign and added an important scope clarification: the WordPress admin menu-editing screen itself is also visually/operationally cluttered, especially the left-side `Add menu items > Pages` list and the large number of registered menu locations/options.

## Current stage
Main-site Header remains `Not done` and is in design/audit mode. No live source edit is authorized by this record.

## Confirmed production-quality direction
The Header should no longer be treated as a literal strict 1:1 copy task. Static references remain useful for visual language, but current production quality, IA maturity, interaction quality and maintainability take precedence where a better solution is explicitly chosen.

Current intended Header architecture:
- desktop: restrained primary nav (`Shop / Journal / Services / About Us`) + centered brand + utility (`Search / Saved / Bag`);
- Shop mega navigation: preserve real WooCommerce/taxonomy ownership but redesign away from a large floating white modal into an integrated editorial navigation layer;
- tablet: introduce an intermediate navigation mode before 767px rather than squeezing the full desktop header down to phone breakpoint;
- mobile: replace the flat equal-weight list of ten large white cards with grouped information architecture (Primary / Shopping / Support) and remove Checkout as a permanent navigation destination;
- Header shell width should be viewport-aware and no longer inherit ordinary content-container width behavior;
- hardcoded masthead/topline/tagline copy should be reconsidered for backend ownership rather than remaining permanently embedded in `header.php`.

## Separate admin-hygiene step created
The user's complaint about `Appearance > Menus` admin clutter is NOT the same task as the front-end Header redesign and must be tracked separately.

Observed admin clutter includes:
- many registered menu locations for Header, Footer and Blog Footer;
- `Add menu items > Pages` exposing a large legacy/current page inventory, including multiple similarly named pages and older Elementor-era content;
- the resulting editor is difficult to reason about even when only two Header menu locations are directly relevant.

Important distinction:
- multiple menu locations are not automatically redundant: many are real ownership slots for Main Header, Mobile Header, Footer columns and Blog Footer columns;
- the left-side Pages list reflects the site's actual WordPress page inventory, not duplicate navigation slots;
- therefore nothing is to be deleted merely because the Menus screen looks crowded.

Create a later bounded step:
`WordPress Page Inventory + Menu Admin Hygiene Audit`

That step must classify before deleting/hiding anything:
1. active production pages;
2. WooCommerce system pages / flow endpoints;
3. current project pages;
4. legacy Elementor pages or superseded copies;
5. duplicate/abandoned/test pages;
6. menu-location registrations that are still actively referenced by `header.php`, `footer.php` or blog branches;
7. admin-screen presentation cleanup that can be done safely without deleting content.

No page, menu, menu location, WooCommerce system page or legacy record is authorized for deletion yet.

## Current stop point
Continue the Header design phase first. Produce the concrete Desktop / Tablet / Mobile structural wireframe and Shop mega-menu information architecture for user review. The WordPress Page Inventory + Menu Admin Hygiene Audit is a separate follow-up step and must not be silently mixed into Header implementation.
