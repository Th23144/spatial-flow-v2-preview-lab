# Project 2 · Header V2 · Part H1 · Main Header Customizer copy ownership · manual delta · 2026-09-13

## Current project stage
Main-site Header production-quality / IA / interaction refinement.

## Governing correction
This Part follows `STEP_HEADER_V2_IMPLEMENTATION_SPEC_CORRECTION_SF_MOBILE_OWNERSHIP_20260913.md`.
The withdrawn whole-file 2.7.47 ZIP remains DO NOT APPLY. Live source is still the verified 2.7.46 baseline.

## Purpose of Part H1
Add backend-editable ownership for the three Main Header strings that are currently hardcoded in `header.php`:
- issue line: `Volume I · Issue 03 · Spring 2026`;
- editorial line: `A Journal of Rooms, Rituals & Quiet Objects`;
- logo subtitle: `Est. 2026 · Est. in quiet rooms`.

This Part only registers the three Customizer settings/controls in the existing `Spatial Flow 页眉页尾设置` section. It does **not** yet change front-end Header markup, so current live appearance/behavior should remain unchanged after this Part.

## Exact target file
`functions.php`

## Verified current baseline
```text
bytes: 622,810
lines: 11,895 (wc -l)
SHA256: 42c46cb5dd6090cef4bed911dfc628eb8aeebe976e8d9dbeb153a1bc5b9f4ec7
child version: 2.7.46
PHP syntax: PASS
```

## Exact bounded replacement
Expected old-block match count: **1**.

Old block:
```php
    $header_footer_fields = [
        'sf_header_topbar_text' => [ 'Top bar text', spatial_flow_default_topbar_text(), 'textarea' ],
        'sf_blog_header_shop_label' => [ 'Blog header shop button text', __( 'Main Shop', 'spatial-flow' ), 'text' ],
        'sf_footer_brand_title' => [ 'Footer brand title', $hf_defaults['brand_title'], 'text' ],
        'sf_footer_brand_text' => [ 'Footer brand text', $hf_defaults['brand_text'], 'textarea' ],
        'sf_footer_shop_heading' => [ 'Footer shop heading', $hf_defaults['shop_heading'], 'text' ],
        'sf_footer_journal_heading' => [ 'Footer journal heading', $hf_defaults['journal_heading'], 'text' ],
        'sf_footer_support_heading' => [ 'Footer support heading', $hf_defaults['support_heading'], 'text' ],
    ];
```

Replacement:
```php
    $header_footer_fields = [
        'sf_header_topbar_text' => [ 'Top bar text', spatial_flow_default_topbar_text(), 'textarea' ],
        'sf_header_issue_line' => [ 'Main header issue line', __( 'Volume I · Issue 03 · Spring 2026', 'spatial-flow' ), 'text' ],
        'sf_header_editorial_line' => [ 'Main header editorial line', __( 'A Journal of Rooms, Rituals & Quiet Objects', 'spatial-flow' ), 'text' ],
        'sf_header_logo_subtitle' => [ 'Main header logo subtitle', __( 'Est. 2026 · Est. in quiet rooms', 'spatial-flow' ), 'text' ],
        'sf_blog_header_shop_label' => [ 'Blog header shop button text', __( 'Main Shop', 'spatial-flow' ), 'text' ],
        'sf_footer_brand_title' => [ 'Footer brand title', $hf_defaults['brand_title'], 'text' ],
        'sf_footer_brand_text' => [ 'Footer brand text', $hf_defaults['brand_text'], 'textarea' ],
        'sf_footer_shop_heading' => [ 'Footer shop heading', $hf_defaults['shop_heading'], 'text' ],
        'sf_footer_journal_heading' => [ 'Footer journal heading', $hf_defaults['journal_heading'], 'text' ],
        'sf_footer_support_heading' => [ 'Footer support heading', $hf_defaults['support_heading'], 'text' ],
    ];
```

## Candidate identity calculated from exact current baseline
```text
bytes: 623,228
lines: 11,898 (wc -l)
SHA256: b317642c4e0b6219295398186c3397fe8c4e93567c4355a2ef370d06670259b4
byte delta: +418
line delta: +3
PHP syntax: PASS
```

The growth is fully explained by exactly three new Customizer field-array entries. No other source region changes in the calculated candidate.

## Stop conditions
Do NOT save if:
- the old block does not match exactly once;
- there is more than one match;
- the source around the block differs from the verified 2.7.46 baseline;
- another edit has been made to `functions.php` since the baseline upload.

## Required post-edit gate
After the user saves, return the fresh current `functions.php` only.
The next step must verify:
- exact bytes / lines / SHA256;
- expected `b317642c...59b4` identity;
- PHP syntax;
- only the authorised Customizer block changed.

No browser/runtime testing is needed for H1 because front-end markup is intentionally unchanged.

## What is intentionally NOT changed
- version constant remains 2.7.46 in H1;
- `sf_primary` ownership unchanged;
- `sf_mobile` ownership unchanged;
- Shop mega output unchanged;
- Header markup unchanged;
- CSS / JS unchanged;
- Footer unchanged;
- Checkout / Cart / Single Product unchanged.

## Current stop point
WAITING FOR USER MANUAL H1 EDIT + RETURNED `functions.php`.

## Exact next action
User performs this one bounded replacement only, saves, and returns the current `functions.php` for source verification before any H2 work.