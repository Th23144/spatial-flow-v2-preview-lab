# Final Production Contact — H01 Owner Audit and Mapping Decision

Date: 2026-10-05
Project: Spatial Flow V2 / Project 2

## Accepted authority

Branch:
`temp-contact-wishlist-led-01`

File:
`temp-preview/Spatial-Flow-Contact-Wishlist-Led-02.html`

This is the user-accepted Contact authority from:
`STEP_CONTACT_WISHLIST_LED_02_USER_ACCEPTANCE_20260924.md`.

Accepted body system:
- 1480 editorial/task-information lane;
- Cormorant Garamond display roles;
- Inter functional/body roles;
- JetBrains Mono restrained metadata;
- sage italic emphasis;
- open ruled form rather than card UI;
- two-column desktop form/support composition;
- 1040 single-column recomposition;
- 600 mobile field/route stacking.

## Fresh production owner audit

The current main-site Contact page is NOT owned by Contact Form 7 or SureForms.

Current owner is the child theme `functions.php` Step 5B-3 native capture system:
- `spatial_flow_main_contact_post_type()` registers private `sf_contact_message` entries;
- `spatial_flow_main_contact_handle_submit()` owns nonce validation, sanitization and storage;
- AJAX actions are `wp_ajax_spatial_flow_main_contact_submit` and `wp_ajax_nopriv_spatial_flow_main_contact_submit`;
- `spatial_flow_main_contact_render_page()` owns the visible Contact DOM;
- `spatial_flow_main_contact_replace_page_content()` replaces the Contact page content for slugs `contact-us`, `contact`, `contact-us-2`;
- `spatial_flow_main_contact_customizer()` owns editable Contact copy;
- backend messages remain in the dedicated `Contact Messages` UI;
- Product Guidance and Journal Dispatch remain separate.

Contact Form 7 is installed/active on the main site but is historical/non-owning for the current Contact page.

## Mapping decision

Do not create a new page template and do not route the page through CF7.

Preserve the current native Contact owner and map the accepted H01 presentation onto it.

One coherent two-file batch:
1. `functions.php`
   - preserve CPT, AJAX action names, nonce, honeypot, saved-message behavior and page-content replacement;
   - remap only the visible render DOM + editable H01 copy;
   - add optional Order Number field required by the accepted Contact authority;
   - store it as `_sf_contact_order_number` and expose it in the existing admin message detail view;
   - add a Contact body class for bounded Astra frame normalization;
   - bump child asset version 2.7.59 -> 2.7.60.
2. `assets/css/spatial-flow.css`
   - replace the canonical old Step 5B-3 Contact block in place;
   - do not append another Contact patch stack;
   - preserve native modal ownership/classes;
   - map accepted desktop / 1040 / 600 behavior;
   - use text-presentation arrows to avoid Windows emoji fallback.

No shared JavaScript edit is required because the existing functional selectors and data attributes remain unchanged:
- `data-sf-main-contact-page`
- `data-sf-main-contact-form`
- `data-sf-main-contact-form-status`
- existing AJAX action + hidden nonce/source/type fields.

## Production adaptation

Prototype-only implementation copy must not be exposed to customers.

The accepted visual role of the right-side context note is preserved, but its production copy becomes user-facing privacy/context guidance.

## Baselines

functions.php:
- 651,069 bytes
- 12,475 logical lines
- SHA256 `c2fffb501948d5a054464d784f6b2515ac21cfde707c0478ac3c7fb30ea0cdfc`
- version 2.7.59
- PHP syntax PASS

CSS:
- 621,146 bytes
- 22,260 logical lines
- SHA256 `c15755a3d2b28aa249d69ded21f3534d229911ca74e6cc3d0ef2a6d3d0dd3a5c`
- braces 3506 / 3506
- CSS parse errors 0

## Verified internal H01 target

functions.php:
- 658,028 bytes
- 12,558 logical lines
- SHA256 `d1c2da1a42c861dd0b93329801535555ca31d63feaaf00c7702b228cb70dd1cc`
- version 2.7.60
- PHP syntax PASS

CSS:
- 627,348 bytes
- 22,524 logical lines
- SHA256 `7f961606a49bc3d38134556ad481f74452d8845a0cea7ccda5909c30c8ea1a0b`
- braces 3543 / 3543
- CSS parse errors 0

Status: OWNER AUDIT PASS / MAPPING ARCHITECTURE LOCKED / MANUAL TWO-FILE BATCH READY.
