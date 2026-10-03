# Final Production Wishlist — H03 Authority Final-Tuning Instruction Ready

Date: 2026-10-03
Project: Spatial Flow V2 / Project 2

## Target
`assets/css/spatial-flow.css` only.

## Verified baseline
- bytes: 608,459
- logical lines (splitlines): 21,649
- SHA256: `9d0d9edaa44cb50ffe34d15d58f59b37c179bc0d5537d605af6b96a0f0d73672`

## Exact non-color authority corrections
1. H03 intro top padding: 46px -> 32px.
2. H03 hero title: add `font-weight: 300` override without changing empty-state title weight.
3. H03 intro-side max-width: 34em -> 280px.
4. H03 intro-side typeface: Inter -> Cormorant Garamond.
5. H03 toolbar top/bottom border token: ink -> rule.

No palette token change.
No PHP change.
No JS change.
No YITH/Woo change.

## Simulated output
- bytes: 608,528
- logical lines (splitlines): 21,652
- SHA256: `8485311d485cdcb6771350927b98fb0ef3880c9fd1de86708fef1649bb3eb5ed`
- byte delta: +69
- line delta: +3
- CSS brace delta: 0

## Next gate
User returns the modified CSS for exact source verification. Then hard-refresh Local and compare desktop against the static authority link before mobile review.

Status: FINAL-TUNING INSTRUCTION = READY.