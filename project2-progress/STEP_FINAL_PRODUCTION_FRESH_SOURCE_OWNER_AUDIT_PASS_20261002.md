# Final Production Fresh Source — Owner Audit PASS

Date: 2026-10-02
Project: Spatial Flow V2 / Project 2

## Fresh package baseline

User package:
`spatial-flow-astra-child-v1.2-main-journal(1).zip`

ZIP:
- bytes: 314,773
- SHA256: `73c73de87723a64a1845807f54a30a7afdb0e83668066384ffded3d0a20e3ece`

Extracted child theme:
`spatial-flow-astra-child-v1.2-main-journal`

Current source version:
- `SPATIAL_FLOW_CHILD_VERSION = 2.7.50`
- child-theme stylesheet header version = `1.8.2`

Source inventory:
- 35 files
- 9 directories
- `functions.php`: 637,183 bytes
- `assets/css/spatial-flow.css`: 654,127 bytes
- `assets/js/spatial-flow.js`: 93,021 bytes
- `assets/css/checkout-safe5.css`: 151,782 bytes
- `assets/js/checkout-safe5.js`: 61,494 bytes

## Current production owners

### Wishlist
Owner:
- YITH Wishlist remains dynamic-data owner.
- `functions.php` Step 5M wraps live YITH output through `the_content`.
- current shell function: `spatial_flow_wishlist_page_shell()`
- current page test: `spatial_flow_wishlist_is_page()`
- current Customizer owner: `sf_wishlist_*`
- current CSS owner: Step 5M Wishlist blocks in `assets/css/spatial-flow.css`.

Mapping implication:
SAFE to re-skin the shell / YITH DOM while retaining live YITH/Woo behavior.

### Search
Owner:
- dedicated page template: `page-templates/global-search.php`
- query/result logic and editable copy: `functions.php` Step 5C-B-C / D3 / D3A / E2
- CSS: `.sf-global-search-*` block in `assets/css/spatial-flow.css`.

Mapping implication:
visual mapping can use the existing real search architecture; do not replace query logic.

### 404
Owner:
- no child-theme `404.php` exists.
- current 404 presentation therefore falls through to parent/Astra behavior.
- unrelated journal false-404 prevention exists in `functions.php`.

Mapping implication:
accepted 404 design requires a new bounded child-theme `404.php`; do not modify search/query routing.

### Contact Us
Owner:
- `functions.php` Step 5B-3 Main Contact Us Native Capture.
- native `sf_contact_message` post type and form/submission flow.
- page body is replaced through `the_content`.
- editable copy remains Customizer-owned.

Mapping implication:
preserve native form POST/storage/validation owner; change presentation only.

### Services
Owner:
- `functions.php` Step 5G Services Native Rebuild.
- `template_redirect` intercepts `/services/` and renders `spatial_flow_render_services_page()`.
- Customizer controls already exist.
- historical `page-templates/services.php` is not the active front-end owner when redirect intercept runs.

Mapping implication:
map accepted design into the native renderer / CSS, not the obsolete standalone template.

### FAQ
Owner:
- `functions.php` Step 5K FAQ / Help Native Rebuild.
- `template_redirect` owns `/faq/`.
- editable FAQ content remains Customizer-owned.

Mapping implication:
map visual system into current native renderer; preserve FAQ content owners.

### Track Order
Owner:
- `functions.php` Step 5E-B Track Order Native Rebuild.
- `template_redirect` owns `/track-order/`.
- real lookup remains WooCommerce `[woocommerce_order_tracking]`.
- Step 5E-C adds delivery-details card through Woo hook.

Mapping implication:
preserve Woo order verification and native shortcode behavior.

### Care Guide
Owner:
- dedicated template: `page-templates/care-guide.php`.
- editable content model: `functions.php` Step 5A-4D `sf_basic_page_care_section`.
- current real fields cover Hero / Care Index / four principles / cleaning / object categories / natural materials / placement / CTA.

Mapping implication:
accepted Care Guide 07 can be mapped without abandoning backend editability.
Final production imagery still requires real/verified assets; do not ship prototype Unsplash imagery as product truth.

### Refund / Returns
Owner:
- `functions.php` Step 5I Refund / Returns Native Page.
- page-specific renderer / Customizer already exists for `/refund-returns-policy/`.

Mapping implication:
visual system can be replaced while retaining existing live content ownership.

### Privacy / Shipping / Terms
Owner finding:
- no equivalent dedicated native renderer was found in the child theme.
- these pages currently depend on normal WordPress page content / parent page rendering.

Mapping implication:
create one reusable policy-family presentation layer that wraps real page content.
Do NOT duplicate or rewrite policy copy into PHP.

## Protected commerce owners

Fresh source confirms active dedicated owners for:
- Shop / Woo archive
- Single Product
- Cart
- Checkout SAFE5
- Thank You / Result
- Crypto integration hooks

These are outside the first task/info reskin batch and must not be rewritten for cosmetic uniformity.

## Source-maintenance finding

The fresh package is functional but heavily accumulated:
- `functions.php` ~637 KB
- `spatial-flow.css` ~654 KB
- multiple historical Wishlist SAFE blocks coexist.

For final mapping:
- perform bounded canonical replacement of each page-owned block;
- do not append another indefinite stack of override patches;
- bump `SPATIAL_FLOW_CHILD_VERSION` only when a deployable batch is produced.

## Gate result

FRESH SOURCE / OWNER AUDIT = PASS.

No production code has been edited yet.

NEXT = Wishlist production mapping from accepted Harmonized authority to the live YITH/Woo owner.
