# Project 2 · Step 4D-REOPEN · Related Products runtime rejection · 2026-09-11

## User verdict

The fresh desktop and 390px runtime screenshots are **REJECTED** for strict 1:1 acceptance.

The user explicitly states that the current live result is still not 1:1 against the static reference.

## Screenshot evidence

Fresh runtime evidence shows that the broad direction is closer to the reference (open editorial layout, 4:5 media, no white card shell, heading/link restored), but material mismatches remain.

Observed current-live differences include:

- desktop section is wider than the static reference and the four product columns therefore read too large / too spread;
- heading typography/casing is not reference-faithful (`Pieces Of A Similar Weight.` vs reference `Pieces of a similar weight.`);
- the desktop image/card scale and horizontal rhythm do not yet match the reference closely enough;
- the reference's SKU + edition metadata row is absent on the live products where those backend values are not populated;
- the reference's bottom italic placement/editorial note row is absent on the live products where `_sf_placement` is not populated;
- mobile currently renders large full-width stacked products; visual acceptance is not granted until desktop reference matching and the data-dependent metadata issue are resolved;
- no claim of 1:1 or closure is permitted from the current screenshots.

## Product-truth boundary

Strict 1:1 visual matching must not be achieved by fabricating SKU, edition or placement-note content.

The template already reads real dynamic owners:

```text
WooCommerce SKU
_sf_piece_edition
_sf_placement
```

If the active related products do not contain those values, the correct remediation is to distinguish:

```text
A. CSS/layout mismatch
B. missing real backend product data needed to reproduce the reference rows
```

Do not hardcode the static-reference sample metadata into production.

## Status

```text
Related Products source gate: PASS
Related Products desktop runtime: FAIL / REJECTED
Related Products 390px runtime: NOT ACCEPTED
Related Products strict 1:1: NOT DONE
Gift CTA: PAUSED
Single Product overall: Not done
```

## Next action

Perform a fresh post-runtime audit against the returned source and static reference, then freeze a correction plan that separately addresses:

1. section/container width and spacing;
2. heading casing/typography;
3. image/card sizing and editorial rhythm;
4. dynamic metadata/placement rows and the exact backend population requirement;
5. mobile behavior after desktop target is corrected.

No further production edit is authorized until that correction audit is recorded.
