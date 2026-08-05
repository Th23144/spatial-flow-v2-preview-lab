# Step 4F · R1-D2B2 Clean Restart After Full Revert

Date: 2026-08-05  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. User action

The user fully reverted the failed D2B2 attempt and requested a clean restart.

## 2. Locked delivery method

```text
- provide all replacement code directly in chat code blocks
- do not use downloadable text files for code delivery
- use exact anchored replacements
- each replacement is applied exactly once
- do not refresh until all three replacements are complete
- verify bytes, lines and SHA256 before runtime testing
```

## 3. Clean baseline

The restart assumes the last accepted D2B1 state:

```text
assets/css/checkout-safe5.css
27,327 bytes
829 lines
SHA256: e807b1b63e225d991832e1490c4dfadcec842aeaec6171c85688d58fbe633937
CRLF
no final newline
```

If the user's current file does not match this baseline, D2B2 must stop before applying code.

## 4. Allowed scope

```text
assets/css/checkout-safe5.css only
```

No changes to PHP, JavaScript, shared `spatial-flow.css`, WooCommerce field ownership, Step 02, Step 03, Summary, Coupon, Trust or Crypto.

## 5. Correct post-change target

```text
assets/css/checkout-safe5.css
39,435 bytes
1,146 lines
SHA256: 4224a912090c5be378eae4f3ce0d9de2fbcbc8a631c5b5747b8ac4c4f2b05d00
```

Delta:

```text
+12,108 bytes
+317 lines
```

## 6. Previous failed attempt

The previous uploaded attempt contained duplicate mobile rule groups. That file is rejected and must not be reused.

## 7. Current stop point

```text
D2B2 clean restart: authorized
Next action: apply replacements A, B and C exactly once
Runtime testing: blocked until source integrity matches the target
Checkout: Not done
```
