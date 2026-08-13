# STEP 4F — Coupon Editorial Row V3 Patch Prep — 2026-08-13

Status: PREPARED

## Trigger
The V2 compact inline coupon utility successfully removed the invisible-frame effect, but visual review showed the control became too small and visually timid relative to the Order Summary editorial hierarchy.

## Decision
Do not reintroduce box/border treatment. Keep Coupon as a non-reference functional extension, but redesign the collapsed trigger as a full-width editorial row:

- sentence-case serif label (`Have a promo code?`)
- approximately 15px desktop / 14px mobile
- `+ / −` aligned to the far right in the clay accent
- no background, no top/bottom border, no shadow
- expanded input panel remains full width
- no new tail FIX block; modify the existing Coupon owner in place

## Live source baseline
`assets/css/checkout-safe5.css`

- bytes: 137,735
- logical lines: 4,492
- SHA256: `8b18b26053281d21d49ad1cf47fa95df2ed3a737da0848fe507264805631925b`

## Prepared target
- bytes: 137,690
- logical lines: 4,493
- SHA256: `cfe1a06961b437797b80c27751c0c90e5e9bdd8ec65e05cc77632bbf7b6477fb`
- braces: 530 / 530
- comments: 24 / 24
- CSS parser errors: 0

This change is a visual-design refinement for the Coupon extension and is not counted as a strict-reference 1:1 mismatch because the reference page has no coupon feature.
