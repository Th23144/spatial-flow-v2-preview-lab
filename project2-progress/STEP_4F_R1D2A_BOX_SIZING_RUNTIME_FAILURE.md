# Step 4F · R1-D2A Box-Sizing Runtime Failure

Date: 2026-08-04  
Repository: `Th23144/spatial-flow-v2-preview-lab`

## 1. Evidence

The user supplied a new live 360px Step-01 screenshot after applying the issued box-sizing correction to `assets/css/checkout-safe5.css`.

Expected post-edit integrity target:

```text
23,816 bytes / 682 lines
SHA256: 395ccd6d3b07e6c03e8f43eb2e812e5f942889f40fa3543f84ded1419cc77fba
```

## 2. Runtime result

The screenshot confirms the previously accepted D2A improvements remain intact:

```text
- Intro / progress remains correct
- Address form remains before Order Summary
- Continue remains before Return to cart
- no visible horizontal overflow is introduced
```

However, the target body gutter is still not achieved:

```text
- the Address/form warm outer surface still appears full-bleed or nearly full-bleed
- the primary Continue action still appears full-bleed or nearly full-bleed
- the Order Summary warm outer surface still appears full-bleed or nearly full-bleed
```

The visible result is materially unchanged with respect to the unresolved gutter defect.

## 3. Corrected diagnosis

The prior diagnosis that descendant `content-box` sizing was consuming the reserved shell gutter is not supported by runtime evidence.

```text
Box-sizing hypothesis: disproved / withdrawn
Issued box-sizing correction: did not resolve the defect
D2A body gutter: still failed
```

The correction did not visibly damage order, content, fields or overflow, so immediate rollback is not required solely from the screenshot. It must not be treated as the final gutter solution.

## 4. Next evidence required

No further CSS guess should be issued from screenshots alone.

The next bounded diagnostic must inspect the actual runtime geometry and cascade for:

```text
.sf-safe5-shell
.sf-safe5-main
.sf-safe5-view.is-active
.sf-safe5-section-card
.sf-safe5-actions
.sf-safe5-summary
.sf-safe5-summary-card
```

Required values:

```text
bounding rectangle left / right / width
computed width / max-width
margin-left / margin-right
padding-left / padding-right
box-sizing
position / display
```

This will determine whether the full-bleed surface is caused by the shell, an intermediate view wrapper, a broader legacy Checkout rule, or another computed-style override.

## 5. Status

```text
R1-D2A body order: passed
R1-D2A action order: passed
R1-D2A box-sizing correction: runtime failed
R1-D2A body gutter: open
R1-D2B: blocked
Checkout: Not done
```
