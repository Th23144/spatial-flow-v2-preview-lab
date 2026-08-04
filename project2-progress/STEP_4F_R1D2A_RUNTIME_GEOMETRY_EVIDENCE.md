# Step 4F · R1-D2A Runtime Geometry Evidence

Date: 2026-08-04  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Evidence source

User-supplied read-only browser-console geometry output at a 360px viewport after applying the D2A body-order changes and the bounded `box-sizing` correction.

```text
Viewport innerWidth: 360
Viewport clientWidth: 360
Checkout status: Not done
```

## 2. Measured geometry

The runtime output confirms:

| Selector | Left | Right | Width | Computed max-width |
|---|---:|---:|---:|---|
| `form.checkout.sf-safe5-form` | 0 | 360 | 360 | none |
| `.sf-safe5-shell` | 0 | 360 | 360 | 100% |
| `.sf-safe5-main` | 0 | 360 | 360 | 100% |
| `.sf-safe5-view.is-active` | 0 | 360 | 360 | none |
| `.sf-safe5-section-card` | 0 | 360 | 360 | 100% |
| `.sf-safe5-actions` | 0 | 360 | 360 | 100% |
| `.sf-safe5-summary` | 0 | 360 | 360 | 100% |
| `.sf-safe5-summary-card` | 0 | 360 | 360 | 100% |

All inspected elements report:

```text
transform: none
position: static except as already expected
no measured horizontal overflow beyond 360px
```

## 3. Corrected root-cause classification

The previous hypothesis that descendant `content-box` sizing consumed an otherwise-correct shell gutter is disproved.

The actual runtime evidence shows:

```text
.sf-safe5-shell itself is full viewport width
left = 0
right = 360
computed width = 360px
computed max-width = 100%
```

Therefore:

```text
- the expected mobile shell width `min(calc(100% - 44px), 1180px)` is not winning in the final cascade
- descendant cards and actions are following the already-full-width shell
- box-sizing was not the primary cause
- another matching CSS declaration, source order, or `!important` rule is overriding the intended shell width/max-width/margins
```

## 4. Evidence-backed status

```text
D2A body order: passed
D2A action order: passed
D2A body gutter: failed
Box-sizing root-cause hypothesis: rejected
Actual fault boundary: final computed style on `.sf-safe5-shell`
```

## 5. Required next diagnostic

Do not issue another CSS correction by inference.

The next read-only browser diagnostic must enumerate every accessible stylesheet rule matching `.sf-safe5-shell` that declares any of:

```text
width
max-width
margin-left
margin-right
margin
```

For each matching rule, capture:

```text
selector
property value
!important state
stylesheet URL or inline sheet index
rule order
media-condition match state
```

Only after the winning declaration is identified may the next bounded anchored replacement be issued.

## 6. Current stop point

```text
Runtime geometry evidence: recorded
Root cause narrowed to shell-level CSS cascade override
No further CSS change authorized yet
R1-D2A: partial / blocked
Checkout: Not done
```
