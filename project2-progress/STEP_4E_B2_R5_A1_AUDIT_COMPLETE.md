# Step 4E-B2-R5-A1 · Final Visual Gap and CSS Ownership Audit — Complete

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
Audit mode：Completed / no code changes.
Final strict desktop 1:1：Not passed.
Final mobile quality review：Not passed.
Native Cart regression：Previously passed.
Append-only Cart refinement：Frozen.
Next executable step：Step 4E-B2-R5-B canonical in-place replacement.
Cart page status：Not done.
```

## 1. Exact source of truth

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(10).css
Size: 813,887 bytes
Logical lines: 27,215
SHA256: 7f55a49bfd82f3c2e9fc5db9b5a37b209ac4bad9f6c0b4f99dcabe23a73643ae
Opening / closing braces: 4,127 / 4,127
Opening / closing comments: 405 / 405
CSS parser errors: 0
```

Unchanged PHP:

```text
functions.php
Version: 2.7.8
Size: 550,884 bytes
Lines: 10,256
SHA256: dbd7cae7cddf3fe812eaadba2b1fe452bcea7566fc4af21a91aa44774c74404d
```

## 2. Exact Cart CSS ranges

### Historical stack

```text
START marker: /* === Cart Visual 1 START ===
END marker:   /* === Cart Visual 3 REAL WOOCOMMERCE RECOMMENDATIONS END === */
Current lines: 3,628–7,425
Size: 117,141 bytes
Logical lines: 3,798
SHA256: a30b706fbeec9701b8fedd33471875e89384eeb61e1843a6798f69446880d403
Braces: 456 / 456
Comments: 73 / 73
```

### Temporary validated R2/FIX stack

```text
START marker: /* === Step 4E-B2-R2 · Cart V2 Consolidation Layer START ===
END marker:   /* === Step 4E-B2-R2 · Cart V2 Consolidation Layer END === */
Current lines: 25,350–26,819
Size: 46,765 bytes
Logical lines: 1,470
SHA256: de89193566e99219e74f34f1c5e3ede018c7c0e81ca1bc35e166fc334fa80414
Braces: 209 / 209
Comments: 8 / 8
```

R5-B will replace this complete R2/FIX range in place. It will not append a new block elsewhere.

## 3. Reference geometry retained as canonical guidance

Desktop V2 reference targets:

```text
Main max width：1,440px
Page side gutters：48px
Main columns：7fr / 5fr
Column gap：80px
Heading top padding：56px
Heading bottom separator：32px below count
Product image slot：120px square
Product-row gap：28px
Summary panel padding：40px 36px
Recommendation section vertical padding：80px
Recommendation desktop grid：4 columns / 40px gap
```

Real WooCommerce titles, metadata, prices, totals, destinations and missing-image states remain authoritative and may differ from static sample content.

## 4. Final visual discrepancy matrix

| Area | Desktop current state | Mobile current state | Final decision |
|---|---|---|---|
| Heading and live count | Structure is correct, but vertical rhythm and width relationship require final reference comparison. | Readable and stable; preserve stronger phone spacing rather than literal static compression. | Canonical block owns all spacing and type. |
| Main 7fr / 5fr frame | Centered and functional. | Correctly collapses to one column. | Preserve; remove legacy width ownership. |
| Product thumbnail | Slot exists, but visible image is inset and does not convincingly fill it. | Same defect. | One slot size per breakpoint; anchor and image both fill; overflow hidden; explicit object position. |
| Product title and metadata | Dynamic data fits, but metadata density and title wrapping need controlled limits. | Compact but readable; must avoid crowding remove control. | Canonical type scale and line limits. |
| Desktop Remove | Text action collides with or is covered by metadata. | Not applicable. | Dedicated action row below metadata. |
| Mobile Remove | Not applicable. | Two visible × glyphs. | One native accessible link; one controlled × only. |
| Quantity and subtotal | Structurally correct. | Structurally correct; duplicate price already resolved. | Preserve native behavior and final alignment. |
| Coupon / Update Cart | Functional and stable; dimensions still require strict visual alignment. | Functional stacked layout. | Canonical desktop row and phone stack. |
| Order Summary heading/totals | Structure is present; hierarchy and spacing require final refinement. | Light title strip remains visually weak. | Canonical panel/title/totals hierarchy. |
| Summary trust rows | Icon circles overflow the icon column and intrude into copy. | Same defect, more obvious. | Separate shell/SVG ownership and matched grid column. |
| Recommendations | Four real products and links are correct; card image ratio, text height and footer alignment remain to be normalized. | Good single-column flow but spacing is generous. | Canonical media ratio and card rhythm; retain real missing-image placeholder. |
| Footer transition | Stable. | Stable, but recommendation-to-footer spacing needs final review. | Adjust only inside canonical Cart block. |

## 5. Selector/declaration responsibility matrix

| Component | Historical ownership still present | Temporary R2/FIX ownership | Conflict / dependency | Canonical action |
|---|---|---|---|---|
| Astra outer frame | Multiple older Cart width/grid rules. | `.site-content .ast-container`, `#primary`, `.site-main`, `article`, `.entry-content`, `.entry-content > .woocommerce`. | FIX1 had to release additional ancestors. | Keep one complete ancestor reset inside canonical block. |
| Heading | No historical ownership of `.sf-cart-v2-heading`. | R2 owns title/count. | No dependency on legacy required. | Preserve and refine in canonical block. |
| Product-row grid | Historical table/card layouts and desktop width fixes. | R2 owns CSS grid row and FIX2 column proportions. | Old td widths/paddings remain specificity competitors. | Canonical selectors must fully reset every Cart td and row. |
| Thumbnail | Historical sizes include 64, 72, 74, 82, 86, 104 and 120px. | R2 sets 120px desktop, 104px narrower desktop, 84px phone. | Link/img ownership is incomplete and td constraints can still influence the result. | Own td, anchor and img separately; one size per breakpoint. |
| Product metadata | Historical `.sf-cart-item-meta` font and spacing. | R2/FIX2 owns font, line clamp and width. | Desktop Remove shares the same grid region. | Reserve a real action row below metadata; no overlap. |
| Desktop Remove | Historical circular remove rules and width constraints. | R2 suppresses native glyph and draws `Remove` via `::after`. | Same row/column as product-name; fixed padding is insufficient for dynamic metadata. | Give `td.product-remove` its own grid row/area. |
| Mobile Remove | Historical mobile rule restores 30px control/font behavior. | R2 draws a second × with `::after`. | Native text × plus pseudo-element × both render. | Set visible anchor text to zero-size/transparent and draw one pseudo glyph. |
| Quantity | Historical pill controls. | R2 owns square editorial control. | Current result is stable. | Preserve canonical square control and reset inherited radius/shadow. |
| Coupon | Historical 2-D.2 through 2-D.8 contain several overlapping flex/grid/display-contents fixes. | R2/FIX2 owns current desktop row and mobile stack. | Old rules remain numerous but current R2 result is stable. | Canonical owns all descendants; delete old layers later. |
| Cart totals | Historical card radius/shadow/padding. | R2/FIX2 owns beige editorial panel. | Current structure is stable. | Canonical reset and final hierarchy. |
| Trust rows | Historical 34px shell, white background, radius, shadow and min/max sizes; mobile uses 28px. | R2 changes grid to 20–22px and width/height to 18px but groups parent shell with `.sf-cart-inline-icon`. | Inherited min/max/background/shadow survive and overflow. | Separate parent shell from SVG; explicitly reset min/max/background/radius/shadow. |
| Recommendations | Historical dark-card product layer and mobile refinements. | FIX1 restores open light section; FIX2 adjusts cards. | Legacy specificity previously overrode R2. | Canonical uses equal-or-higher complete selector ownership, then legacy Cart Visual 3 is deleted last. |
| Notices | Separate Step 4E Cart Notice Toast block. | Not part of R2/FIX. | Must remain independent. | Do not move or delete. |

## 6. Confirmed declarations still inherited from historical CSS

The following inherited declarations are not safely owned by the temporary R2 stack and explain the visible defects:

```text
1. `.sf-cart-summary-trust__icon`
   - min-width / min-height / max-width / max-height
   - white circular background
   - border-radius
   - box-shadow

2. mobile `td.product-remove a.remove`
   - restored visible font/text behavior
   - competing fixed dimensions

3. thumbnail-related table cells and images
   - multiple competing td widths and image sizes across desktop/mobile breakpoints
   - old border-radius declarations

4. mobile product-card surfaces
   - historical row padding/radius/shadow remain part of the current phone card presentation

5. recommendation specificity
   - historical `sf-cart-next-steps--products` and product-card selectors remain capable of overriding weaker canonical selectors unless fully reset
```

## 7. Historical declarations fully superseded in purpose

These historical responsibilities can be removed after the canonical block proves ownership:

```text
- old Cart page two-column frame and width fixes
- old table header/row/card desktop structure
- old quantity pill styling
- old Coupon overlap/hotfix chain
- old cart-total rounded white-card presentation
- old service-row presentation that is no longer hooked
- old three-product recommendation layout and dark product-card shell
- old duplicate mobile price presentation
```

Deletion is not authorized until R5-B passes strict desktop/mobile/functional validation.

## 8. Canonical design decisions locked for R5-B

```text
Desktop frame：7fr / 5fr, 80px wide-screen gap, responsive reduction below 1280px.
Desktop thumbnail：120px nominal square; 104px on narrower desktop.
Mobile thumbnail：84px square with anchor/img full ownership.
Desktop Remove：small text action on a dedicated reserved row below metadata.
Mobile Remove：one 32px circular touch target with exactly one × glyph.
Trust icon shell：20px desktop / 22px mobile; no background, shadow or oversized circle.
Trust SVG：14px desktop / 14px mobile, centered independently.
Summary title：integrated into beige panel on all breakpoints; no white inset strip.
Recommendations：four desktop columns; one mobile column; real WooCommerce media only.
Mobile static reference：guidance only; production-quality spacing and touch targets take precedence.
```

## 9. Exact R5-B replacement boundary

Replace exactly:

```text
START:
/* === Step 4E-B2-R2 · Cart V2 Consolidation Layer START ===

END:
/* === Step 4E-B2-R2 · Cart V2 Consolidation Layer END === */
```

The replacement must remain at the same location immediately before:

```text
/* === Step 4E Cart Notice Toast START ===
```

Independent rollback: save the complete current 46,765-byte R2/FIX range before replacing it. Reinsert only that range at the same marker boundary if the canonical block fails.

## 10. Exact future historical deletion batches

### R5-C1 · Cart Visual 1 through 1.4.1

```text
Current lines: 3,628–4,839
Deletion size: 35,692 bytes
Logical lines: 1,212
SHA256: 4ca2a01bba053a9e04a509474d27122d2f77d78a50927b932a55520da64253b2
Braces: 154 / 154
Comments: 29 / 29
```

### R5-C2 · Cart Visual 2-D through 2-D.8

```text
Current lines: 4,841–6,968
Deletion size: 67,757 bytes
Logical lines: 2,128
SHA256: 0dbddf8801c08d5b73193d5dc2acd3de5d423aaac3dc05f2e9d5ad8df04d7f7c
Braces: 232 / 232
Comments: 33 / 33
```

### R5-C3 · Cart Visual 2-E

```text
Current lines: 6,971–7,364
Deletion size: 11,603 bytes
Logical lines: 394
SHA256: e6eb3dcca65703598f78b238820e82ff6646fb9ec1c0e9a75e2f82d1cd7bd8ec
Braces: 60 / 60
Comments: 9 / 9
```

### R5-C4 · Cart Visual 3

```text
Current lines: 7,366–7,425
Deletion size: 2,082 bytes
Logical lines: 60
SHA256: 117063b63334fbb9ec72cce6ec87a360a49209673bfd3473c931f33c7775c147
Braces: 10 / 10
Comments: 2 / 2
```

Each deletion remains independently reversible and must be file-validated and browser-tested before the next batch.

## 11. R5-A1 decision

```text
R5-A1：Passed as an audit.
No CSS was changed.
The current page is not visually complete.
The current R2/FIX stack must not receive another appended FIX block.
Next：R5-B one canonical in-place replacement.
Cart remains Not done.
```
