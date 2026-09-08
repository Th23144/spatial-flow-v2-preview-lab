# Step 4D Reopen B4.2 — Mobile Editorial Progressive Disclosure Start — 2026-09-08

## Trigger
Current B4.1 behavior is acceptable on desktop: long Section 02 Narrative stays inside a bounded scroll area and no longer stretches the image. On 390px mobile, however, the same long narrative expands naturally and makes Section 02 excessively tall, pushing following content too far down the page.

## Accepted direction
Implement mobile-only progressive disclosure for Section 02 Narrative:
- desktop behavior remains unchanged;
- <=767px only;
- short narratives remain fully visible and show no toggle;
- long narratives initially show a bounded preview;
- only the Narrative participates in the collapse/expand behavior;
- Section 02 lead, context line, and READING / PAIRING / READS remain outside the collapsed area;
- expanded state shows the complete narrative without an internal scroll area;
- control copy: `READ FULL NOTE +` / `CLOSE NOTE −`;
- no WooCommerce product/variation/cart logic changes;
- no backend authoring changes;
- no character-count restriction;
- if JS fails, content must remain fully readable (progressive enhancement).

## Implementation plan
Files only:
1. `assets/css/spatial-flow.css`
   - mobile preview/collapsed/expanded presentation and editorial toggle styling.
2. `assets/js/spatial-flow.js`
   - detect mobile overflow and inject toggle only when needed; toggle accessible state.
3. `functions.php`
   - cache-busting only: `SPATIAL_FLOW_CHILD_VERSION 2.7.33 -> 2.7.34`.

No `woocommerce/single-product.php` change is required. The toggle will be inserted by JS only after successful overflow detection, preserving graceful degradation.

## Validation gate
Before runtime testing, returned source must pass:
- PHP syntax for `functions.php`;
- JS structural review around main `init()` and new setup function;
- CSS block/brace review and exact scope audit.

Runtime acceptance, once source passes:
- desktop long narrative remains unchanged from B4.1;
- 390px long narrative shows collapsed preview + READ FULL NOTE;
- expansion reveals all text; collapse restores preview;
- short narrative shows no unnecessary toggle;
- READING / PAIRING / READS remain visible in both states.
