# Step 4E-B2-R5-A1 · Final Visual Gap and CSS Ownership Audit

Last updated: 2026-07-12  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
FIX3 duplicate-price defect：Passed exactly.
Native Cart functional regression：Passed.
Desktop structural gate：Passed.
Mobile structural gate：Passed.
Final strict 1:1 visual acceptance：Reopened / not passed.
Current mode：Audit only; no code changes.
Cart page status：Not done.
```

The earlier statements that desktop and mobile visual work had passed referred only to bounded structure/detail gates. They were not a valid final strict-1:1 acceptance. The user supplied focused desktop and mobile evidence showing multiple visible defects that remain blocking.

## Exact source of truth

```text
assets/css/spatial-flow.css
Uploaded name: spatial-flow(10).css
Size: 813,887 bytes
Logical lines: 27,215
SHA256: 7f55a49bfd82f3c2e9fc5db9b5a37b209ac4bad9f6c0b4f99dcabe23a73643ae
Braces: 4,127 / 4,127
Comments: 405 / 405
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

## Confirmed blocking defects

### A. Order Summary trust icons are mis-sized and misaligned

Observed on desktop and mobile:

```text
- white circular icon shells extend outside the intended icon column
- icon shells intrude into the heading/text area
- the visual relationship between icon, heading and body copy is inconsistent
```

Current ownership conflict:

```text
- historical rules preserve 28–34px min/max dimensions, white circular backgrounds, border radius and shadow
- R2 later changes the grid column to roughly 20–22px and changes width/height without fully resetting inherited min/max/background/shadow declarations
- a broad selector also styles `.sf-cart-inline-icon` together with its parent shell
```

Canonical requirement:

```text
- parent icon shell and inner SVG must have separate selectors
- parent shell must have one explicit size and no inherited min/max conflict
- grid column must match the parent shell width
- icon must be vertically centered against the trust-row text
- desktop and mobile must use the same controlled relationship
```

The V2 reference uses compact inline trust indicators; oversized overlapping circles are not acceptable.

### B. Mobile remove control displays two × glyphs

Observed:

```text
- each mobile circular remove control contains two visible × glyphs
```

Root cause:

```text
- WooCommerce's native remove link already contains a × text node
- R2 also draws a controlled × through `a.remove::after`
- an older mobile selector restores a visible font size on the anchor, so the native glyph and pseudo-element glyph render together
```

Canonical requirement:

```text
- retain exactly one accessible remove link
- suppress the native visible text glyph without removing the link or its accessible label
- draw exactly one controlled ×
- preserve the circular mobile touch target
```

### C. Product thumbnails do not visually fill their allocated frames

Observed on desktop and mobile:

```text
- the thumbnail frame is substantially larger than the visible image content
- the image appears inset instead of filling the intended square slot
```

Current ownership conflict:

```text
- historical Cart layers set multiple competing thumbnail sizes: 64, 72, 74, 82, 86, 104 and 120px
- the current R2 layer sets a fixed link/image size and `object-fit: cover`, but the complete anchor/image ownership is not canonical
- actual product source images may also contain internal canvas whitespace; this must be distinguished from a CSS box-sizing problem before choosing crop/scale behavior
```

Canonical requirement:

```text
- one explicit thumbnail slot size per breakpoint
- anchor and image both fill the slot
- overflow hidden and object-position controlled
- use real WooCommerce images only
- no fabricated replacement imagery
- if internal source-image whitespace remains after CSS box ownership is correct, record it as a media asset issue rather than endlessly increasing CSS specificity
```

### D. Desktop Remove action is covered by the metadata/specification line

Observed:

```text
- the textual Remove action appears beneath or inside the metadata area
- long metadata can visually cover or collide with the action
```

Root cause:

```text
- product-name and product-remove are assigned to the same grid column and row
- metadata is line-clamped while product-name reserves only a fixed bottom padding
- remove is aligned to the bottom of the same grid area
```

Design decision:

```text
Desktop：retain one small textual Remove action because the editorial V2 item-detail language supports a restrained text action, but give it a dedicated reserved line below metadata.
Mobile：retain the single circular top-right × control.
```

The action must never be hidden behind a dynamic metadata string.

### E. Strict 1:1 convergence is still incomplete beyond the four highlighted defects

The current implementation has a stable functional skeleton, but it is not yet close enough for strict final acceptance. R5-A1 must create a side-by-side discrepancy matrix for at least:

```text
- page heading/count vertical rhythm
- desktop 7fr / 5fr frame and whitespace
- product-row image/details/quantity/subtotal proportions
- title wrapping and metadata density
- remove-action placement
- Coupon operation-bar dimensions and spacing
- Order Summary heading, totals, buttons and trust rows
- recommendation heading, card media ratio, typography and bottom alignment
- mobile product-card density and touch-target placement
- mobile Order Summary hierarchy
- spacing before recommendations and Footer
```

Dynamic WooCommerce titles, prices, destinations, totals and real missing-image states are not 1:1 defects and must not be replaced with fabricated values.

## Corrected execution order

### R5-A1 · Visual-gap and ownership audit

```text
Mode：no code changes.
Output：complete visual discrepancy matrix plus selector/declaration ownership matrix.
```

### R5-B · Canonical Cart block replacement

Replace the complete current `R2 + FIX1 + FIX2 + FIX3` range in place with one canonical Cart block that:

```text
- closes all confirmed blocking defects above
- owns the complete final desktop and mobile presentation
- converges toward the V2 reference without copying weak mobile decisions blindly
- preserves real WooCommerce data and native behavior
- does not append another FIX block
```

### R5-B validation gate

Before historical deletion:

```text
- exact file metrics and parser pass
- desktop strict visual comparison
- mobile production-quality visual comparison
- all four confirmed defects resolved
- native Cart regression rechecked
```

### R5-C · Historical cleanup

Only after canonical visual acceptance, delete the legacy Cart stack in independently reversible batches.

### R5-D · Final acceptance

```text
- backend-editability validation
- final desktop/mobile strict visual review
- final native functional regression
- exact baseline record
- binary page-status decision
```

## Hard boundary

```text
- no additional append-only Cart visual snippet
- no declaration that Cart desktop/mobile visual work is complete while these blockers remain
- no historical CSS deletion before the canonical replacement proves full ownership
- no fabricated product imagery, prices, metadata or totals
- Cart remains Not done
```