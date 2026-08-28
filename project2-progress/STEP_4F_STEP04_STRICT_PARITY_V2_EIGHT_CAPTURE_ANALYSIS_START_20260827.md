# Step 4F · Step04 strict parity V2 · eight-capture analysis start · 2026-08-27

## State

User returned all eight JSON captures produced by `STEP04_STRICT_PARITY_V2_20260827`.

Returned sets:

- Confirmed reference desktop
- Processing production desktop
- Confirmed reference mobile
- Processing production mobile
- Pending reference desktop
- On-hold production desktop
- Pending reference mobile
- On-hold production mobile

The production pending-family captures report WooCommerce state `on-hold`; they will be paired with the static Pending reference only for shared visual-contract comparison. State-specific textual/dynamic differences will not be treated as strict visual deltas.

## Analysis method

1. Verify capture environment parity (viewport, DPR, visualViewport scale).
2. Pair reference/production by visual family and mode.
3. Programmatically diff captured selectors and computed properties.
4. Separate deterministic CSS/geometry deltas from dynamic content / DOM-count differences.
5. Rank remaining deltas by user-visible impact and likely CSS ownership.
6. Do not declare strict 1:1 PASS unless deterministic parity is achieved.

No source change is authorized by this start record. Analysis only.
