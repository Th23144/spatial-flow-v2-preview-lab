# Step 4E-B2-R5-E4-C2 · Wrapper Width Owner Confirmation

Last updated: 2026-07-17  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## Status

```text
R5-E4-B deployed CSS：Active.
R5-E4-C2 principal geometry measurement：Passed.
R5-E4-C2 wrapper computed-value confirmation：Passed.
R5-E4-C2 exact source-rule locator：Required.
Cart page status：Not done.
```

## User-supplied computed values

```text
wrapper border-box width: 1200px
wrapper content-box width: 1200px
wrapper css_width: 1200px
wrapper max_width: 1200px
wrapper padding-left/right: 0px / 0px
wrapper border-left/right: 0px / 0px
wrapper margin-left/right: 50px / 50px
wrapper box-sizing: border-box
parent entry-content width: 1300px
```

## Exact conclusion

The remaining 4px width deficit is not caused by borders, padding, scrollbar accounting or parent content width.

A direct winning `max-width: 1200px` rule is capping the Cart wrapper:

```text
strict formula result at 1300px client width: 1204px
winning computed max-width: 1200px
rendered result: 1200px
outer gutters: 50px / 50px
```

Therefore the final width mismatch is now fully classified:

```text
expected: 1204px wrapper, 48px / 48px gutters
current: 1200px wrapper, 50px / 50px gutters
blocking owner: direct max-width: 1200px on the Cart wrapper
```

## Accepted geometry retained

```text
form width: 653px
summary width: 467px
column gap: 80px exact
7fr / 5fr relationship: correct within rounding
title → count: 88px exact
count → main row: 120px exact
parent/wrapper inherited padding: removed
```

## Next diagnostic

Before editing CSS, identify the exact matching stylesheet rule and selector that supplies `max-width: 1200px` to:

```text
body.woocommerce-cart .entry-content > .woocommerce
```

The next evidence must include:

```text
- selector text
- max-width declaration
- !important priority, if any
- stylesheet source URL or inline source
- active media condition, if any
```

No CSS change is authorized until that rule source is identified. The correction must replace or override the exact owner inside the existing Canonical Cart responsibility, without changing phone behavior or the accepted 80px / 88px / 120px geometry.