# Step 4F · R1-D2B2 Live CSS Stale-File Root Cause

Date: 2026-08-06  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Evidence

The user supplied a live CSSOM/network diagnostic from:

```text
http://spatialflow.local/checkout-2-2/
```

The active stylesheet URL is:

```text
/wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/assets/css/checkout-safe5.css?ver=2.7.8
```

The browser fetched that URL successfully and received:

```text
44,163 bytes
HTTP 200
122 CSS rules
```

The expected latest D2B2 stylesheet is:

```text
45,647 bytes
1,355 lines
SHA256: 419f37c5f106ed740e46f0daf3e0367f101d0993f16b5cce25f3ab22ff9bf965
```

## Root cause

The live site is not serving the latest uploaded stylesheet. It is still serving the previous 44,163-byte version.

Therefore:

```text
- the latest opaque Select2 dropdown block is absent from the live CSSOM
- the latest Shipping visual-order block is absent from the live CSSOM
- computed styles remain transparent with z-index 98
- matchingRules is empty because the active stylesheet does not contain the new rules
```

This is not a selector-specificity failure and not a browser-only cache issue. The same stylesheet URL fetched with `cache: no-store` still returned 44,163 bytes, proving the served file itself is stale or the wrong local file was replaced.

## Required correction

Replace the active theme file at exactly:

```text
wp-content/themes/spatial-flow-astra-child-v1.2-main-journal/assets/css/checkout-safe5.css
```

with the verified 45,647-byte file. Do not leave it under a downloaded name such as `checkout-safe5(6).css`.

After replacement:

```text
1. verify active file size is 45,647 bytes
2. hard refresh
3. re-run a one-line fetch size check
4. only then repeat the two dropdown screenshots
```

No new CSS patch is authorized.

## Status

```text
D2B2 dropdown code: prepared
Live installation: stale file, failed
Shared R1 geometry: open
Step 02: blocked
Checkout: Not done
```
