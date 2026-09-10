# Project 2 · Step 4D REOPEN · Section 03 returned-source audit FAIL · 2026-09-10

## Current project stage
Single Product reopened remediation · Section 03 Care & Ritual implementation.

Governing contract:
- `project2-progress/STEP_4D_REOPEN_SECTION03_CARE_RITUAL_IMPLEMENTATION_SPEC_20260910.md`
- baseline implementation-spec commit: `a1b4e564bc6e69770a9df8a3796104041ee29ea6`

This conclusion follows the audit-start record:
- `project2-progress/STEP_4D_REOPEN_SECTION03_RETURNED_SOURCE_AUDIT_START_20260910.md`

## Returned source identity

### functions.php
Returned upload: `functions(20260910-131708).php`

- bytes: `623,027`
- physical LF count: `11,908`
- logical lines: `11,909`
- SHA256: `27365ac9345c58afdf222251c6e4481b847450b585579192f3d58e54a51291f4`
- child version: `2.7.39` — correct
- PHP syntax: **FAIL**
- parser error: `syntax error, unexpected token ","` at returned line `3096`

### woocommerce/single-product.php
Returned upload: `single-product(20260910-131707).php`

- bytes: `35,695`
- physical LF count: `700`
- logical lines: `701`
- SHA256: `055ebc8927d571c82b51fd4604a72b16c9a9e08b05907a8e4d9937d47f767da6`
- PHP syntax: **PASS**

### assets/css/spatial-flow.css
Returned upload: `spatial-flow(20260910-131708).css`

- bytes: `606,319`
- physical LF count / logical lines: `21,407`
- SHA256: `de94c0cb5268b7ebc45384a0ed557aa8de057b7d8063141c7081918135ddc5ef`
- opening braces: `3,359`
- closing braces: `3,359`
- opening comments: `280`
- closing comments: `280`
- `tinycss2` top-level parser errors: `0`
- CSS structural/parser audit: **PASS**

## What was verified

### functions.php implementation before the blocking parse defect
The returned file correctly contains:
- `SPATIAL_FLOW_CHILD_VERSION = 2.7.39`
- a separate Product Data → General `Section 03 · Care & Ritual` options group
- heading lead field `_sf_section03_heading_lead`
- heading emphasis field `_sf_section03_heading_emphasis`
- body fields `_sf_section03_everyday_body`, `_sf_section03_seasonal_body`, `_sf_section03_repair_body`
- the five new Section 03 keys in the existing `spatial_flow_save_product_story_admin_fields()` `$fields` owner

### single-product.php
Source structure matches the locked contract:
- reads the five Section 03 meta fields
- uses `Care, and a little` / `ritual` only as heading fallbacks
- does not hardcode product-specific care bodies
- creates the `Everyday`, `Seasonal`, `Repair` units
- renders Section 03 only when at least one body field is non-empty
- hides empty individual units
- renders after Section 02 and before Related Products / future Section 04
- does not intentionally replace WooCommerce product / variation / cart / wishlist / checkout ownership

### spatial-flow.css
The dedicated `Step 4D-B6 Section 03 Care & Ritual` block is structurally valid and contains:
- Section 03 editorial section marker / heading treatment
- three-column care grid on desktop
- one-column stack at <=900px, including mobile
- no later `.sf-product-v2-care*` selector occurrence was found after the dedicated block in the returned CSS, so no current late-override conflict was detected for this component

Visual 1:1 acceptance is **not** claimed by source inspection alone.

## Blocking defect
Immediately after the valid closing `];` of the save-owner `$fields` array, an orphan duplicate fragment remains in `functions.php`:

```php
            '_sf_placement',
            '_sf_material',
            '_sf_piece_edition',
            '_sf_piece_made',
            '_sf_piece_studio',
            '_sf_suitable_space',
            '_sf_care',
            '_sf_gift_service',
            '_sf_section02_heading_lead',
            '_sf_section02_heading_emphasis',
            '_sf_section02_heading_tail',
            '_sf_section02_lead',
            '_sf_section02_context',
            '_sf_section02_body',
            '_sf_section02_reading',
            '_sf_section02_pairing',
            '_sf_section02_read_link_text',
        ];
```

In the returned file this is lines `3096–3113`.

Because the fragment is outside any assignment/expression, PHP stops parsing at line 3096. Therefore this returned `functions.php` is not safe to install/activate and the source gate fails.

## Verified bounded correction candidate
A local audit-only candidate was created by deleting exactly the orphan fragment above and changing nothing else.

Result:
- bytes: `622,421`
- logical lines: `11,891`
- SHA256: `805b701cfdbeca27982bf20725922b4013281e512cd53494672230fb73fb9706`
- PHP syntax: **PASS**
- all pre-existing save-owner keys plus all five new Section 03 keys remain present in the valid `$fields` array

This candidate is evidence for the correction scope only. It has **not** been written into the live source repository and is **not** runtime/user accepted.

## Intentionally NOT changed
- no WooCommerce runtime logic was modified by this audit
- no Cart / Checkout / Thank You / payment subsystem was reopened
- no Sections 01 / 02 behavior was intentionally changed
- no browser/runtime/visual acceptance was performed after the source failure
- the already returned `single-product.php` and `spatial-flow.css` are not rejected; their current source audit status is retained as PASS pending the repaired `functions.php`

## User acceptance status
The user's manual edit has been inspected, but the returned implementation is **SOURCE REJECTED / CORRECTION REQUIRED** because `functions.php` does not parse.

No runtime or visual user acceptance is claimed.

## Current stop point
`SECTION 03 SOURCE AUDIT FAIL — functions.php orphan duplicate save-field fragment must be removed`

## Exact next action
Issue one bounded manual correction only:
1. In the returned `functions.php`, inside `spatial_flow_save_product_story_admin_fields()`, keep the complete valid `$fields = [ ... ];` block ending with `_sf_section03_repair_body`.
2. Delete only the orphan duplicate fragment from `_sf_placement` through its standalone closing `];` immediately after that valid array.
3. Do not modify `single-product.php` or `spatial-flow.css` during this correction.
4. Return the corrected `functions.php` for identity + PHP syntax + semantic re-audit.
5. Record the re-audit result in GitHub before beginning the locked desktop / 390px / empty-content runtime test set.
