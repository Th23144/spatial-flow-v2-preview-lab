# Project 2 · Checkout SAFE5 · Coupon Extension Visual Cleanup Patch Prep · 2026-08-12

Status: PREPARED · NON-REFERENCE DESIGN EXTENSION

## Scope
File: `assets/css/checkout-safe5.css` only.

Current accepted baseline:
- 136,322 bytes
- 4,455 logical lines
- SHA256 `56a2dacaef912c95024ef5a437003178d954731f15218f467b6abcac4b648774`
- CRLF
- no final newline

## Design decision
The coupon row is not present in the static reference and is therefore not a strict 1:1 item. It remains a required WooCommerce feature extension.

Visual rule:
- preserve the existing Order Summary header divider because it belongs to the reference language;
- remove the coupon container's own lower divider so the closed state no longer reads as a framed strip;
- remove the expanded coupon panel's internal top divider;
- remove the coupon result message's internal divider;
- preserve the input and Apply button borders as necessary control boundaries;
- use whitespace, not nested framing, as the extension's primary separation mechanism.

## Exact CSS owner changes
1. `.sf-safe5-coupon`
   - margin `0 0 24px` -> `0 0 20px`
   - padding `14px 0` -> `14px 0 8px`
   - remove `border-bottom`
2. `.sf-safe5-coupon-panel`
   - margin-top `14px` -> `12px`
   - padding-top `14px` -> `0`
   - border-top -> `0`
3. `.sf-safe5-coupon-message`
   - margin-top `12px` -> `10px`
   - padding-top `10px` -> `0`
   - remove border-top

No new FIX block. Modify only existing coupon owners.

## Expected target identity
- 136,170 bytes
- 4,453 logical lines
- SHA256 `c6c2926c44956d943dd188343b9e839833234eaf7359375e4ffa6ccfa62244c2`
- braces 527 / 527
- comments 24 / 24
- CRLF
- no final newline

## Expected result
Collapsed coupon state reads as one lightweight action row beneath the reference Order Summary header divider, with no second framing line below it. Expanded state relies on the input/button boundaries and whitespace rather than nested divider bands.
