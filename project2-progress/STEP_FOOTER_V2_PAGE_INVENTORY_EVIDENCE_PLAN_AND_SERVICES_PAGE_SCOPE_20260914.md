# Project 2 · Footer V2 page-inventory evidence plan + Services page scope · 2026-09-14

## Trigger
During Footer V2 IA audit, the user supplied a fresh screenshot of the current `/services/` page and asked whether the service landing page itself now needs to be redesigned, plus exact WordPress-admin screenshot steps needed to complete the Footer inventory audit.

## Current Services-page judgment
The current `/services/` page is a real service landing page and is usable as the Footer's `Services` / `Services overview` destination for the current Footer IA.

Its current content is materially centered on personal crystal guidance / recommendations, including:
- Crystal Selection
- Lifestyle Matching
- Space Review
- custom/personal recommendation framing
- recommendation criteria
- a guidance process
- newsletter / contact-oriented closing area

This means the page is not an all-purpose mature services hub if Spatial Flow later expands materially beyond this service family. However, Footer V2 should NOT reopen or redesign the Services page now. The Services page remains its own later `Not done` page under the binary page-status matrix and should receive a dedicated fresh page audit/rework when its turn arrives.

For Footer V2, the correct action is:
- preserve `/services/` as the real Services landing destination;
- include an explicit Services overview entry in Footer IA;
- do not fabricate additional service pages or split the current page during Footer work.

## Required WordPress-admin evidence before final Footer IA lock
The Footer audit now requires a database-level page inventory because repository files cannot prove every WordPress Page that currently exists.

### A. Main-site Pages inventory
1. Enter the main Spatial Flow site dashboard in the multisite network (not the Blog subsite).
2. Open `Pages → All Pages`.
3. Select the `All` status tab.
4. Open `Screen Options` in the upper-right.
5. Increase `Number of items per page` as high as practical (prefer 100 or more) and apply.
6. Capture the full list from top to bottom. If pagination remains, capture every page.
7. Keep the page count / status tabs visible in the first screenshot.
8. Do not open or edit individual pages yet.

### B. Footer menu-location mapping
1. Open `Appearance → Menus → Manage Locations` and capture the full page.
2. Then open each Main-site Footer menu owner and capture its full item list:
   - Footer V2 Shop column (`sf_footer_shop`)
   - Footer V2 Journal column (`sf_footer_journal`)
   - Footer V2 About & Services column (`sf_footer_about`)
   - Footer V2 Customer Care column (`sf_footer_customer`)
   - Footer V2 Legal links (`sf_footer_legal`)
3. Item boxes may remain collapsed unless a label is ambiguous or uses a Custom Link whose destination is unclear; in that case expand only that item so the URL is visible.

### C. WooCommerce system-page mapping
1. Open `WooCommerce → Settings → Advanced`.
2. Capture the Page setup section showing the currently assigned Cart, Checkout, My account and Terms page mappings (or the equivalent current WooCommerce UI).
3. No settings changes are authorized.

## Why these screenshots are required
They provide three separate truths:
- `Pages → All Pages` = what real WordPress Pages currently exist;
- Footer menu screens = what Footer currently exposes and which menu owner controls each group;
- WooCommerce Advanced mapping = which utility pages are operational system owners rather than ordinary editorial navigation destinations.

These will be cross-checked against Header / Mega / Mobile navigation and the repository page-status matrix before the final Footer IA is designed.

## Current Footer status
`Not done`.
No Footer source changes are authorized yet.

## Exact next action
Receive the admin screenshots above, build a complete page-to-navigation crosswalk, decide the final Footer IA, then create a standalone non-repository Footer V2 HTML prototype for visual approval before production implementation.
